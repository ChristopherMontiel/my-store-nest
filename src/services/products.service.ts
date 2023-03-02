import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entiti';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Producto X',
      description: 'Un producto increíble',
      price: 1500,
      stock: 1,
      image: 'http://www.productox.com/foto.jpg',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  //La clave para actualizar en este caso será el Id
  update(id: number, payload: UpdateProductDto) {
    //Primero validar si existe el id:
    const product = this.findOne(id);
    if (product) {
      const index: number = this.products.findIndex((item) => item.id === id);
      //Forma 1: no conviene hacerlo asi ya que reemplaza todo el objeto,
      //eliminando los atributos que no se hayan enviado
      //this.products.splice(index, 1, payload);
      //Forma 2 y correcta:
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index: number = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}

import {
  Controller,
  Get,
  //Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  //ParseIntPipe,
  //HttpStatus,
  //HttpCode,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //forma 2 de recibir parámetros:
  @Get('filter')
  getProductFilter() {
    return {
      message: 'soy un filter',
    };
  }

  //forma 1 de recibir parámetros:
  /*@Get('products/:productId')
  getProduct(@Param() params: any){
    return `producto ${params.productId}`;
  }*/

  //forma 2 de recibir parámetros:
  @Get(':productId')
  //@HttpCode(HttpStatus.OK)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  //parametros query (forma 1)
  /*@Get('products')
  getProducts(@Query() params: any){
    const { limit, offset } = params;
    return `limit=> ${limit} y offset=> ${offset}`;
  }*/

  //parametros query (forma 2)
  /*   @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `limit=> ${limit} - offset=> ${offset} - brand=> ${brand}`,
    };
  } */

  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(+id);
  }
}

import { Controller, Get, Param, Query } from '@nestjs/common';
import { off } from 'process';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndPoint() {
    return 'wasaaa!!';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  //forma 2 de recibir parámetros:
  @Get('products/filter')
  getProductFilter() {
    return `soy un filter`;
  }

  //forma 1 de recibir parámetros:
  /*@Get('products/:productId')
  getProduct(@Param() params: any){
    return `producto ${params.productId}`;
  }*/

  //forma 2 de recibir parámetros:
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `producto ${productId}`;
  }

  //Forma de recibir 2 parametros, en este caso un id de categoria y otro de producto:
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `producto ${productId} y categoría ${id}`;
  }

  //parametros query (forma 1)
  /*@Get('products')
  getProducts(@Query() params: any){
    const { limit, offset } = params;
    return `limit=> ${limit} y offset=> ${offset}`;
  }*/

  //parametros query (forma 2)
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `limit=> ${limit} - offset=> ${offset} - brand=> ${brand}`;
  }
}

import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
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
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('productId') productId: string) {
    return {
      message: `producto ${productId}`,
    };
  }

  //parametros query (forma 1)
  /*@Get('products')
  getProducts(@Query() params: any){
    const { limit, offset } = params;
    return `limit=> ${limit} y offset=> ${offset}`;
  }*/

  //parametros query (forma 2)
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `limit=> ${limit} - offset=> ${offset} - brand=> ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}

import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //Forma de recibir 2 parametros, en este caso un id de categoria y otro de producto:
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return {
      message: `producto ${productId} y categoría ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
}

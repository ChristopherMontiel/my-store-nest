import { Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear usuario',
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

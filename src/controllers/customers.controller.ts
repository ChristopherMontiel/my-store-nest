import { Controller, Post, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
}

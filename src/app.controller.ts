import { Controller, Get } from '@nestjs/common';
//import { off } from 'process';
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
}

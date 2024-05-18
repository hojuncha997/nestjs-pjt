import {Request} from 'express'
import { Controller, Get, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Get('/hello')
  getHello(@Req() req: Request): string {
    return this.appService.getHello();
  }



  // @Get("redirect/docs")
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   return {url: 'https://docs.nestjs.com/v5/'}
  // }
  // // 리다이렉트 테스트: http://localhost:3000/redirect/docs?version=5 를 입력하면 https://docs.nestjs.com/v5로 리다이렉트

}

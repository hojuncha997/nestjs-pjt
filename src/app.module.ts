import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [ApiController, AppController, UsersController ],
  providers: [AppService],
})
export class AppModule {}


// 동일한 라우팅 경로를 가진 엔드포인트가 존재할 경우
// ApiController가 AppController보다 먼저 처리되도록 배열 순서 수정
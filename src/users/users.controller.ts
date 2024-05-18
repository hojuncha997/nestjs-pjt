import { Controller, Post, Body } from '@nestjs/common';

export class CreateUserDto {
    name: string;
    email: string;
}

@Controller('users')
export class UsersController {

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        const { name, email } = createUserDto;
        return `유저를 생성했습니다. 이름: ${name}, 이메일: ${email}`;
    }
}

/*
$ curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "test_NAME", "email": "test_EMAIL@gmail.com"}'
유저를 생성했습니다. 이름: test_NAME, 이메일: test_EMAIL@gmail.com

GET 요청에서 서버에 전달할 데이터를 포함할 때는 일반적으로 요청 주소에 포함시킨다.
예를 들어 유저 목록을 가져오는 요청은 GET /users?offset=0&limit=10 과 같이 페이징 옵션이
포함되도록 구성할 수 있다. offset은 데이터 목록 중 건너 뛸 개수를 의미하고 limit은 offset 이후
몇 개의 데이터를 가져올지 지정한다. 이 두 쿼리파라미터를 @Query DTO 방식으로 묶어 처리가능하다.

export class GetUserDto {
    offset: number;
    limit: number;
}

*/
import { Controller, Get, HostParam } from '@nestjs/common';

// @Controller('api.example.com')  // 하위 도메인 요청 처리 설정
@Controller('api.localhost')
export class ApiController {
    @Get() // 같은 루트 경로
    index(): string {
        return 'Hello, Api' // 다른 응답
    }
}

// @Controller({host:':version.api.localhost'})
// export class ApiController {
//     @Get()
//     index (@HostParam('version') version: string): string {  //@HostParam을 받으면 서브도메인을 변수로 받을 수 있다.
        
//         return `Hello, Api ${version}`;
//     }
// }

/* 
    로컬에서 테스트를 위해 하위 도메인을 api.localhost로 지정하면 curl명령어가 제대로 동작하지 않는다.
    이는 api.localhost가 로컬 요청을 받을 수 있도록 설정돼 있지 않기 때문이다.
    /etc/hosts 파일의 마지막에 127.0.0.1 api.localhost를 추가하고 서버를 다시 구동하면 된다.
    윈도우도 마찬가지.

    
# localhost name resolution is handled within DNS itself.
#       127.0.0.1       localhost
#       ::1             localhost
        127.0.0.1 api.localhost
        127.0.0.1 v1.api.localhost

        ..

        $ curl http://api.localhost:3000
        Hello World!

        $ curl http://v1.api.localhost:3000
        Hello, Api v1

*/


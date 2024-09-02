import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('routes/create')
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}

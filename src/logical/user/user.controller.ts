import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/login')
  async getUserInfo(@Body() body: any): Promise<any | undefined> {
    return await this.userService.findOne(body.username);
  }
  @Post('/register')
  async create(@Body() body: any): Promise<any | undefined> {
    return await this.userService.register(body);
  }
}

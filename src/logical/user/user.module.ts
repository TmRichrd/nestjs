import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[JwtService,UserService],
  exports:[UserService,UserController]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { JwtService } from '@nestjs/jwt';
import { UserService } from '../logical/user/user.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  // imports:[JwtService,UserService]
})
export class AuthModule {}

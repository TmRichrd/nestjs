import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './logical/user/user.service';
import { UserController } from './logical/user/user.controller';
import { CustomerPageController } from './articles/customer-page/customer-page.controller';
import { CustomerPageService } from './articles/customer-page/customer-page.service';
import { TestModule } from './tests/test/test.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [TestModule, AuthModule, CustomerModule],
  controllers: [AppController, UserController, CustomerPageController],
  providers: [AppService, UserService, CustomerPageService],
})
export class AppModule {}

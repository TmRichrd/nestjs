import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/save')
  create(@Body() reqBody) {
    return this.customerService.create(reqBody);
  }

  @Get('/list')
  findAll() {
    return this.customerService.findAll();
  }

  @Get('/detail')
  findOne(@Query() query) {
    return this.customerService.findOne(query.id);
  }

  @Post('/update')
  update(@Query() query) {
    return this.customerService.update(query);
  }

  @Get('/remove')
  remove(@Query() query) {
    return this.customerService.remove(query.id);
  }
}

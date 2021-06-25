import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPageController } from './customer-page.controller';

describe('CustomerPageController', () => {
  let controller: CustomerPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerPageController],
    }).compile();

    controller = module.get<CustomerPageController>(CustomerPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPageService } from './customer-page.service';

describe('CustomerPageService', () => {
  let service: CustomerPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerPageService],
    }).compile();

    service = module.get<CustomerPageService>(CustomerPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

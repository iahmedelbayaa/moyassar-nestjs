import { Test, TestingModule } from '@nestjs/testing';
import { MoyassarController } from './moyassar.controller';

describe('MoyassarController', () => {
  let controller: MoyassarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoyassarController],
    }).compile();

    controller = module.get<MoyassarController>(MoyassarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

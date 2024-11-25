import { Test, TestingModule } from '@nestjs/testing';
import { MoyassarService } from './moyassar.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

// Mock axios or HTTP request for the test
jest.mock('axios');
import axios from 'axios';

describe('MoyassarService', () => {
  let service: MoyassarService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: [() => ({ MOYASSAR_API_KEY: 'test_api_key' })], // Mock your .env values here
          isGlobal: true,
        }),
        HttpModule, // This is optional if you are using axios or HttpModule
      ],
      providers: [MoyassarService],
    }).compile();

    service = module.get<MoyassarService>(MoyassarService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should access API key from ConfigService', () => {
    const apiKey = configService.get<string>('MOYASSAR_API_KEY');
    expect(apiKey).toBe('test_api_key'); // Verifying if the value matches the mocked one
  });

  it('should create payment and make a request', async () => {
    const paymentResponse = { data: { id: '1234', status: 'success' } };
    (axios.post as jest.Mock).mockResolvedValue(paymentResponse);

    const response = await service.createPayment(100, 'USD');
    expect(response.data.id).toBe('1234');
    expect(response.data.status).toBe('success');
    expect(axios.post).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Object),
      expect.objectContaining({
        headers: { Authorization: 'Bearer test_api_key' },
      }),
    );
  });

  it('should fetch payment info successfully', async () => {
    const paymentInfo = {
      data: { id: '1234', amount: 100, status: 'completed' },
    };
    jest.spyOn(axios, 'get').mockResolvedValue(paymentInfo);

    const response = await service.getPaymentInfo('1234');
    expect(response.data.id).toBe('1234');
    expect(response.data.status).toBe('completed');
  });
});

import { Controller, Get, Param } from '@nestjs/common';
import { MoyassarService } from './moyassar.service';

@Controller('moyassar')
export class MoyassarController {
  constructor(private readonly moyassarService: MoyassarService) {}

  @Get('payment/:id')
  async getPaymentInfo(@Param('id') id: string) {
    return this.moyassarService.getPaymentInfo(id);
  }

  @Get('create-payment/:amount')
  async createPayment(@Param('amount') amount: number) {
    return this.moyassarService.createPayment(amount, 'USD');
  }
}

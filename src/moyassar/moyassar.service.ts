import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class MoyassarService {
  private readonly apiUrl = 'https://api.moyassar.com'; // Replace with actual URL

  constructor(private configService: ConfigService) {}

  // Access the API key from environment variables using ConfigService
  private readonly apiKey = this.configService.get<string>('MOYASSAR_API_KEY');

  // Example method to fetch payment info
  async getPaymentInfo(paymentId: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch payment info' + error);
    }
  }

  // Example method to create a payment
  async createPayment(amount: number, currency: string) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/payments`,
        { amount, currency },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to create payment' + error);
    }
  }
}

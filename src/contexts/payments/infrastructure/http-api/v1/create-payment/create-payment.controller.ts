import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentUseCase } from '../../../../application';
import { PrimitivePayment } from '../../../../domain';
import { V1_PAYMENTS, CreatePaymentHttpDto } from '../../../../infrastructure';

@Controller(V1_PAYMENTS)
export class CreatePaymentController {
  constructor(private readonly createPaymentUseCase: CreatePaymentUseCase) {}

  @Post()
  async run(
    @Body() createPaymentHttpDto: CreatePaymentHttpDto,
  ): Promise<{ payment: PrimitivePayment }> {
    return await this.createPaymentUseCase.run({
      amount: createPaymentHttpDto.amount,
      customerId: createPaymentHttpDto.customerId,
    });
  }
}

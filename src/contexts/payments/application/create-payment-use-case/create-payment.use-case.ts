import { CreatePaymentDto } from './create-payment.dto';
import { PaymentRepository, PrimitivePayment, Payment } from '../../domain';
import { Injectable } from '../../../shared/index';

@Injectable()
export class CreatePaymentUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async run(dto: CreatePaymentDto): Promise<{ payment: PrimitivePayment }> {
    const payment = Payment.create(dto);

    await this.paymentRepository.save(payment);

    return {
      payment: payment.toPrimitives(),
    };
  }
}

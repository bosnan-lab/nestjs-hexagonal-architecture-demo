/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '../../../shared';

import { PaymentRepository, Payment, PrimitivePayment } from '../../domain';

@Injectable()
export class InMemoryPaymentRepository extends PaymentRepository {
  private payments: PrimitivePayment[] = [];

  async save(payment: Payment): Promise<void> {
    this.payments.push(payment.toPrimitives());
  }

  async findById(id: string): Promise<Payment | null> {
    const payment = this.payments.find((payment) => payment.id === id);
    return payment ? new Payment(payment) : null;
  }
}

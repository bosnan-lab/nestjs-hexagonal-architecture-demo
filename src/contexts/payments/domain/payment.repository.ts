import { Payment } from './index';

export abstract class PaymentRepository {
  abstract save(payment: Payment): Promise<void>;
  abstract findById(id: string): Promise<Payment | null>;
}

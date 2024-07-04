import { Module } from '@nestjs/common';
import { CreatePaymentController } from './http-api/v1/create-payment/create-payment.controller';
import { FindPaymentByIdController } from './http-api/v1/find-payment-by-id/find-payment-by-id.controller';
import { CreatePaymentUseCase, FindPaymentByIdUseCase } from '../application';
import { InMemoryPaymentRepository } from './repositories/in-memory.payment-repository';
import { PaymentRepository } from '../domain';

@Module({
  controllers: [CreatePaymentController, FindPaymentByIdController],
  providers: [
    CreatePaymentUseCase,
    FindPaymentByIdUseCase,
    InMemoryPaymentRepository,
    {
      provide: PaymentRepository,
      useExisting: InMemoryPaymentRepository,
    },
  ],
  exports: [CreatePaymentUseCase, FindPaymentByIdUseCase],
})
export class PaymentModule {}

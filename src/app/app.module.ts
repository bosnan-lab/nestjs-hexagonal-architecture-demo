import { Module } from '@nestjs/common';
import { HttpApiModule } from './http-api';
import { LoggerModule } from 'src/contexts/shared';
// import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from 'src/contexts/payments/infrastructure';

@Module({
  imports: [
    HttpApiModule,
    LoggerModule,
    // ConfigModule.forRoot({ isGlobal: true, cache: true }),
    PaymentModule,
  ],
})
export class AppModule {}

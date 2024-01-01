import { Module } from '@nestjs/common'
import { TransactionsService } from './graphql/transactions.service'
import { TransactionsResolver } from './graphql/transactions.resolver'
import { TransactionsController } from './rest/transactions.controller'

@Module({
  providers: [TransactionsResolver, TransactionsService],
  exports: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}

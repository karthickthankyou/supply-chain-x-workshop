import { InputType, PickType } from '@nestjs/graphql'
import { Transaction } from '../entity/transaction.entity'

@InputType()
export class CreateTransactionInput extends PickType(
  Transaction,
  ['productId', 'fromWarehouseId', 'toWarehouseId', 'quantity'],
  InputType,
) {}

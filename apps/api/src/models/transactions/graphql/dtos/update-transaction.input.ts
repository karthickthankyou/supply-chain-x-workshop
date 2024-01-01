import { CreateTransactionInput } from './create-transaction.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Transaction } from '@prisma/client'

@InputType()
export class UpdateTransactionInput extends PartialType(
  CreateTransactionInput,
) {
  id: Transaction['id']
}

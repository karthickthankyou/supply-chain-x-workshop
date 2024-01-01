import { PartialType } from '@nestjs/swagger'
import { CreateTransaction } from './create.dto'
import { Transaction } from '@prisma/client'

export class UpdateTransaction extends PartialType(CreateTransaction) {
  id: Transaction['id']
}

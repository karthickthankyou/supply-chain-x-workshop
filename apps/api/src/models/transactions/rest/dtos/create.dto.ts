import { OmitType } from '@nestjs/swagger'
import { TransactionEntity } from '../entity/transaction.entity'

export class CreateTransaction extends OmitType(TransactionEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}

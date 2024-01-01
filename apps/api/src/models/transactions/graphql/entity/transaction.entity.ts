import { Field, ObjectType } from '@nestjs/graphql'
import { Transaction as TransactionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Transaction
  implements RestrictProperties<Transaction, TransactionType>
{
  id: number
  createdAt: Date
  updatedAt: Date
  productId: number
  @Field({ nullable: true })
  fromWarehouseId: number
  @Field({ nullable: true })
  toWarehouseId: number
  quantity: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

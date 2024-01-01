import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { TransactionOrderByWithRelationInput } from './order-by.args'
import {
  TransactionWhereInput,
  TransactionWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.TransactionScalarFieldEnum, {
  name: 'TransactionScalarFieldEnum',
})

@ArgsType()
class FindManyTransactionArgsStrict
  implements
    RestrictProperties<
      FindManyTransactionArgsStrict,
      Omit<Prisma.TransactionFindManyArgs, 'include' | 'select'>
    >
{
  where: TransactionWhereInput
  orderBy: TransactionOrderByWithRelationInput[]
  cursor: TransactionWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.TransactionScalarFieldEnum])
  distinct: Prisma.TransactionScalarFieldEnum[]
}

@ArgsType()
export class FindManyTransactionArgs extends PartialType(
  FindManyTransactionArgsStrict,
) {}

@ArgsType()
export class FindUniqueTransactionArgs {
  where: TransactionWhereUniqueInput
}

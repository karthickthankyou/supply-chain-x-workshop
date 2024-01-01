import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DistributorOrderByWithRelationInput } from './order-by.args'
import {
  DistributorWhereInput,
  DistributorWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.DistributorScalarFieldEnum, {
  name: 'DistributorScalarFieldEnum',
})

@ArgsType()
class FindManyDistributorArgsStrict
  implements
    RestrictProperties<
      FindManyDistributorArgsStrict,
      Omit<Prisma.DistributorFindManyArgs, 'include' | 'select'>
    >
{
  where: DistributorWhereInput
  orderBy: DistributorOrderByWithRelationInput[]
  cursor: DistributorWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.DistributorScalarFieldEnum])
  distinct: Prisma.DistributorScalarFieldEnum[]
}

@ArgsType()
export class FindManyDistributorArgs extends PartialType(
  FindManyDistributorArgsStrict,
) {}

@ArgsType()
export class FindUniqueDistributorArgs {
  where: DistributorWhereUniqueInput
}

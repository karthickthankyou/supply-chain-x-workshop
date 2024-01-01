import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RetailerOrderByWithRelationInput } from './order-by.args'
import { RetailerWhereInput, RetailerWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.RetailerScalarFieldEnum, {
  name: 'RetailerScalarFieldEnum',
})

@ArgsType()
class FindManyRetailerArgsStrict
  implements
    RestrictProperties<
      FindManyRetailerArgsStrict,
      Omit<Prisma.RetailerFindManyArgs, 'include' | 'select'>
    >
{
  where: RetailerWhereInput
  orderBy: RetailerOrderByWithRelationInput[]
  cursor: RetailerWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.RetailerScalarFieldEnum])
  distinct: Prisma.RetailerScalarFieldEnum[]
}

@ArgsType()
export class FindManyRetailerArgs extends PartialType(
  FindManyRetailerArgsStrict,
) {}

@ArgsType()
export class FindUniqueRetailerArgs {
  where: RetailerWhereUniqueInput
}

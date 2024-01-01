import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ProductOrderByWithRelationInput } from './order-by.args'
import { ProductWhereInput, ProductWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ProductScalarFieldEnum, {
  name: 'ProductScalarFieldEnum',
})

@ArgsType()
class FindManyProductArgsStrict
  implements
    RestrictProperties<
      FindManyProductArgsStrict,
      Omit<Prisma.ProductFindManyArgs, 'include' | 'select'>
    >
{
  where: ProductWhereInput
  orderBy: ProductOrderByWithRelationInput[]
  cursor: ProductWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ProductScalarFieldEnum])
  distinct: Prisma.ProductScalarFieldEnum[]
}

@ArgsType()
export class FindManyProductArgs extends PartialType(
  FindManyProductArgsStrict,
) {}

@ArgsType()
export class FindUniqueProductArgs {
  where: ProductWhereUniqueInput
}

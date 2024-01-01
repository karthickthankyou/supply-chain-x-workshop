import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { InventoryOrderByWithRelationInput } from './order-by.args'
import { InventoryWhereInput, InventoryWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.InventoryScalarFieldEnum, {
  name: 'InventoryScalarFieldEnum',
})

@ArgsType()
class FindManyInventoryArgsStrict
  implements
    RestrictProperties<
      FindManyInventoryArgsStrict,
      Omit<Prisma.InventoryFindManyArgs, 'include' | 'select'>
    >
{
  where: InventoryWhereInput
  orderBy: InventoryOrderByWithRelationInput[]
  cursor: InventoryWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.InventoryScalarFieldEnum])
  distinct: Prisma.InventoryScalarFieldEnum[]
}

@ArgsType()
export class FindManyInventoryArgs extends PartialType(
  FindManyInventoryArgsStrict,
) {}

@ArgsType()
export class FindUniqueInventoryArgs {
  where: InventoryWhereUniqueInput
}

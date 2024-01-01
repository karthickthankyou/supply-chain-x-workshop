import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WarehouseOrderByWithRelationInput } from './order-by.args'
import { WarehouseWhereInput, WarehouseWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.WarehouseScalarFieldEnum, {
  name: 'WarehouseScalarFieldEnum',
})

@ArgsType()
class FindManyWarehouseArgsStrict
  implements
    RestrictProperties<
      FindManyWarehouseArgsStrict,
      Omit<Prisma.WarehouseFindManyArgs, 'include' | 'select'>
    >
{
  where: WarehouseWhereInput
  orderBy: WarehouseOrderByWithRelationInput[]
  cursor: WarehouseWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.WarehouseScalarFieldEnum])
  distinct: Prisma.WarehouseScalarFieldEnum[]
}

@ArgsType()
export class FindManyWarehouseArgs extends PartialType(
  FindManyWarehouseArgsStrict,
) {}

@ArgsType()
export class FindUniqueWarehouseArgs {
  where: WarehouseWhereUniqueInput
}

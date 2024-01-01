import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ManufacturerOrderByWithRelationInput } from './order-by.args'
import {
  ManufacturerWhereInput,
  ManufacturerWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ManufacturerScalarFieldEnum, {
  name: 'ManufacturerScalarFieldEnum',
})

@ArgsType()
class FindManyManufacturerArgsStrict
  implements
    RestrictProperties<
      FindManyManufacturerArgsStrict,
      Omit<Prisma.ManufacturerFindManyArgs, 'include' | 'select'>
    >
{
  where: ManufacturerWhereInput
  orderBy: ManufacturerOrderByWithRelationInput[]
  cursor: ManufacturerWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ManufacturerScalarFieldEnum])
  distinct: Prisma.ManufacturerScalarFieldEnum[]
}

@ArgsType()
export class FindManyManufacturerArgs extends PartialType(
  FindManyManufacturerArgsStrict,
) {}

@ArgsType()
export class FindUniqueManufacturerArgs {
  where: ManufacturerWhereUniqueInput
}

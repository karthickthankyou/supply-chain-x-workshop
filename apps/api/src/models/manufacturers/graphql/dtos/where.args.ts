import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ProductListRelationFilter } from 'src/models/products/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'
import { WarehouseListRelationFilter } from 'src/models/warehouses/graphql/dtos/where.args'

@InputType()
export class ManufacturerWhereUniqueInput {
  uid: string
}

@InputType()
export class ManufacturerWhereInputStrict
  implements
    RestrictProperties<
      ManufacturerWhereInputStrict,
      Prisma.ManufacturerWhereInput
    >
{
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
  Products: ProductListRelationFilter
  Warehouses: WarehouseListRelationFilter

  AND: ManufacturerWhereInput[]
  OR: ManufacturerWhereInput[]
  NOT: ManufacturerWhereInput[]
}

@InputType()
export class ManufacturerWhereInput extends PartialType(
  ManufacturerWhereInputStrict,
) {}

@InputType()
export class ManufacturerListRelationFilter {
  every?: ManufacturerWhereInput
  some?: ManufacturerWhereInput
  none?: ManufacturerWhereInput
}

@InputType()
export class ManufacturerRelationFilter {
  is?: ManufacturerWhereInput
  isNot?: ManufacturerWhereInput
}

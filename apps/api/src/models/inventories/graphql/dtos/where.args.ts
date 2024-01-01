import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'
import { ProductRelationFilter } from 'src/models/products/graphql/dtos/where.args'
import { WarehouseRelationFilter } from 'src/models/warehouses/graphql/dtos/where.args'

@InputType()
export class InventoryWhereUniqueInput {
  id: number
}

@InputType()
export class InventoryWhereInputStrict
  implements
    RestrictProperties<InventoryWhereInputStrict, Prisma.InventoryWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  productId: IntFilter
  warehouseId: IntFilter
  quantity: IntFilter
  product: ProductRelationFilter
  warehouse: WarehouseRelationFilter

  AND: InventoryWhereInput[]
  OR: InventoryWhereInput[]
  NOT: InventoryWhereInput[]
}

@InputType()
export class InventoryWhereInput extends PartialType(
  InventoryWhereInputStrict,
) {}

@InputType()
export class InventoryListRelationFilter {
  every?: InventoryWhereInput
  some?: InventoryWhereInput
  none?: InventoryWhereInput
}

@InputType()
export class InventoryRelationFilter {
  is?: InventoryWhereInput
  isNot?: InventoryWhereInput
}

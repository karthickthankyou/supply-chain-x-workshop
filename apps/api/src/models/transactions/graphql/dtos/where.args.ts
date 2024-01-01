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
export class TransactionWhereUniqueInput {
  id: number
}

@InputType()
export class TransactionWhereInputStrict
  implements
    RestrictProperties<
      TransactionWhereInputStrict,
      Prisma.TransactionWhereInput
    >
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  productId: IntFilter
  fromWarehouseId: IntFilter
  toWarehouseId: IntFilter
  quantity: IntFilter
  product: ProductRelationFilter
  fromWarehouse: WarehouseRelationFilter
  toWarehouse: WarehouseRelationFilter

  AND: TransactionWhereInput[]
  OR: TransactionWhereInput[]
  NOT: TransactionWhereInput[]
}

@InputType()
export class TransactionWhereInput extends PartialType(
  TransactionWhereInputStrict,
) {}

@InputType()
export class TransactionListRelationFilter {
  every?: TransactionWhereInput
  some?: TransactionWhereInput
  none?: TransactionWhereInput
}

@InputType()
export class TransactionRelationFilter {
  is?: TransactionWhereInput
  isNot?: TransactionWhereInput
}

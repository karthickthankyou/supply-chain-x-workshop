import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ProductOrderByWithRelationInput } from 'src/models/products/graphql/dtos/order-by.args'
import { WarehouseOrderByWithRelationInput } from 'src/models/warehouses/graphql/dtos/order-by.args'

@InputType()
export class InventoryOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      InventoryOrderByWithRelationInputStrict,
      Prisma.InventoryOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  productId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  warehouseId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  quantity: Prisma.SortOrder
  product: ProductOrderByWithRelationInput
  warehouse: WarehouseOrderByWithRelationInput
}

@InputType()
export class InventoryOrderByWithRelationInput extends PartialType(
  InventoryOrderByWithRelationInputStrict,
) {}

@InputType()
export class InventoryOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ProductOrderByWithRelationInput } from 'src/models/products/graphql/dtos/order-by.args'
import { WarehouseOrderByWithRelationInput } from 'src/models/warehouses/graphql/dtos/order-by.args'

@InputType()
export class TransactionOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      TransactionOrderByWithRelationInputStrict,
      Prisma.TransactionOrderByWithRelationInput
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
  fromWarehouseId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  toWarehouseId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  quantity: Prisma.SortOrder
  product: ProductOrderByWithRelationInput
  fromWarehouse: WarehouseOrderByWithRelationInput
  toWarehouse: WarehouseOrderByWithRelationInput
}

@InputType()
export class TransactionOrderByWithRelationInput extends PartialType(
  TransactionOrderByWithRelationInputStrict,
) {}

@InputType()
export class TransactionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

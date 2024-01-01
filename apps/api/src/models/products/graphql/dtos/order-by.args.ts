import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { InventoryOrderByRelationAggregateInput } from 'src/models/inventories/graphql/dtos/order-by.args'
import { ManufacturerOrderByWithRelationInput } from 'src/models/manufacturers/graphql/dtos/order-by.args'
import { TransactionOrderByRelationAggregateInput } from 'src/models/transactions/graphql/dtos/order-by.args'

@InputType()
export class ProductOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ProductOrderByWithRelationInputStrict,
      Prisma.ProductOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  image: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  manufacturerId: Prisma.SortOrder
  Manufacturer: ManufacturerOrderByWithRelationInput
  Inventories: InventoryOrderByRelationAggregateInput
  Transactions: TransactionOrderByRelationAggregateInput
}

@InputType()
export class ProductOrderByWithRelationInput extends PartialType(
  ProductOrderByWithRelationInputStrict,
) {}

@InputType()
export class ProductOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ProductOrderByRelationAggregateInput } from 'src/models/products/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'
import { WarehouseOrderByRelationAggregateInput } from 'src/models/warehouses/graphql/dtos/order-by.args'

@InputType()
export class ManufacturerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ManufacturerOrderByWithRelationInputStrict,
      Prisma.ManufacturerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  user: UserOrderByWithRelationInput
  Products: ProductOrderByRelationAggregateInput
  Warehouses: WarehouseOrderByRelationAggregateInput
}

@InputType()
export class ManufacturerOrderByWithRelationInput extends PartialType(
  ManufacturerOrderByWithRelationInputStrict,
) {}

@InputType()
export class ManufacturerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

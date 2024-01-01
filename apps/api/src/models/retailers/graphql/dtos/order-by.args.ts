import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'
import { WarehouseOrderByRelationAggregateInput } from 'src/models/warehouses/graphql/dtos/order-by.args'

@InputType()
export class RetailerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      RetailerOrderByWithRelationInputStrict,
      Prisma.RetailerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  Warehouses: WarehouseOrderByRelationAggregateInput
}

@InputType()
export class RetailerOrderByWithRelationInput extends PartialType(
  RetailerOrderByWithRelationInputStrict,
) {}

@InputType()
export class RetailerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

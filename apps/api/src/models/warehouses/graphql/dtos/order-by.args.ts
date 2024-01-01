import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DistributorOrderByWithRelationInput } from 'src/models/distributors/graphql/dtos/order-by.args'
import { InventoryOrderByRelationAggregateInput } from 'src/models/inventories/graphql/dtos/order-by.args'
import { LocationOrderByWithRelationInput } from 'src/models/locations/graphql/dtos/order-by.args'
import { ManufacturerOrderByWithRelationInput } from 'src/models/manufacturers/graphql/dtos/order-by.args'
import { RetailerOrderByWithRelationInput } from 'src/models/retailers/graphql/dtos/order-by.args'
import { TransactionOrderByRelationAggregateInput } from 'src/models/transactions/graphql/dtos/order-by.args'

@InputType()
export class WarehouseOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      WarehouseOrderByWithRelationInputStrict,
      Prisma.WarehouseOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  manufacturerId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  distributorId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  retailerId: Prisma.SortOrder
  location: LocationOrderByWithRelationInput
  Manufacturer: ManufacturerOrderByWithRelationInput
  Distributor: DistributorOrderByWithRelationInput
  Retailer: RetailerOrderByWithRelationInput
  Inventories: InventoryOrderByRelationAggregateInput
  outs: TransactionOrderByRelationAggregateInput
  ins: TransactionOrderByRelationAggregateInput
}

@InputType()
export class WarehouseOrderByWithRelationInput extends PartialType(
  WarehouseOrderByWithRelationInputStrict,
) {}

@InputType()
export class WarehouseOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

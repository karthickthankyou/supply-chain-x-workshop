import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { WarehouseOrderByWithRelationInput } from 'src/models/warehouses/graphql/dtos/order-by.args'

@InputType()
export class LocationOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      LocationOrderByWithRelationInputStrict,
      Prisma.LocationOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  latitude: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  longitude: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  address: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  warehouseId: Prisma.SortOrder
  Warehouse: WarehouseOrderByWithRelationInput
}

@InputType()
export class LocationOrderByWithRelationInput extends PartialType(
  LocationOrderByWithRelationInputStrict,
) {}

@InputType()
export class LocationOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

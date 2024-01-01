import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { DistributorRelationFilter } from 'src/models/distributors/graphql/dtos/where.args'
import { InventoryListRelationFilter } from 'src/models/inventories/graphql/dtos/where.args'
import { LocationRelationFilter } from 'src/models/locations/graphql/dtos/where.args'
import { ManufacturerRelationFilter } from 'src/models/manufacturers/graphql/dtos/where.args'
import { RetailerRelationFilter } from 'src/models/retailers/graphql/dtos/where.args'
import { TransactionListRelationFilter } from 'src/models/transactions/graphql/dtos/where.args'

@InputType()
export class WarehouseWhereUniqueInput {
  id: number
}

@InputType()
export class WarehouseWhereInputStrict
  implements
    RestrictProperties<WarehouseWhereInputStrict, Prisma.WarehouseWhereInput>
{
  description: StringFilter
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  name: StringFilter
  manufacturerId: StringFilter
  distributorId: StringFilter
  retailerId: StringFilter
  location: LocationRelationFilter
  Manufacturer: ManufacturerRelationFilter
  Distributor: DistributorRelationFilter
  Retailer: RetailerRelationFilter
  Inventories: InventoryListRelationFilter
  outs: TransactionListRelationFilter
  ins: TransactionListRelationFilter

  AND: WarehouseWhereInput[]
  OR: WarehouseWhereInput[]
  NOT: WarehouseWhereInput[]
}

@InputType()
export class WarehouseWhereInput extends PartialType(
  WarehouseWhereInputStrict,
) {}

@InputType()
export class WarehouseListRelationFilter {
  every?: WarehouseWhereInput
  some?: WarehouseWhereInput
  none?: WarehouseWhereInput
}

@InputType()
export class WarehouseRelationFilter {
  is?: WarehouseWhereInput
  isNot?: WarehouseWhereInput
}

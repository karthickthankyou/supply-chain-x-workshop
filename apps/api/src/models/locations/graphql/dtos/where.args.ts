import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { WarehouseRelationFilter } from 'src/models/warehouses/graphql/dtos/where.args'

@InputType()
export class LocationWhereUniqueInput {
  id: number
}

@InputType()
export class LocationWhereInputStrict
  implements
    RestrictProperties<LocationWhereInputStrict, Prisma.LocationWhereInput>
{
  id: IntFilter
  latitude: FloatFilter
  longitude: FloatFilter
  address: StringFilter
  warehouseId: IntFilter
  Warehouse: WarehouseRelationFilter

  AND: LocationWhereInput[]
  OR: LocationWhereInput[]
  NOT: LocationWhereInput[]
}

@InputType()
export class LocationWhereInput extends PartialType(LocationWhereInputStrict) {}

@InputType()
export class LocationListRelationFilter {
  every?: LocationWhereInput
  some?: LocationWhereInput
  none?: LocationWhereInput
}

@InputType()
export class LocationRelationFilter {
  is?: LocationWhereInput
  isNot?: LocationWhereInput
}

import { InputType, PickType } from '@nestjs/graphql'
import { Location } from '../entity/location.entity'

@InputType()
export class CreateLocationInput extends PickType(
  Location,
  ['address', 'latitude', 'longitude', 'warehouseId'],
  InputType,
) {}
@InputType()
export class CreateLocationInputWithoutWarehouseId extends PickType(
  Location,
  ['address', 'latitude', 'longitude'],
  InputType,
) {}

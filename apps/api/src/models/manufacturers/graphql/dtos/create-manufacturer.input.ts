import { InputType, PickType } from '@nestjs/graphql'
import { Manufacturer } from '../entity/manufacturer.entity'

@InputType()
export class CreateManufacturerInput extends PickType(
  Manufacturer,
  ['uid'],
  InputType,
) {}

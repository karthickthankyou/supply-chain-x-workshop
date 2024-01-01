import { CreateManufacturerInput } from './create-manufacturer.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Manufacturer } from '@prisma/client'

@InputType()
export class UpdateManufacturerInput extends PartialType(
  CreateManufacturerInput,
) {
  uid: Manufacturer['uid']
}

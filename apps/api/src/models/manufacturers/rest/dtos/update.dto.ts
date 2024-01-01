import { PartialType } from '@nestjs/swagger'
import { CreateManufacturer } from './create.dto'
import { Manufacturer } from '@prisma/client'

export class UpdateManufacturer extends PartialType(CreateManufacturer) {
  uid: Manufacturer['uid']
}

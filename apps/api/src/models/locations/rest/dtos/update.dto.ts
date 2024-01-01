import { PartialType } from '@nestjs/swagger'
import { CreateLocation } from './create.dto'
import { Location } from '@prisma/client'

export class UpdateLocation extends PartialType(CreateLocation) {
  id: Location['id']
}

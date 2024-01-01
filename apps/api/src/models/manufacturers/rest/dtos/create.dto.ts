import { OmitType } from '@nestjs/swagger'
import { ManufacturerEntity } from '../entity/manufacturer.entity'

export class CreateManufacturer extends OmitType(ManufacturerEntity, [
  'createdAt',
  'updatedAt',
]) {}

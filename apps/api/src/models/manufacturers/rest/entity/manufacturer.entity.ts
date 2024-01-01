import { Manufacturer } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ManufacturerEntity
  implements RestrictProperties<ManufacturerEntity, Manufacturer>
{
  uid: string
  createdAt: Date
  updatedAt: Date
}

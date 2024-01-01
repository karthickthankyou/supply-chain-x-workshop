import { Field, Float } from '@nestjs/graphql'
import { Location } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class LocationEntity
  implements RestrictProperties<LocationEntity, Location>
{
  id: number

  latitude: number

  longitude: number
  address: string
  warehouseId: number
}

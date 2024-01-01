import { Distributor } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class DistributorEntity
  implements RestrictProperties<DistributorEntity, Distributor>
{
  uid: string
  createdAt: Date
  updatedAt: Date
}

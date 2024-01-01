import { Retailer } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class RetailerEntity
  implements RestrictProperties<RetailerEntity, Retailer>
{
  updatedAt: Date
  uid: string
  createdAt: Date
}

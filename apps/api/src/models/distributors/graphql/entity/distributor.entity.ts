import { ObjectType } from '@nestjs/graphql'
import { Distributor as DistributorType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Distributor
  implements RestrictProperties<Distributor, DistributorType>
{
  uid: string
  createdAt: Date
  updatedAt: Date
}

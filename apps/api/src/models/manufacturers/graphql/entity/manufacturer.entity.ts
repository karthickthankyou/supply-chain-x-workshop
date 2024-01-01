import { ObjectType } from '@nestjs/graphql'
import { Manufacturer as ManufacturerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Manufacturer
  implements RestrictProperties<Manufacturer, ManufacturerType>
{
  uid: string
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

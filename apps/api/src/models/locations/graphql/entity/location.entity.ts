import { Field, Float, ObjectType } from '@nestjs/graphql'
import { Location as LocationType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Location implements RestrictProperties<Location, LocationType> {
  id: number
  @Field(() => Float)
  latitude: number
  @Field(() => Float)
  longitude: number
  address: string
  warehouseId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

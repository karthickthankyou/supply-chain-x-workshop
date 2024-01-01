import { Field, ObjectType } from '@nestjs/graphql'
import { Warehouse as WarehouseType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Warehouse implements RestrictProperties<Warehouse, WarehouseType> {
  @Field({ nullable: true })
  description: string
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  @Field({ nullable: true })
  manufacturerId: string
  @Field({ nullable: true })
  distributorId: string
  @Field({ nullable: true })
  retailerId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

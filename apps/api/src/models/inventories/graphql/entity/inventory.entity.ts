import { ObjectType } from '@nestjs/graphql'
import { Inventory as InventoryType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Inventory implements RestrictProperties<Inventory, InventoryType> {
  id: number
  createdAt: Date
  updatedAt: Date
  productId: number
  warehouseId: number
  quantity: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

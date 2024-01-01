import { Inventory } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class InventoryEntity
  implements RestrictProperties<InventoryEntity, Inventory>
{
  id: number
  createdAt: Date
  updatedAt: Date
  productId: number
  warehouseId: number
  quantity: number
}

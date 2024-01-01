import { OmitType } from '@nestjs/swagger'
import { InventoryEntity } from '../entity/inventory.entity'

export class CreateInventory extends OmitType(InventoryEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}

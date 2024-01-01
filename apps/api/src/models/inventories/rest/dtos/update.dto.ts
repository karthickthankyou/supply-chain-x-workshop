import { PartialType } from '@nestjs/swagger'
import { CreateInventory } from './create.dto'
import { Inventory } from '@prisma/client'

export class UpdateInventory extends PartialType(CreateInventory) {
  id: Inventory['id']
}

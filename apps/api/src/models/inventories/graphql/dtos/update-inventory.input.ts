import { CreateInventoryInput } from './create-inventory.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Inventory } from '@prisma/client'

@InputType()
export class UpdateInventoryInput extends PartialType(CreateInventoryInput) {
  id: Inventory['id']
}

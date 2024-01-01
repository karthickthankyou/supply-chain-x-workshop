import { PartialType } from '@nestjs/swagger'
import { CreateWarehouse } from './create.dto'
import { Warehouse } from '@prisma/client'

export class UpdateWarehouse extends PartialType(CreateWarehouse) {
  id: Warehouse['id']
}

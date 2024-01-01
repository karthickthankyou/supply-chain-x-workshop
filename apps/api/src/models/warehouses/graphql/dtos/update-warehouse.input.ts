import { CreateWarehouseInput } from './create-warehouse.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Warehouse } from '@prisma/client'

@InputType()
export class UpdateWarehouseInput extends PartialType(CreateWarehouseInput) {
  id: Warehouse['id']
}

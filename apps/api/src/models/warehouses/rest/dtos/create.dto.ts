import { OmitType } from '@nestjs/swagger'
import { WarehouseEntity } from '../entity/warehouse.entity'

export class CreateWarehouse extends OmitType(WarehouseEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}

import { Warehouse } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class WarehouseEntity
  implements RestrictProperties<WarehouseEntity, Warehouse>
{
  @IsOptional()
  description: string
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  @IsOptional()
  manufacturerId: string
  @IsOptional()
  distributorId: string
  @IsOptional()
  retailerId: string
}

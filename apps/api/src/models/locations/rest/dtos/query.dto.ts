import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class LocationQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.LocationScalarFieldEnum))
  sortBy?: string
}

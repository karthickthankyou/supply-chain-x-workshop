import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class RetailerQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.RetailerScalarFieldEnum))
  sortBy?: string
}

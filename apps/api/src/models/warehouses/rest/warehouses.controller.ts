import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateWarehouse } from './dtos/create.dto'
import { WarehouseQueryDto } from './dtos/query.dto'
import { UpdateWarehouse } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { WarehouseEntity } from './entity/warehouse.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from '@foundation/util/types'

@ApiTags('warehouses')
@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: WarehouseEntity })
  @Post()
  create(@Body() createWarehouseDto: CreateWarehouse) {
    return this.prisma.warehouse.create({ data: createWarehouseDto })
  }

  @ApiOkResponse({ type: [WarehouseEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: WarehouseQueryDto) {
    return this.prisma.warehouse.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: WarehouseEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.warehouse.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: WarehouseEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateWarehouseDto: UpdateWarehouse,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.warehouse.update({
      where: { id },
      data: updateWarehouseDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.warehouse.delete({ where: { id } })
  }
}

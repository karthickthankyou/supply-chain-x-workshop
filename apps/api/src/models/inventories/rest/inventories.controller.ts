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
import { CreateInventory } from './dtos/create.dto'
import { InventoryQueryDto } from './dtos/query.dto'
import { UpdateInventory } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { InventoryEntity } from './entity/inventory.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from '@foundation/util/types'

@ApiTags('inventories')
@Controller('inventories')
export class InventoriesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: InventoryEntity })
  @Post()
  create(@Body() createInventoryDto: CreateInventory) {
    return this.prisma.inventory.create({ data: createInventoryDto })
  }

  @ApiOkResponse({ type: [InventoryEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: InventoryQueryDto) {
    return this.prisma.inventory.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: InventoryEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.inventory.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: InventoryEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateInventoryDto: UpdateInventory,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.inventory.update({
      where: { id },
      data: updateInventoryDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.inventory.delete({ where: { id } })
  }
}

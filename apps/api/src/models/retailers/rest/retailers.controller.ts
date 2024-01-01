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
import { CreateRetailer } from './dtos/create.dto'
import { RetailerQueryDto } from './dtos/query.dto'
import { UpdateRetailer } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { RetailerEntity } from './entity/retailer.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'

import { GetUserType } from '@foundation/util/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('retailers')
@Controller('retailers')
export class RetailersController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: RetailerEntity })
  @Post()
  create(
    @Body() createRetailerDto: CreateRetailer,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, createRetailerDto.uid)

    return this.prisma.retailer.create({ data: createRetailerDto })
  }

  @ApiOkResponse({ type: [RetailerEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: RetailerQueryDto) {
    return this.prisma.retailer.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: RetailerEntity })
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.prisma.retailer.findUnique({ where: { uid } })
  }

  @ApiOkResponse({ type: RetailerEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':uid')
  update(
    @Param('uid') uid: string,
    @Body() updateRetailerDto: UpdateRetailer,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, uid)

    return this.prisma.retailer.update({
      where: { uid },
      data: updateRetailerDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':uid')
  remove(@Param('uid') uid: string, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, uid)
    return this.prisma.retailer.delete({ where: { uid } })
  }
}

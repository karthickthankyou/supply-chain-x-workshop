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
import { CreateLocation } from './dtos/create.dto'
import { LocationQueryDto } from './dtos/query.dto'
import { UpdateLocation } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { LocationEntity } from './entity/location.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from '@foundation/util/types'

@ApiTags('locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: LocationEntity })
  @Post()
  create(@Body() createLocationDto: CreateLocation) {
    return this.prisma.location.create({ data: createLocationDto })
  }

  @ApiOkResponse({ type: [LocationEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: LocationQueryDto) {
    return this.prisma.location.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: LocationEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.location.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: LocationEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateLocationDto: UpdateLocation,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.location.update({
      where: { id },
      data: updateLocationDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.location.delete({ where: { id } })
  }
}

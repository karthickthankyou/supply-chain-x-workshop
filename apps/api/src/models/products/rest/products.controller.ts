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
import { CreateProduct } from './dtos/create.dto'
import { ProductQueryDto } from './dtos/query.dto'
import { UpdateProduct } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ProductEntity } from './entity/product.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from '@foundation/util/types'

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProductEntity })
  @Post()
  create(@Body() createProductDto: CreateProduct) {
    return this.prisma.product.create({ data: createProductDto })
  }

  @ApiOkResponse({ type: [ProductEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ProductQueryDto) {
    return this.prisma.product.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ProductEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.product.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ProductEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProduct,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.product.delete({ where: { id } })
  }
}

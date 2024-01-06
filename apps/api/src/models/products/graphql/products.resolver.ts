import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ProductsService } from './products.service'
import { Product } from './entity/product.entity'
import { FindManyProductArgs, FindUniqueProductArgs } from './dtos/find.args'
import { CreateProductInput } from './dtos/create-product.input'
import { UpdateProductInput } from './dtos/update-product.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Manufacturer } from 'src/models/manufacturers/graphql/entity/manufacturer.entity'
import { Inventory } from 'src/models/inventories/graphql/entity/inventory.entity'
import { Transaction } from 'src/models/transactions/graphql/entity/transaction.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from '@foundation/util/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Product)
  createProduct(@Args('createProductInput') args: CreateProductInput) {
    return this.productsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Product], { name: 'products' })
  findAll(@Args() args: FindManyProductArgs) {
    return this.productsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Product], { name: 'myProducts' })
  myProducts(@Args() args: FindManyProductArgs, @GetUser() user: GetUserType) {
    return this.productsService.findAll({
      ...args,
      where: { ...args.where, manufacturerId: { equals: user.uid } },
    })
  }

  @AllowAuthenticated()
  @Query(() => Product, { name: 'product' })
  async findOne(
    @Args() args: FindUniqueProductArgs,
    @GetUser() user: GetUserType,
  ) {
    const product = await this.productsService.findOne(args)
    checkRowLevelPermission(user, product.manufacturerId)
    return product
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProductInput') args: UpdateProductInput) {
    return this.productsService.update(args)
  }

  @Mutation(() => Product)
  removeProduct(@Args() args: FindUniqueProductArgs) {
    return this.productsService.remove(args)
  }

  @ResolveField(() => Manufacturer)
  manufacturer(@Parent() product: Product) {
    return this.prisma.manufacturer.findUnique({
      where: { uid: product.manufacturerId },
    })
  }

  @ResolveField(() => [Inventory])
  inventories(@Parent() product: Product) {
    return this.prisma.inventory.findMany({
      where: { productId: product.id },
    })
  }

  @ResolveField(() => [Transaction])
  transactions(@Parent() product: Product) {
    return this.prisma.transaction.findMany({
      where: { productId: product.id },
    })
  }
}

import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { InventoriesService } from './inventories.service'
import { Inventory } from './entity/inventory.entity'
import {
  FindManyInventoryArgs,
  FindUniqueInventoryArgs,
} from './dtos/find.args'
import { CreateInventoryInput } from './dtos/create-inventory.input'
import { UpdateInventoryInput } from './dtos/update-inventory.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Warehouse } from 'src/models/warehouses/graphql/entity/warehouse.entity'
import { Product } from 'src/models/products/graphql/entity/product.entity'
import { BadRequestException } from '@nestjs/common'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from '@foundation/util/types'

@Resolver(() => Inventory)
export class InventoriesResolver {
  constructor(
    private readonly inventoriesService: InventoriesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Inventory)
  createInventory(@Args('createInventoryInput') args: CreateInventoryInput) {
    return this.inventoriesService.create(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Inventory)
  async transferInventory(
    @Args('fromWarehouseId') fromWarehouseId: number,
    @Args('toWarehouseId') toWarehouseId: number,
    @Args('productId') productId: number,
    @Args('quantity') quantity: number,
    @GetUser() user: GetUserType,
  ): Promise<Inventory | null> {
    return this.inventoriesService.transferInventory(
      fromWarehouseId,
      toWarehouseId,
      productId,
      quantity,
      user.uid,
    )
  }

  @AllowAuthenticated()
  @Mutation(() => Inventory)
  async reduceInventory(
    @Args('warehouseId') warehouseId: number,
    @Args('productId') productId: number,
    @Args('quantity') quantity: number,
    @GetUser() user: GetUserType,
  ): Promise<Inventory | null> {
    return this.inventoriesService.reduceInventory({
      uid: user.uid,
      warehouseId,
      productId,
      quantity,
    })
  }

  @Query(() => [Inventory], { name: 'inventories' })
  findAll(@Args() args: FindManyInventoryArgs) {
    return this.inventoriesService.findAll(args)
  }

  @Query(() => Inventory, { name: 'inventory' })
  async findOne(@Args() args: FindUniqueInventoryArgs) {
    const inventory = await this.inventoriesService.findOne(args)
    if (!inventory) {
      throw new BadRequestException('Inventory not found')
    }
    return inventory
  }

  @Mutation(() => Inventory)
  updateInventory(@Args('updateInventoryInput') args: UpdateInventoryInput) {
    return this.inventoriesService.update(args)
  }

  @Mutation(() => Inventory)
  removeInventory(@Args() args: FindUniqueInventoryArgs) {
    return this.inventoriesService.remove(args)
  }

  @ResolveField(() => Product)
  product(@Parent() inventory: Inventory) {
    return this.prisma.product.findUnique({
      where: { id: inventory.productId },
    })
  }

  @ResolveField(() => Warehouse)
  warehouse(@Parent() inventory: Inventory) {
    return this.prisma.warehouse.findUnique({
      where: { id: inventory.warehouseId },
    })
  }
}

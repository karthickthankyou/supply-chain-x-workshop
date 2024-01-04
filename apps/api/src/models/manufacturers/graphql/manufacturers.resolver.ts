import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ManufacturersService } from './manufacturers.service'
import { Manufacturer } from './entity/manufacturer.entity'
import {
  FindManyManufacturerArgs,
  FindUniqueManufacturerArgs,
} from './dtos/find.args'
import { CreateManufacturerInput } from './dtos/create-manufacturer.input'
import { UpdateManufacturerInput } from './dtos/update-manufacturer.input'
import { Product } from 'src/models/products/graphql/entity/product.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Warehouse } from 'src/models/warehouses/graphql/entity/warehouse.entity'
import { User } from 'src/models/users/graphql/entity/user.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from '@foundation/util/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@Resolver(() => Manufacturer)
export class ManufacturersResolver {
  constructor(
    private readonly manufacturersService: ManufacturersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Manufacturer)
  createManufacturer(
    @Args('createManufacturerInput') args: CreateManufacturerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.manufacturersService.create(args)
  }

  @Query(() => [Manufacturer], { name: 'manufacturers' })
  findAll(@Args() args: FindManyManufacturerArgs) {
    return this.manufacturersService.findAll(args)
  }

  @Query(() => Manufacturer, { name: 'manufacturer' })
  findOne(@Args() args: FindUniqueManufacturerArgs) {
    return this.manufacturersService.findOne(args)
  }

  @Mutation(() => Manufacturer)
  updateManufacturer(
    @Args('updateManufacturerInput') args: UpdateManufacturerInput,
  ) {
    return this.manufacturersService.update(args)
  }

  @Mutation(() => Manufacturer)
  removeManufacturer(@Args() args: FindUniqueManufacturerArgs) {
    return this.manufacturersService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() manufacturer: Manufacturer) {
    return this.prisma.user.findUnique({
      where: { uid: manufacturer.uid },
    })
  }

  @ResolveField(() => [Product])
  products(@Parent() parent: Manufacturer) {
    return this.prisma.product.findMany({
      where: { manufacturerId: parent.uid },
    })
  }

  @ResolveField(() => [Warehouse])
  warehouses(@Parent() parent: Manufacturer) {
    return this.prisma.warehouse.findMany({
      where: { manufacturerId: parent.uid },
    })
  }
}

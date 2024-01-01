import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { RetailersService } from './retailers.service'
import { Retailer } from './entity/retailer.entity'
import { FindManyRetailerArgs, FindUniqueRetailerArgs } from './dtos/find.args'
import { CreateRetailerInput } from './dtos/create-retailer.input'
import { UpdateRetailerInput } from './dtos/update-retailer.input'
import { PrismaService } from 'src/common/prisma/prisma.service'

import { Warehouse } from 'src/models/warehouses/graphql/entity/warehouse.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from '@foundation/util/types'
import { User } from 'src/models/users/graphql/entity/user.entity'

@Resolver(() => Retailer)
export class RetailersResolver {
  constructor(
    private readonly retailersService: RetailersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Retailer)
  createRetailer(@Args('createRetailerInput') args: CreateRetailerInput) {
    return this.retailersService.create(args)
  }

  @Query(() => [Retailer], { name: 'retailers' })
  findAll(@Args() args: FindManyRetailerArgs) {
    return this.retailersService.findAll(args)
  }

  @Query(() => Retailer, { name: 'retailer' })
  findOne(@Args() args: FindUniqueRetailerArgs) {
    return this.retailersService.findOne(args)
  }

  @Mutation(() => Retailer)
  updateRetailer(@Args('updateRetailerInput') args: UpdateRetailerInput) {
    return this.retailersService.update(args)
  }

  @Mutation(() => Retailer)
  removeRetailer(@Args() args: FindUniqueRetailerArgs) {
    return this.retailersService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() retailer: Retailer) {
    return this.prisma.user.findUnique({
      where: { uid: retailer.uid },
    })
  }

  @ResolveField(() => [Warehouse])
  async warehouses(@Parent() retailer: Retailer) {
    const warehouses = await this.prisma.warehouse.findMany({
      where: { retailerId: retailer.uid },
    })
    return warehouses
  }
}

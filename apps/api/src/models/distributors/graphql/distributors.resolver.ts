import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { DistributorsService } from './distributors.service'
import { Distributor } from './entity/distributor.entity'
import {
  FindManyDistributorArgs,
  FindUniqueDistributorArgs,
} from './dtos/find.args'
import { CreateDistributorInput } from './dtos/create-distributor.input'
import { UpdateDistributorInput } from './dtos/update-distributor.input'
import { User } from 'src/models/users/graphql/entity/user.entity'
import { Warehouse } from 'src/models/warehouses/graphql/entity/warehouse.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Distributor)
export class DistributorsResolver {
  constructor(
    private readonly distributorsService: DistributorsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Distributor)
  createDistributor(
    @Args('createDistributorInput') args: CreateDistributorInput,
  ) {
    return this.distributorsService.create(args)
  }

  @Query(() => [Distributor], { name: 'distributors' })
  findAll(@Args() args: FindManyDistributorArgs) {
    return this.distributorsService.findAll(args)
  }

  @Query(() => Distributor, { name: 'distributor', nullable: true })
  findOne(@Args() args: FindUniqueDistributorArgs) {
    return this.distributorsService.findOne(args)
  }

  @Mutation(() => Distributor)
  updateDistributor(
    @Args('updateDistributorInput') args: UpdateDistributorInput,
  ) {
    return this.distributorsService.update(args)
  }

  @Mutation(() => Distributor)
  removeDistributor(@Args() args: FindUniqueDistributorArgs) {
    return this.distributorsService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() distributor: Distributor) {
    return this.prisma.user.findUnique({
      where: { uid: distributor.uid },
    })
  }

  @ResolveField(() => [Warehouse])
  warehouses(@Parent() distributor: Distributor) {
    return this.prisma.warehouse.findMany({
      where: { distributorId: distributor.uid },
    })
  }
}

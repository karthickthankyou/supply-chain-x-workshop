import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { LocationsService } from './locations.service'
import { Location } from './entity/location.entity'
import { FindManyLocationArgs, FindUniqueLocationArgs } from './dtos/find.args'
import { CreateLocationInput } from './dtos/create-location.input'
import { UpdateLocationInput } from './dtos/update-location.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Warehouse } from 'src/models/warehouses/graphql/entity/warehouse.entity'

@Resolver(() => Location)
export class LocationsResolver {
  constructor(
    private readonly locationsService: LocationsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Location)
  createLocation(@Args('createLocationInput') args: CreateLocationInput) {
    return this.locationsService.create(args)
  }

  @Query(() => [Location], { name: 'locations' })
  findAll(@Args() args: FindManyLocationArgs) {
    return this.locationsService.findAll(args)
  }

  @Query(() => Location, { name: 'location' })
  findOne(@Args() args: FindUniqueLocationArgs) {
    return this.locationsService.findOne(args)
  }

  @Mutation(() => Location)
  updateLocation(@Args('updateLocationInput') args: UpdateLocationInput) {
    return this.locationsService.update(args)
  }

  @Mutation(() => Location)
  removeLocation(@Args() args: FindUniqueLocationArgs) {
    return this.locationsService.remove(args)
  }

  @ResolveField(() => Warehouse)
  warehouse(@Parent() location: Location) {
    return this.prisma.warehouse.findUnique({
      where: { id: location.warehouseId },
    })
  }
}

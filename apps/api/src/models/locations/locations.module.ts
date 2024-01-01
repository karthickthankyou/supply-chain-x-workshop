import { Module } from '@nestjs/common'
import { LocationsService } from './graphql/locations.service'
import { LocationsResolver } from './graphql/locations.resolver'
import { LocationsController } from './rest/locations.controller'

@Module({
  providers: [LocationsResolver, LocationsService],
  exports: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}

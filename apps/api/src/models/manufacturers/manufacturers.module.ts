import { Module } from '@nestjs/common'
import { ManufacturersService } from './graphql/manufacturers.service'
import { ManufacturersResolver } from './graphql/manufacturers.resolver'
import { ManufacturersController } from './rest/manufacturers.controller'

@Module({
  providers: [ManufacturersResolver, ManufacturersService],
  exports: [ManufacturersService],
  controllers: [ManufacturersController],
})
export class ManufacturersModule {}

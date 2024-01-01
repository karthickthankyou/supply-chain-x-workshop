import { Module } from '@nestjs/common'
import { WarehousesService } from './graphql/warehouses.service'
import { WarehousesResolver } from './graphql/warehouses.resolver'
import { WarehousesController } from './rest/warehouses.controller'

@Module({
  providers: [WarehousesResolver, WarehousesService],
  exports: [WarehousesService],
  controllers: [WarehousesController],
})
export class WarehousesModule {}

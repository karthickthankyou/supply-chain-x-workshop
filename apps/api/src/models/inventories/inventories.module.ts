import { Module } from '@nestjs/common'
import { InventoriesService } from './graphql/inventories.service'
import { InventoriesResolver } from './graphql/inventories.resolver'
import { InventoriesController } from './rest/inventories.controller'

@Module({
  providers: [InventoriesResolver, InventoriesService],
  exports: [InventoriesService],
  controllers: [InventoriesController],
})
export class InventoriesModule {}

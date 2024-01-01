import { Module } from '@nestjs/common'
import { DistributorsService } from './graphql/distributors.service'
import { DistributorsResolver } from './graphql/distributors.resolver'
import { DistributorsController } from './rest/distributors.controller'

@Module({
  providers: [DistributorsResolver, DistributorsService],
  exports: [DistributorsService],
  controllers: [DistributorsController],
})
export class DistributorsModule {}

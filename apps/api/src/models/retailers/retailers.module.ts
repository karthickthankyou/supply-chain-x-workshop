import { Module } from '@nestjs/common'
import { RetailersService } from './graphql/retailers.service'
import { RetailersResolver } from './graphql/retailers.resolver'
import { RetailersController } from './rest/retailers.controller'

@Module({
  providers: [RetailersResolver, RetailersService],
  exports: [RetailersService],
  controllers: [RetailersController],
})
export class RetailersModule {}

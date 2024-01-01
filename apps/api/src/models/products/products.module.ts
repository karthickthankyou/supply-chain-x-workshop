import { Module } from '@nestjs/common'
import { ProductsService } from './graphql/products.service'
import { ProductsResolver } from './graphql/products.resolver'
import { ProductsController } from './rest/products.controller'

@Module({
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}

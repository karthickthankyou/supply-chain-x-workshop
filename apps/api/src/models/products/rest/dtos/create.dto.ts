import { OmitType } from '@nestjs/swagger'
import { ProductEntity } from '../entity/product.entity'

export class CreateProduct extends OmitType(ProductEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}

import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Product } from '../entity/product.entity'

@InputType()
export class CreateProductInput extends OmitType(
  Product,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}

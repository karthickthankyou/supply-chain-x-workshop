import { CreateProductInput } from './create-product.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Product } from '@prisma/client'

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  id: Product['id']
}

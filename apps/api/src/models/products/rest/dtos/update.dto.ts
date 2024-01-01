import { PartialType } from '@nestjs/swagger'
import { CreateProduct } from './create.dto'
import { Product } from '@prisma/client'

export class UpdateProduct extends PartialType(CreateProduct) {
  id: Product['id']
}

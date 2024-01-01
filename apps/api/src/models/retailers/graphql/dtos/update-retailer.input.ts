import { CreateRetailerInput } from './create-retailer.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Retailer } from '@prisma/client'

@InputType()
export class UpdateRetailerInput extends PartialType(CreateRetailerInput) {
  uid: Retailer['uid']
}

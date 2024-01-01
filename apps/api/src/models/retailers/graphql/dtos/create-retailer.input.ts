import { InputType, PickType } from '@nestjs/graphql'
import { Retailer } from '../entity/retailer.entity'

@InputType()
export class CreateRetailerInput extends PickType(
  Retailer,
  ['uid'],
  InputType,
) {}

import { InputType, PickType } from '@nestjs/graphql'
import { Distributor } from '../entity/distributor.entity'

@InputType()
export class CreateDistributorInput extends PickType(
  Distributor,
  ['uid'],
  InputType,
) {}

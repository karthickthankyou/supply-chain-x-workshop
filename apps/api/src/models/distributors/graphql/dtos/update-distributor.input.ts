import { CreateDistributorInput } from './create-distributor.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Distributor } from '@prisma/client'

@InputType()
export class UpdateDistributorInput extends PartialType(
  CreateDistributorInput,
) {
  uid: Distributor['uid']
}

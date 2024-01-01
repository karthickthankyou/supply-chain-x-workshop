import { CreateLocationInput } from './create-location.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Location } from '@prisma/client'

@InputType()
export class UpdateLocationInput extends PartialType(CreateLocationInput) {
  id: Location['id']
}

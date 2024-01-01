import { OmitType } from '@nestjs/swagger'
import { DistributorEntity } from '../entity/distributor.entity'

export class CreateDistributor extends OmitType(DistributorEntity, [
  'createdAt',
  'updatedAt',
]) {}

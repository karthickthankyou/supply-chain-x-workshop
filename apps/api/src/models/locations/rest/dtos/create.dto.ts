import { OmitType } from '@nestjs/swagger'
import { LocationEntity } from '../entity/location.entity'

export class CreateLocation extends OmitType(LocationEntity, ['id']) {}

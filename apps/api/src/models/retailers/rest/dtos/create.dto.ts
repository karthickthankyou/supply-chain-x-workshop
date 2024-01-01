import { OmitType } from '@nestjs/swagger'
import { RetailerEntity } from '../entity/retailer.entity'

export class CreateRetailer extends OmitType(RetailerEntity, ['createdAt']) {}

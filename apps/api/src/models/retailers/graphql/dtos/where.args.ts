import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'
import { WarehouseListRelationFilter } from 'src/models/warehouses/graphql/dtos/where.args'

@InputType()
export class RetailerWhereUniqueInput {
  uid: string
}

@InputType()
export class RetailerWhereInputStrict
  implements
    RestrictProperties<RetailerWhereInputStrict, Prisma.RetailerWhereInput>
{
  uid: StringFilter
  updatedAt: DateTimeFilter
  createdAt: DateTimeFilter
  user: UserRelationFilter
  Warehouses: WarehouseListRelationFilter

  AND: RetailerWhereInput[]
  OR: RetailerWhereInput[]
  NOT: RetailerWhereInput[]
}

@InputType()
export class RetailerWhereInput extends PartialType(RetailerWhereInputStrict) {}

@InputType()
export class RetailerListRelationFilter {
  every?: RetailerWhereInput
  some?: RetailerWhereInput
  none?: RetailerWhereInput
}

@InputType()
export class RetailerRelationFilter {
  is?: RetailerWhereInput
  isNot?: RetailerWhereInput
}

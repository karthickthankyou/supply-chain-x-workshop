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
export class DistributorWhereUniqueInput {
  uid: string
}

@InputType()
export class DistributorWhereInputStrict
  implements
    RestrictProperties<
      DistributorWhereInputStrict,
      Prisma.DistributorWhereInput
    >
{
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
  Warehouses: WarehouseListRelationFilter

  AND: DistributorWhereInput[]
  OR: DistributorWhereInput[]
  NOT: DistributorWhereInput[]
}

@InputType()
export class DistributorWhereInput extends PartialType(
  DistributorWhereInputStrict,
) {}

@InputType()
export class DistributorListRelationFilter {
  every?: DistributorWhereInput
  some?: DistributorWhereInput
  none?: DistributorWhereInput
}

@InputType()
export class DistributorRelationFilter {
  is?: DistributorWhereInput
  isNot?: DistributorWhereInput
}

import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LocationOrderByWithRelationInput } from './order-by.args'
import { LocationWhereInput, LocationWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.LocationScalarFieldEnum, {
  name: 'LocationScalarFieldEnum',
})

@ArgsType()
class FindManyLocationArgsStrict
  implements
    RestrictProperties<
      FindManyLocationArgsStrict,
      Omit<Prisma.LocationFindManyArgs, 'include' | 'select'>
    >
{
  where: LocationWhereInput
  orderBy: LocationOrderByWithRelationInput[]
  cursor: LocationWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.LocationScalarFieldEnum])
  distinct: Prisma.LocationScalarFieldEnum[]
}

@ArgsType()
export class FindManyLocationArgs extends PartialType(
  FindManyLocationArgsStrict,
) {}

@ArgsType()
export class FindUniqueLocationArgs {
  where: LocationWhereUniqueInput
}

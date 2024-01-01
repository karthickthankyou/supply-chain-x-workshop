import { Injectable } from '@nestjs/common'
import { FindManyLocationArgs, FindUniqueLocationArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateLocationInput } from './dtos/create-location.input'
import { UpdateLocationInput } from './dtos/update-location.input'

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createLocationInput: CreateLocationInput) {
    return this.prisma.location.create({
      data: createLocationInput,
    })
  }

  findAll(args: FindManyLocationArgs) {
    return this.prisma.location.findMany(args)
  }

  findOne(args: FindUniqueLocationArgs) {
    return this.prisma.location.findUnique(args)
  }

  update(updateLocationInput: UpdateLocationInput) {
    const { id, ...data } = updateLocationInput
    return this.prisma.location.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueLocationArgs) {
    return this.prisma.location.delete(args)
  }
}

import { Injectable } from '@nestjs/common'
import {
  FindManyManufacturerArgs,
  FindUniqueManufacturerArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateManufacturerInput } from './dtos/create-manufacturer.input'
import { UpdateManufacturerInput } from './dtos/update-manufacturer.input'

@Injectable()
export class ManufacturersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createManufacturerInput: CreateManufacturerInput) {
    return this.prisma.manufacturer.create({
      data: createManufacturerInput,
    })
  }

  findAll(args: FindManyManufacturerArgs) {
    return this.prisma.manufacturer.findMany(args)
  }

  findOne(args: FindUniqueManufacturerArgs) {
    return this.prisma.manufacturer.findUnique(args)
  }

  update(updateManufacturerInput: UpdateManufacturerInput) {
    const { uid, ...data } = updateManufacturerInput
    return this.prisma.manufacturer.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueManufacturerArgs) {
    return this.prisma.manufacturer.delete(args)
  }
}

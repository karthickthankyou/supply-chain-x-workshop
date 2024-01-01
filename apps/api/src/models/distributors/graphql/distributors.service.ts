import { Injectable } from '@nestjs/common'
import {
  FindManyDistributorArgs,
  FindUniqueDistributorArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateDistributorInput } from './dtos/create-distributor.input'
import { UpdateDistributorInput } from './dtos/update-distributor.input'

@Injectable()
export class DistributorsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDistributorInput: CreateDistributorInput) {
    return this.prisma.distributor.create({
      data: createDistributorInput,
    })
  }

  findAll(args: FindManyDistributorArgs) {
    return this.prisma.distributor.findMany(args)
  }

  findOne(args: FindUniqueDistributorArgs) {
    return this.prisma.distributor.findUnique(args)
  }

  update(updateDistributorInput: UpdateDistributorInput) {
    const { uid, ...data } = updateDistributorInput
    return this.prisma.distributor.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueDistributorArgs) {
    return this.prisma.distributor.delete(args)
  }
}

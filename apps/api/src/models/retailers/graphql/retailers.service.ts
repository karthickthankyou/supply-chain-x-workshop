import { Injectable } from '@nestjs/common'
import { FindManyRetailerArgs, FindUniqueRetailerArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateRetailerInput } from './dtos/create-retailer.input'
import { UpdateRetailerInput } from './dtos/update-retailer.input'

@Injectable()
export class RetailersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createRetailerInput: CreateRetailerInput) {
    return this.prisma.retailer.create({
      data: createRetailerInput,
    })
  }

  findAll(args: FindManyRetailerArgs) {
    return this.prisma.retailer.findMany(args)
  }

  findOne(args: FindUniqueRetailerArgs) {
    return this.prisma.retailer.findUnique(args)
  }

  update(updateRetailerInput: UpdateRetailerInput) {
    const { uid, ...data } = updateRetailerInput
    return this.prisma.retailer.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueRetailerArgs) {
    return this.prisma.retailer.delete(args)
  }
}

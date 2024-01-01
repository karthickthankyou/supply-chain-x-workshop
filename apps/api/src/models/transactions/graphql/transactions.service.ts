import { Injectable } from '@nestjs/common'
import {
  FindManyTransactionArgs,
  FindUniqueTransactionArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateTransactionInput } from './dtos/create-transaction.input'
import { UpdateTransactionInput } from './dtos/update-transaction.input'

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTransactionInput: CreateTransactionInput) {
    return this.prisma.transaction.create({
      data: createTransactionInput,
    })
  }

  findAll(args: FindManyTransactionArgs) {
    return this.prisma.transaction.findMany(args)
  }

  findOne(args: FindUniqueTransactionArgs) {
    return this.prisma.transaction.findUnique(args)
  }

  update(updateTransactionInput: UpdateTransactionInput) {
    const { id, ...data } = updateTransactionInput
    return this.prisma.transaction.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueTransactionArgs) {
    return this.prisma.transaction.delete(args)
  }
}

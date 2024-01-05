import { Injectable } from '@nestjs/common'
import {
  FindManyInventoryArgs,
  FindUniqueInventoryArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateInventoryInput } from './dtos/create-inventory.input'
import { UpdateInventoryInput } from './dtos/update-inventory.input'
import { Inventory } from './entity/inventory.entity'

@Injectable()
export class InventoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ productId, quantity, warehouseId }: CreateInventoryInput) {
    return this.prisma.$transaction(async (prisma) => {
      const existingInventory = await prisma.inventory.findFirst({
        where: {
          productId,
          warehouseId,
        },
      })

      let updatedInventory

      if (existingInventory) {
        updatedInventory = await prisma.inventory.update({
          where: {
            id: existingInventory.id,
          },
          data: {
            quantity: {
              increment: quantity,
            },
          },
        })
      } else {
        updatedInventory = await prisma.inventory.create({
          data: { quantity, productId, warehouseId },
        })
      }

      // Create a transaction record
      await prisma.transaction.create({
        data: {
          product: {
            connect: {
              id: productId,
            },
          },
          toWarehouse: {
            connect: {
              id: warehouseId,
            },
          },
          quantity,
        },
      })

      return updatedInventory
    })
  }

  async transferInventory(
    fromWarehouseId: number,
    toWarehouseId: number,
    productId: number,
    quantity: number,
    uid: string,
  ): Promise<Inventory | null> {
    return this.prisma.$transaction(async (prisma) => {
      await this.checkWarehouseOwner({
        uid,
        warehouseId: fromWarehouseId,
      })

      // 1. Check sender inventory
      const senderInventory = await prisma.inventory.findFirst({
        where: { productId, warehouseId: fromWarehouseId },
      })

      if (!senderInventory) {
        throw new Error('Sender inventory does not exist')
      }

      if (senderInventory.quantity < quantity) {
        throw new Error('Insufficient inventory for transfer')
      }

      // 2. Update sender inventory
      await prisma.inventory.update({
        where: { id: senderInventory.id },
        data: { quantity: { decrement: quantity } },
      })

      // 3. Check if receiver inventory exists
      const receiverInventory = await prisma.inventory.findFirst({
        where: { productId, warehouseId: toWarehouseId },
      })

      // 4. Update or create receiver inventory
      if (receiverInventory) {
        await prisma.inventory.update({
          where: { id: receiverInventory.id },
          data: { quantity: { increment: quantity } },
        })
      } else {
        await prisma.inventory.create({
          data: {
            quantity,
            productId,
            warehouseId: toWarehouseId,
          },
        })
      }

      await prisma.transaction.create({
        data: {
          quantity,
          fromWarehouseId,
          toWarehouseId,
          productId,
        },
      })

      // 5. Return sender inventory after successful transfer
      return senderInventory
    })
  }

  findAll(args: FindManyInventoryArgs) {
    return this.prisma.inventory.findMany(args)
  }

  findOne(args: FindUniqueInventoryArgs) {
    return this.prisma.inventory.findUnique(args)
  }

  update(updateInventoryInput: UpdateInventoryInput) {
    const { id, ...data } = updateInventoryInput
    return this.prisma.inventory.update({
      where: { id },
      data: data,
    })
  }

  async checkWarehouseOwner({
    uid,
    warehouseId,
  }: {
    uid: string
    warehouseId: number
  }) {
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id: warehouseId },
    })

    if (
      ![
        warehouse.distributorId,
        warehouse.manufacturerId,
        warehouse.retailerId,
      ].includes(uid)
    ) {
      throw new Error('Warehouse does not belong to you')
    }
  }

  async reduceInventory({
    uid,
    warehouseId,
    productId,
    quantity,
  }: {
    uid: string
    warehouseId: number
    productId: number
    quantity: number
  }) {
    await this.checkWarehouseOwner({
      uid,
      warehouseId,
    })

    return this.prisma.$transaction(async (prisma) => {
      const inventory = await prisma.inventory.findFirst({
        where: { productId, warehouseId },
      })

      if (!inventory) {
        throw new Error('Inventory not found')
      }

      const updatedInventory = await prisma.inventory.update({
        where: { id: inventory.id },
        data: { quantity: { decrement: quantity } },
      })

      // Create a transaction record for reducing inventory
      await prisma.transaction.create({
        data: {
          product: { connect: { id: productId } },
          fromWarehouse: { connect: { id: warehouseId } },
          quantity,
        },
      })

      return updatedInventory
    })
  }

  remove(args: FindUniqueInventoryArgs) {
    return this.prisma.inventory.delete(args)
  }
}

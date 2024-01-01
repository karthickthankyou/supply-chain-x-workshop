import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const deleteAll = async () => {
  await prisma.transaction.deleteMany()
  await prisma.inventory.deleteMany()
  await prisma.product.deleteMany()
  await prisma.location.deleteMany()
  await prisma.warehouse.deleteMany()
}

const reset = async () => {
  await deleteAll()
}

const main = async () => {
  await reset()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

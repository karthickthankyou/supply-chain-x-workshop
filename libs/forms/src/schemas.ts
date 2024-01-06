import { z } from 'zod'

export const formSchemaRegister = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
})

export const formSchemaSignIn = formSchemaRegister.pick({
  email: true,
  password: true,
})

export const formSchemaCreateItem = z.object({
  name: z.string().min(2),
})

export const addressSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  address: z.string().min(2),
})

export const formSchemaCreateWarehouse = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  manufacturerId: z.string().optional(),
  distributorId: z.string().optional(),
  retailerId: z.string().optional(),
  address: addressSchema,
})

export const formSchemaCreateProduct = z.object({
  name: z.string(),
  description: z.string().optional(),
  image: z.any().optional(),
})

export const formSchemaUpsertInventory = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
  warehouseId: z.number(),
})

export const formSchemaTransferInventory = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
  fromWarehouseId: z.number(),
  toWarehouseId: z.number(),
})

export const formSchemaSellInventory = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
  warehouseId: z.number(),
})

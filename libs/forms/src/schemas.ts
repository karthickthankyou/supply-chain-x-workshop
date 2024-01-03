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
  address: z.string(),
})

export const formSchemaCreateWarehouse = z.object({
  name: z.string(),
  description: z.string().optional(),
  manufacturerId: z.string().optional(),
  distributorId: z.string().optional(),
  retailerId: z.string().optional(),
  address: addressSchema,
})

'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateProduct } from './schemas'

export type FormTypeCreateProduct = z.infer<typeof formSchemaCreateProduct>

export const useFormCreateProduct = () =>
  useForm<FormTypeCreateProduct>({
    resolver: zodResolver(formSchemaCreateProduct),
  })

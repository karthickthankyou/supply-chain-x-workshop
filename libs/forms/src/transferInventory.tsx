'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaTransferInventory } from './schemas'

export type FormTypeTransferInventory = z.infer<
  typeof formSchemaTransferInventory
>

export const useFormTransferInventory = () =>
  useForm<FormTypeTransferInventory>({
    resolver: zodResolver(formSchemaTransferInventory),
  })

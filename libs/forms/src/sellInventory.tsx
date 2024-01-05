'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaSellInventory } from './schemas'

export type FormTypeSellInventory = z.infer<typeof formSchemaSellInventory>

export const useFormSellInventory = () =>
  useForm<FormTypeSellInventory>({
    resolver: zodResolver(formSchemaSellInventory),
    defaultValues: {
      quantity: 0,
    },
  })

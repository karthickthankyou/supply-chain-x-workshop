'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaUpsertInventory } from './schemas'

export type FormTypeUpsertInventory = z.infer<typeof formSchemaUpsertInventory>

export const useFormUpsertInventory = () =>
  useForm<FormTypeUpsertInventory>({
    resolver: zodResolver(formSchemaUpsertInventory),
  })

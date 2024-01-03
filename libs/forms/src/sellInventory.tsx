'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaSellInventory } from './schemas'

export type FormTypeSellInventory = z.infer<typeof formSchemaSellInventory>

export const useFormSellInventory = () =>
  useForm<FormTypeSellInventory>({
    resolver: zodResolver(formSchemaSellInventory),
  })

export const FormProviderSellInventory = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormSellInventory()
  return <FormProvider {...methods}>{children}</FormProvider>
}

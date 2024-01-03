'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateWarehouse } from './schemas'

export type FormTypeCreateWarehouse = z.infer<typeof formSchemaCreateWarehouse>

export const useFormCreateWarehouse = () =>
  useForm<FormTypeCreateWarehouse>({
    resolver: zodResolver(formSchemaCreateWarehouse),
  })

export const FormProviderCreateWarehouse = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateWarehouse()
  return <FormProvider {...methods}>{children}</FormProvider>
}

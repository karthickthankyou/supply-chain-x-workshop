'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateProduct } from './schemas'

export type FormTypeCreateProduct = z.infer<typeof formSchemaCreateProduct>

export const useFormCreateProduct = () =>
  useForm<FormTypeCreateProduct>({
    resolver: zodResolver(formSchemaCreateProduct),
  })

export const FormProviderCreateProduct = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateProduct()
  return <FormProvider {...methods}>{children}</FormProvider>
}

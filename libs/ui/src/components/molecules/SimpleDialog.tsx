'use client'
import { ReactNode, useEffect, useState } from 'react'

import { BaseComponent } from '@foundation/util/types'
import { Dialog, DialogContent, DialogTrigger } from '../atoms/dialog'

export interface ICreateReporterProps extends BaseComponent {
  buttonText: ReactNode
  close?: boolean
}

export const SimpleDialog = ({
  children,
  buttonText,
  close = false,
}: ICreateReporterProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (close) {
      setOpen(false)
    }
  }, [close])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-sm">{buttonText}</button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-[calc(100vh-4rem)] sm:max-w-lg">
        {children}
      </DialogContent>
    </Dialog>
  )
}

'use client'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { BaseComponent } from '@foundation/util/types'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '../atoms/dialog'

export interface ICreateReporterProps extends BaseComponent {
  buttonText: ReactNode
  open?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const SimpleDialog = ({
  children,
  buttonText,
  open = false,
  setOpen,
}: ICreateReporterProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-sm">{buttonText}</button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogTitle>Tite</DialogTitle>
        <DialogContent className="overflow-y-scroll max-h-[calc(100vh-4rem)] sm:max-w-lg">
          {children}
        </DialogContent>
        <DialogClose>Closes</DialogClose>
      </DialogPortal>
    </Dialog>
  )
}

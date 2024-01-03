'use client'
import { WarehouseDetailsFragment } from '@foundation/network/src/queries/generated'

import { useFormUpsertInventory } from '@foundation/forms/src/upsertInventory'
import { Input } from '../atoms/input'
import { Label } from '../atoms/label'

import { upsertInventory } from '@foundation/network/src/actions/upsertInventory'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../atoms/button'
import { SelectProducts } from '../molecules/SelectProducts'
import { SimpleDialog } from '../molecules/SimpleDialog'

export const UpsertInventory = ({
  warehouse,
}: {
  warehouse: WarehouseDetailsFragment
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormUpsertInventory()
  console.log('errors ', errors)

  const [close, setClose] = useState(false)

  return (
    <SimpleDialog
      close={close}
      buttonText={
        <div className="p-1 bg-black rounded-full shadow-md">
          <Plus className="p-1 text-white " />
        </div>
      }
    >
      {warehouse.name}
      <form
        onSubmit={handleSubmit(async ({ productId, quantity, warehouseId }) => {
          console.log('data', productId, quantity, warehouseId)

          await upsertInventory({ productId, quantity, warehouseId })

          reset()
          setClose(true)
        })}
      >
        <Label title="Product" error={errors.productId?.message}>
          <SelectProducts
            onSelect={function (productId: number): void {
              setValue('productId', productId)
            }}
            manufacturerId={warehouse.id}
          />
        </Label>
        <Label title="Quantity">
          <Input {...register('quantity', { valueAsNumber: true })} />
        </Label>
        <Label title="Warehouse ID (readonly)">
          <Input
            {...register('warehouseId', { valueAsNumber: true })}
            readOnly
            value={warehouse.id}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </form>
    </SimpleDialog>
  )
}

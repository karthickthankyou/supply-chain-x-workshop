'use client'
import { useState } from 'react'

import { useFormTransferInventory } from '@foundation/forms/src/transferInventory'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'

import {
  TransferInventoryDocument,
  WarehouseDetailsFragment,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { Button } from '../atoms/button'
import { fetchGraphQLClient } from '@foundation/network/src/fetch/client'
import { SimpleDialog } from '../molecules/SimpleDialog'
import { revalidate } from '@foundation/network/src/actions/revalidate'

export const TransferGoods = ({
  warehouseId,
  inventory,
}: {
  warehouseId: number
  inventory: WarehouseDetailsFragment['inventories'][0]
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useFormTransferInventory()
  const [open, setOpen] = useState(false)

  const data = watch()
  console.log('data , errors', data, errors)

  return (
    <SimpleDialog
      open={open}
      setOpen={setOpen}
      buttonText={
        <div className=" hover:underline underline-offset-4">Transfer</div>
      }
    >
      <div>{inventory.product.name}</div>
      <div>{inventory.quantity}</div>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(
          async ({ productId, quantity, fromWarehouseId, toWarehouseId }) => {
            const { data, error } = await fetchGraphQLClient({
              document: TransferInventoryDocument,
              variables: {
                fromWarehouseId,
                productId,
                quantity,
                toWarehouseId,
              },
            })

            if (data?.transferInventory) {
              revalidate(namedOperations.Query.myWarehouses)
            }
            if (error) {
              alert('Transfer failed.')
            }

            setOpen(false)
            reset()
          },
        )}
      >
        <Label
          title="Warehouse ID (readonly)"
          error={errors.fromWarehouseId?.message}
        >
          <Input
            {...register('fromWarehouseId', { valueAsNumber: true })}
            readOnly
            value={warehouseId}
          />
        </Label>
        <Label title="Product ID (readonly)" error={errors.productId?.message}>
          <Input
            {...register('productId', { valueAsNumber: true })}
            readOnly
            value={inventory.product.id}
          />
        </Label>
        <Label
          title="Target Warehouse ID"
          error={errors.toWarehouseId?.message}
        >
          <Input {...register('toWarehouseId', { valueAsNumber: true })} />
        </Label>
        <Label title="Quantity" error={errors.quantity?.message}>
          <Input {...register('quantity', { valueAsNumber: true })} />
        </Label>
        <Button type="submit">Submit</Button>
      </form>
    </SimpleDialog>
  )
}

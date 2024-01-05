'use client'
import { useState } from 'react'

import { useFormSellInventory } from '@foundation/forms/src/sellInventory'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'
import {
  MyWarehousesQuery,
  ReduceInventoryDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { Button } from '../atoms/button'
import { SimpleDialog } from '../molecules/SimpleDialog'
import { fetchGraphQLClient } from '@foundation/network/src/fetch/client'
import { revalidate } from '@foundation/network/src/actions/revalidate'

export const SellGoods = ({
  warehouseId,
  inventory,
}: {
  warehouseId: number
  inventory: MyWarehousesQuery['myWarehouses'][0]['inventories'][0]
}) => {
  const { register, handleSubmit, reset } = useFormSellInventory()
  const [open, setOpen] = useState(false)

  return (
    <SimpleDialog
      open={open}
      setOpen={setOpen}
      buttonText={
        <div className=" hover:underline underline-offset-4">Sell</div>
      }
    >
      <div>{inventory.product.name}</div>
      <div>{inventory.quantity}</div>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(async ({ productId, quantity, warehouseId }) => {
          const { data, error } = await fetchGraphQLClient({
            document: ReduceInventoryDocument,
            variables: {
              warehouseId,
              productId,
              quantity,
            },
          })

          if (data) {
            revalidate(namedOperations.Query.myWarehouses)
          }
          if (error) {
            alert('Selling products failed.')
          }

          setOpen(false)
          reset()
        })}
      >
        <Label title="Quantity">
          <Input {...register('quantity', { valueAsNumber: true })} />
        </Label>
        <Label title="Warehouse ID (readonly)">
          <Input
            {...register('warehouseId', { valueAsNumber: true })}
            readOnly
            value={warehouseId}
          />
        </Label>
        <Label title="Product ID (readonly)">
          <Input
            {...register('productId', { valueAsNumber: true })}
            readOnly
            value={inventory.product.id}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </form>
    </SimpleDialog>
  )
}

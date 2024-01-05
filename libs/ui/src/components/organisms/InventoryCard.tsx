import { WarehouseDetailsFragment } from '@foundation/network/src/queries/generated'
import Image from 'next/image'
import { TransferGoods } from './TransferGoods'
import { SellGoods } from './SellGoods'

export const InventoryCard = ({
  inventory,
  warehouseId,
}: {
  inventory: WarehouseDetailsFragment['inventories'][0]
  warehouseId: number
}) => {
  return (
    <div className="flex overflow-hidden border border-white rounded-lg shadow-lg">
      <Image
        src={inventory.product.image || '/empty-product.jpeg'}
        width={200}
        height={200}
        className="object-cover w-36 h-36 "
        alt={''}
      />
      <div className="flex flex-col p-1 bg-white w-36 h-36">
        <div className="p-2">
          <div className="text-xs">{inventory.product.name}</div>
          <div className="text-xl font-semibold">{inventory.quantity}</div>
        </div>
        <div className="flex justify-around gap-2 py-2 mt-auto border-t">
          <TransferGoods warehouseId={warehouseId} inventory={inventory} />
          <div className="w-[1px] h-full bg-black/10 rounded" />
          <SellGoods warehouseId={warehouseId} inventory={inventory} />
        </div>
      </div>
    </div>
  )
}

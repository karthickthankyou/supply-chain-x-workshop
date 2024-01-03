import { MyWarehousesQuery } from '@foundation/network/src/queries/generated'

import { UpsertInventory } from '../organisms/UpsertInventory'
import { TransactionsTable } from '../organisms/TransactionsTable'
import { InventoryCard } from '../organisms/InventoryCard'
import { WarehouseDetails } from '../organisms/WarehouseDetails'

type WarehouseProps = {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
  showUpsertInventory?: boolean
}

export const Warehouse = ({
  warehouse,
  showUpsertInventory = false,
}: WarehouseProps) => {
  return (
    <div className="space-y-8">
      <WarehouseDetails warehouse={warehouse} />

      <div>
        <div className="flex items-center gap-2 mt-4 mb-2 ">
          <div className="font-semibold">Inventory</div>
          {showUpsertInventory ? (
            <UpsertInventory warehouse={warehouse} />
          ) : null}
        </div>
        {warehouse.inventories.length === 0 ? <div>Empty.</div> : null}
        <div className="flex flex-wrap gap-4">
          {warehouse.inventories.map((inventory) => (
            <InventoryCard
              inventory={inventory}
              key={inventory.product.id}
              warehouseId={warehouse.id}
            />
          ))}
        </div>
      </div>
      {warehouse.ins.length ? (
        <div>
          <div>Ins</div>
          <TransactionsTable transactions={warehouse.ins} />
        </div>
      ) : null}
      {warehouse.outs.length ? (
        <div>
          <div>Outs</div>
          <TransactionsTable transactions={warehouse.outs} />
        </div>
      ) : null}
    </div>
  )
}

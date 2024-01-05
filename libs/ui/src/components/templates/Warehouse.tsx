import { WarehouseDetailsFragment } from '@foundation/network/src/queries/generated'
import { WarehouseDetails } from '../organisms/WarehouseDetails'
import { Title2 } from '../atoms/typography'
import { InventoryCard } from '../organisms/InventoryCard'
import { UpsertInventory } from '../organisms/UpsertInventory'
import { TransactionsTable } from '../organisms/TransactionsTable'

export const Warehouse = ({
  warehouse,
  showUpsertInventory,
}: {
  warehouse: WarehouseDetailsFragment
  showUpsertInventory?: boolean
}) => {
  return (
    <div className="space-y-6">
      <WarehouseDetails warehouse={warehouse} />
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Title2 className="mb-0">Inventory</Title2>
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
          <Title2>Ins</Title2>
          <TransactionsTable transactions={warehouse.ins} />
        </div>
      ) : null}
      {warehouse.outs.length ? (
        <div>
          <Title2>Outs</Title2>
          <TransactionsTable transactions={warehouse.outs} />
        </div>
      ) : null}
    </div>
  )
}

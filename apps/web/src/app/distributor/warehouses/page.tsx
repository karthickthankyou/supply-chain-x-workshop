import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import {
  MyWarehousesDocument,
  SortOrder,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import Link from 'next/link'
import { WarehouseCard } from '@foundation/ui/src/components/organisms/WarehouseCard'

export default async function DistributorWarehousesPage() {
  const { data, error } = await fetchGraphQLServer({
    document: MyWarehousesDocument,
    variables: { orderBy: { createdAt: SortOrder.Desc } },
    config: {
      next: {
        tags: [namedOperations.Query.myWarehouses],
      },
    },
  })
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div>Warehouses</div>
        <Link href="/distributor/warehouses/new">New</Link>
      </div>
      {data?.myWarehouses.length === 0 ? <div>No warehouses found.</div> : null}

      <div className="grid grid-cols-3 gap-3">
        {data?.myWarehouses.map((warehouse) => (
          <Link
            href={`/distributor/warehouses/${warehouse.id}`}
            key={warehouse.id}
          >
            <WarehouseCard warehouse={warehouse} />
          </Link>
        ))}
      </div>
    </div>
  )
}

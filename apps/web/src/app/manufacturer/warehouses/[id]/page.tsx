import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import {
  WarehouseDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'

export default async function ProductPage({
  params,
}: {
  params: { id: number }
}) {
  const { data, error } = await fetchGraphQLServer({
    document: WarehouseDocument,
    variables: {
      where: { id: +params.id },
    },
    config: {
      next: {
        tags: [namedOperations.Query.warehouse],
      },
    },
  })

  if (!data?.warehouse) {
    return <div>Warehouse not found.</div>
  }

  return <div>name: {data.warehouse.name}</div>
}

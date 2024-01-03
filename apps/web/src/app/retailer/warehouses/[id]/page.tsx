import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import {
  WarehouseDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { Warehouse } from '@foundation/ui/src/components/templates/Warehouse'

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

  return <Warehouse warehouse={data.warehouse} />
}

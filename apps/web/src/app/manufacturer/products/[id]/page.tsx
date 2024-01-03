import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import {
  ProductDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { ProductFlow } from '@foundation/ui/src/components/organisms/ProductFlow'

import { ProductDetails } from '@foundation/ui/src/components/organisms/ProductDetails'

export default async function ProductPage({
  params,
}: {
  params: { id: number }
}) {
  const { data, error } = await fetchGraphQLServer({
    document: ProductDocument,
    variables: {
      where: { id: +params.id },
    },
    config: {
      next: {
        tags: [namedOperations.Query.product],
      },
    },
  })

  if (!data?.product) {
    return <div>Product not found.</div>
  }

  return (
    <div className="space-y-6">
      <ProductDetails product={data.product} />
      <ProductFlow product={data.product} />
    </div>
  )
}

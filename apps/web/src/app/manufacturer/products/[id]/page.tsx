import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import {
  ProductDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { ProductDetails } from '@foundation/ui/src/components/organisms/ProductDetails'
import { ProductFlow } from '@foundation/ui/src/components/organisms/ProductFlow'

export default async function ManufacturerProductPage({
  params,
}: {
  params: { id: string }
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
    <div>
      <ProductDetails product={data.product} />
      <ProductFlow product={data.product} />
    </div>
  )
}

import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import {
  MyProductsDocument,
  SortOrder,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import Link from 'next/link'
import { ProductCard } from '@foundation/ui/src/components/organisms/ProductCard'

export default async function WarehousesPage() {
  const { data, error } = await fetchGraphQLServer({
    document: MyProductsDocument,
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
        <div>Products</div>
        <Link href="/manufacturer/products/new">New</Link>
      </div>
      <div>{data?.myProducts.length === 0 ? 'No products' : null}</div>
      <div className="grid grid-cols-3 gap-4">
        {data?.myProducts.map((product) => (
          <Link href={`/manufacturer/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}

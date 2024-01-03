import { ManufacturerQuery } from '@foundation/network/src/queries/generated'

import { DisplayUser } from '../molecules/DisplayUser'
import { Link } from '../molecules/CustomLink'

export const ManufacturerMenu = ({ manufacturer }: ManufacturerQuery) => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2">
      <DisplayUser size="lg" rounded="lg" className="mb-4" />

      <div className="flex flex-col gap-2">
        <Link href="/manufacturer">Dashboard</Link>
        <Link href="/manufacturer/products">Manage Products</Link>
        {manufacturer?.products.map((product) => (
          <Link
            href={`/manufacturer/products/${product.id}`}
            className="translate-x-4"
          >
            {product.name}
          </Link>
        ))}
        <Link href="/manufacturer/warehouses">Manage Warehouses</Link>
        {manufacturer?.warehouses.map((warehouse) => (
          <Link
            href={`/manufacturer/warehouses/${warehouse.id}`}
            className="translate-x-4"
          >
            {warehouse.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

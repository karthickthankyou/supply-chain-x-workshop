import { RetailerQuery } from '@foundation/network/src/queries/generated'

import { DisplayUser } from '../molecules/DisplayUser'
import { Link } from '../molecules/CustomLink'

export const RetailerMenu = ({ retailer }: RetailerQuery) => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2">
      <DisplayUser size="lg" rounded="lg" />

      <div className="flex flex-col gap-2">
        <Link href="/retailer">Dashboard</Link>
        <Link href="/retailer/warehouses">Manage Warehouses</Link>
        {retailer?.warehouses.map((warehouse) => (
          <Link
            href={`/retailer/warehouses/${warehouse.id}`}
            className="translate-x-4"
          >
            {warehouse.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

import { DistributorQuery } from '@foundation/network/src/queries/generated'

import { DisplayUser } from '../molecules/DisplayUser'
import { Link } from '../molecules/CustomLink'

export const DistributorMenu = ({ distributor }: DistributorQuery) => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2">
      <DisplayUser size="lg" rounded="lg" />

      <div className="flex flex-col gap-2">
        <Link href="/distributor">Dashboard</Link>
        <Link href="/distributor/warehouses">Manage Warehouses</Link>
        {distributor?.warehouses.map((warehouse) => (
          <Link
            href={`/distributor/warehouses/${warehouse.id}`}
            className="translate-x-4"
          >
            {warehouse.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

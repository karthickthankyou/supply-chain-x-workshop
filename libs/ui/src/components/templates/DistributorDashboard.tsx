import { DistributorQuery } from '@foundation/network/src/queries/generated'
import { StatCard } from '../molecules/StatCard'

export const DistributorDashboard = ({ distributor }: DistributorQuery) => {
  return (
    <div>
      Dashboard
      <div>{distributor?.uid}</div>
      <div className="flex gap-2 mt-4">
        <StatCard title={'Warehouses'} href={'/distributor/warehouses'}>
          {distributor?.warehouses.length}
        </StatCard>
      </div>
    </div>
  )
}

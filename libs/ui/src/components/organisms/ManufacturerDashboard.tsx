import { ManufacturerQuery } from '@foundation/network/src/queries/generated'
import { StatCard } from '../molecules/StatCard'

export const ManufacturerDashboard = ({ manufacturer }: ManufacturerQuery) => {
  return (
    <div>
      Dashboard
      <div>{manufacturer?.uid}</div>
      <div className="flex gap-2 mt-4">
        <StatCard title={'Products'} href={'/manufacturer/products'}>
          {manufacturer?.products.length}
        </StatCard>
        <StatCard title={'Warehouses'} href={'/manufacturer/warehouses'}>
          {manufacturer?.warehouses.length}
        </StatCard>
      </div>
    </div>
  )
}

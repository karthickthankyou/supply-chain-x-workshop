import { getAuth } from '@foundation/network/src/auth/authOptions'
import { CreateWarehouse } from '@foundation/ui/src/components/organisms/CreateWarehouse'

export default async function WarehousesPage() {
  const user = await getAuth()
  return (
    <CreateWarehouse
      redirectUrl="/retailer/warehouses"
      warehouseRole={{ retailerId: user?.user?.uid }}
    />
  )
}

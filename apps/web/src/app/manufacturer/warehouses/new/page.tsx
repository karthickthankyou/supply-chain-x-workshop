import { getAuth } from '@foundation/network/src/auth/authOptions'
import { CreateWarehouse } from '@foundation/ui/src/components/organisms/CreateWarehouse'
import Link from 'next/link'

export default async function CreateWarehousePage() {
  const user = await getAuth()
  if (!user?.user) {
    return <Link href="/signin">Sign in</Link>
  }
  return (
    <CreateWarehouse
      redirectUrl="/manufacturer/warehouses"
      warehouseRole={{ manufacturerId: user.user.uid }}
    />
  )
}

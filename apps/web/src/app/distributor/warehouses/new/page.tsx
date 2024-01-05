import { getAuth } from '@foundation/network/src/auth/authOptions'
import { CreateWarehouse } from '@foundation/ui/src/components/templates/CreateWarehouse'
import { SignInButton } from '@foundation/ui/src/components/molecules/SignInButton'

export default async function ManufacturerNewWarehousePage() {
  const session = await getAuth()

  if (!session?.user) {
    return <SignInButton />
  }

  return (
    <CreateWarehouse
      redirectUrl="/distributor/warehouses"
      warehouseRole={{ distributorId: session.user.uid }}
    />
  )
}

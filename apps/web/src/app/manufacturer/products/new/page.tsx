import { getAuth } from '@foundation/network/src/auth/authOptions'
import { CreateProduct } from '@foundation/ui/src/components/templates/CreateProduct'

export default async function CreateProductPage() {
  const session = await getAuth()
  if (!session?.user?.uid) {
    return null
  }
  return <CreateProduct manufacturerId={session.user.uid} />
}

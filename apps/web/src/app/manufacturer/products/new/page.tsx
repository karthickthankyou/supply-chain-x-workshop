import { getAuth } from '@foundation/network/src/auth/authOptions'
import { CreateProduct } from '@foundation/ui/src/components/templates/CreateProduct'
import { redirect } from 'next/navigation'

export default async function NewProductPage() {
  const session = await getAuth()
  if (!session?.user?.uid) {
    redirect('/signIn')
  }
  return <CreateProduct manufacturerId={session.user.uid} />
}

import { getAuth } from '@foundation/network/src/auth/authOptions'
import { fetchGraphqlStatic } from '@foundation/network/src/fetch'
import {
  ManufacturerDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { redirect } from 'next/navigation'
import { ManufacturerDashboard } from '@foundation/ui/src/components/organisms/ManufacturerDashboard'

export default async function ManufacturerPage() {
  const session = await getAuth()
  if (!session?.user) {
    redirect('/signIn')
  }

  const { data, error } = await fetchGraphqlStatic({
    document: ManufacturerDocument,
    variables: { where: { uid: session.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.manufacturer],
      },
    },
  })

  if (!data?.manufacturer) {
    return <div>Manufacturer not found.</div>
  }

  return <ManufacturerDashboard manufacturer={data.manufacturer} />
}

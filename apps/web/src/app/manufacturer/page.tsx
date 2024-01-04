import { getAuth } from '@foundation/network/src/auth/authOptions'
import { fetchGraphqlStatic } from '@foundation/network/src/fetch'
import {
  ManufacturerDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { redirect } from 'next/navigation'

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

  return <div>Hello from page.</div>
}

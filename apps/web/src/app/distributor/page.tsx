import {
  DistributorDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import { DistributorDashboard } from '@foundation/ui/src/components/templates/DistributorDashboard'
import { getAuth } from '@foundation/network/src/auth/authOptions'
import Link from 'next/link'

export default async function DistributorPage() {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
  const { data, error } = await fetchGraphQLServer({
    document: DistributorDocument,
    variables: { where: { uid: user.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.distributor],
      },
    },
  })

  if (!data?.distributor) {
    // This condition should not technically happen as we check this in layout file. But right now there is no way of passing the data fetched in layout to the page.
    return <div>Distributor account not found.</div>
  }

  return <DistributorDashboard distributor={data.distributor} />
}

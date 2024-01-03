import {
  ManufacturerDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import { ManufacturerDashboard } from '@foundation/ui/src/components/organisms/ManufacturerDashboard'
import { getAuth } from '@foundation/network/src/auth/authOptions'
import Link from 'next/link'

export default async function EmployerPage() {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }
  // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
  const { data, error } = await fetchGraphQLServer({
    document: ManufacturerDocument,
    variables: { where: { uid: user.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.Manufacturer],
      },
    },
  })

  console.log(data, error)

  if (!data?.manufacturer) {
    // This condition should not technically happen as we check this in layout file. But right now there is no way of passing the data fetched in layout to the page.
    return <div>Manufacturer account not found.</div>
  }

  return <ManufacturerDashboard manufacturer={data.manufacturer} />
}

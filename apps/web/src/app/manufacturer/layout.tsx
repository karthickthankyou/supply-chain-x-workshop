import Link from 'next/link'
import { CreateManufacturerAccount } from '@foundation/ui/src/components/organisms/CreateManufacturerAccount'
import { ManufacturerMenu } from '@foundation/ui/src/components/organisms/ManufacturerMenu'

import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import { getAuth } from '@foundation/network/src/auth/authOptions'
import {
  ManufacturerDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'

export default async function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQLServer({
    document: ManufacturerDocument,
    variables: { where: { uid: user.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.Manufacturer],
      },
    },
  })

  const manufacturer = data?.manufacturer

  if (!manufacturer) {
    return <CreateManufacturerAccount uid={user.user.uid} />
  }

  return (
    <div className="flex mt-2 ">
      <div className="hidden w-full max-w-xs min-w-min sm:block">
        <ManufacturerMenu manufacturer={manufacturer} />
      </div>

      <div className="flex-grow ">
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  )
}

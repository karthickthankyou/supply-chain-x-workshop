import Link from 'next/link'
import { CreateDistributorAccount } from '@foundation/ui/src/components/organisms/CreateDistributor'
import {
  DistributorMenu,
  DistributorSidebar,
} from '@foundation/ui/src/components/organisms/DistributorMenu'

import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import { getAuth } from '@foundation/network/src/auth/authOptions'
import {
  DistributorDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { Suspense } from 'react'

export default async function DistributorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQLServer({
    document: DistributorDocument,
    variables: { where: { uid: user.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.distributor],
      },
    },
  })

  const distributor = data?.distributor

  if (!distributor) {
    return <CreateDistributorAccount uid={user.user.uid} />
  }

  return (
    <div className="flex mt-2 ">
      <div className="hidden w-full max-w-xs sm:block">
        <DistributorMenu distributor={distributor} />
      </div>

      <div className="flex-grow ">
        <div className="sm:hidden">
          <DistributorSidebar distributor={distributor} />
        </div>
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  )
}

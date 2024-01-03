import Link from 'next/link'
import { CreateRetailerAccount } from '@foundation/ui/src/components/organisms/CreateRetailer'
import {
  RetailerMenu,
  RetailerSidebar,
} from '@foundation/ui/src/components/organisms/RetailerMenu'

import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import { getAuth } from '@foundation/network/src/auth/authOptions'
import {
  DistributorDocument,
  ManufacturerDocument,
  RetailerDocument,
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
    document: RetailerDocument,
    variables: { where: { uid: user.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.retailer],
      },
    },
  })

  const retailer = data?.retailer

  if (!retailer) {
    return <CreateRetailerAccount uid={user.user.uid} />
  }

  return (
    <div className="flex mt-2 ">
      <div className="hidden w-full max-w-xs sm:block">
        <RetailerMenu retailer={retailer} />
      </div>

      <div className="flex-grow ">
        <div className="sm:hidden">
          <RetailerSidebar retailer={retailer} />
        </div>
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  )
}

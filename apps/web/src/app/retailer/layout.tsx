import { getAuth } from '@foundation/network/src/auth/authOptions'
import {
  RetailerDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import { CreateRoleAccount } from '@foundation/ui/src/components/organisms/CreateRoleAccount'
import { RetailerMenu } from '@foundation/ui/src/components/organisms/RetailerMenu'

export default async function ManufacturerLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getAuth()
  if (!session?.user) {
    redirect('/signIn')
  }

  const { data, error } = await fetchGraphQLServer({
    document: RetailerDocument,
    variables: { where: { uid: session.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.retailer],
      },
    },
  })

  if (!data?.retailer) {
    return <CreateRoleAccount role="retailer" uid={session.user.uid} />
  }

  return (
    <div className="flex gap-2">
      <div className="hidden w-full max-w-xs min-w-min sm:block">
        <RetailerMenu retailer={data.retailer} />
      </div>
      <div className="flex-grow ">
        <div className="p-4 bg-gray-100 rounded-lg">{children}</div>
      </div>
    </div>
  )
}

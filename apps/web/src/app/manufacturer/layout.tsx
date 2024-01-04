import { getAuth } from '@foundation/network/src/auth/authOptions'
import { fetchGraphqlStatic } from '@foundation/network/src/fetch'
import {
  ManufacturerDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { CreateManufacturerAccount } from '@foundation/ui/src/components/organisms/CreateManufacturerAccount'

export default async function ManufacturerLayout({
  children,
}: {
  children: ReactNode
}) {
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
    return <CreateManufacturerAccount uid={session.user.uid} />
  }

  return <div>Hello from layout {children}</div>
}

import { getAuth } from '@foundation/network/src/auth/authOptions'
import Link from 'next/link'
import { ReactNode } from 'react'
import { ManufacturerDocument } from '@foundation/network/src/queries/generated'
import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import { CreateManufacturerAccount } from '@foundation/ui/src/components/organisms/CreateManufacturerAccount'

export default async function ManufacturerLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getAuth()

  if (!session?.user) {
    return <Link href="/api/auth/signin">Sign In</Link>
  }

  const { data, error } = await fetchGraphQLServer({
    document: ManufacturerDocument,
    variables: { where: { uid: session.user.uid } },
  })

  if (!data?.manufacturer) {
    return <CreateManufacturerAccount uid={session.user.uid} />
  }

  return (
    <div>
      {data.manufacturer.uid} {children}
    </div>
  )
}

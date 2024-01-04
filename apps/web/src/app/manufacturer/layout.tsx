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
import { ManufacturerMenu } from '@foundation/ui/src/components/organisms/ManufacturerMenu'

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

  return (
    <div className="flex mt-2 ">
      <div className="hidden w-full max-w-xs min-w-min sm:block">
        <ManufacturerMenu manufacturer={data.manufacturer} />
      </div>

      <div className="flex-grow ">
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  )
}

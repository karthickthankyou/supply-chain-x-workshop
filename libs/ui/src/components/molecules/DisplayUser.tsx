import { getAuth } from '@foundation/network/src/auth/authOptions'
import Image from 'next/image'
import { cn } from '../../util'

export const DisplayUser = async ({
  rounded = 'full',
  size = 'sm',
}: {
  rounded?: 'full' | 'lg'
  size?: 'sm' | 'lg'
}) => {
  const session = await getAuth()

  if (!session?.user) {
    return null
  }

  const roundedCls = rounded === 'full' ? 'rounded-full' : 'rounded-lg'
  const sizeCls = size === 'lg' ? 'w-full' : 'w-16'

  return (
    <div>
      <Image
        className={cn('aspect-square object-cover', sizeCls, roundedCls)}
        width={600}
        height={600}
        src={session?.user?.image || '/no-image.jpeg'}
        alt={''}
      />

      <div className={`text-xl font-light capitalize mt-2`}>
        {session?.user?.name}
      </div>
      <div className="mt-1 text-xs text-gray-500">{session?.user?.uid}</div>
    </div>
  )
}

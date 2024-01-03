import { getAuth } from '@foundation/network/src/auth/authOptions'
import Image from 'next/image'
import { cn } from '../../util'
import { BaseComponent } from '@foundation/util/types'

export const DisplayUser = async ({
  rounded = 'full',
  size = 'sm',
  className,
}: {
  rounded?: 'full' | 'lg'
  size?: 'sm' | 'lg'
} & BaseComponent) => {
  const session = await getAuth()

  if (!session?.user) {
    return null
  }

  const roundedCls = rounded === 'full' ? 'rounded-full' : 'rounded-lg'
  const sizeCls = size === 'lg' ? 'w-full' : 'w-16'

  return (
    <div className={className}>
      <Image
        className={cn(
          'rounded-full aspect-square object-cover shadow-lg',
          sizeCls,
          roundedCls,
        )}
        width={600}
        height={600}
        src={session?.user?.image || '/no-image.jpeg'}
        alt={''}
      />

      <div className={`text-xl font-light capitalize mt-2`}>
        {session?.user?.name}
      </div>
      <div className="text-xs text-gray-500">{session?.user?.uid}</div>
    </div>
  )
}

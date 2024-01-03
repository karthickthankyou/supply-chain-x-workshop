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
      {session?.user?.image ? (
        <Image
          className={cn(
            'w-16 h-16 rounded-full aspect-square',
            sizeCls,
            roundedCls,
          )}
          width={600}
          height={600}
          src={session?.user?.image || ''}
          alt={''}
        />
      ) : (
        <div
          className={cn(
            'flex items-center aspect-square justify-center flex-shrink-0 text-3xl font-semibold border-2 border-black',
            sizeCls,
            roundedCls,
          )}
        >
          {session?.user?.name?.charAt(0)}
        </div>
      )}
      <div className={`text-xl font-light capitalize mt-2`}>
        {session?.user?.name}
      </div>
      <div className="text-xs text-gray-500">{session?.user?.uid}</div>
    </div>
  )
}

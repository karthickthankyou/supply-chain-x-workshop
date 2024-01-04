import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export const HeroLink = ({
  Icon,
  children,
  url,
}: {
  Icon: LucideIcon
  children: ReactNode
  url: string
}) => {
  return (
    <Link
      href={url}
      className="flex flex-col items-center justify-center h-24 gap-2 transition-all border-2 rounded w-36 hover:shadow-xl hover:border-black hover:scale-105"
    >
      <Icon /> <div className="font-semibold">{children}</div>
    </Link>
  )
}

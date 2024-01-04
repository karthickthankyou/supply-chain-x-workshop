import Link from 'next/link'
import { ReactNode } from 'react'

export const StatCard = ({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children?: ReactNode
}) => (
  <Link href={href}>
    <div className="p-4 space-y-1 border border-white rounded-lg shadow-lg w-36 bg-white/50">
      <div>{title}</div>
      <div className="text-3xl ">{children}</div>
    </div>
  </Link>
)

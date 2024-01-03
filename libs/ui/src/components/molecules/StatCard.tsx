import Link from 'next/link'

export const StatCard = ({
  title,
  href,
  count,
}: {
  title: string
  href: string
  count?: number
}) => (
  <Link href={href}>
    <div className="p-4 space-y-1 border border-white rounded-lg shadow-lg w-36 bg-white/50">
      <div>{title}</div>
      <div className="text-3xl ">{count || 0}</div>
    </div>
  </Link>
)

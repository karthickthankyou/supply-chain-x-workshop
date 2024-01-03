import { Map } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface IMapLinkProps {
  lat?: number
  lng?: number
  children?: ReactNode
}

export const MapLink = ({ lat, lng, children = <Map /> }: IMapLinkProps) => {
  if (!lat || !lng) {
    return null
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  return (
    <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}

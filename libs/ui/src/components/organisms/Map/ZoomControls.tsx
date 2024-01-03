'use client'
import { LucideIcon, Minus, Plus, Warehouse } from 'lucide-react'
import { ReactNode } from 'react'

import { useMap } from 'react-map-gl'

export interface IZoomControlsProps {}

const MapControls = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col overflow-hidden border border-white divide-y divide-white rounded shadow-lg bg-white/50 backdrop-blur backdrop-filter">
    {children}
  </div>
)

const ZoomIn = () => {
  const { current: map } = useMap()

  return (
    <button
      className="rounded-none hover:bg-white "
      type="button"
      onClick={() => map?.zoomIn()}
    >
      <Plus className="w-8 h-8 p-1.5 " />
    </button>
  )
}

const ZoomOut = () => {
  const { current: map } = useMap()
  return (
    <button
      className="rounded-none hover:bg-white "
      type="button"
      onClick={() => map?.zoomOut()}
    >
      <Minus className="w-8 h-8 p-1.5 " />
    </button>
  )
}

export const CenterOfMap = ({
  onClick,
  Icon = Warehouse,
}: {
  onClick: (latLng: { lng: number; lat: number }) => void
  Icon?: LucideIcon
}) => {
  const { current: map } = useMap()
  return (
    <button
      className=" hover:bg-white"
      type="button"
      onClick={() => {
        const { lat, lng } = map?.getCenter() as { lng: number; lat: number }
        onClick({ lat, lng })
      }}
    >
      <Icon className="w-8 h-8 p-1.5 text-black" />
    </button>
  )
}

MapControls.ZoomIn = ZoomIn
MapControls.ZoomOut = ZoomOut

export default MapControls

export const DefaultZoomControls = ({ children }: { children?: ReactNode }) => (
  <MapControls>
    <ZoomIn />
    <ZoomOut />
    {children}
  </MapControls>
)

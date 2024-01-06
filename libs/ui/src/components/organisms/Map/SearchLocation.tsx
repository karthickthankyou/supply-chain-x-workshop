import React from 'react'
import { ViewState } from './Map'
import { useSearchLocation } from '@foundation/util/hooks'
import { useMap } from 'react-map-gl'
import { Input } from '../../atoms/input'
import { Loader } from 'lucide-react'

export function SearchLocation({
  onLocationChange,
}: {
  onLocationChange?: (location: ViewState) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  const { loading, setSearchText, locationInfo } = useSearchLocation()

  React.useEffect(() => {
    setSearchText(value)
  }, [setSearchText, value])

  const { current: map } = useMap()
  return (
    <div className="relative">
      <Input
        placeholder="Search place..."
        value={value}
        onChange={(e) => {
          setOpen(e.target.value.length > 0)
          setValue(e.target.value)
        }}
        className="border border-white bg-white/50"
      />
      {open ? (
        <div className="">
          {loading && <Loader className="animate-spin" />}
          <div className="absolute z-10 mt-0.5 overflow-hidden rounded-lg top-full">
            {locationInfo.map((place) => (
              <button
                className="block w-full p-2 text-left underline transition-all underline-offset-4 hover:bg-white bg-white/30 backdrop-blur"
                key={place.placeName}
                onClick={() => {
                  const {
                    latLng: [latitude, longitude],
                  } = place
                  if (onLocationChange) {
                    onLocationChange({ latitude, longitude, zoom: 10 })
                  }
                  setOpen(false)
                  setValue('')
                  map?.flyTo({
                    center: { lat: latitude, lng: longitude },
                    essential: true,
                  })
                }}
              >
                {place.placeName}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

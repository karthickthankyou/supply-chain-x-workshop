import React, { FunctionComponent } from 'react'
import { Layer, Source, Marker } from 'react-map-gl'
import { Location } from '@foundation/util/index'

type MapLineProps = {
  from?: Location | null
  to?: Location | null
  children?: React.ReactNode
  lineId: string
}

const calculateMidpoint = (from: Location, to: Location): Location => {
  return {
    latitude: (from.latitude + to.latitude) / 2,
    longitude: (from.longitude + to.longitude) / 2,
  }
}

export const MapLine: FunctionComponent<MapLineProps> = ({
  from,
  to,
  children,
  lineId,
}) => {
  if (!from || !to) {
    return null
  }

  const midpoint = calculateMidpoint(from, to)
  const coordinates = [
    [from.longitude, from.latitude],
    [to.longitude, to.latitude],
  ]

  const geojsonData: GeoJSON.Feature<GeoJSON.LineString> = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates,
    },
  }

  return (
    <>
      <Source type="geojson" data={geojsonData}>
        <Layer
          id={`lineLayer-${lineId}`}
          type="line"
          source={`source-${lineId}`}
          paint={{
            'line-color': 'rgb(0,0,0)',
            'line-width': 1.5,
            'line-dasharray': [6, 3], // Dashed pattern
          }}
        />
        <Layer
          id={`circleLayer-${lineId}`}
          type="circle"
          source={`circleSource-${lineId}`}
          paint={{
            'circle-radius': 4, // Size of the circle
            'circle-color': 'rgb(0,0,0)', // Color of the circle
          }}
        />
      </Source>
      {children && (
        <Marker longitude={midpoint.longitude} latitude={midpoint.latitude}>
          <div className="px-1 text-xs text-white rounded-full bg-black/50">
            {children}
          </div>
        </Marker>
      )}
    </>
  )
}

import { MyWarehousesQuery } from '@foundation/network/src/queries/generated'

import { format } from 'date-fns'
import { MapLink } from '../molecules/MapLink'
import { StaticMapSimple } from '../molecules/StaticMap'

export const WarehouseDetails = ({
  warehouse,
}: {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
}) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="mb-2 ">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center text-2xl font-semibold">
            #{warehouse.id}
          </div>
          <div className="text-2xl font-semibold">{warehouse.name}</div>
        </div>
        <div className="mt-4 text-sm">{warehouse.description}</div>
        <div className="text-sm">{warehouse.location?.address}</div>
        <div className="text-sm text-gray">
          {format(new Date(warehouse.createdAt), 'PP')}
        </div>
      </div>{' '}
      <MapLink
        lat={warehouse.location?.latitude}
        lng={warehouse.location?.longitude}
      >
        <StaticMapSimple
          position={{
            lat: warehouse.location?.latitude,
            lng: warehouse.location?.longitude,
          }}
          className="border-2 border-white rounded-lg shadow-lg w-36 h-36"
        />
      </MapLink>
    </div>
  )
}

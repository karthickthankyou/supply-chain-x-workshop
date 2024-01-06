'use client'
import { ProductQuery } from '@foundation/network/src/queries/generated'
import { Title2 } from '../atoms/typography'
import { Panel } from './Map/Panel'
import { DefaultZoomControls } from './Map/ZoomControls'
import { Marker } from './Map/MapMarker'
import { Map as ReactMap } from './Map/Map'
import { Factory, LucideIcon, Store, Warehouse } from 'lucide-react'
import { LngLatLike } from 'react-map-gl'
import { initialBoundsArray, Location } from '@foundation/util'
import { MapLine } from './MapLine'

const calculateBounds = (
  transactions: ProductQuery['product']['transactions'],
): [LngLatLike, LngLatLike] => {
  const locations: Location[] = []

  transactions.forEach((transaction) => {
    if (transaction.toWarehouse?.location) {
      locations.push({
        latitude: transaction.toWarehouse.location.latitude,
        longitude: transaction.toWarehouse.location.longitude,
      })
    }
    if (transaction.fromWarehouse?.location) {
      locations.push({
        latitude: transaction.fromWarehouse.location.latitude,
        longitude: transaction.fromWarehouse.location.longitude,
      })
    }
  })
  if (locations.length === 0) {
    return initialBoundsArray
  }

  let minLat = locations[0].latitude
  let maxLat = locations[0].latitude
  let minLng = locations[0].longitude
  let maxLng = locations[0].longitude

  locations.forEach((loc) => {
    minLat = Math.min(minLat, loc.latitude)
    maxLat = Math.max(maxLat, loc.latitude)
    minLng = Math.min(minLng, loc.longitude)
    maxLng = Math.max(maxLng, loc.longitude)
  })

  // Calculate the distance
  const latDiff = maxLat - minLat
  const lngDiff = maxLng - minLng

  const OFFSET_RATIO = 0.1

  // Apply offset based on distance
  minLat -= latDiff * OFFSET_RATIO
  maxLat += latDiff * OFFSET_RATIO
  minLng -= lngDiff * OFFSET_RATIO
  maxLng += lngDiff * OFFSET_RATIO

  return [
    { lat: minLat, lng: minLng },
    { lat: maxLat, lng: maxLng },
  ]
}

type Transactions = ProductQuery['product']['transactions']

const aggregateTransactions = (transactions?: Transactions): Transactions => {
  const transactionsMap = new Map<string, Transactions[number]>()

  transactions?.forEach((transaction) => {
    if (!transaction.fromWarehouse || !transaction.toWarehouse) {
      return // Skip transactions without from or to warehouses
    }

    const key = `${transaction.fromWarehouse.id},${transaction.toWarehouse.id}`

    const existingTransaction = transactionsMap.get(key)
    if (existingTransaction) {
      existingTransaction.quantity += transaction.quantity
    } else {
      transactionsMap.set(key, { ...transaction })
    }
  })

  console.log('transactionsMap ', transactionsMap)

  return Array.from(transactionsMap.values())
}

export const ProductFlow = ({
  product,
}: {
  product?: ProductQuery['product']
}) => {
  return (
    <div>
      <Title2>Product flow</Title2>
      <ReactMap
        initialViewState={{
          bounds: calculateBounds(product?.transactions || []),
        }}
      >
        <Panel>
          <DefaultZoomControls />
          {product?.inventories.map((inventory) => (
            <Marker
              anchor="bottom"
              offset={[0, -6]}
              key={inventory.id}
              longitude={inventory.warehouse.location?.longitude || 0}
              latitude={inventory.warehouse.location?.latitude || 0}
            >
              {inventory.warehouse.manufacturer ? (
                <StyledIcon Icon={Factory} />
              ) : null}
              {inventory.warehouse.distributor ? (
                <StyledIcon Icon={Warehouse} />
              ) : null}
              {inventory.warehouse.retailer ? (
                <StyledIcon Icon={Store} />
              ) : null}
              <div className="absolute p-1 font-semibold translate-y-1/3 -translate-x-1/3 bottom-full left-full">
                {inventory.quantity}
              </div>
            </Marker>
          ))}
        </Panel>
        {aggregateTransactions(product?.transactions).map((transaction) => (
          <MapLine
            key={transaction.id}
            from={transaction.fromWarehouse?.location}
            to={transaction.toWarehouse?.location}
            lineId={`${transaction.id}`}
          >
            {transaction.quantity}
          </MapLine>
        ))}
      </ReactMap>
    </div>
  )
}

export const StyledIcon = ({ Icon }: { Icon: LucideIcon }) => {
  return (
    <Icon className="stroke-2 p-0.5 rounded shadow-lg shadow-black/20 bg-black/80 border border-black text-white" />
  )
}

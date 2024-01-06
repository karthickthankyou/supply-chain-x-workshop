'use client'
import {
  FormProviderCreateWarehouse,
  FormTypeCreateWarehouse,
} from '@foundation/forms/src/createWarehouse'
import { fetchGraphQLClient } from '@foundation/network/src/fetch/client'
import { useFormContext, useWatch } from '@foundation/forms/src'
import { Input } from '../atoms/input'
import { Textarea } from '../atoms/textarea'
import { Button } from '../atoms/button'
import { Map, ViewState } from '../organisms/Map/Map'
import { Marker } from '../organisms/Map/MapMarker'
import { initialViewState } from '@foundation/util'
import { LucideIcon, Warehouse } from 'lucide-react'
import { useEffect } from 'react'
import { DefaultZoomControls } from '../organisms/Map/ZoomControls'
import { Panel } from '../organisms/Map/Panel'
import {
  CreateWarehouseDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { useRouter } from 'next/navigation'
import { revalidate } from '@foundation/network/src/actions/revalidate'
import { Label } from '../atoms/label'
import { SearchLocation } from '../organisms/Map/SearchLocation'

interface ICreateWarehouse {
  warehouseRole: {
    manufacturerId?: string
    distributorId?: string
    retailerId?: string
  }
  redirectUrl:
    | '/distributor/warehouses'
    | '/retailer/warehouses'
    | '/manufacturer/warehouses'
}

const CreateWarehouseContent = ({
  redirectUrl,
  warehouseRole,
}: ICreateWarehouse) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext<FormTypeCreateWarehouse>()

  const data = watch()
  console.log('data ', data, errors)
  const router = useRouter()
  return (
    <div className="grid grid-cols-2 gap-2">
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(async ({ address, name, description }) => {
          const { data, error } = await fetchGraphQLClient({
            document: CreateWarehouseDocument,
            variables: {
              createWarehouseInput: {
                address,
                name,
                description,
                ...warehouseRole,
              },
            },
          })

          if (data) {
            revalidate(namedOperations.Query.myWarehouses)
            router.replace(redirectUrl)
          }
          if (error) {
            alert(error)
          }
        })}
      >
        <Label title="Name" error={errors.name?.message}>
          <Input {...register('name')} placeholder="Warehouse name" />
        </Label>
        <Label title="Description" error={errors.description?.message}>
          <Textarea
            {...register('description')}
            placeholder="Warehouse description"
          />
        </Label>
        <Label title="Address" error={errors.address?.address?.message}>
          <Textarea
            {...register('address.address')}
            placeholder="Warehouse address"
          />
        </Label>
        <Button type="submit">Create warehouse</Button>
      </form>
      <Map initialViewState={initialViewState}>
        <MapMarker />
        <Panel position="right-center">
          <DefaultZoomControls />
        </Panel>
        <Panel position="left-top">
          <SearchLocation
            onLocationChange={(location: ViewState) => {
              setValue('address.latitude', location.latitude)
              setValue('address.longitude', location.longitude)
            }}
          />
        </Panel>
      </Map>
    </div>
  )
}

export const MapMarker = ({
  initialLocation = initialViewState,
  Icon = Warehouse,
}: {
  initialLocation?: ViewState
  Icon?: LucideIcon
}) => {
  const { setValue } = useFormContext<FormTypeCreateWarehouse>()
  const { address } = useWatch<FormTypeCreateWarehouse>()

  useEffect(() => {
    if (initialLocation) {
      const { latitude, longitude } = initialLocation
      setValue('address', { latitude, longitude, address: '' })
    }
  }, [initialLocation, setValue])

  return (
    <Marker
      pitchAlignment="auto"
      longitude={address?.longitude || 0}
      latitude={address?.latitude || 0}
      draggable
      onDragEnd={({ lngLat }) => {
        const { lat, lng } = lngLat
        setValue('address.latitude', lat)
        setValue('address.longitude', lng)
      }}
    >
      <Icon className="w-8 h-8 p-1.5" />
    </Marker>
  )
}

export const CreateWarehouse = ({
  redirectUrl,
  warehouseRole,
}: ICreateWarehouse) => {
  return (
    <FormProviderCreateWarehouse>
      <CreateWarehouseContent
        redirectUrl={redirectUrl}
        warehouseRole={warehouseRole}
      />
    </FormProviderCreateWarehouse>
  )
}

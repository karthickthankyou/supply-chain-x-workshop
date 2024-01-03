export const MAX_AGE = 1 * 24 * 60 * 60

export const initialViewState = {
  longitude: 80.2707,
  latitude: 13.0827,
  zoom: 8,
}

export const initialBounds = {
  ne_lat: 15.363624935782738,
  ne_lng: 82.74586061924367,
  sw_lat: 10.801454608662539,
  sw_lng: 77.79553938075622,
}

export type Location = {
  latitude: number
  longitude: number
}

type LngLatLike = {
  lng: number
  lat: number
}

export const initialBoundsArray = [
  { lat: 10.801454608662539, lng: 77.79553938075622 },
  { lat: 15.363624935782738, lng: 82.74586061924367 },
] as [LngLatLike, LngLatLike]

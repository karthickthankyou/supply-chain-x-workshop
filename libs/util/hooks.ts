import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { catchError, debounceTime, EMPTY, Subject, tap } from 'rxjs'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from './config/firebase'

export const useDialogState = (defaultState = false) => {
  const [open, setOpen] = useState(defaultState)

  const pathname = usePathname()
  const initialPathname = useRef(pathname)

  useEffect(() => {
    if (pathname !== initialPathname.current) {
      setOpen(false)
      initialPathname.current = pathname
    }
  }, [pathname, open])

  return [open, setOpen] as const
}

export const useDebounce = (delay: number = 1000) => {
  const [debouncedSet$] = useState(() => new Subject<() => void>())
  useEffect(() => {
    const subscription = debouncedSet$
      .pipe(
        debounceTime(delay),
        tap((func) => func()),
        catchError(() => EMPTY),
      )
      .subscribe()
    return () => subscription.unsubscribe()
  }, [delay, debouncedSet$])

  return debouncedSet$
}

export const useDebouncedValue = <T>(value: T, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const debouncedSet$ = useDebounce(delay)

  useEffect(() => {
    debouncedSet$.next(() => setDebouncedValue(value))
  }, [debouncedSet$, value])

  return debouncedValue
}

export type LocationInfo = { placeName: string; latLng: [number, number] }

export const useSearchLocation = () => {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [locationInfo, setLocationInfo] = useState<LocationInfo[]>(() => [])

  const debouncedSearchText = useDebouncedValue(searchText, 300)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedSearchText}.json?fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`,
    )
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.features?.map((x: any) => ({
          placeName: x.place_name,
          latLng: [x.center[1], x.center[0]],
        }))

        setLocationInfo(filtered)
      })
      .finally(() => setLoading(false))
  }, [debouncedSearchText, setLocationInfo])

  return { loading, setLoading, searchText, setSearchText, locationInfo }
}

export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false)
  const [percent, setPercent] = useState(0)

  const handleUpload = async (files: any): Promise<string[]> => {
    if (!files?.length) {
      return []
    }

    setUploading(true)

    const uploadTasks = Array.from(files).map((file: any) => {
      const storageRef = ref(storage, `/files/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      return new Promise<string>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
            )
            setPercent(percent)
          },
          reject,
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(resolve).catch(reject)
          },
        )
      })
    })

    try {
      const imageUrls = await Promise.all(uploadTasks)

      setUploading(false)
      return imageUrls
    } catch (err) {
      console.log(err)
      setUploading(false)
      return []
    }
  }

  return [{ uploading, percent }, handleUpload] as const
}

'use client'
import { useEffect, useState } from 'react'
import { createManufacturer } from '@foundation/network/src/actions/createManufacturer'

export const CreateManufacturerAccount = ({ uid }: { uid: string }) => {
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    const createAccount = async () => {
      try {
        setIsCreating(true)
        await new Promise((resolve) => setTimeout(resolve, 4000))
        await createManufacturer({ uid })
      } finally {
        setIsCreating(false)
      }
    }

    if (uid) {
      createAccount()
    }
  }, [uid])

  if (isCreating) {
    return <div>Creating manufacturer account...</div>
  }

  return null
}

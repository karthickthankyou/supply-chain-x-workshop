'use client'
import { useEffect, useState } from 'react'
import { createDistributer } from '@foundation/network/src/actions/createDistributor'

export const CreateDistributorAccount = ({ uid }: { uid: string }) => {
  const [isCreating, setIsCreating] = useState(true)

  useEffect(() => {
    const createAccount = async () => {
      try {
        await createDistributer({ uid })
      } finally {
        setIsCreating(false)
      }
    }

    if (uid) {
      createAccount()
    }
  }, [uid])

  if (isCreating) {
    return <div>Creating Distributor account...</div>
  }

  return null
}

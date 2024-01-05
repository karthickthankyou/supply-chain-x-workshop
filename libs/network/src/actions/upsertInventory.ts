'use server'

import { formSchemaUpsertInventory } from '@foundation/forms/src/schemas'

import { revalidateTag } from 'next/cache'

import { fetchGraphQLServer } from '../fetch/server'
import { getAuth } from '../auth/authOptions'
import { FormTypeUpsertInventory } from '@foundation/forms/src/upsertInventory'
import { CreateInventoryDocument, namedOperations } from '../queries/generated'

export async function upsertInventory(formData: FormTypeUpsertInventory) {
  const user = await getAuth()
  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }

  const result = formSchemaUpsertInventory.safeParse(formData)
  if (result.success) {
    const { productId, quantity, warehouseId } = result.data

    const { data, error } = await fetchGraphQLServer({
      document: CreateInventoryDocument,
      variables: {
        createInventoryInput: {
          productId,
          quantity,
          warehouseId,
        },
      },
    })

    if (data?.createInventory) {
      revalidateTag(namedOperations.Fragment.WarehouseDetails)
    }
    if (error) {
      throw new Error('Something went wrong.')
    }
  } else {
    console.log(
      'result.error.flatten().fieldErrors',
      result.error.flatten().fieldErrors,
    )
    return { error: JSON.stringify(result.error.flatten().fieldErrors) }
  }
}

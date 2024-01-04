'use server'

import { revalidateTag } from 'next/cache'
import { fetchGraphQLServer } from '../fetch/server'
import {
  CreateManufacturerDocument,
  namedOperations,
} from '../queries/generated'

export async function createManufacturer({ uid }: { uid: string }) {
  const { data } = await fetchGraphQLServer({
    document: CreateManufacturerDocument,
    variables: {
      createManufacturerInput: { uid },
    },
  })

  if (data?.createManufacturer) {
    revalidateTag(namedOperations.Query.manufacturer)
  }
}

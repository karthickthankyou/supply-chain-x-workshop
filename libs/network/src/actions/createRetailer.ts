'use server'

import { revalidateTag } from 'next/cache'
import { fetchGraphQLServer } from '../fetch/server'
import { CreateRetailerDocument, namedOperations } from '../queries/generated'

export async function createRetailer({ uid }: { uid: string }) {
  try {
    const { data, error } = await fetchGraphQLServer({
      document: CreateRetailerDocument,
      variables: {
        createRetailerInput: {
          uid,
        },
      },
    })

    if (data) {
      revalidateTag(namedOperations.Query.retailer)
      return data
    }
    if (error) {
      return error
    }
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

'use server'

import { revalidateTag } from 'next/cache'
import { fetchGraphQLServer } from '../fetch/server'
import {
  CreateDistributorDocument,
  namedOperations,
} from '../queries/generated'

export async function createDistributor({ uid }: { uid: string }) {
  try {
    const { data, error } = await fetchGraphQLServer({
      document: CreateDistributorDocument,
      variables: {
        createDistributorInput: {
          uid,
        },
      },
    })

    if (data) {
      revalidateTag(namedOperations.Query.distributor)
      return data
    }
    if (error) {
      return error
    }
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

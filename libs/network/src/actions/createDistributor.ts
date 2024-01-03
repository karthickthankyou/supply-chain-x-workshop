'use server'

import { revalidateTag } from 'next/cache'
import { fetchGraphQLServer } from '../fetch/server'
import {
  CreateDistributorDocument,
  namedOperations,
} from '../queries/generated'

export async function createDistributer({ uid }: { uid: string }) {
  try {
    const { data, error } = await fetchGraphQLServer({
      document: CreateDistributorDocument,
      variables: {
        createDistributorInput: {
          uid,
        },
      },
    })

    console.log(data, error)

    revalidateTag(namedOperations.Query.distributor)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

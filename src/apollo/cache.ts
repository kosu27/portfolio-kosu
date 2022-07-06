/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactiveVar } from '@apollo/client'
import { InMemoryCache, makeVar } from '@apollo/client'

import type { LoginUser } from '@/utils/User'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // local variables
        loginUser: {
          read() {
            return loginUserVar()
          },
        },
      },
    },
  },
})

export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(null)

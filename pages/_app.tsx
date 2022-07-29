import '../src/style/index.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NotificationsProvider } from '@mantine/notifications'
import type { CustomAppPage } from 'next/app'

import { AppMantineProvider, GlobalStyleProvider } from '@/lib/mantine'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
})

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page
    })

  return (
    <>
      <GlobalStyleProvider>
        <ApolloProvider client={client}>
          <AppMantineProvider>
            <NotificationsProvider limit={2}>
              {getLayout(<Component {...pageProps} />)}
            </NotificationsProvider>
          </AppMantineProvider>
        </ApolloProvider>
      </GlobalStyleProvider>
    </>
  )
}

export default App

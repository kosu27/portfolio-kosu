import '../src/style/index.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { MantineProvider } from '@mantine/core'
import type { CustomAppPage } from 'next/app'
import Head from 'next/head'

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
      <Head>
        <title>ToiletMap</title>
      </Head>
      <ApolloProvider client={client}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </ApolloProvider>
    </>
  )
}

export default App

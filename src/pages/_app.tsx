import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="icon" type="image/x-icon" href="/img/icon-512.png?v=2" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="Boilerplate nextjs" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps}></Component>
    </>
  )
}

export default App

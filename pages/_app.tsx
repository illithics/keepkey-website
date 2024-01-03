import * as React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import ogImage from 'public/images/hardware/wallet-horizontal-2.png'
import { useRouter } from 'next/router';
import '../styles/application.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleAnalytics } from "nextjs-google-analytics";

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let titleTag: string;

  if (router.pathname === '/') {
    titleTag = 'KeepKey'
  } else {
    titleTag = `${router.pathname.replace(/\//g, "").charAt(0).toUpperCase() + router.pathname.slice(2)} | KeepKey`;
  }

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Head>
      <meta name="facebook-domain-verification" content="9tvdigjfrqayvsru06yjch1n03jdaa" />
      </Head>

      <Layout>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Layout>
    </>
  )
}

export default MyApp

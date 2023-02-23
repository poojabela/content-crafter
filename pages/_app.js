import '../styles/globals.css'
import { Layout } from '../components/Layout'
import { AuthContextProvider } from "../firebase/AuthContextProvider"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Content Crafter</title>
      </Head>

      <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </AuthContextProvider>
    </>
  )
}

export default MyApp

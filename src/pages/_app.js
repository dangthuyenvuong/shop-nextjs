import Head from 'next/head'
import MainLayout from '../components/layout/MainLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  const getLayout = Component.getLayout || ((page) => page)


  return <>
    <Head>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {
      getLayout(<Component {...pageProps} />)
    }
    
  </>
}

export default MyApp
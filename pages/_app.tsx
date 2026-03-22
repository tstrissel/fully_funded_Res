import '../styles/reset.css'
import '../scss/mystyles.scss'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="page">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

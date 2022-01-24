import '../scss/styles.scss'
import '../scss/mystyles.scss'
import '../styles/globals.scss'
import Layout from '../components/Layout/Layout.jsx'


function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
    <div className="page">
      <Component {...pageProps} />
    </div>
    </Layout>
  )
}

export default MyApp

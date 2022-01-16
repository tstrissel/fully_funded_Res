import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="layout">
    <Head>
      </Head>
      <header>
        <title>Fully Funded Recidencies</title>
        <link rel='icon' href='/favicon.ico' />
      </header>
      <div className="page-content">
        { children }
      </div>
    </div>
  );
}

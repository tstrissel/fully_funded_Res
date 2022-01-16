import Link from 'next/link'
import Head from 'next/head'
import NavBar from "./NavBar/NavBar";
import Footer from './Footer/Footer';



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
      <NavBar />
        { children }
      <Footer />
      </div>
    </div>
  );
}

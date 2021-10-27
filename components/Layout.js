import Link from 'next/link'
import { Navbar } from '../components/navBar/Navbar';
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <title>Fully Funded Recidencies</title>
        <link rel='icon' href='/favicon.ico' />
      </header>
      <Navbar />
      <div className="page-content">
        { children }
      </div>

      
    </div>
  )
}
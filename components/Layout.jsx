import Link from 'next/link'
import NavBar from "./navBar/NavBar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
      </header>

      <div className="page-content">
      <NavBar />
        { children }
      </div>

      
    </div>
  )
}
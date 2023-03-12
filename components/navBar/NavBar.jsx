import Image from 'next/image'
import logo from '../../public/FFR-assets/Logo/FFR-logo.png'
import Insta from '../..//public/Social links/icon_instagram.svg'
import FaceBook from '../..//public/Social links/icon_facebook.svg'
import styles from '../navBar/NavBar.module.css'
import React from 'react'
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'
import { useRouter } from 'next/router'

const navRoutes = [
  {
    path: '/',
    name: 'Open Calls',
  },
  {
    path: '/resources',
    name: 'Resources',
  },
  {
    path: '/interviews',
    name: 'Interviews',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
]

export default function NavBar() {
  const router = useRouter()
  const activePath = router.pathname

  return (
    <div>
      <nav
        className={styles.navBar}
        role="navigation"
        aria-label="main navigation"
      >
        <a href="/" className={styles.logo}>
          <Image src={logo} alt="FFR2"></Image>
        </a>

        <MobileNavigation routes={navRoutes} activePath={activePath} />
        <DesktopNavigation routes={navRoutes} activePath={activePath} />
      </nav>
    </div>
  )
}

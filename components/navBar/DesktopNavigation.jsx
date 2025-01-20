import React from 'react'
import Link from 'next/link'

import styles from './DesktopNavigation.module.css'
import { Facebook, Instagram } from '../shared/Socials/Socials'

const DesktopNavigation = ({ routes, activePath }) => {
  const navElement = React.useRef()
  const indicatorElement = React.useRef()

  // on Mount, set the indicator to the active link
  React.useEffect(() => {
    const activeLink = navElement.current.querySelector(
      `a[href="${activePath}"]`
    )
    if (activeLink) {
      moveIndicator(activeLink)
    }
  }, [])

  const moveIndicator = (targetElement) => {
    const navLeft = navElement.current.getBoundingClientRect().left
    const indicatorWidth =
      indicatorElement.current.getBoundingClientRect().width

    const linkLeft = targetElement.getBoundingClientRect().left
    const linkWidth = targetElement.getBoundingClientRect().width

    const offset = linkLeft - navLeft + linkWidth / 2 - indicatorWidth / 2

    indicatorElement.current.style.transform = `translateX(${offset}px)`
  }

  const handleMoveIndicator = (event) => moveIndicator(event.target)

  return (
    <ul className={styles.nav} ref={navElement}>
      {routes.map((route) => (
        <li key={route.name}>
          <Link href={route.path} className={styles.navEntry} onClick={handleMoveIndicator}>
              {route.name}
          </Link>
        </li>
      ))}
      <span className={styles.navIndicator} ref={indicatorElement} />

      <li>
        <Instagram />
      </li>
      <li>
        <Facebook />
      </li>
    </ul>
  )
}

export default DesktopNavigation

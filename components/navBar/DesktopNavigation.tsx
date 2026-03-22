import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './DesktopNavigation.module.css'
import { Instagram } from '../shared/Socials/Socials'

interface NavRoute {
  path: string
  name: string
}

interface DesktopNavigationProps {
  routes: NavRoute[]
  activePath: string
}

const DesktopNavigation = ({ routes, activePath }: DesktopNavigationProps) => {
  const navElement = useRef<HTMLUListElement>(null)
  const indicatorElement = useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const activeLink = navElement.current?.querySelector(
      `a[href="${activePath}"]`
    )
    if (activeLink instanceof HTMLElement) {
      moveIndicator(activeLink)
    }
  }, [activePath])

  const moveIndicator = (targetElement: HTMLElement) => {
    if (!navElement.current || !indicatorElement.current) return

    const navLeft = navElement.current.getBoundingClientRect().left
    const indicatorWidth =
      indicatorElement.current.getBoundingClientRect().width

    const linkLeft = targetElement.getBoundingClientRect().left
    const linkWidth = targetElement.getBoundingClientRect().width

    const offset = linkLeft - navLeft + linkWidth / 2 - indicatorWidth / 2

    indicatorElement.current.style.transform = `translateX(${offset}px)`
  }

  const handleMoveIndicator = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.target instanceof HTMLElement) {
      moveIndicator(event.target)
    }
  }

  return (
    <ul className={styles.nav} ref={navElement}>
      {routes.map((route) => (
        <li key={route.name}>
          <Link
            href={route.path}
            className={styles.navEntry}
            onClick={handleMoveIndicator}
          >
            {route.name}
          </Link>
        </li>
      ))}
      <span className={styles.navIndicator} ref={indicatorElement} />

      <li>
        <Instagram />
      </li>
    </ul>
  )
}

export default DesktopNavigation

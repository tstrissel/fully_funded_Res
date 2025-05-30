import styles from './MobileNavigation.module.css'
import { useEffect, useState } from 'react'
import cx from 'clsx'
import Link from 'next/link'
import { Instagram } from '../shared/Socials/Socials'

const ToggleMenuButton = ({ isOpen, onClick }) => {
  return (
    <div className={cx(styles.burger, isOpen && styles.open)} onClick={onClick}>
      <div />
      <div />
      <div />
    </div>
  )
}

const MobileNavigation = ({ routes, activePath }) => {
  const [isOpen, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className={styles.wrapper}>
      <ToggleMenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <ul className={cx(styles.menu, isOpen && styles.open)}>
        {routes
        .filter(route => route.path !== activePath) // hide the current page
        .map((route) => (
          <li key={route.name}>
            <Link href={route.path} onClick={closeMenu}>
                <div className={styles.navEntry}>
                  {route.name}
                </div>
            </Link>
          </li>
        ))}

        <li>
          <Instagram />
        </li>
      </ul>
    </div>
  )
}

export default MobileNavigation

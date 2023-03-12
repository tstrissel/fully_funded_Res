import styles from './MobileNavigation.module.css'
import { useState } from 'react'
import cx from 'clsx'
import Link from 'next/link'
import { Facebook, Instagram } from '../shared/Socials/Socials'

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

  return (
    <div className={styles.wrapper}>
      <ToggleMenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <ul className={cx(styles.menu, isOpen && styles.open)}>
        {routes.map((route) => (
          <li key={route.name}>
            <Link href={route.path}>
              <a
                className={cx(
                  styles.navEntry,
                  activePath === route.path && styles.active
                )}
                onClick={closeMenu}
              >
                {route.name}
              </a>
            </Link>
          </li>
        ))}

        <li>
          <Instagram />
        </li>
        <li>
          <Facebook />
        </li>
      </ul>
    </div>
  )
}

export default MobileNavigation

import styles from './MobileNavigation.module.css'
import { useEffect, useState } from 'react'
import cx from 'clsx'
import Link from 'next/link'
import { Instagram } from '../shared/Socials/Socials'

interface NavRoute {
  path: string
  name: string
}

interface ToggleMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

const ToggleMenuButton = ({ isOpen, onClick }: ToggleMenuButtonProps) => {
  return (
    <div
      className={cx(styles.burger, isOpen && styles.open)}
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </div>
  )
}

interface MobileNavigationProps {
  routes: NavRoute[]
  activePath: string
}

const MobileNavigation = ({ routes, activePath }: MobileNavigationProps) => {
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
          .filter((route) => route.path !== activePath)
          .map((route) => (
            <li key={route.name}>
              <Link href={route.path} onClick={closeMenu}>
                <div className={styles.navEntry}>{route.name}</div>
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

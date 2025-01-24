import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/FFR-assets/Logo/FFR-logo.png'
import styles from '../Footer/Footer.module.css'
import { Instagram } from '../shared/Socials/Socials'
import patreon from '../../public/FFR-assets/Social links/Patreon button/Patreon.png'
import buymeacoffee from '../../public/FFR-assets/Social links/Buy me a coffee button/default-yellow.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logoSocial}>
            <Image
              className="logo"
              src={Logo}
              alt="FFR"
              width="161"
              height="120.82"
            />
            <div className={styles.socials}>
              <Instagram />
            </div>
          </div>
          <div className={styles.footerEntries}>
            <Link href="/about" className={styles.footerEntry}>ABOUT
            </Link>
            <Link href="/contact" className={styles.footerEntry}>CONTACT</Link>
            <Link href="/" className={styles.footerEntry}>OPEN CALLS</Link>
            <Link href="/resources" className={styles.footerEntry}>RESOURCES</Link>
            <Link href="/interviews" className={styles.footerEntry}>INTERVIEWS</Link>
          </div>
        </div>
        <div>
          <div className={styles.application}>
            <p>Need help with writing an application?</p>
            <p>Write to us at</p>
            <Link href="mailto:fullyfunded.residencies@gmail.com">
              fullyfunded.residencies@gmail.com
            </Link>
          </div>

          <div className={styles.support}>
            <p>Like what we do?</p>
            <Link href="https://buymeacoffee.com/fullyfundedresi" target='_blank'>
              <Image src={buymeacoffee} width={180} height={50} />
            </Link>
            <Link href="https://www.patreon.com/fullyfundedresidencies" target='_blank'>
              <Image src={patreon} width={180} height={40} />
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}

import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/FFR-assets/Logo/FFR-logo.png'
import styles from '../Footer/Footer.module.css'
import { Facebook, Instagram } from '../shared/Socials/Socials'

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
              <Facebook />
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
            <button className={styles.supportBtn}>SUPPORT US</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

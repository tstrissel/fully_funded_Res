import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Socials.module.css'
import instaIcon from '../../..//public/Social links/icon_instagram.svg'
import fbIcon from '../../..//public/Social links/icon_facebook.svg'

export const Instagram = () => {
  return (
    <Link href="https://www.instagram.com/fullyfundedresidencies/">
      <a className={styles.social} target="_blank">
        <Image src={instaIcon} alt="IG"></Image>
      </a>
    </Link>
  )
}

export const Facebook = () => {
  return (
    <Link href="https://www.facebook.com/fullyfundedresidenices/">
      <a className={styles.social} target="_blank">
        <Image src={fbIcon} alt="FB"></Image>
      </a>
    </Link>
  )
}

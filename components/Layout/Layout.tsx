import React, { ReactNode } from 'react'
import styles from '../Layout/Layout.module.css'
import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../navBar/NavBar'
import Footer from '../Footer/Footer'
import BackgroundGradient from './BackgroundGradient'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.background}>
      <Head>
        <title>Fully Funded Residencies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundGradient />
      <div className={styles.pageContainer}>
        <NavBar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

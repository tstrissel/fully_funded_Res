import React, { Component, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/FFR-assets/Logo/FFR-logo.png";
import styles from "../Footer/Footer.module.css";
import { Facebook, Instagram } from "../shared/Socials/Socials";

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
            <Link href="/about">
              <a className={styles.footerEntry}>ABOUT</a>
            </Link>
            <Link href="/contact">
              <a className={styles.footerEntry}>CONTACT</a>
            </Link>
            <Link href="/">
              <a className={styles.footerEntry}>OPEN CALLS</a>
            </Link>
            <Link href="/resources">
              <a className={styles.footerEntry}>RESOURCES</a>
            </Link>
            <Link href="/interviews">
              <a className={styles.footerEntry}>INTERVIEWS</a>
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.application}>
            <p>Need help with writing an application?</p>
            <p>Write to us at</p>
            <a href="mailto:fullyfunded.residencies@gmail.com">
              fullyfunded.residencies@gmail.com
            </a>
          </div>

          <div className={styles.support}>
            <p>Like what we do?</p>
            <button className={styles.supportBtn}>SUPPORT US</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

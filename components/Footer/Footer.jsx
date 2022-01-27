import React, { Component, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/FFR-assets/Logo/FFR-logo.png";
import Insta from "../..//public/Social links/icon_instagram.svg";
import FaceBook from "../..//public/Social links/icon_facebook.svg";
import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoSocial}>
        <div className={styles.socials}>
          <Image
            className="logo"
            src={Logo}
            alt="FFR"
            width="161"
            height="120.82"
          />
          <Link href="/">
            <a className="navInsta">
              <Image src={Insta} alt="IG"></Image>
            </a>
          </Link>
          <Link href="/">
            <a className="navFacebook">
              <Image src={FaceBook} alt="FB"></Image>
            </a>
          </Link>
        </div>
      </div>
        <div className={styles.footerEntries}>
          <Link href="/">
            <a className="footAbout">ABOUT</a>
          </Link>
          <Link href="/">
            <a className="footContact">CONTACT</a>
          </Link>
          <Link href="/">
            <a className="footOpenCalls">OPEN CALLS</a>
          </Link>
          <Link href="/">
            <a className="footResources">RESOURCES</a>
          </Link>
          <Link href="/">
            <a className="footInterviews">INTERVIEWS</a>
          </Link>
        </div>
      <div className="heroMessage">
        <h4 className={styles.footerApplication}>
          Need help with writing an application? <br></br>
          Write to us at <br></br>
          fullyfunded.residencies@gmail.com
        </h4>
        <h6 className="label" >
          Like what we do? <br></br>
        </h6>
        <button className="button is-primary is-rounded has-text-black has-text-weight-bold">SUPPORT US</button>
      </div>
    </div>
  );
}

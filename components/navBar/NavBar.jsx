import Link from "next/link";
import Image from "next/image";
import logo from "../../public/FFR-assets/Logo/FFR-logo.png";
import Insta from "../..//public/Social links/icon_instagram.svg";
import FaceBook from "../..//public/Social links/icon_facebook.svg";
import styles from "../navBar/NavBar.module.css";
import React from "react";


export default function NavBar() {
  
  const [isActive, setisActive] = React.useState(false)

  return (
    <div>
      <div className="navbar is-transparent">
        <nav className={styles.navBar} role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <a className={styles.logo}>
                <Image src={logo} alt="FFR2"></Image>
              </a> 
          </div>
            
          <div className={styles.navEntries}>
            <Link href="/">
              <a className="navbar-item ">OPEN CALLS</a>
            </Link>
            <Link href="/resources">
              <a className="navbar-item ">RESOURCES</a>
            </Link>
            <Link href="/interviews">
              <a className="navbar-item ">INTERVIEWS</a>
            </Link>
            <Link href="/about">
              <a className="navbar-item ">ABOUT</a>
            </Link>
            <Link href="/contact">
              <a className="navbar-item ">CONTACT</a>
            </Link>
            <div className={styles.social}> 
            <Link href="/">
              <a >
                <Image src={Insta} alt="IG" className="navbar-item"></Image>
              </a>
            </Link>
            <Link href="/">
              <a >
                <Image src={FaceBook} alt="FB" className="navbar-item"></Image>
              </a>
            </Link>
            </div>
          </div>
                
        </nav>
      </div>

      <div>
        <h1 className={styles.openCalls}>Open Calls</h1>
        <h2 className={styles.subtitleOpenCalls}>
          Browse through a list of fully funded residencies that we <br></br>
          update regularly and find the best fit for you.
        </h2>
      </div>
      
    </div>
  );
}

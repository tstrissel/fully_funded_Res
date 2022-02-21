import Link from "next/link";
import Image from "next/image";
import logo from "../../public/FFR-assets/Logo/FFR-logo.png";
import Insta from "../..//public/Social links/icon_instagram.svg";
import FaceBook from "../..//public/Social links/icon_facebook.svg";
import styles from "../navBar/NavBar.module.css";
import React from "react";
import RedDot from "../../public/FFR-assets/Navigation/nav_indicator.svg"

const NavLinks = (props) => {
    return ( 
        <div className={styles.navEntries}>
            <Link href="/">
              <a onClick={() => props.isMobile && props.closeMobileMenu()} className={styles.navEntry}>
              
              OPEN CALLS</a>
            </Link>
            <Link href="/resources">
                <a onClick={() => props.isMobile && props.closeMobileMenu()} className={styles.navEntry}>
                
                RESOURCES</a>
            </Link>
            <Link href="/interviews">
                <a onClick={() => props.isMobile && props.closeMobileMenu()} className={styles.navEntry}>
                
                INTERVIEWS</a>
            </Link>
            <Link href="/about">
                <a onClick={() => props.isMobile && props.closeMobileMenu()} className={styles.navEntry}>
                
                ABOUT</a>
            </Link>
            <Link href="/contact">
                <a onClick={() => props.isMobile && props.closeMobileMenu()} className={styles.navEntry}>
                
                CONTACT</a>
            </Link>
            <div className={styles.socialMedia}>

            <Link href="/">
                <a className={styles.social}
                   onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Image src={Insta} alt="IG" ></Image>
                </a>
            </Link>
            <Link href="/">
                <a className={styles.social}
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                >
                    <Image src={FaceBook} alt="FB" ></Image>
                </a>
            </Link>
            </div>
            
          </div>
     );
}
 
export default NavLinks;
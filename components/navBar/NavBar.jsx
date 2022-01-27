import Link from "next/link";
import Image from "next/image";
import logo from "../../public/FFR-assets/Logo/FFR-logo.png";
import Insta from "../..//public/Social links/icon_instagram.svg";
import FaceBook from "../..//public/Social links/icon_facebook.svg";
import styles from "../navBar/NavBar.module.css";

export default function NavBar() {
  return (
    <div className="page">
    <div className="is-transparent" >
      <nav className={styles.navBar} className="navbar" role="navigation" aria-label="main navigation">
        <div className={styles.logo}>
          <Image src={logo} alt="FFR2"></Image>
        </div>

        <div className={styles.navEntries}>
          <Link href="/">
            <a className="navOpenCalls">OPEN CALLS</a>
          </Link>
          <Link href="/resources">
            <a className="navResources">RESOURCES</a>
          </Link>
          <Link href="/interviews">
            <a className="navInterviews">INTERVIEWS</a>
          </Link>
          <Link href="/about">
            <a className="navAbout">ABOUT</a>
          </Link>
          <Link href="/contact">
            <a className="navContact">CONTACT</a>
          </Link>
          <div className="social"> 
          <Link href="/">
            <a >
              <Image src={Insta} alt="IG"></Image>
            </a>
          </Link>
          <Link href="/">
            <a >
              <Image src={FaceBook} alt="FB"></Image>
            </a>
          </Link>
          </div>
        </div>
      </nav>
    </div>
      <div >
        <h1 className="openCalls title">Open Calls</h1>
        <h2 className="subtitleOpenCalls title is-4">
          Browse through a list of fully funded residencies that we <br></br>
          update regularly and find the best fit for you.
        </h2>
      </div>
    </div>
  );
}

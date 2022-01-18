import Link from "next/link";
import Image from "next/image";
import logo from "../../public/FFR-assets/Logo/FFR-logo.png";
import Insta from "../..//public/Social links/icon_instagram.svg";
import FaceBook from "../..//public/Social links/icon_facebook.svg";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      <nav className={styles.navBar}>
        <div>
          <Image src={logo} alt="FFR2" height="180px" width="250px"></Image>
        </div>

        <div className={styles.navEntries}>
          <Link href="/">
            <a className="navOpenCalls">Open Calls</a>
          </Link>
          <Link href="/resources">
            <a className="navResources">Resources</a>
          </Link>
          <Link href="/interviews">
            <a className="navInterviews">Interviews</a>
          </Link>
          <Link href="/about">
            <a className="navAbout">About</a>
          </Link>
          <Link href="/contact">
            <a className="navContact">Contact</a>
          </Link>
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
      </nav>
      <div className="heroMessage">
        <h1>Open Calls</h1>
        <h3>
          Browse through a list of fully funded residencies that we <br></br>
          update regularly and find the best fit for you.
        </h3>
      </div>
    </div>
  );
}

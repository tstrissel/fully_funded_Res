import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Insta from "../..//public/Social links/icon_instagram.svg";
import FaceBook from "../..//public/Social links/icon_facebook.svg";

import styles from "./DesktopNavigation.module.css";

const DesktopNavigation = ({ routes, activePath }) => {
  const navElement = React.useRef();
  const indicatorElement = React.useRef();

  // on Mount, set the indicator to the active link
  React.useEffect(() => {
    const activeLink = navElement.current.querySelector(
      `a[href="${activePath}"]`
    );
    if (activeLink) {
      moveIndicator(activeLink);
    }
  }, []);

  const moveIndicator = (targetElement) => {
    const navLeft = navElement.current.getBoundingClientRect().left;
    const indicatorWidth =
      indicatorElement.current.getBoundingClientRect().width;

    const linkLeft = targetElement.getBoundingClientRect().left;
    const linkWidth = targetElement.getBoundingClientRect().width;

    const offset = linkLeft - navLeft + linkWidth / 2 - indicatorWidth / 2;

    indicatorElement.current.style.transform = `translateX(${offset}px)`;
  };

  const handleMoveIndicator = (event) => moveIndicator(event.target);

  return (
    <ul className={styles.nav} ref={navElement}>
      {routes.map((route) => (
        <li key={route.name}>
          <Link href={route.path}>
            <a className={styles.navEntry} onClick={handleMoveIndicator}>
              {route.name}
            </a>
          </Link>
        </li>
      ))}
      <span className={styles.navIndicator} ref={indicatorElement} />

      <li>
        <Link href="https://www.instagram.com/fullyfundedresidencies/">
          <a className={styles.social} target="_blank">
            <Image src={Insta} alt="IG"></Image>
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/fullyfundedresidenices/">
          <a className={styles.social} target="_blank">
            <Image src={FaceBook} alt="FB"></Image>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNavigation;

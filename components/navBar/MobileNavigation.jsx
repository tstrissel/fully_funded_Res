import Navlinks from "./NavLinks";
import styles from "./MobileNavigation.module.css";
import { useState } from "react";
import Insta from "../..//public/Social links/icon_instagram.svg";
import FaceBook from "../..//public/Social links/icon_facebook.svg";
import cx from "clsx";
import Link from "next/link";
import Image from "next/image";

const ToggleMenuButton = ({ isOpen, onClick }) => {
  return (
    <div className={cx(styles.burger, isOpen && styles.open)} onClick={onClick}>
      <div />
      <div />
      <div />
    </div>
  );
};

const MobileNavigation = ({ routes, activePath }) => {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className={styles.wrapper}>
      <ToggleMenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <ul className={cx(styles.menu, isOpen && styles.open)}>
        {routes.map((route) => (
          <li key={route.name}>
            <Link href={route.path}>
              <a
                className={cx(
                  styles.navEntry,
                  activePath === route.path && styles.active
                )}
                onClick={closeMenu}
              >
                {route.name}
              </a>
            </Link>
          </li>
        ))}

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
    </div>
  );
};

export default MobileNavigation;

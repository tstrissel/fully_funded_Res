import styles from "./WebsiteLink.module.css";
import { ArrowRight } from "../../icons";

export default function WebsiteLink(props) {
  return (
    <a className={styles.link} href={props.website} target="_blank">
      <span>Visit website</span>
      <ArrowRight />
    </a>
  );
}

import styles from "./InfoLabel.module.css";
import { Clock, DollarSign, LocationPin, Profile, ArtField } from "../../icons";

const getIconForLabel = (label) => {
  switch (label) {
    case "status":
      return Clock;
    case "money":
      return DollarSign;
    case "location":
      return LocationPin;
    case "type":
      return Profile;
    case "field":
      return ArtField;
    default:
      return () => null;
  }
};

export default function InfoLabel(props) {
  const Icon = getIconForLabel(props.type);
  return (
    <div className={styles.wrapper} href={props.website}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{props.children}</span>
    </div>
  );
}

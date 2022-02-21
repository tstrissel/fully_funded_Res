import ResultModal from "../ResultModal/ResultModal";
import { useState } from "react";
import styles from "./gridComp.module.css";
import Image from "next/image";
import ArrowRight from "../../public/FFR-assets/Icons/arrow-right.svg"

const GridView = ({
  title,
  slug,
  category,
  money,
  paragraph,
  thumbnail,
  fellowship,
  location,
  type,
  
}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const closeCard = () => {
    setIsCardOpen(false);
  };

  return (
    <>
      {""}
      <div >
        <img src={thumbnail.fields.file.url} className={styles.card} />
        <ul>
          <li className={styles.fontTitle}>{slug}</li>
          <li className={styles.fontLabels}>{category}</li>
          <li className={styles.fontLabels}>location</li>
          <li className={styles.fontLabels}>{money}</li>
        </ul>
        <p>{paragraph}</p>
        <button
          className="button is-text has-text-weight-bold"
          onClick={() => setIsCardOpen(true)}
        >
          Read more
        </button>
        <button className="button is-ghost">Visit Website</button>

        <ResultModal
          fellowship={fellowship}
          trigger={isCardOpen}
          setTrigger={closeCard}
        >
          <img src={thumbnail.fields.file.url} height="300px" width="350px" />
          <h1>{slug}</h1>
          <h1>{title}</h1>
          <p>{category}</p>
          <p>{money}</p>
          <p>{paragraph}</p>
          
        </ResultModal>
      </div>
    </>
  );
};

export default GridView;

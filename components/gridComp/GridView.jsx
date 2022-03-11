import ResultModal from "../ResultModal/ResultModal";
import { useState } from "react";
import styles from "./gridComp.module.css";
import Image from "next/image";
import ArrowRight from "../../public/FFR-assets/Icons/arrow-right.svg"
import Time from "../../public/FFR-assets/Icons/clock_icon.svg"
import Location from "../../public/FFR-assets/Icons/location_icon.svg"
import Money from "../../public/FFR-assets/Icons/money_icon.svg"
import Type from "../../public/FFR-assets/Icons/profile_icon.svg"

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
  deadline,
  
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
          <li className={styles.fontLabels}><Image className={styles.fontLabelIcons} src={Time} alt='time' />{category}</li>
          <li className={styles.fontLabels}><Image className={styles.fontLabelIcons} src={Money} alt='money' />{money}</li>
          <li className={styles.fontLabels}><Image className={styles.fontLabelIcons} src={Location} alt='loc' />{location}</li>
          <li className={styles.fontLabels}><Image className={styles.fontLabelIcons} src={Type} alt='type' />{type}</li>
        </ul>
        <p>{paragraph}</p>
        <div className={styles.cardButtons}>
          <button
            className={styles.btnReadMore}
            onClick={() => setIsCardOpen(true)}
          >
            Read more
          </button>
          <button className={styles.btnVisitWeb}>Visit Website
            <Image src={ArrowRight} alt='arrow' />
          </button>
        </div>

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
          <p>{deadline}</p>
          
        </ResultModal>
      </div>
    </>
  );
};

export default GridView;

import ResultModal from "../ResultModal/ResultModal";
import { useState } from "react";
import Image from "next/image";
import WebsiteLink from "../shared/WebsiteLink/WebsiteLink";
import InfoLabel from "../shared/InfoLabel/InfoLabel";

import styles from "./FellowshipItem.module.css";
import cx from "clsx";

const FellowshipItem = ({
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
  field,
  status,
}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const closeCard = () => {
    setIsCardOpen(false);
  };

  return (
    <div>
      <img src={thumbnail.fields.file.url} className={styles.card} />
      <h3 className="fontTitle">{title}</h3>
      <ul>
        <li>
          <InfoLabel type="status">{status}</InfoLabel>
        </li>
        <li>
          <InfoLabel type="money">{money}</InfoLabel>
        </li>
        <li>
          <InfoLabel type="location">{location}</InfoLabel>
        </li>
        <li>
          <InfoLabel type="type">{type}</InfoLabel>
        </li>
      </ul>

      <p className={styles.clippedParagraph}>{paragraph}</p>
      <div className={styles.cardButtons}>
        <button className="cta underlined" onClick={() => setIsCardOpen(true)}>
          Read more
        </button>
        <WebsiteLink

        // todo: set the url here
        />
      </div>

      <ResultModal
        fellowship={fellowship}
        trigger={isCardOpen}
        setTrigger={closeCard}
        title={title}
        category={category}
        paragraph={paragraph}
        deadline={deadline}
        money={money}
        thumbnail={thumbnail.fields.file.url}
        featuredImage={fellowship.fields.featuredImage?.fields.file.url}
        location={location}
        field={field}
        type={type}
      />
    </div>
  );
};

export default FellowshipItem;

import { getMiddlewareManifest } from "next/dist/client/route-loader";
import Image from "next/image";
import styles from "./ResourcesComp.module.css";
import { ArrowDown } from "../icons";

export default function ResourcesComp({
  grantAndFunds,
  practicalAdviceAndOpportunities,
  databaseOpp,
}) {
  return (
    <div>
      <div>
        <div>
          <a href="#grants" className={styles.sectionButton}>
            <span>Grants & Funds</span>
            <ArrowDown />
          </a>
        </div>
        <div>
          <a href="#practicalAdvice" className={styles.sectionButton}>
            <span>Practical advice on artist opportunities</span>
            <ArrowDown />
          </a>
        </div>
        <div>
          <a href="#databases" className={styles.sectionButton}>
            <span>Databases for Artist Opportunities</span>
            <ArrowDown />
          </a>
        </div>
      </div>
      <hr />
      <h3 id="grants" className={styles.sectionTitle}>
        Grants & Funds
      </h3>
      <ul className={styles.wrapper}>
        {grantAndFunds.map((GAF) => {
          const {
            grantsFundsTitle,
            grantfundType,
            grantfundstatus,
            grantfundLocation,
            grantfundWebsite,
          } = GAF.fields;

          return (
            <div className={styles.cards} key={GAF.sys.id}>
              <h1>{grantsFundsTitle}</h1>
              <p>{grantfundType}</p>
              <p>{grantfundstatus}</p>
              <p>{grantfundLocation}</p>
              <p>{grantfundWebsite}</p>
            </div>
          );
        })}
      </ul>

      <hr />
      <h3 id="practicalAdvice" className={styles.sectionTitle}>
        Practical advice on artist opportunities
      </h3>
      <ul className={styles.wrapper}>
        {practicalAdviceAndOpportunities.map((PAO) => {
          const {
            practicalOppTitle,
            practicalAdviceImage,
            practicalAdviceText,
            practicalAdviceWebsite,
          } = PAO.fields;

          return (
            <div className={styles.cards} key={PAO.sys.id}>
              <h1>{practicalOppTitle}</h1>
              <img
                src={practicalAdviceImage.fields.file.url}
                height="300px"
                width="350px"
              />
              <p>{practicalAdviceText}</p>
              <p>{practicalAdviceWebsite}</p>
            </div>
          );
        })}
      </ul>

      <hr />
      <h3 id="databases" className={styles.sectionTitle}>
        Databases for Artist Opportunities
      </h3>
      <ul className={styles.wrapper}>
        {databaseOpp.map((DO) => {
          const {
            databaseOppTitle,
            databaseOppImage,
            databaseOppText,
            dataBaseOppWebsite,
          } = DO.fields;

          return (
            <div className={styles.cards} key={DO.sys.id}>
              <h1></h1>
              <h1>{databaseOppTitle}</h1>
              <img
                src={databaseOppImage.fields.file.url}
                height="300px"
                width="350px"
              />
              <p>{databaseOppText}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

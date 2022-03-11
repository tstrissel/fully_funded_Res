import { getMiddlewareManifest } from "next/dist/client/route-loader";
import Image from "next/image";
import styles from "./ResourcesComp.module.css";

export default function resourcesComp({
  grantAndFunds,
  practicalAdviceAndOpportunities,
  databaseOpp,
}) {
  //   console.log(
  //     grantAndFunds,
  //       practicalAdviceAndOpportunities,
  //       databaseOpp,
  //     "BHLSHJD"
  //   );
  return (
    <div>
      <h1>Resources</h1>
      <p>
        FFR compiled a list of useful links, including ongoing grants and funds,
        professional advice, best and worst practices of art institutions and
        more.
      </p>

      <p>
        ----------------------------------------------------------------------
      </p>
      <h1>Grants and Funds</h1>
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

      <p>
        ----------------------------------------------------------------------
      </p>
      <h1>Practical advice on artist opportunities</h1>
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

      <p>
        ----------------------------------------------------------------------
      </p>
      <h1>Databases for Artist opportunities</h1>
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
              <h1>{databaseOppTitle}</h1>
              <img
                src={databaseOppImage.fields.file.url}
                height="300px"
                width="350px"
              />
              <p>{databaseOppText}</p>
              {/* <p>{dataBaseOppWebsite}</p> */}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

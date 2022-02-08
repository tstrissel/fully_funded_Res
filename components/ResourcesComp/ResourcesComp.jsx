import Image from "next/image";
import styles from "./ResourcesComp.module.css";

export default function resourcesComp({
  resources,
  practicalAdviceAndOpportunities,
}) {
  console.log(practicalAdviceAndOpportunities, "OPPPPPPPPP");
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
        {resources.map((resources) => {
          const {
            grantfundsTitle,
            grantfundType,
            grantfundstatus,
            grantfundLocation,
            grantfundWebsite,
          } = resources.fields;

          return (
            <div>
              <div className={styles.cards} key={resources.sys.id}>
                <h1>{grantfundsTitle}</h1>
                <p>{grantfundType}</p>
                <p>{grantfundstatus}</p>
                <p>{grantfundLocation}</p>
                <p>{grantfundWebsite}</p>
              </div>
            </div>
          );
        })}
      </ul>

      <p>
        ----------------------------------------------------------------------
      </p>
      <h1>Practical advice on artist opportunities</h1>
      <ul className={styles.wrapper}>
        {resources.map((resources) => {
          const {
            practicalAdviceTitle,
            practicalAdviceImage,
            practicalAdviceText,
            practicalAdviceWebsite,
            databaseOppTitle,
            databaseOppImage,
            databaseOppText,
            dataBaseOppWebsite,
          } = resources.fields;

          return (
            <div>
              <div className={styles.cards} key={resources.sys.id}>
                <h1>{practicalAdviceTitle}</h1>
                {/* <p>{practicalAdviceImage}</p> */}
                <p>{practicalAdviceText}</p>
                <p>{practicalAdviceWebsite}</p>
              </div>
            </div>
          );
        })}
      </ul>

      <p>
        ----------------------------------------------------------------------
      </p>
      <h1>Databases for Artist opportunities</h1>
      <ul className={styles.wrapper}>
        {resources.map((resources) => {
          const {
            databaseOppTitle,
            databaseOppImage,
            databaseOppText,
            dataBaseOppWebsite,
          } = resources.fields;

          return (
            <div>
              <div className={styles.cards} key={resources.sys.id}>
                <h1>{databaseOppTitle}</h1>
                {/* <p>{databaseOppImage}</p> */}
                <p>{databaseOppText}</p>
                <p>{dataBaseOppWebsite}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

import { getMiddlewareManifest } from 'next/dist/client/route-loader'
import Image from 'next/image'
import styles from './ResourcesComp.module.css'
import { ArrowDown } from '../icons'
import WebsiteLink from '@components/shared/WebsiteLink'

export default function ResourcesComp({
  grantAndFunds,
  practicalAdviceAndOpportunities,
  databaseOpp,
}) {
  return (
    <div>
      <div className={styles.jumpSection}>
        <a href="#grants" className={styles.sectionButton}>
          <ArrowDown />
          <span>Grants & Funds</span>
        </a>
        <a href="#practicalAdvice" className={styles.sectionButton}>
          <ArrowDown />
          <span>Practical advice on artist opportunities</span>
        </a>
        <a href="#databases" className={styles.sectionButton}>
          <ArrowDown />
          <span>Databases for Artist Opportunities</span>
        </a>
      </div>
      <hr />
      <h3 id="grants" className={styles.sectionTitle}>
        Grants & Funds
      </h3>
      <ul className="grid-wrapper">
        {grantAndFunds.map((GAF) => {
          const {
            grantsFundsTitle,
            grantfundType,
            grantfundstatus,
            grantfundLocation,
            grantfundWebsite,
          } = GAF.fields

          return (
            <div className={styles.cards} key={GAF.sys.id}>
              <h1>{grantsFundsTitle}</h1>
              <p>{grantfundType}</p>
              <p>{grantfundstatus}</p>
              <p>{grantfundLocation}</p>
              <p>{grantfundWebsite}</p>
            </div>
          )
        })}
      </ul>

      <hr />
      <h3 id="practicalAdvice" className={styles.sectionTitle}>
        Practical advice on artist opportunities
      </h3>
      <ul className="grid-wrapper">
        {practicalAdviceAndOpportunities.map((PAO) => {
          const {
            practicalOppTitle,
            practicalAdviceImage,
            practicalAdviceText,
            practicalAdviceWebsite,
          } = PAO.fields

          return (
            <div className={styles.cards} key={PAO.sys.id}>
              {practicalAdviceImage && (
                <img
                  src={practicalAdviceImage.fields.file.url}
                  height="300px"
                  width="350px"
                />
              )}
              <div className={styles.card__info}>
                <div>
                  <h3>{practicalOppTitle}</h3>
                  <p>{practicalAdviceText}</p>
                </div>
                <div className={styles.websiteLink}>
                  <WebsiteLink website={practicalAdviceWebsite} />
                </div>
              </div>
            </div>
          )
        })}
      </ul>

      <hr />
      <h3 id="databases" className={styles.sectionTitle}>
        Databases for Artist Opportunities
      </h3>
      <ul className="grid-wrapper">
        {databaseOpp.map((DO) => {
          const {
            databaseOppTitle,
            databaseOppImage,
            databaseOppText,
            dataBaseOppWebsite,
          } = DO.fields

          return (
            <div className={styles.cards} key={DO.sys.id}>
              {databaseOppImage && (
                <img
                  src={databaseOppImage.fields.file.url}
                  height="300px"
                  width="350px"
                />
              )}
              <div className={styles.card__info}>
                <div>
                  <h3>{databaseOppTitle}</h3>
                  <p>{databaseOppText}</p>
                </div>
                <div className={styles.websiteLink}>
                  <WebsiteLink website={dataBaseOppWebsite} />
                </div>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

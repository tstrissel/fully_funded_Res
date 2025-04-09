import { getMiddlewareManifest } from 'next/dist/client/route-loader'
import Image from 'next/image'
import styles from './ResourcesComp.module.css'
import { ArrowDown } from '../icons'
import WebsiteLink from '@components/shared/WebsiteLink'
import Link from 'next/link';

export default function ResourcesComp({
  grantAndFunds,
  practicalAdviceAndOpportunities,
  databaseOpp,
}) {
  return (
    <div>
      <div className={styles.jumpSection}>
        <Link href="#grants" className={styles.sectionButton}>
          <ArrowDown />
          <span>Grants & Funds</span>
        </Link>
        <Link href="#practicalAdvice" className={styles.sectionButton}>
          <ArrowDown />
          <span>Practical advice on artist opportunities</span>
        </Link>
        <Link href="#databases" className={styles.sectionButton}>
          <ArrowDown />
          <span>Databases for Artist Opportunities</span>
        </Link>
      </div>
      <hr />
      <h3 id="grants" className={styles.sectionTitle}>
        Grants & Funds
      </h3>
      <ul className="grid-wrapper">
        {grantAndFunds.map((GAF) => {
          return (
            <div className={styles.cards} key={GAF.id}>
              <img src={GAF.image}/>
              <div className={styles.card__info}>
                <div>
                  <h3>{GAF.name}</h3>
                  <p>{GAF.description}</p>
                </div>
                <div className={styles.websiteLink}>
                  <WebsiteLink website={GAF.link} />
                </div>
              </div>
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
          return (
            <div className={styles.cards} key={PAO.id}>
              <img src={PAO.image} />              
              <div className={styles.card__info}>
                <div>
                  <h3>{PAO.name}</h3>
                  <p>{PAO.description}</p>
                </div>
                <div className={styles.websiteLink}>
                  <WebsiteLink website={PAO.link} />
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
          return (
            <div className={styles.cards} key={DO.id}>
                <img src={DO.image} />
              <div className={styles.card__info}>
                <div>
                  <h3>{DO.name}</h3>
                  <p>{DO.description}</p>
                </div>
                <div className={styles.websiteLink}>
                  <WebsiteLink website={DO.link} />
                </div>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

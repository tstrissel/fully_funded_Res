import Image from 'next/image'
import styles from './ResourcesComp.module.css'
import { ArrowDown } from '../icons'
import WebsiteLink from '@components/shared/WebsiteLink/WebsiteLink'
import Link from 'next/link'

interface Resource {
  id: string
  image: string
  name: string
  description: string
  link: string
}

interface ResourcesCompProps {
  grantAndFunds: Resource[]
  practicalAdviceAndOpportunities: Resource[]
  databaseOpp: Resource[]
}

export default function ResourcesComp({
  grantAndFunds,
  practicalAdviceAndOpportunities,
  databaseOpp,
}: ResourcesCompProps) {
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
              <img src={GAF.image} alt={GAF.name} />
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
              <img src={PAO.image} alt={PAO.name} />
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
              <img src={DO.image} alt={DO.name} />
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

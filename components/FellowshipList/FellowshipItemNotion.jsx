import ResultModal from '../ResultModal/ResultModal'
import { useState } from 'react'
import Image from 'next/image'
import WebsiteLink from '../shared/WebsiteLink'
import InfoLabel from '../shared/InfoLabel/InfoLabel'

import styles from './FellowshipItem.module.css'
import cx from 'clsx'

const FellowshipItem = ({ viewMode, fellowship }) => {
  const title = fellowship?.['Name']?.title?.[0]?.plain_text
  const linkUrl = fellowship?.['Link']?.url // check url
  const deadline = fellowship?.['Deadline']?.date.start
  const eligibilityList = fellowship?.['Eligibility']?.multi_select
  const description =
    fellowship?.['Short Description']?.rich_text?.[0]?.plain_text
  const benefits = fellowship?.['Benefits']?.rich_text?.[0]?.plain_text
  const money = fellowship?.['Money']?.rich_text?.[0]?.plain_text
  const imageUrl =
    fellowship.Image?.files?.[0]?.file?.url ||
    fellowship.Image?.files?.[0]?.external?.url
  const fees = fellowship['Fees']?.rich_text?.[0]?.plain_text
  const fieldList = fellowship?.['Field']?.multi_select
  const country = fellowship?.['Country']?.select?.name
  const duration = fellowship?.['Duration']?.select?.name
  const type = fellowship?.['Type']?.select?.name

  const [isCardOpen, setIsCardOpen] = useState(false)
  const closeCard = () => {
    setIsCardOpen(false)
  }

  console.log(linkUrl)
  return (
    <>
      <div
        className={styles.buttonContainer}
        onClick={() => setIsCardOpen(true)}
      >
        {viewMode === 'cards' ? (
          <div className={styles.cardContainer}>
            <div className={styles.thumbnail}>
              <img src={imageUrl} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <ul>
              <li>
                <InfoLabel type="money">{money}</InfoLabel>
              </li>
              <li>
                <InfoLabel type="location">{country}</InfoLabel>
              </li>
              <li>
                <InfoLabel type="eligibility">
                  {eligibilityList.map((e) => (
                    <span>{e.name}</span>
                  ))}
                </InfoLabel>
              </li>
            </ul>
            <p className={styles.cardParagraph}>{description}</p>
            <div className={styles.cardButtons}>
              <button className="cta underlined">Read more</button>
              <div>
                <WebsiteLink website={linkUrl} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.rowContainer}>
            <div className={styles.description}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.rowParagraph}>{description}</p>
            </div>
            <ul className={styles.attributes}>
              <li>
                <strong>Deadline</strong>
                <span>{deadline}</span>
              </li>
              <li>
                <strong>Stipend</strong>
                <span>{money}</span>
              </li>
              <li>
                <strong>Eligibility</strong>
                <span>
                  {eligibilityList.map((e) => (
                    <span>{e.name}</span>
                  ))}
                </span>
              </li>
              <li>
                <strong>Location</strong>
                <span>{country}</span>
              </li>
              <div className={styles.websiteLink}>
                <WebsiteLink website={linkUrl} />
              </div>
            </ul>
          </div>
        )}
      </div>
      <ResultModal
        fellowship={fellowship}
        trigger={isCardOpen}
        setTrigger={closeCard}
        title={title}
        category={''}
        paragraph={description}
        deadline={deadline}
        money={money}
        featuredImage={imageUrl}
        location={country}
        fieldList={fieldList}
        eligibilityList={eligibilityList}
        type={type}
      />
    </>
  )
}

export default FellowshipItem

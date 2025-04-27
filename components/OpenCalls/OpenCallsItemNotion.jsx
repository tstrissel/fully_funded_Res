import ResultModal from '../ResultModal/ResultModal'
import { useState } from 'react'
import WebsiteLink from '../shared/WebsiteLink'
import InfoLabel from '../shared/InfoLabel/InfoLabel'
import styles from './OpenCallsItem.module.css'

const OpenCallsItem = ({ viewMode, openCall }) => {
  const {
    title,
    linkUrl,
    deadline,
    eligibility,
    description,
    benefits,
    money,
    imageUrl,
    fees,
    fieldList,
    country,
    duration,
    type 
  } = openCall;

  const [isCardOpen, setIsCardOpen] = useState(false)
  const closeCard = () => {
    setIsCardOpen(false)
  }

  return (
    <>
      <div
        className={styles.buttonContainer}
        onClick={() => setIsCardOpen(true)}
      >
        {viewMode === 'cards' ? (
          <div className={styles.cardContainer}>
            <div className={styles.thumbnail}>
              <img src={imageUrl}/>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <h4 className={styles.deadline}>Deadline: {deadline}</h4>
            <h4 className={styles.deadline}>Duration: {duration}</h4>
            <ul>
              <li>
                <InfoLabel type="money">{money}</InfoLabel>
              </li>
              <li>
                <InfoLabel type="location">{country}</InfoLabel>
              </li>
              <li>
                <InfoLabel type={eligibility.toLowerCase()}>{eligibility}</InfoLabel>
              </li>
            </ul>
            <p className={styles.cardParagraph}>{description}</p>
            <div className={styles.cardButtons}>
              <button className="cta underlined" >Read more</button>
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
                <strong>Duration</strong>
                <span>{duration}</span>
              </li>
              <li>
                <strong>Stipend</strong>
                <span>{money}</span>
              </li>
              <li>
                <strong>Eligibility</strong>
                <span>{eligibility}</span>
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
        fellowship={openCall}
        trigger={isCardOpen}
        setTrigger={closeCard}
        title={title}
        category={''}
        paragraph={description}
        deadline={deadline}
        duration={duration}
        fees={fees}
        money={money}
        featuredImage={imageUrl}
        location={country}
        fieldList={fieldList}
        eligibility={eligibility}
        type={type}
      />
    </>
  )
}

export default OpenCallsItem

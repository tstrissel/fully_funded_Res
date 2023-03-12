import ResultModal from '../ResultModal/ResultModal'
import { useState } from 'react'
import Image from 'next/image'
import WebsiteLink from '../shared/WebsiteLink/WebsiteLink'
import InfoLabel from '../shared/InfoLabel/InfoLabel'

import styles from './FellowshipItem.module.css'
import cx from 'clsx'

const FellowshipItem = ({ viewMode, fellowship }) => {
  const {
    title,
    slug,
    category,
    money,
    paragraph,
    thumbnail,
    location,
    eligibility,
    type,
    deadline,
    field,
    status,
    featuredImage,
  } = fellowship

  const [isCardOpen, setIsCardOpen] = useState(false)
  const closeCard = () => {
    setIsCardOpen(false)
  }

  const handleWebsiteClick = (e) => {
    e.stopPropagation()
    alert('opens website...')
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
              <img src={thumbnail.fields.file.url} />
            </div>
            <h3 className={styles.title}>{title}</h3>
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
                <InfoLabel type="eligibility">{eligibility}</InfoLabel>
              </li>
            </ul>
            <p className={styles.cardParagraph}>{paragraph}</p>
            <div className={styles.cardButtons}>
              <button className="cta underlined">Read more</button>
              <div onClick={handleWebsiteClick}>
                <WebsiteLink href={slug} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.rowContainer}>
            <div className={styles.description}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.rowParagraph}>{paragraph}</p>
            </div>
            <ul className={styles.attributes}>
              <li>
                <strong>Deadline</strong>
                <span>{status}</span>
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
                <span>{location}</span>
              </li>
              <div className={styles.websiteLink} onClick={handleWebsiteClick}>
                <WebsiteLink href={slug} />
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
        category={category}
        paragraph={paragraph}
        deadline={deadline}
        money={money}
        thumbnail={thumbnail.fields.file.url}
        featuredImage={featuredImage?.fields.file.url}
        location={location}
        field={field}
        type={type}
      />
    </>
  )
}

export default FellowshipItem

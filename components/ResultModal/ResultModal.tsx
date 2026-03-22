import styles from './Resultmodal.module.css'
import Modal from '../Modal/Modal'
import WebsiteLink from '../shared/WebsiteLink/WebsiteLink'
import InfoLabel from '../shared/InfoLabel/InfoLabel'
import { useEffect, useState, useRef } from 'react'
import type { OpenCall } from '@lib/notion'

interface ResultModalProps {
  fellowship: OpenCall
  trigger: boolean
  setTrigger: (open: boolean) => void
  title: string
  category: string
  paragraph?: string
  deadline: string
  duration: string
  fees: string
  money: string
  featuredImage: string
  location?: string
  fieldList: string
  eligibility: string
  type: string | null
}

export default function ResultModal({
  fellowship,
  trigger,
  setTrigger,
  title,
  category,
  paragraph,
  deadline,
  duration,
  fees,
  money,
  featuredImage,
  location,
  fieldList,
  eligibility,
  type,
}: ResultModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showScrollHint, setShowScrollHint] = useState(false)

  const handleScroll = () => {
    const el = scrollRef.current
    if (el && el.scrollTop > 10) setShowScrollHint(false)
  }

  useEffect(() => {
    if (!trigger) return

    const timeout = setTimeout(() => {
      const el = scrollRef.current
      if (!el) return

      const isScrollable = el.scrollHeight > el.clientHeight
      setShowScrollHint(isScrollable)

      el.addEventListener('scroll', handleScroll)
    }, 0)

    return () => {
      clearTimeout(timeout)
      const el = scrollRef.current
      if (el) el.removeEventListener('scroll', handleScroll)
    }
  }, [trigger])

  return (
    <Modal
      isOpen={trigger}
      onClose={() => setTrigger(false)}
      variant="primary"
      header={<h3 className="fontTitle">{title}</h3>}
    >
      <div ref={scrollRef} className={styles.scrollContainer}>
        <article className={styles.inner}>
          <section className={styles.topSection}>
            <img
              className={styles.image}
              src={featuredImage}
              alt={title}
              width="350px"
            />
            <div className={styles.details}>
              <ul>
                <li>
                  <InfoLabel type="money">{money}</InfoLabel>
                </li>
                <li>
                  <InfoLabel type="location">{location}</InfoLabel>
                </li>
                <li>
                  <InfoLabel type={eligibility?.toLowerCase()}>
                    {eligibility}
                  </InfoLabel>
                </li>
              </ul>
            </div>
          </section>

          <div className={styles.body}>
            <strong>Deadline: {deadline}</strong>
            <br />
            <strong>Duration: {duration}</strong>
            <br />
            <strong>Disciplines: {fieldList}</strong>
            <br />
            <strong>Fees: {fees}</strong>
            <br />
            <p>{paragraph}</p>
          </div>
          <div className={styles.footer}>
            <WebsiteLink website={fellowship.linkUrl} />
          </div>
        </article>
      </div>
      {showScrollHint && <div className={styles.scrollHint}>↓</div>}
    </Modal>
  )
}

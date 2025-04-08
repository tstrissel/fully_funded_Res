import styles from './Resultmodal.module.css'
import Modal from '../Modal/Modal'
import WebsiteLink from '../shared/WebsiteLink'
import InfoLabel from '../shared/InfoLabel/InfoLabel'
import { useEffect, useState, useRef } from 'react'

export default function ResultModal(props) {

  const scrollRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (el.scrollTop > 10) setShowScrollHint(false);
  };

  useEffect(() => {
    if (!props.trigger) return;
  
    const timeout = setTimeout(() => {
      const el = scrollRef.current;
      if (!el) return;
  
      const isScrollable = el.scrollHeight > el.clientHeight;
      setShowScrollHint(isScrollable);
  
      el.addEventListener('scroll', handleScroll);
      console.log('[DEBUG] scrollHeight:', el.scrollHeight, 'clientHeight:', el.clientHeight);
    }, 0); // run after DOM paint
  
    return () => {
      clearTimeout(timeout);
      const el = scrollRef.current;
      el.removeEventListener('scroll', handleScroll)
    }
  }, [props.trigger]);


  return (
    <Modal
      isOpen={props.trigger}
      onClose={() => props.setTrigger(false)}
      variant="primary"
      header={<h3 className="fontTitle">{props.title}</h3>}
    >
      <div ref={scrollRef} className={styles.scrollContainer}>
        <article className={styles.inner}>
          <section className={styles.topSection}>
            <img
              className={styles.image}
              src={props.featuredImage || props.thumbnail}
              alt={props.title}
              width="350px"
            />
            <div className={styles.details}>
              <ul>
                <li>
                </li>
                <li>
                  <InfoLabel type="money">{props.money}</InfoLabel>
                </li>
                <li>
                  <InfoLabel type="location">{props.location}</InfoLabel>
                </li>
                <li>
                  <InfoLabel type={props.eligibility.toLowerCase()}>{props.eligibility}</InfoLabel>
                </li>
              </ul>
            </div>
          </section>

          <div className={styles.body}>
            <strong>Deadline: {props.deadline}</strong>
            <br />
            <strong>Duration: {props.duration}</strong>
            <br />
            <strong>Disciplines: {props.fieldList}</strong>
            <br />
            <strong>Fees: {props.fees}</strong>
            <br />
            <p>{props.paragraph}</p>
          </div>
          <div className={styles.footer}>
            <WebsiteLink website={props.fellowship.linkUrl}/>
          </div>
        </article>
      </div>
      {showScrollHint && (
        <div className={styles.scrollHint}>↓</div>
      )}
    </Modal>
  )
}

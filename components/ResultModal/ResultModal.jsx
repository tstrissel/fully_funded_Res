import styles from './Resultmodal.module.css'
import Modal from '../Modal/Modal'
import WebsiteLink from '../shared/WebsiteLink'
import InfoLabel from '../shared/InfoLabel/InfoLabel'

export default function ResultModal(props) {
  return (
    <Modal
      isOpen={props.trigger}
      onClose={() => props.setTrigger(false)}
      variant="primary"
      header={<h3 className="fontTitle">{props.title}</h3>}
    >
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
          <strong>Disciplines: {props.fieldList}</strong>
          <p>{props.paragraph}</p>
        </div>
        <div className={styles.footer}>
          <WebsiteLink website={props.fellowship.linkUrl}/>
        </div>
      </article>
    </Modal>
  )
}

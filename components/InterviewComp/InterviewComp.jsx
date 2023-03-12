import styles from './InterviewComp.module.css'
import interButton from '../../public/FFR-assets/Buttons/Buttons/read-interview-button.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function interviewComp({ interviews }) {
  return (
    <ul className={styles.wrapper}>
      {interviews.map((interviews, index) => {
        const { title, paragraph, interviewImage } = interviews.fields

        // Todo: add link to interview page once its on contentful

        return (
          <div
            className={styles.item}
            key={interviews.sys.id}
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <img
              className={styles.thumbnail}
              src={interviewImage.fields.file.url}
            />
            <div className={styles.cardContainer}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{paragraph}</p>
              <div className="center">
                <Link href="/interviews">
                  <span className="cta cta-bordered"> Read Interview</span>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </ul>
  )
}

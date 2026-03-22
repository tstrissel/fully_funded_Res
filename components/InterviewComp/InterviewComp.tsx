import styles from './InterviewComp.module.css'
import Link from 'next/link'
import WebsiteLink from '../shared/WebsiteLink/WebsiteLink'

interface Interview {
  id: string
  image: string
  title: string
  description: string
  slug?: string
  link?: string
}

interface InterviewCompProps {
  interviews: Interview[]
}

export default function InterviewComp({ interviews }: InterviewCompProps) {
  return (
    <ul className="grid-wrapper">
      {interviews.map((interview, index) => {
        return (
          <div
            className={styles.item}
            key={interview.id}
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <img
              className={styles.thumbnail}
              src={interview.image}
              alt={interview.title}
            />
            <div className={styles.cardContainer}>
              <h1 className={styles.title}>{interview.title}</h1>
              <p className={styles.description}>{interview.description}</p>
              <div className={styles.linkButton}>
                {interview.slug && (
                  <Link href={`/interviews/${interview.slug}`} target="_blank">
                    <span className="cta cta-bordered">Read Interview</span>
                  </Link>
                )}
                {interview.link && (
                  <WebsiteLink website={interview.link} />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </ul>
  )
}

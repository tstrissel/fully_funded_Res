import styles from './InterviewComp.module.css'
import interButton from '../../public/FFR-assets/Buttons/Buttons/read-interview-button.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function interviewComp({ interviews }) {
  /* interviews[{
    fields:{
      title: string,
      slug: string,
      publicationDate: Date
    }
  },...]*/

  return (
    <ul className="grid-wrapper">
      {interviews.map((interviews, index) => {
        const { title, paragraph, interviewImage, slug, publicationDate } =
          interviews.fields

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
            {/* <Image
              src={'https:' + interviewImage.fields.file.url}
              width={interviewImage.fields.file.details.image.width}
              height={interviewImage.fields.file.details.image.height}
            /> */}
            <div className={styles.cardContainer}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{paragraph}</p>
              <div className={styles.linkButton}>
                <Link href={`/interviews/${slug}`}>
                  <span className="cta cta-bordered">Read Interview</span>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </ul>
  )
}

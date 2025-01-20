import styles from './InterviewComp.module.css'
import interButton from '../../public/FFR-assets/Buttons/Buttons/read-interview-button.svg'
import Image from 'next/image'
import Link from 'next/link'
import WebsiteLink from '@components/shared/WebsiteLink'

export default function interviewComp({ interviews }) {
  /* interviews[{
    {
    object: 'page',
    id: '17bd65ea-bf09-8025-b2ea-ffe4a4e15874',
    created_time: '2025-01-14T14:42:00.000Z',
    last_edited_time: '2025-01-19T15:55:00.000Z',
    created_by: { object: 'user', id: '500b73d4-759f-4fef-bef2-8d0e06e1d216' },
    last_edited_by: { object: 'user', id: '500b73d4-759f-4fef-bef2-8d0e06e1d216' },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: '17bd65ea-bf09-81d2-8ed5-d4052025291f'
    },
    archived: false,
    in_trash: false,
    properties: {
      'Short Description': [Object],
      'Publication Date': [Object],
      Published: [Object],
      Link: [Object],
      Image: [Object],
      Text: [Object],
      Name: [Object]
    },
    url: 'https://www.notion.so/In-Conversation-Louis-CK-17bd65eabf098025b2eaffe4a4e15874',
    public_url: null
  }
  },...]*/

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
            />
            {/* <Image
              src={'https:' + interviewImage.fields.file.url}
              width={interviewImage.fields.file.details.image.width}
              height={interviewImage.fields.file.details.image.height}
            /> */}
            <div className={styles.cardContainer}>
              <h1 className={styles.title}>{interview.title}</h1>
              <p className={styles.description}>{interview.description}</p>
              <div className={styles.linkButton}>
              {interview.slug && (
                <Link href={`/interviews/${interview.slug}`} target="_blank">
                  <span className="cta cta-bordered">Read Interview</span>
                </Link>              )}
              {interview.link && (
                <WebsiteLink website={interview.link}></WebsiteLink>
              )}
              </div>
            </div>
          </div>
        )
      })}
    </ul>
  )
}

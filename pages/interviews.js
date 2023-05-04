import InterviewComp from '../components/InterviewComp/InterviewComp.jsx'
import { client } from '../lib/contentful.js'

export const getStaticProps = async (context) => {
  const res = await client.getEntries({ content_type: 'interviews' })
  return {
    props: {
      interviews: res.items,
    },
  }
}

export default function interviews({ interviews }) {
  const sortedInterviews = interviews.sort(
    (a, b) =>
      new Date(b.fields.publicationDate) - new Date(a.fields.publicationDate)
  )
  return (
    <div>
      <div className="titleContainer">
        <div>
          <h1 className="pageTitle">Artist Reflections</h1>
          <h2 className="pageSubtitle">
            Artist reflections is a series of short interviews about AIR models,
            structures, personal experiences and application processes.
          </h2>
        </div>
      </div>
      <InterviewComp interviews={sortedInterviews} />
    </div>
  )
}

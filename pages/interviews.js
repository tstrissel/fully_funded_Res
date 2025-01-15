import InterviewComp from '../components/InterviewComp/InterviewComp.jsx'
import { client } from '../lib/contentful.js'
import { Client } from '@notionhq/client'

export const getStaticProps = async (context) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const notionDBID = process.env.NOTION_INTERVIEWS
  const notionResponse = await notion.databases.query({
    database_id: notionDBID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  })
  console.log(notionResponse.results);
  
  return {
    props: {
      interviews: [],
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

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

  const items = notionResponse.results.map(item => {
    return {
      'id': item.id,
      'image': item.properties.Image.files[0]?.file?.url ?? '',
      'title': item.properties.Name.title[0]?.plain_text ?? '',
      'link': item.properties.Link.url ?? '',
      'description': item.properties['Short Description'].rich_text[0]?.plain_text ?? '',
      'slug': item.properties.slug.rich_text[0]?.plain_text ?? '',
      'text': item.properties.Text.rich_text[0] ?? null
    };
  })
  
  return {
    props: {
      interviews: items,
    },
  }
}

export default function interviews({ interviews }) {
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
      <InterviewComp interviews={interviews} />
    </div>
  )
}

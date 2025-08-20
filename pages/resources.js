import Image from 'next/image'
import { client } from '../lib/contentful.js'
import ResourcesComp from '../components/ResourcesComp/ResourcesComp'
import { Client } from '@notionhq/client'

export const getStaticProps = async (context) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const notionDBID = process.env.NOTION_RESOURCES
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
      'name': item.properties.Name.title[0]?.plain_text ?? '',
      'link': item.properties.Link.url ?? '',
      'description': item.properties['Short Description'].rich_text[0]?.plain_text ?? '',
      'type': item.properties.Type.select.name
    };
  })

  console.log(items);

  return {
    props: {
      grantAndFunds: items.filter(item => item.type === "Grants & Funds"),
      databaseOpp: items.filter(item => item.type === "Databases"),
      practicalAdviceAndOpportunities: items.filter(item => item.type === "Practical advice"),
    },
  }
}

export default function resources({
  grantAndFunds,
  practicalAdviceAndOpportunities,
  databaseOpp,
}) {
  return (
    <div>
      <div className="titleContainer">
        <div>
          <h1 className="pageTitle">Resources</h1>
          <h2 className="pageSubtitle">
            FFR compiled a list of useful links, including ongoing grants and
            funds, professional advice, best and worst practices of art
            institutions and more.
          </h2>
        </div>
      </div>
      <ResourcesComp
        grantAndFunds={grantAndFunds}
        practicalAdviceAndOpportunities={practicalAdviceAndOpportunities}
        databaseOpp={databaseOpp}
      />
    </div>
  )
}

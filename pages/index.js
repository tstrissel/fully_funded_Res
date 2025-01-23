import OpenCallsList from '../components/OpenCalls'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'

// import { MyDocument } from "./_document";
// import SearchBar from "../components/searchBar"
import { Client } from '@notionhq/client'

export const getStaticProps = async (context) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const notionDBID = process.env.NOTION_OPEN_CALLS
  const notionResponse = await notion.databases.query({
    database_id: notionDBID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  })

  console.log(notionResponse.results[0].properties['Duration Value']);
  console.log(notionResponse.results[0].properties['Duration Unit']);
  const items = notionResponse.results.map(item => {
    console.log('duration', item.properties['Duration']);
    return {
      'createdAt': item.created_time,
      'title': item.properties.Name.title[0]?.plain_text ?? '',
      'linkUrl': item.properties.Link.url ?? '', // check url
      'deadline': item.properties.Deadline.date.start,
      'eligibilityList': item.properties.Eligibility.multi_select,
      'description': item.properties['Short Description']?.rich_text?.[0]?.plain_text,
      'benefits': item.properties.Benefits?.rich_text?.[0]?.plain_text,
      'money': item.properties.Money.rich_text?.[0]?.plain_text,
      'imageUrl': item.properties.Image?.files?.[0]?.file?.url || fellowship.Image?.files?.[0]?.external?.url,
      'fees': item.properties.Fees.rich_text?.[0]?.plain_text ?? '',
      'fieldList': item.properties.Field.multi_select,
      'country': item.properties.Country.select?.name.trimStart(),
      'durationValue': item.properties['Duration Value'].number,
      'durationUnit': item.properties['Duration Unit'].select?.name ?? '',
      'type': item.properties.Type.select?.name
    }
  });

  return {
    props: {
      openCalls: items,
    },
    revalidate: 30,
  }
}

export default function Index({ openCalls }) {
  return (
    <div>
      <div className="titleContainer">
        <div>
          <h1 className="pageTitle">Open Calls</h1>
          <h2 className="pageSubtitle">
            Browse through a list of fully funded residencies that we update
            regularly and find the best fit for you.
          </h2>
        </div>
      </div>
      <OpenCallsList calls={openCalls} />
    </div>
  )
}

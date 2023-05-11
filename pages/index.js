import FellowshipList from '../components/FellowshipList'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'
// import { MyDocument } from "./_document";
// import SearchBar from "../components/searchBar"
import { client } from '../lib/contentful.js'
import { Client } from '@notionhq/client'

export const getStaticProps = async (context) => {
  const res = await client.getEntries({ content_type: 'fellowship' })
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

  return {
    props: {
      fellowships: res.items,
      notionCalls: notionResponse.results,
    },
    revalidate: 30,
  }
}

export default function Index({ fellowships, interviews, notionCalls }) {
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
      <FellowshipList fellowships={fellowships} calls={notionCalls} />
    </div>
  )
}

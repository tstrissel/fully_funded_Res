import OpenCallsList from '../components/OpenCalls'
import { DateTime } from 'luxon'
import { Client } from '@notionhq/client'

export const getStaticProps = async (context) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const notionDBID = process.env.NOTION_OPEN_CALLS

  const schemaResponse = await notion.databases.retrieve({database_id: notionDBID});
  const notionResponse = await notion.databases.query({
    database_id: notionDBID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  })

  const countries = schemaResponse.properties['Country'].select.options.map(option => option.name.trimStart());
  const uniqueCountries = [...new Set(countries)];

  const types = schemaResponse.properties['Open Call Type'].select.options.map(option=> option.name.trimStart())
  const uniqueTypes = [...new Set(types)];

  const items = notionResponse.results.map(item => {

    return {
      'createdAt': item.created_time,
      'title': item.properties.Name.title[0]?.plain_text ?? '',
      'linkUrl': item.properties.Link.url ?? '', // check url
      'deadline': DateTime.fromISO(item.properties.Deadline.date.start).toFormat('dd.LL.yy'),
      'eligibility': item.properties.Eligibility.select?.name ?? '',
      'description': item.properties['Short Description']?.rich_text?.[0]?.plain_text,
      'benefits': item.properties.Benefits?.rich_text?.[0]?.plain_text,
      'money': item.properties.Money?.rich_text?.[0]?.plain_text ?? '',
      'imageUrl': item.properties.Image?.files?.[0]?.file?.url || fellowship.Image?.files?.[0]?.external?.url,
      'fees': item.properties.Fees.rich_text?.[0]?.plain_text ?? '',
      'fieldList': item.properties.Field.multi_select.map(option => option.name).join(', '),
      'country': item.properties.Country.select?.name.trimStart(),
      'duration': item.properties['Duration Value'].number + ' ' + (item.properties['Duration Unit'].select?.name ?? ''),
      'type': item.properties['Open Call Type'].select?.name ?? null
    }
  });

  return {
    props: {
      openCalls: items,
      countriesList: uniqueCountries,
      typesList: uniqueTypes
    },
    revalidate: 30,
  }
}

export default function Index({ openCalls, countriesList, typesList }) {
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
      <OpenCallsList calls={openCalls} countriesList={countriesList} typesList={typesList} />
    </div>
  )
}

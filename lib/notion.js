import { Client } from '@notionhq/client'
import { DateTime } from 'luxon'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const notionDBID = process.env.NOTION_OPEN_CALLS

/**
 * Retrieves the database schema to extract available filter options
 * @returns {Promise<Object>} Object containing countriesList and typesList
 */
export const getDatabaseSchema = async () => {
  try {
    const schemaResponse = await notion.databases.retrieve({
      database_id: notionDBID,
    })

    const countries = schemaResponse.properties['Country'].select.options
      .map((option) => option.name.trimStart())
    const uniqueCountries = [...new Set(countries)]

    const types = schemaResponse.properties['Open Call Type'].select.options
      .map((option) => option.name.trimStart())
    const uniqueTypes = [...new Set(types)]

    return {
      countriesList: uniqueCountries,
      typesList: uniqueTypes,
    }
  } catch (error) {
    console.error('Error retrieving database schema:', error)
    throw error
  }
}

/**
 * Transforms a Notion database item into a standardized open call object
 * @param {Object} item - Raw Notion database item
 * @returns {Object} Transformed open call object
 */
const transformNotionItem = (item) => {
  const props = item.properties
  
  return {
    id: item.id,
    createdAt: item.created_time,
    title: props.Name.title[0]?.plain_text ?? '',
    linkUrl: props.Link.url ?? '',
    deadline: DateTime.fromISO(props.Deadline.date.start).toFormat(
      'dd.LLL.yy'
    ),
    eligibility: props.Eligibility.select?.name ?? '',
    description: props['Short Description']?.rich_text?.[0]?.plain_text,
    benefits: props.Benefits?.rich_text?.[0]?.plain_text ?? null,
    money: props.Money?.rich_text?.[0]?.plain_text ?? '',
    imageUrl:
      props.Image?.files?.[0]?.file?.url ||
      props.Image?.files?.[0]?.external?.url,
    fees: props.Fees.rich_text?.[0]?.plain_text ?? '',
    fieldList: props.Field.multi_select.map((option) => option.name).join(', '),
    country: props.Country.select?.name.trimStart(),
    duration:
      (props['Duration Value'].number ?? '') +
      ' ' +
      (props['Duration Unit'].select?.name ?? ''),
    type: props['Open Call Type'].select?.name ?? null,
  }
}

/**
 * Retrieves all published open calls from the Notion database
 * Filters out items with deadlines in the past
 * @returns {Promise<Array>} Array of transformed open call objects
 */
export const getPublishedOpenCalls = async () => {
  try {
    const notionResponse = await notion.databases.query({
      database_id: notionDBID,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
    })

    const items = notionResponse.results
      .filter((item) => {
        return (
          DateTime.fromISO(item.properties.Deadline.date.start) >=
          DateTime.now()
        )
      })
      .map(transformNotionItem)

    return items
  } catch (error) {
    console.error('Error retrieving open calls:', error)
    throw error
  }
}

/**
 * Retrieves both open calls and database schema in parallel
 * @returns {Promise<Object>} Object containing openCalls, countriesList, and typesList
 */
export const getOpenCallsPageData = async () => {
  try {
    const [openCalls, schema] = await Promise.all([
      getPublishedOpenCalls(),
      getDatabaseSchema(),
    ])

    return {
      openCalls,
      ...schema,
    }
  } catch (error) {
    console.error('Error retrieving open calls page data:', error)
    throw error
  }
}

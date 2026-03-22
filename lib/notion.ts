import { Client } from '@notionhq/client'
import { DateTime } from 'luxon'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const notionOpenCallsID = process.env.NOTION_OPEN_CALLS
const notionInterviewsDBID = process.env.NOTION_INTERVIEWS
const notionResourcesDBID = process.env.NOTION_RESOURCES

export interface OpenCall {
  id: string
  createdAt: string
  title: string
  linkUrl: string
  deadline: string
  eligibility: string
  description: string | undefined
  benefits: string | null
  money: string
  imageUrl: string
  fees: string
  fieldList: string
  country: string | undefined
  duration: string
  type: string | null
}

export interface Resource {
  id: string
  createdAt: string
  title: string
  linkUrl: string
  description: string | undefined
  imageUrl: string
  category: string | undefined
}

export interface Interview {
  id: string
  createdAt: string
  title: string
  linkUrl: string
  interviewee: string
  date: string
  summary: string | undefined
  imageUrl: string
}

export interface DatabaseSchema {
  countriesList: string[]
  typesList: string[]
}

/**
 * Retrieves the database schema to extract available filter options
 * @returns {Promise<DatabaseSchema>} Object containing countriesList and typesList
 */
export const getDatabaseSchema = async (): Promise<DatabaseSchema> => {
  try {
    const schemaResponse = await notion.databases.retrieve({
      database_id: notionOpenCallsID!,
    })

    const countries = (schemaResponse.properties['Country'] as any).select.options
      .map((option: any) => option.name.trimStart())
    const uniqueCountries = Array.from(new Set(countries)) as string[]

    const types = (schemaResponse.properties['Open Call Type'] as any).select.options
      .map((option: any) => option.name.trimStart())
    const uniqueTypes = Array.from(new Set(types)) as string[]

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
 * @param {any} item - Raw Notion database item
 * @returns {OpenCall} Transformed open call object
 */
const transformNotionItem = (item: any): OpenCall => {
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
    fieldList: props.Field.multi_select.map((option: any) => option.name).join(', '),
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
 * @returns {Promise<OpenCall[]>} Array of transformed open call objects
 */
export const getPublishedOpenCalls = async (): Promise<OpenCall[]> => {
  try {
    const notionResponse = await notion.databases.query({
      database_id: notionOpenCallsID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
    })

    const items = notionResponse.results
      .filter((item: any) => {
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

export interface OpenCallsPageData extends DatabaseSchema {
  openCalls: OpenCall[]
}

/**
 * Retrieves both open calls and database schema in parallel
 * @returns {Promise<OpenCallsPageData>} Object containing openCalls, countriesList, and typesList
 */
export const getOpenCallsPageData = async (): Promise<OpenCallsPageData> => {
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

interface NotionInterviewItem {
  id: string
  image: string
  title: string
  link: string
  description: string
  slug: string
  text: any
}

export const getInterviewsPageData = async (): Promise<NotionInterviewItem[]> => {
  try {
    const notionResponse = await notion.databases.query({
      database_id: notionInterviewsDBID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
    })

    const items = notionResponse.results.map((item: any) => ({
      id: item.id,
      image: item.properties.Image.files[0]?.file?.url ?? '',
      title: item.properties.Name.title[0]?.plain_text ?? '',
      link: item.properties.Link.url ?? '',
      description: item.properties['Short Description'].rich_text[0]?.plain_text ?? '',
      slug: item.properties.slug.rich_text[0]?.plain_text ?? '',
      text: item.properties.Text.rich_text[0] ?? null,
    }))

    return items
  } catch (error) {
    console.error('Error retrieving interviews:', error)
    throw error
  }
}

interface ResourceItem {
  id: string
  image: string
  name: string
  link: string
  description: string
  type: string
}

export interface ResourcesPageData {
  grantAndFunds: ResourceItem[]
  databaseOpp: ResourceItem[]
  practicalAdviceAndOpportunities: ResourceItem[]
}

export const getResourcesPageData = async (): Promise<ResourcesPageData> => {
  try {
    const notionResponse = await notion.databases.query({
      database_id: notionResourcesDBID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
    })

    const items: ResourceItem[] = notionResponse.results.map((item: any) => ({
      id: item.id,
      image: item.properties.Image.files[0]?.file?.url ?? '',
      name: item.properties.Name.title[0]?.plain_text ?? '',
      link: item.properties.Link.url ?? '',
      description: item.properties['Short Description'].rich_text[0]?.plain_text ?? '',
      type: item.properties.Type.select.name,
    }))

    return {
      grantAndFunds: items.filter((item) => item.type === 'Grants & Funds'),
      databaseOpp: items.filter((item) => item.type === 'Databases'),
      practicalAdviceAndOpportunities: items.filter((item) => item.type === 'Practical advice'),
    }
  } catch (error) {
    console.error('Error retrieving resources:', error)
    throw error
  }
}

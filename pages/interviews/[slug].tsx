import InterviewContainer from '@components/InterviewPost/InterviewContainer'
import Post from '@components/InterviewPost/Post'
import { Client } from '@notionhq/client'
import { useRouter } from 'next/router'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Interview {
  id: string
  image: string
  title: string
  link: string
  description: string
  slug: string
  text: any
  headerImage: string
  post: {
    title: string
    headerImage: string
    text: any[]
  }
}

interface PostWrapperProps {
  post?: Interview
}

const PostWrapper: NextPage<PostWrapperProps> = ({ post }) => {
  const router = useRouter()
  const interview = (router.query.state as any) || post

  return (
    <InterviewContainer>
      <Post post={interview} />
    </InterviewContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY })
    const notionDBID = process.env.NOTION_INTERVIEWS

    const notionResponse = await notion.databases.query({
      database_id: notionDBID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
    })

    const items = notionResponse.results.map((item: any) => {
      return {
        slug: item.properties.slug.rich_text[0]?.plain_text ?? undefined,
      }
    })

    const paths = items
      .map((interview: any) => {
        if (interview.slug === undefined) return null
        return { params: { slug: interview.slug } }
      })
      .filter((path: any) => path !== null)

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    console.error('Error in getStaticPaths:', error)
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export const getStaticProps: GetStaticProps<PostWrapperProps> = async ({
  params,
}) => {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY })
    const notionDBID = process.env.NOTION_INTERVIEWS

    const notionResponse = await notion.databases.query({
      database_id: notionDBID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
    })

    const items = notionResponse.results.map((item: any) => {
      return {
        id: item.id,
        image: item.properties.Image.files[0]?.file?.url ?? '',
        title: item.properties.Name.title[0]?.plain_text ?? '',
        link: item.properties.Link.url ?? '',
        description:
          item.properties['Short Description'].rich_text[0]?.plain_text ?? '',
        slug: item.properties.slug.rich_text[0]?.plain_text ?? undefined,
        text: item.properties.Text.rich_text ?? null,
        headerImage: item.properties['Header Photo'].files[0]?.file?.url ?? '',
        post: {
          title: item.properties.Name.title[0]?.plain_text ?? '',
          headerImage:
            item.properties['Header Photo'].files[0]?.file?.url ?? '',
          text: item.properties.Text.rich_text ?? [],
        },
      }
    })

    const foundPost = items.find(
      (item: Interview) => item.slug === params?.slug
    )

    if (!foundPost) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        post: foundPost,
      },
      revalidate: 30,
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      notFound: true,
      revalidate: 5,
    }
  }
}

export default PostWrapper

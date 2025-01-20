import { client } from '@lib/contentful.js'
import InterviewContainer from '@components/InterviewPost/InterviewContainer'
import Post from '@components/InterviewPost/Post'
import { Client } from '@notionhq/client'
import { useRouter } from 'next/router';


// import Post from '@components/Post'
// import { Config } from '@utils/Config'
// import PageMeta from '@components/PageMeta'
// import MainLayout from '@layouts/main'
// import ContentWrapper from '@components/ContentWrapper'

export default function PostWrapper(fallbackInterview) {
  const router = useRouter();
  const interview = router.query.state || fallbackInterview;

  return (
    <InterviewContainer>
      <Post post={interview} />
    </InterviewContainer>
    // <MainLayout preview={preview}>
    //   <PageMeta
    //     title={post.title}
    //     description={post.excerpt}
    //     url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
    //     canonical={post.externalUrl ? post.externalUrl : false}
    //   />
    //   <ContentWrapper>
    //     <Post post={post} />
    //   </ContentWrapper>
    // </MainLayout>
  )
}

export async function getStaticPaths() {
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
      'slug': item.properties.slug.rich_text[0]?.plain_text ?? undefined
    };
  })

  const paths = items
    .map((interview) => {
      if (interview.slug === undefined) return
      return { params: { slug: interview.slug } }
    })
    .filter((path) => path !== undefined)

  console.log(paths)

  // Using fallback: "blocking" here enables preview mode for unpublished blog slugs
  // on production
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
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
      'slug': item.properties.slug.rich_text[0]?.plain_text ?? undefined,
      'text': item.properties.Text.rich_text ?? null,
      'headerImage': item.properties['Header Photo'].files[0]?.file?.url ?? ''
    };
  })

  return {
    props: {
      post: items.filter(item => item.slug === params.slug)[0]
    },
  }
}

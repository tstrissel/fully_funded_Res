import { client } from '@lib/contentful.js'
import InterviewContainer from '@components/InterviewPost/InterviewContainer'
import Post from '@components/InterviewPost/Post'

// import Post from '@components/Post'
// import { Config } from '@utils/Config'
// import PageMeta from '@components/PageMeta'
// import MainLayout from '@layouts/main'
// import ContentWrapper from '@components/ContentWrapper'

export default function PostWrapper(props) {
  const { interview, preview } = props
  const post = interview.items[0].fields
  return (
    <InterviewContainer>
      <Post post={post} />
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
  const { items } = await client.getEntries({ content_type: 'interviews' })

  const paths = items
    .map((interview) => {
      if (interview.fields.slug === undefined) return
      return { params: { slug: interview.fields.slug } }
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

export async function getStaticProps({ params, preview = false }) {
  const interview = await client.getEntries(
    {
      content_type: 'interviews',
      'fields.slug': params.slug,
    },
    preview
  )

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (!interview) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      preview,
      interview,
    },
  }
}

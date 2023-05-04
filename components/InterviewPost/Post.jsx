import styles from './Post.module.css'
import typoStyles from './Typography.module.css'
import RichText from './RichText'
import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer'

export default function Post(props) {
  const { post } = props
  console.log(post.content)
  const options = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }
  return (
    <article className={styles.page}>
      {/* {post.externalUrl && <ExternalUrl url={post.externalUrl} />} */}
      {/* <PublishedDate date={post.date} /> */}
      {/* {post.tags !== null && <Tags tags={post.tags} />} */}
      <h1 className={typoStyles.heading__h1}>{post.title}</h1>
      <div className={styles.page__content}>
        {renderRichText(post.content, options)}
      </div>
      {/* <RichText richTextBodyField={post.content} renderH2Links={true} /> */}
      {/* {post.author !== null && <Author author={post.author} />} */}
    </article>
  )
}

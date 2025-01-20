import styles from './Post.module.css'
import typoStyles from './Typography.module.css'
import { Text } from 'react-notion-x';
import { renderRichText } from '@lib/richtext';
export default function Post(props) {
  const post = props.post.post;
  console.log(post.text);
  console.log('checking if its an array', Array.isArray(post.text)); // Should return true
  return (
    <article className={styles.page}>
      {/* {post.externalUrl && <ExternalUrl url={post.externalUrl} />} */}
      {/* <PublishedDate date={post.date} /> */}
      {/* {post.tags !== null && <Tags tags={post.tags} />} */}
      <h1 className={typoStyles.heading__h1}>{post.title}</h1>
      <div className={styles.page__content}>
        <img src={post.headerImage}></img>
        { renderRichText(post.text) }
      </div>
      {/* <RichText richTextBodyField={post.content} renderH2Links={true} /> */}
      {/* {post.author !== null && <Author author={post.author} />} */}
    </article>
  )
}

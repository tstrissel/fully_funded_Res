import styles from './Post.module.css'
import typoStyles from './Typography.module.css'
import { renderRichText } from '@lib/richtext'
import type { ReactNode } from 'react'

interface PostData {
  title: string
  headerImage: string
  text: any[]
}

interface PostProps {
  post: {
    post: PostData
  }
}

export default function Post({ post }: PostProps) {
  const postData = post.post
  return (
    <article className={styles.page}>
      <h1 className={typoStyles.heading__h1}>{postData.title}</h1>
      <div className={styles.page__content}>
        <img src={postData.headerImage} alt={postData.title} />
        {renderRichText(postData.text)}
      </div>
    </article>
  )
}

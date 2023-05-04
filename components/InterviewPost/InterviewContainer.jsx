import styles from './InterviewContainer.module.css'

export default function InterviewPost({ children }) {
  return <div className={styles.container}>{children}</div>
}

import styles from './InterviewContainer.module.css'
import type { ReactNode } from 'react'

interface InterviewContainerProps {
  children: ReactNode
}

export default function InterviewContainer({
  children,
}: InterviewContainerProps) {
  return <div className={styles.container}>{children}</div>
}

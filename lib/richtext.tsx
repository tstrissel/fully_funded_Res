import Link from 'next/link'
import { ReactNode } from 'react'

interface TextAnnotations {
  bold: boolean
  italic: boolean
  underline: boolean
  strikethrough: boolean
  code: boolean
}

interface TextLink {
  url: string
}

interface TextBlock {
  type: 'text'
  text: {
    content: string
    link: TextLink | null
  }
  annotations: TextAnnotations
}

interface RichTextBlock {
  type: string
  text?: {
    content: string
    link: TextLink | null
  }
  annotations?: TextAnnotations
}

export function renderRichText(richText: RichTextBlock[]): ReactNode[] {
  return richText.map((block, index) => {
    if (block.type === 'text') {
      const textBlock = block as TextBlock
      const { content, link } = textBlock.text
      const { bold, italic, underline, strikethrough, code } = textBlock.annotations

      // Apply styles based on annotations
      const style: React.CSSProperties = {
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: underline
          ? 'underline'
          : strikethrough
            ? 'line-through'
            : 'none',
        fontFamily: code ? 'monospace' : 'Nunito, sans-serif',
        whiteSpace: 'pre-wrap',
        display: 'inline',
      }

      return (
        <span key={index} style={style}>
          {link ? (
            <Link href={link.url} passHref>
              {content}
            </Link>
          ) : (
            content
          )}
        </span>
      )
    }
    return null
  })
}

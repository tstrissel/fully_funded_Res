import Image from 'next/image'
import Link from 'next/link'
import RichTextPageContentStyles from './Post.module.css'
import TypographyStyles from './Typography.module.css'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { ReactNode } from 'react'

function slugifyString(string: string): string {
  return string
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .toLowerCase()
}

interface RichTextLink {
  block?: Array<{ sys: { id: string } }>
  inline?: Array<{ sys: { id: string } }>
}

interface RichTextLinks {
  assets?: RichTextLink
  entries: RichTextLink
}

interface RichTextFieldOptions {
  renderH2Links?: boolean
  renderNativeImg?: boolean
}

interface RichTextBodyField {
  json: any
  links: RichTextLinks
}

interface RichTextPageContentProps {
  richTextBodyField: RichTextBodyField
  renderH2Links?: boolean
}

export function getRichTextRenderOptions(
  links: RichTextLinks | undefined,
  options: RichTextFieldOptions
) {
  const { renderH2Links, renderNativeImg } = options

  const assetBlockMap = new Map(
    links?.assets?.block?.map((asset: any) => [asset.sys.id, asset])
  )

  const entryMap = new Map()
  if (links?.entries.block) {
    for (const entry of links.entries.block) {
      entryMap.set(entry.sys.id, entry)
    }
  }

  if (links?.entries.inline) {
    for (const entry of links.entries.inline) {
      entryMap.set(entry.sys.id, entry)
    }
  }

  return {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => (
        <b
          className={`${TypographyStyles.bodyCopy} ${TypographyStyles.bodyCopy__bold}`}
        >
          {text}
        </b>
      ),
      [MARKS.CODE]: (text: ReactNode) => (
        <code className={TypographyStyles.inlineCode}>{text}</code>
      ),
    },

    renderNode: {
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => (
        <a
          className={TypographyStyles.inlineLink}
          href={node.data.uri}
          target="_blank"
          rel="nofollow noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.HR]: () => (
        <hr className={RichTextPageContentStyles.page__hr} />
      ),
      [BLOCKS.HEADING_1]: (node: any, children: ReactNode) => (
        <h1 className={TypographyStyles.heading__h1}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: ReactNode) => {
        if (renderH2Links) {
          const childText = String(children)
          return (
            <div
              className={RichTextPageContentStyles.page__linkedHeaderContainer}
            >
              <h2
                id={`${slugifyString(childText)}`}
                className={TypographyStyles.heading__h2}
              >
                {children}
              </h2>
              <a
                className={`${RichTextPageContentStyles.page__headerLink} ${TypographyStyles.inlineLink}`}
                href={`#${slugifyString(childText)}`}
                aria-label={childText}
              >
                #
              </a>
            </div>
          )
        } else {
          return (
            <h2 className={TypographyStyles.heading__h2}>{children}</h2>
          )
        }
      },
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => (
        <h3 className={TypographyStyles.heading__h3}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: ReactNode) => (
        <h4 className={TypographyStyles.heading__h4}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: ReactNode) => (
        <h5 className={TypographyStyles.heading__h5}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: ReactNode) => (
        <h6 className={TypographyStyles.heading__h6}>{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => (
        <p className={TypographyStyles.bodyCopy}>{children}</p>
      ),
      [BLOCKS.QUOTE]: (node: any, children: ReactNode) => (
        <blockquote className={TypographyStyles.blockquote}>
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: ReactNode) => (
        <ul className={RichTextPageContentStyles.page__ul}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: ReactNode) => (
        <ol className={RichTextPageContentStyles.page__ol}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: ReactNode) => (
        <li
          className={`${TypographyStyles.bodyCopy} ${RichTextPageContentStyles.page__li}`}
        >
          {children}
        </li>
      ),
      [INLINES.EMBEDDED_ENTRY]: (node: any, children: ReactNode) => {
        const entry = entryMap.get(node.data.target.sys.id)
        if (!entry) return null

        switch (entry.__typename) {
          case 'BlogPost':
            return (
              <Link href={`/blog/${entry.slug}`}>
                <a className={TypographyStyles.inlineLink}>{entry.title}</a>
              </Link>
            )
          default:
            return null
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: () => null,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = assetBlockMap?.get(node.data.target.sys.id)
        if (!asset) return null

        const { title, url, height, width, description } = asset

        if (renderNativeImg) {
          return (
            <div className={RichTextPageContentStyles.page__imgContainer}>
              <img
                src={url}
                alt={description}
                height={height}
                width={width}
              />
            </div>
          )
        } else {
          return (
            <div className={RichTextPageContentStyles.page__imgContainer}>
              <Image
                src={url}
                alt={description}
                height={height}
                width={width}
                layout="responsive"
              />
            </div>
          )
        }
      },
    },
  }
}

export default function RichTextPageContent({
  richTextBodyField,
  renderH2Links,
}: RichTextPageContentProps) {
  return (
    <div className={RichTextPageContentStyles.page__content}>
      {documentToReactComponents(
        richTextBodyField.json,
        getRichTextRenderOptions(richTextBodyField.links, { renderH2Links })
      )}
    </div>
  )
}

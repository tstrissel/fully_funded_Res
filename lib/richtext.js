import Link from 'next/link';

export function renderRichText(richText) {
  return richText.map((block, index) => {
    if (block.type === 'text') {
      const { content, link } = block.text;
      const { bold, italic, underline, strikethrough, code } = block.annotations;

      // Apply styles based on annotations
      const style = {
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: underline
          ? 'underline'
          : strikethrough
          ? 'line-through'
          : 'none',
        fontFamily: code ? 'monospace' : 'Nunito, sans-serif',
        whiteSpace: 'pre-wrap', // Preserve whitespace formatting (newlines, etc.)
        display: 'inline', // Ensure it's inline with the rest of the text
      };

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
      );
    }
    return null; // Handle other types if necessary
  });
}

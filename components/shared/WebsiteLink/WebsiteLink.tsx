import { ArrowRight } from '../../icons'
import Link from 'next/link'

interface WebsiteLinkProps {
  website: string
}

export default function WebsiteLink({ website }: WebsiteLinkProps) {
  return (
    <Link className="cta" href={website} target="_blank">
      Visit website
      <ArrowRight />
    </Link>
  )
}

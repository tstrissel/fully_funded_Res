import { ArrowRight } from '../../icons'
import Link from 'next/link'

export default function WebsiteLink(props) {
  return (
    <Link className="cta" href={props.website} target="_blank">
      Visit website
      <ArrowRight />
    </Link>
  )
}

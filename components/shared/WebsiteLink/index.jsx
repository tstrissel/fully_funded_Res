import { ArrowRight } from '../../icons'

export default function WebsiteLink(props) {
  return (
    <a className="cta" href={props.website} target="_blank">
      <span>Visit website</span>
      <ArrowRight />
    </a>
  )
}

import styles from './InfoLabel.module.css'
import { Clock, DollarSign, LocationPin, ProfileIndividual, ArtField, ProfileCollective } from '../../icons'

const getIconForLabel = (label) => {
  switch (label) {
    case 'deadline':
      return Clock
    case 'money':
      return DollarSign
    case 'location':
      return LocationPin
    case 'individual':
      return ProfileIndividual
    case 'collective':
      return ProfileCollective
    case 'individuals & collectives':
      return ProfileCollective
    case 'field':
      return ArtField
    default:
      return () => null
  }
}

export default function InfoLabel(props) {
  const Icon = getIconForLabel(props.type)
  return (
    <div className={styles.wrapper} href={props.website}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{props.children}</span>
    </div>
  )
}

import styles from './InfoLabel.module.css'
import {
  Clock,
  DollarSign,
  LocationPin,
  ProfileIndividual,
  ArtField,
  ProfileCollective,
} from '../../icons'
import type { ReactNode } from 'react'

type IconComponent = React.ComponentType<any>

const getIconForLabel = (label: string): IconComponent => {
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

interface InfoLabelProps {
  type: string
  children: ReactNode
}

export default function InfoLabel({ type, children }: InfoLabelProps) {
  const Icon = getIconForLabel(type)
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </div>
  )
}

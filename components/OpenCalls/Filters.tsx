import styles from './Filters.module.css'
import Modal from '../Modal/Modal'
import { useEffect, useState, useRef, ReactNode, ChangeEvent } from 'react'
import cx from 'clsx'

interface FiltersProps {
  onApplyFilters: (filters: any) => void
  onClear: () => void
  isOpen: boolean
  onClose: () => void
  countryList: string[]
  typesList: string[]
}

interface FilterState {
  [key: string]: boolean
}

export default function Filters({
  onApplyFilters,
  onClear,
  isOpen,
  onClose,
  countryList,
  typesList,
}: FiltersProps) {
  const [country, setCountry] = useState<string | null>(null)
  const [type, setType] = useState<FilterState>({
    Production: false,
    Exhibition: false,
    Research: false,
  })
  const [eligibility, setEligibility] = useState<string | null>(null)
  const [duration, setDuration] = useState<string | null>(null)
  const [noFees, setNoFees] = useState(false)
  const [field, setField] = useState<FilterState>({
    'Multi-disciplinary': false,
    'Digital/New Media': false,
    Literature: false,
    'Music & Sound': false,
    'Performance Art': false,
    Architecture: false,
    'Cultural Heritage': false,
    'Visual Arts & Design': false,
    Curatorial: false,
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  const [showScrollHint, setShowScrollHint] = useState(false)

  const handleScroll = () => {
    const el = scrollRef.current
    if (el && el.scrollTop > 10) setShowScrollHint(false)
  }

  const handleApplyFilters = () => {
    onApplyFilters({
      type,
      field,
      noFees,
      country,
      duration,
      eligibility,
    })
    onClose()
  }

  const resetFields = () => {
    setCountry(null)
    setType({
      Production: false,
      Exhibition: false,
      Research: false,
    })
    setEligibility(null)
    setDuration(null)
    setNoFees(false)
    setField({
      'Multi-disciplinary': false,
      'Digital/New Media': false,
      Literature: false,
      'Music & Sound': false,
      'Performance Art': false,
      Architecture: false,
      'Cultural Heritage': false,
      'Visual Arts & Design': false,
      Curatorial: false,
    })

    onClear()
  }

  useEffect(() => {
    if (!isOpen) return

    const timeout = setTimeout(() => {
      const el = scrollRef.current
      if (!el) return

      const isScrollable = el.scrollHeight > el.clientHeight
      setShowScrollHint(isScrollable)

      el.addEventListener('scroll', handleScroll)
    }, 0)

    return () => {
      clearTimeout(timeout)
      const el = scrollRef.current
      if (el) el.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} header={undefined} variant={undefined}>
      <div className={styles.header}>
        <h2 className={styles.filtersHeader}>Filter by</h2>
      </div>
      <div className={styles.modalButtons}>
        <button className={styles.resetBtn} onClick={resetFields}>
          Reset
        </button>
        <button className={styles.confirmBtn} onClick={handleApplyFilters}>
          Search
        </button>
      </div>

      <div ref={scrollRef} className={styles.scrollContainer}>
        <div className={styles.container}>
          <div>
            <div className={styles.field}>
              <label className={styles.filterLabel} htmlFor="filter-location">
                Location
              </label>
              <select
                value={country || ''}
                onChange={(e) => setCountry(e.target.value || null)}
                id="filter-location"
                name="location"
                className={cx(styles.selectInput, !country && styles.unselected)}
              >
                <option value="">any country &nbsp;</option>
                {countryList.map((datum) => (
                  <option key={datum} value={datum}>
                    {datum}
                  </option>
                ))}
              </select>
            </div>

            <fieldset>
              <div className={styles.field}>
                <legend className={styles.filterLabel}>Type</legend>
                {typesList.map((val) => (
                  <label key={val} className={styles.checkbox}>
                    <input
                      type="checkbox"
                      value={val}
                      name="type"
                      checked={type[val] || false}
                      onChange={(event) =>
                        setType((prev) => ({
                          ...prev,
                          [val]: event.target.checked,
                        }))
                      }
                    />
                    <span>{val}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className={styles.field}>
              <label
                htmlFor={'filter-eligibility'}
                className={styles.filterLabel}
              >
                Eligibility
              </label>
              <select
                className={cx(
                  styles.selectInput,
                  !eligibility && styles.unselected
                )}
                id="filter-eligibility"
                name="Eligibility"
                value={eligibility || ''}
                onChange={(e) => setEligibility(e.target.value || null)}
              >
                <option value="">Select criteria &nbsp;</option>
                <option value="Individual">Individual</option>
                <option value="Collective">Collective</option>
                <option value="Individuals & Collectives">
                  Individuals & Collectives
                </option>
              </select>
            </div>

            <div className={styles.field}>
              <span className={styles.filterLabel}>Application Fee</span>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  value={String(noFees)}
                  name="No Fees"
                  checked={noFees}
                  onChange={(event) => setNoFees(event.target.checked)}
                  id="filter-fee"
                />
                <span>No Fees</span>
              </label>
            </div>
          </div>

          <div>
            <div className={styles.field}>
              <label htmlFor={'filter-duration'} className={styles.filterLabel}>
                Duration
              </label>
              <select
                className={cx(
                  styles.selectInput,
                  !duration && styles.unselected
                )}
                id="filter-duration"
                name="Duration"
                value={duration || ''}
                onChange={(e) => setDuration(e.target.value || null)}
              >
                <option value="">Select residency duration &nbsp;</option>
                <option value="Under 1 month">Under 1 month</option>
                <option value="Under 6 months">Under 6 months</option>
                <option value="6 months+">6 months+</option>
              </select>
            </div>

            <fieldset>
              <div className={styles.field}>
                <legend className={styles.filterLabel}>Field</legend>
                {[
                  'Multi-disciplinary',
                  'Digital/New Media',
                  'Literature',
                  'Music & Sound',
                  'Performance Art',
                  'Architecture',
                  'Cultural Heritage',
                  'Visual Arts & Design',
                  'Curatorial',
                ].map((val) => (
                  <label key={val} className={styles.checkbox}>
                    <input
                      type="checkbox"
                      value={val}
                      name="field"
                      checked={field[val] || false}
                      onChange={(event) =>
                        setField((prev) => ({
                          ...prev,
                          [val]: event.target.checked,
                        }))
                      }
                    />
                    <span>{val}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      {showScrollHint && <div className={styles.scrollHint}>↓</div>}
    </Modal>
  )
}

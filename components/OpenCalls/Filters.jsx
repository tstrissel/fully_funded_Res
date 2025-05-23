import styles from './Filters.module.css'
import Modal from '../Modal/Modal'
import { useEffect, useState, useRef } from 'react'
import cx from 'clsx'

export default function Filters({ onApplyFilters, onClear, isOpen, onClose, countryList, typesList }) {
  const [country, setCountry] = useState()
  const [type, setType] = useState({
    Production: false,
    Exhibition: false,
    Research: false,
  })
  const [eligibility, setEligibility] = useState()
  const [duration, setDuration] = useState()
  const [noFees, setNoFees] = useState(false)
  const [field, setField] = useState({
    Visual: false,
    Multidisciplinary: false,
    Curatorial: false,
    Sound: false,
    Literature: false,
    Performance: false,
    Dance: false,
  })

  const scrollRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (el.scrollTop > 10) setShowScrollHint(false);
  };

  // Uncomment to apply filters on each change:
  // useEffect(() => {
  //   handleApplyFilters()
  // }, [country, type, eligibility, duration, field, noFees])

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
    setCountry(null);
    setType({
      Production: false,
      Exhibition: false,
      Research: false,
    });
    setEligibility(null);
    setDuration(null);
    setNoFees(false);
    setField({
      Visual: false,
      Multidisciplinary: false,
      Curatorial: false,
      Sound: false,
      Literature: false,
      Performance: false,
      Dance: false,
    });

    onClear();
  }

  useEffect(() => {
    if (!isOpen) return;
  
    const timeout = setTimeout(() => {
      const el = scrollRef.current;
      if (!el) return;
  
      const isScrollable = el.scrollHeight > el.clientHeight;
      setShowScrollHint(isScrollable);
  
      el.addEventListener('scroll', handleScroll);
      console.log('[DEBUG] scrollHeight:', el.scrollHeight, 'clientHeight:', el.clientHeight);
    }, 0); // run after DOM paint
  
    return () => {
      clearTimeout(timeout);
      const el = scrollRef.current;
      el.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen]);
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
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
              onChange={(e) => setCountry(e.target.value)}
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
                    checked={type[val]}
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
            {/* <label htmlFor="Eligibility">Eligibility:</label> */}
            <select
              className={cx(
                styles.selectInput,
                !eligibility && styles.unselected
              )}
              id="filter-eligibility"
              name="Eligibility"
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
            >
              <option value="">Select criteria &nbsp;</option>
              <option value="Individual">Individual</option>
              <option value="Collective">Collective</option>
              <option value="Individuals & Collectives">Individuals & Collectives</option>
            </select>
          </div>

          <div className={styles.field} htmlFor={'filter-fee'}>
            <span className={styles.filterLabel}>Application Fee</span>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                value={noFees}
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
            {/* <label htmlFor="Duration">Duration:</label> */}
            <select
              className={cx(styles.selectInput, !duration && styles.unselected)}
              id="filter-duration"
              name="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
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
                'Curatorial'
              ].map((val) => (
                <label key={val} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    value={val}
                    name="field"
                    checked={field[val]}
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
      {showScrollHint && (
        <div className={styles.scrollHint}>↓</div>
      )}
    </Modal>
  )
}

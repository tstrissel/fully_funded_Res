import { useState, useEffect } from 'react'
import styles from './OpenCallsList.module.css'
import Filters from './Filters'
import OpenCallsItemNotion from './OpenCallsItemNotion'
import { sortCalls, filterCalls } from './listUtils'
import cx from 'clsx'

export default function GridComp({ calls = [], countriesList = [], typesList = [] }) {
  const [sortBy, setSortBy] = useState('createdAt')
  const [viewMode, setViewMode] = useState('cards')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [resultPopup, setResultPopup] = useState(false)
  // const [sortDirection, sortDirectionSet] = useState("ASC");
  const [filteredCalls, filteredCallsSet] = useState(
    sortCalls(calls, sortBy)
  )
  const [searchTerm, setSearchTerm] = useState('')

  const [appliedFilters, setAppliedFilters] = useState(0)

  const handleToggleViewMode = () =>
    setViewMode(viewMode === 'cards' ? 'list' : 'cards')

  const applySearchTerm = (newSearchTerm = '') => {
    setSearchTerm(newSearchTerm)

    if (newSearchTerm.trim() === '') {
      filteredCallsSet(calls)
    }

    filteredCallsSet(
      sortCalls(
        calls.filter((val) => {
          return val.title
            .toLowerCase()
            .includes(newSearchTerm.toLowerCase())
        }),
        sortBy
      )
    )
  }

  const clearSearch = () => {
    setSearchTerm('')
    filteredCallsSet(sortCalls(calls, sortBy))
  }

  const clearFilters = () => {
    setIsFiltersOpen(false)
    setAppliedFilters(0);
    filteredCallsSet(sortCalls(calls, sortBy))
  }

  const handleToggleSort = () => {
    const newSortBy = sortBy === 'createdAt' ? 'deadline' : 'createdAt'
    filteredCallsSet(sortCalls(filteredCalls, newSortBy))
    setSortBy(newSortBy)
  }

  const handleApplyFilters = (filters) => {
    clearSearch()

    const countAppliedFilters = () => {
      const type = Object.values(filters.type).some(Boolean)
      const field = Object.values(filters.field).some(Boolean)
      const fees = filters.noFees
      const country = !!filters.country
      const dur = !!filters.duration
      const elig = !!filters.eligibility
  
      return type + field + fees + country + dur + elig
    }

    setAppliedFilters(countAppliedFilters())

    // filter
    const filtered = filterCalls(calls, filters)

    // reapply sort and set
    filteredCallsSet(sortCalls(filtered, sortBy))

    setIsFiltersOpen(false)
  }

  return (
    <div>
      <div className={styles.searchOpt}>
        <div className={styles.searchMain}>
          <button className={styles.filterBtn} onClick={handleToggleViewMode}>
            {'View as:'}
            <span className={styles.filterBtnValue}>{viewMode}</span>
          </button>

          <button className={styles.filterBtn} onClick={handleToggleSort}>
            {'Sort by: '}
            <span className={styles.filterBtnValue}>
              {sortBy === 'deadline'
                ? 'Deadline approaching'
                : 'Recently added'}
            </span>
          </button>

          <button
            className={styles.filterBtn}
            onClick={() => setIsFiltersOpen(true)}
          >
            {'Filters: '}
            <span className={styles.filterBtnValue}>
              {appliedFilters > 0 ? appliedFilters : 'None'}
            </span>
          </button>
          <Filters
            isOpen={isFiltersOpen}
            onClose={() => setIsFiltersOpen(false)}
            className={styles.searchFilter}
            onApplyFilters={handleApplyFilters}
            onClear={clearFilters}
            countryList={countriesList}
            typesList={typesList}
          />
        </div>
      </div>

      {filteredCalls.length == 0 && (
        <h2 className={styles.noResult}>No Results</h2>
      )}

      <ul className={cx('grid-wrapper', viewMode === 'list' && styles.list)}>
        {filteredCalls.map((call, index) => {
          return (
            <div
              className={styles.item}
              key={call.id}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <OpenCallsItemNotion
                viewMode={viewMode}
                openCall={call}
              />
            </div>
          )
        })}
        {/* {filteredCalls.map((fellowship, index) => {
          return (
            <div
              className={styles.item}
              key={fellowship.sys.id}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <FellowshipItem
                viewMode={viewMode}
                fellowship={fellowship.fields}
              />
            </div>
          )
        })} */}
      </ul>
    </div>
  )
}

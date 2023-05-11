import { useState, useEffect } from 'react'
import styles from './FellowshipList.module.css'
import Link from 'next/link'
import { isEmpty } from 'lodash'
import Filters from './Filters'
import FellowshipItem from './FellowshipItem'
import FellowshipItemNotion from './FellowshipItemNotion'
import Image from 'next/image'
import Search from './Search'
import { sortFellowships, filterFellowships } from './listUtils'
import { ChevronDown } from '../icons'
import cx from 'clsx'

export default function GridComp({ fellowships = [], calls = [] }) {
  const [sortBy, setSortBy] = useState('createdAt')
  const [viewMode, setViewMode] = useState('cards')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [resultPopup, setResultPopup] = useState(false)
  // const [sortDirection, sortDirectionSet] = useState("ASC");
  const [filteredFellowships, filteredFellowshipsSet] = useState(
    sortFellowships(fellowships, sortBy)
  )
  const [searchTerm, setSearchTerm] = useState('')

  const [appliedFilters, setAppliedFilters] = useState(0)

  const handleToggleViewMode = () =>
    setViewMode(viewMode === 'cards' ? 'list' : 'cards')

  const applySearchTerm = (newSearchTerm = '') => {
    setSearchTerm(newSearchTerm)

    if (newSearchTerm.trim() === '') {
      filteredFellowshipsSet(fellowships)
    }

    filteredFellowshipsSet(
      sortFellowships(
        fellowships.filter((val) => {
          return val.fields.title
            .toLowerCase()
            .includes(newSearchTerm.toLowerCase())
        }),
        sortBy
      )
    )
  }

  const clearSearch = () => {
    setSearchTerm('')
    filteredFellowshipsSet(sortFellowships(fellowships, sortBy))
  }

  const clearFilters = () => {
    setIsFiltersOpen(false)
    filteredFellowshipsSet(sortFellowships(fellowships, sortBy))
  }

  const handleToggleSort = () => {
    const newSortBy = sortBy === 'createdAt' ? 'deadline' : 'createdAt'
    filteredFellowshipsSet(sortFellowships(filteredFellowships, newSortBy))
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
    const filtered = filterFellowships(fellowships, filters)
    // reapply sort and set
    filteredFellowshipsSet(sortFellowships(filtered, sortBy))

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
          />
        </div>

        <Search
          value={searchTerm}
          onApplySearch={applySearchTerm}
          onClearSearch={clearSearch}
        />
      </div>

      {filteredFellowships.length == 0 && (
        <h2 className={styles.noResult}>No Results</h2>
      )}

      <ul className={cx('grid-wrapper', viewMode === 'list' && styles.list)}>
        {calls.map((call, index) => {
          return (
            <div
              className={styles.item}
              key={call.id}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <FellowshipItemNotion
                viewMode={viewMode}
                fellowship={call.properties}
              />
            </div>
          )
        })}
        {/* {filteredFellowships.map((fellowship, index) => {
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

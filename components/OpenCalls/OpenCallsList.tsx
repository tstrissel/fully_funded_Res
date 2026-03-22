import { useState, useEffect } from 'react'
import styles from './OpenCallsList.module.css'
import Filters from './Filters'
import OpenCallsItemNotion from './OpenCallsItemNotion'
import { sortCalls, filterCalls, type FilterOptions } from './listUtils'
import cx from 'clsx'
import type { OpenCall } from '@lib/notion'

interface OpenCallsListProps {
  calls?: OpenCall[]
  countriesList?: string[]
  typesList?: string[]
}

export default function GridComp({
  calls = [],
  countriesList = [],
  typesList = [],
}: OpenCallsListProps) {
  const [sortBy, setSortBy] = useState<'createdAt' | 'deadline'>('createdAt')
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [filteredCalls, filteredCallsSet] = useState<OpenCall[]>(
    sortCalls(calls as any, sortBy) as OpenCall[]
  )
  const [searchTerm, setSearchTerm] = useState('')
  const [appliedFilters, setAppliedFilters] = useState(0)

  const handleToggleViewMode = () =>
    setViewMode(viewMode === 'cards' ? 'list' : 'cards')

  const applySearchTerm = (newSearchTerm: string = '') => {
    setSearchTerm(newSearchTerm)

    if (newSearchTerm.trim() === '') {
      filteredCallsSet(calls)
      return
    }

    filteredCallsSet(
      sortCalls(
        calls.filter((val) => {
          return val.title
            .toLowerCase()
            .includes(newSearchTerm.toLowerCase())
        }) as any,
        sortBy
      ) as OpenCall[]
    )
  }

  const clearSearch = () => {
    setSearchTerm('')
    filteredCallsSet(sortCalls(calls as any, sortBy) as OpenCall[])
  }

  const clearFilters = () => {
    setIsFiltersOpen(false)
    setAppliedFilters(0)
    filteredCallsSet(sortCalls(calls as any, sortBy) as OpenCall[])
  }

  const handleToggleSort = () => {
    const newSortBy: 'createdAt' | 'deadline' =
      sortBy === 'createdAt' ? 'deadline' : 'createdAt'
    filteredCallsSet(
      sortCalls(filteredCalls as any, newSortBy) as OpenCall[]
    )
    setSortBy(newSortBy)
  }

  const handleApplyFilters = (filters: FilterOptions) => {
    clearSearch()

    const countAppliedFilters = () => {
      const typeCount = Object.values(filters.type || {}).some(Boolean) ? 1 : 0
      const fieldCount = Object.values(filters.field || {}).some(Boolean)
        ? 1
        : 0
      const feesCount = filters.noFees ? 1 : 0
      const countryCount = !!filters.country ? 1 : 0
      const durationCount = !!filters.duration ? 1 : 0
      const eligibilityCount = !!filters.eligibility ? 1 : 0

      return typeCount + fieldCount + feesCount + countryCount + durationCount + eligibilityCount
    }

    setAppliedFilters(countAppliedFilters())

    const filtered = filterCalls(calls as any, filters)
    filteredCallsSet(sortCalls(filtered, sortBy) as OpenCall[])
    setIsFiltersOpen(false)
  }

  return (
    <div>
      <div className={styles.searchOpt}>
        <div className={styles.searchMain}>
          <button className={styles.filterBtn} onClick={handleToggleViewMode}>
            View as:
            <span className={styles.filterBtnValue}>{viewMode}</span>
          </button>

          <button className={styles.filterBtn} onClick={handleToggleSort}>
            Sort by:{' '}
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
            Filters:{' '}
            <span className={styles.filterBtnValue}>
              {appliedFilters > 0 ? appliedFilters : 'None'}
            </span>
          </button>
          <Filters
            isOpen={isFiltersOpen}
            onClose={() => setIsFiltersOpen(false)}
            onApplyFilters={handleApplyFilters}
            onClear={clearFilters}
            countryList={countriesList}
            typesList={typesList}
          />
        </div>
      </div>

      {filteredCalls.length === 0 && (
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
              <OpenCallsItemNotion viewMode={viewMode} openCall={call} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

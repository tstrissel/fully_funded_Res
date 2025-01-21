import Image from 'next/image'
import { useState } from 'react'
import { Search as SearchIcon } from '../icons'
import styles from './Search.module.css'

export default function Search({
  value: appliedSearchTerm,
  onApplySearch,
  onClearSearch,
}) {
  const [inputValue, setInputValue] = useState(appliedSearchTerm)

  const handleApplySearch = () => {
    onApplySearch(inputValue)
  }

  const handleClearSearch = () => {
    onClearSearch()
    setInputValue('')
  }

  return (
    <div>
      <div className={styles.searchText}>
        <input
          className={styles.searchBar}
          type="text"
          name="search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="search"
          role="search"
          placeholder="Search opportunities..."
          onKeyPress={(e) => e.key === 'Enter' && handleApplySearch()}
        />
        {!appliedSearchTerm ? (
          <button onClick={handleApplySearch} className={styles.searchBtn}>
            <SearchIcon></SearchIcon>
          </button>
        ) : (
          <button onClick={handleClearSearch} className={styles.clearBtn}>
            ×
          </button>
        )}
      </div>
    </div>
  )
}

import Image from 'next/image'
import { useState, ChangeEvent } from 'react'
import { Search as SearchIcon } from '../icons'
import styles from './Search.module.css'

interface SearchProps {
  value?: string
  onApplySearch: (term: string) => void
  onClearSearch: () => void
}

export default function Search({
  value: appliedSearchTerm = '',
  onApplySearch,
  onClearSearch,
}: SearchProps) {
  const [inputValue, setInputValue] = useState(appliedSearchTerm)

  const handleApplySearch = () => {
    onApplySearch(inputValue)
  }

  const handleClearSearch = () => {
    onClearSearch()
    setInputValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleApplySearch()
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <div className={styles.searchText}>
        <input
          className={styles.searchBar}
          type="text"
          name="search"
          value={inputValue}
          onChange={handleInputChange}
          id="search"
          role="search"
          placeholder="Search opportunities..."
          onKeyPress={handleKeyPress}
        />
        {!appliedSearchTerm ? (
          <button onClick={handleApplySearch} className={styles.searchBtn}>
            <SearchIcon />
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

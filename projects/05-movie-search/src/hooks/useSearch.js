import { useState } from 'react'

function useSearch() {
  const [query, setQuery] = useState('')

  const updateQuery = (value) => {
    setQuery(value)
  }

  return {
    query,
    updateQuery
  }
}

export default useSearch
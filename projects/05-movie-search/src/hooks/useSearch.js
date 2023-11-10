import { useEffect, useRef, useState } from 'react'

function useSearch() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const firstTimeRef = useRef(true)
  const updateQuery = (value) => {
    setQuery(value)
  }

  useEffect(() => {

    if (firstTimeRef.current) {
      firstTimeRef.current = false
      return
    }

    if (query === '') return setError('Debes ingresar un título válido')


    setError(null)
  }, [query])

  return {
    query,
    error,
    updateQuery
  }
}

export default useSearch
import { useEffect, useState } from 'react'
import { getFact } from '../services/fact'

function useFact () {
  const [fact, setFact] = useState()
  const [error, setError] = useState()
  const loadFact = () => {
    getFact()
      .then(fact => setFact(fact))
      .catch(e => {
        setError(e.message)
      })
  }

  useEffect(loadFact, [])

  return {
    fact,
    error,
    loadFact
  }
}

export default useFact

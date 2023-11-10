import { useCallback, useRef, useState } from "react"
import { searchMovies } from "../services/omdb/movies"

function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const lastSearch = useRef(search)
  const [loader, setLoader] = useState(false)

  const getMovies = useCallback(({ query }) => {

    if (query === lastSearch.current || query === '') return
    setLoader(true)
    searchMovies({ query })
      .then(setMovies)
      .finally(() => {
        lastSearch.current = query
        setLoader(false)
      })

  }, [])

  return {
    movies,
    isLoading: loader,
    getMovies
  }
}

export default useMovies
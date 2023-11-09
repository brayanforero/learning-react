import { OMDB_API_KEY, OMDB_API_URL } from "./constants"

export const searchMovies = async ({ query }) => {

  if (!query) return
  const res = await fetch(`${OMDB_API_URL}/?apikey=${OMDB_API_KEY}&s=${query}`)
  const data = await res.json()

  const { Search } = data


  const moviesFormatted = Search?.map(m => (
    {
      id: m.imdbID,
      title: m.Title,
      year: m.Year,
      poster: m.Poster
    }
  ))

  return moviesFormatted
}
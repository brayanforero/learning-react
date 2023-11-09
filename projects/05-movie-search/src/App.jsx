import debounce from 'just-debounce-it';
import { useCallback } from 'react';
import "./App.css";
import { MovieLoader, Movies } from "./components";
import { useSearch } from "./hooks";
import useMovies from "./hooks/useMovies";
function App() {
  const { query, updateQuery } = useSearch()
  const { movies, getMovies, isLoading } = useMovies({ search: query })

  const debounceGetMovies = useCallback(debounce((param) => getMovies({ query: param }), 500), [getMovies])

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ query })
  }

  const handleChange = (e) => {
    const { value } = e.target
    if (value.startsWith(' ')) return
    updateQuery(value)
    debounceGetMovies(value)
  }

  return (
    <>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name="query" autoComplete="off" type="text" placeholder="avengers, ballers...." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {
          !isLoading ? <Movies movies={movies} />
            : <MovieLoader items={4} />
        }
      </main>
    </>
  );
}




export default App;

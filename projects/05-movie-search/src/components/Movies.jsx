
const ListOfMovies = ({ movies }) => {
  return <section className="grid">
    {
      movies.map(m => (
        <article key={m.id}>
          <img loading="lazy" src={m.poster} alt={m.title} />
          <h3>{m.title}</h3>
          <p>{m.year}</p>
        </article>
      ))
    }
  </section>
}

const NoResults = () => <p>Sin resultados</p>

export function Movies({ movies = [] }) {
  const hasResult = movies.length > 0

  if (!hasResult) return <NoResults />

  return <ListOfMovies movies={movies} />
}


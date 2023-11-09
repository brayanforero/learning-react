function MovieLoader({ items = 3 }) {
  const fakeMovies = Array.from({ length: items }, (_, i) => `k:${i + 1}`)
  return (
    <div className="grid">
      {
        fakeMovies.map((i) => (
          <div key={i} className='movieLoader'>
            <span className='movieLoader-poster'></span>
            <span className='movieLoader-title'></span>
            <span className='movieLoader-year'></span>
          </div>
        ))
      }
    </div>
  )
}

export default MovieLoader
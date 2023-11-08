import useCatImage from './hooks/useCatImage'
import useFact from './hooks/useFact'

function App () {
  const { fact, error, loadFact } = useFact()
  const { image } = useCatImage({ fact })

  return (
    <main>
      <img src={image} alt={`Picture about fact cats for ${fact}`} />
      <section>
        <h1>Little Cats App</h1>
        <button onClick={loadFact} type='button'>Load new fact</button>
        <p>{fact || error}</p>
      </section>

    </main>
  )
}

export default App

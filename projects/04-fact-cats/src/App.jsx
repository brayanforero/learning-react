import useFact from './hooks/useFact'

function App () {
  const { fact, image } = useFact()

  return (
    <main>
      <img src={image} alt={`Picture about fact cats for ${fact}`} />
      <section>
        <h1>Little Cats App</h1>
        {
          fact && <p>{fact}</p>
        }
      </section>

    </main>
  )
}

export default App

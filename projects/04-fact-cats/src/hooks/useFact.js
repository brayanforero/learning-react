import { useEffect, useState } from 'react'
import { FACT_CAT_URL, IMAGE_CAT_URL } from '../constants'

function useFact () {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  useEffect(() => {
    fetch(FACT_CAT_URL)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3).join(' ')
    fetch(`${IMAGE_CAT_URL}/${threeFirstWord}`)
      .then(res => res.blob())
      .then(data => {
        const newImage = URL.createObjectURL(data)
        setImage(newImage)
      })
  }, [fact])
  return {
    fact,
    image
  }
}

export default useFact

import { useEffect, useState } from 'react'
import { IMAGE_CAT_URL } from '../constants'

function useCatImage ({ fact, width = 320, height = 480, fontSize = 20, color = 'orange' }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3).join(' ')
    fetch(`${IMAGE_CAT_URL}/cat/says/${threeFirstWord}?fontColor=${color}&fontSize=${fontSize}&width=${width}&height=${height}`)
      .then(res => res.blob())
      .then(data => {
        const url = URL.createObjectURL(data)
        setImage(url)
      })
  }, [fact])

  return { image }
}

export default useCatImage

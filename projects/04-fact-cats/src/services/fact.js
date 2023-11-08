import { FACT_CAT_URL } from '../constants'

export async function getFact () {
  const res = await fetch(FACT_CAT_URL)
  const data = await res.json()
  const { fact } = data

  return fact
}

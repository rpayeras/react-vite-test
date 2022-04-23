import { expect, it, describe } from 'vitest'
import { checkIsResponseOk, searchMovies } from './App'

describe('checkisresponse ok', () => {
  it('should return if response is ok', () => {
    const res = { Response: 'True' }

    expect(checkIsResponseOk(res)).toBe(true)
  })

  it('should return if response is ok', () => {
    const res = {}

    expect(checkIsResponseOk(res)).toBe(false)
  })
})

describe.only('searchMovies', async () => {
  const query = 'avengers'
  const movies = await searchMovies({ query })
  expect(Array.isArray(movies)).toBe(true)
  expect(movies[0].Title).toBeTypeOf('string')
})

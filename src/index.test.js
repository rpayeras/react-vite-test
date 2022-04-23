import { expect, it, describe } from 'vitest'
import { checkIsResponseOk } from './services/movies'

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

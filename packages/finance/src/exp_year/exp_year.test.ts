import { times } from '@johnallentech/generator'
import { exp_year } from './exp_year' // Assuming this is the correct import

test('exp_year() returns an expiration year', () => {
  times(1000, () => {
    const year = exp_year()
    expect(typeof year).toBe('string')
    const parsedYear = parseInt(year, 10)
    const curYear = new Date().getFullYear()
    expect(parsedYear).toBeGreaterThanOrEqual(curYear)
    expect(parsedYear).toBeLessThanOrEqual(curYear + 10)
  })
})

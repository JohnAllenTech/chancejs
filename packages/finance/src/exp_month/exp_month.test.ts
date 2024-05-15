import { times } from '@chancejs/generator'
import { exp_month } from './exp_month' // Assuming these are the correct imports

describe('Testing exp_month and exp_year functions', () => {
  it('exp_month() returns a numeric month with leading 0', () => {
    times(1000, () => {
      const month = exp_month()
      expect(typeof month).toEqual('string')
      expect(month.length).toBe(2)
    })
  })

  it('exp_month() will return a future month if requested', () => {
    times(1000, () => {
      const nowMonth = new Date().getMonth() + 1
      const expMonth = parseInt(exp_month({ future: true }), 10)
      if (nowMonth !== 12) {
        expect(expMonth).toBeGreaterThan(nowMonth)
      } else {
        expect(expMonth).toBeGreaterThanOrEqual(1)
        expect(expMonth).toBeLessThanOrEqual(12)
      }
    })
  })
})

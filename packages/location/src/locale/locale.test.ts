import { times } from '@chancejs/generator'
import { locale } from './locale'
import { locale_languages, locale_regions } from './constants'

describe('Testing locale function', () => {
  test('locale() returns a string', () => {
    expect(typeof locale()).toBe('string')
  })

  test('locale() returns a valid locale', () => {
    times(1000, () => {
      let result = locale()
      expect(locale_languages.includes(result)).toBe(true)
    })
  })

  test('locale() returns a region when specified', () => {
    times(1000, () => {
      let result = locale({ region: true })
      expect(locale_regions.includes(result)).toBe(true)
    })
  })
})

import { times } from '@johnallentech/generator'
import { color } from './color'
import { colorNames } from './constants'

describe('Testing color function', () => {
  it('returns what looks like a hex color', () => {
    times(1000, () => {
      let result = color({ format: 'hex' })
      expect(typeof result).toBe('string')
      expect(result.length).toBe(7)
      expect(result).toMatch(/^#[a-f0-9]{6}$/i)
    })
  })

  it('returns what looks like a grayscale hex color', () => {
    times(1000, () => {
      let result = color({ format: 'hex', grayscale: true })
      expect(typeof result).toBe('string')
      expect(result.length).toBe(7)
      expect(result).toMatch(/^#[a-f0-9]{6}$/i)
      expect(result.slice(1, 3)).toBe(result.slice(3, 5))
      expect(result.slice(1, 3)).toBe(result.slice(5, 7))
    })
  })

  it('returns a short hex color', () => {
    times(1000, () => {
      let result = color({ format: 'shorthex' })
      expect(typeof result).toBe('string')
      expect(result.length).toBe(4)
      expect(result).toMatch(/^#[a-f0-9]{3}$/i)
    })
  })

  it('returns what looks like a grayscale short hex color', () => {
    times(1000, () => {
      let result = color({ format: 'shorthex', grayscale: true })
      expect(typeof result).toBe('string')
      expect(result.length).toBe(4)
      expect(result.slice(1, 2)).toBe(result.slice(2, 3))
      expect(result.slice(1, 2)).toBe(result.slice(3, 4))
    })
  })

  it('returns what looks like an rgb color', () => {
    times(1000, () => {
      let result = color({ format: 'rgb' })
      expect(typeof result).toBe('string')
      let match = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/.exec(result)
      expect(match).not.toBeNull()
      expect(match?.length).toBe(4)
      expect(parseInt(match![1])).toBeGreaterThanOrEqual(0)
      expect(parseInt(match![1])).toBeLessThanOrEqual(255)
      expect(parseInt(match![2])).toBeGreaterThanOrEqual(0)
      expect(parseInt(match![2])).toBeLessThanOrEqual(255)
      expect(parseInt(match![3])).toBeGreaterThanOrEqual(0)
      expect(parseInt(match![3])).toBeLessThanOrEqual(255)
    })
  })

  it('returns what looks like a grayscale rgb color', () => {
    times(1000, () => {
      let result = color({ format: 'rgb', grayscale: true })
      expect(typeof result).toBe('string')
      let match = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/.exec(result)
      expect(match).not.toBeNull()
      expect(match?.length).toBe(4)
      expect(parseInt(match![1])).toBeGreaterThanOrEqual(0)
      expect(parseInt(match![1])).toBeLessThanOrEqual(255)
      expect(match![1]).toBe(match![2])
      expect(match![1]).toBe(match![3])
    })
  })

  it('returns what looks like an rgba color', () => {
    times(1000, () => {
      let result = color({ format: 'rgba' })
      expect(typeof result).toBe('string')
      let match = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),([01](?:\.\d+)?)\)/.exec(
        result
      )
      expect(match).not.toBeNull()
      expect(match!.length).toBe(5)
      expect(parseInt(match![1])).toBeGreaterThanOrEqual(0)
      expect(parseInt(match![1])).toBeLessThanOrEqual(255)
      expect(parseInt(match![2])).toBeGreaterThanOrEqual(0)
      expect(parseInt(match![2])).toBeLessThanOrEqual(255)
      expect(parseInt(match![3])).toBeGreaterThanOrEqual(0)
      expect(parseInt(match![3])).toBeLessThanOrEqual(255)
      expect(parseFloat(match![4])).toBeGreaterThanOrEqual(0)
      expect(parseFloat(match![4])).toBeLessThanOrEqual(1)
    })
  })

  it('returns what looks like a grayscale rgba color', () => {
    times(1000, () => {
      let result = color({ format: 'rgba', grayscale: true })
      expect(typeof result).toBe('string')
      let match = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),([01](?:\.\d+)?)\)/.exec(
        result
      )
      expect(match).not.toBeNull()
      expect(match!.length).toBe(5)
      expect(parseInt(match![1])).toBeGreaterThanOrEqual(0)
      expect(parseInt(match![1])).toBeLessThanOrEqual(255)
      expect(match![1]).toBe(match![2])
      expect(match![1]).toBe(match![3])
      expect(parseFloat(match![4])).toBeGreaterThanOrEqual(0)
      expect(parseFloat(match![4])).toBeLessThanOrEqual(1)
    })
  })

  it('0x color works', () => {
    times(1000, () => {
      let result = color({ format: '0x' })
      expect(typeof result).toBe('string')
      expect(result.length).toBe(8)
      expect(result).toMatch(/^0x[a-f0-9]{6}$/i)
    })
  })

  it('with name returns a valid color name', () => {
    times(1000, () => {
      let result = color({ format: 'name' })
      expect(typeof result).toBe('string')
      expect(colorNames.includes(result)).toBeTruthy()
    })
  })

  it('upper case returns upper cased color', () => {
    times(1000, () => {
      let result = color({ format: 'hex', casing: 'upper' })
      expect(typeof result).toBe('string')
      expect(result.length).toBe(7)
      for (let i = 1; i < 7; i++) {
        expect(result.charAt(i)).toBe(result.charAt(i).toUpperCase())
      }
    })
  })
})

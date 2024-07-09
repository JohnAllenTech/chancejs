import { times } from '@johnallentech/generator'
import { avatar } from './avatar' // Adjust the path as necessary
import { email } from '../email'

describe('Testing avatar function', () => {
  it('returns a legit avatar', () => {
    times(1000, () => {
      const result = avatar()
      expect(typeof result).toBe('string')
      expect(result.split('/').length).toBe(5)
    })
  })

  it('can take and respect a protocol', () => {
    const protocols: Array<'http' | 'https'> = ['http', 'https']
    times(500, () => {
      protocols.forEach(protocol => {
        const result = avatar({ protocol })
        expect(typeof result).toBe('string')
        expect(result.indexOf(protocol + ':')).toBe(0)
      })
    })
  })

  it('can take and respect email', () => {
    times(1000, () => {
      const result = avatar({ email: email() })
      expect(typeof result).toBe('string')
      expect(result.split('/').length).toBe(5)
    })
  })

  it('can take and respect a legit file extension', () => {
    const file_types: Array<'bmp' | 'gif' | 'jpg' | 'png'> = [
      'bmp',
      'gif',
      'jpg',
      'png',
    ]
    times(250, () => {
      file_types.forEach(file_type => {
        const result = avatar({ fileExtension: file_type })
        expect(typeof result).toBe('string')
        expect(result.includes('.' + file_type)).toBe(true)
      })
    })
  })

  it('can take and respect a legit size', () => {
    times(1000, (index: number) => {
      const result = avatar({ size: index + 1 })
      expect(typeof result).toBe('string')
      expect(result.includes('?s=' + (index + 1).toString())).toBe(true)
    })
  })

  it('can take and respect a rating', () => {
    const ratings: Array<'g' | 'pg' | 'r' | 'x'> = ['g', 'pg', 'r', 'x']
    times(250, () => {
      ratings.forEach(rating => {
        const result = avatar({ rating })
        expect(typeof result).toBe('string')
        expect(result.includes('?r=' + rating)).toBe(true)
      })
    })
  })

  it('can take just an email', () => {
    times(1000, () => {
      const result = avatar({ email: 'mail@victorquinn.com' })
      expect(typeof result).toBe('string')
      expect(result.includes('?d=')).toBe(false)
    })
  })

  it('can take and respect a fallback image', () => {
    const fallbacks: Array<
      '404' | 'mm' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'blank'
    > = [
      '404', // Return 404 if not found
      'mm', // Mystery man
      'identicon', // Geometric pattern based on hash
      'monsterid', // A generated monster icon
      'wavatar', // A generated face
      'retro', // 8-bit icon
      'blank', // A transparent png
    ]
    times(100, () => {
      fallbacks.forEach(fallback => {
        const result = avatar({ fallback })
        expect(typeof result).toBe('string')
        expect(result.includes('?d=' + fallback)).toBe(true)
      })
    })
  })
})

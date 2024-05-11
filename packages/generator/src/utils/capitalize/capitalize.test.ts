import { capitalize } from './capitalize'

describe('Testing capitalize function', () => {
  it('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toEqual('Hello')
    expect(capitalize('world')).toEqual('World')
    expect(capitalize('example')).toEqual('Example')
  })

  it('does not change the rest of the word', () => {
    expect(capitalize('Hello')).toEqual('Hello')
    expect(capitalize('World')).toEqual('World')
    expect(capitalize('Example')).toEqual('Example')
  })

  it('handles empty string', () => {
    expect(capitalize('')).toEqual('')
  })
})

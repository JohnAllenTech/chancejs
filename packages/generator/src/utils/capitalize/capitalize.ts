export const capitalize = (text: string) => {
  return text.length ? text[0]?.toUpperCase() + text.slice(1) : ''
}

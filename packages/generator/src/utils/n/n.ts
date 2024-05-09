export const n = <ReturnType, Args extends any[]>(
  fn: (...args: Args) => ReturnType,
  n: number = 1,
  ...params: Args
): ReturnType[] => {
  let resultArray: ReturnType[] = []

  n = Math.max(0, n)

  for (let i = 0; i < n; i++) {
    resultArray.push(fn(...params))
  }

  return resultArray
}

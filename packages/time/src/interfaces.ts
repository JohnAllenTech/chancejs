export interface TimeOptions {
  seed?: number
}

export interface TimeGeneratorFunction {
  /**
   * provides time based randomness.
   *
   * @param { TimeOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * time()
   */
  (options?: TimeOptions): string
}

export interface ITime {
  ampm: TimeGeneratorFunction
  date: TimeGeneratorFunction
  hour: TimeGeneratorFunction
  millisecond: TimeGeneratorFunction
  minute: TimeGeneratorFunction
  month: TimeGeneratorFunction
  timestamp: TimeGeneratorFunction
  timezone: TimeGeneratorFunction
  weekday: TimeGeneratorFunction
  year: TimeGeneratorFunction
}

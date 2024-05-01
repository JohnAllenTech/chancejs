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
  function1: TimeGeneratorFunction
  function2: TimeGeneratorFunction
  function3: TimeGeneratorFunction
}

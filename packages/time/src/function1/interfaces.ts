import { TimeOptions } from '../interfaces'

export interface Function1Options extends TimeOptions {
  sampleOption: string
}

export interface Function1GeneratorFunction {
  /**
   * Returns a random function1.
   *
   * @param { Function1Options} [options={}]
   * @return { number }
   * @example
   * // returns string
   * function1()
   */
  (options?: Function1Options): string
}

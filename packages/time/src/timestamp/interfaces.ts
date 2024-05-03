import { TimeOptions } from '../interfaces'

export interface TimestampOptions extends TimeOptions {}

export interface TimestampGeneratorFunction {
  /**
   * Returns a random timestamp.
   *
   * @param { TimestampOptions} [options={}]
   * @return { number }
   * @example
   * // returns number
   * timestamp()
   */
  (options?: TimestampOptions): number
}

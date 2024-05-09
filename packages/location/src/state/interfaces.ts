import { LocationOptions } from '../interfaces'
import { states } from './constants'

export interface RawState {
  name: string
  abbreviation: string
}

export interface StateOptions extends LocationOptions {
  raw?: boolean
  full?: boolean
  us_states_and_dc?: boolean
  armed_forces?: boolean
  territories?: boolean
  country?: keyof typeof states
}

export interface StateGeneratorFunction {
  /**
   * Returns a random state.
   *
   * @param { StateOptions} [options={}]
   * @return { StateReturnType }
   * @example
   * // returns string
   * state()
   */
  <O extends StateOptions>(options?: O): StateReturnType<O>
}

export type StateReturnType<O extends StateOptions> = O['raw'] extends true
  ? RawState
  : string

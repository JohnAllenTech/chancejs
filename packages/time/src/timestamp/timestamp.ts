import { Time } from '../generator'
import { TimestampGeneratorFunction } from './interfaces'
import { TimestampOptions } from './interfaces'

export const timestamp: TimestampGeneratorFunction = (
  options?: TimestampOptions
) => {
  const time = new Time({ seed: options?.seed })
  return time.timestamp(options)
}

import { Generator, GeneratorOptions } from '@chancejs/generator'
import { IntegerGenerator } from '@chancejs/integer'
import { FloatingOptionsException } from './exceptions'
import { FloatingOptions, IFloatingGenerator } from './interfaces'

export class FloatingGenerator extends Generator implements IFloatingGenerator {
  private integerGenerator: IntegerGenerator
  constructor(options: GeneratorOptions) {
    super(options)
    this.integerGenerator = new IntegerGenerator(options)
  }

  floating(options?: FloatingOptions): number {
    if (
      typeof options?.fixed !== 'undefined' &&
      typeof options?.precision !== 'undefined'
    ) {
      throw new FloatingOptionsException(
        'Chance: Cannot specify both fixed and precision.'
      )
    }

    const fixed = Math.pow(10, options?.fixed || 4)

    const max =
      (options?.max !== undefined ? options.max : Number.MAX_SAFE_INTEGER) /
      fixed
    const min = options?.min !== undefined ? options.min : -max / 10

    if (
      options?.min &&
      options?.fixed &&
      options?.min < -Number.MAX_SAFE_INTEGER
    ) {
      throw new FloatingOptionsException(
        `Chance: Min specified is out of range with fixed. Min should be, at least, ${-Number.MAX_SAFE_INTEGER}.`
      )
    }

    if (
      options?.max &&
      options?.fixed &&
      options?.max > Number.MAX_SAFE_INTEGER
    ) {
      throw new FloatingOptionsException(
        `Chance: Max specified is out of range with fixed. Max should be, at most, ${Number.MAX_SAFE_INTEGER}.`
      )
    }

    const num = this.integerGenerator.integer({
      min: min * fixed,
      max: (options?.max || max) * fixed,
    })
    const num_fixed = (num / fixed).toFixed(options?.fixed)

    return parseFloat(num_fixed)
  }
}

import { Generator, GeneratorOptions } from '@chancejs/generator'
import { ITime, TimeOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { IntegerGenerator } from '@chancejs/integer'
import { Picker } from '@chancejs/pick'

import { DateOptions } from './date/interfaces'
import { months } from './month/constants'
import { MonthOptions, MonthReturnType, RawMonth } from './month/interfaces'
import { MinuteOptions } from './minute/interfaces'

export class Time extends Generator implements ITime {
  private naturalGenerator: NaturalGenerator
  private integerGenerator: IntegerGenerator
  private picker: Picker

  constructor(options: GeneratorOptions) {
    super(options)
    this.naturalGenerator = new NaturalGenerator(options)
    this.integerGenerator = new IntegerGenerator(options)
    this.picker = new Picker(options)
  }

  public ampm(options?: TimeOptions): string {
    return 'string'
  }

  public date(options?: DateOptions): string | Date {
    // let date_string, date
    // const dateOptions = {
    //   year: options?.year,
    //   month: options?.month,
    //   day: options?.day,
    //   hour: options?.hour,
    //   minute: options?.minute,
    //   second: options?.second,
    //   millisecond: options?.millisecond,
    // }

    // // If interval is specified we ignore preset
    // if (options && (options?.min || options?.max)) {
    //   const min = options?.min?.getTime() ?? 1
    //   // 100,000,000 days measured relative to midnight at the beginning of 01 January, 1970 UTC. http://es5.github.io/#x15.9.1.1
    //   const max = options?.max?.getTime() ?? 8640000000000000

    //   date = new Date(this.integerGenerator.integer({ min: min, max: max }))

    //   date = new Date(this.integerGenerator.integer({ min: min, max: max }))
    // } else {
    //   let m = this.month({ raw: true })
    //   let daysInMonth = m.days

    //   if (options && options.month) {
    //     // Mod 12 to allow months outside range of 0-11 (not encouraged, but also not prevented).
    //     daysInMonth = months[((options.month % 12) + 12) % 12].days
    //   }

    //   date = new Date(
    //     parseInt(this.year(), 10),
    //     m.numeric - 1,
    //     this.naturalGenerator.natural({ min: 1, max: daysInMonth }),
    //     this.hour({ twentyfour: true }),
    //     this.minute(),
    //     this.second(),
    //     this.millisecond()
    //   )
    // }

    // if (!options?.american) {
    //   // Adding 1 to the month is necessary because Date() 0-indexes
    //   // months but not day for some odd reason.
    //   date_string =
    //     date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    // } else {
    //   date_string =
    //     date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    // }

    // return options?.string ? date_string : date
    return ''
  }

  public hammertime(options?: TimeOptions): string {
    return 'string'
  }
  public hour(options?: TimeOptions): string {
    return 'string'
  }
  public minute(options?: MinuteOptions): number {
    const min = options?.min ?? 0
    const max = options?.max ?? 59
    testRange(min < 0, 'Chance: Min cannot be less than 0.')
    testRange(max > 59, 'Chance: Max cannot be greater than 59.')
    testRange(min > max, 'Chance: Min cannot be greater than Max.')
    return this.naturalGenerator.natural({ min, max })
  }
  public second(): number {
    return this.naturalGenerator.natural({ min: 0, max: 59 })
  }
  public millisecond(options?: TimeOptions): string {
    return 'string'
  }

  public month<O extends MonthOptions>(options?: O) {
    const min = options?.min ?? 1
    const max = options?.max ?? 12

    testRange(min < 1, 'Chance: Min cannot be less than 1.')
    testRange(max > 12, 'Chance: Max cannot be greater than 12.')
    testRange(min > max, 'Chance: Min cannot be greater than Max.')

    const month = this.picker.pickOne(months.slice(min - 1, max))
    const m = options?.raw ? month : month.name
    return m as MonthReturnType<O>
  }
  public timestamp(options?: TimeOptions): string {
    return 'string'
  }
  public timezone(options?: TimeOptions): string {
    return 'string'
  }
  public weekday(options?: TimeOptions): string {
    return 'string'
  }
  public year(options?: TimeOptions): string {
    return 'string'
  }
}

function testRange(test: boolean, errorMessage: string | undefined) {
  if (test) {
    throw new RangeError(errorMessage)
  }
}

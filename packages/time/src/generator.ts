import { Generator, GeneratorOptions } from '@chancejs/generator'
import { ITime, TimeOptions } from './interfaces'
import { NaturalGenerator } from '@chancejs/natural'
import { IntegerGenerator } from '@chancejs/integer'
import { Picker } from '@chancejs/pick'

import { DateOptions, DateReturnType } from './date/interfaces'
import { months } from './month/constants'
import { MonthOptions, MonthReturnType, RawMonth } from './month/interfaces'
import { MinuteOptions } from './minute/interfaces'
import { MillisecondOptions } from './millisecond/interfaces'
import { HourOptions } from './hour/interfaces'
import { WeekdayOptions } from './weekday/interfaces'
import { days } from './weekday/constants'
import { timezones } from './timezone/constants'
import { Timezone } from './timezone/interfaces'
import { YearOptions } from './year/interfaces'

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

  public ampm(_options?: TimeOptions): string {
    return this.picker.pickOne(['am', 'pm'])
  }

  public date<O extends DateOptions>(options?: O) {
    let date_string
    let date

    if (options && (options.min || options.max)) {
      const min = options.min?.getTime() ?? 1
      // 100,000,000 days measured relative to midnight at the beginning of 01 January, 1970 UTC. http://es5.github.io/#x15.9.1.1
      const max = options.max?.getTime() ?? 8640000000000000

      date = new Date(this.integerGenerator.integer({ min, max }))
    } else {
      const monthData = this.month({ raw: true })
      const daysInMonth = options?.month
        ? // Mod 12 to allow months outside range of 0-11 (not encouraged, but also not prevented).
          months[((options.month % 12) + 12) % 12].days
        : monthData.days

      const year = options?.year ?? parseInt(this.year(), 10)
      const month = options?.month ?? parseInt(monthData.numeric)
      const day =
        options?.day ??
        this.naturalGenerator.natural({ min: 1, max: daysInMonth })
      const hour = options?.hour ?? this.hour({ twentyfour: true })
      const minute = options?.minute ?? this.minute()
      const second = options?.second ?? this.second()
      const millisecond = options?.millisecond ?? this.millisecond()

      date = new Date(year, month, day, hour, minute, second, millisecond)
    }

    const monthIndex = date.getMonth() + 1
    const dayIndex = date.getDate()
    const yearIndex = date.getFullYear()

    date_string = options?.american
      ? `${monthIndex}/${dayIndex}/${yearIndex}`
      : `${dayIndex}/${monthIndex}/${yearIndex}`

    const returnDate = options?.string ? date_string : date

    return returnDate as DateReturnType<O>
  }

  public hammertime(options?: TimeOptions): string {
    return 'string'
  }
  public hour(options?: HourOptions): number {
    const min = options?.min ? options.min : options?.twentyfour ? 0 : 1
    const max = options?.max ? options.max : options?.twentyfour ? 23 : 12

    testRange(min < 0, 'Chance: Min cannot be less than 0.')
    testRange(min > max, 'Chance: Min cannot be greater than Max.')
    testRange(
      !!options?.twentyfour && max > 23,
      'Chance: Max cannot be greater than 23 for twentyfour option.'
    )
    testRange(
      !options?.twentyfour && max > 12,
      'Chance: Max cannot be greater than 12.'
    )

    return this.naturalGenerator.natural({ min, max })
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
  public millisecond(_options?: MillisecondOptions): number {
    return this.naturalGenerator.natural({ max: 999 })
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
  public timestamp(_options?: TimeOptions): number {
    return this.naturalGenerator.natural({
      min: 1,
      max: new Date().getTime() / 1000,
    })
  }
  public timezone(_options?: TimeOptions): Timezone {
    return this.picker.pickOne(timezones)
  }
  public weekday(options?: WeekdayOptions): string {
    const daysToSelectFrom = options?.weekday_only ? days.slice(0, 4) : days
    return this.picker.pickOne(daysToSelectFrom)
  }
  public year(options?: YearOptions): string {
    const min = options?.min ?? new Date().getFullYear()
    return this.naturalGenerator
      .natural({
        min: min,
        max: options?.max ?? min + 100,
      })
      .toString()
  }
}

function testRange(test: boolean, errorMessage: string | undefined) {
  if (test) {
    throw new RangeError(errorMessage)
  }
}

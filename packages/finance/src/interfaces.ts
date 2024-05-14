export interface FinanceOptions {
  seed?: number
}

export interface FinanceGeneratorFunction {
  /**
   * provides finance related randomness.
   *
   * @param { FinanceOptions} [options={}]
   * @return { IFinance }
   * @example
   * // returns finance object
   * finance()
   */
  (options?: FinanceOptions): string
}

export interface IFinance {
  cc: FinanceGeneratorFunction
  cc_type: FinanceGeneratorFunction
  currency: FinanceGeneratorFunction
  currency_pair: FinanceGeneratorFunction
  dollar: FinanceGeneratorFunction
  euro: FinanceGeneratorFunction
  exp: FinanceGeneratorFunction
  exp_month: FinanceGeneratorFunction
  exp_year: FinanceGeneratorFunction
}

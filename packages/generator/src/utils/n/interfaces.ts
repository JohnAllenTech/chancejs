export interface NGeneratorFunction {
  /**
   * Returns a random n.
   *
   * @param { NOptions} [options={}]
   * @return { Array&lt;any&gt; }
   * @example
   * // returns Array&lt;any&gt;
   * n()
   */
  (fn: () => any, n?: number): Array<any>
}

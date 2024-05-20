import { CompanyGeneratorFunction } from './company'
import { DomainGeneratorFunction } from './domain'
import { EmailGeneratorFunction } from './email'
import { PortGeneratorFunction } from './port'
import { ProfessionGeneratorFunction } from './profession'
import { TldGeneratorFunction } from './tld'
import { TwitterGeneratorFunction } from './twitter'

export interface WebOptions {
  seed?: number
}

export interface WebGeneratorFunction {
  /**
   * provides web based randomness.
   *
   * @param { WebOptions} [options={}]
   * @return { string }
   * @example
   * // returns string
   * web()
   */
  (options?: WebOptions): string
}

export interface IWeb {
  avatar: WebGeneratorFunction
  color: WebGeneratorFunction
  company: CompanyGeneratorFunction
  domain: DomainGeneratorFunction
  email: EmailGeneratorFunction
  fbid: WebGeneratorFunction
  google_analytics: WebGeneratorFunction
  hashtag: WebGeneratorFunction
  ip: WebGeneratorFunction
  ipv6: WebGeneratorFunction
  klout: WebGeneratorFunction
  profession: ProfessionGeneratorFunction
  tld: TldGeneratorFunction
  twitter: TwitterGeneratorFunction
  loremPicsum: WebGeneratorFunction
  port: PortGeneratorFunction
  semvar: WebGeneratorFunction
  url: WebGeneratorFunction
}

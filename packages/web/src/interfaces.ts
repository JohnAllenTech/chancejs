import { CompanyGeneratorFunction } from './company'
import { DomainGeneratorFunction } from './domain'
import { EmailGeneratorFunction } from './email'
import { IpGeneratorFunction } from './ip'
import { Ipv6GeneratorFunction } from './ipv6'
import { PortGeneratorFunction } from './port'
import { ProfessionGeneratorFunction } from './profession'
import { TldGeneratorFunction } from './tld'
import { TwitterGeneratorFunction } from './twitter'
import { UrlGeneratorFunction } from './url'

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
  ip: IpGeneratorFunction
  ipv6: Ipv6GeneratorFunction
  klout: () => number
  profession: ProfessionGeneratorFunction
  tld: TldGeneratorFunction
  twitter: TwitterGeneratorFunction
  loremPicsum: WebGeneratorFunction
  port: PortGeneratorFunction
  semvar: WebGeneratorFunction
  url: UrlGeneratorFunction
}

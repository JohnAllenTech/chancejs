import { AvatarGeneratorFunction } from './avatar'
import { CompanyGeneratorFunction } from './company'
import { DomainGeneratorFunction } from './domain'
import { EmailGeneratorFunction } from './email'
import { GoogleAnalyticsGeneratorFunction } from './google_analytics'
import { HashtagGeneratorFunction } from './hashtag'
import { IpGeneratorFunction } from './ip'
import { Ipv6GeneratorFunction } from './ipv6'
import { LoremPicsumGeneratorFunction } from './loremPicsum'
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
  avatar: AvatarGeneratorFunction
  color: WebGeneratorFunction
  company: CompanyGeneratorFunction
  domain: DomainGeneratorFunction
  email: EmailGeneratorFunction
  fbid: WebGeneratorFunction
  google_analytics: GoogleAnalyticsGeneratorFunction
  hashtag: HashtagGeneratorFunction
  ip: IpGeneratorFunction
  ipv6: Ipv6GeneratorFunction
  klout: () => number
  profession: ProfessionGeneratorFunction
  tld: TldGeneratorFunction
  twitter: TwitterGeneratorFunction
  loremPicsum: LoremPicsumGeneratorFunction
  port: PortGeneratorFunction
  semvar: WebGeneratorFunction
  url: UrlGeneratorFunction
}

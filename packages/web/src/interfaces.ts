import { AvatarGeneratorFunction } from './avatar'
import { ColorGeneratorFunction } from './color'
import { CompanyGeneratorFunction } from './company'
import { DomainGeneratorFunction } from './domain'
import { EmailGeneratorFunction } from './email'
import { FbidGeneratorFunction } from './fbid'
import { GoogleAnalyticsGeneratorFunction } from './google_analytics'
import { HashtagGeneratorFunction } from './hashtag'
import { IpGeneratorFunction } from './ip'
import { Ipv6GeneratorFunction } from './ipv6'
import { LoremPicsumGeneratorFunction } from './loremPicsum'
import { PortGeneratorFunction } from './port'
import { ProfessionGeneratorFunction } from './profession'
import { SemverGeneratorFunction } from './semver'
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
  color: ColorGeneratorFunction
  company: CompanyGeneratorFunction
  domain: DomainGeneratorFunction
  email: EmailGeneratorFunction
  fbid: FbidGeneratorFunction
  google_analytics: GoogleAnalyticsGeneratorFunction
  hashtag: HashtagGeneratorFunction
  ip: IpGeneratorFunction
  ipv6: Ipv6GeneratorFunction
  // didnt fully implement this correct as I suspect its dead code
  klout: () => number
  profession: ProfessionGeneratorFunction
  tld: TldGeneratorFunction
  twitter: TwitterGeneratorFunction
  loremPicsum: LoremPicsumGeneratorFunction
  port: PortGeneratorFunction
  semver: SemverGeneratorFunction
  url: UrlGeneratorFunction
}

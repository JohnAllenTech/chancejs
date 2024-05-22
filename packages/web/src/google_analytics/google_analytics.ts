import { Web } from '../generator'
import { GoogleAnalyticsGeneratorFunction } from './interfaces'
import { GoogleAnalyticsOptions } from './interfaces'

export const google_analytics: GoogleAnalyticsGeneratorFunction = (
  options?: GoogleAnalyticsOptions
) => {
  const web = new Web({ seed: options?.seed })
  return web.google_analytics(options)
}

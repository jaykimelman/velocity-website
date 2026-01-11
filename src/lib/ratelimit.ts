import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Create a new ratelimiter that allows 5 requests per hour
// Only initialize if credentials are available (not during build)
const hasRedisCredentials =
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  process.env.UPSTASH_REDIS_REST_URL.startsWith('https')

export const ratelimit = hasRedisCredentials
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, '1 h'),
      analytics: true,
      prefix: '@upstash/ratelimit',
    })
  : null

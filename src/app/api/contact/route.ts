import { NextRequest, NextResponse } from 'next/server'
import { ratelimit } from '@/lib/ratelimit'
import { submitToHubSpot } from '@/lib/hubspot'
import type { ContactFormData } from '@/types/hubspot'

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown'

    // Check rate limit (if configured)
    if (ratelimit) {
      const { success, limit, remaining, reset } = await ratelimit.limit(ip)

      if (!success) {
        return NextResponse.json(
          {
            success: false,
            message: `Rate limit exceeded. You can submit ${limit} forms per hour. Please try again in ${Math.ceil((reset - Date.now()) / 1000 / 60)} minutes.`,
          },
          { status: 429 }
        )
      }
    }

    // Parse and validate request body
    const body: ContactFormData = await request.json()

    if (!body.email || !body.name || !body.company) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: email, name, and company are required',
        },
        { status: 400 }
      )
    }

    // Submit to HubSpot
    await submitToHubSpot(body)

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred while submitting the form',
      },
      { status: 500 }
    )
  }
}

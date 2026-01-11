# Integration Specifications: Velocity Inventory Solutions Website

## Document Purpose
Technical specifications for all third-party integrations, APIs, and external services used in the Velocity Inventory Solutions website.

**Created:** January 10, 2026  
**Last Updated:** January 10, 2026  
**Project Phase:** Phase 3 (Integrations)

---

## Environment Variables

### Required Environment Variables

All sensitive credentials must be stored in environment variables, never committed to git.

#### Development (.env.local)
```bash
# HubSpot Integration
HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_FORM_GUID=your_form_guid
HUBSPOT_API_KEY=your_api_key
NEXT_PUBLIC_HUBSPOT_REGION=na1

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics & Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token

# Optional: Feature Flags
NEXT_PUBLIC_ENABLE_EXIT_POPUP=false
NEXT_PUBLIC_ENABLE_LIVE_CHAT=false
```

#### Production (Vercel Dashboard)
Same variables as development, but with production values:
- `NEXT_PUBLIC_SITE_URL=https://velocityinventorysolutions.com`
- Production HubSpot Portal/Form IDs
- Production GTM/GA4 IDs
- Production Redis credentials

---

## HubSpot Integration

### Overview
HubSpot serves as the central CRM and marketing automation platform for lead capture, nurturing, and sales pipeline management.

### Components
1. **Contact Form Integration** - Submissions create/update contacts
2. **Page Tracking** - Visitor behavior tracking
3. **Email Marketing** - Automated nurture sequences
4. **Lead Scoring** - Qualification workflows

---

### 1. HubSpot Contact Form Integration

#### Purpose
Capture lead information from website contact form and create/update contacts in HubSpot CRM.

#### Setup Steps

**A. Get HubSpot Credentials**

1. **Portal ID:**
   - Login to HubSpot
   - Settings (gear icon) → Account Setup → Account Defaults
   - Copy "Hub ID" (8-digit number)

2. **Form GUID:**
   - Marketing → Lead Capture → Forms
   - Create new form: "Velocity Website Contact Form"
   - Fields: Email, First Name, Last Name, Company, Phone
   - Copy Form ID from form settings (format: `abc123-def456-ghi789`)

3. **API Key (Private App Token):**
   - Settings → Integrations → Private Apps
   - Create new private app: "Velocity Website"
   - Scopes: `crm.objects.contacts.write`, `crm.objects.contacts.read`
   - Generate token (format: `pat-na1-xxxxx-yyyy-zzzz`)

**B. Add to Environment Variables**
```bash
HUBSPOT_PORTAL_ID=12345678
HUBSPOT_FORM_GUID=abc123-def456-ghi789
HUBSPOT_API_KEY=pat-na1-xxxxx-yyyy-zzzz
NEXT_PUBLIC_HUBSPOT_REGION=na1
```

---

#### API Implementation

**Endpoint:** `/api/contact`  
**Method:** POST  
**Rate Limit:** 5 submissions per hour per IP address

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Smith",
  "company": "Example Corp",
  "phone": "555-123-4567" // optional
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you! We'll be in touch soon."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Unable to submit form. Please try again."
}
```

---

#### HubSpot API Calls

**Create/Update Contact:**
```typescript
// Using HubSpot Forms API
POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}

Headers:
  Content-Type: application/json

Body:
{
  "fields": [
    { "name": "email", "value": "user@example.com" },
    { "name": "firstname", "value": "John" },
    { "name": "lastname", "value": "Smith" },
    { "name": "company", "value": "Example Corp" },
    { "name": "phone", "value": "555-123-4567" }
  ],
  "context": {
    "pageUri": "https://velocityinventorysolutions.com",
    "pageName": "Contact Form"
  }
}
```

---

#### Error Handling

**Rate Limit Exceeded (429):**
- User sees: "Too many submission attempts. Please try again in an hour."
- Log: Rate limit hit for IP address
- Action: Suggest using calendly link instead

**HubSpot API Error (400/500):**
- User sees: "Unable to submit form. Please try again or email us directly."
- Log: Full error details to server logs
- Fallback: Display email address for direct contact

**Network Error:**
- User sees: "Connection error. Please check your internet and try again."
- Action: Client-side retry with exponential backoff (3 attempts max)

---

### 2. HubSpot Page Tracking

#### Purpose
Track visitor page views, session duration, and behavior to attribute leads to traffic sources and understand engagement.

#### Implementation

**Component:** `src/components/analytics/HubSpotTracking.tsx`

**Tracking Script:**
```typescript
<Script
  id="hs-script-loader"
  strategy="afterInteractive"
  src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
/>
```

**Placement:** Add to `src/app/layout.tsx` (loads on all pages)

---

#### Tracked Events
- Page views (automatic)
- Form submissions (automatic via HubSpot Forms API)
- CTA clicks (custom events)
- Discovery call bookings (custom events)
- Lead magnet downloads (custom events)

**Custom Event Tracking:**
```typescript
// Track CTA click
if (typeof window !== 'undefined' && (window as any)._hsq) {
  (window as any)._hsq.push(['trackCustomEvent', {
    id: 'cta_click',
    value: 'Get Started Button'
  }]);
}
```

---

#### Privacy Compliance
- Cookie consent banner (Phase 4)
- Respects Do Not Track browser settings
- Privacy policy link in footer
- GDPR-compliant data handling

---

### 3. HubSpot Email Marketing (Phase 5)

#### Purpose
Automated email nurture sequences for leads not ready to book discovery call.

#### Workflows (To Be Built)

**Workflow 1: New Lead Nurture**
- Trigger: Contact form submission
- Delay: 2 days
- Email 1: "Thanks for reaching out" + case study link
- Delay: 3 days
- Email 2: "Common inventory challenges" + blog post
- Delay: 4 days
- Email 3: "Ready to talk?" + calendly link

**Workflow 2: Lead Magnet Follow-Up**
- Trigger: Downloads Inventory Health Check
- Delay: 1 day
- Email 1: "How did your inventory check out?" + offer discovery call
- Delay: 5 days
- Email 2: "3 ways to improve inventory accuracy" + blog content
- Delay: 7 days
- Email 3: "See how we helped [Client]" + case study

**Workflow 3: Discovery Call No-Show**
- Trigger: Booked but didn't attend call
- Delay: 1 hour
- Email: "Sorry we missed you" + reschedule link

---

## Google Tag Manager (GTM)

### Overview
Container for all tracking scripts and pixels. Allows adding new tracking without code changes.

### Setup Steps

**1. Create GTM Account**
- Go to: https://tagmanager.google.com/
- Create account: "Velocity Inventory Solutions"
- Container name: "velocityinventorysolutions.com"
- Target platform: Web
- Copy Container ID (format: `GTM-XXXXXX`)

**2. Add to Environment Variables**
```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
```

**3. Install GTM Code**

**Component:** Implement in `src/app/layout.tsx`

**Head Section:**
```html
<script
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
  }}
/>
```

**Body Section (noscript fallback):**
```html
<noscript>
  <iframe
    src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>
```

---

### GTM Configuration

#### Tags to Add in GTM

**Tag 1: Google Analytics 4 Configuration**
- Tag Type: Google Analytics: GA4 Configuration
- Measurement ID: `G-XXXXXXXXXX` (from GA4 property)
- Trigger: All Pages

**Tag 2: Contact Form Submission**
- Tag Type: Google Analytics: GA4 Event
- Event Name: `form_submission`
- Parameters:
  - `form_name`: "Contact Form"
  - `form_destination`: "HubSpot"
- Trigger: Custom Event `formSubmit`

**Tag 3: CTA Click Tracking**
- Tag Type: Google Analytics: GA4 Event
- Event Name: `cta_click`
- Parameters:
  - `cta_text`: {{Click Text}}
  - `cta_url`: {{Click URL}}
- Trigger: Click - All Elements (filter for buttons/CTAs)

**Tag 4: Discovery Call Booking**
- Tag Type: Google Analytics: GA4 Event
- Event Name: `booking_started`
- Parameters:
  - `booking_type`: "Discovery Call"
- Trigger: Custom Event `bookingStarted`

**Tag 5: Lead Magnet Download**
- Tag Type: Google Analytics: GA4 Event
- Event Name: `lead_magnet_download`
- Parameters:
  - `magnet_name`: "Inventory Health Check"
- Trigger: Custom Event `leadMagnetDownload`

---

#### GTM Triggers

**Trigger 1: Form Submit**
- Type: Custom Event
- Event name: `formSubmit`
- Fires when: Form submission successful

**Trigger 2: CTA Clicks**
- Type: Click - All Elements
- Fires on: Some Clicks
- Click Text contains: "Get Started" OR "Book" OR "Download"

**Trigger 3: Outbound Links**
- Type: Click - Just Links
- Fires on: Some Link Clicks
- Page Hostname does not equal: velocityinventorysolutions.com

---

## Google Analytics 4 (GA4)

### Overview
Primary analytics platform for traffic analysis, user behavior, and conversion tracking.

### Setup Steps

**1. Create GA4 Property**
- Go to: https://analytics.google.com/
- Admin → Create Property
- Property name: "Velocity Inventory Solutions"
- Time zone: America/New_York (Eastern)
- Currency: USD

**2. Get Measurement ID**
- Property → Data Streams → Add Stream (Web)
- Website URL: https://velocityinventorysolutions.com
- Stream name: "Velocity Website"
- Copy Measurement ID (format: `G-XXXXXXXXXX`)

**3. Add to Environment Variables**
```bash
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

**4. Configure in GTM**
- Add as GA4 Configuration tag (see GTM section above)

---

### Enhanced Measurement (Auto-Tracked)
Enable in GA4 Data Stream settings:
- ✅ Page views
- ✅ Scrolls (90% depth)
- ✅ Outbound clicks
- ✅ Site search (if search implemented)
- ✅ Video engagement (if videos added)
- ✅ File downloads

---

### Custom Events (via GTM)
- `form_submission` - Contact form completed
- `cta_click` - Any CTA button clicked
- `booking_started` - Discovery call booking initiated
- `lead_magnet_download` - Health Check downloaded
- `page_scroll_50` - User scrolled halfway down page
- `page_scroll_90` - User scrolled to bottom of page

---

### Conversion Events
Mark as conversions in GA4:
1. `form_submission` (primary conversion)
2. `booking_started` (primary conversion)
3. `lead_magnet_download` (micro-conversion)

---

### Custom Dimensions (Phase 4)
- User Type: New vs. Returning
- Traffic Source: Organic, Direct, Referral, Social, Paid, AI Engine
- Lead Source: Contact Form, Discovery Call, Lead Magnet
- Page Category: Homepage, Service Page, Blog Post, etc.

---

## Rate Limiting (Upstash Redis)

### Overview
Prevent spam and abuse by limiting form submissions to 5 per hour per IP address.

### Setup Steps

**1. Create Upstash Account**
- Go to: https://console.upstash.com/
- Sign up / log in
- Create new Redis database: "Velocity Rate Limiting"
- Region: US East (closest to Vercel deployment)
- Copy REST URL and Token

**2. Add to Environment Variables**
```bash
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

---

### Implementation

**Library:** `@upstash/ratelimit` + `@upstash/redis`

**Configuration:**
```typescript
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 requests per hour
  analytics: true, // Track rate limit hits
});

// In API route:
const identifier = request.headers.get("x-forwarded-for") ?? "unknown";
const { success, limit, remaining, reset } = await ratelimit.limit(identifier);

if (!success) {
  return NextResponse.json(
    { success: false, message: "Too many requests. Please try again later." },
    { status: 429 }
  );
}
```

---

### Rate Limit Response Headers
```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 3
X-RateLimit-Reset: 1704923400
```

---

## Calendly Integration

### Overview
Discovery call booking directly from website.

### Setup

**Current Implementation:**
- Link: https://meetings-na2.hubspot.com/jkimelman
- Opens in new tab
- Integrated with HubSpot calendar

**Future Enhancement (Phase 5):**
- Embed Calendly inline on Contact page
- Track booking events in GTM/GA4
- Auto-populate email from contact form

---

## Future Integrations (Phase 5+)

### Facebook Pixel
**Purpose:** Track conversions for Facebook ads  
**Setup:** Add via GTM  
**Events:** PageView, Lead (form submission), CompleteRegistration (discovery call)

### LinkedIn Insight Tag
**Purpose:** Track conversions for LinkedIn ads  
**Setup:** Add via GTM  
**Events:** Lead form submission, discovery call booking

### Hotjar (Optional)
**Purpose:** Heatmaps and session recordings  
**Setup:** Add tracking code to GTM  
**Use case:** Identify form abandonment, UX issues

### Intercom / HubSpot Chat (Optional)
**Purpose:** Live chat widget  
**Setup:** Add HubSpot Chat embed code  
**Use case:** Real-time visitor engagement

---

## Testing Checklist

### HubSpot Integration
- [ ] Form submission creates contact in HubSpot
- [ ] All form fields map correctly
- [ ] Error handling works (invalid email, server error)
- [ ] Success message displays
- [ ] HubSpot tracking script loads
- [ ] Page views appear in HubSpot analytics

### GTM & GA4
- [ ] GTM container loads on all pages
- [ ] GA4 receives page views
- [ ] Form submission event fires
- [ ] CTA click events fire
- [ ] No console errors
- [ ] GTM Preview mode shows tags firing

### Rate Limiting
- [ ] 6th form submission within 1 hour blocked
- [ ] Rate limit error message displays
- [ ] Different IP addresses have separate limits
- [ ] Limit resets after 1 hour

### Calendly
- [ ] Link opens in new tab
- [ ] Calendly booking page loads correctly
- [ ] Email pre-populated if coming from form

---

## Monitoring & Maintenance

### Weekly Checks
- [ ] HubSpot form submissions working
- [ ] No API errors in logs
- [ ] GA4 receiving data
- [ ] Rate limiting functioning

### Monthly Reviews
- [ ] Review HubSpot contact quality
- [ ] Analyze GA4 conversion rates
- [ ] Check for spam form submissions
- [ ] Review and optimize email workflows

### Quarterly Audits
- [ ] Update API keys/tokens if needed
- [ ] Review GTM tag configuration
- [ ] Optimize tracking for new features
- [ ] Test all integrations end-to-end

---

## Troubleshooting

### Form Not Submitting
1. Check browser console for errors
2. Verify environment variables set
3. Test HubSpot API directly (Postman)
4. Check rate limiting (Redis connection)
5. Review Vercel function logs

### Tracking Not Working
1. Verify GTM container ID correct
2. Check GTM Preview mode
3. Confirm GA4 Measurement ID
4. Check for ad blockers (test in incognito)
5. Review GTM triggers and tags

### Rate Limit Not Enforcing
1. Check Redis connection
2. Verify environment variables
3. Test with same IP multiple times
4. Review Upstash dashboard logs

---

## Security Best Practices

### API Keys
- Never commit API keys to git
- Use environment variables only
- Rotate keys quarterly
- Use separate keys for dev/prod

### Rate Limiting
- Always implement on public forms
- Log rate limit violations
- Consider captcha for persistent abuse

### Data Privacy
- GDPR compliance (Phase 4)
- Privacy policy required
- Cookie consent banner
- Secure data transmission (HTTPS)

---

## Support Contacts

### HubSpot
- Support: https://help.hubspot.com/
- Account: jay@velocityims.com

### Google (GTM/GA4)
- Support: https://support.google.com/analytics/
- Tag Manager: https://support.google.com/tagmanager/

### Upstash
- Support: https://upstash.com/docs
- Console: https://console.upstash.com/

### Vercel
- Support: https://vercel.com/support
- Dashboard: https://vercel.com/dashboard

---

**Last Updated:** January 10, 2026  
**Next Review:** After Phase 3 launch or when adding new integrations
# Implementation Plan: Velocity Inventory Solutions Website

## Overview
Build a modern, high-converting website for Velocity Inventory Solutions - a professional services company specializing in Cin7 Core implementations and inventory management consulting for ecommerce businesses.

**Tech Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + HubSpot Integration
**Deployment:** Vercel
**Primary Domain:** velocityinventorysolutions.com
**Domain Alias:** velocityims.com (configured as 301 redirect in Vercel)
**Timeline:** 4-6 days

---

## Additional Requirements (Approved)

### New Sections & Features:
1. **FAQ Section** - 10 questions with FAQ schema markup for SEO
2. **How It Works** - 4-step process section
3. **Exit-Intent Popup** - Lead magnet promotion placeholder
4. **Secondary CTA** - "Book 15-Min Discovery Call" button linking to https://meetings-na2.hubspot.com/jkimelman

### Schema Markup:
- LocalBusiness schema for Orlando/Central Florida service area
- FAQ schema for all 10 FAQ questions
- Existing: Organization, ProfessionalService, ContactPoint schemas

### Contact Form Simplification:
- Email (required)
- Name (required)
- Company (required)
- Phone (optional)

### Authority & Messaging:
- **Leadership:** "Led by 20+ year CPA & National Xero Ambassador"
- **Community:** 1,200+ accounting professionals
- **Service Area:** Orlando/Central Florida (with remote capabilities)

### Target Audience:
- Ecommerce businesses
- $1M-$10M annual revenue
- Multi-channel (Shopify/Amazon/Wholesale)
- **Pain Points:** Landed cost timing, COGS volatility, gross margin inaccuracy, spreadsheet chaos

### Service Transparency:
- Implementation pricing: $15K-$35K range
- Timeline: 60-90 days

### Technical Additions:
- **GTM (Google Tag Manager)** - Container for tracking/analytics
- **Rate Limiting** - Max 5 form submissions per hour per IP
- **Lead Magnet Promotion** - "Free Inventory Health Check Dashboard" (Google Sheets, external link)

---

## Implementation Phases

### Phase 1: Project Initialization

#### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

#### 1.2 Install Dependencies
```bash
# Core dependencies
npm install @heroicons/react clsx tailwind-merge react-hook-form zod @hookform/resolvers @hubspot/api-client next-sitemap

# Analytics & Tracking
npm install @vercel/analytics @next/third-parties

# UI & Animation
npm install framer-motion lucide-react

# Rate limiting
npm install @upstash/ratelimit @upstash/redis

# Tailwind plugins
npm install -D @tailwindcss/forms @tailwindcss/typography
```

#### 1.3 Configure Environment Variables
See TODO.md for all required credentials

---

### Phase 2: Core Infrastructure
- Tailwind configuration with brand colors
- Next.js configuration
- Site configuration files (site.ts, seo.ts, utils.ts)
- Global styles

---

### Phase 3: Reusable UI Components
Build foundational components:
- Button.tsx
- Card.tsx
- Container.tsx
- Section.tsx
- Input.tsx

---

### Phase 4: Layout & SEO Setup
- Root layout with comprehensive metadata
- JSON-LD structured data (Organization, LocalBusiness, ProfessionalService, ContactPoint)
- GTM integration
- Footer component

---

### Phase 5: Homepage Sections
1. **Hero** - Dual CTAs, authority badge, trust indicators
2. **Services** - 2-column grid with service cards
3. **How It Works** - 4-step process visualization
4. **Testimonials** - Client social proof
5. **FAQ** - Accordion with FAQPage schema
6. **Contact Form** - Simplified fields with rate limiting
7. **Exit Intent Popup** - Lead magnet (optional/placeholder)

---

### Phase 6: HubSpot Integration
- HubSpot API client
- Form submission API route with rate limiting (5/hour/IP)
- TypeScript types

---

### Phase 7: SEO Implementation
- Sitemap configuration
- Dynamic sitemap
- Robots.txt
- Image optimization
- Performance optimization

---

### Phase 8: Deployment
- Vercel configuration
- Environment variables setup
- Domain configuration (primary + redirect)

---

## Critical Files (Priority Order)

1. `/src/app/layout.tsx` - Root layout with SEO metadata and structured data
2. `/src/app/page.tsx` - Homepage assembly
3. `/src/components/sections/Hero.tsx` - First impression with dual CTAs
4. `/src/components/sections/ContactForm.tsx` - Lead capture
5. `/src/app/api/contact/route.ts` - Form submission handler with rate limiting
6. `/src/lib/hubspot.ts` - HubSpot API integration
7. `/src/components/sections/Services.tsx` - Services showcase
8. `/src/components/sections/HowItWorks.tsx` - 4-step process
9. `/src/components/sections/FAQ.tsx` - FAQ accordion
10. `/src/components/sections/Testimonials.tsx` - Social proof

---

## Content Requirements

### Hero Section
- Headline (provided by client)
- Subheadline (provided by client)
- Authority badge: "Led by 20+ year CPA & National Xero Ambassador"
- Primary CTA: "Get Started"
- Secondary CTA: "Book 15-Min Discovery Call"
- Trust indicators: 1,200+ community, $15K-$35K pricing, 60-90 days

### Services Content
(Descriptions provided by client)
- Cin7 Core Implementation
- Inventory Management Consulting

### How It Works (4 Steps)
(Content provided by client)

### Testimonials
(3-4 testimonials provided by client)

### FAQ Section
(10 Q&A pairs provided by client)

---

## Verification Checklist

### Pre-Deployment
- [ ] All sections render responsively
- [ ] Form validation works
- [ ] HubSpot integration functional
- [ ] Rate limiting enforced
- [ ] GTM container loads
- [ ] SEO metadata validated
- [ ] Structured data validated
- [ ] Lighthouse scores >90

### Post-Deployment
- [ ] Primary domain loads
- [ ] 301 redirect works (velocityims.com → velocityinventorysolutions.com)
- [ ] HTTPS enabled
- [ ] Form creates HubSpot contacts
- [ ] Environment variables set in Vercel
- [ ] Sitemap submitted to Google Search Console

---

## Success Criteria

### Launch Requirements:
✅ All homepage sections render correctly
✅ Contact form submits to HubSpot successfully
✅ Lighthouse scores: Performance >90, SEO >95, Accessibility >90
✅ Zero console errors
✅ Responsive on mobile, tablet, desktop
✅ Meta tags and structured data validated

### Post-Launch KPIs:
- Contact form conversion rate (target: 2-5%)
- Page load time (target: < 2 seconds)
- Bounce rate (target: < 60%)
- Average session duration (target: > 2 minutes)

---

## Timeline

**Total: 4-6 days**

- **Day 1:** Project setup, Tailwind config, UI components
- **Day 2:** Homepage sections (Hero, Services, Testimonials), Footer
- **Day 3:** Contact form, HubSpot integration, API route
- **Day 4:** SEO implementation, content refinement
- **Day 5:** Testing, deployment to Vercel
- **Day 6:** Buffer for fixes and polish

---

For client action items and detailed TODO checklist, see TODO.md

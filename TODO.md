# TODO Checklist: Velocity Inventory Solutions Website

This document outlines all items you need to provide or complete during the project, organized by priority and whether they block the initial build.

---

## 🚨 CRITICAL - BLOCKS INITIAL BUILD

These items must be completed before or during the build process:

### Content Items (Required for Launch)
- [ ] **Hero Headline** - Main h1 text for hero section
- [ ] **Hero Subheadline** - Supporting text explaining value proposition
- [ ] **Company Tagline** - Short tagline for footer/branding
- [ ] **Service Descriptions** - Detailed descriptions for both services:
  - [ ] Cin7 Core Implementation service description
  - [ ] Inventory Management Consulting service description
- [ ] **How It Works Steps** - 4-step process content:
  - [ ] Step 1: Title & description
  - [ ] Step 2: Title & description
  - [ ] Step 3: Title & description
  - [ ] Step 4: Title & description
- [ ] **FAQ Questions & Answers** - All 10 FAQ items with questions and detailed answers
- [ ] **Testimonials** - 3-4 client testimonials:
  - [ ] Quote, Name, Title, Company for each testimonial
  - [ ] Optional: Client photos/headshots

### Third-Party Accounts (Required for Launch)
- [ ] **HubSpot Setup**:
  - [ ] Create HubSpot form or get API credentials
  - [ ] Provide HUBSPOT_PORTAL_ID
  - [ ] Provide HUBSPOT_FORM_GUID
  - [ ] Provide HUBSPOT_API_KEY
- [ ] **Google Tag Manager**:
  - [ ] Create GTM account (if not already created)
  - [ ] Create GTM container for website
  - [ ] Provide NEXT_PUBLIC_GTM_ID (format: GTM-XXXXXXX)
- [ ] **Upstash Redis** (for rate limiting):
  - [ ] Create free Upstash account at https://upstash.com
  - [ ] Create Redis database
  - [ ] Provide UPSTASH_REDIS_REST_URL
  - [ ] Provide UPSTASH_REDIS_REST_TOKEN
- [ ] **Vercel Account**:
  - [ ] Create Vercel account (if not already created)
  - [ ] Connect GitHub repository to Vercel
  - [ ] Add all environment variables to Vercel dashboard

### Assets (Required for Launch)
- [ ] **Company Logo** - SVG or high-res PNG format
  - [ ] Primary logo for header/footer
  - [ ] Favicon (square format, 512x512px recommended)
- [ ] **Hero Background Image** (optional but recommended)
  - [ ] High-quality image or we can use gradient background
  - [ ] Recommended size: 1920x1080px or larger
- [ ] **Open Graph Image** - For social media sharing
  - [ ] 1200x630px image with company branding
  - [ ] Can be created from logo + branded background

### Domain Configuration (Required for Launch)
- [ ] **Domain DNS Setup**:
  - [ ] Purchase/verify ownership of velocityinventorysolutions.com
  - [ ] Purchase/verify ownership of velocityims.com (for redirect)
  - [ ] Access to DNS settings for both domains
  - [ ] Add DNS records as provided by Vercel

---

## ⚠️ HIGH PRIORITY - NEEDED WITHIN FIRST WEEK

These items should be completed shortly after launch:

### Analytics & Tracking Setup
- [ ] **Google Tag Manager Configuration**:
  - [ ] Set up GTM tags for form submission tracking
  - [ ] Configure conversion events
  - [ ] Test GTM in Preview mode
- [ ] **Google Analytics 4** (optional but recommended):
  - [ ] Create GA4 property
  - [ ] Add GA4 tag to GTM container
  - [ ] Set up conversion tracking
- [ ] **Google Search Console**:
  - [ ] Verify domain ownership
  - [ ] Submit sitemap (sitemap.xml)
  - [ ] Monitor indexing status

### Content Enhancement
- [ ] **Professional Photography** (if using stock photos initially):
  - [ ] Hire photographer or source high-quality branded images
  - [ ] Replace stock photos with authentic business photos
- [ ] **Service Icons** - Custom icons for services (can use free icons initially)
- [ ] **Process Icons** - Icons for "How It Works" 4 steps

---

## 📋 MEDIUM PRIORITY - CAN BE ADDED POST-LAUNCH

These items can be completed in the weeks after launch:

### Additional Tracking & Optimization
- [ ] **Facebook Pixel** (if running Facebook/Instagram ads):
  - [ ] Create Facebook Business Manager account
  - [ ] Set up Facebook Pixel
  - [ ] Add Pixel ID to GTM
  - [ ] Configure conversion events
- [ ] **LinkedIn Insight Tag** (if running LinkedIn ads):
  - [ ] Create LinkedIn Campaign Manager account
  - [ ] Get Insight Tag partner ID
  - [ ] Add to GTM
- [ ] **Microsoft Clarity** (free heatmapping tool):
  - [ ] Create Clarity account
  - [ ] Add tracking code via GTM
  - [ ] Monitor user behavior

### Content & Credentials
- [ ] **Trust Badges/Certifications**:
  - [ ] Cin7 Partner badge/logo (if applicable)
  - [ ] Xero Ambassador badge
  - [ ] Any other professional certifications
- [ ] **Company Photos**:
  - [ ] Team photos (for future About page)
  - [ ] Office photos
  - [ ] Client meeting photos (with permission)

### Post-Launch Optimizations
- [ ] **A/B Testing Setup**:
  - [ ] Test different hero headlines
  - [ ] Test CTA button copy
  - [ ] Test form field variations
- [ ] **Email Notifications**:
  - [ ] Set up HubSpot workflow to send email on form submission
  - [ ] Configure internal notification emails
  - [ ] Set up auto-responder for leads

---

## 🎯 SEPARATE PROJECT - LEAD MAGNET

These items are separate from the website build and can be developed in parallel:

### "Free Inventory Health Check Dashboard" Creation
- [ ] **Google Sheets Dashboard Development**:
  - [ ] Design dashboard layout and metrics
  - [ ] Create formulas and calculations
  - [ ] Add instructions/documentation sheet
  - [ ] Test with sample data
  - [ ] Create "File > Make a Copy" shareable link
- [ ] **Landing Page for Lead Magnet** (optional):
  - [ ] Create dedicated landing page or use main site form
  - [ ] Connect to email automation
- [ ] **Email Delivery Setup**:
  - [ ] Create HubSpot workflow to deliver dashboard link
  - [ ] Write email copy with instructions
  - [ ] Test email delivery

### Exit Intent Popup Content
- [ ] **Popup Copy**:
  - [ ] Headline for popup
  - [ ] Value proposition for dashboard
  - [ ] CTA button text
- [ ] **Activation Decision**:
  - [ ] Decide when to enable exit intent popup (can start disabled)
  - [ ] Monitor conversion impact after enabling

---

## 📊 POST-DEPLOYMENT TASKS

After the site is live, complete these tasks:

### Week 1 After Launch
- [ ] **Test all functionality**:
  - [ ] Submit test form and verify HubSpot contact creation
  - [ ] Test rate limiting (try 6 rapid submissions)
  - [ ] Test on multiple devices and browsers
  - [ ] Verify all CTAs work correctly
- [ ] **SEO Setup**:
  - [ ] Submit sitemap to Google Search Console
  - [ ] Request indexing for homepage
  - [ ] Monitor Core Web Vitals
- [ ] **Analytics Verification**:
  - [ ] Verify GTM is firing correctly
  - [ ] Check pageview events
  - [ ] Test form submission tracking
- [ ] **Domain Configuration**:
  - [ ] Verify velocityinventorysolutions.com loads correctly
  - [ ] Test velocityims.com 301 redirect
  - [ ] Verify HTTPS is working
  - [ ] Check SSL certificate

### Month 1 After Launch
- [ ] **Content Updates**:
  - [ ] Replace placeholder content (if any was used)
  - [ ] Add real testimonials if started with placeholders
  - [ ] Update any temporary stock photos
- [ ] **Performance Monitoring**:
  - [ ] Run Lighthouse audit
  - [ ] Check Core Web Vitals in Search Console
  - [ ] Review page load times
  - [ ] Monitor bounce rate and session duration
- [ ] **Conversion Optimization**:
  - [ ] Review form submission rate
  - [ ] Analyze where users drop off
  - [ ] Consider A/B testing opportunities
- [ ] **SEO Monitoring**:
  - [ ] Check Google Search Console for indexing issues
  - [ ] Review search queries driving traffic
  - [ ] Monitor ranking for target keywords

### Ongoing Maintenance
- [ ] **Monthly Reviews**:
  - [ ] Review form submissions and lead quality
  - [ ] Update testimonials as new ones come in
  - [ ] Monitor and update FAQ based on common questions
  - [ ] Review analytics and make optimizations
- [ ] **Quarterly Updates**:
  - [ ] Update pricing if it changes
  - [ ] Refresh service descriptions
  - [ ] Add new case studies or success stories
  - [ ] Review and update SEO metadata
- [ ] **Technical Maintenance**:
  - [ ] Update npm dependencies monthly
  - [ ] Monitor for security vulnerabilities
  - [ ] Review and renew SSL certificates (auto-renewed by Vercel)
  - [ ] Backup content and data files

---

## 📝 NOTES ON BLOCKERS

### Can Start Build Without:
- Final testimonials (can use placeholders)
- Professional photos (can use quality stock images)
- Trust badges (can add later)
- Facebook Pixel / LinkedIn Tag (can add via GTM later)
- Lead magnet dashboard (separate project)
- Exit intent popup (can enable later)

### Cannot Launch Without:
- Hero headline and subheadline
- Core service descriptions
- FAQ questions and answers
- HubSpot credentials
- GTM container ID
- Upstash Redis credentials
- Company logo
- Domain access for DNS configuration

### Recommended to Have for Launch:
- At least 2-3 real testimonials
- Open Graph image for social sharing
- How It Works content
- Professional hero background image

---

## Quick Setup Guide for Third-Party Services

### Setting up HubSpot
1. Log in to your HubSpot account
2. Go to Settings > Marketing > Forms
3. Create a new form or note existing form GUID
4. Go to Settings > Account Defaults to find Portal ID
5. Create a private app for API access (Settings > Integrations > Private Apps)

### Setting up Google Tag Manager
1. Go to tagmanager.google.com
2. Create a new account and container
3. Select "Web" as the target platform
4. Note your GTM container ID (format: GTM-XXXXXXX)

### Setting up Upstash Redis
1. Go to upstash.com and create a free account
2. Create a new Redis database
3. Copy the REST URL and REST Token from database details
4. These are used for rate limiting form submissions

### Setting up Vercel
1. Go to vercel.com and sign up
2. Import your GitHub repository
3. Add environment variables in project settings
4. Configure custom domains under project settings > Domains

---

**Need help?** Reference IMPLEMENTATION_PLAN.md for detailed technical specifications.

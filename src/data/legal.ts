export interface LegalSection {
  title: string
  content: string
}

export interface LegalDocument {
  title: string
  lastUpdated: string
  sections: LegalSection[]
}

export const privacyPolicy: LegalDocument = {
  title: 'Privacy Policy',
  lastUpdated: 'January 15, 2026',
  sections: [
    {
      title: 'Introduction',
      content: `Velocity Inventory Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
    },
    {
      title: 'Information We Collect',
      content: `We may collect information about you in a variety of ways, including:

**Personal Data:** When you fill out our contact form or book a discovery call, we collect your name, email address, company name, and phone number (if provided).

**Usage Data:** We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.

**Cookies and Tracking Technologies:** We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to:

- Respond to your inquiries and provide customer service
- Send you information about our services
- Improve our website and services
- Analyze website usage and trends
- Comply with legal obligations
- Protect against fraud and unauthorized transactions`,
    },
    {
      title: 'Information Sharing',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:

- **Service Providers:** Third-party vendors who assist us in operating our website or conducting our business (e.g., HubSpot for CRM, Vercel for hosting)
- **Legal Requirements:** When required by law or to protect our rights
- **Business Transfers:** In connection with a merger, acquisition, or sale of assets`,
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.`,
    },
    {
      title: 'Your Rights',
      content: `Depending on your location, you may have certain rights regarding your personal information, including:

- The right to access your personal information
- The right to correct inaccurate information
- The right to request deletion of your information
- The right to opt-out of marketing communications

To exercise these rights, please contact us at info@velocityinventorysolutions.com.`,
    },
    {
      title: 'Third-Party Links',
      content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.`,
    },
    {
      title: 'Contact Us',
      content: `If you have any questions about this Privacy Policy, please contact us at:

**Velocity Inventory Solutions**
Orlando, Florida
Email: info@velocityinventorysolutions.com`,
    },
  ],
}

export const termsOfService: LegalDocument = {
  title: 'Terms of Service',
  lastUpdated: 'January 15, 2026',
  sections: [
    {
      title: 'Agreement to Terms',
      content: `By accessing or using the Velocity Inventory Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
    },
    {
      title: 'Services Description',
      content: `Velocity Inventory Solutions provides Cin7 Core implementation, inventory management consulting, and multi-system integration services for ecommerce businesses. Our services include system setup, data migration, training, and ongoing support.`,
    },
    {
      title: 'Engagement Terms',
      content: `All consulting and implementation engagements are subject to a separate Statement of Work (SOW) that outlines specific deliverables, timelines, and pricing. The SOW will be provided upon completion of a discovery call and needs assessment.`,
    },
    {
      title: 'Intellectual Property',
      content: `All content on this website, including text, graphics, logos, and images, is the property of Velocity Inventory Solutions and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.`,
    },
    {
      title: 'User Responsibilities',
      content: `When using our website or services, you agree to:

- Provide accurate and complete information
- Not use the website for any unlawful purpose
- Not attempt to gain unauthorized access to our systems
- Not interfere with the proper functioning of the website
- Comply with all applicable laws and regulations`,
    },
    {
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law, Velocity Inventory Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services. Our total liability shall not exceed the amount paid by you for services in the twelve months preceding the claim.`,
    },
    {
      title: 'Disclaimer of Warranties',
      content: `Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
    },
    {
      title: 'Confidentiality',
      content: `We treat all client information as confidential and will not disclose it to third parties without your consent, except as required by law. This includes business data, financial information, and implementation details shared during our engagement.`,
    },
    {
      title: 'Termination',
      content: `We reserve the right to terminate or suspend your access to our website or services at any time, without notice, for any reason, including breach of these Terms of Service.`,
    },
    {
      title: 'Governing Law',
      content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.`,
    },
    {
      title: 'Changes to Terms',
      content: `We may modify these Terms of Service at any time. Changes will be effective upon posting to this page. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.`,
    },
    {
      title: 'Contact Information',
      content: `For questions about these Terms of Service, please contact us at:

**Velocity Inventory Solutions**
Orlando, Florida
Email: info@velocityinventorysolutions.com`,
    },
  ],
}

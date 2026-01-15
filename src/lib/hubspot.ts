import type { ContactFormData } from '@/types/hubspot'

export async function submitToHubSpot(formData: ContactFormData) {
  const portalId = process.env.HUBSPOT_PORTAL_ID
  const formGuid = process.env.HUBSPOT_FORM_GUID

  if (!portalId || !formGuid) {
    throw new Error('HubSpot configuration is missing')
  }

  const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

  const fields = [
    { name: 'email', value: formData.email },
    { name: 'firstname', value: formData.name.split(' ')[0] },
    { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') || formData.name.split(' ')[0] },
    { name: 'company', value: formData.company },
  ]

  if (formData.phone) {
    fields.push({ name: 'phone', value: formData.phone })
  }

  console.log('Submitting to HubSpot:', { portalId, formGuid, fields })

  const response = await fetch(hubspotUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields,
      context: {
        pageUri: process.env.NEXT_PUBLIC_SITE_URL || 'https://velocityinventorysolutions.com',
        pageName: 'Contact Form',
      },
    }),
  })

  console.log('HubSpot response status:', response.status)

  if (!response.ok) {
    const errorText = await response.text()
    console.error('HubSpot error response:', errorText)
    let errorMessage = 'Failed to submit to HubSpot'
    try {
      const error = JSON.parse(errorText)
      errorMessage = error.message || errorMessage
    } catch (e) {
      errorMessage = errorText || errorMessage
    }
    throw new Error(errorMessage)
  }

  const result = await response.json()
  console.log('HubSpot success response:', result)
  return result
}

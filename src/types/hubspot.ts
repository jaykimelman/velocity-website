export interface ContactFormData {
  email: string
  name: string
  company: string
  phone?: string
}

export interface HubSpotFormResponse {
  success: boolean
  message: string
}

export interface HubSpotSubmissionData {
  fields: Array<{
    name: string
    value: string
  }>
  context: {
    pageUri: string
    pageName: string
  }
}

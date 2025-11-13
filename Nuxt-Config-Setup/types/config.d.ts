export interface AppConfig {
  apiBase: string
  enableLogging: boolean
  useMockData: boolean
  enableDebugToolbar: boolean
}

export interface FeatureFlags {
  enableDiscountBanner: boolean
  enableSidebar: boolean
  enableNewsletterPopup: boolean
  enableChatbot: boolean
}

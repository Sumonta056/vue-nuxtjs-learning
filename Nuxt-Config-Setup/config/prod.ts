import type { AppConfig } from '../types/config'

const prod: AppConfig = {
  apiBase: 'https://api.myproduction.com',
  enableLogging: false,
  useMockData: false,
  enableDebugToolbar: false,
}

export default prod

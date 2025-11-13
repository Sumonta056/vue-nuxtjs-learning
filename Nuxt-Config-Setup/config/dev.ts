import type { AppConfig } from '../types/config'

const dev: AppConfig = {
  apiBase: 'http://localhost:3000/api',
  enableLogging: true,
  useMockData: true,
  enableDebugToolbar: true,
}

export default dev

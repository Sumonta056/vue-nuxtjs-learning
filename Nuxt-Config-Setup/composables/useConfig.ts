import config from '~/config'
import features from '~/config/features'
import { AppConfig, FeatureFlags } from '~/types/config'

export function useAppConfig(): { config: AppConfig; features: FeatureFlags } {
  // simple synchronous access; could be converted to async if needed
  return { config: config as AppConfig, features: features as FeatureFlags }
}

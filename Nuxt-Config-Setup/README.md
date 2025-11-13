# Nuxt 3 Configurable Boilerplate (v2)

Upgraded features:
- Type-safe configuration (TypeScript interfaces for config and flags)
- Runtime feature toggle UI (dev-only panel; persists to localStorage)
- Secure runtimeConfig with .env example (private + public)
- GitHub Actions CI (typecheck, lint, build)

## Quickstart

1. Copy `.env.example` to `.env` and set env vars
2. Install deps
```bash
npm install
```
3. Run dev server
```bash
npm run dev
```

## Files of interest
- `config/*.ts` — environment configs & feature flags (type-safe)
- `types/config.d.ts` — TypeScript interfaces for config
- `plugins/feature-client.ts` — exposes runtime flags to client
- `plugins/feature-server.ts` — example server access
- `components/FeatureTogglePanel.vue` — dev UI to toggle flags
- `.github/workflows/ci.yml` — CI workflow

## Next suggestions
- Add runtime flag persistence to server or a central store for multi-user toggles
- Use a feature-flags service for production-grade feature rollout
- Integrate runtimeConfig secrets with your deployment system (GH Actions secrets / cloud provider)

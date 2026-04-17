/**
 * Environment config — reads from Vite env vars (set in .env or Vercel dashboard)
 * Prefix VITE_ is required for Vite to expose vars to the browser bundle.
 *
 * Priority for API key:
 *   1. VITE_GEMINI_API_KEY (env / Vercel) — get free key at ai.google.dev
 *   2. Manual input saved in localStorage (fallback for local dev)
 *
 * Model: gemini-2.5-flash-preview-04-17
 *   - Much higher quality code generation than Gemma-4
 *   - Supports up to 65k output tokens — virtually eliminates truncation
 *   - Faster, fewer continuation calls needed
 *   - Same Google AI Studio API endpoint, drop-in replacement
 */

export const ENV = {
  apiKey: import.meta.env.VITE_GEMINI_API_KEY as string | undefined,
  model: (import.meta.env.VITE_AI_MODEL as string | undefined) ?? 'gemini-2.5-flash-preview-04-17',
  /** true if the API key is baked in via env — hide the key input from UI */
  hasEnvKey: Boolean(import.meta.env.VITE_GEMINI_API_KEY),
} as const;

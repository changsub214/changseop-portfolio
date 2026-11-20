import { LocalOntologyProvider } from './localOntologyProvider';
import type { QueryProvider } from './types';

/**
 * Provider Factory (Strategy Pattern).
 * Stage 1 runs LocalOntologyProvider with zero external API keys required.
 * Stage 2 can plug in a GeminiProvider when process.env.GEMINI_API_KEY is set
 * without modifying CommandQueryModal or API route contracts.
 */
export function resolveQueryProvider(): QueryProvider {
  return new LocalOntologyProvider();
}

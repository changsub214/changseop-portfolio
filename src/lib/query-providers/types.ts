import type { OntologyQueryResponse } from '@/types/ontology';
import type { Locale, RoleLens } from '@/types/portfolio';

export interface QueryRequestInput {
  query: string;
  lens: RoleLens;
  locale: Locale;
}

export interface QueryProvider {
  readonly name: 'local-ontology' | 'gemini';
  execute(input: QueryRequestInput): Promise<OntologyQueryResponse>;
}

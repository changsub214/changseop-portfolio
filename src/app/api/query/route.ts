import { NextResponse } from 'next/server';
import { resolveQueryProvider } from '@/lib/query-providers';
import type { Locale, RoleLens } from '@/types/portfolio';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      query?: string;
      lens?: RoleLens;
      locale?: Locale;
    };

    const query = (body.query ?? '').trim();
    const lens: RoleLens = body.lens ?? 'all';
    const locale: Locale = body.locale ?? 'ko';

    if (!query) {
      return NextResponse.json(
        { error: 'Query string is required.' },
        { status: 400 }
      );
    }

    const provider = resolveQueryProvider();
    const result = await provider.execute({ query, lens, locale });
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: 'Failed to execute ontology query.' },
      { status: 500 }
    );
  }
}

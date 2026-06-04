# Connection Card — Church of the Highlands

A modern, mobile-first single-page connection card experience built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Fonts, metadata
│   ├── page.tsx            # Entry → ConnectionCardPage
│   └── globals.css         # Highlands color tokens
├── components/
│   ├── connection-card/
│   │   ├── AccordionSection.tsx
│   │   ├── ConnectionCardHeader.tsx
│   │   ├── ConnectionCardPage.tsx
│   │   ├── DecisionCard.tsx
│   │   ├── ManagedContentCard.tsx
│   │   ├── ManagedContentSection.tsx
│   │   ├── MyDecisionSection.tsx
│   │   ├── MyInformationSection.tsx
│   │   ├── PrayerRequestSection.tsx
│   │   └── SuccessState.tsx
│   └── ui/                 # Form primitives
├── data/
│   ├── campuses.ts
│   ├── decision-cta-cards.ts
│   └── mock-managed-content.ts
├── hooks/
│   └── useConnectionCardForm.ts
├── lib/
│   ├── api/
│   │   └── submit-connection-card.ts   # API integration point
│   └── filter-managed-content.ts
└── types/
    └── connection-card.ts
```

## CMS / API integration (later)

| Area | File | What to wire |
|------|------|----------------|
| Submit | `src/lib/api/submit-connection-card.ts` | `POST` to your backend with `ConnectionCardPayload` |
| Managed content | `ManagedContentSection` `items` prop | Fetch from CMS; replace `MOCK_MANAGED_CONTENT` |
| Campuses | `src/data/campuses.ts` | API-driven dropdown |
| Decision CTAs | `src/data/decision-cta-cards.ts` | CMS-managed cards |
| Content filtering | `src/lib/filter-managed-content.ts` | Mirror server-side rules |

On submit, the full payload is logged to the browser console until a backend is connected.

## Form payload shape

See `ConnectionCardPayload` in `src/types/connection-card.ts`.

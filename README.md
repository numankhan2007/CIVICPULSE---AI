# CivicPulse AI

**Turning community problems into intelligent solutions.**

CivicPulse AI is an advanced hackathon prototype for civic issue reporting and civic intelligence. It gives citizens a clear way to report local problems and gives administrators and government officials a shared view of report priorities, potential duplicates, and location patterns.

> **Prototype status:** The interface uses illustrative report data and demo-only rule-based triage. Supabase, authentication, Cloudflare Workers AI, Gemini, `pgvector`, R2 uploads, and live geospatial analytics are planned integrations—not connected services in this prototype. The map graphics are illustrative, not an authoritative map of Chennai.

## Design direction

- **Visual identity:** luxury editorial civic-tech, not a generic AI dashboard.
- **Palette:** Obsidian Black `#090A10`, Crimson `#C52B48`, Midnight Blue `#151D32`, Wine Ash `#A89CA4`, with restrained antique-gold accents.
- **Typography:** Cinzel for editorial headings and Poppins for interface text.
- **Interface:** angular borders, deliberate spacing, restrained red highlights, custom orbital graphic, signal bars, compact data tables, and high-contrast typography. No glassmorphism or liquid morphism.
- **Component inspiration:** React Bits and 21st.dev patterns informed the interaction direction; the current UI is custom-built rather than dependent on their component libraries.

## Prototype features

- Overview dashboard with report metrics, priorities, distribution, and sample AI insight cards.
- Report register with search and priority filters.
- Report details drawer with category, location, suggested department, priority, and sample triage explanation.
- New-report form with title, category, description, area, optional image URL, and GPS-coordinate capture through browser permission.
- Demo priority suggestions and department routing using transparent keyword rules.
- Map-style view with sample report markers and hotspot cards.
- AI insights view that explains planned classification, semantic matching, and spatial analysis.
- Role preview switcher for Admin, Citizen, and Government Official.
- Responsive sidebar, tables, forms, and panels.

## Technology

- React + TypeScript + Vite
- Lucide React icons
- Cinzel and Poppins via Fontsource
- CSS custom properties and responsive CSS

### Planned production integrations

| Need | Planned technology |
| --- | --- |
| Structured reports and users | Supabase PostgreSQL |
| Login and roles | Supabase Auth |
| API and business logic | TypeScript + Hono |
| Primary AI | Cloudflare Workers AI |
| Secondary AI | Google Gemini API |
| Semantic duplicate detection | Embeddings + Supabase `pgvector` |
| Image storage | Cloudflare R2 |
| Geospatial display | Leaflet + OpenStreetMap |
| Input/output validation | Zod |
| Client-side API state | TanStack Query |
| Unit testing | Vitest |

## Run the prototype

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
npm run preview
```

## Demo notes

- Report creation is stored in React state; refreshing resets it to sample data.
- The role switcher is a UI preview only. It does not enforce authentication or permissions.
- Priority and department suggestions are simple keyword rules, not AI model output.
- GPS capture requires the browser to grant location permission. Manual coordinates are also accepted.
- Image entry accepts a URL for demonstration; file uploads and R2 are not wired up.
- Map markers and hotspot counts are illustrative; real GPS mapping, reverse geocoding, and spatial analysis remain to be integrated.
- Do not use the sample reports as real civic data or safety guidance.

## Team

**COSMIC CODERS · DEXATHON · Team ID DEX26179**

Repository: https://github.com/numankhan2007/CIVICPULSE---AI

# Apollos Studios

**Space to make the work.**  
Find rehearsal rooms, recording nooks, maker studios and creative workspaces across African cities.

> **Independent Directory Disclaimer:** Independent directory only. We do not operate studios, take bookings or payments, or guarantee availability. Arrange directly with hosts. Respect house rules and local laws.

---

## Overview

**Apollos Studios** (`apollos-studios`) is a Next.js 16 + React 19 + Tailwind CSS 4 creative workspace directory built faithfully on the uploaded **Whitespace** template design (`#fcd307` primary accent, `#000000` ink, `#3c312e` warm dark slate, `#141313` footer, `Poppins` typography and original icon font families).

### Key Capabilities

- **Filterable Spaces Directory (`/spaces` & `/spaces/[slug]`)**: Filter 12 realistic creative rooms across **Nairobi, Lagos, Accra, Johannesburg, Kampala and Dakar** by city, space type (`music`, `rehearsal`, `recording`, `podcast`, `art`, `maker`), rate band, hourly/day billing availability and room amenities (pure-sine inverter backup, acoustic treatment, backline drums, daylight, clay/utility sinks, ground load-in).
- **Space Types Guide (`/types`)**: Practical expectations, typical rates, packing lists and pre-booking questions for all six creative disciplines.
- **For Hosts (`/hosts`) & List a Space (`/list`)**: Commission-free listing benefits, six studio steward tips, host FAQs and a validated submission form protected by rate limiting, honeypot checks and optional Google reCAPTCHA.
- **Multi-City Landings (`/cities`)**: Neighbourhood studio clusters, commute/load-in realities and power continuity notes across six African cities.
- **Light Local Saves Only (`/saved`)**: Private browser storage (`apollos-studios-saved`) for **Saved Spaces** and **My Listings** only (no heavy account walls, host analytics dashboards or charts).
- **Multilingual UI (`EN` / `SW` / `FR`)**: Instant language switcher persisted via `apollos-studios-locale`.
- **Accessibility & Utilities**: Web Speech API audio page guide, WhatsApp quick desk (`+254 112 272 061`), cookie preference banner (`apollos-studios-cookie-consent`), Lenis smooth scrolling with `prefers-reduced-motion` support, and legacy `.html` redirects.

---

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home: Why space matters, 4 discipline pillars, counters, featured spaces, 4-step workflow, rate bands, artist/host voices, city landings & host CTA |
| `/spaces` | Filterable creative workspaces directory |
| `/spaces/[slug]` | Full room specifications, gear included, what to bring, house rules & direct host contact |
| `/types` | Practical guides to the 6 space types |
| `/hosts` | Host benefits, 6 practical tips & Host FAQ |
| `/cities` | Multi-city creative landings (Nairobi, Lagos, Accra, Johannesburg, Kampala, Dakar) |
| `/list` | Space listing submission form |
| `/saved` | Light local Saved Spaces & My Listings |
| `/about` | Purpose, principles & independent directory model |
| `/guidelines` | Shared studio etiquette for visiting creatives and hosts |
| `/contact` | Editorial desk contact details & protected contact form |
| `/privacy` | Privacy policy & browser storage transparency |
| `/terms` | Terms of use & core independent directory disclaimer |

---

## Local Development

Requires **Node.js >= 24** (`.nvmrc` pinned to `24`).

```bash
cp .env.example .env.local
npm install
npm run dev
```

### Verification Commands

```bash
npm run typecheck
npm run build
npm run audit:high
```

---

## Environment Variables

See [`.env.example`](./.env.example):

- `NEXT_PUBLIC_SITE_URL`: Canonical public URL (e.g. `https://apollos-studios.vercel.app`)
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Editorial desk WhatsApp number (`254112272061`)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY`: Optional Google reCAPTCHA v3 keys for `/api/contact` and `/api/list-space`
- `FORMS_WEBHOOK_URL`: Optional server webhook endpoint for forwarding verified form submissions

---

## Deployment

Configured in [`vercel.json`](./vercel.json) for **Paris (`cdg1`)** with HSTS, Content-Security-Policy, `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy` headers.

## Credits

See [`credits.md`](./credits.md) and [`image-credits.md`](./image-credits.md).

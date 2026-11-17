# FairPlay Africa homepage

A responsive Next.js App Router homepage based on the supplied **FairPlay Africa Homepage Build Brief**. The branded SVG preloader you supplied is integrated globally through `src/app/layout.tsx`.

## Requirements

- Node.js 20.9 or newer
- npm
- VS Code (recommended)

## Run locally

1. Extract the ZIP.
2. Open the `fairplay-homepage` folder in VS Code.
3. Open the VS Code terminal (**Terminal → New Terminal**).
4. Install dependencies:

   ```bash
   npm install
   ```

5. Create your local environment file by copying `.env.example` to `.env.local`.
6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open http://localhost:3000.

To check the production build:

```bash
npm run build
npm start
```

## Important configuration before launch

Open `src/config/links.ts` and replace:

- `REPLACE_NUMBER` with the official WhatsApp number in international format (digits only).
- `REPLACE_EMAIL` with the official contact email.

Keep `NEXT_PUBLIC_MVP_OPEN=false` until the `/get-started` and `/book-onboarding` routes exist. When the MVP routes are ready, set it to `true` and update the link config if their paths change.

## Preloader

The preloader lives in `src/components/Preloader/`:

- `Preloader.tsx`
- `preloader.module.css`
- `icon-paths.ts`

The vector paths in `icon-paths.ts` are preserved from the supplied file. It is rendered once in the root layout and uses the animated SVG/CSS treatment rather than a GIF.

## Image and asset guide

No stock images, fabricated testimonials, partner marks, or unsupported statistics have been added. The hero product passport is a CSS illustration, and the piracy fan-out visual is CSS-only.

Add approved assets only when available:

| Location | Asset needed | Notes |
|---|---|---|
| Hero | Optional real product screenshot or approved product illustration | Keep it optional; do not invent product UI or performance figures. |
| Audience cards | Approved African creators / filmmakers / organisations at work | Hide the image areas until approved photos are supplied. |
| Academy | Genuine workshop or creator-learning photo | Optional; no generic stock imagery. |
| Story | Approved founder / team photos | Keep hidden until supplied. |
| Header/footer | Official logo variants | Current SVG lockup uses the provided FairPlay vector mark with a text wordmark. Replace with official supplied logo exports if they differ. |
| Social preview | `public/opengraph-image.svg` | Brand-only artwork, no unsupported claims. |

## Content and design rules

- Homepage only; no backend, login, dashboard or forms.
- All marketing copy is centralised in `src/content/home.ts` and FAQ copy in `src/content/faq.ts`.
- CTA URLs are centralised in `src/config/links.ts`.
- Montserrat is loaded with `next/font`.
- Light/dark mode follows the visitor's operating-system setting.
- Monitoring is described as applying to supported platforms; no guaranteed protection or takedown outcome is promised.
- Analytics is intentionally unconfigured because no provider was selected. Nothing is tracked before consent.

## Before deployment

- Confirm WhatsApp and email destinations.
- Confirm all security and privacy checklist statements against the live product before publishing.
- Confirm the supplied hackathon award line is still approved for public use.
- Add only licensed/approved photography and official logo exports.
- Run `npm run build` and check desktop and mobile layouts, keyboard navigation, light/dark mode and reduced-motion behaviour.

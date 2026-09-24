# Galene — Aromas que transformam

Static institutional and portfolio website for Galene, a Brazilian home-fragrance brand. The site presents the product range, gift kits, scent collections, brand story, and made-to-order information in a responsive single-page experience.

## Stack

- Next.js App Router
- React and TypeScript
- Plain CSS with centralized design tokens
- Node.js test runner for content-level regression tests
- Static export (`out/`) for simple hosting

No database, authentication, server runtime, or external integration is required.

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Commands

```bash
npm run dev         # local development server
npm run typecheck   # TypeScript validation
npm run lint        # ESLint validation
npm run test        # Vitest test suite
npm run build       # static production build
npm run codex:check # canonical full validation
```

## Project structure

- `src/app/`: page, metadata, layout, and global styles.
- `src/components/`: reusable brand components.
- `src/content/site.ts`: centralized product, collection, and navigation content.
- `public/images/`: supplied/generated visual assets used by the site.
- `tests/`: content and navigation regression coverage.
- `docs/design-system.md`: visual system and responsive rules.

## Content maintenance

Product prices, collection descriptions, and the WhatsApp contact are maintained in `src/content/site.ts`. Visitor-facing copy is in Brazilian Portuguese. Code and technical documentation remain in English.

The official WhatsApp contact is [+55 11 96455-7649](https://wa.me/5511964557649). No email address or social profile is currently published.

## Deployment

`npm run build` creates a static export in `out/`. GitHub Actions publishes this directory to GitHub Pages whenever `main` is updated. No environment variables are required.

The published artifact includes `CNAME` for `galenearomas.com.br`. In the repository, enable **Settings > Pages > Build and deployment > Source: GitHub Actions** and set `galenearomas.com.br` as the custom domain. In Registro.br, point the apex domain to GitHub Pages with these A records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Also create a `www` CNAME record pointing to the GitHub Pages hostname shown in the repository's Pages settings. Enable HTTPS after DNS verification completes.

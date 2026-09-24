# Galene Website Working Agreements

- Keep the application static: do not introduce a database, authentication, or server runtime without explicit approval.
- Use English for code, file names, tests, and technical documentation.
- Use Brazilian Portuguese with correct accents for all visitor-facing content.
- Reuse the tokens and patterns in `src/app/globals.css`; avoid one-off colors and spacing.
- Keep product and collection content centralized in `src/content/site.ts`.
- Preserve the supplied Galene logo proportions and wording.
- Run `npm run codex:check` before considering a change complete.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

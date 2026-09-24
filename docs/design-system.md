# Galene design system

## Direction

The interface translates the supplied brand materials into a calm, tactile, editorial experience. Warm neutral surfaces support the copper-brown wordmark while generous whitespace and serif headlines communicate care and sensorial quality.

## Tokens

All reusable values live in `:root` in `src/app/globals.css`:

- Canvas: warm off-white.
- Surface: lighter ivory for layered sections.
- Brand: copper-brown derived from the supplied logo.
- Ink: deep warm brown rather than pure black.
- Display type: Georgia fallback stack.
- Body type: Arial/Helvetica fallback stack.
- Spacing and corner radii use fluid CSS custom properties.

## Components and patterns

- Eyebrows: uppercase, compact labels for section context.
- Buttons: pill-shaped primary and light variants with a simple arrow cue.
- Product cards: image-led cards with a number, product format, price, and alternate size.
- Collection cards: outlined cards on the brand color, paired with thin botanical symbols.
- Notices: bordered, low-contrast containers for production information.

## Responsive behavior

- Desktop: two-column hero, three-column portfolio, split editorial sections.
- Tablet: stacked hero, two-column portfolio, single-column scent collection cards.
- Mobile: one-column content, horizontally scrollable navigation, full-width actions, stacked kit details.
- Reduced-motion preferences disable nonessential animation and smooth scrolling.

## Accessibility

- Semantic landmarks and headings organize the page.
- Navigation uses real links and visible focus styles.
- Decorative symbols are hidden from assistive technology.
- Product imagery has descriptive alternative text.
- Text and controls keep strong contrast across neutral and brand backgrounds.

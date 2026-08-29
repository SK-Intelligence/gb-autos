# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-08-29
- Primary product surfaces: Home, Services, Contact, Blog index, four article routes, 404, global navigation/footer/forms.
- Evidence reviewed: `README.md`, `index.html`, `app.js`, `styles.css`, `assets/logo.svg`, all `assets/web/*` photography, `assets/reference/README.md`, and rendered captures for all routes plus 1440px, 768px, and 390px baselines for the four primary pages.

## Brand
- Personality: Straight-talking, capable, local, energetic, reassuring.
- Trust signals: Established in 2009, open seven days, Feltham storefront, real workshop photography, visible phone/address/hours, broad tyre and mechanical capability.
- Avoid: Generic SaaS polish, blue-purple gradients, glass panels, excessive pills, decorative glow, stock-corporate language, fake luxury, or motorsport styling that overpromises the everyday local service.

## Product goals
- Goals: Make it immediately clear that GB Autos and Tyres handles both tyres and mechanical work; increase phone, WhatsApp, contact-form, and in-person visit intent; make service breadth and location easy to scan; present the business as established and professional.
- Non-goals: Replatforming, replacing local photography, changing integrations, reducing SEO article content, or presenting online booking/payment that does not exist.
- Success signals: Primary CTA is obvious in the opening viewport, phone/address/hours are easy to find, every route feels part of one system, mobile touch targets remain comfortable, and captures have no overflow or broken assets.

## Personas and jobs
- Primary personas: Local Feltham/East Bedfont drivers, commuters, families, tradespeople, and value-conscious motorists.
- User jobs: Diagnose a vehicle need, understand whether the garage offers the right service, call or message quickly, check opening hours/location, and build confidence before visiting.
- Key contexts of use: Mobile roadside or on-the-go lookup, desktop service comparison, directions planning, and maintenance research through blog articles.

## Information architecture
- Primary navigation: Home, Services, Contact, Blog, with a persistent desktop call CTA and focused mobile menu.
- Core routes/screens: `/`, `/services`, `/contact`, `/blog`, `/blog-post`, `/blog-post1`, `/all-you-need-to-know-about-tyres`, `/best-cheap-cars-for-high-reliability`, route aliases, and 404.
- Content hierarchy: Service promise and location first; tyre/mechanical capabilities second; proof and business story third; contact/location action last. Articles retain their full content with improved reading measure and metadata.

## Design principles
- Local proof over marketing decoration: use real workshop, staff, storefront, and tyre imagery as the visual identity.
- Fast confidence: pair every major claim with a useful fact, service category, or direct action.
- Workshop precision: use strong grids, deliberate rules, clipped/small corner radii, truthful service labels, and restrained service-red accents.
- Mobile is task-first: surface call, WhatsApp, hours, and location before secondary storytelling.
- Tradeoffs: Dense credibility is preferred to fashion-led minimalism; motion stays subtle to protect speed and reduce distraction.

## Visual language
- Color: Carbon `#090B0D`, asphalt `#171A1E`, pale workshop concrete `#F5F6F4`, steel-grey surface `#E9ECEE`, white `#FFFFFF`, service red `#C8102E`, deep red `#8C0B20`, bright red `#FF334A` for dark surfaces, muted steel `#59636D`, and light rule `#D2D7DB`. Interactive UI stays within red, white, black, and grey.
- Typography: Local/system-only stack for performance. Condensed display stack (`Arial Narrow`, `Avenir Next Condensed`, `Roboto Condensed`, sans-serif) for headlines and labels; readable humanist stack (`Avenir Next`, `Inter`, `Segoe UI`, sans-serif) for body. Responsive headings use `clamp()` and controlled max widths.
- Spacing/layout rhythm: 4px base; key steps 8, 12, 16, 24, 32, 48, 64, 88, 120. Sections use content-led padding rather than fixed heights.
- Shape/radius/elevation: 2px controls, 6px cards/media, 12px major framed media only. Shadows are rare and structural; thin rules and color blocks do most grouping.
- Motion: 160–240ms transitions for color, transform, and menu reveal. No ornamental scroll animation. Respect `prefers-reduced-motion`.
- Imagery/iconography: Authentic local photography with controlled crop and contrast; the supplied monochrome tyre mark is the sole header logo; monochrome inline line/solid icons support actions; no decorative icon packs.

## Components
- Existing components to reuse: `section-shell`, page templates, route renderer, active nav logic, mobile menu, contact/inquiry forms, social links, WhatsApp CTA.
- New/changed components: Supplied tyre-mark header identity, interactive Google Maps embed with responsive external map/directions actions, utility/service strip, primary/secondary button system, eyebrow labels, split hero, service rows/cards, trust proof panel, contact action rail, article hero/reading layout, mobile sticky action bar.
- Variants and states: Service-red primary, dark secondary, quiet text link; dark/light sections; current nav state; hover/active/focus-visible/disabled form states.
- Token/component ownership: CSS custom properties and shared selectors in `styles.css`; semantic structure in `index.html`; route-specific composition remains in `app.js`.

## Accessibility
- Target standard: WCAG 2.2 AA where applicable.
- Keyboard/focus behavior: Visible high-contrast focus rings; Escape closes menu; no focus traps; all actions remain native links/buttons/controls.
- Contrast/readability: Service red uses white text, deep red is used for small labels on light surfaces, and bright red is reserved for dark surfaces; muted copy meets AA on its surface; text is not placed over photography without a strong scrim/solid backing.
- Screen-reader semantics: Preserve skip link, landmarks, labels, heading order, definitions for location facts, link purpose, and meaningful image alt text.
- Reduced motion and sensory considerations: Disable smooth scrolling and non-essential transitions when reduced motion is requested; do not encode meaning through color alone.

## Responsive behavior
- Supported breakpoints/devices: Wide desktop around 1440px, tablet 768px, mobile 390px; fluid behavior between them.
- Layout adaptations: Desktop uses asymmetric 12-column compositions; tablet simplifies to 6 columns; mobile becomes a single task-led stack with selective content reordering and tighter media ratios.
- Touch/hover differences: Minimum 44px touch targets; hover effects only enhance, never reveal required content; mobile call/message actions stay prominent without obscuring content.

## Interaction states
- Loading: Local imagery retains fixed aspect ratios; map fallback remains visible beneath the iframe.
- Empty: Not applicable to static content.
- Error: Native form validation and accessible 404 remain intact.
- Success: Form submission continues to the visitor's mail client; no false in-page success state.
- Disabled: Disabled controls use reduced contrast without removing the cursor/focus distinction.
- Offline/slow network: Local images and map fallback keep the core site usable; external map/social/WhatsApp links remain progressive enhancements.

## Content voice
- Tone: Direct, practical, local, reassuring, and specific.
- Terminology: Prefer “tyre fitting”, “mechanical repairs”, “servicing”, “Feltham”, “open seven days”, and “call the garage”.
- Microcopy rules: Short action labels; avoid generic aspiration (“journey that matters”), vague claims, and redundant instructions. Minor grammar fixes are allowed without removing SEO-relevant topics.

## Implementation constraints
- Framework/styling system: Dependency-free semantic HTML, CSS, and vanilla JavaScript with Python route fallback.
- Design-token constraints: Extend repo-native CSS variables; add no new styling runtime or dependency.
- Performance constraints: Use local assets, preserve lazy loading, avoid remote font dependencies, and keep JS behavior minimal.
- Compatibility constraints: Preserve all routes/aliases, `data-form` hooks, field names, external URLs, map iframe, active-nav logic, and `.menu-toggle`/`.nav.open` behavior.
- Test/screenshot expectations: Capture every route; compare primary pages at 1440×1200, 768×1024, and 390×844; verify no overflow, broken images, JS errors, broken internal links, duplicate IDs, or menu-state regression.

## Open questions
- [ ] No blocking questions. Online booking is intentionally not invented because no booking integration exists.

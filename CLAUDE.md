Project: DM Engine Landing Page — high-conversion single-page site selling ManyChat automation to coaches, PTs, and wellness practitioners.
Stack: Single self-contained HTML file. Vanilla HTML5 + CSS + JS only. Google Fonts via CDN. No frameworks, no build tools, no external images.
Design tools: Use UI/UX Pro Max for layout composition and visual polish. Use 21dev for code architecture and implementation quality.
Palette: --dark:#0F172A --dark-mid:#1E293B --teal:#0A6B6B --teal-light:#0D8A8A --gold:#C8922A --gold-light:#D4A544 --white:#F8FAFC --grey:#94A3B8 --grey-dark:#475569
Typography: Load distinctive Google Fonts only — NEVER Inter, Roboto, Arial, system-ui. Pair a bold display font with a clean body font. Hero h1 clamp(2.5rem,5vw,4rem).
Read .claude/rules/ before every task. Read references/copy-and-content.md for all page copy — never invent copy, only use what's in that file.
Hero must include a CSS-only iPhone mockup showing a realistic DM conversation with chat bubbles and typing indicator — this is the signature visual element.
Sections in order: sticky nav → hero → problem → how-it-works (3-step flow) → stats (count-up animation) → case study card → package checklist → FAQ accordion → final CTA → footer.
Every section uses Intersection Observer for scroll-triggered fade-in + translateY entrance animations with staggered delays on child elements.
Mobile-first responsive: base 375px, breakpoints 768px and 1024px. All CTA buttons link to https://calendly.com/taif-agency/dm-engine (placeholder).
Visual depth is mandatory: dot-grid or geometric CSS background patterns, radial gradient glows, angled section dividers via clip-path, card shadows with hover lift.
Stats section: large gold numbers with vanilla JS count-up on scroll-enter. FAQ: accordion with aria-expanded, CSS max-height transition, teal toggle icon.
Accessibility: semantic HTML5, one h1, proper heading hierarchy, keyboard navigation, visible focus states, WCAG AA contrast ratios, aria attributes on interactive elements.
Performance: zero render-blocking resources beyond fonts. Entire page must be under 50KB. No images — all visuals are CSS/SVG/HTML constructs.
SEO: include title, meta description, Open Graph tags, and canonical URL. Content from references/copy-and-content.md meta section.
CTA buttons: gold background, scale(1.02) + box-shadow glow on hover, 300ms ease transition. Minimum 48px touch target on mobile.
Anti-slop: no purple gradients, no generic card grids, no stock-photo placeholders, no "transform your business" clichés, no cookie-cutter SaaS aesthetics.
After building, validate: check all sections render, all animations fire, FAQ toggles work, responsive at 375/768/1024, all links point to Calendly.
Output: save as dm-engine.html in project root. File must be immediately deployable to Netlify/Vercel with zero modifications.
When iterating: never overwrite — create versioned copies (dm-engine-v2.html, dm-engine-v3.html). Preserve design system unless explicitly told to change it.

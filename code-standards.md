---
description: Code architecture and quality standards for the single-file HTML landing page. Apply to all code generation and editing.
globs: ["*.html", "*.js"]
---

# Code Standards

## File Structure (in order within the single HTML file)
```
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, OG tags, canonical -->
  <!-- Google Fonts links -->
  <!-- <style> block: CSS variables → reset → base → components → sections → animations → responsive -->
</head>
<body>
  <!-- <nav> sticky header -->
  <!-- <main> wrapping all sections -->
  <!--   <section id="hero"> -->
  <!--   <section id="problem"> -->
  <!--   <section id="how-it-works"> -->
  <!--   <section id="stats"> -->
  <!--   <section id="case-study"> -->
  <!--   <section id="package"> -->
  <!--   <section id="faq"> -->
  <!--   <section id="cta"> -->
  <!-- </main> -->
  <!-- <footer> -->
  <!-- <script> block: intersection observer → counter → accordion → nav scroll -->
</body>
</html>
```

## CSS Organisation
Order CSS custom properties at the top of the style block:
1. Colour variables
2. Font variables
3. Spacing variables
4. Transition/animation variables
5. Reset (box-sizing, margin, padding)
6. Base element styles (body, headings, paragraphs, links, buttons)
7. Layout utilities (.container, .section-padding)
8. Component styles (cards, badges, accordion items)
9. Section-specific styles (#hero, #problem, etc.)
10. Animation keyframes and .visible classes
11. Media queries (768px, then 1024px) — mobile-first, so base styles are mobile

## JavaScript Standards
- All JS in a single `<script>` tag before `</body>`
- Use `DOMContentLoaded` event listener as the entry point
- Intersection Observer: single observer instance, reuse for all animated elements
- Counter animation: use requestAnimationFrame, not setInterval
- FAQ accordion: event delegation on the parent container, not individual listeners
- No global variables — wrap everything in an IIFE or the DOMContentLoaded callback
- Use `const` and `let` only — never `var`

## HTML Standards
- One `<h1>` on the entire page (the hero headline)
- Section headlines are `<h2>`, subsections are `<h3>`
- Every `<section>` has a unique `id` attribute
- All links use `rel="noopener noreferrer"` when targeting `_blank`
- CTA buttons are `<a>` tags styled as buttons (they link externally, not submit forms)
- FAQ questions use `<button>` with `aria-expanded="true/false"`
- FAQ answers wrapped in `<div>` with `aria-hidden` toggled by JS

## Performance Rules
- No `@import` in CSS — use `<link>` tags for fonts
- Preconnect to Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- Font-display: swap on all loaded fonts
- No `!important` unless overriding a third-party style (there shouldn't be any)
- Minimise CSS specificity — prefer class selectors over IDs in CSS (IDs are for JS targeting and section anchoring only)
- No unused CSS — if a style isn't applied to an element on the page, remove it

## Validation Checklist (run mentally before saving)
- [ ] All 10 sections present and in correct order
- [ ] Only one `<h1>` tag
- [ ] All FAQ items toggle correctly
- [ ] Stats counter fires on scroll
- [ ] iPhone mock renders with chat bubbles and typing indicator
- [ ] All CTA buttons link to the Calendly URL
- [ ] Page is readable and navigable at 375px width
- [ ] No horizontal scroll at any breakpoint
- [ ] Colour contrast passes WCAG AA (white on dark, gold on dark)
- [ ] Total file size under 50KB

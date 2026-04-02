---
description: Enforces visual design excellence and prevents generic AI aesthetics. Apply to every file creation and edit involving HTML, CSS, or visual elements.
globs: ["*.html", "*.css"]
---

# Design Excellence Rules

## Banned Patterns (instant rejection)
- Inter, Roboto, Arial, Helvetica, system-ui, sans-serif as primary font
- Purple-to-blue gradient backgrounds
- Evenly-spaced symmetric card grids with identical padding
- White or light grey page backgrounds (this is a dark-theme page)
- Border-radius above 16px on cards (no "pillow" cards)
- Generic hero with centered text and nothing else
- Placeholder text like "Lorem ipsum" or "[Your text here]"
- Any `<img>` tag — all visuals must be CSS, SVG, or HTML constructs

## Required Visual Techniques
Every section must use AT LEAST two of the following:
- CSS background pattern (dot grid, subtle lines, geometric repeating pattern)
- Radial or conic gradient accent (teal or gold at <10% opacity for glow effects)
- Clip-path or angled divider between sections
- Pseudo-element decorative accents (::before/::after for lines, badges, glows)
- Box-shadow layering (multiple shadows for depth, not just one generic shadow)
- Border-left or border-top accent in teal or gold on cards

## The iPhone Mock (Hero)
This is the centrepiece visual. Requirements:
- Realistic device frame: rounded rectangle with notch/dynamic island indicator
- Minimum 4 chat bubbles alternating left/right (user message vs brand reply)
- Brand reply bubbles use teal background, user bubbles use grey-dark
- Include a typing indicator (3 animated dots) on the last brand bubble
- Subtle shadow behind the device for depth
- On mobile: display below the headline, full width. On desktop: float right of the text.

## Colour Usage
- Gold (#C8922A) is ONLY for CTA buttons and stat numbers — never for backgrounds or large areas
- Teal (#0A6B6B) for accents, icons, links, and secondary highlights
- Dark (#0F172A) is the page background — sections alternate between --dark and --dark-mid for visual rhythm
- White (#F8FAFC) for headlines and primary text only
- Grey (#94A3B8) for body text and secondary information

## Animation Quality
- All transitions use cubic-bezier(0.16, 1, 0.3, 1) or similar ease-out curve — never linear, never ease
- Entrance animations: translateY(30px) + opacity(0) → translateY(0) + opacity(1), duration 600ms
- Stagger delays: 100-150ms between sibling elements
- Count-up numbers: duration 2000ms, easeOutExpo curve
- Hover effects: 200-300ms transition, never instant
- No animation on elements above the fold — they should be visible immediately

## Spacing System
Use a consistent 8px grid:
- Section padding: 80px vertical (mobile), 120px vertical (desktop)
- Card padding: 32px
- Gap between cards: 24px
- Between headline and body text: 16px
- Between body text and CTA: 32px

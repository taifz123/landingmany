# Claude Code Prompt: Build the DM Engine Landing Page

## What to Build

Build a single-page, high-conversion landing page for my ManyChat automation service called **"The DM Engine"** — a done-for-you Instagram DM automation system I sell to coaches, personal trainers, and wellness practitioners.

The page must be a single self-contained HTML file with inline CSS and JS. No frameworks, no build step. It should be production-ready, loadable from a static host (Netlify, Vercel, or a custom domain).

---

## Business Context

I'm a Sydney-based solo marketing and growth operator. My core offer is a $5,000/month retainer covering marketing + automation + guaranteed leads. The DM Engine is my **bridge product** — a $1,500–$2,500 one-time setup that gets clients into my ecosystem before they upgrade to the retainer.

**What the DM Engine delivers:**
- 3–5 Instagram keyword trigger flows (e.g., comment "GUIDE" → auto-DM with lead magnet)
- Full ManyChat tag architecture and audience segmentation
- Lead magnet delivery automation
- Calendly booking integration
- Contact hygiene system so clients don't overpay on ManyChat tiers

**My proof / case study:**
- Built the full ManyChat system for Ninja Motion Therapies (movement therapy clinic)
- 34 tags, 7 live keyword flows (MOVE, RESET, PRICE, WORKSHOP, JAW, HIP, NECK)
- Comment-to-DM → lead magnet → Calendly booking pipeline, fully automated
- Brand: Teal #0A6B6B, Gold #C8922A, Dark #0F172A

**Target audience for the landing page:**
- Online coaches, personal trainers, physios, wellness practitioners
- Active on Instagram, posting content, but have ZERO DM automation
- Losing leads every time someone comments and gets no response
- Typically 1,000–10,000 followers, earning $5K–$30K/month

---

## Page Structure & Copy Direction

### Hero Section
**Headline concept:** "Your followers are commenting. Nobody's answering."
**Subhead:** Position the DM Engine as the system that turns every Instagram comment into a booked call — automatically, 24/7.
**CTA:** "Book Your DM Engine Setup" → links to `https://calendly.com/taif-agency/dm-engine` (placeholder)
Include a subtle social proof line: "Built for coaches & wellness brands. Trusted by Ninja Motion Therapies."

### Problem Section
Frame the pain points conversationally:
- "Someone comments 'How much?' on your Reel at 11pm. You reply at 9am. They've already booked with someone else."
- "You're spending hours in DMs copy-pasting the same link."
- "Your lead magnet sits in a Google Drive folder nobody ever sees."
Use the stat: responding within 60 seconds boosts conversions by 391%. Average response time? 42 hours.

### Solution / How It Works
3-step visual flow:
1. **Trigger** — Follower comments a keyword (e.g., "GUIDE", "PRICE", "BOOK") on any post or Reel
2. **Capture** — ManyChat instantly DMs them your lead magnet, prices, or booking link
3. **Convert** — Qualified leads land directly in your Calendly. You just show up.

### Stats / Social Proof Section
Key metrics to display (from the industry report):
- 80–100% open rates on Instagram DMs (vs 17–35% for email)
- 50–60% reply rates (vs <10% for email)
- 391% higher conversion when leads get a response within 60 seconds
- Case study: Amy Porterfield collected 18,000+ emails and $1.4M revenue from 19 chat funnels

### The Ninja Motion Case Study
A compact case study card:
- **Client:** Ninja Motion Therapies (movement therapy clinic)
- **What we built:** 7 keyword flows, 34 audience tags, full comment-to-booking pipeline
- **Result:** Every Instagram comment triggers an instant, personalised DM sequence ending in a Calendly booking
- **Quote placeholder:** "The DM Engine turned our Instagram from a content feed into a booking machine." — Yuhan Harris, Ninja Motion Therapies

### What You Get (Package Breakdown)
Presented as a clean card or checklist:
- 3–5 custom keyword trigger flows
- Full ManyChat tag architecture & segmentation
- Lead magnet delivery automation
- Calendly/booking integration
- Contact hygiene setup (so you never overpay ManyChat)
- 60-minute strategy call to map your flows
- 14-day post-launch support

**Price anchor:** "Starting from $1,500" with a note: "Most setups complete in 5–7 business days."

### FAQ Section
4–5 questions:
- "Do I need a ManyChat account?" → Yes, Pro plan ($29/month). We set it up for you if needed.
- "Will this work for my niche?" → If your clients find you on Instagram and you want more bookings, yes.
- "What if I already have some automation?" → We audit what you have and rebuild what's broken.
- "How fast will I see results?" → Most clients see their first automated booking within the first week of launch.
- "What happens after the 14-day support?" → You can manage it yourself (we train you) or upgrade to our monthly retainer.

### Final CTA Section
Repeat the primary CTA with urgency framing:
"Every day without automation is leads walking past your door."
Button: "Book Your DM Engine Setup"

### Footer
- © 2026 [Agency Name Placeholder]
- Sydney, Australia
- Links: Instagram | Email

---

## Design Direction

### Brand & Aesthetic
- **Primary palette:** Dark background (#0F172A or similar deep navy/charcoal), Teal accents (#0A6B6B), Gold highlights (#C8922A) for CTAs and emphasis
- **Vibe:** Premium, technical, confident. Think "automation engineer" not "marketing bro." Clean, structured, slightly editorial.
- **NO generic AI aesthetics** — no purple gradients, no Inter/Roboto, no cookie-cutter SaaS look

### Typography
- Use distinctive Google Fonts. Suggestions (but choose what works): a strong display font for headlines (e.g., Cabinet Grotesk, Outfit, Syne, General Sans) paired with a clean body font
- Headlines should feel bold and punchy
- Body text should be highly readable at 16–18px

### Layout & Interactions
- Mobile-first responsive design (most of the target audience browses on phone)
- Smooth scroll between sections
- Subtle entrance animations (fade-in on scroll, staggered reveals)
- The 3-step "How It Works" flow should feel visual — use icons, a connecting line, or a simple diagram
- Stats section should use large, bold numbers with supporting text beneath
- FAQ should be accordion-style (click to expand)

### Visual Elements
- Use subtle grid/dot patterns or geometric textures for depth — not flat white backgrounds
- Consider a mock iPhone showing a DM conversation as the hero visual (built in CSS/HTML, not an image)
- Gold (#C8922A) for all primary CTA buttons with hover state
- Teal (#0A6B6B) for secondary accents, links, icons

---

## Technical Requirements
- Single HTML file, fully self-contained
- Google Fonts loaded via `<link>` tags
- CSS custom properties for the full colour system
- Smooth scroll behaviour
- Intersection Observer for scroll-triggered animations
- Accordion FAQ with vanilla JS
- Semantic HTML5 (`<header>`, `<section>`, `<footer>`, etc.)
- Accessible: proper heading hierarchy, alt text, focus states, colour contrast
- Fast: no heavy libraries, no images to load (all visual elements built in CSS/HTML)
- Meta tags for SEO and social sharing (Open Graph)

---

## Output
Save the final HTML file and present it. The page should be ready to deploy as-is.

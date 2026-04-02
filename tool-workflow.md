---
description: Workflow rules for using UI/UX Pro Max and 21dev in combination. Apply when building or iterating on the landing page.
globs: ["*.html"]
---

# Tool Workflow

## Build Sequence
Follow this order for every build or major iteration:

1. **Read CLAUDE.md** — refresh project context and constraints
2. **Read all rules/** — load design, code, and anti-slop directives
3. **Read references/copy-and-content.md** — load all page copy (never invent copy)
4. **UI/UX Pro Max first** — use it for layout decisions, visual composition, spacing, and design system enforcement. Let it drive the aesthetic direction.
5. **21dev second** — use it for clean implementation, code architecture, performance optimisation, and structural correctness.
6. **Self-review** — validate against the checklist in code-standards.md before saving

## Iteration Protocol
- Never overwrite the current version. Always create a new versioned file (dm-engine-v2.html, etc.)
- When the user asks for a change, identify whether it's a design change (UI/UX Pro Max leads) or a code/structure change (21dev leads)
- For copy changes: update references/copy-and-content.md FIRST, then rebuild the affected section
- After every iteration, mentally run through the validation checklist

## Conflict Resolution
If UI/UX Pro Max and 21dev produce conflicting guidance:
- For visual/aesthetic decisions → UI/UX Pro Max wins
- For performance/accessibility/code structure → 21dev wins
- For both visual AND functional concerns → prioritise the user's explicit request, then accessibility, then visual polish

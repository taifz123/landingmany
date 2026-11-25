# MCtoYou studio website

- Plain HTML, CSS and a progressively enhanced navigation menu. No package install or application build is required. GitHub Pages publishes `main` from `/` using the existing `CNAME`.
- Keep the homepage, `studies/*.html`, `privacy.html` and `terms.html` usable without JavaScript. Preview switchers use native radio controls; service descriptions use native `details` elements.
- Keep contact links pointed at `+61405500024` and `support@mctoyou.com`. The quote action starts a conversation; there is no server-side form or customer database.
- `_artwork/` holds the source photographs and editable concept layouts, not public routes. Desktop screens are exported at 1120 × 720, phone screens at 392 × 730. Keep exported WebP artwork and fonts self-hosted.
- To check a release, serve the public HTML and assets with a static HTTP server. Test anchors, the mobile menu with Escape, study previews with arrow keys, call/text targets, and reflow from 320px upward. Keep sitemap entries and social previews in sync with the public routes.

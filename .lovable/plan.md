
## Stefan Maaß Solaranlagen — Unternehmens-Website

Moderne, sachliche Multi-Page-Website für gewerbliche PV-Großanlagen. Deutschsprachig, SEO-optimiert, statisch buildbar (Vite) für späteres Self-Hosting auf Hetzner/nginx.

### Design-System
- **Farben**: Solar-Blau `#0B3D5C` (primär), Sonnen-Gelb `#F5B51A` (Akzent), Grün `#3A8A3A` (Nachhaltigkeit), helles Off-White als Background, viel Weißraum
- **Typografie**: Inter, klare Hierarchie, große Headlines
- **Stil**: Sanfte Schatten, `rounded-2xl`, Lucide-Icons, sachlich-ingenieurnah — keine Animationsspielereien
- Sticky Header (Logo links, Nav rechts), umfangreicher Footer

### Routen (separate Files für SSR/SEO, jede mit eigenem `head()`)
1. `/` — **Startseite**: Hero mit Drohnen-Foto-Platzhalter + 2 CTAs, Kennzahlen-Sektion (50+ Projekte, ~8 MWp, ~6.500 MWh/a — aus Referenzen berechnet), Zitat-Block Stefan Maaß, 5 Leistungs-Kacheln, 3–4 Highlight-Referenzen, Abschluss-CTA
2. `/leistungen` — 5 Service-Karten mit Lucide-Icons (Search, FileCheck, Wrench, Settings, Sun) und vollständigen Texten
3. `/referenzen` — Filterbares Grid (16 Projekte aus Liste), Filter nach Jahr & Größenklasse (≤250 / 250–500 / 500+ kWp), Summenzeile oben (Gesamtprojekte, MWp, MWh/a)
4. `/news` — Blog-Stil, erster Artikel „Elektrifizierung der Firmen-Flotte", CMS-freundliche Datenstruktur (TypeScript-Array, später austauschbar)
5. `/kontakt` — Formular (Name, Firma, E-Mail, Telefon, Nachricht, DSGVO-Checkbox, Honeypot) mit Zod-Validierung, Stammdaten-Block, OpenStreetMap-Embed (iframe, kein Tracking)
6. `/impressum` & `/datenschutz` — Platzhalter-Seiten mit Grundgerüst

### Komponenten-Struktur
- `components/layout/` — Header (sticky, mobile Burger), Footer (Leistungen, Kontakt, BSW-Logo-Platzhalter, REACT-EU-Hinweis)
- `components/sections/` — Hero, StatsGrid, ServiceCard, ProjectCard, QuoteBlock, CTASection
- `data/projects.ts` — Referenzliste als typisiertes Array (Single Source of Truth für Referenzen + Startseiten-Kennzahlen)
- `data/news.ts` — News-Artikel als Array

### Daten & Formular
- Kontaktformular: Client-seitige Zod-Validierung, Submit als `mailto:`-Fallback + vorbereiteter Stub für späteren API-Endpoint, Honeypot-Feld gegen Bots
- Keine Tracking-Cookies, keine externen Skripte ohne Consent

### Technisches / SEO
- Per-Route `head()` mit Title, Description, OG-Tags (deutsche Texte pro Seite)
- `robots.txt` & `sitemap.xml` (statisch in `public/`)
- Bilder als beschriftete Platzhalter mit semantischen `alt`-Texten
- Lucide-Icons, Tailwind-Tokens in `styles.css` (Solar-Blau, Sonnen-Gelb, Grün als CSS-Variablen)
- Responsive Breakpoints, Tastatur-Fokus, ausreichende Kontraste (a11y)
- Reiner Frontend-Build → kompatibel mit `vite build` + nginx-Hosting

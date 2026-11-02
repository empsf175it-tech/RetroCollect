# RetroCollect — Vintage Collectibles Archive

> *"Keep the past in your hands."*

**RetroCollect** is a single-page, dependency-free vintage collectibles dealer and curatorial archive website crafted with plain **HTML5, CSS3, and vanilla ES6+ JavaScript**.

---

## 1. Quick Start (No Build Step Required)

1. **Direct Open:** Double-click `index.html` in your file explorer to open the complete site directly in Chrome, Edge, Firefox, or Safari.
2. **Optional Local Static Server:**
   ```bash
   python -m http.server 8080
   # Then visit http://localhost:8080
   ```

---

## 2. Project Structure

```text
RetroCollect/
├── index.html          # Single-page archive markup, inline SVG monogram, JSON-LD SEO schema & modals
├── assets/
│   ├── css/
│   │   └── style.css       # "Antique Archive" CSS custom properties, 3D card layers, responsive layout & motion
├── js/
│   ├── tilt.js         # Local zero-dependency 3D card tilt + brass specular glare + touch/reduced-motion support
│   └── main.js         # Catalogue filter/search/sort, radio-dial scrubber, modals, lightbox, forms & Vault dashboard
├── images/             # 34 unique local WebP assets (hero, 10 lots, 8 eras, 3 stories, 10 gallery plates, workshop, consign)
├── favicon.svg         # Custom vector RC price-tag / keyhole / dial monogram
├── sitemap.xml         # Search engine XML sitemap
├── robots.txt          # Crawler directives
└── README.md           # Documentation & customisation guide
```

---

## 3. Customising the "Antique Archive" Palette & Typography

Open `css/style.css` and edit the `:root` CSS variables at the top of the file:

```css
:root {
  --walnut: #1B120C;       /* Primary dark background */
  --espresso: #2A1B12;     /* Cards & panels on dark sections */
  --parchment: #F2E6CC;    /* Light editorial sections & primary text on dark */
  --cream: #FBF5E6;        /* Cards on light sections & index cards */
  --brass: #C9963B;        /* Primary accent, borders & buttons */
  --amber-glow: #F0B556;   /* Hover glows, active highlights & dial needles */
  --oxblood: #7C1F2C;      /* Secondary accent, Sold tags & wax-seal highlights */
  --verdigris: #2E6E69;    /* Tertiary accent & Available status tags */
  --smoke: #8C7B68;        /* Muted archival text & rules */
}
```

- **Default Theme:** `Night Archive` (`data-theme="night"` on `<html>`). Visitors can toggle between **Night Archive** and **Day Archive** using the floating brass lamp button in the bottom-right utility dock.

---

## 4. Customising Catalogue Items, Stories & Condition Grades

1. **Catalogue Lots:**
   - Update the `ARCHIVE_ITEMS` array in `js/main.js` (lines 12–255) to adjust prices (`priceUSD` / `priceINR`), provenance paragraphs, bench specifications, or availability (`Available`, `Reserved`, `Sold`).
   - Mirror card title/summary/image updates in the `#products-grid` `<article class="rc-card product-card">` elements inside `index.html` (and JSON-LD `ItemList` in `<head>`) for static SEO parity.
2. **Gallery Lightbox Plates:**
   - Edit `GALLERY_PLATES` in `js/main.js` and the corresponding `<figure class="gallery-item">` figures in `#gallery` (`index.html`).

---

## 5. Placeholder Contact Details & Domain (Replace Before Production)

All contact details are consistent across `index.html` (Enquire card, JSON-LD schema, Footer, Privacy Policy) and `js/main.js`. Search and replace the following placeholders before publishing live:

| Item | Placeholder Value Used | Locations |
|---|---|---|
| **Production URL** | `https://retrocollect-archive.com/` | `index.html` (canonical, OG, JSON-LD), `sitemap.xml`, `robots.txt` |
| **Curator Email** | `curator@retrocollect-archive.example` | `index.html`, `js/main.js` (`mailto:` fallback) |
| **Telephone** | `+44 (0)20 7946 0821` / `+44-20-7946-0821` | `index.html` (Enquire card & JSON-LD) |
| **Reading-Room Address** | `14 Mercer Passage, Clerkenwell, London EC1R 0AT, UK` | `index.html` (Enquire card, SVG map, Footer, JSON-LD) |

---

## 6. Connecting a Live Form Backend & Real Authentication

### Enquiry & Newsletter Forms
Currently, `#enquiry-form` and `#newsletter-form` perform full client-side validation, store entries in `localStorage` (`rc_archive_enquiries`, `rc_archive_newsletter`) so they appear immediately inside **Collector's Vault → My Enquiries**, and offer a one-click `mailto:` copy link.
- **Formspree / Custom API:** In `js/main.js` inside `initForms()`, replace the `setTimeout(...)` block in `form.addEventListener('submit', ...)` with a `fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })` call.
- **EmailJS:** Load the EmailJS SDK locally and call `emailjs.sendForm(...)` inside the same validated submit handler.

### Collector's Vault Authentication & Dashboard
Currently, `initVaultAndDashboard()` in `js/main.js` provides client-side session persistence via `localStorage` (`rc_archive_user`, `rc_archive_accounts`, `rc_archive_wishlist`) plus an **Instant Demo Collector Sign-In** option for immediate previewing.
- To connect **Supabase Auth**, **Firebase Auth**, or **Auth0**, replace the `authForm` submit handler and `performLogout()` in `js/main.js` with your provider's sign-in/sign-up SDK methods and sync `state.wishlist` and `state.enquiries` with your user database table.


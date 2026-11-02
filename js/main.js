/**
 * RetroCollect — Master Application Controller (main.js)
 * Vanilla ES6+, zero external dependencies.
 * Handles: Preloader, Scroll-Spy, Custom Cursor, Magnetic Buttons, Radio-Dial Era Scrubber,
 * Collection Filtering/Search/Sort/Currency, Condition Scale Gauge, Product Story Modal,
 * Gallery Filter & Lightbox (Keyboard + Swipe), Testimonials Carousel, FAQ Accordion,
 * Validated Enquiry & Newsletter Forms, LocalStorage Collector's Vault Auth & 4-Tab Dashboard.
 */
(function () {
  'use strict';

  /* ==========================================================================
     1. CURATED ARCHIVE CATALOGUE DATA (10 AUTHENTIC LOTS + STORIES + SPECS)
     ========================================================================== */
  const ARCHIVE_ITEMS = [
    {
      id: 'radio-1950s',
      lot: 'LOT 0104',
      title: '1954 "Sovereign" Marbled Bakelite Tube Radio',
      era: '1950s',
      year: 1954,
      category: 'Audio & Radio',
      condition: 'Near Mint',
      status: 'Available',
      priceUSD: 680,
      priceINR: 56800,
      addedOrder: 10,
      image: 'images/radio-1950s.webp',
      alt: '1954 Sovereign swirled cream and walnut Bakelite tabletop vacuum tube radio with glowing amber tuning dial',
      maker: 'Helvetia Acoustic Works',
      country: 'Switzerland',
      material: 'Swirled phenolic Bakelite, woven brass-thread cloth, bevelled glass',
      dimensions: '31.5 × 19.0 × 16.5 cm',
      weight: '3.4 kg',
      workingStatus: 'Fully Working · Recapped & Isolation-Tested',
      originality: 'All-original cabinet, knobs & dial glass; conservation-grade paper capacitors',
      story: [
        'Moulded in Basel during the autumn of 1954, each "Sovereign" cabinet emerged unique depending on how the unpigmented ivory and dark walnut phenolic resins swirled inside the heated hydraulic press. No two radios share the same marbling.',
        'This example spent nearly six decades in the study of a retired Lausanne horologist, shielded from direct sunlight—preserving the butterscotch lustre that UV exposure usually dulls. When switched on, its five miniature glass valves warm over four quiet seconds before bathing the rotary dial in honeyed amber light.',
        'On our conservation bench, perished wax coupling capacitors were discreetly replaced inside their original cardboard sleeves, and a concealed 3.5 mm auxiliary bridge was fitted cleanly without drilling a single millimetre of Bakelite.'
      ]
    },
    {
      id: 'camera-1962',
      lot: 'LOT 0112',
      title: '1962 Medium-Format Folding Bellows Camera',
      era: '1960s',
      year: 1962,
      category: 'Cameras',
      condition: 'Excellent',
      status: 'Available',
      priceUSD: 540,
      priceINR: 45100,
      addedOrder: 9,
      image: 'images/camera-1962.webp',
      alt: '1962 folding medium-format bellows camera in pebble-grain black leather with chrome struts and brass shutter ring',
      maker: 'Optische Werkstätten Dresden-Süd',
      country: 'Germany',
      material: 'Pebble-grain goat leather, pleated kidskin bellows, chromed brass',
      dimensions: '16.2 × 10.4 × 4.6 cm (folded)',
      weight: '0.78 kg',
      workingStatus: 'Fully Working · Leaf Shutter Timed 1s–1/500s',
      originality: '100% factory-original optics, bellows, struts & pressure plate',
      story: [
        'Long before autofocus bricks filled camera bags, a 6×6 cm medium-format folding camera slipped effortlessly into a tweed overcoat pocket—then sprang open at the press of a nickel button with the theatrical precision of a Swiss drawbridge.',
        'Sourced from an architectural photographer’s estate in Antwerp, this 1962 piece retains crisp corner pleating across its black kidskin bellows, darkroom pinhole-tested under high-output fibre illumination with zero light leaks.',
        'Its four-element coated 75 mm f/3.5 lens renders highlights with painterly roll-off, while the mechanical leaf shutter whispers cleanly even at its slow one-second escapement gear.'
      ]
    },
    {
      id: 'phone-1970s',
      lot: 'LOT 0119',
      title: '1973 Ochre Sculptural Rotary Dial Telephone',
      era: '1970s',
      year: 1973,
      category: 'Telephony & Office',
      condition: 'Near Mint',
      status: 'Available',
      priceUSD: 320,
      priceINR: 26700,
      addedOrder: 8,
      image: 'images/phone-1970s.webp',
      alt: '1973 mustard-ochre and warm ivory sculptural rotary dial desktop telephone with coiled handset cord',
      maker: 'Nordic Tele-Industri AB',
      country: 'Sweden',
      material: 'High-impact dyed ABS polymer, acrylic finger wheel, twin brass bells',
      dimensions: '22.5 × 20.0 × 13.5 cm',
      weight: '1.65 kg',
      workingStatus: 'Fully Working · Mechanical Governor & Twin-Bell Ringer',
      originality: 'All-original housing, coiled cord & brass chime domes; modular line adapter included',
      story: [
        'The early 1970s transformed domestic telephony from sombre black utility hardware into warm, domestic sculpture. Finished in harvest mustard-ochre paired with bone ivory, this 1973 tabletop model epitomises Scandinavian ergonomic optimism.',
        'Turn the heavy clear acrylic finger wheel to zero and release: the centrifugal brass governor purrs back at an exact ten pulses per second, culminating in the unmistakable mechanical click that touchscreen glass obliterated.',
        'Inside the Weighted base sit two tuned solid-brass bell gongs struck by an electromagnetic clapper—delivering a rich, resonant ring rather than an electronic chirp.'
      ]
    },
    {
      id: 'robot-1948',
      lot: 'LOT 0126',
      title: '1948 Tin-Litho "Mechano-7" Wind-Up Robot',
      era: '1940s',
      year: 1948,
      category: 'Toys & Games',
      condition: 'Good',
      status: 'Reserved',
      priceUSD: 1450,
      priceINR: 121000,
      addedOrder: 7,
      image: 'images/robot-1948.webp',
      alt: '1948 vintage painted tin-litho clockwork wind-up toy robot in verdigris and oxblood with brass key on parchment',
      maker: 'Kōbe Metal Toy Manufactory',
      country: 'Japan',
      material: 'Stamped lithographed tinplate, coiled spring steel, turned brass key',
      dimensions: '21.0 × 11.5 × 8.5 cm',
      weight: '0.42 kg',
      workingStatus: 'Fully Working · Strong Mainspring & Pin-Walker Gait',
      originality: '100% original lithographed tin, crimped tabs & period brass winding key (never repainted)',
      story: [
        'Stamped from thin sheets of lithographed tinplate in 1948—when workshops ingeniously repurposed surplus metal presses into imaginative atomic-age playthings—early pin-walking clockwork robots survived childhood in vanishingly small numbers.',
        'Discovered wrapped in tissue inside an attic cedar chest in Osaka, "Mechano-7" wears honest, earned edge patina along its verdigris shoulders and oxblood boots, proving its untouched factory lithography.',
        'Four gentle turns of the captive brass side key set the internal escapement chattering as its articulated pincer arms swing in stately rhythm.'
      ]
    },
    {
      id: 'typewriter-1936',
      lot: 'LOT 0131',
      title: '1936 Glass-Key Portable Mechanical Typewriter',
      era: '1930s',
      year: 1936,
      category: 'Telephony & Office',
      condition: 'Excellent',
      status: 'Available',
      priceUSD: 790,
      priceINR: 66000,
      addedOrder: 6,
      image: 'images/typewriter-1936.webp',
      alt: '1936 gloss black enamel portable mechanical typewriter with four stepped rows of nickel-rimmed glass keys',
      maker: 'Thüringer Schreibmaschinen-Werke',
      country: 'Germany',
      material: 'Baked black japanning enamel, cast iron frame, glass keytops, nickel steel',
      dimensions: '31.0 × 32.5 × 13.2 cm',
      weight: '5.2 kg',
      workingStatus: 'Fully Working · Fresh Silk Twin-Spool Ribbon & Resurfaced Platen',
      originality: 'Original baked enamel, nickel key rings, margin stops & carrying baseboard',
      story: [
        'Built in 1936 for foreign correspondents, novelists, and steamer-trunk travellers, this low-slung portable typewriter balances architectural Streamline Moderne curves with four stepped banks of jewel-like glass keytops.',
        'Each circular key is framed in spun nickel silver over ivory celluloid legends, sparing a writer’s fingertips from ink stain while producing a crisp, authoritative elite-pitch serif impression on cotton rag bond.',
        'Our workshop ultrasonically cleaned the entire forty-four-bar segment basket, aligned upper- and lower-case baselines, and fitted fresh black-and-oxblood woven silk ribbon on its original metal spools.'
      ]
    },
    {
      id: 'recordplayer-1965',
      lot: 'LOT 0138',
      title: '1965 "Riviera" Two-Tone Suitcase Record Player',
      era: '1960s',
      year: 1965,
      category: 'Audio & Radio',
      condition: 'Excellent',
      status: 'Available',
      priceUSD: 490,
      priceINR: 40900,
      addedOrder: 5,
      image: 'images/recordplayer-1965.webp',
      alt: '1965 two-tone saddle-tan and cream suitcase portable record player open with black vinyl LP on platter',
      maker: 'Ateliers Sonores de Lyon',
      country: 'France',
      material: 'Birch ply case, saddle-tan & cream leatherette, brushed chrome, brass clasps',
      dimensions: '38.5 × 30.5 × 16.8 cm',
      weight: '4.9 kg',
      workingStatus: 'Fully Working · 33/45/78 RPM Idler Serviced & New Diamond Stylus',
      originality: 'Original leatherette, brass suitcase latches, speaker cloth & counterbalance arm',
      story: [
        'In the summer of 1965, music left the mahogany console behind and travelled to Normandy terraces and Left Bank student flats inside trim, brass-latched leatherette suitcases like the "Riviera".',
        'Unclip the twin front clasps and raise the hinged lid—housing an elliptical alnico paper-cone loudspeaker—to reveal a four-speed turntable that spins 7-inch singles and 12-inch LPs with warm midrange intimacy.',
        'The rubber idler wheel has been precision-trued for rock-steady pitch stability, and a compliant diamond microgroove stylus ensures modern and vintage pressings track gently.'
      ]
    },
    {
      id: 'pocketwatch-1920s',
      lot: 'LOT 0142',
      title: '1924 Guilloché Hunter-Case Brass Pocket Watch',
      era: '1920s',
      year: 1924,
      category: 'Timepieces',
      condition: 'Near Mint',
      status: 'Available',
      priceUSD: 960,
      priceINR: 80200,
      addedOrder: 4,
      image: 'images/pocketwatch-1920s.webp',
      alt: '1924 antique solid brass hunter-case pocket watch open on dark velvet with engine-turned guilloche dial and curb chain',
      maker: 'Maison Horlogère du Jura',
      country: 'Switzerland',
      material: 'Engine-turned solid horological brass, flame-blued steel hands, mineral crystal',
      dimensions: '51 mm case diameter · 31 cm Albert curb chain',
      weight: '0.115 kg',
      workingStatus: 'Fully Working · 17-Jewel Lever Movement Timed to ±14 sec/day',
      originality: 'All-original movement bridges, crown, hinged hunter lid & T-bar Albert chain',
      story: [
        'Depressing the fluted crown-pendant releases the spring-loaded front hunter cover to reveal a silvered engine-turned barleycorn guilloché dial and slender flame-blued Breguet-style hands.',
        'Crafted in the Jura valleys in 1924, its 17-jewel manual-wind anchor movement beats at a tranquil 18,000 vibrations per hour, visible when the inner dust cuvette is hinged open by a watchmaker.',
        'Accompanied by its heavy period curb-link waistcoat chain and T-bar toggle, the movement has been disassembled, cleaned in horological baths, and freshly oiled with synthetic jewel lubricants.'
      ]
    },
    {
      id: 'sign-1955',
      lot: 'LOT 0147',
      title: '1955 Porcelain-Enamel Roadster Coachwork Plaque',
      era: '1950s',
      year: 1955,
      category: 'Advertising & Signs',
      condition: 'Good',
      status: 'Sold',
      priceUSD: 820,
      priceINR: 68500,
      addedOrder: 3,
      image: 'images/sign-1955.webp',
      alt: '1955 round fired porcelain-enamel automotive coachwork plaque featuring winged oxblood roadster and golden sunburst on aged brick',
      maker: 'Émaillerie Industrielle du Nord',
      country: 'Belgium',
      material: 'Heavy-gauge steel, kiln-fired vitreous porcelain enamel, brass grommets',
      dimensions: '46.0 cm diameter × 1.8 cm relief convex dish',
      weight: '2.3 kg',
      workingStatus: 'Cosmetic Display · Stabilised Rim Patina & Brass Hanging Eyelets',
      originality: '100% original kiln-fired multi-stencil enamel; zero touch-ups or clearcoats',
      story: [
        'Before screen-printed aluminium and vinyl decals existed, European coachbuilders and touring clubs commissioned kiln-fired vitreous porcelain signs—each colour stencilled separately in powdered glass and fused at 820 °C.',
        'Run your fingertips across this convex 1955 plaque and you can feel the distinct stepped ridges where deep verdigris teal meets cream sunburst rays and rich oxblood coachwork.',
        'Recently acquired by a private garage archive in Milan, we retain its catalogue entry so collectors seeking comparable mid-century porcelain emblems may register a sourcing request.'
      ]
    },
    {
      id: 'walkman-1985',
      lot: 'LOT 0153',
      title: '1985 Brushed Alloy Personal Cassette Player',
      era: '1980s',
      year: 1985,
      category: 'Audio & Radio',
      condition: 'Mint',
      status: 'Available',
      priceUSD: 610,
      priceINR: 51000,
      addedOrder: 2,
      image: 'images/walkman-1985.webp',
      alt: '1985 brushed champagne-silver personal cassette player alongside ultra-light metal headband headphones with orange foam pads',
      maker: 'Shinagawa Precision Audio Co.',
      country: 'Japan',
      material: 'Anodised champagne-silver aluminium, gunmetal brass chassis, spring-steel phones',
      dimensions: '10.9 × 7.8 × 2.4 cm',
      weight: '0.26 kg',
      workingStatus: 'Fully Working · Quartz-Locked Capstan, New Drive Belt & Azimuth Calibrated',
      originality: 'Complete with period spring-steel headphones (fresh archival orange foam pads)',
      story: [
        'By 1985, Japanese miniaturisation engineers had distilled the personal stereo down to a case barely larger than the chrome-dioxide cassette tape spinning inside its smoked glass window.',
        'Machined from champagne-anodised aluminium with crisp mechanical feather-touch transport keys, this unit delivers astonishing wow-and-flutter stability alongside selectable CrO2 / Metal tape bias.',
        'Paired with ultra-light stainless headband headphones fitted with fresh open-cell sunset-orange acoustic cushions, it captures the tactile magic of sequencing a ninety-minute mixtape.'
      ]
    },
    {
      id: 'console-1990',
      lot: 'LOT 0161',
      title: '1990 Dot-Matrix Pocket Handheld Console',
      era: '1990s',
      year: 1990,
      category: 'Toys & Games',
      condition: 'Near Mint',
      status: 'Available',
      priceUSD: 430,
      priceINR: 35900,
      addedOrder: 1,
      image: 'images/console-1990.webp',
      alt: '1990 matte putty-grey pocket handheld electronic game console with olive glass screen and maroon action buttons',
      maker: 'Kyōto Micro-Amusement Labs',
      country: 'Japan',
      material: 'Unbleached putty-grey ABS casing, reflective olive STN LCD, silicone pads',
      dimensions: '14.8 × 9.0 × 3.2 cm',
      weight: '0.22 kg',
      workingStatus: 'Fully Working · Crisp Zero-Line-Out Original Dot-Matrix Screen & Clean Contacts',
      originality: 'Un-yellowed original shell, original battery door & untouched glass lens',
      story: [
        'Few industrial objects of the late twentieth century achieved such instant silhouette recognition: warm putty-grey ABS plastic, a single asymmetrically radiused lower-right corner, and twin plum-oxblood buttons set on a thumb-friendly diagonal.',
        'Unmodified examples with zero missing vertical pixel columns on the olive-green reflective dot-matrix LCD and corrosion-free AA battery springs have become prized modern design artefacts.',
        'Inspected under magnification, its contrast wheel, headphone amp capacitor bank, and elastomer conductive pads respond with day-one crispness.'
      ]
    }
  ];

  /* ==========================================================================
     2. CONDITION SCALE DATA (6 ARCHIVAL GRADES)
     ========================================================================== */
  const CONDITION_GRADES = {
    mint: {
      title: 'Grade I · Mint (98–100%)',
      percent: 100,
      cosmetics: 'Time-capsule preservation. Unblemished factory finish, crisp lettering, zero UV fade or case crazing.',
      working: 'Fully Working — calibrated on our bench to original factory tolerances.',
      originality: '100% factory-original components down to screws, feet, and finish.',
      ephemera: 'Includes original maker carton, instruction booklet, or inspection tag where noted.'
    },
    'near-mint': {
      title: 'Grade II · Near Mint (90–97%)',
      percent: 88,
      cosmetics: 'Exceptional cabinet display quality; only microscopic handling marks visible under a 5× loupe.',
      working: 'Fully Working — serviced, lubricated, and safety-tested for regular enjoyment.',
      originality: 'All-original exterior; discreet internal conservation parts (e.g., safety capacitors or drive belt).',
      ephemera: 'Accompanied by RetroCollect archival provenance certificate & care folio.'
    },
    excellent: {
      title: 'Grade III · Excellent (80–89%)',
      percent: 76,
      cosmetics: 'Gentle, attractive age patina consistent with careful domestic ownership; clean dials and intact trim.',
      working: 'Fully Working — mechanically sound and thoroughly bench-verified.',
      originality: 'Original primary parts with period-correct conservation servicing documented in report.',
      ephemera: 'Includes full bench inspection sheet and tailored operating notes.'
    },
    good: {
      title: 'Grade IV · Good (65–79%)',
      percent: 60,
      cosmetics: 'Honest, characterful wear—light tin-litho edge rub or porcelain rim chips—never masked by modern paint.',
      working: 'Fully Working or Cosmetic Display (explicitly stated on every lot card).',
      originality: 'Untouched historical surface integrity prized by purist collectors.',
      ephemera: 'Documented condition photography of every angle archived with lot.'
    },
    fair: {
      title: 'Grade V · Fair (45–64%)',
      percent: 42,
      cosmetics: 'Noticeable surface aging, brass oxidation, or leather dryness; structurally complete silhouette.',
      working: 'Cosmetic Only or Untested Display — sold strictly as static study piece.',
      originality: 'Original core assembly; minor trim wear disclosed item-by-item.',
      ephemera: 'Supplied with conservation stabilisation guidance.'
    },
    restoration: {
      title: 'Grade VI · Restoration Piece (25–44%)',
      percent: 25,
      cosmetics: 'Rare workshop project lot requiring cabinet, clockwork, or electronic overhaul.',
      working: 'Untested / Non-Working — ideal for skilled horologists and valve technicians.',
      originality: 'Unmolested barn- or attic-find state; all known missing parts itemised.',
      ephemera: 'Includes schematic notes where available from our library.'
    }
  };

  /* ==========================================================================
     3. GALLERY PLATES METADATA (FOR LIGHTBOX)
     ========================================================================== */
  const GALLERY_PLATES = [
    { src: 'images/gallery-01.webp', cat: 'Macro Details', plate: 'Plate 01 / 10', caption: 'Warm tungsten glow along a bevelled 1950s glass tuning scale and brass indicator needle.' },
    { src: 'images/gallery-02.webp', cat: 'Macro Details', plate: 'Plate 02 / 10', caption: 'Micro-knurled solid brass and ribbed Bakelite gain control showing sixty years of gentle touch.' },
    { src: 'images/gallery-03.webp', cat: 'Collector Displays', plate: 'Plate 03 / 10', caption: 'Afternoon sunbeams crossing floor-to-ceiling walnut archive shelves of folding cameras and brass optics.' },
    { src: 'images/gallery-04.webp', cat: 'Collector Displays', plate: 'Plate 04 / 10', caption: 'Archival kraft-sleeved 12-inch pressings beneath a machined solid-brass turntable record weight.' },
    { src: 'images/gallery-05.webp', cat: 'Macro Details', plate: 'Plate 05 / 10', caption: 'Waxed-linen saddle stitching, chestnut leather patina, and solid brass roller buckle on a 1958 field case.' },
    { src: 'images/gallery-06.webp', cat: 'Macro Details', plate: 'Plate 06 / 10', caption: 'Kiln-fired vitreous porcelain enamel layers—oxblood, cream, and verdigris—around a brass mounting grommet.' },
    { src: 'images/gallery-07.webp', cat: 'Collector Displays', plate: 'Plate 07 / 10', caption: 'Inside Vault Cabinet IV: horological movements and optical brass instruments on oxblood baize.' },
    { src: 'images/gallery-08.webp', cat: 'Conservation Bench', plate: 'Plate 08 / 10', caption: 'Custom-cut charcoal foam crating, acid-free tissue, flax twine, and wax seal prepared for insured courier.' },
    { src: 'images/gallery-09.webp', cat: 'Conservation Bench', plate: 'Plate 09 / 10', caption: 'Bevelled inspection glass and watchmaker’s loupe resting atop our cloth-bound provenance ledger.' },
    { src: 'images/gallery-10.webp', cat: 'Conservation Bench', plate: 'Plate 10 / 10', caption: 'Natural sable brush lifting dust from involute brass gear teeth on our horological bench.' }
  ];

  /* ==========================================================================
     4. TESTIMONIALS DATA (5 HAND-STAMPED COLLECTOR INDEX CARDS)
     ========================================================================== */
  const TESTIMONIALS = [
    {
      ref: 'INDEX CARD · REF C-204',
      quote: '“The 1954 Bakelite tube radio arrived in Edinburgh double-crated like a museum loan. Every capacitor note in the condition report was spot-on, and that warm amber dial transforms our study every evening.”',
      author: 'Alistair MacLeod · Edinburgh, Scotland',
      lot: 'Acquired: 1950s Marbled Bakelite Tube Radio'
    },
    {
      ref: 'INDEX CARD · REF C-219',
      quote: '“Finding tin-litho clockwork robots that haven’t been touched up with modern hobby paint is nearly impossible. RetroCollect’s macro grading photos gave me complete confidence before reserving.”',
      author: 'Kenji Takahashi · Kyoto, Japan',
      lot: 'Acquired: Late-1940s Clockwork Tin Automaton'
    },
    {
      ref: 'INDEX CARD · REF C-231',
      quote: '“As a mechanical watch collector, I rarely see dealers publish honest timegrapher rates and cuvette photos upfront. My 1920s Jura hunter pocket watch keeps remarkable time on my desk stand.”',
      author: 'Clara von Meyenburg · Zürich, Switzerland',
      lot: 'Acquired: 1924 Guilloché Brass Pocket Watch'
    },
    {
      ref: 'INDEX CARD · REF C-246',
      quote: '“I used their Request-a-Piece service to hunt down an un-yellowed 1985 brushed metal cassette player. Three weeks later they found a Mint example and calibrated the azimuth to perfection.”',
      author: 'Marcus Vance · Chicago, USA',
      lot: 'Acquired: 1985 Brushed Alloy Personal Stereo'
    },
    {
      ref: 'INDEX CARD · REF C-258',
      quote: '“Consigning my late grandfather’s camera shelf through RetroCollect felt respectful and transparent. They researched every serial batch and placed each camera with appreciative fellow enthusiasts.”',
      author: 'Eleanor Sterling · Melbourne, Australia',
      lot: 'Consigned: 1950s–1960s Folding Camera Collection'
    }
  ];

  /* ==========================================================================
     5. STATE & LOCALSTORAGE HELPERS
     ========================================================================== */
  const STORAGE_KEYS = {
    theme: 'rc_archive_theme',
    currency: 'rc_archive_currency',
    wishlist: 'rc_archive_wishlist',
    enquiries: 'rc_archive_enquiries',
    user: 'rc_archive_user',
    accounts: 'rc_archive_accounts',
    newsletter: 'rc_archive_newsletter'
  };

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function saveJSON(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (_) {
      /* private browsing fallback */
    }
  }

  const state = {
    theme: localStorage.getItem(STORAGE_KEYS.theme) || 'night',
    currency: localStorage.getItem(STORAGE_KEYS.currency) || 'USD',
    eraFilter: 'all',
    catFilter: 'all',
    searchQuery: '',
    sortBy: 'newest',
    wishlist: loadJSON(STORAGE_KEYS.wishlist, ['radio-1950s', 'pocketwatch-1920s']),
    enquiries: loadJSON(STORAGE_KEYS.enquiries, [
      {
        ref: 'RC-2026-0841',
        date: '2026-10-19',
        type: 'Buy an item',
        item: '1924 Guilloché Hunter-Case Brass Pocket Watch',
        message: 'Could you confirm whether the curb chain clasp accommodates a 4 mm waistcoat buttonhole?',
        status: 'Replied'
      }
    ]),
    lightboxIndex: 0,
    filteredGalleryIndices: GALLERY_PLATES.map((_, idx) => idx),
    testiIndex: 0,
    lastFocusedElement: null
  };

  /* ==========================================================================
     6. TOAST NOTIFICATIONS (STAMPED ARCHIVE PAPER)
     ========================================================================== */
  const toastStack = document.getElementById('toast-stack');

  function showToast(message, stampLabel = 'ARCHIVE') {
    if (!toastStack) return;
    const toast = document.createElement('div');
    toast.className = 'archive-toast';
    toast.setAttribute('role', 'status');

    const textSpan = document.createElement('span');
    textSpan.textContent = message;

    const badge = document.createElement('strong');
    badge.style.color = '#7C1F2C';
    badge.textContent = `[${stampLabel}]`;

    toast.appendChild(textSpan);
    toast.appendChild(badge);
    toastStack.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      setTimeout(() => toast.remove(), 260);
    }, 3400);
  }

  /* ==========================================================================
     7. PRELOADER, THEME SWITCHER & SCROLL ORCHESTRATION
     ========================================================================== */
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initPreloader() {
    const preloader = document.getElementById('preloader');
    const lotText = document.getElementById('preloader-lot');
    if (!preloader) return;

    if (reducedMotion) {
      preloader.classList.add('is-done');
      document.body.classList.remove('preloader-active');
      return;
    }

    document.body.classList.add('preloader-active');

    setTimeout(() => {
      if (lotText) lotText.textContent = '02 · VERIFYING PROVENANCE LEDGER';
    }, 280);
    setTimeout(() => {
      if (lotText) lotText.textContent = '01 · VAULT DOORS UNLOCKED';
    }, 560);
    setTimeout(() => {
      preloader.classList.add('is-done');
      document.body.classList.remove('preloader-active');
    }, 820);

    // Hard fallback safety
    setTimeout(() => {
      preloader.classList.add('is-done');
      document.body.classList.remove('preloader-active');
    }, 1400);
  }

  function applyTheme(themeName, announce = false) {
    state.theme = themeName === 'day' ? 'day' : 'night';
    document.documentElement.setAttribute('data-theme', state.theme);
    try {
      localStorage.setItem(STORAGE_KEYS.theme, state.theme);
    } catch (_) {}
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const label = state.theme === 'day' ? 'Switch to Night Archive' : 'Switch to Day Archive';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    }
    if (announce) {
      showToast(
        state.theme === 'day' ? 'Day-Archive parchment lighting enabled.' : 'Night-Archive walnut lighting enabled.',
        'LAMP'
      );
    }
  }

  function initScrollAndNav() {
    const header = document.getElementById('site-header');
    const progress = document.getElementById('scroll-progress');
    const backTop = document.getElementById('back-to-top');
    const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;

      if (progress) progress.style.width = `${pct.toFixed(2)}%`;
      if (header) header.classList.toggle('is-scrolled', scrollY > 48);
      if (backTop) backTop.classList.toggle('is-visible', scrollY > 520);

      // Scroll-spy active section
      const spyOffset = scrollY + 180;
      let currentId = '';
      for (const sec of sections) {
        if (sec.offsetTop <= spyOffset) {
          currentId = sec.id;
        }
      }
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backTop) {
      backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      });
    }

    // Mobile full-screen serif menu
    const mobOpen = document.getElementById('mobile-menu-open');
    const mobClose = document.getElementById('mobile-menu-close');
    const mobOverlay = document.getElementById('mobile-overlay');

    function closeMobileMenu() {
      if (!mobOverlay) return;
      mobOverlay.classList.remove('is-open');
      mobOverlay.setAttribute('aria-hidden', 'true');
      if (mobOpen) mobOpen.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('modal-open');
    }

    if (mobOpen && mobOverlay) {
      mobOpen.addEventListener('click', () => {
        mobOverlay.classList.add('is-open');
        mobOverlay.setAttribute('aria-hidden', 'false');
        mobOpen.setAttribute('aria-expanded', 'true');
        document.body.classList.add('modal-open');
      });
    }
    if (mobClose) mobClose.addEventListener('click', closeMobileMenu);
    if (mobOverlay) {
      mobOverlay.querySelectorAll('a, button[data-close-mobile]').forEach((el) => {
        el.addEventListener('click', closeMobileMenu);
      });
    }
  }

  /* ==========================================================================
     8. CUSTOM CURSOR, MAGNETIC BUTTONS, PARALLAX & REVEAL OBSERVERS
     ========================================================================== */
  function initCursorAndMotion() {
    const cursor = document.getElementById('custom-cursor');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (cursor && finePointer && !reducedMotion) {
      window.addEventListener(
        'pointermove',
        (e) => {
          cursor.classList.add('is-visible');
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
          const overCard = e.target && e.target.closest('.rc-card, .gallery-item');
          cursor.classList.toggle('is-card-hover', Boolean(overCard));
        },
        { passive: true }
      );
      document.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
    }

    // Subtle magnetic pull on hero/primary CTA buttons
    if (finePointer && !reducedMotion) {
      document.querySelectorAll('.magnetic-btn').forEach((btn) => {
        btn.addEventListener('pointermove', (e) => {
          const r = btn.getBoundingClientRect();
          const dx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 10;
          const dy = ((e.clientY - (r.top + r.height / 2)) / r.height) * 10;
          btn.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
        });
        btn.addEventListener('pointerleave', () => {
          btn.style.transform = '';
        });
      });

      // Hero floating chips cursor-reactive parallax
      const heroSec = document.querySelector('.hero');
      const chips = document.querySelectorAll('.hero-chip');
      if (heroSec && chips.length) {
        heroSec.addEventListener(
          'pointermove',
          (e) => {
            const nx = e.clientX / window.innerWidth - 0.5;
            const ny = e.clientY / window.innerHeight - 0.5;
            chips.forEach((chip, idx) => {
              const factor = (idx + 1) * 7;
              chip.style.marginLeft = `${(nx * factor).toFixed(1)}px`;
              chip.style.marginTop = `${(ny * factor).toFixed(1)}px`;
            });
          },
          { passive: true }
        );
      }
    }

    // IntersectionObserver for .reveal & .deal-card staggered animations + stats count-up
    // Pre-triggers 180px before entering viewport so sections are NEVER empty when scrolling down or up.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const motionTargets = document.querySelectorAll('.reveal, .deal-card');

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.remove('reveal-pending');
          if (el.classList.contains('deal-card')) {
            el.classList.add('is-dealt');
          } else {
            el.classList.add('is-revealed');
          }
          obs.unobserve(el);
        });
      },
      { threshold: 0, rootMargin: '180px 0px 180px 0px' }
    );

    motionTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If already within or close to viewport, reveal immediately without lag
      if (rect.top <= vh + 180 && rect.bottom >= -180) {
        if (el.classList.contains('deal-card')) {
          el.classList.add('is-dealt');
        } else {
          el.classList.add('is-revealed');
        }
      } else {
        el.classList.add('reveal-pending');
        revealObserver.observe(el);
      }
    });

    // Instant reveal handler when navigating via anchor links (#collection, #stories, etc.)
    function revealTargetAnchor() {
      const hash = window.location.hash;
      if (hash && hash !== '#') {
        const sec = document.querySelector(hash);
        if (sec) {
          sec.querySelectorAll('.reveal, .deal-card').forEach((el) => {
            el.classList.remove('reveal-pending');
            if (el.classList.contains('deal-card')) el.classList.add('is-dealt');
            else el.classList.add('is-revealed');
          });
        }
      }
    }
    revealTargetAnchor();
    window.addEventListener('hashchange', revealTargetAnchor, { passive: true });

    // Stats strip count-up
    const statEls = document.querySelectorAll('[data-count-target]');
    const statsObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.countTarget, 10) || 0;
          const suffix = el.dataset.countSuffix || '';
          const formatComma = el.dataset.countComma === 'true';

          if (reducedMotion) {
            el.textContent = (formatComma ? target.toLocaleString() : String(target)) + suffix;
            obs.unobserve(el);
            return;
          }

          const duration = 1300;
          const start = performance.now();
          function tick(now) {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = Math.round(target * eased);
            el.textContent = (formatComma ? val.toLocaleString() : String(val)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.35 }
    );

    statEls.forEach((el) => statsObserver.observe(el));
  }

  /* ==========================================================================
     9. ERAS — SOUND-FREE RADIO-DIAL SCRUBBER & TIMELINE INTERACTION
     ========================================================================== */
  function initErasScrubber() {
    const track = document.getElementById('radio-dial-track');
    const needle = document.getElementById('radio-needle');
    const readout = document.getElementById('radio-freq-readout');
    const stops = Array.from(document.querySelectorAll('.radio-dial-stop'));
    const eraCards = Array.from(document.querySelectorAll('.era-card'));
    if (!track || !needle || !stops.length) return;

    const decades = stops.map((s) => s.dataset.era);
    const freqLabels = {
      '1920s': '88.2 MHz · 1920s ART DECO BRASS',
      '1930s': '91.6 MHz · 1930s STREAMLINE CHROME',
      '1940s': '94.8 MHz · 1940s MARBLED BAKELITE',
      '1950s': '98.4 MHz · 1950s ATOMIC ENAMEL',
      '1960s': '101.2 MHz · 1960s MOD SPACE-AGE',
      '1970s': '104.0 MHz · 1970s ANALOG EARTH-TONE',
      '1980s': '106.6 MHz · 1980s PRECISION ALLOY',
      '1990s': '108.0 MHz · 1990s POCKET POLYMER'
    };

    function setDecadeHighlight(era, scrollCardIntoView = false) {
      const idx = Math.max(0, decades.indexOf(era));
      const stopBtn = stops[idx];
      if (stopBtn) {
        const trackRect = track.getBoundingClientRect();
        const stopRect = stopBtn.getBoundingClientRect();
        const centerLeft = stopRect.left - trackRect.left + stopRect.width / 2;
        needle.style.left = `${centerLeft.toFixed(1)}px`;
      }
      stops.forEach((btn, i) => btn.classList.toggle('is-active', i === idx));
      eraCards.forEach((card) => card.classList.toggle('is-selected', card.dataset.era === era));
      if (readout && freqLabels[era]) {
        readout.textContent = freqLabels[era];
      }
      if (scrollCardIntoView) {
        const targetCard = eraCards.find((c) => c.dataset.era === era);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
        }
      }
    }

    stops.forEach((btn) => {
      btn.addEventListener('click', () => setDecadeHighlight(btn.dataset.era));
    });

    // Dragging the tuning needle across the frequency scale
    let dragging = false;
    function scrubAtClientX(clientX) {
      const rect = track.getBoundingClientRect();
      const rel = Math.min(1, Math.max(0, (clientX - rect.left - 24) / Math.max(1, rect.width - 48)));
      const idx = Math.round(rel * (decades.length - 1));
      setDecadeHighlight(decades[idx]);
    }

    track.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      dragging = true;
      needle.classList.add('is-dragging');
      track.setPointerCapture(e.pointerId);
      scrubAtClientX(e.clientX);
    });
    track.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      scrubAtClientX(e.clientX);
    });
    const endDrag = () => {
      dragging = false;
      needle.classList.remove('is-dragging');
    };
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);

    // Clicking an Era Story Card highlights it & filters Collection when clicking its CTA or card
    eraCards.forEach((card) => {
      card.addEventListener('mouseenter', () => setDecadeHighlight(card.dataset.era));
      card.addEventListener('click', (e) => {
        const era = card.dataset.era;
        setDecadeHighlight(era);
        if (e.target.closest('.js-filter-era-btn') || card) {
          applyCollectionEraFilter(era, true);
        }
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          applyCollectionEraFilter(card.dataset.era, true);
        }
      });
    });

    window.addEventListener('resize', () => {
      const activeStop = stops.find((s) => s.classList.contains('is-active')) || stops[3];
      if (activeStop) setDecadeHighlight(activeStop.dataset.era);
    });

    requestAnimationFrame(() => setDecadeHighlight('1950s'));
    window.addEventListener('load', () => setDecadeHighlight('1950s'));
    setTimeout(() => setDecadeHighlight('1950s'), 300);
  }

  /* ==========================================================================
     10. COLLECTION FILTER, SEARCH, SORT, CURRENCY & WISHLIST HEARTS
     ========================================================================== */
  function formatPrice(item) {
    if (state.currency === 'INR') {
      return `₹${item.priceINR.toLocaleString('en-IN')}`;
    }
    return `$${item.priceUSD.toLocaleString('en-US')}`;
  }

  function syncSavedBadgesAndButtons() {
    const count = state.wishlist.length;
    document.querySelectorAll('.js-saved-count').forEach((badge) => {
      badge.textContent = String(count);
      badge.classList.remove('is-bumped');
      void badge.offsetWidth;
      badge.classList.add('is-bumped');
    });

    document.querySelectorAll('.js-save-btn').forEach((btn) => {
      const id = btn.dataset.id;
      const saved = state.wishlist.includes(id);
      btn.classList.toggle('is-saved', saved);
      btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
      const labelEl = btn.querySelector('.save-label');
      const heartEl = btn.querySelector('.save-icon');
      if (heartEl) heartEl.textContent = saved ? '♥' : '♡';
      if (labelEl) labelEl.textContent = saved ? 'Saved' : 'Save';
    });
  }

  function toggleWishlist(itemId, sourceBtn = null) {
    const item = ARCHIVE_ITEMS.find((it) => it.id === itemId);
    if (!item) return;

    const idx = state.wishlist.indexOf(itemId);
    if (idx === -1) {
      state.wishlist.push(itemId);
      if (sourceBtn) {
        sourceBtn.classList.remove('is-splashing');
        void sourceBtn.offsetWidth;
        sourceBtn.classList.add('is-splashing');
      }
      showToast(`Saved "${item.title}" to Wishlist.`, 'SAVED');
    } else {
      state.wishlist.splice(idx, 1);
      showToast(`Removed "${item.title}" from Wishlist.`, 'WISHLIST');
    }

    saveJSON(STORAGE_KEYS.wishlist, state.wishlist);
    syncSavedBadgesAndButtons();
  }

  function renderCollection() {
    const grid = document.getElementById('products-grid');
    const emptyEl = document.getElementById('collection-empty');
    const countEl = document.getElementById('collection-count');
    if (!grid) return;

    const cardMap = new Map();
    grid.querySelectorAll('.product-card[data-id]').forEach((card) => {
      cardMap.set(card.dataset.id, card);
    });

    // Update dynamic currency prices on all cards
    ARCHIVE_ITEMS.forEach((item) => {
      const card = cardMap.get(item.id);
      if (!card) return;
      const priceEl = card.querySelector('.js-item-price');
      if (priceEl) priceEl.textContent = formatPrice(item);
    });

    const q = state.searchQuery.trim().toLowerCase();
    const matched = ARCHIVE_ITEMS.filter((item) => {
      if (state.eraFilter !== 'all' && item.era !== state.eraFilter) return false;
      if (state.catFilter !== 'all' && item.category !== state.catFilter) return false;
      if (q) {
        const hay = `${item.title} ${item.lot} ${item.era} ${item.category} ${item.condition} ${item.material} ${item.maker} ${item.country} ${item.story.join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    matched.sort((a, b) => {
      switch (state.sortBy) {
        case 'era-asc':
          return a.year - b.year;
        case 'era-desc':
          return b.year - a.year;
        case 'price-asc':
          return a.priceUSD - b.priceUSD;
        case 'price-desc':
          return b.priceUSD - a.priceUSD;
        case 'newest':
        default:
          return b.addedOrder - a.addedOrder;
      }
    });

    // Hide all first, then append matched in sorted order & trigger deal-in animation
    cardMap.forEach((card) => {
      card.hidden = true;
    });

    matched.forEach((item, idx) => {
      const card = cardMap.get(item.id);
      if (!card) return;
      card.hidden = false;
      card.classList.remove('reveal-pending');
      card.style.setProperty('--deal-delay', `${idx * 45}ms`);
      card.classList.add('is-dealt');
      grid.appendChild(card);
    });

    if (emptyEl) emptyEl.hidden = matched.length > 0;
    if (countEl) {
      countEl.textContent = `Showing ${matched.length} of ${ARCHIVE_ITEMS.length} catalogued archive lots`;
    }
  }

  function applyCollectionEraFilter(era, scroll = false) {
    state.eraFilter = era;
    document.querySelectorAll('[data-era-chip]').forEach((chip) => {
      chip.classList.toggle('is-active', chip.dataset.eraChip === era);
    });
    renderCollection();
    if (scroll) {
      const colSec = document.getElementById('collection');
      if (colSec) colSec.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  }

  function applyCollectionCategoryFilter(category, scroll = false) {
    state.catFilter = category;
    document.querySelectorAll('[data-cat-chip]').forEach((chip) => {
      chip.classList.toggle('is-active', chip.dataset.catChip === category);
    });
    renderCollection();
    if (scroll) {
      const colSec = document.getElementById('collection');
      if (colSec) colSec.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  }

  function initCollectionControls() {
    document.querySelectorAll('[data-era-chip]').forEach((chip) => {
      chip.addEventListener('click', () => applyCollectionEraFilter(chip.dataset.eraChip));
    });

    document.querySelectorAll('[data-cat-chip]').forEach((chip) => {
      chip.addEventListener('click', () => applyCollectionCategoryFilter(chip.dataset.catChip));
    });

    // Story section "Browse Category" shortcut buttons
    document.querySelectorAll('[data-jump-category]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.eraFilter = 'all';
        document.querySelectorAll('[data-era-chip]').forEach((c) => {
          c.classList.toggle('is-active', c.dataset.eraChip === 'all');
        });
        applyCollectionCategoryFilter(btn.dataset.jumpCategory, true);
      });
    });

    const searchInput = document.getElementById('collection-search');
    const searchClear = document.getElementById('collection-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        state.searchQuery = searchInput.value;
        if (searchClear) searchClear.classList.toggle('is-visible', Boolean(searchInput.value));
        renderCollection();
      });
    }
    if (searchClear && searchInput) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        searchClear.classList.remove('is-visible');
        renderCollection();
        searchInput.focus();
      });
    }

    const sortSelect = document.getElementById('collection-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        state.sortBy = sortSelect.value;
        renderCollection();
      });
    }

    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.eraFilter = 'all';
        state.catFilter = 'all';
        state.searchQuery = '';
        state.sortBy = 'newest';
        if (searchInput) searchInput.value = '';
        if (searchClear) searchClear.classList.remove('is-visible');
        if (sortSelect) sortSelect.value = 'newest';
        document.querySelectorAll('[data-era-chip]').forEach((c) => c.classList.toggle('is-active', c.dataset.eraChip === 'all'));
        document.querySelectorAll('[data-cat-chip]').forEach((c) => c.classList.toggle('is-active', c.dataset.catChip === 'all'));
        renderCollection();
      });
    }

    // Currency switcher (USD $ / INR ₹)
    const currencyBtns = document.querySelectorAll('[data-currency]');
    function setCurrency(curr) {
      state.currency = curr === 'INR' ? 'INR' : 'USD';
      try {
        localStorage.setItem(STORAGE_KEYS.currency, state.currency);
      } catch (_) {}
      currencyBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.currency === state.currency));
      renderCollection();
    }
    currencyBtns.forEach((btn) => {
      btn.addEventListener('click', () => setCurrency(btn.dataset.currency));
    });
    setCurrency(state.currency);

    // Delegated Product Card Actions (View Story, Enquire, Save)
    document.addEventListener('click', (e) => {
      const storyBtn = e.target.closest('.js-open-story');
      if (storyBtn) {
        openStoryModal(storyBtn.dataset.id, storyBtn);
        return;
      }

      const enqBtn = e.target.closest('.js-enquire-item');
      if (enqBtn) {
        prefillEnquiryForItem(enqBtn.dataset.id);
        return;
      }

      const saveBtn = e.target.closest('.js-save-btn');
      if (saveBtn) {
        toggleWishlist(saveBtn.dataset.id, saveBtn);
      }
    });

    syncSavedBadgesAndButtons();
  }

  /* ==========================================================================
     11. INTERACTIVE CONDITION GUIDE (6 GRADES + ANIMATED GAUGE)
     ========================================================================== */
  function initConditionGuide() {
    const tabs = document.querySelectorAll('.grade-tab[data-grade]');
    const gaugeFill = document.getElementById('condition-gauge-fill');
    const titleEl = document.getElementById('condition-grade-title');
    const cosEl = document.getElementById('spec-cosmetics');
    const workEl = document.getElementById('spec-working');
    const origEl = document.getElementById('spec-originality');
    const ephEl = document.getElementById('spec-ephemera');
    if (!tabs.length) return;

    function selectGrade(key) {
      const data = CONDITION_GRADES[key];
      if (!data) return;
      tabs.forEach((t) => {
        const active = t.dataset.grade === key;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      if (gaugeFill) gaugeFill.style.width = `${data.percent}%`;
      if (titleEl) titleEl.textContent = data.title;
      if (cosEl) cosEl.textContent = data.cosmetics;
      if (workEl) workEl.textContent = data.working;
      if (origEl) origEl.textContent = data.originality;
      if (ephEl) ephEl.textContent = data.ephemera;
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => selectGrade(tab.dataset.grade));
      tab.addEventListener('mouseenter', () => selectGrade(tab.dataset.grade));
    });

    selectGrade('mint');
  }

  /* ==========================================================================
     12. ACCESSIBLE MODAL MANAGER (FOCUS TRAP + ESCAPE + RESTORE FOCUS)
     ========================================================================== */
  let activeModalBackdrop = null;

  function openModal(backdropEl, triggerEl = null) {
    if (!backdropEl) return;
    if (activeModalBackdrop && activeModalBackdrop !== backdropEl) {
      closeModal(activeModalBackdrop, false);
    }
    state.lastFocusedElement = triggerEl || document.activeElement;
    activeModalBackdrop = backdropEl;
    backdropEl.classList.add('is-open');
    backdropEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    const closeBtn = backdropEl.querySelector('.modal-close');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 40);
    }
  }

  function closeModal(backdropEl = activeModalBackdrop, restoreFocus = true) {
    if (!backdropEl) return;
    backdropEl.classList.remove('is-open');
    backdropEl.setAttribute('aria-hidden', 'true');
    if (activeModalBackdrop === backdropEl) {
      activeModalBackdrop = null;
      document.body.classList.remove('modal-open');
    }
    if (restoreFocus && state.lastFocusedElement && typeof state.lastFocusedElement.focus === 'function') {
      state.lastFocusedElement.focus();
    }
  }

  function initGlobalModalHandlers() {
    document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop || e.target.closest('[data-close-modal]')) {
          closeModal(backdrop);
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (!activeModalBackdrop) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal(activeModalBackdrop);
        return;
      }

      // Lightbox Left/Right keyboard navigation
      if (activeModalBackdrop.id === 'lightbox-modal') {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          stepLightbox(-1);
          return;
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          stepLightbox(1);
          return;
        }
      }

      // Focus trap within active modal
      if (e.key === 'Tab') {
        const focusables = Array.from(
          activeModalBackdrop.querySelectorAll(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Privacy policy modal triggers
    document.querySelectorAll('.js-open-privacy').forEach((btn) => {
      btn.addEventListener('click', () => openModal(document.getElementById('privacy-modal'), btn));
    });
  }

  /* ==========================================================================
     13. PRODUCT STORY MODAL & PRE-FILL ENQUIRY FLOW
     ========================================================================== */
  function openStoryModal(itemId, triggerEl) {
    const item = ARCHIVE_ITEMS.find((it) => it.id === itemId);
    const modal = document.getElementById('story-modal');
    if (!item || !modal) return;

    const img = document.getElementById('modal-item-img');
    if (img) {
      img.src = item.image;
      img.alt = item.alt;
    }
    const setTxt = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setTxt('modal-item-lot', `${item.lot} · ${item.era}`);
    setTxt('modal-item-title', item.title);
    setTxt('modal-item-price', formatPrice(item));
    setTxt('modal-item-condition', `Condition: ${item.condition}`);
    setTxt('modal-spec-year', String(item.year));
    setTxt('modal-spec-maker', item.maker);
    setTxt('modal-spec-country', item.country);
    setTxt('modal-spec-material', item.material);
    setTxt('modal-spec-dimensions', item.dimensions);
    setTxt('modal-spec-weight', item.weight);
    setTxt('modal-working-note', item.workingStatus);
    setTxt('modal-originality-note', item.originality);

    const statusBadge = document.getElementById('modal-item-status');
    if (statusBadge) {
      statusBadge.textContent = item.status;
      statusBadge.className = `status-pill status-pill--${item.status.toLowerCase()}`;
    }

    const storyWrap = document.getElementById('modal-item-story');
    if (storyWrap) {
      storyWrap.innerHTML = item.story.map((p) => `<p style="margin-bottom:0.85rem;">${p}</p>`).join('');
    }

    const enqBtn = document.getElementById('modal-enquire-btn');
    if (enqBtn) {
      enqBtn.textContent = item.status === 'Sold' ? 'Request a Similar Piece' : 'Enquire About This Item';
      enqBtn.onclick = () => {
        closeModal(modal, false);
        prefillEnquiryForItem(item.id);
      };
    }

    openModal(modal, triggerEl);
  }

  function prefillEnquiryForItem(itemId, customType = null) {
    const item = ARCHIVE_ITEMS.find((it) => it.id === itemId);
    const enqSection = document.getElementById('enquire');
    const typeSelect = document.getElementById('enquire-type');
    const itemInput = document.getElementById('enquire-item');
    const msgInput = document.getElementById('enquire-message');

    // Reset confirmation view if previously shown
    resetEnquiryConfirmation();

    if (item) {
      if (typeSelect) {
        typeSelect.value = customType || (item.status === 'Sold' ? 'Request a piece' : 'Buy an item');
      }
      if (itemInput) {
        itemInput.value = `${item.lot} — ${item.title}`;
      }
    } else if (customType && typeSelect) {
      typeSelect.value = customType;
    }

    if (enqSection) {
      enqSection.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      setTimeout(() => {
        if (item ? msgInput : itemInput) {
          (item ? msgInput : itemInput).focus();
        }
      }, 500);
    }
  }

  /* ==========================================================================
     14. GALLERY FILTER & LIGHTBOX (KEYBOARD + SWIPE)
     ========================================================================== */
  function renderLightboxSlide() {
    const plateIdx = state.filteredGalleryIndices[state.lightboxIndex] ?? 0;
    const data = GALLERY_PLATES[plateIdx];
    if (!data) return;

    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    const meta = document.getElementById('lightbox-meta');
    if (img) {
      img.src = data.src;
      img.alt = data.caption;
    }
    if (meta) meta.textContent = `${data.plate} · ${data.cat}`;
    if (cap) cap.textContent = data.caption;
  }

  function stepLightbox(delta) {
    const len = state.filteredGalleryIndices.length;
    if (!len) return;
    state.lightboxIndex = (state.lightboxIndex + delta + len) % len;
    renderLightboxSlide();
  }

  function initGallery() {
    const filterBtns = document.querySelectorAll('.gallery-Filter-btn[data-gfilter]');
    const items = Array.from(document.querySelectorAll('.gallery-item[data-gindex]'));
    const lightbox = document.getElementById('lightbox-modal');
    if (!items.length) return;

    const mosaic = document.querySelector('.gallery-mosaic');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.gfilter;
        filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        if (mosaic) mosaic.classList.toggle('is-filtered', cat !== 'all');

        state.filteredGalleryIndices = [];
        items.forEach((el) => {
          const idx = parseInt(el.dataset.gindex, 10);
          const match = cat === 'all' || el.dataset.gcat === cat;
          el.hidden = !match;
          if (match) state.filteredGalleryIndices.push(idx);
        });
      });
    });

    items.forEach((el) => {
      const openPlate = () => {
        const rawIdx = parseInt(el.dataset.gindex, 10);
        const pos = state.filteredGalleryIndices.indexOf(rawIdx);
        state.lightboxIndex = pos >= 0 ? pos : 0;
        renderLightboxSlide();
        openModal(lightbox, el);
      };
      el.addEventListener('click', openPlate);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openPlate();
        }
      });
    });

    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    if (prevBtn) prevBtn.addEventListener('click', () => stepLightbox(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => stepLightbox(1));

    // Touch swipe on Lightbox stage
    const stage = document.getElementById('lightbox-stage');
    if (stage) {
      let touchStartX = 0;
      stage.addEventListener(
        'touchstart',
        (e) => {
          if (e.changedTouches && e.changedTouches[0]) {
            touchStartX = e.changedTouches[0].clientX;
          }
        },
        { passive: true }
      );
      stage.addEventListener(
        'touchend',
        (e) => {
          if (!e.changedTouches || !e.changedTouches[0]) return;
          const dx = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(dx) > 45) {
            stepLightbox(dx < 0 ? 1 : -1);
          }
        },
        { passive: true }
      );
    }
  }

  /* ==========================================================================
     15. TESTIMONIALS CAROUSEL (INDEX CARDS + 3D TILT + CENTERED)
     ========================================================================== */
  function initTestimonials() {
    const viewport = document.getElementById('testimonials-viewport');
    const dotsWrap = document.getElementById('testi-dots');
    const prevBtn = document.getElementById('testi-prev');
    const nextBtn = document.getElementById('testi-next');
    if (!viewport || !dotsWrap) return;

    function renderPair() {
      const first = TESTIMONIALS[state.testiIndex % TESTIMONIALS.length];
      const second = TESTIMONIALS[(state.testiIndex + 1) % TESTIMONIALS.length];
      viewport.innerHTML = [first, second]
        .map(
          (t) => `
          <article class="rc-card testimonial-card" data-tilt data-tilt-max="8">
            <span class="testimonial-ref pop-layer-tag">${t.ref}</span>
            <div class="testimonial-stars" aria-label="5 out of 5 stars">★ ★ ★ ★ ★</div>
            <blockquote class="testimonial-quote pop-layer-title">${t.quote}</blockquote>
            <div class="pop-layer-actions">
              <p class="testimonial-author">${t.author}</p>
              <p class="testimonial-lot">${t.lot}</p>
            </div>
          </article>
        `
        )
        .join('');

      if (window.RetroTilt) window.RetroTilt.refresh(viewport);
      dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === state.testiIndex);
        dot.setAttribute('aria-selected', idx === state.testiIndex ? 'true' : 'false');
      });
    }

    dotsWrap.innerHTML = TESTIMONIALS.map(
      (_, idx) =>
        `<button type="button" class="carousel-dot${idx === 0 ? ' is-active' : ''}" role="tab" aria-label="Show testimonial ${idx + 1}" aria-selected="${idx === 0 ? 'true' : 'false'}"></button>`
    ).join('');

    dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        state.testiIndex = idx;
        renderPair();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        state.testiIndex = (state.testiIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
        renderPair();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.testiIndex = (state.testiIndex + 1) % TESTIMONIALS.length;
        renderPair();
      });
    }

    // Gentle auto-rotation unless reduced motion or hovered
    let timer = null;
    const wrap = document.getElementById('testimonials-carousel');
    function startAuto() {
      if (reducedMotion) return;
      stopAuto();
      timer = setInterval(() => {
        state.testiIndex = (state.testiIndex + 1) % TESTIMONIALS.length;
        renderPair();
      }, 6500);
    }
    function stopAuto() {
      if (timer) clearInterval(timer);
    }
    if (wrap) {
      wrap.addEventListener('mouseenter', stopAuto);
      wrap.addEventListener('mouseleave', startAuto);
      wrap.addEventListener('focusin', stopAuto);
      wrap.addEventListener('focusout', startAuto);
    }

    renderPair();
    startAuto();
  }

  /* ==========================================================================
     16. FAQ ACCORDION
     ========================================================================== */
  function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item) => {
      const btn = item.querySelector('.faq-trigger');
      const panel = item.querySelector('.faq-panel');
      if (!btn || !panel) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // Close others cleanly
        items.forEach((other) => {
          other.classList.remove('is-open');
          const ob = other.querySelector('.faq-trigger');
          const op = other.querySelector('.faq-panel');
          if (ob) ob.setAttribute('aria-expanded', 'false');
          if (op) op.hidden = true;
        });

        if (!isOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          panel.hidden = false;
        }
      });
    });
  }

  /* ==========================================================================
     17. ENQUIRY FORM, SELL/CONSIGN SHORTCUTS & NEWSLETTER VALIDATION
     ========================================================================== */
  function resetEnquiryConfirmation() {
    const form = document.getElementById('enquiry-form');
    const confirmBox = document.getElementById('enquiry-confirmation');
    if (form) form.hidden = false;
    if (confirmBox) confirmBox.classList.remove('is-visible');
  }

  function initForms() {
    // Hero "Request an Item" & Sell/Consign CTAs
    document.querySelectorAll('.js-request-cta').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        prefillEnquiryForItem(null, 'Request a piece');
      });
    });
    document.querySelectorAll('.js-consign-cta').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        prefillEnquiryForItem(null, 'Sell / Consign');
      });
    });

    const form = document.getElementById('enquiry-form');
    const confirmBox = document.getElementById('enquiry-confirmation');
    const refSpan = document.getElementById('enquiry-ref-code');
    const mailtoFallback = document.getElementById('enquiry-mailto-link');
    const anotherBtn = document.getElementById('enquiry-another-btn');

    function setFieldError(inputId, msg) {
      const input = document.getElementById(inputId);
      if (!input) return false;
      const group = input.closest('.field-group');
      const errEl = group ? group.querySelector('.field-error') : null;
      if (group) group.classList.toggle('has-error', Boolean(msg));
      if (errEl) errEl.textContent = msg || '';
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      return !msg;
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('enquire-name').value.trim();
        const email = document.getElementById('enquire-email').value.trim();
        const phone = document.getElementById('enquire-phone').value.trim();
        const type = document.getElementById('enquire-type').value;
        const item = document.getElementById('enquire-item').value.trim();
        const message = document.getElementById('enquire-message').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const phoneRegex = /^[+\d\s().-]{7,22}$/;

        const v1 = setFieldError('enquire-name', name.length < 2 ? 'Please enter your full name.' : '');
        const v2 = setFieldError('enquire-email', !emailRegex.test(email) ? 'Please enter a valid email address.' : '');
        const v3 = setFieldError('enquire-phone', phone && !phoneRegex.test(phone) ? 'Please enter a valid telephone number.' : '');
        const v4 = setFieldError('enquire-message', message.length < 12 ? 'Please share a brief note (at least 12 characters).' : '');

        if (!v1 || !v2 || !v3 || !v4) return;

        const submitBtn = document.getElementById('enquiry-submit-btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Logging in Archive Ledger…';
        }

        setTimeout(() => {
          const ref = `RC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
          const record = {
            ref,
            date: new Date().toISOString().slice(0, 10),
            name,
            email,
            phone,
            type,
            item: item || 'General Archive Consultation',
            message,
            status: 'Received'
          };

          state.enquiries.unshift(record);
          saveJSON(STORAGE_KEYS.enquiries, state.enquiries);

          if (refSpan) refSpan.textContent = ref;
          if (mailtoFallback) {
            const subject = encodeURIComponent(`[${ref}] ${type} — ${record.item}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nItem: ${record.item}\n\n${message}`);
            mailtoFallback.href = `mailto:curator@retrocollect-archive.example?subject=${subject}&body=${body}`;
          }

          form.reset();
          form.hidden = true;
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Dispatch Archive Enquiry';
          }
          if (confirmBox) confirmBox.classList.add('is-visible');
          showToast(`Enquiry ${ref} successfully dispatched to curator.`, 'LOGGED');
        }, 360);
      });
    }

    if (anotherBtn) {
      anotherBtn.addEventListener('click', resetEnquiryConfirmation);
    }

    // Footer Monthly Lot List Newsletter
    const newsForm = document.getElementById('newsletter-form');
    const newsInput = document.getElementById('newsletter-email');
    const newsMsg = document.getElementById('newsletter-feedback');
    if (newsForm && newsInput) {
      newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsInput.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
          if (newsMsg) {
            newsMsg.textContent = 'Please enter a valid collector email address.';
            newsMsg.style.color = '#F48692';
          }
          return;
        }
        const list = loadJSON(STORAGE_KEYS.newsletter, []);
        if (!list.includes(email)) {
          list.push(email);
          saveJSON(STORAGE_KEYS.newsletter, list);
        }
        newsInput.value = '';
        if (newsMsg) {
          newsMsg.textContent = 'Subscribed. You will receive the Monthly Lot List on the first Thursday.';
          newsMsg.style.color = '#F0B556';
        }
        showToast('Added to The Monthly Lot List dispatch.', 'DISPATCH');
      });
    }
  }

  /* ==========================================================================
     18. BOOTSTRAP APPLICATION ON DOM READY
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme, false);
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'night' ? 'day' : 'night', true);
      });
    }

    initPreloader();
    initScrollAndNav();
    initCursorAndMotion();
    initErasScrubber();
    initCollectionControls();
    initConditionGuide();
    initGlobalModalHandlers();
    initGallery();
    initTestimonials();
    initFAQ();
    initForms();

    if (window.RetroTilt) {
      window.RetroTilt.init();
    }
  });
})();


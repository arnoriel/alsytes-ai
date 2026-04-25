import { ENV } from './env';


// ═══════════════════════════════════════════════════════════════════════════════
// SYSTEM PROMPT — ALSYTES ADVANCED v3
// ═══════════════════════════════════════════════════════════════════════════════

export const SYSTEM_PROMPT = `You are Alsytes — the world's most advanced AI website and web app builder. You combine elite creative direction, senior full-stack engineering, and award-winning UI/UX design into every output.

Your ONLY task is to generate complete, self-contained, fully functional HTML files based on user descriptions. Every output must feel like it was built by a top-tier agency charging $50,000+.

═══════════════════════════════════════
STRICT OUTPUT RULES
═══════════════════════════════════════
1. Return ONLY raw HTML code — zero explanations, zero markdown fences, zero preamble
2. Output MUST start with <!DOCTYPE html> and end with </html>
3. Everything in ONE file — inline CSS (<style>) and JS (<script>) only
4. CDN libraries allowed via <script src> or <link href> (Tailwind, GSAP, Three.js, Chart.js, etc.)
5. If user provides image/video URLs — use them EXACTLY as-is in <img src="..."> tags
6. If no media provided — use Picsum Photos URLs (format below) — they ALWAYS render
7. IMAGES MUST ACTUALLY RENDER — always use complete, valid <img> tags with src, alt, and explicit width/height or CSS sizing. Never leave src empty or use placeholder URLs
8. Write REAL, specific content — never Lorem Ipsum, never "coming soon", never placeholder text
9. Every single button, form, link, and interaction must work
10. ZERO SYNTAX ERRORS — validate all HTML tags are properly closed, all JS brackets/braces matched, all CSS rules terminated with semicolons
11. ZERO CODE COMMENTS — do NOT write any HTML comments (<!-- -->), JS comments (// or /* */), or CSS comments (/* */) anywhere in the output. Every token must be executable code, not commentary. Comments waste your output budget and reduce the richness of the final result.

═══════════════════════════════════════
STEP 1: INTENT CLASSIFICATION
═══════════════════════════════════════
Before writing a single line of code, mentally classify the request:

GAME         → game, play, arcade, puzzle, quiz, snake, tetris, chess, battle, shoot, platformer, rpg, kuis, tebak
APP / TOOL   → dashboard, app, aplikasi, system, manajemen, CRM, todo, kanban, tracker, inventory, admin, pos, booking, calculator, kalkulator, converter, generator, checker, encoder, timer, countdown, color picker, regex
LANDING PAGE → everything else: marketing, portfolio, company, product, restaurant, agency, profile, event, blog

Then apply that mode's ruleset completely.

═══════════════════════════════════════
STEP 2: AESTHETIC DIRECTION
═══════════════════════════════════════
Before writing code, mentally commit to ONE strong aesthetic direction. NEVER default to generic purple-gradient-on-white. Every output must be visually distinct.

Choose from (or invent your own):
  LUXURY/EDITORIAL    → Cormorant Garamond + Jost, champagne/obsidian palette, wide spacing, thin lines
  BRUTALIST/RAW       → heavy borders, stark contrast, asymmetry, industrial type, Bebas Neue + mono
  DARK TECH           → deep #080B14 bg, electric accent, Orbitron/Space Grotesk, grid lines, glow effects
  ORGANIC/NATURAL     → warm off-whites, earthy tones, Playfair Display + Lato, rounded forms, botanical
  PLAYFUL/BOLD        → saturated colors, Nunito/Fredoka, rounded corners, friendly micro-animations
  GLASS/MODERN        → glassmorphism, backdrop-filter, Syne + Manrope, subtle grain overlay
  RETRO/NOSTALGIC     → VT323/Press Start, pixel aesthetics, CRT effects, neon on dark
  MINIMAL/SWISS       → extreme whitespace, Helvetica-adjacent, black/white + one accent, grid precision

Apply the chosen aesthetic consistently to every element: type, color, spacing, borders, shadows, animations, icons.

ANTI-PATTERNS — NEVER DO THESE:
  ✗ Purple gradient hero on plain white background (most generic AI output)
  ✗ Inter/Roboto/Arial as primary font (boring, generic)
  ✗ Cookie-cutter card grids with identical padding (soulless)
  ✗ "floating" hero text with a stock photo opacity background (cliché)
  ✗ Inconsistent design language between sections

═══════════════════════════════════════
STEP 2B: USER STYLE REFERENCE DETECTION
═══════════════════════════════════════
Before finalizing the aesthetic direction, scan the user's prompt for any styling signals.
User preferences ALWAYS override your default aesthetic choices — but you must still execute them at the HIGHEST possible quality level.

DETECT AND HONOR THESE SIGNALS:

COLOR REFERENCES:
  "warna X" / "color X" / "pakai warna X" / "dominan X"
  → Extract the color intent and build a full cohesive palette around it
  → Example: "warna hijau" → derive: primary #16A34A, surface #F0FDF4, accent #059669, dark variant #14532D
  → Never use the color in isolation — always pair with neutrals and at least one complementary accent

FONT / TYPOGRAPHY REFERENCES:
  "font X" / "pakai font X" / "typeface X" / mentions a specific font name
  → Use that font as primary, import via Google Fonts if available
  → Pair with a harmonious secondary font (you choose the best complement)
  → Example: "pakai font Poppins" → use Poppins as display/heading, pair with Inter or DM Sans for body

MOOD / VIBE REFERENCES:
  "minimalis" → extreme whitespace, max 2 colors, thin typography, no decorative elements
  "mewah" / "luxury" / "premium" → Cormorant or Playfair, gold/champagne accents, generous spacing, thin borders
  "fun" / "playful" / "colorful" → Nunito/Fredoka, saturated multi-color palette, bubbly shapes, bouncy animations
  "profesional" / "corporate" → clean grid, navy/slate tones, conservative type, formal layout
  "dark" / "gelap" / "dark mode" → deep background (#0A0A14 range), light text, glow/neon accents
  "clean" / "simple" → minimal UI chrome, lots of whitespace, one accent color only
  "bold" / "kuat" → heavy type weights (800-900), strong contrast, large scale elements
  "modern" / "futuristic" → geometric sans, grid lines, sharp angles, tech aesthetic

REFERENCE WEBSITE / BRAND SIGNALS:
  "seperti Apple" / "like Apple" → ultra-minimal, SF-style sans, white space is king, product-hero photography
  "seperti Notion" → clean gray palette, sans-serif, dense information layout, subtle borders
  "seperti Stripe" → indigo/purple tech palette, gradient hero, crisp typography, professional fintech feel
  "seperti Airbnb" → warm coral accent, friendly rounded type, photography-forward, soft UI
  "seperti Vercel" → pure black/white, mono elements, developer aesthetic, stark contrast
  "seperti Figma" → vibrant multi-color, playful but professional, strong brand presence
  → Extract the visual DNA of the reference and apply it — never literally copy, always adapt to context

EXPLICIT DESIGN INSTRUCTIONS:
  "gunakan X sebagai primary color" → lock that in as --color-accent in :root
  "jangan pakai animasi" → remove all entrance animations, keep only functional transitions
  "dark theme" → flip the entire color system, light text on dark bg
  "rounded" / "pill buttons" → border-radius 999px on all interactive elements
  "sharp" / "no rounded corners" → border-radius: 0 or 2px maximum throughout
  "gradient" → hero uses gradient text + gradient backgrounds, used tastefully
  "flat design" → zero shadows, zero gradients, solid colors only, border-based depth

IMAGE/MEDIA REFERENCES:
  User-provided URLs → use EXACTLY as-is, never substitute
  "foto X" / "gambar X" → pick a relevant Picsum seed word that matches the topic

COMBINATION HANDLING:
  Users often give multiple signals → honor ALL of them, resolve conflicts with best judgment
  Example: "dark theme, warna biru, minimalis, font Raleway"
  → Dark bg (#080B14), blue accent (#3B82F6), Raleway for headings + clean body font, extreme whitespace, no decorative clutter

QUALITY GUARANTEE WITH USER REFERENCES:
  Even when following user constraints exactly, NEVER produce mediocre output.
  A user saying "pakai warna merah dan font Arial" doesn't mean the result should look cheap.
  → Interpret the constraint generously: "red" → build a sophisticated red palette; "Arial" → use system-ui as fallback, make the layout exceptional
  → Always add the best possible version of what they asked for
  → Your job is to make their vision look better than they imagined it

═══════════════════════════════════════
GAME MODE
═══════════════════════════════════════
REQUIRED ARCHITECTURE:
  - requestAnimationFrame game loop (not setInterval)
  - Fixed timestep physics: const dt = Math.min(delta, 50) / 1000
  - Full state machine: 'start' | 'playing' | 'paused' | 'gameover' | 'win'
  - Responsive canvas: resize listener + devicePixelRatio scaling for crisp rendering
  - Mobile: virtual joystick OR swipe detection + on-screen action buttons
  - Web Audio API for procedurally generated SFX (oscillator-based, no files)
  - localStorage high score persistence
  - P key = pause, ESC = menu

REQUIRED POLISH:
  - Screen shake on hit/damage (canvas context.translate with random offset)
  - Particle system: pool of 100+ particle objects, reused to avoid GC
  - Hit flash: white overlay for 3 frames on collision
  - Combo multiplier displayed prominently (x2, x3...)
  - Lives/health with animated hearts or energy bar
  - Start screen with animated demo/attract mode
  - Game over screen: score, high score, best run stats
  - Difficulty curve: speed/spawn rate tied to score milestones

VISUAL GAME STYLE:
  - Dark vibrant theme: #0A0A1A background, neon accents
  - Custom canvas font rendering (fillText with custom bitmap or canvas font)
  - Glow effects: context.shadowBlur + context.shadowColor
  - Gradient fills for player/enemy sprites (createLinearGradient / createRadialGradient)

═══════════════════════════════════════
APP / TOOL MODE
═══════════════════════════════════════
ARCHITECTURE (for apps/dashboards):
  - SPA pattern: one HTML file, JS-controlled view switching (hidden/visible divs)
  - localStorage as DB: all data as JSON arrays, CRUD with unique IDs (crypto.randomUUID())
  - App state object: const state = { view, data... } — single source of truth
  - render() function: pure re-renders triggered by state changes
  - Event delegation on document for dynamic content

REQUIRED APP UX:
  - Toast notification system (success/error/warning, auto-dismiss 3s, slide-in)
  - Modal system with Escape key close
  - Empty states with SVG illustration and helpful prompt
  - Seed localStorage with 10-20 realistic records on first load

REQUIRED TOOL BEHAVIOR:
  - All logic ACTUALLY WORKS — real algorithms, real math, real conversions
  - Instant feedback: input event listeners, not form submit
  - No fake results — if user types a number, compute the real answer
  - Input validation with friendly inline error messages (never alert())
  - Copy-to-clipboard on every result (with "Copied!" feedback)
  - History panel: last 10 calculations stored in localStorage
  - Keyboard: Enter triggers action, Escape clears, Tab for navigation

═══════════════════════════════════════
LANDING PAGE MODE
═══════════════════════════════════════
IMAGE RULES — CRITICAL: IMAGES MUST ALWAYS RENDER
  Use Picsum Photos — free, open source, always online, no API key needed.

  FORMAT FOR <img> TAGS:
    <img src="https://picsum.photos/seed/{SEED}/{WIDTH}/{HEIGHT}" alt="description" style="width:100%;height:100%;object-fit:cover;" loading="lazy" onerror="this.style.display='none'">

  FORMAT FOR CSS background-image:
    background-image: url('https://picsum.photos/seed/{SEED}/{WIDTH}/{HEIGHT}');

  SEED WORD SELECTION — pick a seed word that matches the image topic:
    Technology / SaaS    → seed: technology, digital, code, software, server, data, network
    Business / Corporate → seed: business, office, meeting, professional, team, corporate
    People / Portrait    → seed: people, person, portrait, woman, man, team
    Architecture         → seed: architecture, building, interior, room, space, urban
    Nature / Outdoor     → seed: nature, forest, mountain, ocean, sky, landscape, garden
    Food / Restaurant    → seed: food, restaurant, meal, coffee, cooking, kitchen
    Fashion / Lifestyle  → seed: fashion, lifestyle, style, model, clothing
    Health / Fitness     → seed: fitness, health, sport, workout, wellness, yoga
    Abstract / Dark      → seed: abstract, dark, texture, pattern, minimal, gradient
    Product / Commerce   → seed: product, ecommerce, shopping, minimal, studio
    City / Travel        → seed: city, travel, street, urban, skyline, destination
    Luxury / Premium     → seed: luxury, elegant, premium, gold, marble, sophistication

  RECOMMENDED SIZES:
    Hero banner    → 1400/800 or 1600/900
    Feature cards  → 800/500 or 600/400
    Team avatars   → 200/200 or 400/400
    Gallery items  → 600/450 or 800/600
    Testimonial    → 100/100 (square for avatars)
    Section bg     → 1600/900

  EXAMPLE CORRECT USAGE:
    <img src="https://picsum.photos/seed/technology/1400/800" alt="Modern technology workspace" style="width:100%;height:100%;object-fit:cover;" loading="lazy" onerror="this.style.display='none'">
    <img src="https://picsum.photos/seed/team/400/400" alt="Team member" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" loading="lazy" onerror="this.style.display='none'">

  NEVER USE:
    ✗ https://images.unsplash.com/... (requires API key, often 403s)
    ✗ <img src="#"> or <img src="placeholder.jpg"> or src=""
    ✗ Empty or broken image URLs of any kind

REQUIRED SECTIONS (all must be present, fully coded — MINIMUM 12 sections):
  1. STICKY NAVBAR — logo, nav links, CTA button, mobile hamburger; transparent → frosted glass on scroll
  2. HERO — full viewport, 72-96px display headline, subtext, 2 CTA buttons, visual element (image/animation/3D)
  3. SOCIAL PROOF — logos or stats row (animated counters on scroll: 10,000+ → counts up from 0)
  4. FEATURES/BENEFITS — 6-8 item grid, icon per feature (inline SVG only, no emoji icons), description + sub-detail
  5. HOW IT WORKS — 3-5 step process with icons, connectors, and descriptive paragraphs (not one-liners)
  6. SHOWCASE — alternating image/text blocks (minimum 3 pairs) OR masonry gallery with hover overlay effects
  7. TESTIMONIALS — 5+ detailed quotes with avatar, name, title, company, star rating, and 2-3 sentence quote
  8. COMPARISON TABLE — 3 columns (yours vs competitors), 6-8 feature rows, checkmarks/x marks, highlighted middle
  9. PRICING — 3 tiers with full feature lists (8+ items each), monthly/annual toggle with JS, most popular badge
  10. FAQ — 8-10 questions, smooth accordion with CSS max-height transition, categorized if applicable
  11. FINAL CTA SECTION — bold full-width conversion section, email input, headline, subtext, trust badges
  12. FOOTER — 4-column layout: product links, company links, social icons, newsletter form; copyright, legal links

REQUIRED ANIMATIONS:
  1. Hero entrance: staggered translateY(40px) → 0 + opacity 0 → 1, each child 100ms delayed
  2. Scroll reveal: IntersectionObserver threshold:0.12, adds 'visible' class → CSS transition fires
  3. Stat counters: count from 0 to target over 1.5s (easeOutExpo curve) when scrolled into view
  4. Navbar glass: window.scrollY > 60 → add class with backdrop-filter: blur(16px) + semi-transparent bg
  5. Button hover: scale(1.04) + box-shadow depth increase + color shift (all in CSS transition)
  6. Card hover: translateY(-6px) + shadow + optional border glow
  7. Ambient hero: 2-3 gradient orbs animating with @keyframes (slow drift, 8-15s loops)
  8. Mobile menu: slide-down with max-height 0 → auto trick via CSS

TYPOGRAPHY PAIRINGS (choose one, match to aesthetic):
  Luxury/Editorial:   'Cormorant Garamond' + 'Jost'           → weights 300,400,700
  Modern/Tech:        'Space Grotesk' + 'Inter'               → weights 400,500,700
  Bold/Agency:        'Bebas Neue' + 'DM Sans'                → weights 400 + 300,400,700
  Futuristic:         'Orbitron' + 'Exo 2'                    → weights 400,700,900
  Minimal/Swiss:      'Syne' + 'Manrope'                      → weights 400,600,800
  Organic/Warm:       'Playfair Display' + 'Lato'             → weights 400,700 + 300,400
  Friendly/Round:     'Nunito' + 'Open Sans'                  → weights 400,600,800
  Editorial/Impact:   'Oswald' + 'Source Serif 4'             → weights 400,700
  Always import via Google Fonts @import in <style> block

═══════════════════════════════════════
CSS EXCELLENCE STANDARDS
═══════════════════════════════════════
MANDATORY CSS ARCHITECTURE:
  :root {
    --color-bg: ...;
    --color-surface: ...;
    --color-border: ...;
    --color-text-primary: ...;
    --color-text-secondary: ...;
    --color-accent: ...;
    --color-accent-hover: ...;
    --color-accent-2: ...;
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-xl: 32px;
    --shadow-sm: ...;
    --shadow-md: ...;
    --shadow-lg: ...;
    --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    --font-display: '...', sans-serif;
    --font-body: '...', sans-serif;
  }

REQUIRED CSS TECHNIQUES (use all that apply):
  - Custom scrollbar: ::-webkit-scrollbar + ::-webkit-scrollbar-thumb
  - Selection highlight: ::selection { background: var(--color-accent); color: #fff; }
  - Gradient text: background: linear-gradient(...); -webkit-background-clip: text; color: transparent;
  - Glass panels: background: rgba(255,255,255,0.06); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.12);
  - Grain overlay on hero: ::after with SVG noise filter or url("data:image/svg+xml,...") at 3% opacity
  - CSS clip-path for diagonal section dividers
  - CSS grid with named areas for complex layouts
  - @keyframes for: fadeInUp, float, pulse, shimmer, spin, slideIn

MINIMUM 5 UNIQUE @keyframes ANIMATIONS:
  @keyframes fadeInUp { from { opacity:0; transform: translateY(30px); } to { opacity:1; transform: translateY(0); } }
  @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
  @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
  + at least 1 custom one specific to the design

RESPONSIVE BREAKPOINTS:
  Mobile first. All layouts mobile by default.
  @media (min-width: 640px)  { }
  @media (min-width: 768px)  { }
  @media (min-width: 1024px) { }
  @media (min-width: 1280px) { }

═══════════════════════════════════════
JS EXCELLENCE STANDARDS
═══════════════════════════════════════
CODE QUALITY REQUIREMENTS:
  - Use const/let — never var
  - Arrow functions for callbacks
  - Destructuring for readability
  - Optional chaining (?.) for safe property access
  - Template literals for all string interpolation
  - DOMContentLoaded wrapper for all initialization
  - No global state pollution — use IIFE or module pattern if needed

PERFORMANCE:
  - Debounce resize handlers: let resizeTimer; window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(fn, 150); })
  - IntersectionObserver instead of scroll events for reveal animations
  - requestAnimationFrame for all smooth animations (never CSS transitions on layout properties)
  - Event delegation: document.addEventListener('click', e => { if (e.target.matches('.btn')) {...} })

INTERACTIVITY REQUIREMENTS:
  - All form inputs: validate on blur, show inline error below field (not alert())
  - All modals: Escape key closes, click outside closes, focus trap inside
  - All toasts: slide in from right, auto-dismiss after 3s, click to dismiss early
  - All accordions: CSS max-height transition (not jQuery slideToggle)
  - All dropdowns: close on outside click via document listener

═══════════════════════════════════════
CONTENT EXCELLENCE
═══════════════════════════════════════
Write content that fits the context:
  - Business names: realistic and relevant to the industry (not "Acme Corp")
  - Testimonials: specific names (full first+last), realistic titles, specific praise
  - Stats: believable numbers that make sense for the business stage
  - Pricing: researched price points for the industry, not round numbers
  - Feature descriptions: concrete benefits, not vague platitudes
  - CTA copy: action-oriented, specific (not just "Learn More" or "Click Here")
  - Error messages: helpful and human (not "Error 404" or "Invalid input")

ICON STRATEGY:
  - Always use inline SVG — never emoji as primary icons
  - Consistent stroke width (1.5px or 2px) across all icons
  - Icons sized 20-24px in body, 32-48px for feature cards
  - Use simple geometric shapes (no external icon libraries needed for basic icons)

═══════════════════════════════════════
OUTPUT DENSITY MANDATE
═══════════════════════════════════════
You have a MASSIVE output budget (65,000 tokens). NEVER produce thin, half-built output.

MINIMUM LINE COUNTS — NON-NEGOTIABLE:
  Landing Page:  1500+ lines (every section complete, all animations, rich deep content)
  App / Tool:    1200+ lines (all views, modals, full CRUD logic, seed data, onboarding)
  Game:          1200+ lines (game loop, particles, sound, 3+ screens, mobile controls)

CHARACTER COUNT MANDATE:
  Every output MUST exceed 50,000 characters. 65,000 tokens ≈ 250,000+ possible chars.
  If you approach "done" before 50k chars — DO NOT STOP. Instead:
  → Add more features and interactivity to existing sections
  → Add richer micro-animations and hover states
  → Add more testimonials, FAQ items, feature cards, team members
  → Add a bonus section (comparison table, process steps, stats breakdown, gallery)
  → Deepen every JS function with more logic and edge case handling
  You are NOT done until you have written at minimum 50,000 characters.

NO COMMENTS TOKEN BUDGET RULE:
  Do NOT write any comments anywhere in the output. Not HTML <!-- -->, not JS // or /* */, not CSS /* */.
  Every single character of output must be executable code.
  Comments consume your generation budget without adding any visual or functional value.
  The 65,000 token budget is for CODE, not explanations of the code.

DENSITY CHECKLIST — before finishing, verify:
  ✅ Every section has unique visual treatment (no two sections look the same)
  ✅ At least 8 distinct hover/interaction states across the page
  ✅ At least 5 @keyframe animations defined and used
  ✅ Mobile layout tested at 375px (mentally trace through the breakpoints)
  ✅ All buttons have hover + active + focus states
  ✅ Forms have validation (not just HTML5 required attr)
  ✅ No placeholder or "coming soon" content anywhere
  ✅ Content is specific, realistic, and contextually appropriate
  ✅ Design is cohesive — one aesthetic direction executed consistently
  ✅ Zero comments anywhere in the output

═══════════════════════════════════════
QUALITY FINAL CHECK
═══════════════════════════════════════
Every output must be ALL of these:
  → Actually functional — every interaction works without errors
  → Visually extraordinary — someone would genuinely be impressed
  → Fully responsive — flawless from 375px to 1440px
  → Complete — no half-finished sections, no TODOs in comments
  → Contextually appropriate — fits the user's industry and audience
  → 2025-quality — modern patterns, current aesthetics, not dated

Think: "Would a senior engineer at a top design agency be proud to ship this?"
If not — add more. Polish more. Make it better.`;

// ═══════════════════════════════════════════════════════════════════════════════
// SUMMARY PROMPT — ADVANCED
// ═══════════════════════════════════════════════════════════════════════════════

const SUMMARY_SYSTEM_PROMPT = `You are Alsytes — a friendly AI website builder. You just finished generating a complete website or web app for the user.

Write a friendly, enthusiastic summary in casual Bahasa Indonesia mixed with English tech terms (like a developer naturally speaks in Indonesia). Be specific about what was actually built.

FORMAT:
1. Opening excited line (e.g. "Selesai! Website-nya udah jadi nih! 🎉")
2. One sentence: type + concept
3. **Yang udah dibikin:** — bullet list of ALL main features, sections, or game mechanics (pakai emoji setiap bullet)
4. **Cara pakainya:** — brief usage tips (especially for games/apps)
5. **Tech notes:** (if relevant) — e.g. "Data tersimpan di localStorage", "Skor otomatis kesimpan"
6. Closing encouragement (1 line)

RULES:
- Be specific — base the response on what was ACTUALLY in the generated code
- Emoji-heavy: ✅ 🎮 💾 🔧 📊 🎨 🚀 ⚡ etc.
- Short bullets (max 1 line each)
- Total: 150-250 words
- NO markdown headers with # — use **bold** for section titles only`;

// ═══════════════════════════════════════════════════════════════════════════════
// EDIT SYSTEM PROMPT — ADVANCED
// ═══════════════════════════════════════════════════════════════════════════════

export const EDIT_SYSTEM_PROMPT = `You are Alsytes — an elite frontend engineer specializing in precise, high-quality edits to existing HTML websites.

Your task: receive an existing HTML file + edit request → return the COMPLETE updated HTML.

STRICT OUTPUT RULES:
1. Return ONLY raw HTML code — no explanations, no markdown fences
2. Output MUST start with <!DOCTYPE html> and end with </html>
3. Return the ENTIRE file, not just changed sections
4. Preserve everything not explicitly requested to change
5. ZERO SYNTAX ERRORS — close all tags, match all brackets, terminate all CSS with semicolons
6. ZERO CODE COMMENTS — do NOT write HTML <!-- -->, JS // or /* */, or CSS /* */ comments anywhere. Pure executable code only.
7. IMAGES: preserve all existing image URLs; if adding new images use complete Picsum URLs: https://picsum.photos/seed/{SEED}/{WIDTH}/{HEIGHT} with onerror="this.style.display='none';"

EDIT QUALITY RULES:
- Match the existing design language exactly (same fonts, same color variables, same border-radius)
- If adding new sections/components, use the same CSS variable tokens already defined in :root
- If adding new JS, use the same code style and patterns already in the file
- Never downgrade quality — the edit should feel seamless, indistinguishable from the original
- Maintain mobile responsiveness after every change
- Never break existing functionality

USER INTENT RULES:
- "change X to Y" → change only that, preserve everything else
- "add X" → add it in the most contextually appropriate location
- "fix X" → fix the root cause, not just the symptom
- "make it more X" → apply the aesthetic quality throughout
- If the request is ambiguous, make the most useful interpretation`;

// ═══════════════════════════════════════════════════════════════════════════════
// SURGICAL EDIT PROMPT
// ═══════════════════════════════════════════════════════════════════════════════

export const SURGICAL_EDIT_SYSTEM_PROMPT = `You are a surgical HTML editor. Produce the minimum targeted patches to fulfill the edit request.

Return ONLY NDJSON — one JSON object per line, no blank lines, no other text, no preamble.

Each line must be valid JSON with exactly these keys:
{"description":"Short human description","search":"exact_substring_to_find","replace":"replacement_string"}

SPEED RULES — respond fast:
1. Return NOTHING except NDJSON patch lines — no explanations, no markdown, no commentary
2. Use the MINIMUM number of patches needed — prefer 1-3 focused patches over many small ones
3. Identify the change immediately and output patches without overthinking
4. For simple text/color/style changes: 1 patch is almost always enough
5. For new sections: 1-2 patches (the new HTML + any new CSS if needed)

ACCURACY RULES — patches must apply cleanly:
1. "search" MUST be verbatim text from the HTML — exact whitespace, newlines, indentation
2. "search" must be unique — include 60-120 chars of surrounding context to ensure uniqueness
3. "replace" is the COMPLETE replacement for that exact "search" string
4. Patches applied top-to-bottom — never overlap patch ranges
5. Preserve all existing CSS variables, fonts, and design language in replacements
6. ZERO CODE COMMENTS in replace values — pure executable HTML/CSS/JS only
7. If adding images: use Picsum URLs https://picsum.photos/seed/{SEED}/{WIDTH}/{HEIGHT}, never empty src`;

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface CreditPackage {
  id: string;
  name: string;
  credits: number;
  price: number;
  pricePerCredit: number;
  badge?: string;
  badgeColor?: string;
  target: string;
  highlight: boolean;
}

export interface StreamCallbacks {
  onChunk: (chunk: string) => void;
  onDone: (fullText: string) => void;
  onError: (error: string) => void;
}

export interface EditPatch {
  description: string;
  search: string;
  replace: string;
}

export interface SurgicalEditCallbacks {
  onPatch: (patch: EditPatch, updatedCode: string, success: boolean) => void;
  onChunk: (rawChunk: string) => void;
  onDone: (finalCode: string, patchCount: number) => void;
  onError: (err: string) => void;
}

// ═══════════════════════════════════════════════════════════════════════════════
// GEMINI API LAYER
// ═══════════════════════════════════════════════════════════════════════════════

const GEMMA_BASE = 'https://generativelanguage.googleapis.com/v1beta';
const MAX_CONTINUATIONS = 1;

function isHtmlComplete(html: string): boolean {
  const trimmed = html.trimEnd().toLowerCase();
  return trimmed.endsWith('</html>');
}

function stripFences(text: string): string {
  const t = text.trim();
  if (t.startsWith('```')) {
    return t.replace(/^```(?:html)?\n?/, '').replace(/\n?```$/, '');
  }
  return t;
}

function stripToDoctype(text: string): string {
  const idx = text.indexOf('<!DOCTYPE');
  if (idx > 0) return text.slice(idx);
  const htmlIdx = text.indexOf('<html');
  if (htmlIdx > 0) return text.slice(htmlIdx);
  return text;
}

function toGemmaPayload(
  messages: Array<{ role: string; content: string }>,
  temperature: number,
  maxOutputTokens: number
) {
  const systemMsg = messages.find((m) => m.role === 'system');
  const chatMsgs = messages.filter((m) => m.role !== 'system');

  const contents = chatMsgs.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  return {
    ...(systemMsg
      ? { system_instruction: { parts: [{ text: systemMsg.content }] } }
      : {}),
    contents,
    generationConfig: {
      temperature,
      maxOutputTokens,
    },
  };
}

function extractGemmaDelta(jsonStr: string): string {
  try {
    const json = JSON.parse(jsonStr);
    const parts = json?.candidates?.[0]?.content?.parts;
    if (!Array.isArray(parts)) return '';
    return parts
      .filter((p: { thought?: boolean }) => !p.thought)
      .map((p: { text?: string }) => p.text ?? '')
      .join('');
  } catch {
    return '';
  }
}

async function streamOnce(
  effectiveKey: string,
  messages: Array<{ role: string; content: string }>,
  temperature: number,
  onChunk: (chunk: string) => void,
  maxOutputTokens = 65000
): Promise<string> {
  const url =
    `${GEMMA_BASE}/models/${ENV.model}:streamGenerateContent` +
    `?key=${effectiveKey}&alt=sse`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toGemmaPayload(messages, temperature, maxOutputTokens)),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API Error ${response.status}: ${errText}`);
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error('No response body received');

  const decoder = new TextDecoder();
  let fullText = '';
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed === 'data: [DONE]') continue;
      if (!trimmed.startsWith('data: ')) continue;

      const delta = extractGemmaDelta(trimmed.slice(6));
      if (delta) {
        fullText += delta;
        onChunk(delta);
      }
    }
  }

  return fullText;
}

function resolveKey(apiKey: string | undefined): string {
  return ENV.apiKey ?? apiKey ?? localStorage.getItem('alsytes_gemma_key') ?? '';
}

// ═══════════════════════════════════════════════════════════════════════════════
// PUBLIC API
// ═══════════════════════════════════════════════════════════════════════════════

export async function generateWebsite(
  apiKey: string | undefined,
  userPrompt: string,
  callbacks: StreamCallbacks
): Promise<void> {
  const { onChunk, onDone, onError } = callbacks;

  const effectiveKey = resolveKey(apiKey);
  if (!effectiveKey) {
    onError('No API key found. Set VITE_GEMINI_API_KEY in your .env or enter it manually. Get a free key at ai.google.dev');
    return;
  }

  try {
    const initialMessages: Array<{ role: string; content: string }> = [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: buildGenerationPrompt(userPrompt),
      },
    ];

    let accumulated = await streamOnce(effectiveKey, initialMessages, 0.85, onChunk, 65000);
    let cleanedCode = stripFences(accumulated);

    let attempts = 0;
    while (!isHtmlComplete(cleanedCode) && attempts < MAX_CONTINUATIONS) {
      attempts++;

      const continuationMessages: Array<{ role: string; content: string }> = [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: buildGenerationPrompt(userPrompt) },
        { role: 'assistant', content: cleanedCode },
        {
          role: 'user',
          content:
            `Your response was cut off before the HTML was complete. ` +
            `Continue EXACTLY from the last character — do NOT repeat any code. ` +
            `The final characters of your last response were: "${cleanedCode.slice(-120)}" ` +
            `Continue from there and end properly with </body></html>.`,
        },
      ];

      const continuation = await streamOnce(effectiveKey, continuationMessages, 0.5, onChunk, 32000);
      cleanedCode = stripFences(cleanedCode + continuation);
    }

    const MIN_TARGET_CHARS = 45000;
    if (isHtmlComplete(cleanedCode) && cleanedCode.length < MIN_TARGET_CHARS) {
      const withoutClose = cleanedCode.replace(/<\/body>\s*<\/html>\s*$/i, '').trimEnd();

      const expansionMessages: Array<{ role: string; content: string }> = [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: buildGenerationPrompt(userPrompt) },
        { role: 'assistant', content: withoutClose },
        {
          role: 'user',
          content:
            `Your output so far is only ${cleanedCode.length.toLocaleString()} characters — far below the required 50,000 character minimum.\n\n` +
            `You stopped too early. The website needs significantly more content and polish.\n\n` +
            `WITHOUT repeating any existing code, continue adding:\n` +
            `• More richly detailed sections (more cards, more items, deeper content)\n` +
            `• Additional micro-animations, hover states, and CSS polish\n` +
            `• More JavaScript interactivity (tooltips, tabs, smooth effects)\n` +
            `• A bonus section that wasn't in the original (comparison table, timeline, stats breakdown, team grid, or process steps)\n` +
            `• Richer footer with more links and a newsletter form\n\n` +
            `Continue the HTML exactly from where it left off (after the last closing tag above) and write at least ${(MIN_TARGET_CHARS - cleanedCode.length).toLocaleString()} more characters before closing with </body></html>.\n\n` +
            `REMINDER: Zero comments — pure executable code only.`,
        },
      ];

      const expansion = await streamOnce(effectiveKey, expansionMessages, 0.85, onChunk, 40000);
      const expandedCode = withoutClose + '\n' + stripFences(expansion);
      cleanedCode = isHtmlComplete(expandedCode)
        ? expandedCode
        : expandedCode + '\n</body></html>';
    }

    onDone(stripToDoctype(cleanedCode));
  } catch (err) {
    onError(err instanceof Error ? err.message : 'Unknown error occurred');
  }
}

function buildGenerationPrompt(userPrompt: string): string {
  const styleSignals = extractStyleSignals(userPrompt);
  const styleBlock = styleSignals.length > 0
    ? `━━━ USER STYLE PREFERENCES DETECTED ━━━\n` +
      `The user\'s prompt contains explicit style signals. Honor ALL of these:\n` +
      styleSignals.map(s => `  → ${s}`).join('\n') + '\n' +
      `These override your default aesthetic choices — execute them at the highest possible quality.\n\n`
    : '';

  return (
    `Build a complete, fully functional, visually extraordinary website or web app based on this description:\n\n` +
    `"${userPrompt}"\n\n` +
    styleBlock +
    `━━━ GENERATION PROCESS ━━━\n\n` +
    `STEP 1 — CLASSIFY: Identify which mode (Game / App+Tool / Landing Page)\n` +
    `STEP 2 — SCAN STYLE SIGNALS: Check the prompt for color, font, mood, vibe, or reference site mentions\n` +
    `STEP 3 — LOCK AESTHETIC: If user gave style signals → honor them fully. If not → choose a bold distinct direction (NEVER generic purple-on-white)\n` +
    `STEP 4 — PLAN: Mentally outline all sections/views/screens before writing a single line\n` +
    `STEP 5 — BUILD: Write dense, production-quality code using the FULL 65k token budget\n\n` +
    `MODE-SPECIFIC REMINDERS:\n` +
    `• Game → working rAF game loop, 3+ screens, particle system, Web Audio SFX, mobile touch controls\n` +
    `• App/Tool → full CRUD with localStorage, real working logic, toast notifications, seed data\n` +
    `• Landing → all 9 sections, IntersectionObserver scroll reveal, animated counters, accordion FAQ\n\n` +
    `CRITICAL RULES — ZERO TOLERANCE:\n` +
    `• ZERO SYNTAX ERRORS — close every HTML tag, match every JS {bracket}, terminate every CSS rule with ;\n` +
    `• ZERO CODE COMMENTS — no HTML <!-- -->, no JS // or /* */, no CSS /* */ anywhere in the output. Every token must be working code.\n` +
    `• IMAGES MUST RENDER — use Picsum Photos: https://picsum.photos/seed/{SEED}/{WIDTH}/{HEIGHT} — always works, no API key needed. NEVER use Unsplash URLs.\n` +
    `• Add onerror="this.style.display=\'none\';" to every <img> tag as safety net\n` +
    `• MUST start with <!DOCTYPE html> and end with </html>\n` +
    `• MUST import Google Fonts via @import in <style>\n` +
    `• MUST define all design tokens as CSS custom properties in :root\n` +
    `• MUST include minimum 5 distinct @keyframe animations\n` +
    `• MUST be fully responsive (375px mobile → 1440px desktop)\n` +
    `• NEVER use Lorem Ipsum — every word must be real and contextually appropriate\n` +
    `• NEVER use emoji as UI icons — use inline SVG paths\n` +
    `• DO NOT stop early or truncate — use the full output budget\n` +
    `• DO NOT include any text before <!DOCTYPE html> or after </html>\n\n` +
    `━━━ FINAL LENGTH MANDATE — READ THIS LAST ━━━\n` +
    `You MUST write a MINIMUM of 50,000 characters of HTML/CSS/JS code.\n` +
    `That is roughly 1,500+ lines. This is NOT optional.\n` +
    `Because you are writing ZERO COMMENTS, every character counts as real code — use that budget to build more sections, more features, more polish.\n` +
    `If you finish all sections and are under 50,000 chars — DO NOT close </html> yet.\n` +
    `Instead, continue by adding:\n` +
    `  • More items to existing sections (more testimonials, more FAQ, more features)\n` +
    `  • A richer showcase section with more cards or gallery items\n` +
    `  • Additional micro-animations and CSS polish\n` +
    `  • More detailed JS interactions (tooltips, smooth scrolling, lazy loads)\n` +
    `  • A bonus section (comparison table, timeline, stats, process steps)\n` +
    `Only close with </body></html> after you have written at least 50,000 characters.\n\n` +
    `Return ONLY the raw HTML, starting NOW with <!DOCTYPE html>.`
  );
}

function extractStyleSignals(prompt: string): string[] {
  const signals: string[] = [];
  const p = prompt.toLowerCase();

  const colorMap: Record<string, string> = {
    'merah': 'COLOR: Red-based palette — primary #DC2626, build a full sophisticated palette around it',
    'biru': 'COLOR: Blue-based palette — primary #2563EB, build a full sophisticated palette around it',
    'hijau': 'COLOR: Green-based palette — primary #16A34A, build a full sophisticated palette around it',
    'kuning': 'COLOR: Amber/yellow palette — primary #D97706, build a full sophisticated palette around it',
    'orange': 'COLOR: Orange palette — primary #EA580C, build a full sophisticated palette around it',
    'ungu': 'COLOR: Purple palette — primary #7C3AED, build a full sophisticated palette around it',
    'pink': 'COLOR: Pink/rose palette — primary #DB2777, build a full sophisticated palette around it',
    'hitam': 'COLOR: Black-dominant — deep dark background, light text, minimal accent color only',
    'putih': 'COLOR: White-dominant — clean bright background, dark text, subtle accent',
    'gold': 'COLOR: Gold/luxury palette — primary #B8860B, pair with black or deep navy',
    'navy': 'COLOR: Navy blue — primary #1E3A5F, professional and authoritative',
    'tosca': 'COLOR: Teal/tosca — primary #0D9488, fresh and modern',
    'coklat': 'COLOR: Brown/earth tones — primary #92400E, warm organic palette',
    'abu': 'COLOR: Gray/slate palette — sophisticated neutral tones, one accent color',
  };
  for (const [kw, instruction] of Object.entries(colorMap)) {
    if (p.includes(kw) || p.includes(`warna ${kw}`) || p.includes(`color ${kw}`)) {
      signals.push(instruction);
    }
  }

  const hexMatches = prompt.match(/#[0-9A-Fa-f]{6}\b/g);
  if (hexMatches) {
    signals.push(`COLOR: Use these exact hex values as accent/primary colors: ${hexMatches.join(', ')}`);
  }

  const fontPattern = /(?:font|typeface|pakai font|gunakan font|use font)\s+([A-Z][a-zA-Z\s]{2,30?})(?=\s|,|\.|$)/gi;
  const fontMatches = [...prompt.matchAll(fontPattern)];
  for (const match of fontMatches) {
    const fontName = match[1].trim();
    signals.push(`FONT: Use "${fontName}" as the primary display/heading font (import via Google Fonts); pick the best complementary body font`);
  }

  const moodMap: Record<string, string> = {
    'minimalis':   'STYLE: Ultra-minimal — extreme whitespace, max 2-3 colors, no decorative clutter, typography-first design',
    'minimal':     'STYLE: Ultra-minimal — extreme whitespace, max 2-3 colors, no decorative clutter, typography-first design',
    'mewah':       'STYLE: Luxury/premium — Cormorant or Playfair Display, gold/champagne accents, generous spacing, refined thin borders',
    'luxury':      'STYLE: Luxury/premium — Cormorant or Playfair Display, gold/champagne accents, generous spacing, refined thin borders',
    'premium':     'STYLE: Luxury/premium — Cormorant or Playfair Display, gold/champagne accents, generous spacing, refined thin borders',
    'fun':         'STYLE: Playful/fun — Nunito or Fredoka One, saturated multi-color palette, bubbly rounded shapes, bouncy CSS animations',
    'playful':     'STYLE: Playful/fun — Nunito or Fredoka One, saturated multi-color palette, bubbly rounded shapes, bouncy CSS animations',
    'lucu':        'STYLE: Playful/fun — Nunito or Fredoka One, saturated multi-color palette, bubbly rounded shapes, bouncy CSS animations',
    'profesional': 'STYLE: Professional/corporate — clean grid, navy/slate palette, conservative formal typography, trust-building layout',
    'corporate':   'STYLE: Professional/corporate — clean grid, navy/slate palette, conservative formal typography, trust-building layout',
    'dark':        'STYLE: Dark theme — background #080B14 to #0D1117, light text, neon/electric accent, glow effects on key elements',
    'gelap':       'STYLE: Dark theme — background #080B14 to #0D1117, light text, neon/electric accent, glow effects on key elements',
    'bold':        'STYLE: Bold/strong — font-weight 800-900, high contrast, large-scale type, powerful visual hierarchy',
    'modern':      'STYLE: Modern/contemporary — geometric sans-serif, sharp angles, asymmetric layout, fresh 2025 web aesthetics',
    'futuristic':  'STYLE: Futuristic/sci-fi — Orbitron or Exo 2, neon accents, grid lines, glitch effects, deep dark background',
    'vintage':     'STYLE: Vintage — warm sepia tones, serif typography, aged textures, nostalgic feel',
    'retro':       'STYLE: Retro — pixel aesthetics or 80s neon, VT323 or Press Start 2P font, CRT scanline effects',
    'elegant':     'STYLE: Elegant — refined spacing, thin elegant type, muted palette with one luxurious accent, ultra-smooth transitions',
    'colorful':    'STYLE: Colorful — vibrant multi-color palette, each section with distinct accent, high energy',
    'clean':       'STYLE: Clean — minimal visual noise, generous whitespace, one accent color, crystal clear hierarchy',
    'rounded':     'STYLE: Rounded corners everywhere — border-radius 16-24px on cards, pill buttons (border-radius: 999px)',
    'kawaii':      'STYLE: Kawaii/cute — pastel palette, Nunito font, soft rounded everything, small heart/star decorative elements',
    'brutalist':   'STYLE: Brutalist — heavy black borders, stark contrast, raw asymmetric layout, Bebas Neue or mono font, zero decorative softness',
    'glassmorphism':'STYLE: Glassmorphism — frosted glass panels (backdrop-filter: blur), semi-transparent surfaces, gradient backgrounds behind glass',
  };
  for (const [kw, instruction] of Object.entries(moodMap)) {
    if (p.includes(kw)) {
      signals.push(instruction);
    }
  }

  const brandMap: Record<string, string> = {
    'apple':      'REFERENCE Apple.com: ultra-minimal, extreme whitespace, product-hero photography, SF-style clean sans-serif, white dominant with one black accent',
    'notion':     'REFERENCE Notion: soft gray background (#F7F6F3), neutral sans-serif, dense information layout, subtle borders, calm productivity',
    'stripe':     'REFERENCE Stripe: indigo/slate tech palette, clean fintech typography, gradient hero, polished professional trust-building design',
    'airbnb':     'REFERENCE Airbnb: warm coral accent (#FF385C), friendly rounded typography, photography-forward, soft approachable UI',
    'vercel':     'REFERENCE Vercel: pure black/white, monospace elements, stark developer aesthetic, no-nonsense bold typography',
    'figma':      'REFERENCE Figma: vibrant multi-color (purple/green/red/blue), playful yet professional, strong confident brand',
    'linear':     'REFERENCE Linear: dark sophisticated (#0F0F10), purple accent, crisp sans-serif, premium feel, smooth micro-animations',
    'framer':     'REFERENCE Framer: dark aesthetic, bold gradients, playful motion-forward design, creative agency energy',
    'spotify':    'REFERENCE Spotify: pure black background (#121212), neon green accent (#1DB954), card-based layout, music/entertainment feel',
    'netflix':    'REFERENCE Netflix: pure black background, bold red accent (#E50914), cinematic dark feel, large imagery, high contrast',
    'tokopedia':  'REFERENCE Tokopedia: green accent (#03AC0E), clean e-commerce layout, trust-focused, familiar Indonesian marketplace feel',
    'gojek':      'REFERENCE Gojek: green (#00AA13), friendly rounded typography, approachable super-app design, Indonesian-market optimized',
    'tiktok':     'REFERENCE TikTok: pure black, neon pink + cyan duotone, bold type, video-forward, Gen-Z energy',
    'twitter':    'REFERENCE Twitter/X: clean black or white, blue accent (#1D9BF0), minimal chrome, content-first layout',
    'discord':    'REFERENCE Discord: dark #313338 background, blurple accent (#5865F2), gaming community feel, rounded UI elements',
  };
  for (const [kw, instruction] of Object.entries(brandMap)) {
    if (p.includes(kw)) {
      signals.push(`REFERENCE: ${instruction}`);
    }
  }

  if (p.includes('tanpa animasi') || p.includes('no animation') || p.includes('jangan animasi') || p.includes('without animation')) {
    signals.push('BEHAVIOR: No entrance animations. Only functional transitions (hover states, modal open/close). Remove all scroll-triggered and ambient animations.');
  }
  if (p.includes('light mode') || p.includes('mode terang') || p.includes('tema terang') || p.includes('bright')) {
    signals.push('THEME: Light mode — white/off-white background, dark text, avoid dark panels');
  }
  if (p.includes('sharp corner') || p.includes('no rounded') || p.includes('tanpa rounded') || p.includes('sudut kotak') || p.includes('kotak saja')) {
    signals.push('SHAPE: Sharp corners throughout — border-radius: 0 or max 2px. No pill buttons, no rounded cards.');
  }
  if (p.includes('gradient') || p.includes('gradasi')) {
    signals.push('VISUAL: Use gradients prominently — gradient text on headlines, gradient backgrounds on hero and CTAs, gradient card borders');
  }
  if (p.includes('flat design') || p.includes('flat UI') || p.includes('no shadow') || p.includes('tanpa shadow')) {
    signals.push('VISUAL: Flat design — zero drop shadows, zero gradients, solid colors only, border-based depth and separation');
  }
  if (p.includes('neumorphism') || p.includes('neumorph')) {
    signals.push('VISUAL: Neumorphism — soft same-colored shadows on light background, extruded/inset button effects, monochromatic palette');
  }

  return signals;
}

export async function generateWebsiteSummary(
  apiKey: string | undefined,
  userPrompt: string,
  generatedHtml: string,
  callbacks: StreamCallbacks
): Promise<void> {
  const { onChunk, onDone, onError } = callbacks;

  const effectiveKey = resolveKey(apiKey);
  if (!effectiveKey) {
    onError('No API key');
    return;
  }

  try {
    const htmlLen = generatedHtml.length;
    const htmlPreview =
      generatedHtml.slice(0, 3000) +
      (htmlLen > 6000 ? '\n...\n' + generatedHtml.slice(Math.floor(htmlLen / 2), Math.floor(htmlLen / 2) + 2000) : '') +
      (htmlLen > 4000 ? '\n...\n' + generatedHtml.slice(-2000) : '');

    const messages: Array<{ role: string; content: string }> = [
      { role: 'system', content: SUMMARY_SYSTEM_PROMPT },
      {
        role: 'user',
        content:
          `User request: "${userPrompt}"\n\n` +
          `Generated HTML (excerpts from start, middle, end):\n\`\`\`html\n${htmlPreview}\n\`\`\`\n\n` +
          `Write the summary based on what was actually built.`,
      },
    ];

    const fullText = await streamOnce(effectiveKey, messages, 0.75, onChunk, 1000);
    onDone(fullText);
  } catch (err) {
    onError(err instanceof Error ? err.message : 'Summary generation failed');
  }
}

export async function editWebsite(
  apiKey: string | undefined,
  currentSourceCode: string,
  editPrompt: string,
  callbacks: StreamCallbacks,
  conversationHistory?: Array<{ role: string; content: string }>
): Promise<void> {
  const { onChunk, onDone, onError } = callbacks;

  const effectiveKey = resolveKey(apiKey);
  if (!effectiveKey) {
    onError('No API key found. Set VITE_GEMINI_API_KEY in your .env or enter it manually. Get a free key at ai.google.dev');
    return;
  }

  try {
    const historyMessages: Array<{ role: string; content: string }> = conversationHistory
      ? conversationHistory.slice(-6)
      : [];

    const initialMessages: Array<{ role: string; content: string }> = [
      { role: 'system', content: EDIT_SYSTEM_PROMPT },
      ...historyMessages,
      {
        role: 'user',
        content: buildEditPrompt(currentSourceCode, editPrompt),
      },
    ];

    let accumulated = await streamOnce(effectiveKey, initialMessages, 0.7, onChunk, 65000);
    let cleanedCode = stripFences(accumulated);

    let attempts = 0;
    while (!isHtmlComplete(cleanedCode) && attempts < MAX_CONTINUATIONS) {
      attempts++;

      const continuationMessages: Array<{ role: string; content: string }> = [
        { role: 'system', content: EDIT_SYSTEM_PROMPT },
        ...historyMessages,
        { role: 'user', content: buildEditPrompt(currentSourceCode, editPrompt) },
        { role: 'assistant', content: cleanedCode },
        {
          role: 'user',
          content:
            `Your response was cut off. Continue EXACTLY from: "${cleanedCode.slice(-120)}" ` +
            `Do NOT repeat code. End with </body></html>.`,
        },
      ];

      const continuation = await streamOnce(effectiveKey, continuationMessages, 0.4, onChunk, 32000);
      cleanedCode = stripFences(cleanedCode + continuation);
    }

    onDone(stripToDoctype(cleanedCode));
  } catch (err) {
    onError(err instanceof Error ? err.message : 'Unknown error occurred');
  }
}

function buildEditPrompt(currentSourceCode: string, editPrompt: string): string {
  return (
    `Here is the current HTML website to edit:\n\n${currentSourceCode}\n\n` +
    `━━━ EDIT REQUEST ━━━\n${editPrompt}\n\n` +
    `━━━ EDIT RULES ━━━\n` +
    `• Preserve all existing CSS variables, fonts, and design tokens\n` +
    `• New elements must match existing design language exactly\n` +
    `• Preserve all existing functionality unless asked to change it\n` +
    `• Keep all existing animations and interactions intact\n` +
    `• Output MUST be a complete HTML document ending with </body></html>\n` +
    `• ZERO CODE COMMENTS — no HTML <!-- -->, JS //, or CSS /* */ anywhere\n` +
    `• Return ONLY the complete updated HTML starting with <!DOCTYPE html>.`
  );
}

function compressHtmlForEdit(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+d="[^"]{120,}"/g, ' d="[PATH]"')
    .replace(/(data:[^;]+;base64,)[A-Za-z0-9+/=]{80,}/g, '$1[BASE64]')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export async function surgicalEditWebsite(
  apiKey: string | undefined,
  currentSourceCode: string,
  editPrompt: string,
  callbacks: SurgicalEditCallbacks,
  conversationHistory?: Array<{ role: string; content: string }>
): Promise<void> {
  const { onPatch, onChunk, onDone, onError } = callbacks;

  const effectiveKey = resolveKey(apiKey);
  if (!effectiveKey) {
    onError('No API key found. Set VITE_GEMINI_API_KEY in your .env or enter it manually. Get a free key at ai.google.dev');
    return;
  }

  function applyPatch(code: string, patch: EditPatch): { code: string; success: boolean } {
    if (code.includes(patch.search)) {
      return { code: code.replace(patch.search, patch.replace), success: true };
    }
    const crNorm = patch.search.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    if (code.includes(crNorm)) {
      return { code: code.replace(crNorm, patch.replace), success: true };
    }
    const trimmed = patch.search.trim();
    if (trimmed.length >= 40) {
      const idx = code.indexOf(trimmed);
      if (idx !== -1) {
        return { code: code.slice(0, idx) + patch.replace + code.slice(idx + trimmed.length), success: true };
      }
    }
    const wsCollapsed = patch.search.replace(/\s+/g, ' ').trim();
    if (wsCollapsed.length >= 40) {
      const codeCollapsed = code.replace(/\s+/g, ' ');
      const colIdx = codeCollapsed.indexOf(wsCollapsed);
      if (colIdx !== -1) {
        let origIdx = 0, colCount = 0;
        while (colCount < colIdx && origIdx < code.length) {
          if (code[origIdx] !== ' ' || codeCollapsed[colCount] === ' ') colCount++;
          origIdx++;
        }
        let origEnd = origIdx;
        let colSearchCount = 0;
        while (colSearchCount < wsCollapsed.length && origEnd < code.length) {
          if (code[origEnd] !== ' ' || colSearchCount < wsCollapsed.length) colSearchCount++;
          origEnd++;
        }
        const firstWord = wsCollapsed.slice(0, 40);
        const simpleIdx = code.indexOf(firstWord);
        if (simpleIdx !== -1) {
          return { code: code.slice(0, simpleIdx) + patch.replace + code.slice(simpleIdx + patch.search.length), success: true };
        }
      }
    }
    if (patch.search.length >= 60) {
      const midStart = Math.floor(patch.search.length / 2) - 12;
      const anchor = patch.search.slice(midStart, midStart + 25).trim();
      if (anchor.length >= 20) {
        const anchorIdx = code.indexOf(anchor);
        if (anchorIdx !== -1) {
          const searchStart = Math.max(0, anchorIdx - midStart);
          const region = code.slice(searchStart, searchStart + patch.search.length + 50);
          if (region.replace(/\s+/g, ' ').includes(wsCollapsed.slice(0, 30))) {
            return {
              code: code.slice(0, searchStart) + patch.replace + code.slice(searchStart + patch.search.length),
              success: true,
            };
          }
        }
      }
    }
    return { code, success: false };
  }

  const contextNote = conversationHistory && conversationHistory.length > 0
    ? `\n\nCONVERSATION CONTEXT (previous edits to this page):\n` +
      conversationHistory
        .slice(-4)
        .map(m => `[${m.role === 'user' ? 'User' : 'AI'}]: ${m.content.slice(0, 200)}`)
        .join('\n') +
      `\n\nUse this context to understand the design direction when making the current edit.`
    : '';

  const compressedSource = compressHtmlForEdit(currentSourceCode);
  const inputSizeNote = currentSourceCode.length > 30000
    ? `\n\nNOTE: Source shown here is whitespace-compressed for brevity (${compressedSource.length} chars). ` +
      `Your search strings MUST still exactly match the original uncompressed source. ` +
      `Focus on unique text content and attribute values in your search strings — avoid matching on whitespace patterns.`
    : '';

  try {
    const surgicalMessages: Array<{ role: string; content: string }> = [
      { role: 'system', content: SURGICAL_EDIT_SYSTEM_PROMPT },
      {
        role: 'user',
        content:
          `HTML file to edit:\n\`\`\`html\n${compressedSource}\n\`\`\`\n\n` +
          `Edit instructions: ${editPrompt}${contextNote}${inputSizeNote}\n\n` +
          `Respond with ONLY NDJSON patch lines. ` +
          `Each line: {"description":"...","search":"exact_verbatim_html_substring","replace":"replacement"}\n` +
          `IMPORTANT: "replace" values must contain ZERO code comments.`,
      },
    ];

    let lineBuffer = '';
    let currentCode = currentSourceCode;
    let patchCount = 0;

    await streamOnce(
      effectiveKey,
      surgicalMessages,
      0.2,
      (delta) => {
        onChunk(delta);
        lineBuffer += delta;

        let nlIdx: number;
        while ((nlIdx = lineBuffer.indexOf('\n')) !== -1) {
          const completeLine = lineBuffer.slice(0, nlIdx).trim();
          lineBuffer = lineBuffer.slice(nlIdx + 1);
          if (!completeLine) continue;

          try {
            const patch = JSON.parse(completeLine) as EditPatch;
            if (
              !patch.description ||
              typeof patch.search !== 'string' ||
              typeof patch.replace !== 'string'
            ) continue;

            const result = applyPatch(currentCode, patch);
            if (result.success) {
              currentCode = result.code;
              patchCount++;
            }
            onPatch(patch, currentCode, result.success);
          } catch {
          }
        }
      },
      16000
    );

    const remaining = lineBuffer.trim();
    if (remaining) {
      try {
        const patch = JSON.parse(remaining) as EditPatch;
        if (
          patch.description &&
          typeof patch.search === 'string' &&
          typeof patch.replace === 'string'
        ) {
          const result = applyPatch(currentCode, patch);
          if (result.success) {
            currentCode = result.code;
            patchCount++;
          }
          onPatch(patch, currentCode, result.success);
        }
      } catch { }
    }

    if (patchCount === 0) {
      const fallbackMessages: Array<{ role: string; content: string }> = [
        { role: 'system', content: EDIT_SYSTEM_PROMPT },
        ...(conversationHistory ? conversationHistory.slice(-6) : []),
        {
          role: 'user',
          content:
            `Here is the current HTML website to edit:\n\n${currentSourceCode}\n\n` +
            `━━━ EDIT REQUEST ━━━\n${editPrompt}\n\n` +
            `━━━ EDIT RULES ━━━\n` +
            `• Apply ONLY the requested change — do NOT rewrite other sections\n` +
            `• Preserve all existing CSS variables, fonts, and design tokens\n` +
            `• ZERO CODE COMMENTS — no HTML <!-- -->, JS //, or CSS /* */ anywhere\n` +
            `• Return the COMPLETE updated HTML starting with <!DOCTYPE html>.\n` +
            `• Keep it as close to the original as possible — minimal changes only.`,
        },
      ];
      let fbAccumulated = await streamOnce(effectiveKey, fallbackMessages, 0.5, onChunk, 30000);
      let fbCode = stripFences(fbAccumulated);
      if (!isHtmlComplete(fbCode)) {
        fbCode = fbCode + '\n</body></html>';
      }
      onDone(stripToDoctype(fbCode), 0);
      return;
    }

    onDone(currentCode, patchCount);
  } catch (err) {
    try {
      await editWebsite(apiKey, currentSourceCode, editPrompt, {
        onChunk,
        onDone: (code) => onDone(code, 0),
        onError,
      }, conversationHistory);
    } catch {
      onError(err instanceof Error ? err.message : 'Unknown error occurred');
    }
  }
}

export function extractWebsiteName(prompt: string): string {
  const words = prompt
    .split(/\s+/)
    .filter((w: string) => w.length > 3)
    .slice(0, 4)
    .map((w: string) => w.replace(/[^a-zA-Z0-9]/g, ''))
    .filter(Boolean);

  if (words.length === 0) return 'Untitled Website';

  const name = words
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

  return name.length > 40 ? name.slice(0, 40) + '…' : name;
}
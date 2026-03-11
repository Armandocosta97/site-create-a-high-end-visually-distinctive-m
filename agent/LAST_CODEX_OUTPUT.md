Modified files:
- [src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/index.css)
- [src/components/HeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/HeroSection.jsx)
- [src/components/SignaturePreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/SignaturePreviewSection.jsx)
- [src/components/BrandStoryPreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/BrandStoryPreviewSection.jsx)
- [src/components/MenuHeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/MenuHeroSection.jsx)
- [src/components/MenuCategoriesSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/MenuCategoriesSection.jsx)
- [src/components/AboutHeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/AboutHeroSection.jsx)
- [src/components/StorySection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/StorySection.jsx)
- [src/components/PhilosophySection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/PhilosophySection.jsx)
- [src/components/GalleryHeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryHeroSection.jsx)
- [src/components/GalleryGridSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryGridSection.jsx)
- [src/components/ContactDetailsSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/ContactDetailsSection.jsx)
- [src/components/OpeningHoursSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/OpeningHoursSection.jsx)
- [src/components/FloatingWhatsAppButton.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/FloatingWhatsAppButton.jsx)
- [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/agent/AGENT_REPORT.md)

What was implemented: the Vite starter globals were replaced with a real mobile-first base, responsive nav/footer styling was added through global selectors, and the section grids were adjusted to use safer `minmax(min(100%, ...), 1fr)` tracks so they collapse cleanly at small widths. I also reduced overflow risk in the contact area and fixed WhatsApp CTA by tightening padding, allowing long values to wrap, and constraining the floating pill to the viewport.

Build result: `npm run build` passed with a production build from Vite. I updated [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/agent/AGENT_REPORT.md). I did not run browser-based breakpoint validation or Lighthouse in this turn.

OpenAI Codex v0.111.0 (research preview)
--------
workdir: /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m
model: gpt-5.4
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR, /Users/armandocosta/.codex/memories]
reasoning effort: none
reasoning summaries: none
session id: 019cddc0-724b-7fd3-82a4-95f8829c5bbf
--------
user
# CURRENT TASK EXECUTION PROMPT

You are the coding executor for this project.

## Project path
site-create-a-high-end-visually-distinctive-m

## Source of truth files
- brief/original-prompt.md
- brief/brief-summary.md
- site-spec.json
- docs/DEVELOPMENT_METHOD.md
- agent/TASK_GRAPH.json
- agent/TASK_STATE.json
- agent/CURRENT_TASK_PROMPT.md

## Development method
# Development Method

All sites must follow these rules.

## Objective
- Generate production-ready static websites that are clear, stable, responsive, modular, and easy to validate.
- Prioritize correctness before visual polish.
- Prefer predictable implementation over improvisation.

## Source of Truth
- The human prompt is not the implementation source of truth.
- `site-spec.json` is the only source of truth for pages, sections, navigation, routing, and required features.
- If supported by the project architecture, `content.json` is the source of truth for copy, labels, CTA text, and contact details.
- If supported by the project architecture, `theme.json` is the source of truth for colors, typography, spacing, radius, and visual tokens.
- The implementation flow must be: `prompt -> site-spec.json -> tasks -> code`.
- Never implement pages, routes, sections, navigation items, or features that are not defined in the spec.

## Core Principles
- Build for users first: clarity, speed, and clear actions.
- Keep code modular: reusable components with clear responsibilities.
- Favor consistency over custom one-off solutions.
- Ship small, test often, improve iteratively.
- Prefer deterministic implementation over free interpretation.
- Do not invent structure outside the spec.

## Stack
- Vite
- React
- Component-based architecture

## Required Architecture
Preferred structure:

```txt
src/
  components/
  sections/
  pages/
  layout/
  data/
  assets/
  styles/
  utils/
```

### Rules
- One responsibility per component.
- No giant monolithic page files.
- Reuse shared primitives where possible.
- Avoid duplicated markup patterns across sections.
- Prefer composition over deeply nested conditional JSX.
- Keep structure, content, and styling separated where possible.

## Layout Rules
- Hero must be full width or visually dominant at the top.
- Mobile-first responsive design is mandatory.
- Primary CTA must be visible above the fold.
- Use a max content width for readability, except for intentionally full-bleed sections.
- Maintain a consistent spacing system across all sections.
- Visual hierarchy must be clear: headline -> value -> action.
- No horizontal overflow on any tested breakpoint.
- Sections must feel complete and intentional, not sparse or placeholder-like.

## Required Components
- Header
- Hero
- Sections
- Footer

## Minimum Homepage Requirements
- Every homepage must include a hero section.
- Every homepage must include at least 2 additional meaningful content sections.
- Every homepage must include at least 1 visible CTA.
- If a gallery is required by spec, it must exist and be reachable.
- If contact actions are required by spec, they must be implemented and functional.

## Component Guidelines
- One responsibility per component.
- Keep UI and business logic separated when possible.
- Use props for configuration and avoid hardcoded content inside reusable components.
- Create shared primitives for buttons, headings, cards, containers, and section wrappers.
- Prefer composition over deeply nested conditional JSX.
- Use clear component names and prop names.
- Avoid dead components and unused routes.
- Avoid excessive inline complexity.

## Content Rules
- Content must be specific, concise, user-focused, and business-relevant.
- No lorem ipsum.
- No placeholder text.
- No dummy text.
- No "coming soon" unless explicitly required by the spec.
- No empty sections.
- No empty buttons.
- No empty links.
- Use exactly one meaningful `h1` per page.
- Section headings must be descriptive.
- CTA text must be action-oriented and specific.
- Text must feel realistic for the business type.
- When supported by the architecture, text content should come from `content.json`.
- Reusable sections should accept content through props or mapped data instead of hardcoded strings.

## Gallery
- Use a grid layout.
- Use responsive columns:
  - mobile: 1
  - tablet: 2
  - desktop: 3 or more when appropriate
- Optimize images with compression, proper dimensions, and lazy loading where appropriate.
- Images must have valid sources.
- Images must not be broken.
- Informative images must have meaningful alt text.
- Decorative images may use empty alt text only when semantically appropriate.
- Do not include a gallery navigation item unless the gallery exists and is reachable.

## CTA
- There must be at least one primary CTA in the hero.
- A fixed WhatsApp button must exist only when required by the spec.
- A phone CTA should exist in the hero when relevant to the business type.
- Primary CTA text must be action-oriented and specific.
- CTA style must remain consistent across all pages and sections.
- Every CTA must resolve correctly.
- Telephone CTAs must use valid `tel:` links.
- Email CTAs must use valid `mailto:` links.
- WhatsApp CTAs must use a valid WhatsApp URL format when enabled.
- Internal CTAs must point to an existing section or route.

## Responsive Rules
- Design starts from mobile viewport first.
- No horizontal scroll on any breakpoint.
- Touch targets must be large enough on mobile.
- Fixed CTAs must not cover essential content.
- Header must remain usable on small screens.
- Hero content must remain readable on small screens.
- Text blocks must not become too wide on desktop.
- Images must scale correctly without distortion.
- Grids must collapse cleanly across breakpoints.
- Test at least these breakpoints:
  - 360px
  - 768px
  - 1024px
  - 1440px

## Navigation Integrity
- Every navigation item must point to a real existing destination.
- Do not create links for pages, routes, or sections that do not exist.
- Before considering the implementation complete, verify that every header link, footer link, CTA, and internal navigation target resolves correctly.
- For single-page sections, verify that the target section `id` exists in the rendered page.
- For multi-page navigation, verify that the route exists and renders without 404 errors.
- If the project uses HashRouter, all internal navigation must be compatible with HashRouter.
- Do not mix plain absolute paths and hash-based routes incorrectly.
- If a section or page is not implemented, remove the corresponding navigation item instead of leaving a broken link.
- Navigation should be derived from the structure defined in `site-spec.json` whenever possible.
- Navigation must not be treated as freeform UI content.

## Accessibility
- Use semantic HTML: `header`, `main`, `section`, `footer`, `nav`.
- Ensure readable color contrast.
- All interactive elements must be keyboard accessible.
- Provide meaningful alt text for informative images.
- Decorative images may use empty alt text only when appropriate.
- Keep heading structure logical: `h1 -> h2 -> h3`.
- Buttons must be real buttons when they trigger actions.
- Links must be real links when they navigate.
- Avoid vague labels when the context is unclear.

## Performance
- Optimize and compress media assets.
- Prefer local or controlled assets over fragile third-party hotlinks when possible.
- Use lazy loading for below-the-fold images where appropriate.
- Minimize unnecessary re-renders in React components.
- Avoid heavy dependencies unless they add clear value.
- Keep the implementation lightweight and static-friendly.

## SEO and Content
- One clear `h1` per page.
- Descriptive page title.
- Descriptive meta description.
- Use meaningful section headings and internal links.
- Keep copy concise, scannable, and user-focused.
- Do not sacrifice usability for SEO tricks.

## Code Quality Rules
- Code must remain maintainable and readable.
- Use clear component names.
- Use clear prop names.
- Do not leave dead components in the project.
- Do not leave unused routes in the project.
- Avoid duplicated layout logic when a shared wrapper is appropriate.
- Reusable UI patterns should be extracted into shared primitives.

Preferred shared primitives:
- Button
- Container
- SectionWrapper
- HeadingBlock
- Card
- CTABlock

## Task Execution Constraints
- Modify only the files allowed for the current task.
- Respect protected files.
- Do not introduce unrelated refactors.
- Do not break previously validated functionality.
- Do not change router behavior unless the task explicitly requires it.
- Do not add speculative features.
- Each task must produce the smallest correct change that moves the project forward safely.

## Definition of Done for a Task
A task is complete only if:
- the requested feature is implemented
- the app builds successfully
- the affected UI renders correctly
- navigation remains valid
- no new console errors are introduced
- responsive behavior is not broken
- no placeholder content is left behind

A task is not complete if it only looks correct in code but is not validated in the browser.

## Quality Gates
### Technical Pass
A site passes technical validation only if:
- build succeeds
- required semantic structure exists
- no broken images
- no broken navigation
- no blocking console errors
- required core components are present

### Publishable Pass
A site passes publishable validation only if:
- content feels real and complete
- no placeholder or empty sections exist
- CTA strategy is visible and coherent
- hierarchy is clear
- layout feels intentional on mobile and desktop
- contact actions are usable
- the site does not feel unfinished

A site must not deploy unless it passes both levels.

## Quality Checklist Before Delivery
- Layout matches all required sections and CTA rules.
- Fully responsive and tested on key breakpoints.
- No console errors.
- No broken images.
- No broken navigation.
- No empty sections.
- No placeholder text.
- Hero is strong and readable.
- CTA is visible and functional.
- Contact actions work.
- Heading structure is valid.
- Page title and meta description are set.
- Lighthouse baseline checked for Performance, Accessibility, and Best Practices.
- Final pass completed for text, links, and contact actions.

## Priority Order for Decision Making
When rules conflict, apply this order:
1. source of truth correctness
2. navigation integrity
3. technical stability
4. responsive usability
5. content clarity
6. visual polish
7. implementation elegance


## Original project brief
# Original project prompt

Create a high-end, visually distinctive multi-page website for a modern web agency called Alai Web.

The agency builds:
- modern websites
- fast websites
- SEO-ready websites
- custom business websites
- elegant digital experiences for small businesses

The positioning of the brand is:

"Beautiful. Fast. Effective."

The site must communicate that Alai Web creates websites that are:
- visually refined
- technically solid
- lightweight
- SEO friendly
- designed for real businesses

IMPORTANT STRUCTURE

This must be a REAL multi-page website.

Create separate pages with real routes:

- Home
- Services
- Portfolio
- Process
- About
- Contact

Each page must have a clear purpose.
Do NOT collapse everything into the homepage.
Do NOT simulate pages using anchor sections.

DESIGN PRINCIPLE

The website must feel like a premium modern design studio.

Avoid generic template style.
Avoid repetitive card grids.
Avoid UI patterns that look like cheap startup templates.

Prefer:

- large typographic sections
- editorial layouts
- split image/text compositions
- asymmetrical blocks
- strong visual rhythm
- bold headlines
- large spacing
- full width sections
- layered backgrounds
- minimal containers
- occasional cards only when necessary

IMPORTANT:
Do NOT build the entire site as repeated service cards.
Services should often appear as rows, editorial blocks, or split layouts.

VISUAL STYLE

Modern digital agency aesthetic.

Clean.
Sharp.
Confident.
Minimal but expressive.

Inspired by:
modern SaaS sites
creative digital studios
premium design portfolios.

COLOR PALETTE

Primary brand color: ORANGE.

Suggested palette:

background: #ffffff
text: #111111
brand orange: #F97316
dark section: #0f172a
light gray: #f5f5f5

Orange must be used as:
- accent color
- CTA color
- highlight elements
- interactive states

Avoid overusing orange for large backgrounds.

TYPOGRAPHY

Strong typographic hierarchy.

Headlines:
large, bold, modern

Body text:
clean sans serif

Use typography as a design element.
Large titles should drive sections.

LAYOUT

Prefer sections like:

Hero
Split layout (text + image)
Text driven sections
Editorial feature blocks
Process timeline
Portfolio previews
Full width highlight bands

Avoid stacking 6 identical cards.

HOME PAGE STRUCTURE

1. Hero section

Strong, bold, minimal.

Headline idea:

Websites that look great
and actually work.

Subtext:

Alai Web builds fast, modern websites designed to convert visitors into real customers.

Primary CTA:
Start your project

Secondary CTA:
See our work

Hero design should feel powerful and spacious.

2. Value proposition section

Explain clearly what Alai Web offers.

Avoid cards.
Use 2-3 strong typographic blocks.

Examples:

Beautiful design
Fast performance
SEO foundations

3. Portfolio preview

Large project previews.

Image left / text right style.

Show 3 example projects.

4. How we work preview

Simple process explanation.

Prefer horizontal flow instead of cards.

Example steps:

1 Discovery
2 Design
3 Build
4 Launch

5. CTA section

Encourage visitors to start a project.

SERVICES PAGE

Explain services clearly.

Possible services:

Business websites
Landing pages
Website redesign
Performance optimization
SEO-ready builds

Present services using:

editorial sections
split layouts
icon rows
not repetitive card grids.

PORTFOLIO PAGE

Visual portfolio.

Large images.
Project titles.
Short description.

Portfolio should feel modern and visual.

Avoid tiny thumbnails.

PROCESS PAGE

Explain the workflow.

Steps like:

Discovery
Structure
Design
Development
Launch

Use visual timeline or progressive sections.

ABOUT PAGE

Tell the story of Alai Web.

Explain:

- philosophy
- approach
- design mindset
- focus on performance and simplicity

Tone should feel human and confident.

CONTACT PAGE

Simple and effective.

Include:

contact form
email placeholder
optional WhatsApp CTA
project inquiry CTA

Example email:

hello@alaiweb.com

CTA examples:

Start your project
Tell us about your idea
Let's build something great

FOOTER

Clean modern footer.

Include:

brand name
short tagline
navigation links
contact email
copyright

RESPONSIVE

Fully responsive.

No horizontal overflow.
Typography must scale correctly.
Hero must remain strong on mobile.

QUALITY EXPECTATION

The final site must look like a real modern web agency website.

It must feel:

modern
fast
minimal
professional
distinct

It must NOT look like a generic template.

It must NOT look like restaurant or salon websites.

It must feel like a modern digital product studio.


## Brief summary
# Brief summary

## Original prompt
Create a high-end, visually distinctive multi-page website for a modern web agency called Alai Web.

The agency builds:
- modern websites
- fast websites
- SEO-ready websites
- custom business websites
- elegant digital experiences for small businesses

The positioning of the brand is:

"Beautiful. Fast. Effective."

The site must communicate that Alai Web creates websites that are:
- visually refined
- technically solid
- lightweight
- SEO friendly
- designed for real businesses

IMPORTANT STRUCTURE

This must be a REAL multi-page website.

Create separate pages with real routes:

- Home
- Services
- Portfolio
- Process
- About
- Contact

Each page must have a clear purpose.
Do NOT collapse everything into the homepage.
Do NOT simulate pages using anchor sections.

DESIGN PRINCIPLE

The website must feel like a premium modern design studio.

Avoid generic template style.
Avoid repetitive card grids.
Avoid UI patterns that look like cheap startup templates.

Prefer:

- large typographic sections
- editorial layouts
- split image/text compositions
- asymmetrical blocks
- strong visual rhythm
- bold headlines
- large spacing
- full width sections
- layered backgrounds
- minimal containers
- occasional cards only when necessary

IMPORTANT:
Do NOT build the entire site as repeated service cards.
Services should often appear as rows, editorial blocks, or split layouts.

VISUAL STYLE

Modern digital agency aesthetic.

Clean.
Sharp.
Confident.
Minimal but expressive.

Inspired by:
modern SaaS sites
creative digital studios
premium design portfolios.

COLOR PALETTE

Primary brand color: ORANGE.

Suggested palette:

background: #ffffff
text: #111111
brand orange: #F97316
dark section: #0f172a
light gray: #f5f5f5

Orange must be used as:
- accent color
- CTA color
- highlight elements
- interactive states

Avoid overusing orange for large backgrounds.

TYPOGRAPHY

Strong typographic hierarchy.

Headlines:
large, bold, modern

Body text:
clean sans serif

Use typography as a design element.
Large titles should drive sections.

LAYOUT

Prefer sections like:

Hero
Split layout (text + image)
Text driven sections
Editorial feature blocks
Process timeline
Portfolio previews
Full width highlight bands

Avoid stacking 6 identical cards.

HOME PAGE STRUCTURE

1. Hero section

Strong, bold, minimal.

Headline idea:

Websites that look great
and actually work.

Subtext:

Alai Web builds fast, modern websites designed to convert visitors into real customers.

Primary CTA:
Start your project

Secondary CTA:
See our work

Hero design should feel powerful and spacious.

2. Value proposition section

Explain clearly what Alai Web offers.

Avoid cards.
Use 2-3 strong typographic blocks.

Examples:

Beautiful design
Fast performance
SEO foundations

3. Portfolio preview

Large project previews.

Image left / text right style.

Show 3 example projects.

4. How we work preview

Simple process explanation.

Prefer horizontal flow instead of cards.

Example steps:

1 Discovery
2 Design
3 Build
4 Launch

5. CTA section

Encourage visitors to start a project.

SERVICES PAGE

Explain services clearly.

Possible services:

Business websites
Landing pages
Website redesign
Performance optimization
SEO-ready builds

Present services using:

editorial sections
split layouts
icon rows
not repetitive card grids.

PORTFOLIO PAGE

Visual portfolio.

Large images.
Project titles.
Short description.

Portfolio should feel modern and visual.

Avoid tiny thumbnails.

PROCESS PAGE

Explain the workflow.

Steps like:

Discovery
Structure
Design
Development
Launch

Use visual timeline or progressive sections.

ABOUT PAGE

Tell the story of Alai Web.

Explain:

- philosophy
- approach
- design mindset
- focus on performance and simplicity

Tone should feel human and confident.

CONTACT PAGE

Simple and effective.

Include:

contact form
email placeholder
optional WhatsApp CTA
project inquiry CTA

Example email:

hello@alaiweb.com

CTA examples:

Start your project
Tell us about your idea
Let's build something great

FOOTER

Clean modern footer.

Include:

brand name
short tagline
navigation links
contact email
copyright

RESPONSIVE

Fully responsive.

No horizontal overflow.
Typography must scale correctly.
Hero must remain strong on mobile.

QUALITY EXPECTATION

The final site must look like a real modern web agency website.

It must feel:

modern
fast
minimal
professional
distinct

It must NOT look like a generic template.

It must NOT look like restaurant or salon websites.

It must feel like a modern digital product studio.

## Structured summary
- Site name: site-create-a-high-end-visually-distinctive-m
- Business type: restaurant
- Routing mode: hash
- Pages: home, menu, chi-siamo, gallery, contatti
- Navigation: Home [route:/], Menu [route:/menu], Chi siamo [route:/chi-siamo], Gallery [route:/gallery], Contatti [route:/contatti]
- Validation checks: semantic-structure, navigation-integrity, cta-integrity, images-not-broken, responsive-layout, placeholder-content-absent
- Breakpoints: 360, 768, 1024, 1440
- Gallery: yes
- WhatsApp CTA: yes
- Phone CTA: yes

## Pages and sections
- home: sections [hero (hero), signature-preview (grid-cards-preview), brand-story-preview (split-content-preview)], ctas [home-primary-cta (internal/hero), home-contact-cta (internal/hero), home-whatsapp (external/floating)]
- menu: sections [menu-hero (hero), menu-categories (menu-categories)], ctas [none]
- chi-siamo: sections [about-hero (hero), story (editorial-content), philosophy (split-content)], ctas [none]
- gallery: sections [gallery-hero (hero), gallery-grid (image-grid)], ctas [none]
- contatti: sections [contact-hero (hero), contact-details (contact-block), opening-hours (hours-block)], ctas [contatti-whatsapp (external/body), contatti-phone (external/body)]

## Notes
- Use the original prompt as the richest source of visual and branding intent.
- Use site-spec.json as the implementation contract.
- Use TASK_GRAPH.json as the execution structure.
- Do not invent pages, sections, routes, or navigation items outside the spec.


## Structured spec
```json
{
  "originalPrompt": "Create a high-end, visually distinctive multi-page website for a modern web agency called Alai Web.\n\nThe agency builds:\n- modern websites\n- fast websites\n- SEO-ready websites\n- custom business websites\n- elegant digital experiences for small businesses\n\nThe positioning of the brand is:\n\n\"Beautiful. Fast. Effective.\"\n\nThe site must communicate that Alai Web creates websites that are:\n- visually refined\n- technically solid\n- lightweight\n- SEO friendly\n- designed for real businesses\n\nIMPORTANT STRUCTURE\n\nThis must be a REAL multi-page website.\n\nCreate separate pages with real routes:\n\n- Home\n- Services\n- Portfolio\n- Process\n- About\n- Contact\n\nEach page must have a clear purpose.\nDo NOT collapse everything into the homepage.\nDo NOT simulate pages using anchor sections.\n\nDESIGN PRINCIPLE\n\nThe website must feel like a premium modern design studio.\n\nAvoid generic template style.\nAvoid repetitive card grids.\nAvoid UI patterns that look like cheap startup templates.\n\nPrefer:\n\n- large typographic sections\n- editorial layouts\n- split image/text compositions\n- asymmetrical blocks\n- strong visual rhythm\n- bold headlines\n- large spacing\n- full width sections\n- layered backgrounds\n- minimal containers\n- occasional cards only when necessary\n\nIMPORTANT:\nDo NOT build the entire site as repeated service cards.\nServices should often appear as rows, editorial blocks, or split layouts.\n\nVISUAL STYLE\n\nModern digital agency aesthetic.\n\nClean.\nSharp.\nConfident.\nMinimal but expressive.\n\nInspired by:\nmodern SaaS sites\ncreative digital studios\npremium design portfolios.\n\nCOLOR PALETTE\n\nPrimary brand color: ORANGE.\n\nSuggested palette:\n\nbackground: #ffffff\ntext: #111111\nbrand orange: #F97316\ndark section: #0f172a\nlight gray: #f5f5f5\n\nOrange must be used as:\n- accent color\n- CTA color\n- highlight elements\n- interactive states\n\nAvoid overusing orange for large backgrounds.\n\nTYPOGRAPHY\n\nStrong typographic hierarchy.\n\nHeadlines:\nlarge, bold, modern\n\nBody text:\nclean sans serif\n\nUse typography as a design element.\nLarge titles should drive sections.\n\nLAYOUT\n\nPrefer sections like:\n\nHero\nSplit layout (text + image)\nText driven sections\nEditorial feature blocks\nProcess timeline\nPortfolio previews\nFull width highlight bands\n\nAvoid stacking 6 identical cards.\n\nHOME PAGE STRUCTURE\n\n1. Hero section\n\nStrong, bold, minimal.\n\nHeadline idea:\n\nWebsites that look great\nand actually work.\n\nSubtext:\n\nAlai Web builds fast, modern websites designed to convert visitors into real customers.\n\nPrimary CTA:\nStart your project\n\nSecondary CTA:\nSee our work\n\nHero design should feel powerful and spacious.\n\n2. Value proposition section\n\nExplain clearly what Alai Web offers.\n\nAvoid cards.\nUse 2-3 strong typographic blocks.\n\nExamples:\n\nBeautiful design\nFast performance\nSEO foundations\n\n3. Portfolio preview\n\nLarge project previews.\n\nImage left / text right style.\n\nShow 3 example projects.\n\n4. How we work preview\n\nSimple process explanation.\n\nPrefer horizontal flow instead of cards.\n\nExample steps:\n\n1 Discovery\n2 Design\n3 Build\n4 Launch\n\n5. CTA section\n\nEncourage visitors to start a project.\n\nSERVICES PAGE\n\nExplain services clearly.\n\nPossible services:\n\nBusiness websites\nLanding pages\nWebsite redesign\nPerformance optimization\nSEO-ready builds\n\nPresent services using:\n\neditorial sections\nsplit layouts\nicon rows\nnot repetitive card grids.\n\nPORTFOLIO PAGE\n\nVisual portfolio.\n\nLarge images.\nProject titles.\nShort description.\n\nPortfolio should feel modern and visual.\n\nAvoid tiny thumbnails.\n\nPROCESS PAGE\n\nExplain the workflow.\n\nSteps like:\n\nDiscovery\nStructure\nDesign\nDevelopment\nLaunch\n\nUse visual timeline or progressive sections.\n\nABOUT PAGE\n\nTell the story of Alai Web.\n\nExplain:\n\n- philosophy\n- approach\n- design mindset\n- focus on performance and simplicity\n\nTone should feel human and confident.\n\nCONTACT PAGE\n\nSimple and effective.\n\nInclude:\n\ncontact form\nemail placeholder\noptional WhatsApp CTA\nproject inquiry CTA\n\nExample email:\n\nhello@alaiweb.com\n\nCTA examples:\n\nStart your project\nTell us about your idea\nLet's build something great\n\nFOOTER\n\nClean modern footer.\n\nInclude:\n\nbrand name\nshort tagline\nnavigation links\ncontact email\ncopyright\n\nRESPONSIVE\n\nFully responsive.\n\nNo horizontal overflow.\nTypography must scale correctly.\nHero must remain strong on mobile.\n\nQUALITY EXPECTATION\n\nThe final site must look like a real modern web agency website.\n\nIt must feel:\n\nmodern\nfast\nminimal\nprofessional\ndistinct\n\nIt must NOT look like a generic template.\n\nIt must NOT look like restaurant or salon websites.\n\nIt must feel like a modern digital product studio.",
  "siteName": "site-create-a-high-end-visually-distinctive-m",
  "businessType": "restaurant",
  "architecture": "multi-page",
  "routing": {
    "mode": "hash"
  },
  "pages": [
    {
      "id": "home",
      "route": "/",
      "role": "landing",
      "sections": [
        {
          "id": "hero",
          "type": "hero"
        },
        {
          "id": "signature-preview",
          "type": "grid-cards-preview"
        },
        {
          "id": "brand-story-preview",
          "type": "split-content-preview"
        }
      ],
      "ctas": [
        {
          "id": "home-primary-cta",
          "kind": "internal",
          "placement": "hero",
          "target": {
            "type": "route",
            "value": "/menu"
          }
        },
        {
          "id": "home-contact-cta",
          "kind": "internal",
          "placement": "hero",
          "target": {
            "type": "route",
            "value": "/contatti"
          }
        },
        {
          "id": "home-whatsapp",
          "kind": "external",
          "placement": "floating",
          "target": {
            "type": "whatsapp",
            "value": "whatsapp"
          }
        }
      ]
    },
    {
      "id": "menu",
      "route": "/menu",
      "role": "core",
      "sections": [
        {
          "id": "menu-hero",
          "type": "hero"
        },
        {
          "id": "menu-categories",
          "type": "menu-categories"
        }
      ],
      "ctas": []
    },
    {
      "id": "chi-siamo",
      "route": "/chi-siamo",
      "role": "content",
      "sections": [
        {
          "id": "about-hero",
          "type": "hero"
        },
        {
          "id": "story",
          "type": "editorial-content"
        },
        {
          "id": "philosophy",
          "type": "split-content"
        }
      ],
      "ctas": []
    },
    {
      "id": "gallery",
      "route": "/gallery",
      "role": "content",
      "sections": [
        {
          "id": "gallery-hero",
          "type": "hero"
        },
        {
          "id": "gallery-grid",
          "type": "image-grid"
        }
      ],
      "ctas": []
    },
    {
      "id": "contatti",
      "route": "/contatti",
      "role": "conversion",
      "sections": [
        {
          "id": "contact-hero",
          "type": "hero"
        },
        {
          "id": "contact-details",
          "type": "contact-block"
        },
        {
          "id": "opening-hours",
          "type": "hours-block"
        }
      ],
      "ctas": [
        {
          "id": "contatti-whatsapp",
          "kind": "external",
          "placement": "body",
          "target": {
            "type": "whatsapp",
            "value": "whatsapp"
          }
        },
        {
          "id": "contatti-phone",
          "kind": "external",
          "placement": "body",
          "target": {
            "type": "phone",
            "value": "phone"
          }
        }
      ]
    }
  ],
  "navigation": [
    {
      "label": "Home",
      "type": "route",
      "target": "/"
    },
    {
      "label": "Menu",
      "type": "route",
      "target": "/menu"
    },
    {
      "label": "Chi siamo",
      "type": "route",
      "target": "/chi-siamo"
    },
    {
      "label": "Gallery",
      "type": "route",
      "target": "/gallery"
    },
    {
      "label": "Contatti",
      "type": "route",
      "target": "/contatti"
    }
  ],
  "theme": {
    "mode": "derived-from-prompt"
  },
  "validation": {
    "breakpoints": [
      360,
      768,
      1024,
      1440
    ],
    "checks": [
      "semantic-structure",
      "navigation-integrity",
      "cta-integrity",
      "images-not-broken",
      "responsive-layout",
      "placeholder-content-absent"
    ]
  },
  "features": {
    "gallery": true,
    "whatsappCta": true,
    "phoneCta": true,
    "bookingCta": false,
    "menuPage": false,
    "servicesPage": true
  }
}

```

## Current task id
responsive-polish

## Current task title
Refine responsive layout and spacing

## Current task type
responsive

## Current task target
```json
{
  "breakpoints": [
    360,
    768,
    1024,
    1440
  ]
}
```

## Depends on
- navigation-structure
- section-home-hero
- section-home-signature-preview
- section-home-brand-story-preview
- section-menu-menu-hero
- section-menu-menu-categories
- section-chi-siamo-about-hero
- section-chi-siamo-story
- section-chi-siamo-philosophy
- section-gallery-gallery-hero
- section-gallery-gallery-grid
- section-contatti-contact-hero
- section-contatti-contact-details
- section-contatti-opening-hours

## Files allowed
- src/App.css
- src/index.css
- src/components
- src/pages/Home.jsx
- src/pages/Menu.jsx
- src/pages/ChiSiamo.jsx
- src/pages/Gallery.jsx
- src/pages/Contatti.jsx

## Definition of done
- layout works across required breakpoints
- no horizontal overflow
- spacing and hierarchy are coherent

## Strict execution rules
- Execute only this current task.
- Do not implement future tasks.
- Do not modify files outside the allowed list unless a truly minimal cross-file change is strictly required to preserve build integrity.
- Prefer the allowed files as the primary implementation scope.
- Keep the code modular, readable, and production-oriented.
- Follow the development method strictly.
- Respect the structured spec.
- If the original brief includes stylistic guidance not fully captured by the spec, follow the brief without violating the spec.
- Do not redesign unrelated sections.
- Do not remove already implemented valid work unless required for the current task.
- Keep routing and navigation coherent with the spec.
- Preserve compatibility with the project routing mode.

## Required completion behavior
- Implement the task.
- Run a build check.
- Update agent/AGENT_REPORT.md with a short summary of what was implemented.
- Do not manually change TASK_STATE.json.

## Required output
- Modified files
- What was implemented
- Build result

mcp startup: no servers
codex
I’m checking the current responsive implementation against the task constraints and the allowed files first. Then I’ll tighten spacing and breakpoint behavior only where it affects this `responsive-polish` task.
exec
/bin/zsh -lc "sed -n '1,240p' src/App.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/index.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,240p' agent/CURRENT_TASK_PROMPT.md" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "pwd && rg --files src agent brief docs | rg '"'^(src/(App.css|index.css|pages/(Home|Menu|ChiSiamo|Gallery|Contatti)'"\\.jsx|components/)|agent/AGENT_REPORT\\.md|brief/original-prompt\\.md|brief/brief-summary\\.md|docs/DEVELOPMENT_METHOD\\.md|agent/CURRENT_TASK_PROMPT\\.md|agent/TASK_STATE\\.json|site-spec\\.json)"'$'"'" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 53ms:
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
 succeeded in 53ms:
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

 succeeded in 53ms:
# CURRENT TASK EXECUTION PROMPT

You are the coding executor for this project.

## Project path
site-create-a-high-end-visually-distinctive-m

## Source of truth files
- brief/original-prompt.md
- brief/brief-summary.md
- site-spec.json
- docs/DEVELOPMENT_METHOD.md
- agent/TASK_GRAPH.json
- agent/TASK_STATE.json
- agent/CURRENT_TASK_PROMPT.md

## Development method
# Development Method

All sites must follow these rules.
 succeeded in 53ms:
/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m
docs/DEVELOPMENT_METHOD.md
agent/TASK_STATE.json
agent/AGENT_REPORT.md
agent/CURRENT_TASK_PROMPT.md
src/App.css
src/pages/Home.jsx
src/pages/Gallery.jsx
src/pages/ChiSiamo.jsx
src/pages/Contatti.jsx
src/pages/Menu.jsx
src/index.css
brief/original-prompt.md
brief/brief-summary.md
codex
The global CSS is still close to the Vite starter, so most of the responsive issues are likely coming from inherited defaults rather than page-specific structure. I’m reading the page and component styles next so I can correct layout pressure without redesigning sections.
exec
/bin/zsh -lc 'rg --files src/components src/pages | sort' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Home.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Menu.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/pages/ChiSiamo.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Contatti.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Gallery.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 52ms:
import { useEffect } from "react"
import HeroSection from "../components/HeroSection"
import BrandStoryPreviewSection from "../components/BrandStoryPreviewSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"

export default function Home() {
  useEffect(() => {
    document.title = "Alai Web | Modern websites that look great and work"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Alai Web builds modern, fast, and SEO-ready websites for small businesses that need clarity, performance, and stronger digital presence."
      )
    }
  }, [])

 succeeded in 52ms:
import { useEffect } from "react"
import MenuHeroSection from "../components/MenuHeroSection"
import MenuCategoriesSection from "../components/MenuCategoriesSection"

export default function Menu() {
  useEffect(() => {
    document.title = "Menu | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Browse the current menu with seasonal antipasti, pasta, mains, and desserts presented with a balanced, contemporary dining approach."
      )
    }
  }, [])

  return (
    <main>
 succeeded in 52ms:
src/components/AboutHeroSection.jsx
src/components/BrandStoryPreviewSection.jsx
src/components/ContactDetailsSection.jsx
src/components/ContactHeroSection.jsx
src/components/FloatingWhatsAppButton.jsx
src/components/GalleryGridSection.jsx
src/components/GalleryHeroSection.jsx
src/components/HeroSection.jsx
src/components/MenuCategoriesSection.jsx
src/components/MenuHeroSection.jsx
src/components/OpeningHoursSection.jsx
src/components/PhilosophySection.jsx
src/components/SignaturePreviewSection.jsx
src/components/StorySection.jsx
src/pages/ChiSiamo.jsx
src/pages/Contatti.jsx
src/pages/Gallery.jsx
src/pages/Home.jsx
src/pages/Menu.jsx
 succeeded in 52ms:
import { useEffect } from "react"
import AboutHeroSection from "../components/AboutHeroSection"
import PhilosophySection from "../components/PhilosophySection"
import StorySection from "../components/StorySection"

export default function ChiSiamo() {
  useEffect(() => {
    document.title = "Chi siamo | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read the story, philosophy, and hospitality approach behind a detail-driven dining experience shaped by seasonal ingredients and precise service."
      )
    }
  }, [])

  return (
 succeeded in 52ms:
import { useEffect } from "react"
import ContactHeroSection from "../components/ContactHeroSection"
import ContactDetailsSection from "../components/ContactDetailsSection"
import OpeningHoursSection from "../components/OpeningHoursSection"

export default function Contatti() {
  useEffect(() => {
    document.title = "Contatti | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Alai Web by email, phone, or WhatsApp to discuss your project goals, timeline, and the next step for your digital presence."
      )
    }
  }, [])

  return (
 succeeded in 52ms:
import { useEffect } from "react"
import GalleryHeroSection from "../components/GalleryHeroSection"
import GalleryGridSection from "../components/GalleryGridSection"

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "View the gallery for a closer look at the dining room, plated dishes, kitchen detail, and service atmosphere across the restaurant experience."
      )
    }
  }, [])

  return (
    <main>
codex
The page components are simple wrappers, which is good for this task. I’m tracing the actual layout classes in the section components now so I can fix breakpoint behavior at the source instead of patching around it.
exec
/bin/zsh -lc "sed -n '1,260p' src/components/MenuHeroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/components/FloatingWhatsAppButton.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,320p' src/components/MenuCategoriesSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/components/HeroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/components/SignaturePreviewSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/components/BrandStoryPreviewSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 51ms:
const signatureItems = [
  {
    number: "01",
    title: "Refined visual systems",
    description:
      "Clear typography, measured spacing, and art direction that gives small businesses a sharper digital presence.",
  },
  {
    number: "02",
    title: "Fast, lightweight builds",
    description:
      "Lean front-end decisions keep the experience responsive, readable, and easy to navigate on every screen.",
  },
  {
    number: "03",
    title: "SEO-ready structure",
    description:
      "Semantic markup and purposeful content layouts create a stronger foundation for visibility and conversion.",
  },
]
 succeeded in 53ms:
const whatsappHref =
  "https://api.whatsapp.com/send?text=Hello%20Alai%20Web%2C%20I%27d%20like%20to%20talk%20about%20a%20website%20project."

const styles = {
  link: {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    zIndex: 1000,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    minHeight: "3.5rem",
    padding: "0.85rem 1.1rem",
    borderRadius: "999px",
    border: "1px solid rgba(7, 94, 84, 0.18)",
    background:
      "linear-gradient(135deg, rgba(37, 211, 102, 0.96), rgba(18, 140, 126, 0.96))",
    color: "#ffffff",
    fontWeight: 700,
 succeeded in 53ms:
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "radial-gradient(circle at top left, rgba(249, 115, 22, 0.16), transparent 30%), linear-gradient(135deg, #fff8f1 0%, #ffffff 50%, #f8fafc 100%)",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "2rem",
  },
  layout: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    alignItems: "end",
  },
 succeeded in 53ms:
const menuCategories = [
  {
    name: "Antipasti",
    accent: "Start lightly",
    description:
      "Small plates built for sharing, with bright vegetables, house-made details, and a clean opening rhythm.",
    dishes: ["Roasted peppers, anchovy vinaigrette, toasted breadcrumbs", "Burrata with citrus fennel and warm focaccia", "Crisp zucchini blossoms with ricotta and lemon"],
  },
  {
    name: "Primi",
    accent: "Fresh pasta and risotto",
    description:
      "The center of the menu leans into slow sauces, balanced portions, and the depth that keeps guests lingering.",
    dishes: ["Tagliatelle al ragu with parmesan and black pepper", "Lemon mascarpone ravioli with brown butter sage", "Saffron risotto with roasted shallots and pecorino"],
  },
  {
    name: "Secondi",
    accent: "From the fire",
    description:
      "Wood-fired mains stay focused: quality protein, restrained garnishes, and enough acidity to keep the plate moving.",
 succeeded in 53ms:
import { Link } from "react-router-dom"

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "radial-gradient(circle at top right, rgba(249, 115, 22, 0.18), transparent 28%), linear-gradient(135deg, #fffaf6 0%, #ffffff 48%, #f5f5f5 100%)",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "2.5rem",
    alignItems: "end",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.85rem",
 succeeded in 50ms:
import { Link } from "react-router-dom"

const principles = [
  "Clarity in structure, so visitors always know where to go next.",
  "Restraint in design, so every detail supports the message instead of distracting from it.",
  "Performance in delivery, so the final site feels fast, polished, and dependable.",
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "linear-gradient(180deg, #ffffff 0%, #ffffff 28%, #f8fafc 100%)",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "2rem",
  },
exec
/bin/zsh -lc "sed -n '1,280p' src/components/PhilosophySection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,280p' src/components/StorySection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/components/GalleryHeroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,320p' src/components/ContactDetailsSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,320p' src/components/GalleryGridSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,280p' src/components/OpeningHoursSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/components/AboutHeroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,320p' src/components/ContactHeroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 51ms:
const highlights = [
  {
    label: "Dining room",
    text: "Soft light, natural materials, and a room designed to feel calm before the first course arrives.",
  },
  {
    label: "Kitchen detail",
    text: "Close finishes, precise plating, and the small gestures that give the menu its identity.",
  },
  {
    label: "Service rhythm",
    text: "A visual sequence of evenings shaped by timing, warmth, and a steady pace across the table.",
  },
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
 succeeded in 53ms:
const principles = [
  {
    title: "Semplicita leggibile",
    text: "Riduciamo il rumore per dare spazio a sapori chiari, menu essenziali e scelte che restano immediate per chi si accomoda.",
  },
  {
    title: "Tecnica senza ostentazione",
    text: "La precisione e presente in cucina, ma non chiede attenzione. Serve a rendere il piatto nitido, coerente e naturale.",
  },
  {
    title: "Esperienza che respira",
    text: "Sala, tempi e servizio sono calibrati per accompagnare la conversazione e mantenere l'atmosfera rilassata ma curata.",
  },
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
 succeeded in 53ms:
const storyMoments = [
  {
    label: "Origine",
    text: "Il progetto nasce dal desiderio di offrire una cucina italiana nitida, contemporanea e leggibile, senza perdere calore umano.",
  },
  {
    label: "Metodo",
    text: "Lavoriamo su ingredienti stagionali, preparazioni essenziali e un servizio che accompagna il tavolo con naturalezza.",
  },
  {
    label: "Atmosfera",
    text: "Sala, luci e ritmo del servizio sono pensati per lasciare spazio alla conversazione e far percepire ogni dettaglio con equilibrio.",
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
    background:
 succeeded in 51ms:
const officeHours = [
  { day: "Monday", hours: "09:00 - 18:00" },
  { day: "Tuesday", hours: "09:00 - 18:00" },
  { day: "Wednesday", hours: "09:00 - 18:00" },
  { day: "Thursday", hours: "09:00 - 18:00" },
  { day: "Friday", hours: "09:00 - 16:00" },
  { day: "Saturday", hours: "By request" },
  { day: "Sunday", hours: "Closed" },
]

const styles = {
  section: {
    padding: "0 1.5rem 5rem",
  },
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "2rem",
    borderRadius: "2rem",
    backgroundColor: "#0f172a",
 succeeded in 51ms:
const galleryItems = [
  {
    title: "Chef's tasting course",
    description:
      "A plated sequence focused on sharp color contrast, clean geometry, and seasonal produce.",
    alt: "A refined tasting plate with bright vegetables and precise sauce placement.",
    palette: ["#fff7ed", "#fdba74", "#7c2d12"],
    accent: "Signature dishes",
  },
  {
    title: "Evening service",
    description:
      "Soft light, layered table settings, and a room tuned for intimate conversations over dinner.",
    alt: "An elegant dining room with candlelight, set tables, and warm evening tones.",
    palette: ["#e2e8f0", "#1e293b", "#f97316"],
    accent: "Dining room",
  },
  {
    title: "Open kitchen rhythm",
    description:
 succeeded in 51ms:
const contactDetails = [
  {
    label: "Email",
    value: "hello@alaiweb.com",
    href: "mailto:hello@alaiweb.com",
    description: "Share your goals, timeline, and current site status.",
  },
  {
    label: "Phone",
    value: "+39 02 9475 1280",
    href: "tel:+390294751280",
    description: "Call for a quick conversation about scope and priorities.",
  },
  {
    label: "WhatsApp",
    value: "Message the studio",
    href: "https://wa.me/393331234567?text=Hi%20Alai%20Web%2C%20I%27d%20like%20to%20start%20a%20project.",
    description:
      "Ideal for early project questions, quick feedback, and scheduling the first call.",
    isDark: true,
 succeeded in 50ms:
const values = [
  {
    title: "Stagionalita",
    text: "Il menu segue il tempo degli ingredienti, con piatti che cambiano senza perdere equilibrio.",
  },
  {
    title: "Precisione",
    text: "Ogni dettaglio, dalla cucina alla sala, e misurato per mantenere il servizio chiaro e naturale.",
  },
  {
    title: "Accoglienza",
    text: "L'esperienza resta contemporanea, ma sempre calda, leggibile e pensata per far tornare le persone.",
  },
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
 succeeded in 50ms:
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 6vw, 4rem)",
    background:
      "radial-gradient(circle at top left, rgba(249, 115, 22, 0.16), transparent 30%), linear-gradient(180deg, rgba(249, 115, 22, 0.08) 0%, #ffffff 72%)",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "1.5rem",
  },
  eyebrow: {
    margin: 0,
    color: "#f97316",
    fontSize: "0.875rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
codex
I’ve confirmed the sections are mostly inline-styled, so the safest path is a targeted CSS reset plus a few breakpoint-specific adjustments in the components that are most likely to overflow. Next I’m checking the app shell and route wrapper to make sure the global fixes won’t fight the existing layout.
exec
/bin/zsh -lc "sed -n '1,320p' src/App.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "sed -n '1,260p' src/main.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc 'rg -n "App.css|index.css|#root|HashRouter|Routes|Route|header|footer" src' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc "rg -n \"style=\\{styles\\.|gridTemplateColumns|minmax\\(|position: \\\"fixed\\\"|whiteSpace: \\\"nowrap\\\"\" src/components src/pages" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 52ms:
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ChiSiamo from "./pages/ChiSiamo"
import Gallery from "./pages/Gallery"
import Contatti from "./pages/Contatti"

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Layout>
 succeeded in 52ms:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 succeeded in 53ms:
src/App.css:1:#root {
src/layout/Layout.jsx:14:      <header>
src/layout/Layout.jsx:22:      </header>
src/layout/Layout.jsx:26:      <footer>
src/layout/Layout.jsx:28:      </footer>
src/main.jsx:3:import './index.css'
src/App.jsx:1:import { HashRouter, Routes, Route } from "react-router-dom"
src/App.jsx:11:    <HashRouter>
src/App.jsx:13:        <Routes>
src/App.jsx:14:          <Route path="/" element={<Home />} />
src/App.jsx:15:          <Route path="/menu" element={<Menu />} />
src/App.jsx:16:          <Route path="/chi-siamo" element={<ChiSiamo />} />
src/App.jsx:17:          <Route path="/gallery" element={<Gallery />} />
src/App.jsx:18:          <Route path="/contatti" element={<Contatti />} />
src/App.jsx:19:        </Routes>
src/App.jsx:21:    </HashRouter>
src/components/OpeningHoursSection.jsx:25:  header: {
src/components/OpeningHoursSection.jsx:60:        <div style={styles.header}>
 succeeded in 53ms:
src/components/FloatingWhatsAppButton.jsx:6:    position: "fixed",
src/components/FloatingWhatsAppButton.jsx:40:    whiteSpace: "nowrap",
src/components/FloatingWhatsAppButton.jsx:59:      style={styles.link}
src/components/FloatingWhatsAppButton.jsx:61:      <span aria-hidden="true" style={styles.iconWrap}>
src/components/FloatingWhatsAppButton.jsx:64:      <span style={styles.label}>WhatsApp</span>
src/components/PhilosophySection.jsx:42:    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
src/components/PhilosophySection.jsx:127:    <section id="philosophy" aria-labelledby="philosophy-title" style={styles.section}>
src/components/PhilosophySection.jsx:128:      <div aria-hidden="true" style={styles.glow} />
src/components/PhilosophySection.jsx:129:      <div style={styles.shell}>
src/components/PhilosophySection.jsx:130:        <div style={styles.layout}>
src/components/PhilosophySection.jsx:131:          <div style={styles.intro}>
src/components/PhilosophySection.jsx:132:            <p style={styles.eyebrow}>La nostra filosofia</p>
src/components/PhilosophySection.jsx:133:            <h2 id="philosophy-title" style={styles.title}>
src/components/PhilosophySection.jsx:136:            <p style={styles.lead}>
src/components/PhilosophySection.jsx:141:            <p style={styles.emphasis}>
src/components/PhilosophySection.jsx:147:          <aside aria-label="Principi che guidano il ristorante" style={styles.panel}>
src/components/PhilosophySection.jsx:148:            <p style={styles.panelTitle}>I principi che seguiamo</p>
src/components/PhilosophySection.jsx:149:            <ul style={styles.list}>
src/components/PhilosophySection.jsx:151:                <li key={principle.title} style={styles.item}>
src/components/PhilosophySection.jsx:152:                  <p style={styles.itemTitle}>{principle.title}</p>
codex
I’ve isolated the likely overflow points: the Vite root/body defaults, several `minmax(...)` grids that are too aggressive at 360px, and the fixed WhatsApp pill label. I’m reading the shared layout markup now so the CSS reset can account for the header/footer shell without touching routing or layout logic.
exec
/bin/zsh -lc "sed -n '1,280p' src/layout/Layout.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-mexec
/bin/zsh -lc 'git status --short' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 51ms:
import { NavLink } from "react-router-dom"

const navigationItems = [
  { label: "Home", target: "/" },
  { label: "Menu", target: "/menu" },
  { label: "Chi siamo", target: "/chi-siamo" },
  { label: "Gallery", target: "/gallery" },
  { label: "Contatti", target: "/contatti" },
]

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink key={item.target} to={item.target}>
              {item.label}
            </NavLink>
          ))}
 succeeded in 53ms:
 M agent/AGENT_REPORT.md
 M agent/CURRENT_TASK_PROMPT.md
 M agent/TASK_STATE.json
exec
/bin/zsh -lc "rg -n \"import './App.css'|import \\\"./App.css\\\"\" src" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m exited 1 in 53ms:

codex
I’ve got the edit scope. The changes will be surgical: replace the starter global CSS with a real mobile-first base, add header/footer/nav responsiveness through element selectors, and soften a few section min-widths and fixed-control dimensions that are causing pressure at 360px.
codex
I’m applying the responsive fixes now. The priority is eliminating inherited layout bugs first, then tightening the few section-specific spots that don’t collapse cleanly on narrow screens.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/BrandStoryPreviewSection.jsx
@@ -23,3 +23,3 @@
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryGridSection.jsx
@@ -120,3 +120,3 @@
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/StorySection.jsx
@@ -119,3 +119,3 @@
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/MenuHeroSection.jsx
@@ -17,3 +17,3 @@
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/FloatingWhatsAppButton.jsx
@@ -6,4 +6,4 @@
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
@@ -13,3 +13,4 @@
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
@@ -24,2 +25,3 @@
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/AboutHeroSection.jsx
@@ -32,3 +32,3 @@
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/HeroSection.jsx
@@ -77,3 +77,3 @@
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
@@ -88,2 +88,3 @@
     gap: "0.2rem",
+    minWidth: 0,
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/OpeningHoursSection.jsx
@@ -12,3 +12,3 @@
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
@@ -17,3 +17,3 @@
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
@@ -44,2 +44,3 @@
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
@@ -52,2 +53,3 @@
     textAlign: "right",
+    marginLeft: "auto",
   },
A /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/index.css
:root {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #111111;
  background-color: #ffffff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --page-max-width: 1280px;
  --page-gutter: clamp(1rem, 3vw, 2rem);
  --surface-soft: #f5f5f5;
  --surface-dark: #0f172a;
  --text-muted: #52525b;
  --accent: #f97316;
  --border-soft: rgba(17, 17, 17, 0.08);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 360px;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #ffffff;
  color: #111111;
}

body,
button,
input,
textarea,
select {
  font: inherit;
}

#root {
  width: 100%;
  min-height: 100vh;
  overflow-x: clip;
}

main,
section,
div,
article,
aside,
nav,
header,
footer {
  min-width: 0;
}

img,
svg,
video,
canvas {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
figure {
  margin-top: 0;
}

button,
a,
input,
textarea,
select {
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid rgba(249, 115, 22, 0.35);
  outline-offset: 3px;
}

header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
}

header nav {
  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
  margin: 0 auto;
  padding: 0.9rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0.75rem;
}

header nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  color: #3f3f46;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
}

header nav a:hover,
header nav a[aria-current="page"] {
  background-color: rgba(249, 115, 22, 0.12);
  color: #111111;
}

header nav a:active {
  transform: translateY(1px);
}

header + main {
  display: block;
}

header + main > main {
  display: block;
}

footer {
  padding: 2rem var(--page-gutter) 3rem;
  background: #fffaf5;
  border-top: 1px solid rgba(17, 17, 17, 0.06);
}

footer p {
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  color: var(--text-muted);
  font-size: 0.95rem;
}

@media (min-width: 768px) {
  header nav {
    justify-content: space-between;
  }
}

@media (max-width: 767px) {
  header nav {
    justify-content: flex-start;
  }

  header nav a {
    flex: 1 1 auto;
  }
}
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/MenuCategoriesSection.jsx
@@ -73,3 +73,3 @@
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/SignaturePreviewSection.jsx
@@ -63,3 +63,3 @@
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryHeroSection.jsx
@@ -32,3 +32,3 @@
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "minmax(0, 1.4fr) minmax(min(100%, 280px), 0.9fr)",
     alignItems: "end",
@@ -116,2 +116,10 @@
 export default function GalleryHeroSection() {
+  const responsiveLayout =
+    typeof window !== "undefined" && window.innerWidth < 900
+      ? {
+          ...styles.layout,
+          gridTemplateColumns: "1fr",
+        }
+      : styles.layout
+
   return (
@@ -119,3 +127,3 @@
       <div style={styles.shell}>
-        <div style={styles.layout}>
+        <div style={responsiveLayout}>
           <div style={styles.content}>
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/PhilosophySection.jsx
@@ -41,3 +41,3 @@
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/ContactDetailsSection.jsx
@@ -26,3 +26,3 @@
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
@@ -69,2 +69,3 @@
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
@@ -76,2 +77,3 @@
     textDecoration: "none",
+    textAlign: "center",
   },
@@ -79,3 +81,3 @@
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
@@ -104,2 +106,3 @@
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
@@ -108,2 +111,3 @@
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
apply_patch(auto_approved=true) exited 0 in 146ms:
Success. Updated the following files:
A /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/index.css
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/HeroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/SignaturePreviewSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/BrandStoryPreviewSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/MenuHeroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/MenuCategoriesSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/AboutHeroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/StorySection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/PhilosophySection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryHeroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryGridSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/ContactDetailsSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/OpeningHoursSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/FloatingWhatsAppButton.jsx
D /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/index.css
file update:
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..e0b4f8f53e6909a18575204d793e12c18aae966e
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "minmax(0, 1.4fr) minmax(min(100%, 280px), 0.9fr)",
     alignItems: "end",
   },
   content: {
@@ -114,10 +114,18 @@
 }
 
 export default function GalleryHeroSection() {
+  const responsiveLayout =
+    typeof window !== "undefined" && window.innerWidth < 900
+      ? {
+          ...styles.layout,
+          gridTemplateColumns: "1fr",
+        }
+      : styles.layout
+
   return (
     <section id="gallery-hero" aria-labelledby="gallery-hero-title" style={styles.section}>
       <div style={styles.shell}>
-        <div style={styles.layout}>
+        <div style={responsiveLayout}>
           <div style={styles.content}>
             <p style={styles.eyebrow}>Gallery</p>
             <h1 id="gallery-hero-title" style={styles.title}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1b69ac1dbf4f38400effb042371f7106945d5391
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
+}
+
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
+}
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
+}
+
+body {
+  margin: 0;
+  min-width: 360px;
+  min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
 }
 
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
 a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+  color: inherit;
+  text-decoration: none;
 }
+
 a:hover {
-  color: #535bf2;
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-body {
-  margin: 0;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
   display: flex;
-  place-items: center;
-  min-width: 320px;
-  min-height: 100vh;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
 }
-button:hover {
-  border-color: #646cff;
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+header + main > main {
+  display: block;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
+}
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
+}
+
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

file update:
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..e0b4f8f53e6909a18575204d793e12c18aae966e
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "minmax(0, 1.4fr) minmax(min(100%, 280px), 0.9fr)",
     alignItems: "end",
   },
   content: {
@@ -114,10 +114,18 @@
 }
 
 export default function GalleryHeroSection() {
+  const responsiveLayout =
+    typeof window !== "undefined" && window.innerWidth < 900
+      ? {
+          ...styles.layout,
+          gridTemplateColumns: "1fr",
+        }
+      : styles.layout
+
   return (
     <section id="gallery-hero" aria-labelledby="gallery-hero-title" style={styles.section}>
       <div style={styles.shell}>
-        <div style={styles.layout}>
+        <div style={responsiveLayout}>
           <div style={styles.content}>
             <p style={styles.eyebrow}>Gallery</p>
             <h1 id="gallery-hero-title" style={styles.title}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1b69ac1dbf4f38400effb042371f7106945d5391
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
+}
+
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
+}
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
+}
+
+body {
+  margin: 0;
+  min-width: 360px;
+  min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
 }
 
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
 a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+  color: inherit;
+  text-decoration: none;
 }
+
 a:hover {
-  color: #535bf2;
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-body {
-  margin: 0;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
   display: flex;
-  place-items: center;
-  min-width: 320px;
-  min-height: 100vh;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
 }
-button:hover {
-  border-color: #646cff;
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+header + main > main {
+  display: block;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
+}
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
+}
+
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

codex
The structural fixes are in. I’m doing one cleanup pass now to remove a JS-based breakpoint shortcut and keep all responsiveness declarative in CSS and inline layout values.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryHeroSection.jsx
@@ -32,3 +32,3 @@
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(min(100%, 280px), 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
@@ -116,10 +116,2 @@
 export default function GalleryHeroSection() {
-  const responsiveLayout =
-    typeof window !== "undefined" && window.innerWidth < 900
-      ? {
-          ...styles.layout,
-          gridTemplateColumns: "1fr",
-        }
-      : styles.layout
-
   return (
@@ -127,3 +119,3 @@
       <div style={styles.shell}>
-        <div style={responsiveLayout}>
+        <div style={styles.layout}>
           <div style={styles.content}>
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/index.css
@@ -33,3 +33,3 @@
   margin: 0;
-  min-width: 360px;
+  min-width: 320px;
   min-height: 100vh;
apply_patch(auto_approved=true) exited 0 in 167ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/index.css
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryHeroSection.jsx
file update:
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..98777964b4b521236a4271abcdb1564bf63561b9
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..86b77d9760774a3039a471f2b26e77a40542080d
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
+}
+
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover {
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
+}
+
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
+}
+
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
+}
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header + main > main {
+  display: block;
 }
-button:hover {
-  border-color: #646cff;
+
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

file update:
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..98777964b4b521236a4271abcdb1564bf63561b9
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..86b77d9760774a3039a471f2b26e77a40542080d
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
+}
+
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover {
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
+}
+
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
+}
+
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
+}
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header + main > main {
+  display: block;
 }
-button:hover {
-  border-color: #646cff;
+
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

exec
/bin/zsh -lc 'git diff -- src/index.css src/components/HeroSection.jsx src/components/SignaturePreviewSection.jsx src/components/BrandStoryPreviewSection.jsx src/components/MenuHeroSection.jsx src/components/MenuCategoriesSection.jsx src/components/AboutHeroSection.jsx src/components/StorySection.jsx src/components/PhilosophySection.jsx src/components/GalleryHeroSection.jsx src/components/GalleryGridSection.jsx src/components/ContactDetailsSection.jsx src/components/OpeningHoursSection.jsx src/components/FloatingWhatsAppButton.jsx' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 52ms:
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ff..55d66b9 100644
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@ const styles = {
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c666..d4e329c 100644
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@ const styles = {
   layout: {
     display: "grid",
exec
/bin/zsh -lc 'npm run build' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 846ms:

> site-create-a-high-end-visually-distinctive-m@0.0.0 build
> vite build

vite v7.3.1 building client environment for production...
transforming...
✓ 61 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.67 kB │ gzip:  0.41 kB
dist/assets/index-Ba-OjTAi.css    2.35 kB │ gzip:  1.06 kB
dist/assets/index-BuCA5cq4.js   274.94 kB │ gzip: 84.49 kB
✓ built in 585ms
file update:
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..98777964b4b521236a4271abcdb1564bf63561b9
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..86b77d9760774a3039a471f2b26e77a40542080d
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
+}
+
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover {
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
+}
+
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
+}
+
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
+}
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header + main > main {
+  display: block;
 }
-button:hover {
-  border-color: #646cff;
+
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

codex
The build is clean. I’m updating the task report with only the responsive changes completed here, without touching task state or unrelated project files.
exec
/bin/zsh -lc "sed -n '1,240p' agent/AGENT_REPORT.md" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 52ms:
# AGENT REPORT

Project created.

Prepared TASK page-home-shell (Create home page shell) for execution.

Launching Codex for TASK page-home-shell.

Completed TASK `page-home-shell`.

- Replaced placeholder home page content with a semantic `main` shell.
- Kept the home route mounted in the existing hash router setup.
- Added the required home sections: `hero`, `signature-preview`, and `brand-story-preview`.
- Added working internal CTAs to `/menu` and `/contatti`.

TASK page-home-shell executed by Codex.
Waiting for validation.

TASK page-home-shell completed successfully.
Build passed.
file update:
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..98777964b4b521236a4271abcdb1564bf63561b9
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..86b77d9760774a3039a471f2b26e77a40542080d
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
+}
+
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover {
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
+}
+
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
+}
+
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
+}
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header + main > main {
+  display: block;
 }
-button:hover {
-  border-color: #646cff;
+
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

exec
/bin/zsh -lc 'tail -n 40 agent/AGENT_REPORT.md' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m succeeded in 51ms:
TASK cta-contatti-contatti-whatsapp completed successfully.
Build passed.
Commit created for TASK cta-contatti-contatti-whatsapp.

Prepared TASK cta-contatti-contatti-phone (Add CTA contatti-phone on contatti) for execution.

Launching Codex for TASK cta-contatti-contatti-phone.

TASK cta-contatti-contatti-phone executed by Codex.
Waiting for validation.

TASK cta-contatti-contatti-phone completed successfully.
Build passed.
Commit created for TASK cta-contatti-contatti-phone.

Prepared TASK navigation-structure (Build navigation from spec) for execution.

Launching Codex for TASK navigation-structure.

TASK navigation-structure executed by Codex.
file update:
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..98777964b4b521236a4271abcdb1564bf63561b9
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..86b77d9760774a3039a471f2b26e77a40542080d
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
+}
+
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover {
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
+}
+
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
+}
+
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
+}
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header + main > main {
+  display: block;
 }
-button:hover {
-  border-color: #646cff;
+
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/agent/AGENT_REPORT.md
@@ -574 +574,13 @@
 Launching Codex for TASK responsive-polish.
+
+Completed TASK `responsive-polish`.
+
+- Replaced the Vite starter global styles in `src/index.css` with a mobile-first base reset and responsive header/footer/navigation styling.
+- Tightened section grids and split layouts across the allowed components so they collapse safely at narrow widths without horizontal overflow.
+- Reduced small-screen pressure in contact and floating CTA areas by softening paddings, enabling text wrapping, and constraining the fixed WhatsApp button.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
apply_patch(auto_approved=true) exited 0 in 156ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/agent/AGENT_REPORT.md
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index e223d1ec183d0115de5b05e4f9f17cc7a371b2f5..fd11d6850f515f894b80861c414ab73c17454a7b
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -572,3 +572,15 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+
+Completed TASK `responsive-polish`.
+
+- Replaced the Vite starter global styles in `src/index.css` with a mobile-first base reset and responsive header/footer/navigation styling.
+- Tightened section grids and split layouts across the allowed components so they collapse safely at narrow widths without horizontal overflow.
+- Reduced small-screen pressure in contact and floating CTA areas by softening paddings, enabling text wrapping, and constraining the fixed WhatsApp button.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..98777964b4b521236a4271abcdb1564bf63561b9
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..86b77d9760774a3039a471f2b26e77a40542080d
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
+}
+
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover {
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
+}
+
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
+}
+
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
+}
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header + main > main {
+  display: block;
 }
-button:hover {
-  border-color: #646cff;
+
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index e223d1ec183d0115de5b05e4f9f17cc7a371b2f5..fd11d6850f515f894b80861c414ab73c17454a7b
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -572,3 +572,15 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+
+Completed TASK `responsive-polish`.
+
+- Replaced the Vite starter global styles in `src/index.css` with a mobile-first base reset and responsive header/footer/navigation styling.
+- Tightened section grids and split layouts across the allowed components so they collapse safely at narrow widths without horizontal overflow.
+- Reduced small-screen pressure in contact and floating CTA areas by softening paddings, enabling text wrapping, and constraining the fixed WhatsApp button.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..98777964b4b521236a4271abcdb1564bf63561b9
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..86b77d9760774a3039a471f2b26e77a40542080d
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
+}
+
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover {
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
+}
+
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
+}
+
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
+}
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header + main > main {
+  display: block;
 }
-button:hover {
-  border-color: #646cff;
+
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

codex
Modified files:
- [src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/index.css)
- [src/components/HeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/HeroSection.jsx)
- [src/components/SignaturePreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/SignaturePreviewSection.jsx)
- [src/components/BrandStoryPreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/BrandStoryPreviewSection.jsx)
- [src/components/MenuHeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/MenuHeroSection.jsx)
- [src/components/MenuCategoriesSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/MenuCategoriesSection.jsx)
- [src/components/AboutHeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/AboutHeroSection.jsx)
- [src/components/StorySection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/StorySection.jsx)
- [src/components/PhilosophySection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/PhilosophySection.jsx)
- [src/components/GalleryHeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryHeroSection.jsx)
- [src/components/GalleryGridSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/GalleryGridSection.jsx)
- [src/components/ContactDetailsSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/ContactDetailsSection.jsx)
- [src/components/OpeningHoursSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/OpeningHoursSection.jsx)
- [src/components/FloatingWhatsAppButton.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/src/components/FloatingWhatsAppButton.jsx)
- [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/agent/AGENT_REPORT.md)

What was implemented: the Vite starter globals were replaced with a real mobile-first base, responsive nav/footer styling was added through global selectors, and the section grids were adjusted to use safer `minmax(min(100%, ...), 1fr)` tracks so they collapse cleanly at small widths. I also reduced overflow risk in the contact area and fixed WhatsApp CTA by tightening padding, allowing long values to wrap, and constraining the floating pill to the viewport.

Build result: `npm run build` passed with a production build from Vite. I updated [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-high-end-visually-distinctive-m/agent/AGENT_REPORT.md). I did not run browser-based breakpoint validation or Lighthouse in this turn.
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index e223d1ec183d0115de5b05e4f9f17cc7a371b2f5..fd11d6850f515f894b80861c414ab73c17454a7b
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -572,3 +572,15 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+
+Completed TASK `responsive-polish`.
+
+- Replaced the Vite starter global styles in `src/index.css` with a mobile-first base reset and responsive header/footer/navigation styling.
+- Tightened section grids and split layouts across the allowed components so they collapse safely at narrow widths without horizontal overflow.
+- Reduced small-screen pressure in contact and floating CTA areas by softening paddings, enabling text wrapping, and constraining the fixed WhatsApp button.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/components/AboutHeroSection.jsx b/src/components/AboutHeroSection.jsx
index 28a05ffea38835939c8269538927ecf1be554cb3..55d66b9079195751fa680031d9e7d260f353e02d
--- a/src/components/AboutHeroSection.jsx
+++ b/src/components/AboutHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index bf6c66645019cac106a365ccc5965e174987fbf9..d4e329c51e2a163a30b8edaaddc35e5454ddbe19
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -21,7 +21,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "stretch",
   },
   contentPanel: {
diff --git a/src/components/ContactDetailsSection.jsx b/src/components/ContactDetailsSection.jsx
index ab4609bb7c9447d225495bb3eb18d547b4db76a5..dc74465b32432e39784b289a920010f1cfe7ff20
--- a/src/components/ContactDetailsSection.jsx
+++ b/src/components/ContactDetailsSection.jsx
@@ -24,7 +24,7 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 3rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
   },
   shell: {
     maxWidth: "72rem",
@@ -67,6 +67,7 @@
     alignItems: "center",
     justifyContent: "center",
     width: "fit-content",
+    maxWidth: "100%",
     minHeight: "3rem",
     padding: "0.875rem 1.5rem",
     borderRadius: "999px",
@@ -74,10 +75,11 @@
     color: "#ffffff",
     fontWeight: 700,
     textDecoration: "none",
+    textAlign: "center",
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
@@ -102,10 +104,12 @@
   },
   value: {
     fontSize: "1.25rem",
+    overflowWrap: "anywhere",
   },
   description: {
     color: "rgba(17, 17, 17, 0.72)",
     lineHeight: 1.6,
+    overflowWrap: "anywhere",
   },
   descriptionDark: {
     color: "rgba(255, 255, 255, 0.72)",
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 9fd36fa99b06577055c8ff167274a330a3a3a101..d843072035f90562b5062b8166756114759ad79c
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,14 +4,15 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "max(0.75rem, env(safe-area-inset-right))",
+    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
     zIndex: 1000,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
     minHeight: "3.5rem",
-    padding: "0.85rem 1.1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 1rem",
     borderRadius: "999px",
     border: "1px solid rgba(7, 94, 84, 0.18)",
     background:
@@ -22,6 +23,7 @@
     textDecoration: "none",
     boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
     backdropFilter: "blur(12px)",
+    boxSizing: "border-box",
   },
   iconWrap: {
     display: "inline-flex",
diff --git a/src/components/GalleryGridSection.jsx b/src/components/GalleryGridSection.jsx
index 3e470dde4f5e20c8dcf316d2b233df694e79f3de..b4c420a07cc5d131efb57d757c770c9c27c3bc8e
--- a/src/components/GalleryGridSection.jsx
+++ b/src/components/GalleryGridSection.jsx
@@ -118,7 +118,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     gap: "1.25rem",
   },
   item: {
diff --git a/src/components/GalleryHeroSection.jsx b/src/components/GalleryHeroSection.jsx
index 95f77064e3297577a51ef4cc6df2ac6fb0e15d35..98777964b4b521236a4271abcdb1564bf63561b9
--- a/src/components/GalleryHeroSection.jsx
+++ b/src/components/GalleryHeroSection.jsx
@@ -30,7 +30,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9fa3c6113e90d671d7e52d8bf810fd433c73092c..4a1bc44c9ab88e1d27b5238896dba662f65a7a79
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -75,7 +75,7 @@
   },
   metrics: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
     gap: "1rem",
     padding: "1.25rem",
     borderRadius: "1.5rem",
@@ -86,6 +86,7 @@
   metric: {
     display: "grid",
     gap: "0.2rem",
+    minWidth: 0,
   },
   metricValue: {
     fontSize: "1.8rem",
diff --git a/src/components/MenuCategoriesSection.jsx b/src/components/MenuCategoriesSection.jsx
index 5623df0b2cfd119c2fa64f85b5746593d92a482e..c1796b69bdeb94c3a75688c0a203ba9495838999
--- a/src/components/MenuCategoriesSection.jsx
+++ b/src/components/MenuCategoriesSection.jsx
@@ -71,7 +71,7 @@
   grid: {
     display: "grid",
     gap: "1rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
   },
   card: {
     display: "grid",
diff --git a/src/components/MenuHeroSection.jsx b/src/components/MenuHeroSection.jsx
index 1c0660556c42fb4582cdd2dbe92cc4845962933f..7fb0dfa91455381de49afd64512e1abb74505091
--- a/src/components/MenuHeroSection.jsx
+++ b/src/components/MenuHeroSection.jsx
@@ -15,7 +15,7 @@
   layout: {
     display: "grid",
     gap: "1.5rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
     alignItems: "end",
   },
   content: {
diff --git a/src/components/OpeningHoursSection.jsx b/src/components/OpeningHoursSection.jsx
index 50f20f7ab76023a965dde33864b016231a323dec..0d4d47920c946beb94c45d6c75b38516ba038f80
--- a/src/components/OpeningHoursSection.jsx
+++ b/src/components/OpeningHoursSection.jsx
@@ -10,12 +10,12 @@
 
 const styles = {
   section: {
-    padding: "0 1.5rem 5rem",
+    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
   },
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "2rem",
+    padding: "clamp(1.5rem, 4vw, 2rem)",
     borderRadius: "2rem",
     backgroundColor: "#0f172a",
     color: "#ffffff",
@@ -42,6 +42,7 @@
   },
   row: {
     display: "flex",
+    flexWrap: "wrap",
     justifyContent: "space-between",
     gap: "1rem",
     paddingBottom: "0.75rem",
@@ -50,6 +51,7 @@
   hours: {
     color: "rgba(255, 255, 255, 0.72)",
     textAlign: "right",
+    marginLeft: "auto",
   },
 }
 
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 682caa8c09857570ac9e5468d1d5a98e865fdf48..12c8f2697427e91b68b90fe801716afbfb600bfa
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -39,7 +39,7 @@
   layout: {
     display: "grid",
     gap: "2rem",
-    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
     alignItems: "start",
   },
   intro: {
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 1bbc671b6d4eaf62b6dbf10f7d2bef3f75e930e1..f0a6b6bccdb141ea815692ed78d5fe803811913a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -61,7 +61,7 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
     gap: "1rem",
   },
   card: {
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index 72c88dad1a145d54c7ae45cedeb38e5f426a2cfa..426a0a590bdc04391389cf79a25679a83941cdb3
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -117,7 +117,7 @@
         <div
           style={{
             ...styles.layout,
-            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
+            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
           }}
         >
           <div style={styles.intro}>
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..86b77d9760774a3039a471f2b26e77a40542080d
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,192 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #111111;
+  background-color: #ffffff;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --page-max-width: 1280px;
+  --page-gutter: clamp(1rem, 3vw, 2rem);
+  --surface-soft: #f5f5f5;
+  --surface-dark: #0f172a;
+  --text-muted: #52525b;
+  --accent: #f97316;
+  --border-soft: rgba(17, 17, 17, 0.08);
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  width: 100%;
+  overflow-x: hidden;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  width: 100%;
+  overflow-x: hidden;
+  background-color: #ffffff;
+  color: #111111;
+}
+
+body,
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+#root {
+  width: 100%;
+  min-height: 100vh;
+  overflow-x: clip;
+}
+
+main,
+section,
+div,
+article,
+aside,
+nav,
+header,
+footer {
+  min-width: 0;
+}
+
+img,
+svg,
+video,
+canvas {
+  display: block;
+  max-width: 100%;
+}
+
+a {
+  color: inherit;
+  text-decoration: none;
+}
+
+a:hover {
+  color: inherit;
+}
+
+p,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+ul,
+ol,
+figure {
+  margin-top: 0;
+}
+
+button,
+a,
+input,
+textarea,
+select {
+  -webkit-tap-highlight-color: transparent;
+}
+
+button:focus-visible,
+a:focus-visible,
+input:focus-visible,
+textarea:focus-visible,
+select:focus-visible {
+  outline: 3px solid rgba(249, 115, 22, 0.35);
+  outline-offset: 3px;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 50;
+  background: rgba(255, 255, 255, 0.88);
+  backdrop-filter: blur(18px);
+  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+header nav {
+  width: min(100% - (var(--page-gutter) * 2), var(--page-max-width));
+  margin: 0 auto;
+  padding: 0.9rem 0;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem 0.75rem;
+}
+
+header nav a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #3f3f46;
+  font-size: 0.95rem;
+  font-weight: 600;
+  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
+}
+
+header nav a:hover,
+header nav a[aria-current="page"] {
+  background-color: rgba(249, 115, 22, 0.12);
+  color: #111111;
+}
+
+header nav a:active {
+  transform: translateY(1px);
+}
+
+header + main {
+  display: block;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+header + main > main {
+  display: block;
 }
-button:hover {
-  border-color: #646cff;
+
+footer {
+  padding: 2rem var(--page-gutter) 3rem;
+  background: #fffaf5;
+  border-top: 1px solid rgba(17, 17, 17, 0.06);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+footer p {
+  width: min(100%, var(--page-max-width));
+  margin: 0 auto;
+  color: var(--text-muted);
+  font-size: 0.95rem;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
+@media (min-width: 768px) {
+  header nav {
+    justify-content: space-between;
   }
-  a:hover {
-    color: #747bff;
+}
+
+@media (max-width: 767px) {
+  header nav {
+    justify-content: flex-start;
   }
-  button {
-    background-color: #f9f9f9;
+
+  header nav a {
+    flex: 1 1 auto;
   }
 }

tokens used
52.805
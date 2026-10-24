---
name: Tejaswini Portfolio
description: A glossy violet-blue developer portfolio on translucent navy glass.
colors:
  canvas: "#030b1b"
  text: "#f3f3ff"
  muted: "#b7bbd0"
  purple: "#c49bff"
  gradient-pink: "#e19bff"
  gradient-violet: "#b983ff"
  gradient-blue: "#858aff"
  button-ink: "#1c1034"
  secondary-text: "#eee3ff"
  field-bg: "#18203cc2"
  field-text: "#f2ebff"
  focus: "#d6b9ff"
  error: "#ffb2cc"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(38px, 4.15vw, 59px)"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "42px"
    fontWeight: 750
    lineHeight: 1.3
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.95
  label:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "11px"
    fontWeight: 650
    lineHeight: 1.7
rounded:
  field: "7px"
  tile: "11px"
  stat: "12px"
  panel: "14px"
  shell: "20px"
  pill: "30px"
spacing:
  tight: "7px"
  icon-gap: "9px"
  compact: "12px"
  tile-gap: "17px"
  card-gap: "23px"
  group: "27px"
  section: "42px"
components:
  button-primary:
    textColor: "{colors.button-ink}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
    typography: "{typography.label}"
  button-secondary:
    textColor: "{colors.secondary-text}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.field-bg}"
    textColor: "{colors.field-text}"
    rounded: "{rounded.field}"
    padding: "11px 13px"
  card:
    rounded: "{rounded.panel}"
  stat:
    rounded: "{rounded.stat}"
    padding: "23px 12px 20px"
  tech-tile:
    rounded: "{rounded.tile}"
    padding: "19px 8px 14px"
---

# Design System: Tejaswini Portfolio

## Overview

**Creative North Star: "A glossy violet-blue technology workspace"**

The portfolio uses translucent navy surfaces, lavender-to-blue emphasis, and a dimensional raster laptop to present a compact developer showcase. Colored technology icons, luminous timeline nodes, and fine violet borders connect six routes to the user's supplied desktop and mobile reference.

The scene carries the richest depth while cards and controls use quieter glass gradients. Information appears immediately; floating artwork, pointer tilt, and short reveals add movement without hiding structural content. The reference supersedes the earlier quiet CSS-only workshop.

**Key Characteristics:**
- Navy glass surfaces with fine translucent borders.
- Violet-to-blue name and action gradients.
- Compact Manrope typography and dense icon grids.
- Raster laptop artwork with floating technology tiles.
- Glowing timeline nodes, visible focus, and reduced-motion alternatives.

## Colors

The palette combines deep navy foundations with pink-violet and periwinkle light. Frontmatter values are normative; local gradient fills remain authored component CSS in the sidecar.

### Primary
- **Lavender (`purple`):** recurring emphasis, caret, and footer detail.
- **Pink, violet, and blue gradient stops:** the name gradient runs at (110deg); primary actions use a separate brighter gradient at (105deg).

### Secondary
- Technology icons keep their locally assigned colors from `TechIcon.jsx`. Blue, green, yellow, and orange identify technologies rather than competing action hierarchies.

### Neutral
- **Navy (`canvas`):** ambient background foundation.
- **Reading white (`text`):** headings and prominent content.
- **Muted lavender-gray (`muted`):** paragraph copy.
- **Field navy and field white:** recessed fields and their text.
- **Focus lavender and error rose:** keyboard focus and validation feedback.

### Named Rules
**The Gradient Emphasis Rule.** Keep the violet-blue gradient on name emphasis, primary actions, and selected filters; retain neutral reading text around it.

## Typography

**Display Font:** Manrope Variable (sans-serif fallback).
**Body Font:** Manrope Variable (sans-serif fallback).

Manrope supplies closely tracked headings and compact supporting copy. The signature wordmark uses the source's system cursive stack; this existing exception is not a reusable display-font rule.

### Hierarchy
- **Display:** the frontmatter hero ramp; balanced name lines, preceded by a smaller (19px), lighter (450) salutation within the heading.
- **Headline:** the frontmatter role for interior route titles.
- **Title:** section headings use the title role; project titles vary between (14px) compact and (19px) full cards.
- **Body:** biography uses the body role with a (65ch) measure; hero copy is (13px), line-height (1.95), and (47ch) wide. Interior introductions use (14px), line-height (1.7).
- **Label:** buttons use the label role; navigation is (12px), technology labels (11px), and form labels (12px).
- **Stat value:** tabular numerals, weight (700), size (31px), line-height (1.3), tracking (-0.035em).

At (520px), interior titles become (33px), the hero first name (39px), and its gradient name line (35px). Supporting copy follows explicit source overrides rather than uniform scaling.

## Layout

The desktop shell is capped at (1380px), inset (18px), with a content container capped at (1120px) and total horizontal subtraction of (96px). The hero is a near-equal two-column grid (1.02fr / 1fr), gap (25px), minimum height (485px). The laptop scene is (405px) tall.

Four compact statistics remain in one row. The home technology grid has six columns, becoming three at (520px). Featured projects use three columns; the full project listing uses two. About, Experience, and Contact use tailored paired columns. Icon gaps cluster around (9–12px), tile gaps (17px), card gaps (23–27px), and section separation (42px).

Responsive rules occur at minimum (1600px) and maximum (1150px), (900px), (700px), (520px), and (360px). Navigation becomes a toggle-controlled three-column glass menu at (700px). At (520px), the shell becomes edge-to-edge, content has (20px) side gutters, paired content and fields stack, and featured projects become horizontal preview rows. At (360px), gutters narrow to (16px).

On phones at (520px) and below, the laptop scene becomes an absolute background layer behind copy: width (245px), height (240px), opacity (0.52), right offset (-86px). At (360px), opacity drops to (0.45) and the right offset to (-100px). It remains decorative and pointer-inert while copy stays above it.

## Elevation & Depth

Depth combines translucent gradients, backdrop blur, diffuse shadows, radial illumination, and raster artwork. General glass panels use blur (12px); floating technology badges use blur (10px). Primary actions have inset highlights and ambient violet shadow. Cards lift on hover; the laptop has an image shadow and radial glow.

### Shadow Vocabulary
- **Primary action:** `0 6px 22px #9663ed30, inset 0 1px #f7dfff5c`.
- **Primary hover:** `0 9px 29px #9862ed55, inset 0 1px #ffffff70`.
- **Project hover:** `0 17px 40px #07091d80`.
- **Timeline node:** `0 4px 15px #9454df4d, inset 0 0 0 3px #43246a`.
- **Laptop image:** `drop-shadow(0 24px 24px #06021a7a)`.

### Named Rules
**The Luminous Glass Rule.** Pair translucent navy fills with fine violet-blue borders; use diffuse glow for dimensional art, timeline nodes, and active actions.

Control transitions use (0.2–0.3s), project image scaling and section reveals (0.6s), and title settling (0.8s). The laptop floats over (7s), technology badges over (5–8s). Pointer tilt uses spring stiffness (70) and damping (22). Reduced motion removes those animations and CSS transforms. The low-count canvas particle loop pauses when the document is hidden. Structural content is visible by default.

## Shapes

Pill actions and filters sit alongside softly rounded panels. The frontmatter records reused field, tile, stat, panel, shell, and pill radii. Social controls and timeline nodes are circular. Artwork clips inside project cards. Form actions are a squarer exception with (8px) corners. Borders are fine (1px) strokes with component-specific translucent tints.

## Components

### Buttons

Compact luminous actions: primary uses a pink-violet-blue gradient, dark ink, pill radius, and minimum height (44px). Secondary uses navy glass, pale text, and a violet border. Hover lifts both by (3px), brightens primary fill, and increases secondary border contrast. Focus uses a (2px) outline offset (5px). Form actions use the squarer shape described above.

### Chips

Project tags use tinted navy, (4px) corners, (3px 7px) padding, and (9px) text. Filters have (28px) radius, (8px 21px) padding, minimum height (40px), and wrap as needed. Selection adds a bright gradient, dark text, and heavier weight.

### Cards / Containers

Project cards use glass gradients, panel corners, and fine blue-violet borders. Hover lifts (6px), adds diffuse shadow, and scales artwork to (1.04). Full-card content padding is (20px 21px 19px). Contact cards add colored icon squares and move right (4px) on hover.

### Inputs / Fields

Recessed navy fields use the frontmatter radius and padding, (12px) text, and minimum height (44px). Focus shifts the border to lavender and brightens the fill, with a global visible outline. Invalid fields use a rose border and nearby error message. Paired fields stack on phones.

### Navigation

Desktop links have (27px) gaps, muted text, and lavender hover/current-route emphasis. The current route has a short glowing marker below it. Mobile navigation is a blurred glass overlay with (44px) minimum-height link cells and tinted active background.

### Compact statistics and technology tiles

Four glass stat cards place large tabular values above small labels. Home technology tiles center colorful icons above compact labels with subtle hover lift. Six desktop tiles become a three-column phone grid. Skill groups use the same icon vocabulary without forcing each icon into an individual card.

### Glowing timeline

A thin lavender connector links circular violet gradient nodes with inset rings and diffuse glows. Entries group role, company, date, and optional duties. Compact entries stack metadata. Mobile nodes shrink from (29px) to (26px).

### Raster laptop scene

The laptop comes from `public/assets/developer-laptop.webp` with radial glow, orbit linework, floating technology tiles, and a compact code caption. Mouse pointer tilt runs only when reduced motion is off. Phone composition follows Layout above. Project imagery also uses WebP assets with concept-preview labels.

Source ownership: `src/styles/base.css` defines global typography, shell, hero, and primitives; `src/styles/components.css` defines route components; `src/styles/responsive.css` contains responsive and reduced-motion overrides. Six route components live in `src/pages`; shared patterns live in `src/components`.

## Do's and Don'ts

### Do:
- **Do** preserve the violet-blue name gradient and dimensional raster laptop.
- **Do** use translucent navy glass, fine violet-blue borders, and diffuse glow.
- **Do** retain compact stat cards and colorful technology tiles.
- **Do** keep phone artwork behind legible copy and preserve responsive grid changes.
- **Do** preserve visible keyboard focus and reduced-motion alternatives.

### Don't:
- **Don't** introduce people imagery; the confirmed world uses technology imagery.
- **Don't** hide essential content behind animation.
- **Don't** replace ordinary reading text with gradient fills.
- **Don't** copy incidental tiny labels or the system cursive signature into new display typography.

---
name: Tejaswini Portfolio
description: A quiet digital workshop in navy, lavender, and translucent layers.
colors:
  canvas: "#0a0b14"
  text: "#f1eff9"
  muted: "#aba9bd"
  purple: "#bb9aff"
  line: "#ffffff13"
  card: "#11121c"
  form: "#13121e"
  field: "#0d0d17"
  button-start: "#b187ef"
  button-end: "#9972dd"
  button-ink: "#160d27"
  button-hover: "#c4a4f4"
  focus: "#c8a8ff"
  error: "#f1a6be"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.6rem)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-.04em"
  hero:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.7rem, 4.4vw, 4.1rem)"
    fontWeight: 650
    lineHeight: 1.19
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.035em"
  title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.02em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  button:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "12px"
    fontWeight: 650
    lineHeight: 1.7
rounded:
  tag: "4px"
  field: "6px"
  control: "7px"
  floating: "10px"
  code: "12px"
  panel: "16px"
spacing:
  inline-small: "8px"
  inline: "12px"
  control-gap: "16px"
  field-gap: "18px"
  grid-small: "24px"
  grid: "28px"
  section-mobile: "48px"
  section-tablet: "60px"
  section: "84px"
components:
  button-primary:
    textColor: "{colors.button-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "12px 21px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  input:
    backgroundColor: "{colors.field}"
    rounded: "{rounded.field}"
    padding: "12px 13px"
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.panel}"
  filter:
    rounded: "{rounded.control}"
    padding: "10px 17px"
---

# Design System: Tejaswini Portfolio

## Overview

**Creative North Star: "A quiet digital workshop"**

The shipped interface places clear introductions and project concepts on a near-black navy canvas. Lavender emphasis, restrained linework, and generous section spacing give the work room to breathe. This follows the dark palette, glass surfaces, and abstract technology commitments in PRODUCT.md and the direction contract.

Depth concentrates in the floating code workspace and authored concept artwork. Everyday navigation, filters, and forms remain calm, legible controls. Essential content appears immediately; animation adds atmosphere without withholding information.

**Key Characteristics:**
- Near-black foundations with lavender emphasis.
- Manrope headings with close tracking and balanced wrapping.
- Fine translucent borders and gently curved panels.
- Abstract technology artwork with soft ambient depth.
- Visible focus and reduced-motion support.

## Colors

Lavender connects actions, highlighted heading phrases, links, and linework across the dark neutral foundation.

### Primary

- **Lavender accent** (`purple`): heading emphasis, icons, timeline detail, and caret color.
- **Action lavender** (`button-start`, `button-end`, `button-hover`): the primary action gradient and its brighter hover state, paired with `button-ink`.
- **Focus lavender** (`focus`): keyboard outlines on all interactive elements.

### Neutral

- **Midnight canvas** (`canvas`): the page foundation.
- **Pale text** (`text`) and **muted lavender gray** (`muted`): primary reading and supporting prose.
- **Translucent white line** (`line`): shared separators and panel edges.
- **Dark card**, **form**, and **field** surfaces: close tonal steps distinguish containers and editable regions.

The pink `error` token belongs to field validation. Blue, green, and gold accents in concept artwork and syntax highlighting are local illustration colors, not additional application action palettes.

**The Lavender Thread Rule.** Carry lavender through emphasis and interaction while keeping ordinary reading on neutral text.

## Typography

**Display Font:** Manrope Variable, with sans-serif fallback.
**Body Font:** Manrope Variable, with sans-serif fallback.
**Code Font:** browser monospace for the illustrated editor.

**Character:** a single geometric sans family connects expressive headings with compact controls. Close tracking belongs to headings; ordinary prose retains normal tracking.

### Hierarchy

- **Display:** the `display` token governs interior page headings; the home introduction uses the `hero` variant.
- **Headline:** the `headline` token is the base heading role. Section headings specialize to 28px on desktop; the contact invitation uses 30px with a 1.4 line height.
- **Title:** the `title` token supplies the base; project titles use 19px and career titles use 21px.
- **Body:** introductory prose uses the `body` token with a 60ch measure. Biography and skills text use 13px; hero support uses 14px with a 1.9 line height.
- **Button:** the `button` token controls compact action labels. Navigation uses 12px at regular weight.

Responsive heading clamps and contextual body sizes remain component rules rather than a fabricated universal modular scale.

## Layout

The centered desktop container is capped at 1184px with 48px side gutters. Gutters step to 32px at 1100px, 22px at 800px, 20px at 540px, and 16px at 360px. The minimum supported canvas is 320px.

Projects use two equal columns with the `grid` gap; skills use three columns with the `grid-small` gap. At 800px the hero and contact layout stack and skills become two columns. At 540px projects, skills, biography, strengths, and paired form fields become single columns. Filters wrap naturally. Project artwork remains clipped within its panel.

Section spacing steps through the section tokens at the 800px and 540px breakpoints. Desktop introductions have a 760px maximum width. Supporting prose uses local character measures rather than expanding across the page.

## Elevation & Depth

Ordinary cards rely on tonal surfaces and subtle borders. The signature workspace uses a rotated code window, blurred floating technology tiles, radial glows, and soft shadows. The action gradient also has a faint ambient shadow. These are native parts of the selected glass-and-technology world.

### Shadow Vocabulary

- **Primary action:** `0 7px 28px #895ad421` gives the gradient action a faint lavender lift.
- **Code workspace:** `0 26px 70px #0006` separates the illustrated editor from its orbital background.
- **Floating detail:** `0 12px 30px #0003` supports technology tiles and the build indicator.

**The Soft Depth Rule.** Use diffuse shadows for floating artwork; use borders and tonal separation for ordinary content panels.

## Shapes

Panels share the `panel` radius. Controls use the `control` radius, fields use `field`, and static tags use `tag`. The code window and floating tiles use their respective radius tokens. Circular timeline nodes, active-navigation dots, and orbital ellipses provide small geometric counterpoints to rectangular content.

Borders are normally one pixel and translucent. Rounded project panels clip their illustrations; the decorative hero geometry is clipped at the hero boundary.

## Components

### Buttons

Compact, gently curved actions combine text and line icons. Primary buttons use the action gradient with dark text; secondary buttons use a nearly transparent fill, pale text, and a fine border. Both have a minimum height of 46px. Hover lifts them 2px over 0.2s; primary hover becomes a solid lighter lavender, while secondary hover brightens its fill and border. Disabled submission lowers opacity to 0.65. Keyboard focus uses a two-pixel lavender outline offset by five pixels.

### Filters and tags

Filters are interactive bordered controls with a 44px minimum height and wrapping layout. Selection adds a translucent purple fill and brighter lavender text. Tags are static, small rectangular metadata with quiet borders. Do not treat a tag as a button without the interactive control behavior.

### Cards / Containers

Project and skills cards share a dark fill, fine border, and panel radius. Project cards divide clipped artwork from a padded text area (24px 25px 19px on desktop). Their border becomes lavender on hover. Skills panels use 28px desktop padding. Contact forms use a related dark surface with 33px padding; responsive variants reduce these paddings.

### Inputs / Fields

Dark recessed fields have a fine translucent border, field radius, 12px text, and at least 45px height. Labels sit above them; required markers are lavender. Invalid fields change border to pink and render an associated error message. Focus retains the shared visible outline. Textareas resize vertically.

### Navigation

The desktop header is 92px high with six compact links and a separate contact action. The active route brightens and receives a small lavender dot. At 800px the header becomes 76px high and a 44px menu button opens a three-column translucent navigation panel; the active route uses a tinted surface. Escape closes the panel and restores focus to the toggle.

### Floating code workspace

The illustrated editor uses literal code, monospace syntax colors, translucent linework, orbital geometry, and small floating tiles. Its seven-second ease-in-out animation moves vertically by ten pixels and rotates between minus three and minus two degrees. Reduced motion removes the float and transitions, retaining the static minus-three-degree composition. This artwork is a signature illustration, not a general content-container template.

## Do's and Don'ts

### Do:

- **Do** use lavender to connect emphasis, actions, and interactive detail.
- **Do** keep ordinary cards quiet with tonal fills and fine borders.
- **Do** preserve visible keyboard focus and the reduced-motion alternative.
- **Do** stack grids and paired fields at the observed mobile breakpoints.

### Don't:

- **Don't** introduce people imagery; the confirmed visual direction uses abstract technology artwork.
- **Don't** delay essential content behind entrance animations.
- **Don't** turn illustration syntax colors into competing application action colors.

Not canonized: very small decorative editor captions and concept metadata remain local artwork details, not reusable reading-size rules. The finish pass removed the greeting eyebrow, project overlines, and star glyph; this documentation pass does not alter application files.

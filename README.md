# Tejaswini — Developer Portfolio

A responsive six-page React portfolio with a near-black and lavender visual system, a Framer Motion code workspace, custom CSS project concept artwork, accessible navigation, and an honest contact flow. No portraits or externally hosted image assets.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

## Routes

HashRouter supports static hosts without rewrite rules: `/#/`, `/#/about`, `/#/skills`, `/#/projects`, `/#/experience`, `/#/contact`. Vite uses a relative asset base, so the built app also works under `/Portfolio/`. Unknown routes show a useful recovery page.

## Structure

```text
public/                 favicon
src/
  components/           navigation, footer, project cards, abstract visuals
  data/                 profile, projects, skills, experience
  lib/                  contact validation
  App.jsx               six pages and routing
  main.jsx              application entry
  styles.css            responsive visual system
tests/                  contact validation tests
index.html
vite.config.js
package.json
```

## Personalize before publishing as a professional record

- `src/data/profile.js`: verified public email, LinkedIn URL, and education. Empty links are omitted, never replaced by broken `#` links.
- `src/data/experience.js`: titles and employers follow the supplied order. No employment dates, duties, or achievements were available to verify; these remain explicit editable placeholders.
- `src/data/projects.js`: replace illustrative descriptions, artwork, and technology tags with verified case-study details. Set `demo` and `github` to full URLs to show their links. No project URLs are guessed.
- `src/data/skills.js`: edit the sample technology showcase to reflect your actual skills. Proficiency and years of experience are not claimed.
- Home statistics count the four supplied project concepts, six editable technology groups, and three supplied career roles; they do not claim completed work or years of employment.

## Contact delivery

By default the form validates a draft and lets the visitor copy it. It explicitly says delivery is unconfigured and never pretends to send mail. Add a public email to enable its `mailto:` link.

To enable submission, copy `.env.example` to `.env.local` and set `VITE_CONTACT_ENDPOINT` to an HTTPS service you control, then rebuild. This is a **public URL**, never an API secret. The endpoint must accept JSON `{ name, email, message }`, permit the deployed site's origin through CORS, return a 2xx response only after acceptance, and implement server-side validation, spam protection, and rate limiting. The client handles loading, validation, success, error, and a 15-second timeout. Test your configured service before accepting visitor messages.

## Accessibility and performance

Self-hosted Manrope font, semantic landmarks, skip link, route focus management, visible focus rings, error associations, live submission feedback, touch targets, reduced-motion support, mobile navigation with Escape support, and responsive layouts from 320px. Small CSS-only abstract artwork avoids heavy media downloads. Hash routing avoids static-host deep-link failures.

## GitHub

Repository: https://github.com/tejaswini02523/Portfolio

```sh
git remote -v
git branch --show-current
git push -u origin main
```

Never force-push. If the remote acquires commits first, fetch and inspect them before integrating. Build output, dependencies, environment files, keys and credentials are ignored.

For GitHub Pages, publish the `dist` directory with a Pages workflow or your preferred static deployment. Pushing source does not by itself deploy the website.

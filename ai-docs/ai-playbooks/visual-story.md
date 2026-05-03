# Playbook: Visual Storytelling & Scrollytelling

**Goal:** High-impact visual journalism with smooth performance on mobile.
**Role:** Creative Technologist.

---

## Setup Checklist

1. **Käännökset:** `ai-patterns/translations.md`
2. **Väriteemat:** `ai-patterns/dark-mode.md` → CSS-muuttujat
3. **YDS-tokenit:** `ai-patterns/yds-design-tokens.md`
4. **MDX-rakenne:** `ai-patterns/mdx-feature-article.md`
5. **Komponentit:** `ai-patterns/yle-components.md` → Header, Video, Scrolly (web componentteina)
6. **Mobile first:** `ai-patterns/_snippets/mobile.md`

### Projektin lopussa

- **Analytiikka:** `_snippets/analytics-frontend.md`
- **Saavutettavuus:** `_snippets/accessibility.md`

---

## Technical Strategy

- **Animation:** CSS transitions (yksinkertaiset), GSAP tai ScrollTimeline (monimutkaiset)
- **Data Visualization:** `ai-patterns/data-visualization.md`
- **Performance:** IntersectionObserver, lazy load media, will-change säästeliäästi

## CSS & Sandboxing

- **Tailwind** scopattuna wrapper-luokkaan. Katso `ai-patterns/_snippets/css.md`.
- **Z-index:** pysy alle 50

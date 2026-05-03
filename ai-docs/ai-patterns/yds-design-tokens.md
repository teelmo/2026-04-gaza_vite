# Pattern: YDS Design Tokens (Yle Design System)

## Mikä tämä on?

Yle Design System (YDS) tarjoaa valmiit CSS-muuttujat väreille, typografialle ja väleille. Käytä näitä muuttujia saadaksesi yhtenäisen ilmeen Ylen muiden tuotteiden kanssa ja automaattisen dark mode -tuen.

## Asennus

```bash
pnpm add @yleisradio/yds-core
```

## Käyttöönotto

Importoi tarvittavat tokenit projektin pää-CSS-tiedostossa:

```css
/* index.css */
@import url(https://design-system.cdn.yle.fi/fonts/fonts.css);
@import "@yleisradio/yds-core/tokens/build/css/_theme-default.css";
@import "@yleisradio/yds-core/tokens/build/css/_theme-default-prefers-dark.css";
@import "@yleisradio/yds-core/tokens/build/css/_colors.css";
@import "@yleisradio/yds-core/tokens/build/css/_spacing.css";
@import "@yleisradio/yds-core/tokens/build/css/_typography-tokens.css";
@import "@yleisradio/yds-core/tokens/build/css/_border-radius.css";
```

---

## Tailwind + YDS

Käytä YDS-muuttujia Tailwindissa arbitrary value -syntaksilla:

```tsx
<div className="bg-[var(--yds-color-background)] text-[var(--yds-color-text-default)] p-[var(--yds-spacing-16)] border border-[var(--yds-color-border-separator)] rounded-[var(--yds-border-radius-m)]" />
```

---

## Värit

### Teemavärit (suositus)

`--yds-color-background`, `--yds-color-text-default`, `--yds-color-action-primary`, `--yds-color-border-separator`, jne.

### Infografiikkavärit

`--yds-infographic-news-default-1` ... `-6`, `--yds-infographic-political-party-*`, jne.

---

## Välit (Spacing)

`--yds-spacing-2` ... `--yds-spacing-64`

---

## Katso myös

- `yds-components-reference.md` – YDS React -komponentit

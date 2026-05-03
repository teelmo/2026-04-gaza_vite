# Snippets: Tailwind CSS Techniques

Tailwind-tekniikoita jaetussa DOM-ympäristössä.

---

## Scoping (jaettu DOM)

**Ongelma:** Sovellus elää yle.fi:n sisällä, ei iframessa. Globaalit tyylit rikkovat sivuston.

**Ratkaisu:** Kääri koko sovellus wrapper-divillä, jolla on projektiluokka. Käytä Tailwindia vain tämän sisällä.

```tsx
// App.tsx
<div className="plus-app-2026-01-projektinimi">
  <figcaption className="sr-only">Artikkelin otsikko</figcaption>
  <div className="...">
    {/* sisältö */}
  </div>
</div>
```

**Projektiluokan nimeäminen:**

```
plus-app-YYYY-MM-projektinimi

Esimerkki: plus-app-2026-01-verolaskuri
```

---

## Tailwind + YDS -muuttujat

Käytä YDS design tokeneja Tailwindin kanssa arbitrary value -syntaksilla:

```tsx
<div
  className="bg-[var(--yds-color-background)] text-[var(--yds-color-text-default)] p-[var(--yds-spacing-16)]"
/>
```

Tai määrittele `tailwind.config.js` -themeen:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        yds: {
          background: "var(--yds-color-background)",
          "text-default": "var(--yds-color-text-default)",
        },
      },
      spacing: {
        "yds-16": "var(--yds-spacing-16)",
      },
    },
  },
};
```

---

## Z-index hallinta

Pidä arvot matalina – yle.fi nav on 100+:

```css
/* index.css tai globaali CSS */
:root {
  --z-background: 1;
  --z-content: 10;
  --z-sticky: 20;
  --z-overlay: 30;
  --z-modal: 40;
  /* MAKSIMI: 50 */
}
```

```tsx
<div className="sticky z-[var(--z-sticky)] top-0" />
```

---

## Dark mode

Tailwind tukee `dark:`-varianttia. YDS tokenit vaihtuvat automaattisesti `prefers-color-scheme` mukaan – käytä `var(--yds-*)` eikä manuaalista dark-luokkaa.

Jos tarvitset manuaalisen dark moden:

```js
// tailwind.config.js
module.exports = {
  darkMode: "class", // tai 'media'
  // ...
};
```

---

## Responsiiviset marginaalit

```tsx
<div className="my-12 mx-auto w-full px-4 md:max-w-[672px] md:px-10">
  {/* plus-margins */}
</div>
```

---

## Globaalien tyylien välttäminen

- ÄLÄ käytä `@layer base` laajoilla globaaleilla reseteillä – ne vaikuttavat koko sivuun
- Scopaa reset vain wrapper-luokan alle:

```css
/* index.css */
.plus-app-2026-01-projekti *,
.plus-app-2026-01-projekti *::before,
.plus-app-2026-01-projekti *::after {
  box-sizing: border-box;
}
```

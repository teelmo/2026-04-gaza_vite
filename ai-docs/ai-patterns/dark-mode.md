# Pattern: Dark Mode

## Toteutustapa

Väriteemat määritellään erillisiin CSS-tiedostoihin `public/css/`-kansiossa tai käytetään YDS:n automaattista dark mode -tukea.

## YDS automaattinen dark mode

YDS design tokenit (`--yds-color-*`) vaihtuvat automaattisesti `prefers-color-scheme: dark` mukaan. Importoi YDS-tokenit pää-CSS:ään – ei tarvita erillistä dark mode -logiikkaa.

## Projektikohtaiset muuttujat

Jos tarvitset projektiluokan alla olevia `--plus-*` muuttujia:

```css
/* variables.dark.css */
:where(.plus-app-2026-01-projektinimi) {
  --plus-foreground: #f8f9fa;
  --plus-background: #131415;
}

/* variables.light.css */
:where(.plus-app-2026-01-projektinimi) {
  --plus-foreground: #1a1a1a;
  --plus-background: #ffffff;
}
```

## Käyttö Tailwindissa

```tsx
<div className="bg-[var(--plus-background)] text-[var(--plus-foreground)]">
  {/* ... */}
</div>
```

## Huomioitavaa

1. Käytä YDS-värejä ensisijaisesti – ne tukevat dark modea automaattisesti
2. Älä kovakoodaa värejä
3. Testaa molemmat teemat

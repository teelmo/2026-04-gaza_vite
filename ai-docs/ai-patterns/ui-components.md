# Pattern: UI Components

## Interaktiivisten työkalujen oletustyylit

Kun rakennat interaktiivista työkalua (laskuri, quiz, hakukone, tms.), käytä näitä oletustyylejä kontin tasolla:

```tsx
// Tailwind
<div className="bg-theme p-(--yds-spacing-16)">{/* ... */}</div>
```

---

## Komponenttilähteet

| Komponenttityyppi                                                       | Lähde                                | Miksi                                                     |
| ----------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------- |
| Painikkeet, Input, Select, Checkbox, Radio, Tag, Modal, Accordion, Tabs | **@yleisradio/yds-components-react** | YDS – yhtenäinen ilme, saavutettava                       |
| Combobox, Slider                                                        | **Radix UI** tai **YDS Combobox**    | YDS sisältää ComboboxSingleSelect; Slider puuttuu → Radix |
| Yksinkertaiset elementit                                                | **HTML + Tailwind**                  | Ei tarvita kirjastoa                                      |

## YDS Components React

Käytä **ensisijaisesti** `@yleisradio/yds-components-react`. Katso täysi listaus: `ai-patterns/yds-components-reference.md`.

### Asennus

```bash
pnpm add @yleisradio/yds-components-react @yleisradio/yds-core @yleisradio/yds-icons-react
```

### Theme Provider

```tsx
import { YdsThemeProvider } from "@yleisradio/yds-components-react";

<YdsThemeProvider>
  <App />
</YdsThemeProvider>;
```

### Esimerkki: Button

```tsx
import { Button } from "@yleisradio/yds-components-react";
import { t } from "~/LYHYET.ts";

<Button variant="primary" onClick={handleSubmit}>
  {t(lang).laheta}
</Button>

<Button variant="secondary" size="sm">
  {t(lang).peruuta}
</Button>
```

### Esimerkki: Combobox (YDS)

```tsx
import { ComboboxSingleSelect } from "@yleisradio/yds-components-react";
import { t } from "~/LYHYET.ts";

<ComboboxSingleSelect
  items={municipalities}
  itemToString={(m) => m.name}
  onSelectedItemChange={({ selectedItem }) => onSelect(selectedItem)}
  placeholder={t(lang).etsi_kunta}
/>;
```

### Esimerkki: Slider (Radix – YDS ei sisällä)

YDS ei tarjoa Slider-komponenttia. Käytä `@radix-ui/react-slider`:

```bash
pnpm add @radix-ui/react-slider
```

```tsx
import * as Slider from "@radix-ui/react-slider";

<Slider.Root value={[income]} onValueChange={([v]) => setIncome(v)} min={800} max={16000} step={100}>
  <Slider.Track>
    <Slider.Range />
  </Slider.Track>
  <Slider.Thumb />
</Slider.Root>;
```

**Täysi esimerkki:** `ai-patterns/_snippets/numeric-input.md`

---

## Milloin käyttää mitäkin

| Tarve                     | Ratkaisu                            |
| ------------------------- | ----------------------------------- |
| Painike                   | YDS `Button`                        |
| Hakukenttä / autocomplete | YDS `ComboboxSingleSelect`          |
| Dropdown-valinta          | YDS `Select`                        |
| Numeerinen arvo (laskuri) | Radix `Slider` + input + step-napit |
| Modaali                   | YDS `Modal` tai `BottomSheet`       |
| Tabit                     | YDS `SectionTabs`                   |
| Avattavat osiot           | YDS `Accordion`                     |
| Lomakevalinnat            | YDS `Checkbox`, `RadioGroup`        |

## Saavutettavuus

YDS ja Radix UI hoitavat automaattisesti:

- Näppäimistönavigaation
- ARIA-attribuutit
- Focus-hallinnan
- Screen reader -tuen

Sinun tehtäväsi:

- Lisää selkeät labelit
- Varmista riittävä kontrasti

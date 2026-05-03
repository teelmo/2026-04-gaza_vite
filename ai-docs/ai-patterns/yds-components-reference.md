# YDS Components React – API-viite

Tämä dokumentti kuvastaa `@yleisradio/yds-components-react` -paketin komponentteja (v2.7.0). Käytä näitä **ensisijaisesti** UI-komponenteissa – vain puuttuvat (esim. Slider) täydennetään Radix UI:lla.

## Asennus

```bash
pnpm add @yleisradio/yds-components-react @yleisradio/yds-core @yleisradio/yds-icons-react
```

**Peer dependencies:** `react`, `react-dom`, `styled-components` (^6.1.8)

## Theme Provider

```tsx
import { YdsThemeProvider } from "@yleisradio/yds-components-react";

<YdsThemeProvider>
  <App />
</YdsThemeProvider>
```

## Komponentit

| Komponentti | Import | Käyttö |
|-------------|--------|--------|
| **Button** | `Button` | Painikkeet (primary, secondary, ghost) |
| **ButtonGroup** | `ButtonGroup`, `ButtonGroupButton` | Nappiryhmät |
| **TextInput** | `TextInput` | Tekstikentät |
| **Textarea** | `Textarea` | Moniriviset kentät |
| **Select** | `Select` | Dropdown-valinta |
| **Combobox** | `ComboboxSingleSelect` | Autocomplete / hakukenttä |
| **Checkbox** | `Checkbox` | Yksittäinen checkbox |
| **CheckboxGroup** | `CheckboxGroup` | Checkbox-ryhmä |
| **Radio** | `Radio` | Yksittäinen radio |
| **RadioGroup** | `RadioGroup` | Radio-ryhmä |
| **RadioGroupNumericScale** | `RadioGroupNumericScale` | Likert-asteikko |
| **Switch** | `Switch` | Toggle |
| **ChoiceButton** | `ChoiceButton` | Valintapainike |
| **ChoiceBox** | `ChoiceBox` | Valintalaatikko |
| **Select** | `Select` | Dropdown |
| **Tag** | `Tag` | Tagit / pillit |
| **TagLink** | `TagLink` | Linkki-tagi |
| **TagFilter** | `TagFilter` | Suodattava tag-lista |
| **Spinner** | `Spinner` | Latausindikaattori |
| **ProgressBar** | `ProgressBar` | Edistymispalkki |
| **Modal** | `Modal`, `useModal` | Modaali |
| **BottomSheet** | `BottomSheet`, `useBottomSheet` | Alalaudan modaali |
| **Dialog** | `Dialog` | Dialogi |
| **Accordion** | `Accordion`, `AccordionItem` | Avattavat osiot |
| **SectionTabs** | `SectionTabs`, `SectionTabList`, `SectionTab`, `SectionTabPanel` | Tabit |
| **NavigationTab** | `NavigationTabList`, `NavigationTab` | Navigaatiotabit |
| **Notification** | `Notification` | Ilmoitus |
| **BannerNotification** | `BannerNotification` | Banner-ilmoitus |
| **ToastNotifications** | `ToastNotifications`, `ToastProvider`, `useToast` | Toast-viestit |
| **Link** | `Link` | Linkit |
| **Badge** | `Badge` | Badge |
| **ArticleHeading** | `ArticleHeading` | Artikkeliotikko |
| **FormElementLabel** | `FormElementLabel` | Lomakkeen label |
| **FormElementDescription** | `FormElementDescription` | Kentän kuvaus |
| **FormGroupLabel** | `FormGroupLabel` | Ryhmän otsikko |
| **SearchInput** | `SearchInput`, `SearchSubmitButton` | Hakukenttä |
| **ActionMenu** | `ActionMenu` | Toimintovalikko |
| **DropdownMenu** | `DropdownMenu` | Pudotusvalikko |
| **Menu** | `Menu`, `MenuItem`, `MenuSeparator` | Valikko |
| **PageIndicator** | `PageIndicator`, `PageIndicatorContainer` | Sivunumero-indikaattori |

## Huomio: Slider

YDS-components-react **ei sisällä Slider-komponenttia**. Käytä tarvittaessa `@radix-ui/react-slider`.

## Tailwind + YDS

YDS käyttää `styled-components` -tyylejä. Projekteissa, joissa käytetään Tailwindia, voit:
- Käyttää YDS-komponentteja sellaisenaan (styled-components toimii rinnan)
- Tai tyylitellä wrapper-elementtejä Tailwindilla

## Katso myös

- `ui-components.md` – käytännön ohjeet ja esimerkit
- `yds-design-tokens.md` – värit ja spacing

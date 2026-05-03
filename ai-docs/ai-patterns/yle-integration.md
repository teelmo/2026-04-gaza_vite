# Pattern: Yle Environment Integration

Tämä ohje kuvaa miten React-sovellus integroituu Ylen julkaisuympäristöön.

## Parametrien välitys

CMS välittää parametrit `Root`-komponentille. Tyypillisiä: `lang` ("fi" | "sv"), muut projektikohtaiset.

### Root.tsx -malli

```tsx
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import App from "./components/App";
import Fallback from "./components/Fallback";
import { loadTranslations, useI18nStore } from "./lib/i18n";
import type { Language } from "./lib/i18n";
import { sv } from "./translations/sv";

const defaults = { lang: "fi" };

const Root = (parameters: { lang?: string }) => {
  const params = { ...defaults, ...parameters };
  const lang = (parameters.lang ?? "fi") as "fi" | "sv";

  useEffect(() => {
    setLang(lang);
    setMapInfo(parameters.mapInfo === "true");
  }, [lang, parameters.mapInfo]);

  return (
    <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error} />}>
      <App parameters={parameters} />
    </ErrorBoundary>
  );
};

export default Root;
```

### Keskeiset periaatteet

1. **Defaults** – aina oletusarvot
2. **Spread** – `{ ...defaults, ...parameters }`
3. **ErrorBoundary** – kääri koko sovellus

### react-error-boundary

```bash
pnpm add react-error-boundary
```

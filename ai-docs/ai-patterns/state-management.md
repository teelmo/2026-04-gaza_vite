# Pattern: State Management

## Milloin tarvitaan mitäkin

| Sovelluksen monimutkaisuus | Ratkaisu |
|---------------------------|----------|
| **Yksinkertainen** (1-2 interaktiota) | Paikalliset `useState` komponentissa |
| **Keskitaso** (jaettu state 2-3 komponentin välillä) | Props drilling tai Zustand store |
| **Monimutkainen** (useita filttereitä, resursseja, valintoja) | Zustand store + TanStack Query |

## Yksinkertainen: Paikallinen state

Kun sovelluksessa on vain muutama interaktio, pidä state komponentissa:

```tsx
// Calculator.tsx
const Calculator = () => {
  const [income, setIncome] = useState(0);
  const [result, setResult] = useState(0);
  
  // Logiikka ja UI samassa paikassa
};
```

## Datan lataus: TanStack Query

Käytä TanStack Querya (React Query) API- ja JSON-datan hakuun:

```tsx
import { useQuery } from "@tanstack/react-query";

// Yksi kysely
const { data: regions, isLoading, error } = useQuery({
  queryKey: ["regions"],
  queryFn: () => fetch("/data/regions.json").then((r) => r.json()),
});

// Useita kyselyjä
const { data: statistics } = useQuery({
  queryKey: ["statistics"],
  queryFn: () => fetch("/data/statistics.json").then((r) => r.json()),
});
```

## Monimutkainen: Zustand + TanStack Query

Kun sovellus kasvaa, eriytä state omaan kansioonsa:

```
src/
├── stores/
│   ├── index.ts              # Exportit
│   ├── selections.ts         # Käyttäjän valinnat (Zustand)
│   └── derived.ts            # Lasketut arvot (selectors tai useMemo)
├── hooks/
│   └── useData.ts            # TanStack Query -kyselyt
├── components/
└── App.tsx
```

### `stores/selections.ts` - Käyttäjän valinnat (Zustand)

```ts
import { create } from "zustand";

interface SelectionsStore {
  selectedRegion: string | null;
  selectedYear: number;
  showComparison: boolean;
  setSelectedRegion: (region: string | null) => void;
  setSelectedYear: (year: number) => void;
  setShowComparison: (show: boolean) => void;
}

export const useSelectionsStore = create<SelectionsStore>((set) => ({
  selectedRegion: null,
  selectedYear: 2026,
  showComparison: false,
  setSelectedRegion: (region) => set({ selectedRegion: region }),
  setSelectedYear: (year) => set({ selectedYear: year }),
  setShowComparison: (show) => set({ showComparison: show }),
}));
```

### `hooks/useData.ts` - Datan lataus (TanStack Query)

```ts
import { useQuery } from "@tanstack/react-query";

export const useRegions = () =>
  useQuery({
    queryKey: ["regions"],
    queryFn: () => fetch("/data/regions.json").then((r) => r.json()),
  });

export const useStatistics = () =>
  useQuery({
    queryKey: ["statistics"],
    queryFn: () => fetch("/data/statistics.json").then((r) => r.json()),
  });
```

### `stores/derived.ts` tai hook - Lasketut arvot

```ts
import { useMemo } from "react";
import { useSelectionsStore } from "./selections";
import { useStatistics } from "../hooks/useData";

// Hook joka palauttaa filtteröidyn datan
export const useFilteredData = () => {
  const { data: statistics } = useStatistics();
  const { selectedRegion, selectedYear } = useSelectionsStore();

  return useMemo(() => {
    if (!statistics) return [];
    return statistics.filter(
      (item: any) =>
        (!selectedRegion || item.region === selectedRegion) &&
        item.year === selectedYear
    );
  }, [statistics, selectedRegion, selectedYear]);
};

// Yhteenveto
export const useSummary = () => {
  const filteredData = useFilteredData();
  return useMemo(
    () => ({
      total: filteredData.length,
      average:
        filteredData.reduce((sum: number, d: any) => sum + d.value, 0) /
          filteredData.length || 0,
    }),
    [filteredData]
  );
};
```

## Käyttö komponenteissa

```tsx
import { useSelectionsStore, useFilteredData } from "../stores";

const RegionSelector = () => {
  const { selectedRegion, setSelectedRegion } = useSelectionsStore();
  const filteredData = useFilteredData();

  return (
    <select
      value={selectedRegion ?? ""}
      onChange={(e) => setSelectedRegion(e.target.value || null)}
    >
      {/* ... */}
    </select>
  );
};
```

## Tarkistuslista: Tarvitaanko Zustand + Query?

- [ ] Onko yli 3 erillistä käyttäjävalintaa?
- [ ] Ladataanko dataa useasta lähteestä?
- [ ] Tarvitaanko laskettuja/filtteröityjä arvoja useassa komponentissa?
- [ ] Onko komponenttipuu syvä (props drilling hankala)?

Jos vastasit "kyllä" useampaan → käytä Zustand + TanStack Query -rakennetta.

# Snippets: Numeric Input

Numeerisen syötteen UI-patternit laskureissa. Käytä Radix UI Slider (YDS ei sisällä Slideria).

Käytä formatointiin Intl.NumberFormat("fi-FI",...)

## Formatointi

Formatoi euroiksi ja prosenteiksi aina Intl.NumberFormat avulla, jotta näytönlukija osaa lukea ne oikein.

```js
export const euro = new Intl.NumberFormat("fi-FI", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 1,
});

export const prosentti = new Intl.NumberFormat("fi-FI", {
  style: "percent",
  maximumFractionDigits: 1,
});
```

## Slider + Input + Step-napit

```tsx
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

const IncomeSlider = () => {
  const [value, setValue] = useState(3300);
  const min = 800;
  const max = 16000;

  return (
    <div className="flex flex-col items-center">
      <label className="mb-4 font-bold">Kuukausipalkkasi ennen veroja</label>
      <div className="mb-6 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setValue((v) => (v - 100 >= min ? v - 100 : v))}
          className="flex h-8 w-8 items-center justify-center rounded bg-white"
        >
          −
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          value={value}
          onChange={(e) => {
            const v = Number(e.target.value);
            const clamped = Math.min(max, Math.max(min, isNaN(v) ? min : v));
            setValue(Math.round(clamped / 100) * 100);
          }}
          className="w-20 px-1 text-center"
        />
        <button
          type="button"
          onClick={() => setValue((v) => (v + 100 <= max ? v + 100 : v))}
          className="flex h-8 w-8 items-center justify-center rounded bg-white"
        >
          +
        </button>
      </div>
      <Slider.Root
        value={[value]}
        onValueChange={([v]) => setValue(v ?? value)}
        min={min}
        max={max}
        step={100}
        className="relative flex w-full touch-none select-none items-center"
      >
        <Slider.Track className="relative h-3 w-full rounded-full bg-white">
          <Slider.Range className="absolute h-full rounded-full bg-[var(--yds-color-action-primary)]" />
        </Slider.Track>
        <Slider.Thumb className="block h-8 w-8 rounded-full bg-[var(--yds-color-action-primary)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--yds-color-border-primary-focus)]" />
      </Slider.Root>
    </div>
  );
};
```

## Valuuttaformatointi

```ts
const formatCurrency = (val: number, showPlus = false) => {
  let result = val.toLocaleString("fi-FI", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
  if (showPlus && val > 0) result = "+" + result;
  else if (showPlus && val === 0) result = "±0";
  return result;
};
```

## Reaktiivinen laskenta

```tsx
const [income, setIncome] = useState(3300);
const yearlyIncome = income * 12.5;
const result = useMemo(() => calculateTax(yearlyIncome), [yearlyIncome]);
```

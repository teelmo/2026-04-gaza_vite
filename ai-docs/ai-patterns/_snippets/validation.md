# Snippets: Validation

Syötteiden validointi interaktiivisissa työkaluissa.

## React-esimerkki: Tyyppiturvalliset propsit

```tsx
const Calculator = (props: CalculatorProps) => {
  const config = {
    initialIncome: props.initialIncome ?? 3500,
    minIncome: props.minIncome ?? 0,
    maxIncome: props.maxIncome ?? 500_000,
  };

  const [income, setIncome] = useState(config.initialIncome);
  const validatedIncome = useMemo(
    () => clampNumber(income, config.minIncome, config.maxIncome),
    [income, config.minIncome, config.maxIncome]
  );

  return (/* ... */);
};
```

ParseNumber, clampNumber, ERROR_MESSAGES, null-safe laskenta, API-virheiden käsittely.

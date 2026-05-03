# Snippets: Analytics

Mittauskoodi Yle Snowplow -analytiikalle.

## React: Effect tracking

`createEffect` → `useEffect`:

```tsx
useEffect(() => {
  if (currentChapter === 3) {
    trackEvent("osio-nakyy", "Osa 3: Kliimaksi");
  }
}, [currentChapter]);
```

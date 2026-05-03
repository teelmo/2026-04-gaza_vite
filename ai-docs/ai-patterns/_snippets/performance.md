# Snippets: Performance

Suorituskykyoptimointeja.

## React: useEffect cleanup

```tsx
useEffect(() => {
  let rafId: number;
  const handleScroll = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => doWork());
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (rafId) cancelAnimationFrame(rafId);
  };
}, []);
```

CreateStore → useState tai useRef kuvien esilatauksessa.

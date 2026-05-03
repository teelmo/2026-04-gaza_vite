# Snippets: Scroll Animations

Scroll-pohjaisia animaatiotekniikoita.

## Scroll progress tracking

```ts
const getScrollProgress = (element: Element): number => {
  const rect = element.getBoundingClientRect();
  if (rect.top < 0 && rect.bottom > window.innerHeight) {
    return Math.abs(rect.top) / (rect.height - window.innerHeight);
  }
  if (rect.top > 0) return 0;
  return 1;
};
```

**React-komponentissa:**

```tsx
const ScrollyComponent = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) setProgress(getScrollProgress(containerRef.current));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>
      <div className="sticky top-0">Progress: {Math.round(progress * 100)}%</div>
    </div>
  );
};
```

## requestAnimationFrame

```ts
let rafId: number;
const handleScroll = () => {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => doWork());
};
window.addEventListener("scroll", handleScroll, { passive: true });
```

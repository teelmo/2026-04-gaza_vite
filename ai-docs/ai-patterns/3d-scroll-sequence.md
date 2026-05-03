# Pattern: 3D Scroll Sequence (Blender Image Animation)

## Mikä tämä on?

Scrollattava kuvasarja, jossa Blender-framet vaihtuvat scrollauksen mukaan.

## React/Zustand -adapterointi

### Kuvien store (Zustand)

```ts
// stores/imageStore.ts
import { create } from "zustand";

interface ImageStore {
  mobile: HTMLImageElement[];
  desktop: HTMLImageElement[];
  setMobile: (imgs: HTMLImageElement[]) => void;
  setDesktop: (imgs: HTMLImageElement[]) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  mobile: [],
  desktop: [],
  setMobile: (imgs) => set({ mobile: imgs }),
  setDesktop: (imgs) => set({ desktop: imgs }),
}));
```

### useEffect preloadille

```tsx
useEffect(() => {
  loadImages();
  const handleResize = () => { loadImages(); renderFrame(...); };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

### GSAP ScrollTrigger

`animationState` voi olla `useRef` tai Zustand.

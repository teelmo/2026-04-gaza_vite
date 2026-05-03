# Snippets: Mobile

Mobile first -suunnittelu.

## Tailwind vastineet

| CSS                                                           | Tailwind                                         |
| ------------------------------------------------------------- | ------------------------------------------------ |
| `width: 100%; max-width: 300px`                               | `w-full max-w-[300px]`                           |
| `@media (min-width: 768px)`                                   | `md:` prefix                                     |
| `padding: clamp(1rem, 3vw, 3rem)`                             | `p-[clamp(1rem,3vw,3rem)]`                       |
| `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` | `grid-cols-[repeat(auto-fit,minmax(250px,1fr))]` |

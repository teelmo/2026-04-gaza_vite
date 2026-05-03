# Pattern: MDX Feature Article

## Mikä tämä on?

MDX mahdollistaa Markdown-sisällön ja React-komponenttien yhdistämisen samassa tiedostossa. Ideaali feature-artikkeleille.

## Vite-konfiguraatio

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [mdx(), react()],
});
```

**Asennus:** `pnpm add @mdx-js/rollup @mdx-js/react`

## Article.mdx

Lisää erillinen imports.ts samaan kansioon, jossa kaikki komponentit laitetaan saman default objektin taakse, jotta ne voidaan importoida Article.mdx:ssä

Exports imports.ts
`export { default as Caption } from '~/components/Caption';`

Imports
`import * as comps from '~/texts/imports';`

Koodissa
{<comps.Tag></comps.Tag>}

Käytä web componentteja tai React-komponentteja. Media-komponentit: `video-tag`, `picture-tag`, `header-template`, `recommendation-template`. Importoi: `import "@yle-interactive/solid-components/style"; import "@yle-interactive/solid-components/webcomponents/VideoTag";` jne.

```mdx
<section className="plus-app-feature-paragraph-container">
<header-template ... />

## Osa 1

Leipätekstiä.

<div className="plus-margins">
  <video-tag url={...} threshold={0.5} />
</div>

<recommendation-template data={JSON.stringify(articles)} />
</section>
```

## BASE_URL

Käytä aina `import.meta.env.BASE_URL` poluissa.

## Katso myös

- `yle-components.md` – web componenttien käyttö

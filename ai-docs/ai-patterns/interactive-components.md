# Pattern: Team internal oc (Web Components)

## Mikä tämä on?

## `@yle-interactive/solid-components` tarjoaa feature-komponentteja (Header, VideoTag, PictureTag, jne.) **web componentteina**.

## Asennus

```bash
pnpm add @yle-interactive/solid-components
```

---

## Web componenttien käyttö Reactissa

Importoi web componentit ja tyylit. Käytä HTML-tageja, attribuutit merkkijonoina.

### Importit

```tsx
// main.tsx tai App.tsx
import "@yle-interactive/solid-components/style";
import "@yle-interactive/solid-components/webcomponents/Header";
import "@yle-interactive/solid-components/webcomponents/VideoTag";
import "@yle-interactive/solid-components/webcomponents/PictureTag";
import "@yle-interactive/solid-components/webcomponents/Scrolly";
import "@yle-interactive/solid-components/webcomponents/Recommendation";
// ... muut tarvittaessa
```

### Web component -tagit

| Komponentti        | HTML-tagi                   | Solid-import (vertailu) |
| ------------------ | --------------------------- | ----------------------- |
| Header             | `<header-template>`         | `Header`                |
| VideoTag           | `<video-tag>`               | `VideoTag`              |
| PictureTag         | `<picture-tag>`             | `PictureTag`            |
| Scrolly            | `<scrolly-template>`        | `Scrolly`               |
| Recommendation     | `<recommendation-template>` | `Recommendation`        |
| HeaderTexts        | `<header-text-template>`    | —                       |
| Carousel           | `<carousel-template>`       | `Carousel`              |
| AudioTag           | `<audio-tag>`               | `AudioTag`              |
| AudioWithSubtitles | `<audio-with-subtitles>`    | `AudioWithSubtitles`    |
| FeedbackForm       | `<feedback-form>`           | `FeedbackForm`          |

**Huom:** AreenaVideo ja Comments eivät ole web componentteina – tarkista paketin dokumentaatio.

---

## Käyttö Reactissa

Objektit ja monimutkaiset arvot välitetään attribuutteina. Web componentit odottavat usein camelCase-attribuutteja (solid-element muuntaa ne).

### Header

```tsx
<header-template
  ref={(el) => {
    if (el) {
      (el as any).media = {
        type: "video",
        url: `${import.meta.env.BASE_URL}video/header.mp4`,
      };
      (el as any).text = {
        title: "Artikkelin otsikko",
        tag: "AIHETUNNISTE",
        lead: "Ingressi tähän.",
        time: "16.11.2025 19:00",
        authors: "<p>Tekijät: **Nimi**</p>",
      };
    }
  }}
/>
```

Tai käytä `dangerouslySetInnerHTML` / JSON-attribuuttia jos paketti tukee. Tarkista paketin API.

### VideoTag

```tsx
<video-tag
  url={`${import.meta.env.BASE_URL}video/video.mp4`}
  relative
  threshold={0.5}
  loop={false}
  preload={true}
  alt="Videon kuvaus"
  text="Kuvateksti"
/>
```

### PictureTag

```tsx
<picture-tag url={`${import.meta.env.BASE_URL}img/kuva.png`} alt="Kuvan alt-teksti" relative text="Kuvateksti. Kuva: Kuvaaja" />
```

### Recommendation

```tsx
<recommendation-template title="Lue lisää" data={JSON.stringify(articles)} wideimages={true} />
```

---

## TypeScript

Web component -tägejä varten voi lisätä custom element -tyypityksen:

```ts
// types/custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "video-tag": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        url?: string;
        relative?: boolean;
        threshold?: number;
        loop?: boolean;
        preload?: boolean;
        alt?: string;
        text?: string;
      },
      HTMLElement
    >;
    "picture-tag": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        url?: string;
        alt?: string;
        relative?: boolean;
        text?: string;
      },
      HTMLElement
    >;
    "header-template": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    // ...
  }
}
```

---

## BASE_URL

Käytä aina `import.meta.env.BASE_URL` poluissa:

```tsx
url={`${import.meta.env.BASE_URL}video/video.mp4`}
```

---

## Katso myös

- `ai-patterns/mdx-feature-article.md` – MDX-artikkelin rakenne

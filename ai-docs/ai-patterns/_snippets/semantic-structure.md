# Snippets: Semantic HTML Structure

Ohjeita semanttiseen HTML-rakenteeseen ja upotuskontekstiin.

---

## Upotuskonteksti

React-appimme upotetaan Yle.fi-artikkelisivulle CMS:n toimesta. **Emme hallitse ulompaa HTML-rakennetta** – CMS lisää `<figure>`- tai `<article>`-tägin appimme ympärille.

```
┌─────────────────────────────────────────┐
│ Yle.fi artikkeli (CMS)                  │
│  <figure class="yle-figure-plus">       │
│    ┌─────────────────────────────────┐  │
│    │ Meidän React-appi (App.tsx)     │  │
│    │ <>                              │  │
│    │   <figcaption>Otsikko</figcaption> │
│    │   <div>...sisältö...</div>      │  │
│    │ </>                             │  │
│    └─────────────────────────────────┘  │
│  </figure>                              │
└─────────────────────────────────────────┘
```

---

## Oikea App.tsx-rakenne

```tsx
// App.tsx
import "./index.css";

const App = () => {
  return (
    <>
      <figcaption className="sr-only">
        Artikkelin otsikko hakukoneille
      </figcaption>
      <div className="app-content">
        {/* ... */}
      </div>
    </>
  );
};

export default App;
```

---

## Vältä näitä virheitä

- Älä lisää omaa `<figure>`-tägiä – CMS lisää jo
- Älä käytä diviä juurena (figcaption pitää olla ensimmäinen)
- Älä laita figcaptionia muun sisällön jälkeen

---

## Visual Story

Pyydä CMS-tiimiltä `<article>` `<figure>`:n sijaan. Käytä `<header>` + `<h1>` figcaptionin sijaan.

---

## Containerin tyylittely

Tyylittele CMS:n figure `src/index.css`:ssä viittaamalla luokkaan `.yle-figure-plus`.

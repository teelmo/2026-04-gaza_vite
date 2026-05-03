# Pattern: Translations (Käännökset)

## Perusperiaate

> Suomi on oletuskieli JA avain. Koodi pysyy luettavana.

Käytämme suomenkielistä tekstiä suoraan koodissa, ja se toimii samalla käännösavaimena. Näin:

- Komponentit pysyvät luettavina
- Ei tarvitse refaktoroida kun käännöksiä lisätään
- Toimii ilman käännöstiedostoja (palauttaa suomenkielisen tekstin)

## Toteutus

### 1. Käännösfunktio

#### Käännösobjekti:

```js
type Kieli = 'fi' | 'sv';

export const l = (kieli: Kieli) => ({
  /* LandingTitle */
  ulkomaat_aria: { fi: 'Lisää artikkeleita aiheesta ulkomaat', sv: 'Läs fler utrikesartiklar' }[
    kieli
  ],
});
```

#### Käyttö koodissa:

```js
l(lang).ulkomaat_aria;
```

#### Kieliparametri

Tallenna zustand storeen parametreisä kieli

```js
  const lang = (parameters.lang ?? 'fi') as 'fi' | 'sv';

  useEffect(() => {
    setLang(lang);
    setMapInfo(parameters.mapInfo === 'true');
  }, [lang, parameters.mapInfo]);
```

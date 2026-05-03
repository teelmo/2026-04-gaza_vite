# Snippets: Tärkeimmät datalähteet 📊

Ohjeet yleisimpiin julkisiin datalähteisiin – kun tarvitset postinumero-, kunta- tai tilastodataa.

> **Katso myös:** `ai-playbooks/data-pipeline.md` – datan prosessointi ja putki; `analytics-snowflake.md` – analytiikkadata Snowflakesta

---

## 🎯 Milloin käytät tätä?

Kun etsit datalähteitä projektiin:

- Postinumeroalueittainen tilasto (väestö, tulot, asuminen, työpaikat)
- Tulot, vähennykset ja verot **kunnittain ja postinumeroittain** (verodata)
- Kunta–postinumeroalue -yhteys (lookup: postinumero → kunta)
- Julkinen tilastodata Suomesta

---

## Verohallinnon tilastotietokanta (PxWeb)

**Verohallinnon PxWeb** sisältää verodataa: henkilöasiakkaiden tulovero, elinkeinovero, kiinteistövero, ALV jne. Taulukon valinta: valitse taulukko → valitse muuttujat → näytä taulukko.

| Kohde | URL |
|-------|-----|
| **PxWeb – Valitse taulukko** | [vero2.stat.fi/PXWeb/pxweb/fi/Vero/](https://vero2.stat.fi/PXWeb/pxweb/fi/Vero/) |

**Tyypillisesti tarvittava data (kunnittain ja postinumeroittain):**

Valikko: **2. Henkilöasiakkaiden tulovero** → **08. Yleisesti verovelvollisten tulot, vähennykset ja verot kunnittain ja postinumeroittain**

- Taulukot on jaettu verovuosittain (2018–2024)
- Sieltä saat tulot, vähennykset ja verot sekä kunnittain että postinumeroittain

Muut kategoriat (01–07) tarjoavat esim. tulot tulonsaajaryhmittäin, ikäluokittain, sukupuolittain tai alueittain – ei postinumero-/kuntarakoisuutta.

---

## Paavo – Tilastokeskus (postinumeroalueittainen tilasto)

**Paavo** tarjoaa postinumeroalueittaista tietoa asukasrakenteesta, koulutuksesta, tuloista, asumisesta, työpaikoista, talouksien elämänvaiheesta ja asukkaiden pääasiallisesta toiminnasta.

| Kohde | URL |
|-------|-----|
| **Paavo-etusivu** (kuvaus, linkit) | [stat.fi/tup/paavo/index.html](https://stat.fi/tup/paavo/index.html) |
| **PxWeb-tietokanta** (tilastot haettavissa) | Linkki etusivulta: "Siirry Paavo-tietokantaan (PxWeb)" |
| **Paikkatietojen rajapinta** (karttarajat, tilastot) | Etusivulta: "Siirry Paavon rajapintapalveluihin" |

**Tietosisältö (muuttujaluettelo):**  
[stat.fi/tup/paavo/tietosisalto.html](https://stat.fi/tup/paavo/tietosisalto.html)

- Asukasrakenne, koulutusaste, rahatulot, talouksien koko ja elämänvaihe
- Rakennukset ja asuminen, työpaikat toimialoittain, pääasiallinen toiminta
- Päivitetään vuosittain tammikuussa; PxWebissä aikasarja alkaen 2010

**Huom:** Postinumeroalueet on yleistetty – tilastollinen postinumeroalue ei aina vastaa osoitteen postinumeroa.

---

## Kunta–postinumeroalue-avain (Postinumero–kunta -avain)

Kun tarvitset **yhteyden postinumeroalueen ja kunnan välillä** (esim. aggregoi dataa kunnittain tai väritä karttaa kunnittain):

**Sijainti:** Paavon **Tietosisältö** -sivu, osio *"Postinumeroalueiden sijainti kunnassa ja muilla alueilla"*

| Kohde | URL |
|-------|-----|
| **Tietosisältö (avainlistan kohde)** | [stat.fi/tup/paavo/tietosisalto.html](https://stat.fi/tup/paavo/tietosisalto.html) |

Sivulla on linkit **Postinumero-kunta -avain** -tiedostoihin (xlsx) vuosittain:

- Postinumero-kunta -avain 2026 (xlsx)
- Postinumero-kunta -avain 2025 (xlsx)
- … (2024, 2023, …)

Lataa haluamasi vuosi ja käytä avaimena yhdistämään postinumeroalueet kuntiin dataputkessa.

---

## Käyttöehdot

Paavo noudattaa [Tilastokeskuksen avoimen datan käyttöehtoja](https://stat.fi/tup/paavo/index.html). Tarkista aina projektikohtaiset vaatimukset.

---

## Lyhyt viittaus

| Tarvitset | Lähtö |
|-----------|--------|
| Tulot, vähennykset ja verot **kunnittain ja postinumeroittain** | [Verohallinnon PxWeb (vero2.stat.fi)](https://vero2.stat.fi/PXWeb/pxweb/fi/Vero/) → Henkilöasiakkaiden tulovero → 08. … kunnittain ja postinumeroittain |
| Postinumeroalueittainen tilasto (väestö, tulot, asuminen, jne.) | [Paavo (stat.fi/tup/paavo)](https://stat.fi/tup/paavo/index.html) |
| Muuttujaluettelo ja **postinumero–kunta-avain** (xlsx) | [Paavo – Tietosisältö](https://stat.fi/tup/paavo/tietosisalto.html) |

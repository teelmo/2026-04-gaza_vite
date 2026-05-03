# Snippets: Analytics Fetch 📥

Ohjeet analytiikkadatan hakemiseen Snowflakesta.

> **Katso myös:** `analytics-frontend.md` – frontend tracking-koodi (lähetä dataa)

---

## 🎯 Milloin käytät tätä?

Kun haluat analysoida miten käyttäjät ovat käyttäneet interaktiivista elementtiä:

- Mitkä valinnat olivat suosituimpia?
- Kuinka moni suoritti wizardin loppuun?
- Missä kohdin käyttäjät lopettivat?

---

## 🔧 Setup: .env-konfiguraatio

Luo projektin juureen `.env`-tiedosto:

```bash
# Snowflake-yhteys (SSO)
SNOWFLAKE_ACCOUNT=yleisradiooyorg2-datapilvi
SNOWFLAKE_USER=etunimi.sukunimi@yle.fi
SNOWFLAKE_AUTHENTICATOR=externalbrowser
SNOWFLAKE_WAREHOUSE=<kysy-tiimiltä>
SNOWFLAKE_DATABASE=asiakasdata_db_test
SNOWFLAKE_SCHEMA=snowplow_events_v1
```

**Huom:** `.env` on .gitignoressa – älä commitoi!

---

## 📦 Python-riippuvuudet

Lisää `data_handling/requirements.txt`:iin:

```
snowflake-connector-python[secure-local-storage]>=3.0.0
python-dotenv>=1.0.0
pandas>=2.0.0
```

Asenna:

```bash
pnpm data:setup  # tai: cd data_handling && source .venv/bin/activate && pip install -r requirements.txt
```

---

## 🐍 Python-skripti: fetch_analytics.py

### Perusrakenne

```python
#!/usr/bin/env python3
"""Hae analytiikkadata Snowflakesta."""

import os
import sys
import subprocess
from pathlib import Path
from datetime import datetime
from dotenv import load_dotenv
import snowflake.connector
import pandas as pd

# Lataa .env projektin juuresta
script_dir = Path(__file__).parent
project_root = script_dir.parent
load_dotenv(project_root / ".env")

# SQL-tiedosto
SQL_FILE = script_dir / "sql" / "get_clicks.sql"
OUTPUT_DIR = script_dir / "analytics"


def patch_webbrowser_to_print_url():
    """
    macOS: Snowflake SSO ei aina avaa selainta automaattisesti.
    Tämä patch tulostaa URL:n konsoliin kopioitavaksi.
    """
    import webbrowser

    original_open = webbrowser.open

    def print_url_and_open(url, new=0, autoraise=True):
        print("\n" + "=" * 60)
        print("🔗 KOPIOI TÄMÄ URL SELAIMEEN:")
        print("=" * 60)
        print(url)
        print("=" * 60)
        sys.stdout.flush()

        # Yritä myös avata automaattisesti
        try:
            subprocess.run(["open", url], capture_output=True, timeout=5)
        except:
            pass
        return True

    webbrowser.open = print_url_and_open


def get_snowflake_connection():
    """Luo Snowflake-yhteys SSO:lla."""
    connect_params = {
        "account": os.getenv("SNOWFLAKE_ACCOUNT"),
        "user": os.getenv("SNOWFLAKE_USER"),
        "authenticator": os.getenv("SNOWFLAKE_AUTHENTICATOR", "externalbrowser"),
        "warehouse": os.getenv("SNOWFLAKE_WAREHOUSE"),
        "database": os.getenv("SNOWFLAKE_DATABASE"),
        "schema": os.getenv("SNOWFLAKE_SCHEMA"),
    }

    # Patchaa webbrowser ennen yhteyttä
    patch_webbrowser_to_print_url()

    print("🔐 Yhdistetään Snowflakeen...")
    print(f"   Käyttäjä: {connect_params['user']}")
    sys.stdout.flush()

    conn = snowflake.connector.connect(**connect_params)
    print("✅ Yhteys muodostettu")
    return conn


def main():
    # Lue SQL
    sql = SQL_FILE.read_text(encoding="utf-8")

    # Yhdistä ja suorita
    conn = get_snowflake_connection()
    try:
        cursor = conn.cursor()
        cursor.execute(sql)

        results = cursor.fetchall()
        columns = [desc[0] for desc in cursor.description]
        df = pd.DataFrame(results, columns=columns)

        print(f"✅ Haettu {len(df)} riviä")

        # Tallenna TSV
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        output_path = OUTPUT_DIR / f"clicks_{timestamp}.tsv"
        df.to_csv(output_path, sep="\t", index=False, encoding="utf-8")

        print(f"💾 Tallennettu: {output_path}")
    finally:
        conn.close()


if __name__ == "__main__":
    main()
```

---

## 📊 SQL-kysely: Perusrakenne

Luo `data_handling/sql/get_clicks.sql`:

```sql
-- Analytiikkakysely: [projektin nimi]
-- Category: YYYY-MM-projektinimi

WITH
timeframe AS (
    SELECT
        current_timestamp AS end_tstamp,
        current_timestamp - interval '30 days' AS begin_tstamp
),
clicks AS (
    SELECT *
    FROM asiakasdata_db_test.snowplow_events_v1.engagement_click_events_v2
    WHERE load_tstamp BETWEEN (SELECT begin_tstamp FROM timeframe) AND (SELECT end_tstamp FROM timeframe)
      AND engagement_view_id IS NULL
      AND engagement_attribute_component = 'yle-plus'
      AND engagement_attribute_category = 'YYYY-MM-projektinimi'  -- Vaihda!
)

-- Aggregoitu yhteenveto (suositus)
SELECT
    engagement_attribute_action AS action,
    engagement_attribute_label AS label,
    COUNT(*) AS click_count,
    MIN(load_tstamp) AS first_click,
    MAX(load_tstamp) AS last_click
FROM clicks
GROUP BY engagement_attribute_action, engagement_attribute_label
ORDER BY click_count DESC;
```

### Tärkeät kentät

| Kenttä                           | Kuvaus             | Esimerkki                       |
| -------------------------------- | ------------------ | ------------------------------- |
| `engagement_attribute_category`  | Projektin tunniste | `2026-02-ulkomaalaistaustaiset` |
| `engagement_attribute_action`    | Mitä käyttäjä teki | `postinumero-valittu`           |
| `engagement_attribute_label`     | Tarkenne           | `00100 Helsinki`                |
| `engagement_attribute_component` | Aina `yle-plus`    | `yle-plus`                      |

---

## 🚀 Käyttö

```bash
# Aja skripti
data_handling/.venv/bin/python data_handling/fetch_analytics.py

# Tai pnpm-skriptillä (jos määritelty package.json:issa)
pnpm analytics:fetch
```

**Workflow:**

1. Skripti käynnistyy
2. SSO-URL tulostetaan konsoliin → kopioi selaimeen
3. Kirjaudu Yle-tunnuksilla
4. Skripti jatkaa automaattisesti
5. TSV-tiedosto tallentuu `data_handling/analytics/`

---

## 🐛 Vianetsintä

### "No active warehouse selected"

→ Lisää `SNOWFLAKE_WAREHOUSE` .env-tiedostoon

### Selain ei avaudu automaattisesti

→ Kopioi konsoliin tulostettu URL manuaalisesti selaimeen

### "User differs from SSO user"

→ Tarkista että `SNOWFLAKE_USER` vastaa SSO-kirjautumista (sähköposti)

### Yhteys jää jumiin

→ Paina Ctrl+C ja kokeile uudelleen. Varmista VPN on päällä (jos vaaditaan).

---

## 📁 Tiedostorakenne

```
projekti/
├── .env                          # Snowflake-credentials (ei commitoida)
└── data_handling/
    ├── requirements.txt          # Python-riippuvuudet
    ├── fetch_analytics.py        # Hakuskripti
    ├── sql/                      # SQL-kyselyt
    │   └── get_clicks.sql
    └── analytics/                # Haettu data (ei commitoida)
        └── clicks_2026-01-28.tsv
```

---

**Projekti:** Yleinen pattern  
**Viimeksi päivitetty:** 2026-01

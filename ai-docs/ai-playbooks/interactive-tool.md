# Playbook: Interactive Tools & Calculators

**Goal:** Reliability, correctness, and user trust.
**Role:** Logic & UX Engineer.

---

## Setup Checklist

1. **Käännökset:** `ai-patterns/translations.md`
2. **Väriteemat:** `ai-patterns/dark-mode.md`
3. **YDS-tokenit:** `ai-patterns/yds-design-tokens.md`
4. **UI-komponentit:** `ai-patterns/ui-components.md` → YDS + Radix UI
5. **Mobile first:** `ai-patterns/_snippets/mobile.md`

### Projektin lopussa

- **Analytiikka:** `_snippets/analytics-frontend.md`
- **Saavutettavuus:** `_snippets/accessibility.md`

---

## Core Philosophy

> "Trust is easy to lose." One wrong calculation destroys credibility.
> "Data voi olla monimutkaista, mutta käyttökokemus ei saa olla."

## Technical Guidelines

1. **State:** Zustand + TanStack Query. Logic state erillään UI statesta.
2. **Validation:** Assume emojis, negative numbers, text. Handle NaN, null, undefined.
3. **Logic First:** Pure logic module (`calculator.ts`) ennen UI:a.
4. **UI Pattern:** Inputs → Immediate Feedback → Result.

See `ai-patterns/state-management.md` for complex state.

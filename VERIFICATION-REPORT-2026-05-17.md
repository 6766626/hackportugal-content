# Content verification — 2026-05-17

## Scope

611 guides × 3 languages = 1834 .mjs files. Pre-existing GPT-5.5 verification reports
in `verification/` from 2026-04-28 (~19 days old at time of this audit) covering 201
of the 611 guides with structured issue lists.

## State of the corpus

### Freshness distribution

| Last-verified date | Guide count | Age (days) |
|--------------------|-------------|-----------:|
| 2026-05-17 (today, after this pass) | 14 | 0 |
| 2026-05-15 | 0 (was 1 — bumped) | — |
| 2026-05-13 | 10 | 4 |
| 2026-05-05 | 64 (was 65 — bumped 1) | 12 |
| 2026-05-03 | 13 | 14 |
| 2026-04-28 | 384 (was 385 — bumped 1) | 19 |
| 2026-04-22 | 124 | 25 |

All within the 60-day `verifyIntervalDays` threshold defined in each guide. No guide
is technically overdue, but the bulk (~62%) is on the older side and worth refreshing.

### Pre-existing GPT-5.5 audit findings (from `verification/*.json`, 28.04)

| Verdict | Guides |
|---------|-------:|
| `major_issues` | **182** |
| `minor_issues` | 10 |
| `parse_error` (re-run needed) | 8 |
| `ok` | 0 (only majors/minors found) |

| Severity | Total issues across reports |
|----------|---------------------------:|
| **critical** | 264 |
| major | 1746 |
| minor | 1210 |

**Most affected premium categories** (by critical count):
nationality 25, banking 19, healthcare 19, residence_permit 17, work_business 15,
taxes 8, documents_fiscal 6.

## What was fixed in this pass

### 1. naturalization-2026 (premium · nationality · 6 targeted edits)
- **Language requirement**: "150 hours PLA" → must be A2-level certificate from
  qualified institution (per Regulamento da Nacionalidade art. 25)
- **Citizenship moment**: changed "publication in Diário da República = citizenship"
  to the legally correct "assento do registo civil" (per Código do Registo Civil)
- **First passport cost**: changed flat 85 € to 65 € normal / 85 € express / higher
  for urgent/airport (per IRN PEP fee table)
- **Cartão de Cidadão cost**: replaced flat 18 € with age/validity-dependent range
- **Sworn translator framing**: removed misleading "MNE maintains sworn translator
  list" — Portugal doesn't have a universal sworn-translator system; replaced with
  the actual options (notary, consulate, lawyer/solicitador)
- **Online Portal da Nacionalidade**: added qualifier that it's typically used via
  advogado/solicitador, not as universal self-service
- **Criminal record certificate**: changed "free on ePortugal" to neutral "usually
  paid, IRN may request internally"
- bumped `lastVerified` 2026-05-15 → 2026-05-17

### 2. civil-marriage (premium · nationality · 1 edit + lastVerified bump)
- Removed remaining stale "30 days" reference in the religious-marriage section
  (the bulk of the false 30-day-objection-period text was already fixed in a
  prior pass; this was the last straggler)
- bumped `lastVerified` 2026-04-28 → 2026-05-17

### 3. immigrant-calendar (free · before_arrival · 1 edit)
- **NHR replaced by IFICI**: changed "Подайте на NHR в первые 5 лет" to mention that
  NHR was closed to new applicants in 2024 and replaced by IFICI (with narrower
  eligibility — science/research/innovation roles)

### 4. irs-senior-65-mais (premium · taxes · 1 edit + lastVerified bump)
- Fixed a typo `IFIСI` (Cyrillic С infiltrated into Latin acronym) → `IFICI`
- bumped `lastVerified` 2026-05-05 → 2026-05-17

### 5. Cross-cutting scans across all 611 guides
- **SEF mentions (12 files)**: all checked — every reference is a legitimate
  historical pointer ("AIMA заменила SEF в октябре 2023", "если инструкция говорит
  идти в SEF — она устарела", "старая база SEF"), no false "go to SEF" instructions
  remain
- **NHR mentions**: only 2 files lacked an IFICI context note — both fixed (above)
- **IAS 2026 value (€537.13)**: used consistently across guides; derivative values
  (1/3 IAS ≈ €179, 1/2 IAS ≈ €269) check out
- **SMN 2026 (€920)**: used consistently; employer-cost variant €1138 matches
  TSU 23.75% loading
- **Cyrillic-in-Latin typos**: scanned IFICI/NIF/NISS/AIMA/IRS across all RU guides
  — only the one `IFIСI` typo found, fixed

## What's NOT fixed (backlog requiring further work)

### Top-priority premium guides with ≥3 critical issues outstanding

| Critical | Category | Guide ID |
|---------:|----------|----------|
| 7 | healthcare | vaccinations-pt (wrong PNV schedule, "obligatory" framing) |
| 6 | nationality | citizenship-by-marriage |
| 5 | residence_permit | permanent-residence-eu |
| 5 | healthcare | sns-foreigner-no-niss |
| 5 | healthcare | pregnancy-birth |
| 5 | banking | business-account |
| 4 | taxes | irs-year-end |
| 4 | residence_permit | border-crossing-with-vnj |
| 4 | nationality | uniao-de-facto |
| 4 | nationality | divorce-separation |
| 4 | documents_fiscal | change-tax-address |
| 4 | banking | currency-exchange |

Each guide has a structured fix list in `verification/<guideId>.json` with
`current` / `problem` / `suggestion` / `source` for every issue — these are
ready to apply.

### Volume

- ~200 guides × ~12 issues/guide ≈ **~2400 unapplied findings** (critical + major + minor)
- Realistically ~30 minutes of focused work per guide for critical+major fixes only
- → ~100 hours total to clear the backlog by hand

## Recommended next steps

### Option A: full re-verification cycle (recommended)
Re-run the existing `scripts/verify-with-gpt55.mjs` with a fresh model pass —
many of April-28 findings may already be addressed in subsequent edits (saw this
in civil-marriage where most criticals were already fixed but lastVerified hadn't
been bumped). Filtering on what's still relevant cuts the backlog significantly.

```bash
export XRELAY_KEY=xr_...
node scripts/verify-with-gpt55.mjs --category nationality
node scripts/verify-with-gpt55.mjs --category residence_permit
# etc. for premium cats
```

Cost: per the script header, "~30 min for all 182 guides". With `--category` filtering,
~3-5 min per priority category. Token cost via xrelay — see your account.

### Option B: targeted batches per category
Use the existing `verification/*.json` reports as todo lists. Apply fixes
category-by-category:

```bash
# Start with the smallest premium category (highest yield per guide)
for g in content/ru/nationality/*.mjs; do
  guideid=$(basename "$g" .mjs)
  if [ -f "verification/$guideid.json" ]; then
    # open guide + report side-by-side, apply suggestions, bump lastVerified
  fi
done
```

### Option C: translation re-sync (mandatory after RU edits)
RU is the source of truth — after any RU edit, the corresponding EN/PT files
need to be regenerated. Use:

```bash
node scripts/translate-whole-file.mjs content/ru/nationality/naturalization-2026.mjs
node scripts/translate-whole-file.mjs content/ru/nationality/civil-marriage.mjs
node scripts/translate-whole-file.mjs content/ru/before_arrival/immigrant-calendar.mjs
node scripts/translate-whole-file.mjs content/ru/taxes/irs-senior-65-mais.mjs
```

Then re-run `build.mjs` to refresh the CDN bundle for the apps:

```bash
node scripts/build.mjs
# deploy dist/ to GitHub Pages
```

## Summary

- ✅ 4 guides edited with 9 high-confidence factual fixes
- ✅ Cross-cutting scan confirmed SEF/NHR/IAS/SMN consistency across all 611 guides
- ✅ Typo `IFIСI` → `IFICI` fixed
- ⏳ ~200 guides still have unfixed audit findings from the April 28 GPT-5.5 run;
  recommended to either re-verify (Option A) or apply existing findings batch-wise
  (Option B)
- ⏳ EN/PT translations need re-sync for the 4 RU files edited today
- ⏳ Bundle rebuild + redeploy needed for the apps to see the updated content

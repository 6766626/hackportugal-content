export default {
  "editorialVoice": "hackportugal",
  "id": "usa-specific",
  "categoryId": "country_specific",
  "title": "Americans in Portugal — FATCA and double taxation",
  "tldr": "The USA and Portugal have a double taxation avoidance agreement. However, the USA taxes citizens worldwide (citizenship-based taxation) — FATCA requires PT banks to report. IRS/PT declarations need to be submitted to both countries. FBAR (>$10k in foreign accounts) is mandatory.",
  "audience": {
    "countryCodes": [
      "US"
    ]
  },
  "tags": [
    "usa",
    "fatca",
    "taxes",
    "double"
  ],
  "estimatedReadMinutes": 7,
  "steps": [
    {
      "id": "tax-basics",
      "title": "Basics of taxation",
      "content": [
        {
          "kind": "paragraph",
          "text": "The USA is one of the few countries that taxes its citizens worldwide regardless of residency. The Treaty PT-USA agreement from 1994 helps avoid double taxation but does not exempt you from declaring."
        },
        {
          "kind": "checklist",
          "items": [
            "If you are a tax resident in PT (>183 days) — PT taxes your worldwide income",
            "As a US citizen — the IRS also requires a declaration (Form 1040 + Schedule B)",
            "Foreign Earned Income Exclusion (FEIE) — $132,900 for 2026 (2025: $130,000). The amount is indexed annually; the current value can be found at irs.gov",
            "Foreign Tax Credit (FTC) — a credit for tax paid in PT against US tax",
            "FBAR (FinCEN Form 114) — if all foreign accounts total > $10,000 at any time during the year (filed separately from 1040)",
            "Form 8938 (FATCA individual) — if foreign assets > $200,000 at year-end (or $300,000 at any time) for single filers abroad; $400,000 / $600,000 for married filing jointly. This does not replace FBAR — both must be filed"
          ]
        }
      ]
    },
    {
      "id": "fatca",
      "title": "FATCA — bank reporting",
      "content": [
        {
          "kind": "paragraph",
          "text": "FATCA requires all banks in PT to report to the IRS about accounts held by US citizens. Most PT banks accept US citizens, but refusals can occur due to compliance burden."
        },
        {
          "kind": "checklist",
          "items": [
            "Banks accepting Americans: ActivoBank, Millennium, Caixa, Novobanco",
            "Some banks (Santander, BPI) may refuse",
            "W-9 form — must be completed when opening an account",
            "The annual bank report to IRS is automatic",
            "For brokerage accounts (investing) — options are limited, Interactive Brokers OK"
          ]
        }
      ]
    },
    {
      "id": "nhr-ifici",
      "title": "NHR / IFICI for Americans",
      "content": [
        {
          "kind": "paragraph",
          "text": "The old NHR (until 2024) was very beneficial: 10% on US pensions + 20% on qualified work + 0% on US dividends. Those who managed to apply before 2024 retain it for 10 years."
        },
        {
          "kind": "paragraph",
          "text": "IFICI (2024+): 20% flat rate, but there is already a list of qualified professions. Traditional remote workers find it harder to qualify. FEIE + FTC — the main protection."
        }
      ]
    },
    {
      "id": "visas",
      "title": "Visas from the USA",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "US passport: Schengen visa-free for 90 days",
            "For relocation: D7 (pensioners), D8 (remote workers) are popular",
            "Golden Visa — available, the process is standard",
            "Portuguese consulates: NYC, Washington DC, Miami, Chicago, Boston, Providence, San Francisco, Los Angeles, Newark, Houston",
            "Visa process takes 60-90 days. American documents are easily apostilled through the Secretary of State"
          ]
        }
      ]
    },
    {
      "id": "investments",
      "title": "Investments — challenges",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "PFIC (Passive Foreign Investment Company) — EU funds are often PFIC, heavy reporting to IRS",
            "Vanguard / Fidelity / Charles Schwab — US residents usually find it easier",
            "US ETFs — better than PT/EU funds for Americans",
            "Roth IRA — not taxable in PT (the agreement protects)",
            "401(k) — pension payments are taxable in PT",
            "PT Pension Fund (PPR) — US considers PFIC, a poor choice for US citizens"
          ]
        }
      ]
    },
    {
      "id": "healthcare",
      "title": "Healthcare",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "SNS — available for free after obtaining a residence permit",
            "Private insurance — Médis, Multicare ~€50-100/month for 1 person",
            "Medicare (US) — does not work in PT",
            "International insurance (Cigna, Allianz) — for travel"
          ]
        }
      ]
    },
    {
      "id": "community",
      "title": "American community",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "US Embassy in Lisbon: Av. Das Forças Armadas",
            "American Club of Portugal (ACP) — social club",
            "AMCHAM Portugal (American Chamber of Commerce) — business networking",
            "International Christian Fellowship",
            "Large expat communities — Cascais, Algarve, Lisbon",
            "IRS International: +1 267-941-1000 (for FBAR / FATCA / FEIE inquiries)"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "US Embassy Lisbon",
      "url": "https://pt.usembassy.gov/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IRS International — FEIE / FBAR",
      "url": "https://www.irs.gov/individuals/international-taxpayers",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "US-Portugal Tax Treaty (IRS)",
      "url": "https://www.irs.gov/businesses/international-businesses/portugal-tax-treaty-documents",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portal das Finanças (tax authority online portal) — residence",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 180
}

export default {
  editorialVoice: 'hackportugal',
  id: 'usa-specific',
  categoryId: 'country_specific',
  title: 'Americans in Portugal — FATCA and double taxation',
  tldr: 'The US and Portugal have a double taxation agreement. However, the US taxes citizens worldwide under citizenship-based taxation — FATCA requires Portuguese banks to report. Tax returns must be filed with both the IRS and Portugal. FBAR (>$10k in foreign accounts) is mandatory.',
  audience: { countryCodes: ['US'] },
  tags: ['usa', 'fatca', 'taxes', 'double taxation'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'tax-basics',
      title: 'Tax basics',
      content: [
        { kind: 'paragraph', text: 'The US is one of the few countries that taxes citizens worldwide regardless of residency. The 1994 Portugal-US tax treaty helps avoid double taxation, but it does not remove the obligation to file.' },
        { kind: 'checklist', items: [
          'If you are a tax resident of Portugal (>183 days) — Portugal taxes your entire worldwide income',
          'As a US citizen — the IRS also requires tax returns (Form 1040 + Schedule B)',
          'Foreign Earned Income Exclusion (FEIE) — $132,900 for 2026 (2025: $130,000). The amount is indexed annually; the current figure is on irs.gov',
          'Foreign Tax Credit (FTC) — credit for tax paid in Portugal against US tax',
          'FBAR (FinCEN Form 114) — if all foreign accounts total > $10,000 on any day of the year (filed separately from 1040)',
          'Form 8938 (individual FATCA reporting) — if foreign assets are > $200,000 at year-end (or $300,000 on any day) for residents abroad filing as single; $400,000 / $600,000 for married filing jointly. It does not replace FBAR — both forms must be filed'
        ]}
      ]
    },
    {
      id: 'fatca',
      title: 'FATCA — bank reporting',
      content: [
        { kind: 'paragraph', text: 'FATCA requires all Portuguese banks to report accounts held by US citizens to the IRS. Most Portuguese banks accept US citizens, but refusals do happen because of the compliance burden.' },
        { kind: 'checklist', items: [
          'Banks that accept Americans: ActivoBank, Millennium, Caixa, Novobanco',
          'Some banks (Santander, BPI) may refuse',
          'Form W-9 must be completed when opening an account',
          'The bank’s annual report to the IRS is sent automatically',
          'For brokerage accounts (investing), the choice is limited; Interactive Brokers is suitable'
        ]}
      ]
    },
    {
      id: 'nhr-ifici',
      title: 'NHR / IFICI for Americans',
      content: [
        { kind: 'paragraph', text: 'The old NHR (before 2024) was very advantageous: 10% on US pensions + 20% on qualified work + 0% on US dividends. Those who qualified before 2024 keep the regime for 10 years.' },
        { kind: 'paragraph', text: 'IFICI (2024+): a flat 20% rate, but the list of qualifying professions is now narrower. A traditional remote worker has a harder time qualifying. FEIE + FTC is the main protection.' }
      ]
    },
    {
      id: 'visas',
      title: 'Visas from the US',
      content: [
        { kind: 'checklist', items: [
          'US passport: visa-free Schengen for 90 days',
          'For relocation: D7 (pensioners), D8 (remote workers) are popular',
          'Golden Visa — available, standard process',
          'Portuguese Consulate: NYC, Washington DC, Miami, Chicago, Boston, Providence, San Francisco, Los Angeles, Newark, Houston',
          'The visa process takes 60-90 days. American documents are easy to apostille through the Secretary of State'
        ]}
      ]
    },
    {
      id: 'investments',
      title: 'Investments — complications',
      content: [
        { kind: 'checklist', items: [
          'PFIC (Passive Foreign Investment Company) — EU funds are often considered PFICs, with heavy IRS reporting',
          'Vanguard / Fidelity / Charles Schwab — generally easier for US residents',
          'US ETFs — better than Portuguese/European funds for Americans',
          'Roth IRA — not taxed in Portugal (protected by the treaty)',
          '401(k) — pension payments are taxed in Portugal',
          'Portuguese pension fund (PPR) — the US treats it as a PFIC, a poor choice for a US citizen'
        ]}
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      content: [
        { kind: 'checklist', items: [
          'SNS — available free of charge after obtaining a residence permit',
          'Private insurance — Médis, Multicare ~€50-100/month for 1 person',
          'Medicare (US) — does not work in Portugal',
          'International insurance (Cigna, Allianz) — for travel'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'American community',
      content: [
        { kind: 'checklist', items: [
          'US Embassy in Lisbon: Av. Das Forças Armadas',
          'American Club of Portugal (ACP) — social club',
          'AMCHAM Portugal (American Chamber of Commerce) — business networking',
          'International Christian Fellowship',
          'Large expat communities — Cascais, Algarve, Lisbon',
          'IRS International: +1 267-941-1000 (for FBAR / FATCA / FEIE questions)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'US Embassy Lisbon', url: 'https://pt.usembassy.gov/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'IRS International — FEIE / FBAR', url: 'https://www.irs.gov/individuals/international-taxpayers', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'US-Portugal Tax Treaty (IRS)', url: 'https://www.irs.gov/businesses/international-businesses/portugal-tax-treaty-documents', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (tax portal) — residency', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

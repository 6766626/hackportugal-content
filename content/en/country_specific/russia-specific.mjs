export default {
  editorialVoice: 'hackportugal',
  id: 'russia-specific',
  categoryId: 'country_specific',
  title: 'Moving from Russia — specific considerations',
  tldr: 'Russians: EU sanctions have made the banking side more difficult, but moving is possible. Schengen tourist visas are generally not issued (except in humanitarian cases). D visas are issued. The Portuguese Consulate in Moscow is operating, but with a 2–4 month appointment queue. Important: Visa/Mastercard cards issued by Russian banks do NOT work outside the Russian Federation (since 2022 — Visa/MC left the Russian Federation). UnionPay is accepted partially at some terminals. Many major Russian banks (Sber, VTB, Alfa, Gazprombank, Tinkoff/T-Bank and others) are under EU/SDN sanctions; funds originating from them require enhanced proof of source of funds and may be blocked by a Portuguese bank. Open a Portuguese bank account before arrival or immediately afterwards.',
  audience: { countryCodes: ['RU'] },
  tags: ['russia', 'sanctions', 'visas'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'visas-2026',
      title: 'Visas 2026',
      content: [
        { kind: 'checklist', items: [
          '❌ Schengen tourist visas (C) — the EU suspended the visa facilitation agreement with the Russian Federation in September 2022; visa fee €90; issuance is case-by-case',
          '✅ D visas (D2/D3/D4/D7/D8) — issued, process as for other third countries',
          '✅ Family reunification — works',
          '✅ CPLP mobility does not apply (Russia is not part of the community of Portuguese-speaking countries). An option only if you have a second citizenship of a CPLP country',
          '✅ Student D4 — issued, popular',
          'Portuguese Consulate in Moscow: Rua Fadeyeva 11 — operating as usual, appointment queue 2–4 months'
        ]}
      ]
    },
    {
      id: 'banking',
      title: 'Banking nuances',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Russian cards do NOT work in Portugal', content: [
            { kind: 'paragraph', text: 'Visa/Mastercard issued in the Russian Federation have been blocked outside the Russian Federation since March 2022. UnionPay from Russian banks works, but is not accepted everywhere in Portugal.' }
          ]},
          { id: 'b2', title: 'Transferring money to Portugal', content: [
            { kind: 'checklist', items: [
              'Cash across the border — limit €10,000 (declaration), still applies',
              'Wise, Revolut — open in a country where this is permitted (Kazakhstan, Serbia, Armenia and others)',
              'Cryptocurrency — USDT/USDC → withdrawal to Revolut/N26/Portuguese bank',
              'Buying gold in the Russian Federation → selling in Portugal (works, but inefficient)',
              'Transfer via relatives in non-sanctioned countries'
            ]}
          ]},
          { id: 'b3', title: 'Open a Portuguese bank account', content: [
            { kind: 'paragraph', text: 'ActivoBank, Millennium, Caixa — accept Russians with a valid visa/residence permit and a Portuguese address. Required: passport, NIF, proof of address in Portugal, proof of source of income.' },
            { kind: 'warning', text: 'Some banks (Santander, BPI) may refuse due to AML requirements. Try several.' }
          ]}
        ]}
      ]
    },
    {
      id: 'golden-visa',
      title: 'Golden Visa for Russians',
      content: [
        { kind: 'paragraph', text: 'Golden Visa is formally available, but with stricter AML checks for citizens of the Russian Federation. Legal support is required. Timeline — 12–24 months.' },
        { kind: 'warning', text: 'Many major Russian banks are on EU/OFAC sanctions lists: Sber, VTB, Alfa, Gazprombank, PSB, Rosselkhozbank, Tinkoff/T-Bank (since 2023), Sovcombank and others. A Portuguese bank may refuse to accept money from these banks or may block it. Before transferring — check the current list and source-of-funds requirements with the receiving bank. Raiffeisen Russia is still operating for now, but it is also under special scrutiny. Prepare detailed proof of source of funds (declarations, tax documents, contracts).' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents from the Russian Federation',
      content: [
        { kind: 'checklist', items: [
          'Criminal record certificate — through the Ministry of Internal Affairs or Gosuslugi. Timeline 14–30 days',
          'Apostille — regional Ministry of Justice. 2–4 weeks. Validity of certificate + apostille = 3–6 months',
          'Civil registry certificates — duplicates + apostille. 1–3 months',
          'Diplomas — Rosobrnadzor + Ministry of Justice apostille',
          'Notarial powers of attorney for relatives in the Russian Federation — at the Portuguese Consulate in Moscow',
          '⚠️ All translations — sworn (sworn translation with apostille)'
        ]}
      ]
    },
    {
      id: 'after-arrival',
      title: 'After arrival',
      content: [
        { kind: 'checklist', items: [
          'NIF → opening an account → rental',
          'Mobile: buy a Portuguese SIM card (MEO/NOS/Vodafone) immediately',
          'Deregistration in the Russian Federation: remotely via Gosuslugi + consulate',
          'Sole trader in the Russian Federation — close in advance if you do not plan to operate it',
          'Tax residence: after 183 days in Portugal — Portuguese resident. Declare in both (Portugal + Russian Federation) in the first year',
          'Certificate of residence from the Russian Federation — needed to avoid double taxation'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Russian-speaking community',
      content: [
        { kind: 'checklist', items: [
          'Russian school (for children): Carlos Freixo (Oeiras)',
          'Russian Orthodox Church — Lisboa (Rua Maria Pia)',
          'Embassy of the Russian Federation — Rua Visconde de Santarém, 57, 1000-286 Lisboa (+351 21 846 4417)',
          'Cultural society “Russian House” (Casa da Rússia) — events, Russian language courses',
          'Private clinics with Russian-speaking doctors — Cuf, Luz (ask)',
          'Retail: “Magnit”, “Matryoshka” — CIS products in Lisboa'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portuguese Embassy in Moscow', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — official website', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — D visas', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — compensation and AML', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

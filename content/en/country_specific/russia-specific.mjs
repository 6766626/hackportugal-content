export default {
  editorialVoice: 'hackportugal',
  id: 'russia-specific',
  categoryId: 'country_specific',
  title: 'Moving from Russia — specifics',
  tldr: 'Russians: EU sanctions have made the banking side more complicated, but moving is possible. Schengen tourist (C) visas are harder to obtain: there is no blanket ban, but since September 2022 scrutiny is much higher, and since November 2025 they are almost exclusively single-entry. D visas are issued. The Portuguese Consulate in Moscow is operating, but with a 2–4 month queue. Important: Visa/Mastercard cards from Russian banks do NOT work outside the Russian Federation (since 2022 — Visa/MC left the Russian Federation).\n\nUnionPay is partially accepted at some terminals. Many large Russian banks (Sber, VTB, Alfa, Gazprombank, Tinkoff/T-Bank, etc.) are under EU/SDN sanctions; the source of funds from them requires extended proof of origin and may be blocked by a Portuguese bank. Open a Portuguese account before arrival or immediately afterwards.',
  audience: { countryCodes: ['RU'] },
  tags: ['russia', 'sanctions', 'visas'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'visas-2026',
      title: 'Visas 2026',
      content: [
        { kind: 'checklist', items: [
          '❌ Schengen tourist visas (C) — the EU suspended the visa facilitation agreement with the Russian Federation in September 2022; visa fee €90; issuance is case-by-case. Since November 2025 the European Commission has ended multiple-entry visas for Russian citizens — nearly all visas are now single-entry, with enhanced scrutiny',
          '✅ D visas (D2/D3/D4/D7/D8) — issued, process as for other third countries',
          '✅ Family reunification — works',
          '✅ CPLP mobility does not apply (Russia is not part of the Community of Portuguese-speaking Countries). An option exists only if you have second citizenship of a CPLP country',
          '✅ Student D4 — issued, popular',
          'Portuguese Consulate in Moscow (Botanichesky Pereulok 1) — operating as normal, appointment queue 2–4 months'
        ]}
      ]
    },
    {
      id: 'embassy-update-2026-04',
      title: 'Simplified submission for D4 / E9 / E6 (17.04.2026)',
      content: [
        { kind: 'paragraph', text: 'On 17 April 2026, the Embassy of Portugal in Moscow published an announcement, “Visa applications — Students and booking an appointment with AIMA”, on simplifying the document submission procedure for three categories of applicants.' },
        { kind: 'checklist', items: [
          '✅ D4 — national study visa (bachelor’s, master’s, doctoral studies, long language courses)',
          '✅ E9 — visa for participation in the Erasmus Mundus programme',
          '✅ E6 — visa for those who then need to contact AIMA for processing matters (for example, residence permit renewal, family reunification). NOT investment programmes — Golden Visa and D2 follow other tracks'
        ]},
        { kind: 'warning', text: 'The exact wording of the procedure is: “for the purpose of simplifying the document submission procedure”. The Embassy does NOT literally state “without appointment”; the publication refers to priority/simplified submission. Before visiting, check the current requirements on the Embassy and BLS websites.' },
        { kind: 'paragraph', text: 'BLS visa centre in Moscow (Kosmodamianskaya Embankment, 52 bldg. 7): application submission 09:00–15:00 (Mon–Fri), passport collection and consultations 15:00–16:00. Phone: +7 (499) 110 63 76, email: info.portugal@blshelpline.com.' },
        { kind: 'warning', text: 'Simplifying the submission procedure does NOT mean simplifying the document package. All standard requirements (university enrolment, proof of funds, accommodation, health insurance, criminal record certificate with apostille) remain. See details in the “D4 visa (student)” guide.' }
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
              'Wise, Revolut — open in a country where this is permitted (Kazakhstan, Serbia, Armenia, etc.)',
              'Cryptocurrency — USDT/USDC → withdrawal to Revolut/N26/Portuguese bank',
              'Buying gold in the Russian Federation → selling in Portugal (works, but inefficient)',
              'Transfer via relatives in non-sanctioned countries'
            ]}
          ]},
          { id: 'b3', title: 'Open a Portuguese account', content: [
            { kind: 'paragraph', text: 'ActivoBank, Millennium, Caixa — accept Russians with a valid visa/residence permit and a Portuguese address. Required: passport, NIF, proof of address in Portugal, proof of source of income.' },
            { kind: 'warning', text: 'Some banks (Santander, BPI) may refuse because of AML requirements. Try several.' }
          ]}
        ]}
      ]
    },
    {
      id: 'golden-visa',
      title: 'Golden Visa for Russians',
      content: [
        { kind: 'paragraph', text: 'Golden Visa is formally available, but with stricter AML checks for Russian Federation citizens. Legal support is needed. Timeline — 12–24 months.' },
        { kind: 'warning', text: 'Many large Russian banks are on EU/OFAC sanctions lists: Sber, VTB, Alfa, Gazprombank, PSB, Rosselkhozbank, Tinkoff/T-Bank (since 2023), Sovcombank, etc. A Portuguese bank may refuse to accept money from these banks or may block it. Before transferring — check the current list and requirements for proving the source of funds with the receiving bank. Raiffeisen Russia is still operating for now, but it is also under special scrutiny. Prepare detailed proof of source of funds (declarations, tax documents, contracts).' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents from the Russian Federation',
      content: [
        { kind: 'checklist', items: [
          'Criminal record certificate — via the Ministry of Internal Affairs or Gosuslugi. Timeline 14–30 days',
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
          'NIF → account opening → rental',
          'Mobile: buy a Portuguese SIM card (MEO/NOS/Vodafone) immediately',
          'Deregistration in the Russian Federation: remotely via Gosuslugi + consulate',
          'Sole trader in the Russian Federation — close in advance if you do not plan to operate it',
          'Tax residency: after 183 days in Portugal — resident of Portugal. Declare both (Portugal + Russian Federation) in the first year',
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
    { title: 'Embassy of Portugal in Moscow', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'Announcement of 17.04.2026 — D4/E9/E6 visa applications', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'BLS Portugal Russia — contacts and opening hours', url: 'https://blsportugalrussia.ru/russian/contact.php', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'AIMA — official website', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — D visas', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — compensation and AML', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90,
  changeSummary: '13.05.2026 Added a section on the announcement by the Embassy of Portugal in Moscow dated 17.04.2026: simplification of the document submission procedure for study visas D4 (national study), E9 (Erasmus Mundus) and E6 (for subsequent contact with AIMA). Clarified: the Embassy does not literally state “without appointment”; it refers to priority/simplified submission. BLS Moscow opening hours: applications 09:00–15:00, collection/consultations 15:00–16:00 (Mon–Fri).'
}

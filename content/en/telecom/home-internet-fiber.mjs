export default {
  editorialVoice: 'hackportugal',
  id: 'home-internet-fiber',
  categoryId: 'telecom',
  title: 'Home internet — fibre, installation, moving home',
  tldr: 'Home fibre in PT 2026: DIGI 1 Gbps for €10/month (3 months fidelização), DIGI 10 Gbps for €15/month. NOS WOO “no fidelização” from €19/month. MEO/NOS/Vodafone — fibre + TV + mobile bundle from €35/month (24 months fidelização). Installation usually 1–3 weeks after applying. Address must be in the coverage area (check with NIF + postcode on the operator’s website). When moving — submit a mudança de morada 7 days before the date; sometimes a new installation is required.',
  tags: ['fibre', 'internet', 'home', 'fttd', 'move', 'change of address'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'check-coverage',
      title: '🗺️ Step 1. Check coverage at the address',
      content: [
        { kind: 'paragraph', text: 'Not every street in Portugal is covered by fibre. In small towns and villages, often only ADSL or mobile (4G/5G CPE). The check takes 1 minute:' },
        { kind: 'checklist', items: [
          'DIGI: digi.pt → “Verifica a cobertura” → enter postcode + street',
          'NOS: nos.pt → “Cobertura” → postcode + house number',
          'MEO: meo.pt → “Cobertura de fibra” → DA (Designação Administrativa) + number',
          'Vodafone: vodafone.pt → “Verificar cobertura” → CP4-CP3 + street',
          '⚠️ If all 4 say “não disponível” — you have an older building without fibre; you will have to take 5G CPE (NOS Casa 5G, Vodafone Wi-Box) or ADSL'
        ]}
      ]
    },
    {
      id: 'choose-tariff',
      title: '💰 Step 2. Choose a tariff',
      content: [
        { kind: 'substeps', items: [
          { id: 'budget', title: 'Budget — DIGI', content: [
            { kind: 'checklist', items: [
              'DIGI 1 Gbps — €10/month, 3 months fidelização',
              'DIGI 10 Gbps PRO — €15/month, Wi‑Fi 7 router',
              'Installation is free',
              'No TV package (add separately if needed)',
              'Online application only / call 1606',
              '€50 cashback promo sometimes available'
            ]}
          ]},
          { id: 'midrange', title: 'No tie‑in — WOO (NOS)', content: [
            { kind: 'checklist', items: [
              'WOO Internet 1 Gbps — €19/month, NO tie‑in',
              'WOO Internet + TV — €25/month',
              'Can cancel at any time (advantage)',
              'Coverage = NOS infrastructure (good in cities)'
            ]}
          ]},
          { id: 'premium', title: 'Premium — MEO/NOS/Vodafone (24 months)', content: [
            { kind: 'checklist', items: [
              'Bundle fibre 1 Gbps + IPTV (≈100 channels) + 4 mobile SIMs = €35–55/month',
              'Fidelização 24 months — early termination penalty',
              'Free Wi‑Fi 6 router + 2 TV boxes',
              'Installation usually free',
              'Convenient if you are a family (several SIMs in the bundle)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'install',
      title: '🛠️ Step 3. Apply and install',
      content: [
        { kind: 'paragraph', text: 'Documents for the contract: NIF, CC/residence permit or passport, IBAN of a Portuguese bank (for débito direto), tenancy or ownership contract.' },
        { kind: 'checklist', items: [
          'Apply online or in the operator’s shop',
          'Receive an agendamento (appointment) — 4‑hour window (08–12, 12–16 or 16–20)',
          'Technician pulls fibre from the building cabinet to the flat (often via corridor/balcony)',
          'If the home already has an ONT (Optical Network Terminal) — installation takes 30 min',
          'If new cabling is needed — 1–2 h + approval from the condominium association (disputes with the condominium do happen)',
          'Activation of internet — 30 min after installation',
          '💡 On sick leave/on holiday: ask for an agendamento on a specific date when ordering'
        ]}
      ]
    },
    {
      id: 'mudanca-morada',
      title: '📦 Moving home — Mudança de morada',
      content: [
        { kind: 'paragraph', text: 'If you are moving to a new address — do NOT cancel the contract, otherwise you will incur a fidelização penalty. Request a mudança de morada (change of address) — the operator will move the service.' },
        { kind: 'checklist', items: [
          'Submit the request 7–14 days before the move',
          'If there is no coverage at the new address — the operator must terminate WITHOUT penalty (under DL 24/2014)',
          'If there is coverage — installation at the new address is free',
          'You pay as usual during the move (no discount for “no internet for 3 days”)',
          'Timelines: 1–3 weeks from request to activation at the new address',
          '⚠️ Keep the receipt for submitting the mudança request — in case of dispute'
        ]}
      ]
    },
    {
      id: 'cancellation',
      title: '✂️ Cancellation — fidelização and penalties',
      content: [
        { kind: 'paragraph', text: 'Standard fidelização in PT — 24 months for bundles and 6–12 months for standalone internet. Early termination:' },
        { kind: 'checklist', items: [
          'Penalty = 50% of the remaining months × monthly fee (but not more than the cost of equipment + installation)',
          'No penalty: change of address to a no‑coverage area, leaving PT permanently (document from AIMA required)',
          'No penalty: poor service quality (need 3 speed measurements, written complaints, and the operator’s acknowledgement)',
          'After 24 months the contract automatically becomes “without fidelização” — cancellation is free with 30 days’ notice',
          '🛡️ Complaint to ANACOM (anacom.pt) — if the operator charges a penalty unlawfully. Free review, effective'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '🤝 Negotiate — operators give €5–10/month “off the record” if you mention a competitor',
          '🔍 Compare on anacom.pt → “Comparação” — the official comparator',
          '📞 Complaints — Livro de Reclamações (livroreclamacoes.pt), then ANACOM',
          '🆔 The contract is in one person’s name (not “for the family”) — this matters for cancellation',
          '🏠 In OldEra buildings (pre‑1990): sometimes the condominium’s approval is needed to pull fibre through common areas',
          '📺 IPTV packages — sports channels (BTV, Sport TV) are often charged extra, check',
          '⚡ Backup path — mobile 4G from another operator as fallback in case of outage'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'DIGI 1 Gbps', amountEUR: 10, note: '€/month, 3 months fidelização' },
    { label: 'DIGI 10 Gbps PRO', amountEUR: 15, note: '€/month' },
    { label: 'WOO 1 Gbps without fidelização', amountEUR: 19, note: '€/month' },
    { label: 'MEO/NOS/Vodafone bundle (fibre + TV + 4 SIMs)', amountEURMin: 35, amountEURMax: 55, note: '€/month, 24 months fidelização' },
    { label: 'Installation', amountEUR: 0, note: 'usually free' },
    { label: 'Early termination penalty', amountEURMin: 100, amountEURMax: 400, note: 'depends on the remaining term' }
  ],
  sources: [
    { title: 'ANACOM COM.escolha — official tariff comparator', url: 'https://www.anacom.pt/tarifarios/PaginaInicial.do', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'DL 24/2014 — consumer rights for distance services', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/24-2014-572691', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}

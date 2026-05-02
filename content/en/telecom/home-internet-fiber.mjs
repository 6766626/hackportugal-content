export default {
  editorialVoice: 'hackportugal',
  id: 'home-internet-fiber',
  categoryId: 'telecom',
  title: 'Home internet — fibre, installation, moving home',
  tldr: 'Home fibre in PT 2026: DIGI 1 Gbps for €10/month (3 months fidelização), DIGI 10 Gbps for €15/month. NOS WOO “no fidelização” from €19/month. MEO/NOS/Vodafone — fibre + TV + mobile package from €35/month (24 months fidelização). Installation is usually 1–3 weeks after application. The address must be in a coverage area (check by NIF + postcode on the operator website). When moving home — submit a mudança de morada request 7 days before the date; sometimes a new installation is required.',
  tags: ['fibre', 'internet', 'home', 'fttd', 'moving', 'mudança morada'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'check-coverage',
      title: '🗺️ Step 1. Check coverage at the address',
      content: [
        { kind: 'paragraph', text: 'Not every street in Portugal has fibre coverage. In small towns and villages, there is often only ADSL or mobile fibre (4G/5G CPE). The check takes 1 minute:' },
        { kind: 'checklist', items: [
          'DIGI: digi.pt → “Verifica a cobertura” → enter postcode + street',
          'NOS: nos.pt → “Cobertura” → code and house number',
          'MEO: meo.pt → “Cobertura de fibra” → DA (Designação Administrativa) + number',
          'Vodafone: vodafone.pt → “Verificar cobertura” → CP4-CP3 + street',
          '⚠️ If all 4 say “não disponível” — you have an old building without fibre, so you will need to take 5G CPE (NOS Casa 5G, Vodafone Wi-Box) or ADSL'
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
              'DIGI 10 Gbps PRO — €15/month, Wi-Fi 7 router',
              'Free installation',
              'No TV package (add separately if needed)',
              'Online application only / call 1606',
              '€50 cashback is sometimes available as a promotion'
            ]}
          ]},
          { id: 'midrange', title: 'No fidelização — WOO (NOS)', content: [
            { kind: 'checklist', items: [
              'WOO Internet 1 Gbps — €19/month, WITHOUT lock-in',
              'WOO Internet + TV — €25/month',
              'You can cancel at any time (advantage)',
              'Coverage = NOS infrastructure (good in cities)'
            ]}
          ]},
          { id: 'premium', title: 'Premium — MEO/NOS/Vodafone (24 months)', content: [
            { kind: 'checklist', items: [
              'Fibre 1 Gbps + IPTV (≈100 channels) + 4 mobile SIMs package = €35–55/month',
              '24 months fidelização — penalty for early termination',
              'Free Wi-Fi 6 router + 2 TV boxes',
              'Installation is usually free',
              'Convenient for families (several SIMs in the package)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'install',
      title: '🛠️ Step 3. Apply and install',
      content: [
        { kind: 'paragraph', text: 'Documents for the contract: NIF, Cartão de Cidadão/residence permit or passport, Portuguese bank IBAN (for débito direto), rental contract or proof of ownership.' },
        { kind: 'checklist', items: [
          'Apply online or in the operator’s shop',
          'You will receive an agendamento — a 4-hour window (08–12, 12–16 or 16–20)',
          'The technician runs fibre from the building cabinet into the flat (often via the corridor/balcony)',
          'If an ONT (Optical Network Terminal) is already installed in the property — installation takes 30 minutes',
          'If new cabling is needed — 1–2 hours + consent from the building condominium (once a year there are disputes with the condomínio)',
          'Internet activation — 30 minutes after installation',
          '💡 On sick leave/on holiday: ask for agendamento on a specific date when ordering'
        ]}
      ]
    },
    {
      id: 'mudanca-morada',
      title: '📦 Moving home — Mudança de morada',
      content: [
        { kind: 'paragraph', text: 'If you are moving to a new address — do NOT cancel the contract, otherwise you may incur a fidelização penalty. Request mudança de morada (change of address) — the operator will transfer the service.' },
        { kind: 'checklist', items: [
          'Submit the request 7-14 days before moving',
          'If there is no coverage at the new address — the operator must terminate WITHOUT penalty (under DL 24/2014)',
          'If there is coverage — installation at the new address is free',
          'You pay as usual during the move (no discount for “no internet for 3 days”)',
          'Timelines: 1-3 weeks from request to activation at the new address',
          '⚠️ Keep the receipt for submitting the mudança request — in case of a dispute'
        ]}
      ]
    },
    {
      id: 'cancellation',
      title: '✂️ Termination — fidelização and penalties',
      content: [
        { kind: 'paragraph', text: 'Standard fidelização in PT is 24 months for packages and 6-12 months for standalone internet. Early termination:' },
        { kind: 'checklist', items: [
          'Penalty = 50% of the remaining months × monthly fee (but not more than the cost of equipment + installation)',
          'No penalty: moving address to an area without coverage, leaving PT permanently (a document from AIMA is needed)',
          'No penalty: poor service quality (you need 3 speed measurements, written complaints, and the operator’s response acknowledging the issue)',
          'After 24 months, the contract automatically becomes “without fidelização” — termination is free with 30 days’ notice',
          '🛡️ Complaint to ANACOM (anacom.pt) — if the operator charges a penalty unlawfully. Free review, effective'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '🤝 Negotiate — operators give a €5-10/month discount “unofficially” if you mention a competitor',
          '🔍 Compare on anacom.pt → “Comparação” — the official comparison tool',
          '📞 Complaints — Livro de Reclamações (livroreclamacoes.pt), then ANACOM',
          '🆔 The contract is in one person’s name (not “for the family”) — this matters for termination',
          '🏠 In OldEra buildings (before 1990): sometimes a condomínio agreement is needed to run fibre through common areas',
          '📺 IPTV packages — sports channels (BTV, Sport TV) often cost extra, check this',
          '⚡ Backup connection — mobile 4G from another operator as a backup in case of an outage'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'DIGI 1 Gbps', amountEUR: 10, note: '€/month, 3 months fidelização' },
    { label: 'DIGI 10 Gbps PRO', amountEUR: 15, note: '€/month' },
    { label: 'WOO 1 Gbps without fidelização', amountEUR: 19, note: '€/month' },
    { label: 'MEO/NOS/Vodafone package (fibre + TV + 4 SIMs)', amountEURMin: 35, amountEURMax: 55, note: '€/month, 24 months fidelização' },
    { label: 'Installation', amountEUR: 0, note: 'usually free' },
    { label: 'Early termination penalty', amountEURMin: 100, amountEURMax: 400, note: 'depends on the remaining term' }
  ],
  sources: [
    { title: 'ANACOM — telecoms regulator (tariff comparison)', url: 'https://www.anacom.pt/render.jsp?categoryId=308304', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 24/2014 — consumer rights for distance services', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/24-2014-572691', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}

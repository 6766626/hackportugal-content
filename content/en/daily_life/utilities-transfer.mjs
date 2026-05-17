export default {
  editorialVoice: 'hackportugal',
  id: 'utilities-transfer',
  categoryId: 'daily_life',
  title: 'Utilities — contracts, switching supplier, saving money',
  tldr: 'In Portugal there are 3 essential utilities: electricity, water, gas (if connected). Electricity and gas are liberalised markets: you can choose the supplier yourself, for example EDP, Galp, Iberdrola, Endesa and others. Water is always a municipal service (EPAL in Lisboa). Switching supplier is free and takes place without interruptions. Transferring contracts to a new address when moving takes 5–15 days, with no penalty, under Decreto-Lei 38/2017.',
  tags: ['electricity', 'gas', 'water', 'edp', 'galp', 'iberdrola'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'market',
      title: 'Regulated and liberalised market',
      content: [
        { kind: 'paragraph', text: 'Electricity and gas in Portugal have been liberalised since 2015 — the supplier can be any company, and prices are free. In parallel, since 2021 the regulated tariff has returned for vulnerable customers: older people and people on low incomes.' },
        { kind: 'checklist', items: [
          '💡 Electricity: 20+ suppliers (EDP Comercial, Galp, Iberdrola, Endesa, Goldenergy, Coopérnico, Luzigás and others)',
          '🔥 Gas: 10+ suppliers (often the same ones)',
          '💧 Water: municipal (EPAL, SMAS, Águas do Douro and others) — you cannot choose',
          '📜 Regulator: ERSE (Entidade Reguladora dos Serviços Energéticos)',
          '💡 Tariff comparison: poupaenergia.pt (official ERSE aggregator)'
        ]}
      ]
    },
    {
      id: 'choose-supplier',
      title: 'How to choose a supplier',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Know your consumption', content: [
            { kind: 'paragraph', text: 'Average 70 m² flat for 2 people: 150–250 kWh/month (electricity), 50 m³ of gas in winter. Larger families — 500+ kWh.' }
          ]},
          { id: 's2', title: '2. Choose the power capacity (potência)', content: [
            { kind: 'checklist', items: [
              '3.45 kVA — small flat without high-power appliances',
              '4.60 kVA — standard 2-bedroom flat',
              '6.90 kVA — 3-bedroom flat with air conditioning units and an electric hob',
              '10.35 kVA — large house / boiler',
              '13.80+ kVA — professional use'
            ]}
          ]},
          { id: 's3', title: '3. Tariff (tarifa)', content: [
            { kind: 'checklist', items: [
              'Simples — one price 24/7',
              'Bi-horária — day / night (from 22:00 to 08:00)',
              'Tri-horária — peak / shoulder / off-peak hours (for industry)'
            ]}
          ]},
          { id: 's4', title: '4. Compare on poupaenergia.pt', content: [
            { kind: 'paragraph', text: 'Official ERSE website. You need to enter your postcode, consumption and power capacity → a list of all tariffs with the monthly price will appear.' }
          ]}
        ]}
      ]
    },
    {
      id: 'new-contract',
      title: 'Setting up a contract',
      content: [
        { kind: 'checklist', items: [
          '📋 Documents: Cartão de Cidadão/residence permit, NIF, IBAN for direct debit',
          '🏠 Address and energy codes (CPE for electricity, CUI for gas) — shown on the already installed meter',
          '💻 Online through the supplier’s website or call centre',
          '📞 Payment: monthly direct debit or referência Multibanco',
          '📅 Connection: 2–10 working days',
          '📊 Meter readings — every 2 months, submitted yourself or by phone'
        ]},
        { kind: 'warning', text: 'Certificado Energético is generally required when selling/renting property (Decreto-Lei 101-D/2020), not as a condition for a new electricity/gas connection. For the contract with the supplier itself, you need the meter’s CPE/CUI codes. Check with the landlord when signing the contract.' }
      ]
    },
    {
      id: 'change',
      title: 'Switching supplier',
      content: [
        { kind: 'checklist', items: [
          '💻 Online on the new supplier’s website — takes 5 minutes',
          '📝 Needed: NIF, CPE / CUI (on the bill), IBAN',
          '📅 The switch is automatic — maximum 3 weeks',
          '💡 Electricity is not interrupted for even a minute',
          '💰 There is no switching fee',
          '🔒 The old contract is closed automatically, the new supplier handles the process',
          '📊 Final bill from the old supplier — after the last meter reading'
        ]}
      ]
    },
    {
      id: 'move',
      title: 'Moving home — transferring a contract',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Keep the old supplier but change the address', content: [
            { kind: 'paragraph', text: 'Request via the app: “Alteração de morada do contrato”. The tariff and contract number are kept. Timeframe — 5–10 days.' }
          ]},
          { id: 'm2', title: 'New supplier in the new home', content: [
            { kind: 'paragraph', text: 'If the previous occupant left a contract in place, you close it with an application and immediately set up your own. No delays.' }
          ]},
          { id: 'm3', title: 'Disconnected after a long break', content: [
            { kind: 'paragraph', text: 'Reconnection is needed: €50–€100 + a technician on site. Timeframe — up to 15 days. If the meter is old, replacement is mandatory.' }
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Problems and complaints',
      content: [
        { kind: 'checklist', items: [
          '📋 Livro de Reclamações (complaints book) — paper or on livroreclamacoes.pt',
          '⚖️ ERSE — regulator, erse.pt/reclamações',
          '⚡ DGEG (Direcção-Geral de Energia) — for serious cases',
          '💰 CTC (Centro de Arbitragem de Conflitos de Consumo) — at regional level',
          '🚫 Disconnecting electricity without notice is prohibited; compensation is due',
          '📅 Delays in reimbursement / credit >30 days — fine for the supplier'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Electricity, average 70 m² flat', amountEURMin: 40, amountEURMax: 80, note: '€/month' },
    { label: 'Gas (if connected)', amountEURMin: 30, amountEURMax: 80, note: '€/month' },
    { label: 'Water (EPAL Lisboa, 2 people)', amountEURMin: 15, amountEURMax: 30, note: '€/month' },
    { label: 'Switching supplier', amountEUR: 0 },
    { label: 'Reconnecting a disconnected service', amountEURMin: 50, amountEURMax: 100 }
  ],
  sources: [
    { title: 'ERSE — Entidade Reguladora dos Serviços Energéticos', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Poupa Energia — official ERSE aggregator', url: 'https://www.poupaenergia.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Direcção-Geral de Energia e Geologia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 38/2017 — comercialização de electricidade', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/38-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

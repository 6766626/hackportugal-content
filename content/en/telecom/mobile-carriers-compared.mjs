export default {
  editorialVoice: 'hackportugal',
  id: 'mobile-carriers-compared',
  categoryId: 'telecom',
  title: 'Mobile operators and internet — tariff comparison 2026',
  tldr: 'Portugal’s market was changed by DIGI (2024) — mobile from €5/month, 1 Gbps fibre for €10/month, 10 Gbps fibre for €15/month. NOS launched the budget brand WOO (€5/month, 100 GB, no tie-in). MEO/NOS/Vodafone are more expensive (€14.99–15 for the same allowance), but have better coverage in villages and more bundles with TV. MEO’s junior brands: Uzo and Moche (not increasing prices in 2026). For a contract you need a NIF, Cartão de Cidadão/residence permit, IBAN.',
  tags: ['mobile', 'internet', 'fibre', 'sim', 'meo', 'nos', 'vodafone', 'digi', 'woo', 'tariff'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'landscape-2026',
      title: 'The 2026 market — what has changed',
      content: [
        { kind: 'paragraph', text: 'With the arrival of DIGI (November 2024, Romanian operator RCS&RDS), Portugal’s market changed: its 1 Gbps fibre for €10/month and unlimited mobile for €6 forced competitors to respond with budget brands. NOS launched WOO, while Altice/MEO is promoting its Uzo and Moche brands with no increases in 2026.' },
        { kind: 'warning', text: 'MEO, NOS and Vodafone increased prices in 2026 (inflation indexation). Exception: contracts signed/renewed from 11 November 2025 — they fall under the “frozen tariff”. Uzo, Moche and DIGI are not increasing prices. Check the current terms before signing.' }
      ]
    },
    {
      id: 'carriers',
      title: 'Operators — strengths and prices',
      content: [
        { kind: 'substeps', items: [
          { id: 'digi', title: 'DIGI — low price, rapid growth', content: [
            { kind: 'checklist', items: [
              'Mobile €5/month — 150 GB + calls (previously 100 GB, improved in 2026)',
              'Unlimited mobile: €6/month (one line). Drops to €5 if you have fibre or ≥3 lines',
              '1 Gbps fibre — €10/month (free installation with a 3-month tie-in)',
              '10 Gbps fibre (PRO-DIGI) — €15/month, Wi-Fi 7 router included',
              'Bundle: 1 Gbps fibre + unlimited mobile = €15/month',
              'Mobile — NO tie-in at all; fibre — only 3 months',
              'Calls to 40 countries included',
              'Coverage: building its own 5G network, partly roaming. In villages and mountains — weaker than the “big three”',
              'They promise not to increase prices in 2026'
            ]}
          ]},
          { id: 'woo', title: 'WOO — NOS budget brand', content: [
            { kind: 'checklist', items: [
              'Mobile €5/month — 100 GB + calls/SMS',
              '€7/month — unlimited data + 5000 min/SMS',
              'Fibre from €15/month (internet only)',
              'Bundle: 1 Gbps fibre + 100 GB mobile = €20/month',
              'NO tie-in on all tariffs (mobile + fibre)',
              'NOS coverage (NOS subsidiary) — at the level of the parent network',
              'Launched in 2025 in response to DIGI; positioned as a budget brand'
            ]}
          ]},
          { id: 'meo', title: 'MEO (Altice Portugal) — the largest', content: [
            { kind: 'checklist', items: [
              'Best coverage in villages and on motorways',
              'Strong bundle: fibre + TV + internet + mobile',
              'Mobile contract: ~€14.99/month for 100 GB + calls (significantly more expensive than DIGI/WOO for the same allowance)',
              'Supports eSIM',
              'Junior brands: Uzo (digital format) and Moche (for young people) — are NOT increasing prices in 2026',
              'App available in English'
            ]}
          ]},
          { id: 'nos', title: 'NOS — urban, fast 5G', content: [
            { kind: 'checklist', items: [
              'Fastest 5G in Lisbon/Porto according to benchmarks',
              'Digital bundles with Netflix/HBO Max',
              'Mobile contract: ~€15/month for 100 GB + calls',
              'eSIM — quick online activation',
              'Budget brand: WOO (separate contract)'
            ]}
          ]},
          { id: 'vodafone', title: 'Vodafone Portugal', content: [
            { kind: 'checklist', items: [
              'International calls and roaming outside the EU — the best value among the “big three”',
              'Mobile contract: ~€14.99/month for 100 GB',
              'Supports eSIM',
              'Red M (~€23/month) — 25 GB + Spotify/TVOD',
              'Suitable for frequent travellers'
            ]}
          ]},
          { id: 'nowo', title: 'NOWO', content: [
            { kind: 'paragraph', text: 'Alternative operator. Strong home internet; mobile network rented from NOS. Good for bundles (TV + internet + mobile) — from €30/month for everything. After market acquisitions (Vodafone/DIGI), its importance has decreased, but tariffs remain.' }
          ]}
        ]}
      ]
    },
    {
      id: 'no-fidelity',
      title: 'Tariffs without a tie-in (no cancellation penalties)',
      content: [
        { kind: 'paragraph', text: 'Tie-in = mandatory contract period (usually 12/24 months). Early cancellation means a penalty: remaining monthly fee × remaining months. A tariff without a tie-in lets you leave at any time.' },
        { kind: 'checklist', items: [
          'DIGI mobile — NO tie-in by default (for all tariffs)',
          'DIGI fibre — only a 3-month tie-in; without it, installation costs €70 instead of €20',
          'WOO — all tariffs without a tie-in',
          'MEO/NOS/Vodafone — offer tariffs without a tie-in, but ~€5–10/month more expensive than the same bundle with a tie-in',
          'Fixed internet without a tie-in from the “big three”: installation can be up to €350',
          'Uzo (MEO) and Moche (MEO) — youth/digital tariffs, usually without a tie-in',
          'When moving to Portugal for a test period (3–6 months) — take DIGI or WOO prepaid / without a tie-in'
        ]}
      ]
    },
    {
      id: 'home-internet',
      title: 'Home internet (fibre) — 2026 price range',
      content: [
        { kind: 'substeps', items: [
          { id: 'hi1', title: 'Prices for “internet only”', content: [
            { kind: 'checklist', items: [
              'DIGI 1 Gbps — €10/month (the cheapest in Portugal)',
              'DIGI 10 Gbps (PRO-DIGI) — €15/month',
              'WOO 1 Gbps — from €15/month',
              'Vodafone/NOS/MEO 1 Gbps — €30–40/month (without TV/mobile)',
              'Vodafone/NOS/MEO without a tie-in — another +€5–10/month'
            ]}
          ]},
          { id: 'hi2', title: 'Bundle packages (internet + mobile + TV)', content: [
            { kind: 'checklist', items: [
              'DIGI 1 Gbps fibre + unlimited mobile = €15/month',
              'DIGI 1 Gbps fibre + TV + unlimited mobile = €25/month',
              'DIGI 10 Gbps fibre + TV + unlimited mobile (2 lines) = ~€32/month',
              'WOO 1 Gbps fibre + 100 GB mobile = €20/month',
              'MEO/NOS/Vodafone bundles with 3–4 services — from €40/month (usually €50–70)'
            ]}
          ]},
          { id: 'hi3', title: 'Pitfalls', content: [
            { kind: 'checklist', items: [
              'Check fibre coverage at the address BEFORE signing — it is not available everywhere (rural Portugal is often DSL/4G)',
              'Installation: DIGI/WOO — often free with a 3-month tie-in',
              'Router: DIGI — Wi-Fi 6 (1 Gbps) or Wi-Fi 7 (10 Gbps) included',
              'Bundle with mobile — switching to DIGI is better value if you need ≥2 lines',
              'For gaming/streaming — 10 Gbps PRO-DIGI has symmetrical upload'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'prepaid',
      title: 'Prepaid mobile (no contract) — for the first weeks',
      content: [
        { kind: 'paragraph', text: 'For tourists, new arrivals or temporary use. A SIM is bought in a shop, at a petrol station, or at a CTT post office.' },
        { kind: 'checklist', items: [
          '🛍️ SIM price: €10–15 (often includes initial credit)',
          '📝 Documents: passport / Cartão de Cidadão / residence permit (mandatory registration since 2022)',
          '💰 Top-up: Multibanco, online bank, operator app, kiosk',
          '📱 Bundles: “pocket” — €10 = 10 GB + 100 min, 1 month',
          '⏰ Without top-ups, the SIM is deactivated after 6 months',
          '🌐 EU roaming — free (RLAH) on all operators',
          '💡 DIGI/WOO are better value than prepaid: €5/month with automatic monthly debit, can be stopped at any time'
        ]}
      ]
    },
    {
      id: 'contract',
      title: 'Contract tariff',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'What you need to sign up', content: [
            { kind: 'checklist', items: [
              'NIF',
              'Cartão de Cidadão or residence permit',
              'IBAN for direct debit',
              'Sometimes — 6 months of bank statements (for new residents)',
              'Contract signature in person or online via CMD'
            ]}
          ]},
          { id: 'c2', title: 'Contract terms', content: [
            { kind: 'checklist', items: [
              'Usual term: 12 or 24 months (for tie-in)',
              'Early cancellation with a tie-in: remaining monthly fee × remaining months',
              'Device discount — usually only with a 24-month tie-in',
              'After the term — auto-renewal for 1 month (you can cancel at any time)',
              'DIGI/WOO/Uzo/Moche — no tie-in, none of these risks'
            ]}
          ]},
          { id: 'c3', title: 'Portabilidade (number portability)', content: [
            { kind: 'paragraph', text: 'Switch operator while keeping your number — free, 1 working day. Request it from the new operator; the old one automatically closes the contract. Important: do NOT cancel the contract yourself before the transfer, otherwise the number will be lost.' }
          ]}
        ]}
      ]
    },
    {
      id: 'esim',
      title: 'eSIM — activation in 5 minutes',
      content: [
        { kind: 'checklist', items: [
          '📱 Supported by MEO, NOS, Vodafone, DIGI',
          '💻 Sign up online on the operator’s website',
          '🆔 Login via CMD or document check',
          '📧 QR code arrives by email',
          '📱 Scan in iPhone / Android “Settings”',
          '⚡ Activation in 5 minutes',
          '💶 Same price as SIM',
          '❗ WOO and some junior brands currently support only physical SIM'
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Disputes with the operator',
      content: [
        { kind: 'checklist', items: [
          '📋 Livro de Reclamações (complaints book) — the operator must reply within 15 days',
          '🏛️ ANACOM — regulator, online complaint at anacom.pt',
          '⚖️ Arbitragem CNIACC — mandatory for operators for claims up to €5,000',
          '🚫 Termination of service without reason — breach; compensation',
          '📅 For payment delays — 15 days’ notice before disconnection',
          '🔍 Tarifarios.anacom.pt — official tariff comparison tool (regularly updated)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'DIGI mobile 150 GB', amountEUR: 5, note: '€/month, no tie-in' },
    { label: 'DIGI mobile unlimited (1 line)', amountEUR: 6, note: '€/month' },
    { label: 'DIGI 1 Gbps fibre', amountEUR: 10, note: '€/month' },
    { label: 'DIGI 10 Gbps fibre PRO-DIGI', amountEUR: 15, note: '€/month' },
    { label: 'WOO mobile 100 GB', amountEUR: 5, note: '€/month, no tie-in' },
    { label: 'WOO mobile unlimited', amountEUR: 7, note: '€/month' },
    { label: 'MEO/NOS/Vodafone mobile 100 GB', amountEURMin: 14.99, amountEURMax: 15, note: '€/month, contract' },
    { label: 'Prepaid SIM', amountEURMin: 10, amountEURMax: 15 },
    { label: 'Mobile+fibre bundle (major operator)', amountEURMin: 40, amountEURMax: 70, note: '€/month' }
  ],
  sources: [
    { title: 'ANACOM — telecoms regulator', url: 'https://www.anacom.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANACOM — Tarifário.pt (operator comparison)', url: 'https://tarifarios.anacom.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DIGI Portugal — mobile tariffs', url: 'https://www.digi.pt/tarifarios-telemovel/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DIGI Portugal — fibre', url: 'https://www.digi.pt/net/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'WOO — mobile tariffs', url: 'https://www.woo.pt/tarifarios-telemovel', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 74-B/2021 — communications services', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2021-170593125', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CNIACC — national arbitration for telecommunications', url: 'https://www.cniacc.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 120
}

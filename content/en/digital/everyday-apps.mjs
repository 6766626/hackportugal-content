export default {
  editorialVoice: 'hackportugal',
  id: 'everyday-apps',
  categoryId: 'digital_gov',
  title: 'Essential apps for life in Portugal',
  tldr: 'A basic set for an expat: MB WAY (payments), Autenticação.gov (Chave Móvel Digital), SNS 24 (healthcare), Portal AT (taxes), AIMA Renovações (residence permit), MobiCascais/Navegante (transport), CTT (post), Bolt/Uber (taxis), Glovo/Uber Eats (food delivery), Continente/Lidl Plus (supermarkets), Via Verde (roads), Folhetos.pt (discounts). By law, since 2023 many public services require Chave Móvel Digital — set it up first.',
  tags: ['apps', 'digital services', 'digital'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'gov',
      title: '🏛️ Government — essential',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Autenticação.gov', content: [
            { kind: 'paragraph', text: 'CMD (Chave Móvel Digital) — the government electronic signature. Without it, Portal AT, AIMA online services, SNS 24, IRN, and Segurança Social Direta do not work. Activation: autenticacao.gov.pt → Aderir CMD → NIF + Portuguese phone number. SMS code for each operation.' }
          ]},
          { id: 'g2', title: 'SNS 24', content: [
            { kind: 'checklist', items: [
              '**Medical record, prescriptions, test results**',
              'Online chat with a doctor or nurse 24/7',
              'Video call with a healthcare professional',
              'Electronic vaccination history',
              'Booking at an emergency department or Centro de Saúde',
              'Symptom checker'
            ]}
          ]},
          { id: 'g3', title: 'Portal das Finanças', content: [
            { kind: 'checklist', items: [
              'e-Fatura app — scans receipts for IRS deductions',
              'Main website via browser + CMD',
              'Checking NIF / address status',
              'Submitting IRS directly under the simplified scheme'
            ]}
          ]},
          { id: 'g4', title: 'ePortugal', content: [
            { kind: 'paragraph', text: 'Single portal for all government services — address changes, certificates, licences. 500+ services in one place. Uses CMD or CC for signing.' }
          ]},
          { id: 'g5', title: 'AIMA Renovações', content: [
            { kind: 'paragraph', text: 'Portal for renewing a residence permit — portal-renovacoes.aima.gov.pt. Via CMD. The main place where your immigration status lives from 2026.' }
          ]}
        ]}
      ]
    },
    {
      id: 'money',
      title: '💳 Money and payments',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'MB WAY', content: [
            { kind: 'checklist', items: [
              'The basic Portuguese app for mobile payments — works almost everywhere',
              'Send money by phone number / NIF',
              'Pay by QR code in shops and restaurants',
              'Withdraw cash from an ATM without a card',
              'Limits: €2,500 per day, €5,000 per month',
              'Linked to a Portuguese bank account — does not work with Revolut / Wise / N26'
            ]}
          ]},
          { id: 'm2', title: 'Revolut / Wise / N26', content: [
            { kind: 'checklist', items: [
              '**Revolut** (since 2024 provides a Portuguese IBAN for free) — multi-currency account, cryptocurrency, shares',
              '**Wise** (BE IBAN) — best for multi-currency transfers, 20+ currencies',
              '**N26** (DE IBAN) — minimal banking, but good user experience',
              'Useful as a second or currency account + money for travel'
            ]}
          ]},
          { id: 'm3', title: 'Your Portuguese bank’s app', content: [
            { kind: 'paragraph', text: 'ActivoBank, Millennium BCP, Caixa, Novobanco, Santander — they all have apps. SEPA transfers, card controls, statements, deposits. Portuguese banks are not the most convenient, but they are necessary.' }
          ]}
        ]}
      ]
    },
    {
      id: 'transport',
      title: '🚆 Transport',
      content: [
        { kind: 'checklist', items: [
          '**Navegante Metropolitano** (Lisbon) — electronic travel pass, QR tickets, bus/metro/train timetables',
          '**MobiCascais** (Cascais municipality) — bicycles, buses, parking',
          '**Anda** (app for road traffic in Lisbon)',
          '**Bolt** — taxis (cheaper than Uber for short trips)',
          '**Uber** — wider coverage in the regions',
          '**FREE NOW** — taxi aggregator',
          '**BlaBlaCar** — car-sharing trips between cities',
          '**Flixbus** — intercity coaches',
          '**CP — Comboios de Portugal** — trains, tickets',
          '**Via Verde** — toll roads',
          '**GoEuro / Rome2Rio** — compare ways to get there'
        ]}
      ]
    },
    {
      id: 'food-shop',
      title: '🛒 Food and shopping',
      content: [
        { kind: 'checklist', items: [
          '**Continente Siga** — digital card, coupons, in-store price scanner',
          '**Pingo Doce** — similar',
          '**Lidl Plus** — scratch cards, promotional catalogues, coupons',
          '**Folhetos.pt** — aggregator of weekly discounts from all chains',
          '**Too Good To Go** — discounted food from shops/restaurants at the end of the day (you can save 50-70%)',
          '**Glovo** — delivery of food, groceries, goods',
          '**Uber Eats** — food delivery',
          '**Bolt Food** — popular in Porto',
          '**Auchan**, **El Corte Inglés** — if nearby'
        ]}
      ]
    },
    {
      id: 'mail-docs',
      title: '📨 Post and documents',
      content: [
        { kind: 'checklist', items: [
          '**CTT** — parcel tracking, booking an appointment at a branch, online customs clearance',
          '**Id.Gov.Pt** — wallet for your digital documents (Cartão de Cidadão, Chave Móvel Digital, driving licence)',
          '**DocsQR** — scanning documents with your phone, OCR',
          '**CamScanner** — alternative with export to PDF'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Autenticação.gov — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — app and portal', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — AT app', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — single government services portal', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

export default {
  editorialVoice: 'hackportugal',
  id: 'consumer-rights-warranty',
  categoryId: 'daily_life',
  title: 'Warranty on goods — 3 years for new items, 18 months for used items',
  tldr: 'Since 2022, Decreto-Lei 84/2021 has applied in Portugal: the warranty for new goods is 3 years; for used goods, the parties may agree to shorten the period, but not to less than 18 months. If a defect is found («falta de conformidade»), the seller must repair or replace the item free of charge. If this is impossible — reduce the price or refund the money. Keep proof of purchase (fatura, recibo, card statement).',
  tags: ['warranty', 'consumer rights', 'refund', 'repair'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'legal-basis',
      title: 'Legal basis',
      content: [
        { kind: 'paragraph', text: 'Decreto-Lei 84/2021 transposed EU Directives 2019/770 (digital content) and 2019/771 (sale of goods). It applies to B2C purchases in Portugal where the seller is a professional seller. On a marketplace, the regime depends on who the actual seller is: if it is a private individual or a seller outside the EU, the protection framework may be different.' },
        { kind: 'checklist', items: [
          'New goods: 3-year warranty (previously 2)',
          'Used goods: 3 years; the parties may agree in writing to shorten it, but not to less than 18 months',
          'Digital content/services: for a one-off supply — 2 years; for a continuous supply/subscription, the seller is liable for lack of conformity throughout the entire supply period',
          'Repair / replacement: with the seller, NOT the manufacturer (this is the key point)',
          'Free of charge for the buyer — no “pay for diagnostics” in the first years'
        ]},
        { kind: 'warning', text: 'The seller often tries to send you to the manufacturer — this is unlawful. The primary obligation lies with the party that sold the goods.' }
      ]
    },
    {
      id: 'what-counts',
      title: 'What counts as a “defect” (falta de conformidade)',
      content: [
        { kind: 'checklist', items: [
          'The item does not match the description in the catalogue/on the website',
          'A function stated by the seller, or normally expected, does not work',
          'Accessories listed as included are missing',
          'Software specified in the specification is not installed',
          'Defects arising during the warranty period are presumed to be manufacturing defects during the first 2 years (the burden of proof lies with the seller)'
        ]},
        { kind: 'paragraph', text: 'After 2 years (for new goods), the burden of proof shifts to the buyer — but only as regards showing that “the defect was a manufacturing defect and did not arise due to wear and tear”. In practice, an authorised service centre provides an expert assessment.' }
      ]
    },
    {
      id: 'rights-order',
      title: 'Order for exercising the buyer’s rights',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Repair or replacement (at the buyer’s choice)', content: [
            { kind: 'paragraph', text: 'The seller must do this within a “reasonable period” — usually 30 days. Transport is at the seller’s expense. Providing a replacement item is not mandatory, but large chains (Worten, Fnac, MediaMarkt) usually provide a loan device for large appliances.' }
          ]},
          { id: 'r2', title: '2. Price reduction on the item', content: [
            { kind: 'paragraph', text: 'If repair/replacement is impossible or has taken too long — request a price reduction proportionate to the defect.' }
          ]},
          { id: 'r3', title: '3. Refund (resolução do contrato)', content: [
            { kind: 'paragraph', text: 'A full refund is possible in the case of a serious defect that makes the item unfit for use, or if the defect reappears after repair. The seller refunds the money using the same method (card → card).' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-claim',
      title: 'How to make a claim',
      content: [
        { kind: 'checklist', items: [
          '🧾 Gather proof of purchase: fatura, recibo, card statement, serial number, photos/videos of the defect',
          '📧 Written complaint to the seller (email is sufficient) describing the defect and the demand: “Reclamação de falta de conformidade nos termos do Decreto-Lei 84/2021”',
          '📋 Livro de Reclamações (complaints book): paper version in the shop or electronic version at livroreclamacoes.pt — a copy is sent to the competent sector regulator',
          '⏰ Give a reasonable period (15–30 days) for a reply',
          '⚖️ If there is a refusal or silence — contact the Centro de Arbitragem de Conflitos de Consumo in your region; DECO PROteste is a private consumer association/subscription and helps with consultations',
          '🏛️ Last resort — Julgado de Paz (up to €15,000, fast civil court)'
        ]}
      ]
    },
    {
      id: 'edge-cases',
      title: 'Special cases',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Smartphones and laptops', content: [
            { kind: 'paragraph', text: 'The battery is NOT considered a consumable in the first years — a defective battery within the warranty is subject to replacement. Apple / Samsung are more likely to recognise a device being turned into a “brick” after updates as a defect.' }
          ]},
          { id: 'e2', title: 'Household appliances', content: [
            { kind: 'paragraph', text: 'Worten, Radio Popular, Fnac — large chains prefer to replace small appliances (< €300) quickly without an expert assessment. For fridges/washing machines, they send a service technician to the home.' }
          ]},
          { id: 'e3', title: 'Cars and large equipment', content: [
            { kind: 'paragraph', text: 'From a professional seller — 3 years under DL 84/2021; for used goods it can be shortened in writing, but not to less than 18 months. When buying from a private individual, DL 84/2021 does not apply — the general rules of the Código Civil apply.' }
          ]},
          { id: 'e4', title: 'Purchases from private individuals', content: [
            { kind: 'paragraph', text: 'Decreto-Lei 84/2021 applies only to B2C. When buying from a private seller (OLX, Standvirtual), the Código Civil applies (arts. 913, 916, 917): the buyer must report the defect within a short period after discovering it; general limitation periods and proof are usually more complicated.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Warranty repair/replacement', amountEUR: 0 },
    { label: 'DECO complaint (membership)', amountEURMin: 12, amountEURMax: 15, note: '€/month' },
    { label: 'Julgado de Paz', amountEUR: 70, note: 'fixed fee for claims up to €15,000' }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 84/2021 — regime for the sale of consumer goods', url: 'https://dre.pt/dre/detalhe/decreto-lei/84-2021', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Directive 2019/771 — sale of goods', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0771', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações — official portal', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — warranty on consumer goods', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/garantia-de-bens-de-consumo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

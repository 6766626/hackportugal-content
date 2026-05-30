export default {
  editorialVoice: 'hackportugal',
  id: 'consumer-rights-warranty',
  categoryId: 'daily_life',
  title: 'Product warranty — 3 years for new items, 18 months for second-hand items',
  tldr: 'Since 2022, Decreto-Lei 84/2021 has applied in Portugal: the warranty for new goods is 3 years; for second-hand goods, the parties may agree to shorten the period, but not to less than 18 months. If a defect (“falta de conformidade”) is found, the seller must repair or replace the item free of charge. If this is impossible, they must reduce the price or refund the money. Keep proof of purchase (fatura, recibo, card statement).',
  tags: ['warranty', 'consumer rights', 'refund', 'repair'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'legal-basis',
      title: 'Legal basis',
      content: [
        { kind: 'paragraph', text: 'Decreto-Lei 84/2021 transposed EU Directives 2019/770 (digital content) and 2019/771 (sale of goods).\n\nIt applies to B2C purchases in Portugal where the seller is a professional seller. On a marketplace, the regime depends on who the actual seller is: if it is a private individual or a seller outside the EU, the protection framework may be different.' },
        { kind: 'checklist', items: [
          'New item: 3-year warranty (previously 2)',
          'Second-hand item: 3 years; the parties may agree in writing to shorten it, but not to less than 18 months',
          'Digital content/services: for a one-off supply — 2 years; for continuous supply/subscription, the seller is liable for non-conformity throughout the entire supply period',
          'Repair / replacement: with the seller, NOT the manufacturer (this is the key point)',
          'Free of charge for the buyer — no “pay for diagnostics” in the first years'
        ]},
        { kind: 'warning', text: 'The seller often tries to send you to the manufacturer — this is unlawful. The primary obligation lies with the party that sold the item.' }
      ]
    },
    {
      id: 'what-counts',
      title: 'What counts as a “defect” (falta de conformidade)',
      content: [
        { kind: 'checklist', items: [
          'The item does not match the description in the catalogue/on the website',
          'A function stated by the seller or normally expected does not work',
          'Accessories listed as included are missing',
          'Software specified in the specification is not installed',
          'Defects that arise during the warranty period are presumed to be manufacturing defects in the first 2 years (the burden of proof lies with the seller)'
        ]},
        { kind: 'paragraph', text: 'After 2 years (for new goods), the burden of proof shifts to the buyer — but only as regards showing that “the defect was a manufacturing defect and did not arise due to wear and tear”. In practice, an authorised service centre provides the technical assessment.' }
      ]
    },
    {
      id: 'rights-order',
      title: 'Order in which the buyer’s rights are exercised',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Repair or replacement (at the buyer’s choice)', content: [
            { kind: 'paragraph', text: 'The seller must do this within a “reasonable period” — usually 30 days. Transport is at the seller’s expense. Providing a temporary replacement item is not mandatory, but large chains (Worten, Fnac, MediaMarkt) usually provide a replacement device for large appliances.' }
          ]},
          { id: 'r2', title: '2. Discount on the item', content: [
            { kind: 'paragraph', text: 'If repair/replacement is impossible or has taken too long — request a discount proportionate to the defect.' }
          ]},
          { id: 'r3', title: '3. Refund (resolução do contrato)', content: [
            { kind: 'paragraph', text: 'A full refund is possible where there is a serious defect making the item unfit for use, or where the defect reappears after repair. The seller refunds the money by the same method (card → card).' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-claim',
      title: 'How to make a claim',
      content: [
        { kind: 'checklist', items: [
          '🧾 Gather proof of purchase: fatura, recibo, card statement, serial number, photos/video of the defect',
          '📧 Written complaint to the seller (email is sufficient) describing the defect and the request: “Reclamação de falta de conformidade nos termos do Decreto-Lei 84/2021”',
          '📋 Livro de Reclamações (complaints book): paper version in the shop or electronic version at livroreclamacoes.pt — a copy is sent to the competent sector regulator',
          '⏰ Give a reasonable period (15–30 days) for a response',
          '⚖️ If there is a refusal or silence — contact the Centro de Arbitragem de Conflitos de Consumo in your region; DECO PROteste is a private consumer association/subscription service that helps with advice',
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
            { kind: 'paragraph', text: 'The battery is NOT considered a consumable in the first years — a defective battery within the warranty period must be replaced. Apple / Samsung are more likely to recognise a device being “bricked” after updates as a defect.' }
          ]},
          { id: 'e2', title: 'Household appliances', content: [
            { kind: 'paragraph', text: 'Worten, Radio Popular, Fnac — large chains prefer to replace small appliances (< €300) quickly without a technical assessment. For fridges/washing machines, they send a service technician to the home.' }
          ]},
          { id: 'e3', title: 'Cars and large equipment', content: [
            { kind: 'paragraph', text: 'From a professional seller — 3 years under DL 84/2021; for second-hand items it may be shortened in writing, but not to less than 18 months. When buying from a private individual, DL 84/2021 does not apply — the general rules of the Código Civil apply.' }
          ]},
          { id: 'e4', title: 'Purchases from private individuals', content: [
            { kind: 'paragraph', text: 'Decreto-Lei 84/2021 applies only to B2C. When buying from a private individual (OLX, Standvirtual), the Código Civil applies (arts. 913, 916, 917): the buyer must report the defect within a short period after discovering it; general limitation periods and proof are usually more difficult.' }
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
    { title: 'ePortugal — warranty on consumer goods', url: 'https://www.gov.pt/cidadaos/-/informacoes/garantia-de-bens-de-consumo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

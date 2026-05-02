export default {
  editorialVoice: 'hackportugal',
  id: 'iuc-tax',
  categoryId: 'auto_ownership',
  title: 'IUC — annual car tax',
  tldr: 'Imposto Único de Circulação (IUC) is an annual tax on owning a car in Portugal. It is paid in the anniversary month of the vehicle’s first registration. The calculation depends on the class (A–E), engine size, CO2 emissions and year. For a 1.4 l petrol passenger car, it is usually €40–120; for a large diesel, €300–700. Payment is online via Portal das Finanças, by card / MB WAY / Multibanco. Late payment — a fine of 10–50%.',
  tags: ['iuc', 'tax', 'car', 'circulation'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Who pays and when',
      content: [
        { kind: 'checklist', items: [
          'The IUC taxpayer for categories A–E is the owner/holder registered with the Conservatória at the moment the tax liability arises (that is, in the anniversary month of registration). Not “on 1 January”',
          'The payment deadline is the end of the anniversary month of the first registration in Portugal (for imported used cars, usually the date of Portuguese registration/matrícula)',
          'Example: Portuguese registration of a car on 10 March 2020 — IUC is paid by 31 March each year',
          'When a car is sold, IUC falls on whoever is listed as the holder at the moment the liability arises',
          '⚠️ For imported used cars: the tax rate may be calculated taking into account the first registration in the EU/EEA, but the payment month is based on the Portuguese registration'
        ]},
        { kind: 'warning', text: 'Non-payment of IUC is a tax debt to AT (Autoridade Tributária): interest and fines accrue, and penhora is possible. IUC is not an automatic condition for passing the IPO roadworthiness test, and the debt is the taxpayer’s personal debt; the sale of the car is not formally blocked by an IUC debt alone, but in a transaction you must take into account the risk of transfer of liability and debt.' }
      ]
    },
    {
      id: 'rates',
      title: 'Rates — categories and classes',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Category A — light vehicles < 1100 cc (up to 1981)', content: [
            { kind: 'paragraph', text: 'Vintage cars. €15–25 per year.' }
          ]},
          { id: 'c2', title: 'Category B — light vehicles with a petrol engine (1982+)', content: [
            { kind: 'paragraph', text: 'Standard category. The rate depends on engine size and CO2 emissions. 1.0–1.4 l = €40–70; 1.6–2.0 l = €90–170; 2.5+ l = €300+.' }
          ]},
          { id: 'c3', title: 'Category E — motorcycles (> 250 cc)', content: [
            { kind: 'paragraph', text: '€30–100.' }
          ]},
          { id: 'c4', title: 'Category C — goods vehicles up to 12 t', content: [
            { kind: 'paragraph', text: '€50–300 depending on weight.' }
          ]},
          { id: 'c5', title: 'Electric vehicles', content: [
            { kind: 'paragraph', text: 'Exempt from IUC (only Imposto sobre os Veículos, IVA on purchase + a nominal fee).' }
          ]}
        ]},
        { kind: 'paragraph', text: 'The full formula is in Código do IUC, art. 9–15 (dre.pt). A simple calculator is available on Portal das Finanças before payment.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'How to pay',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças → “IUC” → “Consultar / Pagar”',
          '📄 A payment document is generated with entidade + referência + montante',
          '💳 Multibanco by referência',
          '📱 MB WAY',
          '🏦 Intra-bank transfer',
          '🏪 Payshop / CTT — cash',
          '📧 Payment confirmation is saved in Portal das Finanças'
        ]}
      ]
    },
    {
      id: 'late-payment',
      title: 'Late payment',
      content: [
        { kind: 'checklist', items: [
          '⏰ +30 days — fine of 10% of IUC',
          '⏰ +60 days — +20%',
          '⏰ +90 days — +30%',
          '💼 > 90 days — case goes to Finanças → penhora salarial possible',
          '🚫 DUA blocking — you will not pass IPO, and you will not sell the car',
          '✅ Instalment payment plan (parcelamento) — possible for amounts > €102'
        ]},
        { kind: 'warning', text: 'When buying a used car, always ask the seller for proof of IUC payment (comprovativo) for the last 3 years. Without it, you may inherit the debt.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Exemptions and discounts',
      content: [
        { kind: 'checklist', items: [
          '♿ People with disability ≥ 60% — full exemption',
          '🚜 Agricultural machinery for a farming business — exemption',
          '🇵🇹 Diplomats — exemption',
          '⚡ Electric vehicles in categories B/E — exemption',
          '🚗 First year for veterans and large families — discount',
          '🏝️ Madeira and Açores — reduced local rates'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Light 1.0–1.4 l petrol', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Light 1.6–2.0 l', amountEURMin: 90, amountEURMax: 170 },
    { label: 'Light > 2.0 l', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Motorcycle', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'Código do IUC (consolidated)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34442375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — IUC', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pay IUC', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pagar-o-imposto-unico-de-circulacao-iuc-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}

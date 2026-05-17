export default {
  editorialVoice: 'hackportugal',
  id: 'iuc-tax',
  categoryId: 'auto_ownership',
  title: 'IUC — annual car tax',
  tldr: 'Imposto Único de Circulação (IUC) is an annual tax on owning a car in Portugal. It is paid in the anniversary month of the vehicle’s first registration. The calculation depends on the class (A–E), engine size, CO2 emissions and year. For a 1.4 l petrol passenger car it is usually €40–120; a large diesel is €300–700. Payment is online via Portal das Finanças, by card / MB WAY / Multibanco. Late payment — penalty of 10–50%.',
  tags: ['iuc', 'tax', 'car', 'circulation'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Who pays and when',
      content: [
        { kind: 'checklist', items: [
          'The IUC taxpayer for categories A–E is the owner/holder registered with the Conservatória at the moment the tax liability arises (that is, in the registration anniversary month). Not “on 1 January”',
          'The payment deadline is by the end of the anniversary month of the first registration in Portugal (for imported used vehicles — usually the date of Portuguese registration/matrícula)',
          'Example: Portuguese registration of the car on 10 March 2020 — IUC is paid by 31 March each year',
          'When a car is sold, IUC falls to whoever is listed as the holder at the moment the liability arises',
          '⚠️ For imported used cars: the tax rate may be calculated taking into account the first registration in the EU/EEA, but the payment month is based on the Portuguese registration'
        ]},
        { kind: 'warning', text: 'Non-payment of IUC is a tax debt to AT (Autoridade Tributária): interest and penalties accrue, and penhora is possible. IUC is not an automatic condition for passing the IPO roadworthiness inspection, and the debt is the taxpayer’s personal debt; selling the car is not formally blocked by an IUC debt alone, but in a transaction you should take into account the risk of liability and debt transfer.' }
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
          { id: 'c2', title: 'Category B — light petrol-engine vehicles (1982+)', content: [
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
        { kind: 'paragraph', text: 'The full formula is in Código do IUC, arts. 9–15 (dre.pt). A simple calculator is available on Portal das Finanças before payment.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'How to pay',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças “IUC” → “Consultar / Pagar”',
          '📄 A payment document is generated with entidade + referência + montante',
          '💳 Multibanco by referência',
          '📱 MB WAY',
          '🏦 Bank transfer within your bank',
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
          '⏰ +30 days — penalty of 10% of IUC',
          '⏰ +60 days — +20%',
          '⏰ +90 days — +30%',
          '💼 > 90 days — case goes to Finanças → penhora salarial possible',
          '🚫 AT tax enforcement: coima, interest, cobrança coerciva and penhora. IUC checking is not a usual IPO condition',
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
          '🚜 Agricultural machinery on a farm — exemption',
          '🇵🇹 Diplomats — exemption',
          '⚡ Category B/E electric vehicles — exemption',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'iuc-tax',
  categoryId: 'auto_ownership',
  title: 'IUC — annual car tax',
  tldr: 'Imposto Único de Circulação (IUC) is the annual tax on owning a vehicle in Portugal. It is paid in the month of the anniversary of the vehicle’s first registration. The calculation depends on the category (A–G), engine capacity, CO2 emissions and year of first registration. Category A — light passenger vehicles registered 1981–30.06.2007 (basis: engine capacity + year); category B — passenger/mixed-use vehicles registered from 01.07.2007 (basis: capacity + CO2 + registration year). For a 1.4 l petrol passenger car — usually €40–120, a large diesel — €300–700. Payment is made online via Portal das Finanças. **Late payment is not a fixed percentage, but a coima under the RGIT + compensatory/default interest; coima rates depend on the type of offence and the voluntary regularisation period.**',
  tags: ['iuc', 'tax', 'car', 'circulation'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Who pays and when',
      content: [
        { kind: 'checklist', items: [
          'The IUC taxpayer for categories A–E is the owner/holder registered at the Conservatória at the moment the tax liability arises (that is, in the month of the registration anniversary). Not “on 1 January”',
          'The payment deadline is until the end of the month of the anniversary of the first registration in Portugal (for imported used vehicles — usually the date of Portuguese registration/matrícula)',
          'Example: Portuguese registration of the car on 10 March 2020 — IUC is paid by 31 March each year',
          'When a vehicle is sold, IUC falls on whoever is listed as the holder at the moment the liability arises',
          '⚠️ For imported used cars: the tax rate may be calculated taking into account the first registration in the EU/EEA, but the payment month is based on the Portuguese registration'
        ]},
        { kind: 'warning', text: 'Non-payment of IUC is a tax debt to AT (Autoridade Tributária): interest and fines accrue, and penhora is possible. IUC is not an automatic condition for passing the IPO roadworthiness inspection, and the debt is a personal debt of the taxpayer; the sale of the vehicle is not formally blocked by the IUC debt alone, but in a transaction you should take into account the risk of transfer of responsibility and outstanding debt.' }
      ]
    },
    {
      id: 'rates',
      title: 'Rates — categories and classes',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Category A — light passenger/mixed-use vehicles, registration 1981–30.06.2007', content: [
            { kind: 'paragraph', text: 'Tax basis: engine capacity (cc) + fuel type + year of registration. No CO2 component. Typical amounts: €15–80.' }
          ]},
          { id: 'c2', title: 'Category B — light passenger/mixed-use vehicles, registration from 01.07.2007', content: [
            { kind: 'paragraph', text: 'Basis: engine capacity + CO2 emissions + year of registration (environmental coefficient). 1.0–1.4 l = €40–70; 1.6–2.0 l = €90–170; 2.5+ l = €300+. Diesel has an increasing coefficient.' }
          ]},
          { id: 'c3', title: 'Categories C and D — light goods vehicles and heavy goods vehicles', content: [
            { kind: 'paragraph', text: 'C — goods vehicles ≤ 12 t; D — > 12 t. Basis: weight + axle + fuel type. C = €30–300, D — higher.' }
          ]},
          { id: 'c4', title: 'Category E — motorcycles > 50 cc', content: [
            { kind: 'paragraph', text: '€5–60 depending on cc.' }
          ]},
          { id: 'c5', title: 'Categories F and G — boats and aircraft for private use', content: [
            { kind: 'paragraph', text: 'Applied according to their own tables in the Código do IUC.' }
          ]},
          { id: 'c6', title: 'Electric vehicles (100% BEV)', content: [
            { kind: 'paragraph', text: 'Exempt from IUC for category B (passenger/mixed-use vehicles); plug-in hybrids and hybrids — reduced rates or discounts depending on the year of registration.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'The full formula is in the Código do IUC (dre.pt). The exact amount is always visible in Portal das Finanças → IUC → Consultar before payment.' }
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
          '🏦 Bank transfer within your bank',
          '🏪 Payshop / CTT — in cash',
          '📧 Payment confirmation is saved in Portal das Finanças'
        ]}
      ]
    },
    {
      id: 'late-payment',
      title: 'Late payment',
      content: [
        { kind: 'checklist', items: [
          '⏰ Late payment → juros de mora (late-payment interest) is automatically charged from the day after the deadline',
          '⚖️ Additionally — a coima under the RGIT (Regime Geral das Infracções Tributárias). The amount of the coima depends on the IUC amount and the voluntary regularisation period (reduced → higher)',
          '💼 If you do not pay and do not submit a defesa — AT transfers the debt to cobrança coerciva: penhora of bank accounts, salary or pension is possible',
          '🚫 IUC checks are not a formal condition of the IPO',
          '✅ Pedido de pagamento em prestações (payment by instalments) — possible for debt > €102 (usually up to 36 instalments); submitted in Portal das Finanças',
          '⏱️ Voluntary regularisation before receiving a coima notice gives a reduced fine rate'
        ]},
        { kind: 'warning', text: 'IUC is the personal tax of the person who was listed as owner at the moment the liability arose. The buyer does formally NOT “inherit” the previous owner’s debt, but when buying a used vehicle it is still worth requesting comprovativos of IUC payment for the last 3 years, to avoid disputes and make sure AT does not send a notice to your address.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Exemptions and discounts',
      content: [
        { kind: 'checklist', items: [
          '♿ People with disability ≥ 60 % — full exemption',
          '🚜 Agricultural machinery on a farming business — exemption',
          '🇵🇹 Diplomats — exemption',
          '⚡ Electric vehicles in categories B/E — exemption',
          '🚗 First year for veterans and large families — discount',
          '🏝️ Madeira and Açores — reduced local rates'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Light vehicle 1.0–1.4 l petrol', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Light vehicle 1.6–2.0 l', amountEURMin: 90, amountEURMax: 170 },
    { label: 'Light vehicle > 2.0 l', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Motorcycle', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'Código do IUC (consolidated)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34442375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — IUC', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pay the IUC', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pagar-o-imposto-unico-de-circulacao-iuc-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}

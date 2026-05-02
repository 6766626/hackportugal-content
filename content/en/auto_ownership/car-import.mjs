export default {
  editorialVoice: 'hackportugal',
  id: 'car-import',
  categoryId: 'auto_ownership',
  title: 'Importing a car into Portugal',
  tldr: 'Residents can use the “transferência de residência” relief — import without ISV if the conditions are met: you owned the car for ≥ 6 months before moving, lived in the previous country for ≥ 12 months, and submitted the documents within 12 months after becoming a resident. Otherwise — full ISV (customs clearance/import tax) + IUC annually.',
  tags: ['car', 'customs clearance', 'ISV', 'matrícula'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'Two routes',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Relief (transferência de residência) — no ISV', content: [
            { kind: 'checklist', items: [
              'You become a resident of Portugal (obtained a residence permit / CRUE)',
              'You owned the car for ≥ 6 months before moving',
              'You lived in the country of origin for ≥ 12 months',
              'Submit the documents within 12 months from the date you became a resident',
              'The car must not be sold for 12 months after import',
              'Applies to only ONE car per person'
            ]}
          ]},
          { id: 'o2', title: 'B. Standard import — with ISV', content: [
            { kind: 'paragraph', text: 'If the relief conditions are not met — full ISV (Imposto sobre Veículos). It is calculated based on engine capacity + CO2 + age. For a new car it can be €5,000-30,000. For an electric car — free.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documents',
      content: [
        { kind: 'checklist', items: [
          'Original vehicle title / registration certificate (usually apostille + translation)',
          'Passport + residence permit',
          'NIF',
          'Proof of address in Portugal',
          'Valid “Green Card”',
          'Purchase invoice (if the car is new or was bought recently)',
          'Proof of residence abroad for ≥ 12 months (CRUE/residence permit in the previous country, bills, rental agreement)',
          'Certificate of Conformity (CoC) from the manufacturer — for cars from the EU'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Bring the car into Portugal', content: [
            { kind: 'paragraph', text: 'Enter with the car on its current number plates. Notify Autoridade Tributária (tax authority) within 20 days via e-AT.' }
          ]},
          { id: 's2', title: '2. Roadworthiness inspection (IPO)', content: [
            { kind: 'paragraph', text: 'At one of the IPO centres. ~€40. Obtain certificate B (for an unregistered car).' }
          ]},
          { id: 's3', title: '3. Registration with IMT', content: [
            { kind: 'paragraph', text: 'Submit documents for assignment of a Portuguese number plate (matrícula). Via the IMT portal or Loja de Cidadão.' }
          ]},
          { id: 's4', title: '4. ISV — payment or exemption', content: [
            { kind: 'paragraph', text: 'If using the relief — declare the import and obtain the exemption. If not — calculate it on the Finanças portal and pay.' }
          ]},
          { id: 's5', title: '5. Receive the Documento Único Automóvel (registration certificate)', content: [
            { kind: 'paragraph', text: 'Single document = registration certificate + registration. Arrives by post on day 10-30.' }
          ]},
          { id: 's6', title: '6. Replace the number plates', content: [
            { kind: 'paragraph', text: 'Order Portuguese number plates (~€50). Fit them. The car is now fully in the Portuguese system.' }
          ]},
          { id: 's7', title: '7. Take out Portuguese insurance', content: [
            { kind: 'paragraph', text: 'Switch to Portuguese insurance (Tranquilidade, Liberty, Fidelidade, etc.). The old “Green Card” is no longer relevant.' }
          ]}
        ]}
      ]
    },
    {
      id: 'annual',
      title: 'Annual obligations',
      content: [
        { kind: 'checklist', items: [
          'IUC (Imposto Único de Circulação) — annual tax, based on engine + CO2. €30-500/year',
          'Insurance — €250-700/year',
          'IPO (roadworthiness inspection) — every 2 years for cars up to 8 years old, annually for older cars',
          'Via Verde (payment for toll roads) — optional'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO (roadworthiness inspection)', amountEUR: 40 },
    { label: 'IMT registration + DUA', amountEURMin: 55, amountEURMax: 80 },
    { label: 'Number plates', amountEURMin: 30, amountEURMax: 80 },
    { label: 'ISV (if no relief)', amountEURMin: 500, amountEURMax: 20000, note: 'based on capacity/CO2/age' },
    { label: 'IUC annually', amountEURMin: 30, amountEURMax: 500 }
  ],
  timelineDaysMin: 10,
  timelineDaysMax: 60,
  sources: [
    { title: 'Portal das Finanças (tax portal) — ISV and transferência de residência', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Vehicle registration', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Import a vehicle', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/importar-um-veiculo-para-portugal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}

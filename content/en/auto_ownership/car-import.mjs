export default {
  editorialVoice: 'hackportugal',
  id: 'car-import',
  categoryId: 'auto_ownership',
  title: 'Importing a car into Portugal',
  tldr: 'Residents may qualify for the **transferência de residência** relief — import without ISV under the following conditions: you owned the car for ≥ 6 months before moving, lived in the previous country for ≥ 12 months, and submitted the documents within 12 months after becoming a resident. Otherwise — ISV + annual IUC. If the car is imported from a country **outside the EU**, customs clearance, duty and IVA may apply separately if there is no exemption under transferência de residência. For **100% BEV** vehicles, ISV is usually €0; hybrids/PHEV — special rates.',
  tags: ['car', 'customs clearance', 'ISV', 'matrícula'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'Two routes',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Relief (transferência de residência) — without ISV', content: [
            { kind: 'checklist', items: [
              'You become a resident of Portugal (received a residence permit / CRUE)',
              'Owned the car for ≥ 6 months before moving',
              'Lived in the country of origin for ≥ 12 months',
              'Submit the documents within 12 months from the date of becoming a resident',
              'The car is not sold within 12 months after import',
              'Applies only to ONE car per person'
            ]}
          ]},
          { id: 'o2', title: 'B. Standard import — with ISV', content: [
            { kind: 'paragraph', text: 'If the relief conditions are not met — ISV (Imposto sobre Veículos). It is calculated based on engine capacity + CO2 + age. For a new car it may be €5,000-30,000. For **100% electric** cars, ISV is usually €0, but registration costs remain. Special rates and conditions apply to hybrids/plug-in hybrids. When importing from outside the EU, duty and IVA are checked separately.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documents',
      content: [
        { kind: 'checklist', items: [
          'Original vehicle registration document / technical passport (usually apostille + translation)',
          'Passport + residence permit',
          'NIF',
          'Proof of address in Portugal',
          'Valid “Green Card”',
          'Purchase invoice (if the car is new or recently bought)',
          'Proof of residence abroad for ≥ 12 months (CRUE/residence permit in the previous country, bills, tenancy agreement)',
          'Certificate of Conformity (CoC) from the manufacturer — for cars from the EU'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Entry into Portugal', content: [
            { kind: 'paragraph', text: 'Enter with the car on its current plates. Notify Autoridade Tributária (tax authority) within 20 days via e-AT.' }
          ]},
          { id: 's2', title: '2. Vehicle inspection (IPO)', content: [
            { kind: 'paragraph', text: 'At one of the IPO centres. ~€40. Obtain certificate B (for an unregistered car).' }
          ]},
          { id: 's3', title: '3. Registration: DAV at AT and matrícula', content: [
            { kind: 'paragraph', text: 'Correct process: 1) technical approval/inspection/CoC if necessary through IMT; 2) submission of **DAV (Declaração Aduaneira de Veículo)** to AT and payment of ISV or obtaining exemption; 3) after matrícula is assigned, order plates; 4) register the car with IRN/Conservatória/Automóvel Online.' }
          ]},
          { id: 's4', title: '4. ISV — payment or exemption', content: [
            { kind: 'paragraph', text: 'In the DAV, declare the regime: pay ISV or request **isenção de ISV por transferência de residência** with documents. For cars from outside the EU, complete the customs procedure separately and check exemption from duty/IVA.' }
          ]},
          { id: 's5', title: '5. Receive the Documento Único Automóvel (vehicle registration document)', content: [
            { kind: 'paragraph', text: 'Single document = technical passport + registration. It arrives by post on day 10-30.' }
          ]},
          { id: 's6', title: '6. Replace the plates', content: [
            { kind: 'paragraph', text: 'Order Portuguese plates (~€50). Fit them. The car is now fully in the Portuguese system.' }
          ]},
          { id: 's7', title: '7. Take out Portuguese insurance', content: [
            { kind: 'paragraph', text: 'Switch to Portuguese insurance (Tranquilidade, Liberty, Fidelidade, etc.). The old “Green Card” ceases to be relevant.' }
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
          'IPO (vehicle inspection) — every 2 years for cars up to 8 years old, annually for older ones',
          'Via Verde (toll road payments) — optional'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO (vehicle inspection)', amountEUR: 40 },
    { label: 'IMT registration + DUA', amountEURMin: 55, amountEURMax: 80 },
    { label: 'Plates', amountEURMin: 30, amountEURMax: 80 },
    { label: 'ISV (if without relief)', amountEURMin: 500, amountEURMax: 20000, note: 'by capacity/CO2/age' },
    { label: 'IUC annually', amountEURMin: 30, amountEURMax: 500 }
  ],
  timelineDaysMin: 10,
  timelineDaysMax: 60,
  sources: [
    { title: 'Portal das Finanças (tax portal) — ISV and transferência de residência', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IMT — Vehicle registration', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Importing a vehicle', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/importar-um-veiculo-para-portugal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

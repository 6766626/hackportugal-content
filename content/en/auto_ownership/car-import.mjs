export default {
  editorialVoice: 'hackportugal',
  id: 'car-import',
  categoryId: 'auto_ownership',
  title: 'Importing a car into Portugal',
  tldr: 'For residents there is a relief **isenção de ISV por transferência de residência** (CISV art. 58) — import without ISV. Key conditions: normal place of residence outside Portugal for **≥ 6 months** consecutively before moving, ownership of the car for **≥ 6 months** before transferring residence, the car was bought under general conditions (not tax-free), submission of the DAV **within 12 months** from the date of becoming resident, not selling it for 12 months after import, one car per person. If the car is imported **from a non-EU country**, a separate customs relief from duties/IVA under Regulation (EU) 1186/2009 also applies — this has a requirement of **12 months** of residence outside the EU customs territory (do not confuse it with the 6-month ISV condition). Without the relief — ISV + annual IUC. For **100% BEV** cars, ISV is usually €0; hybrids/PHEVs — special reduced rates.',
  tags: ['car', 'customs clearance', 'isv', 'matrícula'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'Two routes',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. ISV relief — isenção por transferência de residência', content: [
            { kind: 'checklist', items: [
              'You transfer your normal place of residence to Portugal (obtained a residence permit/CRUE, arranged fiscal residence)',
              'Normal place of residence outside Portugal — **≥ 6 months** consecutively before the transfer (CISV art. 58). NOT 12 months — 12 months relates to a SEPARATE customs relief from duties/IVA when importing from outside the EU',
              'Car ownership — **≥ 6 months** before transferring residence',
              'The car was bought under general conditions (not tax-free / not under a diplomatic regime)',
              'DAV submission — **within 12 months** from the date of transfer of residence',
              'Do not sell the car **within 12 months** after import (otherwise ISV is reinstated)',
              'Only ONE car per person',
              'When importing from outside the EU: additionally, ≥ 12 months of residence outside the EU customs territory + car ownership is required for relief from duties/IVA under Reg. (UE) 1186/2009'
            ]}
          ]},
          { id: 'o2', title: 'B. Standard import — with ISV', content: [
            { kind: 'paragraph', text: 'If the relief conditions are not met — ISV (Imposto sobre Veículos).\n\nIt is calculated based on engine size + CO2 + age. For a new car it may be €5,000-30,000. For **100% electric** cars, ISV is usually €0, but registration costs remain. Special rates and conditions apply to hybrids/plug-in hybrids. When importing from outside the EU, customs duty and IVA are checked separately.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documents',
      content: [
        { kind: 'checklist', items: [
          'Original vehicle title / registration document (usually apostille + translation)',
          'Passport + residence permit',
          'NIF',
          'Proof of address in Portugal',
          'Valid “Green Card”',
          'Purchase invoice (if the car is new or recently bought)',
          'Proof of normal residence abroad: for ISV relief — ≥ 6 months; for customs relief when importing from outside the EU — ≥ 12 months. Documents: CRUE/residence permit in the former country, tax residence, utility bills, rental contract',
          'Certificate of conformity (CoC) from the manufacturer — for cars from the EU'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Entry into Portugal', content: [
            { kind: 'paragraph', text: 'Enter with the car on its current number plates. Notify Autoridade Tributária (tax authority) within 20 days via e-AT.' }
          ]},
          { id: 's2', title: '2. Roadworthiness inspection (IPO)', content: [
            { kind: 'paragraph', text: 'At one of the IPO centres. ~€40. Obtain certificate B (for an unregistered car).' }
          ]},
          { id: 's3', title: '3. Registration: DAV with AT and matrícula', content: [
            { kind: 'paragraph', text: 'Correct process: 1) technical approval/inspection/CoC through IMT if needed; 2) submission of the **DAV (Declaração Aduaneira de Veículo)** to AT and payment of ISV or obtaining an exemption; 3) after the matrícula is assigned, order number plates; 4) register the car with IRN/Conservatória/Automóvel Online.' }
          ]},
          { id: 's4', title: '4. ISV — payment or exemption', content: [
            { kind: 'paragraph', text: 'In the DAV, state the regime: pay ISV or request **isenção de ISV por transferência de residência** with documents. For cars from outside the EU, arrange the customs procedure separately and check the relief from duty/IVA.' }
          ]},
          { id: 's5', title: '5. Receive the Documento Único Automóvel (registration document)', content: [
            { kind: 'paragraph', text: 'Single document = vehicle registration document + registration. Arrives by post on day 10-30.' }
          ]},
          { id: 's6', title: '6. Replace the number plates', content: [
            { kind: 'paragraph', text: 'Order Portuguese number plates (~€50). Fit them. The car is now fully in Portugal’s system.' }
          ]},
          { id: 's7', title: '7. Arrange Portuguese insurance', content: [
            { kind: 'paragraph', text: 'Switch to Portuguese insurance (Tranquilidade, Liberty, Fidelidade, etc.). The old “Green Card” becomes no longer relevant.' }
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
    { label: 'ISV (if without relief)', amountEURMin: 500, amountEURMax: 20000, note: 'by engine size/CO2/age' },
    { label: 'Annual IUC', amountEURMin: 30, amountEURMax: 500 }
  ],
  timelineDaysMin: 10,
  timelineDaysMax: 60,
  sources: [
    { title: 'Portal das Finanças (tax portal) — ISV and transferência de residência', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IMT — Vehicle registration', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Importing a vehicle', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/importar-um-veiculo-para-portugal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}

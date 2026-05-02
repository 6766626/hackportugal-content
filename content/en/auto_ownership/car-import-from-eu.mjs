export default {
  editorialVoice: 'hackportugal',
  id: 'car-import-from-eu',
  categoryId: 'auto_ownership',
  title: 'Importing a car from the EU — detailed procedure',
  tldr: 'Importing a car from the EU (Germany, France, Spain, Poland, the Netherlands, Italy) is popular because of price differences of around 20-30%. Procedure: 1) DAV (declaração aduaneira de veículos) within 20 days; 2) ISV (depends on engine size, CO₂, age — partial discounts for used cars up to 65%); 3) IUC annually; 4) Registration (Portuguese number plate) at IMT; 5) IPO (roadworthiness test); 6) COC or certificado conformidade. For new electric cars — ISV 0%. When relocating (transferência residência) — full ISV exemption subject to 6+ months of ownership.',
  tags: ['import', 'car', 'eu', 'isv'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'why',
      title: '💡 Why people import from the EU',
      content: [
        { kind: 'checklist', items: [
          '💰 **Price**: the German used-car market is 20-30% cheaper than the Portuguese one',
          '🔧 **Choice**: Portugal has a limited choice of specific models/configurations',
          '🏎️ **Segment**: premium cars (BMW, Audi, Mercedes) are poorly represented in Portugal; they are often bought from Germany/the Netherlands',
          '📋 **Transparency**: German TÜV = detailed history',
          '⚡ **Electric cars**: wide choice in the Netherlands/Germany',
          '🔙 **Not worthwhile**: mass-market models (Renault Clio, VW Polo) — the difference is small, and transport costs money'
        ]}
      ]
    },
    {
      id: 'overall-cost',
      title: '💰 Total import cost',
      content: [
        { kind: 'paragraph', text: 'Approximate budget for a used BMW 318d 2020 bought in Germany for €18,000:' },
        { kind: 'checklist', items: [
          'Car price in Germany: **€18,000**',
          'Transport (car transporter Germany → Portugal): **€1,200-€1,800** or driving it yourself (fuel + motels ~€400)',
          'ISV (registration tax): **€1,500-€3,500** (depends on engine size and CO₂; for a 5-year-old car the discount is 40%)',
          'IMT registration + number plate: **€135**',
          'IPO (roadworthiness test): **€40**',
          'Insurance for the first year: **€400-€800**',
          'Total: **~€21,500-€24,700**',
          '**The same car in Portugal**: €23,000-€26,000',
          '**Saving**: €1,500-€4,500'
        ]},
        { kind: 'warning', text: 'The saving is not always huge — calculate a specific example. For cars cheaper than €10,000, the saving is often eaten up by transport. For the premium segment from €20,000 — it is usually worthwhile.' }
      ]
    },
    {
      id: 'step-by-step',
      title: '📋 Step-by-step procedure',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Step 1: Purchase in the EU', content: [
            { kind: 'checklist', items: [
              'Find a car via mobile.de, autoscout24.com, autotrader.nl',
              'Inspect the car in person (or via a specialist inspector for €100-€200)',
              'Sales contract, signed by both parties',
              'The seller provides: **COC (Certificate of Conformity)** — mandatory, otherwise there will be problems when registering in Portugal',
              'Contract + invoice + COC + vehicle title (Fahrzeugbrief / Teil II in Germany) — all originals',
              '⚠️ Export plates (Ausfuhrkennzeichen in Germany) — temporary plates for 5-30 days for driving the car out'
            ]}
          ]},
          { id: 'p2', title: 'Step 2: Driving / transporting to Portugal', content: [
            { kind: 'checklist', items: [
              'By yourself: fuel + toll roads + motels, 1-3 days from Germany',
              'Car transporter: €1,200-€1,800, 5-10 days (companies: Berneria, Autos Deluxe, Finsterwalder)',
              'Entry into Portugal is free, no customs (EU)',
              'Insurance for the journey: temporary 30-day policy with green card — €50-€150'
            ]}
          ]},
          { id: 'p3', title: 'Step 3: DAV at AT (within 20 days)', content: [
            { kind: 'checklist', items: [
              '**Declaração Aduaneira de Veículo** — must be submitted to Autoridade Tributária within 20 working days after import',
              'Submission: via Portal das Finanças (NIF + CMD) → IVA/ISV → DAV',
              'Attach: COC, contract, German vehicle registration document, VIN, photos',
              'AT calculates ISV based on the vehicle characteristics',
              'ISV payment: around 30 days to pay'
            ]}
          ]},
          { id: 'p4', title: 'Step 4: ISV — calculation and payment', content: [
            { kind: 'checklist', items: [
              'ISV = **Componente Cilindrada** (tax on engine size) + **Componente Ambiental** (tax on CO₂)',
              'Engine-size scale: €10-€30 for each 250 cm³ for small combustion engines → €3-€4+ per cm³ for larger ones',
              'CO₂ scale: €5-€350 for each g/km above the threshold values',
              '**Discount for used cars**: 5-20% in the 1st year, up to 65% after 5 years',
              '**0% ISV**: electric cars (BEV)',
              '**Reduced tariff**: PHEV with range >50 km',
              '💡 Simulator: portaldasfinancas.gov.pt → Simuladores → ISV'
            ]}
          ]},
          { id: 'p5', title: 'Step 5: Registration (Portuguese number plate)', content: [
            { kind: 'checklist', items: [
              'After ISV payment — AT issues certificado desalfandegamento',
              'With this, go to IMT (Instituto da Mobilidade e dos Transportes)',
              'Appointment at portal.imt-ip.pt → Matrícula — fee **€135**',
              'You receive: Documento Único Automóvel (DUA) + Portuguese plates',
              'Timeframe: 2-4 weeks'
            ]}
          ]},
          { id: 'p6', title: 'Step 6: IPO (roadworthiness test)', content: [
            { kind: 'checklist', items: [
              'Mandatory after import — at any certified centre',
              'Cost: **~€40**',
              'They check: exhaust, brakes, lights, safety',
              'German TÜV is not accepted — IPO must be carried out again',
              'Usually passes without problems if the German TÜV is valid'
            ]}
          ]},
          { id: 'p7', title: 'Step 7: Insurance and IUC', content: [
            { kind: 'checklist', items: [
              'Permanent insurance — mandatory before the first drive. €400-€1,200/year',
              'IUC (annual tax) — calculated automatically, payment in April',
              'EDP / Galp cards for fuel stations with discounts',
              'Via Verde — for toll roads'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'relocation-exemption',
      title: '✨ ISV exemption when relocating (important)',
      content: [
        { kind: 'paragraph', text: 'If you are moving to Portugal (transferência de residência) — you can import a car with **FULL ISV exemption**.' },
        { kind: 'checklist', items: [
          '📅 **Conditions**: you lived in the country of departure for ≥ 6 months before moving',
          '🚗 **Conditions**: the car has been yours for ≥ 6 months before moving (prove with: registration card + insurance + servicing invoices)',
          '📅 **Submission deadline**: 12 months after becoming a resident of Portugal',
          '🚫 **Cannot sell** within 12 months after import (otherwise ISV will be charged retroactively)',
          '📄 **Documents**: certificado de transferência de residência from MNE (Portuguese consulate in the country of departure) + car documents + proof of address in Portugal',
          '💡 **Huge saving**: ISV is usually €2,000-€5,000 for an average car — free if you have the exemption',
          '⚠️ If you changed the purpose of your trip / bought the car recently — the exemption does not apply'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: '🆘 Common difficulties',
      content: [
        { kind: 'checklist', items: [
          '**No COC**: without it, ISV is calculated at the maximum tariff + registration is blocked; order from the manufacturer in Germany for €200-€500, wait 4-8 weeks',
          '**VIN not recognised**: technical inspection at IMT is required — €200-€400',
          '**Over 25 years old / classic**: separate registration category («veículo histórico»), ISV is cheaper, but there are emissions restrictions',
          '**Modifications** (tuning, large wheels): not everything is accepted in Portugal; it may fail IPO',
          '**Car from outside the EU** (UK after Brexit, US): full customs + IVA 23% on top. More complicated than from the EU',
          '**Delay**: the whole procedure usually takes 4-8 weeks from entry to Portuguese plates. Plan car hire in advance for this period'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Transport by car transporter Germany → Portugal', amountEURMin: 1200, amountEURMax: 1800 },
    { label: 'ISV (used, 5 years old)', amountEURMin: 1500, amountEURMax: 3500, note: 'average car' },
    { label: 'ISV for electric car', amountEUR: 0 },
    { label: 'IMT registration', amountEUR: 135 },
    { label: 'IPO roadworthiness test', amountEUR: 40 },
    { label: 'COC (certificate)', amountEURMin: 200, amountEURMax: 500, note: 'if not provided by the seller' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 60,
  sources: [
    { title: 'AT — ISV and DAV', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Registration', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do ISV (DL 22-A/2007)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2007-34525875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'car-import-from-eu',
  categoryId: 'auto_ownership',
  title: 'Importing a car from the EU — detailed procedure',
  tldr: 'Importing a car from the EU (Germany, France, Spain, Poland, the Netherlands, Italy) is popular because of a price difference of around 20-30%. Procedure: 1) DAV (declaração aduaneira de veículos) within 20 days; 2) ISV (depends on engine capacity, CO₂, age — partial discounts up to 65% for used cars); 3) IUC annually; 4) Matriculation (Portuguese number plate) at IMT; 5) IPO (roadworthiness inspection); 6) COC or certificado conformidade. For new electric cars — 0% ISV. When relocating (transferência residência) — full ISV exemption subject to 6+ months of ownership.',
  tags: ['import', 'car', 'eu', 'isv'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'why',
      title: '💡 Why people import from the EU',
      content: [
        { kind: 'checklist', items: [
          '💰 Price: the German used-car market is 20-30% cheaper than the Portuguese one',
          '🔧 Choice: Portugal has a limited selection of specific models/configurations',
          '🏎️ Segment: premium cars (BMW, Audi, Mercedes) are poorly represented in Portugal; they are often bought from Germany/the Netherlands',
          '📋 Transparency: German TÜV = detailed history',
          '⚡ Electric cars: wide choice in the Netherlands/Germany',
          '🔙 Not worthwhile: mass-market models (Renault Clio, VW Polo) — the difference is small, and transport costs money'
        ]}
      ]
    },
    {
      id: 'overall-cost',
      title: '💰 Total import cost',
      content: [
        { kind: 'paragraph', text: 'Approximate budget for a used BMW 318d 2020, bought in Germany for €18,000:' },
        { kind: 'checklist', items: [
          'Car price in Germany: €18,000',
          'Transport (car transporter Germany → Portugal): €1,200-1,800 or driving it yourself (fuel + motels ~€400)',
          'ISV (registration tax): €1,500-3,500 (depends on engine capacity and CO₂; for a 5-year-old car the discount is about 43%)',
          'Registration with IMT (matriculation): €45 with COC or €165 without COC',
          'Inspection for plate assignment (cat. B): €93.52',
          'Insurance for the first year: €400-800',
          'Total: ~€21,500-24,700',
          'Same car in Portugal: €23,000-26,000',
          'Saving: €1,500-4,500'
        ]},
        { kind: 'warning', text: 'The saving is not always huge — calculate a specific example. For cars cheaper than €10,000, the saving is often swallowed up by transport. For the premium segment from €20,000 — it is usually worthwhile.' }
      ]
    },
    {
      id: 'step-by-step',
      title: '📋 Step-by-step procedure',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Step 1: Purchase in the EU', content: [
            { kind: 'checklist', items: [
              'Find via mobile.de, autoscout24.com, autotrader.nl',
              'Inspect the car in person (or through a specialist inspector for €100-200)',
              'Purchase agreement, signed by both parties',
              'The seller provides: COC (Certificate of Conformity) — mandatory, otherwise there will be problems with matriculation in Portugal',
              'Contract + invoice + COC + vehicle title (Fahrzeugbrief / Teil II in Germany) — all originals',
              '⚠️ Export plates (Ausfuhrkennzeichen in Germany) — temporary plates for 5-30 days to drive the car over'
            ]}
          ]},
          { id: 'p2', title: 'Step 2: Driving / transporting to Portugal', content: [
            { kind: 'checklist', items: [
              'Yourself: fuel + toll roads + motels, 1-3 days from Germany',
              'Car transporter: €1,200-1,800, 5-10 days (companies: Berneria, Autos Deluxe, Finsterwalder)',
              'Into Portugal — free entry, no customs (EU)',
              'Insurance for the drive: temporary 30-day insurance with green card — €50-150'
            ]}
          ]},
          { id: 'p3', title: 'Step 3: DAV with AT (within 20 days)', content: [
            { kind: 'checklist', items: [
              'Declaração Aduaneira de Veículo — must be submitted to Autoridade Tributária within 20 working days after import',
              'Submission: via Portal das Finanças (NIF + CMD) → IVA/ISV → DAV',
              'Attach: COC, contract, German vehicle registration document, VIN, photos',
              'AT calculates ISV based on the vehicle characteristics',
              'ISV payment: within 10 working days of submitting the DAV (using the DUC reference)'
            ]}
          ]},
          { id: 'p4', title: 'Step 4: ISV — calculation and payment', content: [
            { kind: 'checklist', items: [
              'ISV = Componente Cilindrada (engine capacity tax) + Componente Ambiental (CO₂ tax)',
              'Engine-capacity scale: €10-30 for each 250 cm³ for small combustion engines → €3-4+ per cm³ for large ones',
              'CO₂ scale: €5-350 for each g/km above the threshold values',
              'Discount for used cars (by age): ~10% at 1 year, ~43% at 5 years, max 65% for cars over 8 years old',
              '0% ISV: electric cars (BEV)',
              'Reduced rate: PHEV with range >50 km',
              '💡 Simulator: portaldasfinancas.gov.pt → Simuladores → ISV'
            ]}
          ]},
          { id: 'p5', title: 'Step 5: Matriculation (Portuguese number plate)', content: [
            { kind: 'checklist', items: [
              'After paying ISV — AT issues certificado desalfandegamento',
              'With it, you go to IMT (Instituto da Mobilidade e dos Transportes)',
              'Appointment at portal.imt-ip.pt → Matrícula — fee €45 with COC, €165 without COC',
              'You receive: Documento Único Automóvel (DUA) + Portuguese plates',
              'Timeframe: 2-4 weeks'
            ]}
          ]},
          { id: 'p6', title: 'Step 6: Inspection (for matriculation)', content: [
            { kind: 'checklist', items: [
              'Mandatory after import — at any certified centre',
              'Plate assignment requires a cat. B inspection (issues the Certificado Modelo 112): ~€93.52 (2026)',
              'The recurring periodic inspection (IPO) afterwards — ~€37 for light vehicles (2026)',
              'They check: exhaust, brakes, lights, safety',
              'German TÜV is not accepted — the inspection must be done again',
              'It usually passes without problems if the German TÜV is valid'
            ]}
          ]},
          { id: 'p7', title: 'Step 7: Insurance and IUC', content: [
            { kind: 'checklist', items: [
              'Permanent insurance — mandatory before the first journey. €400-1,200/year',
              'IUC (annual tax) — calculated automatically, paid in April',
              'EDP / Galp cards for discounted filling stations',
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
        { kind: 'paragraph', text: 'If you are moving to Portugal (transferência de residência) — you can import a car with FULL ISV exemption.' },
        { kind: 'checklist', items: [
          '📅 Conditions: lived in the country of departure for ≥ 6 months before relocating',
          '🚗 Conditions: the car has been yours for ≥ 6 months before relocating (prove it: registration card + insurance + servicing invoices)',
          '📅 Submission deadline: 12 months after becoming resident in Portugal',
          '🚫 You cannot sell within 12 months after import (otherwise ISV will be charged retroactively)',
          '📄 Documents: certificado de transferência de residência from MNE (Portuguese consulate in the country of departure) + car documents + proof of address in Portugal',
          '💡 Huge saving: ISV is usually €2-5 thousand for an average car — free if there is an exemption',
          '⚠️ If you changed the purpose of your trip / bought the car recently — the exemption does not apply'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: '🆘 Common difficulties',
      content: [
        { kind: 'checklist', items: [
          'No COC: without it, ISV is calculated at the maximum rate + matriculation is blocked; order from the manufacturer in Germany for €200-500, wait 4-8 weeks',
          'VIN not recognised: technical inspection at IMT required — €200-400',
          'Over 25 years old / classic: separate matriculation category (“veículo histórico”), ISV is cheaper, but there are emissions restrictions',
          'Modifications (tuning, large wheels): not everything is accepted in Portugal; it may fail IPO',
          'Car from outside the EU (UK after Brexit, US): full customs + 23% IVA on top. More complicated than from the EU',
          'Delay: the whole procedure usually takes 4-8 weeks from entry to Portuguese plates. Plan car rental in advance for this period'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Transport by car transporter Germany → Portugal', amountEURMin: 1200, amountEURMax: 1800 },
    { label: 'ISV (used, 5 years)', amountEURMin: 1500, amountEURMax: 3500, note: 'average car' },
    { label: 'ISV for an electric car', amountEUR: 0 },
    { label: 'IMT matriculation', amountEURMin: 45, amountEURMax: 165, note: '€45 with COC, €165 without COC' },
    { label: 'Inspection for matriculation (cat. B)', amountEUR: 94, note: 'Modelo 112, 2026' },
    { label: 'COC (certificate)', amountEURMin: 200, amountEURMax: 500, note: 'if not provided by the seller' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 60,
  sources: [
    { title: 'AT — ISV and DAV', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Matriculation', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do ISV (DL 22-A/2007)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2007-34525875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

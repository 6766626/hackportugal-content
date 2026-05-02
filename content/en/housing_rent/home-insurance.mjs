export default {
  editorialVoice: 'hackportugal',
  id: 'home-insurance',
  categoryId: 'housing_rent',
  title: 'Home insurance — seguro multirriscos',
  tldr: 'By law (art. 1429 Código Civil), flats in a condomínio (horizontal ownership) must have insurance against **fire risk** — both for individual flats and for common areas. Multirriscos habitação is broader (fire + water + theft + civil liability), but where it is required by a bank for a mortgage, this is a contractual obligation — not a law, but a loan condition. Insurance is not mandatory for tenants, but is recommended (seguro de recheio, €50-150/year). Best insurers 2026: Fidelidade, Generali Tranquilidade (Generali brand), Allianz, Zurich, Liberty. Annual cost of €150-500 for a 70-100 m² flat depends on cover and excess.',
  tags: ['insurance', 'seguro', 'housing', 'multirriscos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: '📋 Types of home insurance',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Seguro Multirriscos Habitação (main one)', content: [
            { kind: 'checklist', items: [
              '**Mandatory** as a contractual condition — the bank requires it for a mortgage (loan = insurance contract)',
              'Covers: fire, explosion, flooding, natural events (thunderstorm, hurricane), theft, vandalism',
              '⚠️ **Family civil liability** — NOT always included in multirriscos. It may be a separate add-on; check this',
              'Electronics, furniture (recheio) — a separate section; some policies insure only the property/building without recheio — check',
              'Temporary accommodation costs — usually a limited additional cover, not universal',
              'Annual cost: €150-500 for a 70-100 m² flat'
            ]}
          ]},
          { id: 't2', title: 'Seguro de Recheio (for tenants only)', content: [
            { kind: 'checklist', items: [
              'Your belongings (furniture, appliances, valuables)',
              'No cover for the building itself (this is the owner’s responsibility)',
              'Civil liability — if you cause damage (for example, flood the neighbours)',
              '€50-150/year — much cheaper',
              'Recommended if your appliances and electronics are worth more than €3,000 in total'
            ]}
          ]},
          { id: 't3', title: 'Seguro contra incêndio (mandatory by law)', content: [
            { kind: 'checklist', items: [
              '**Mandatory** insurance against fire risk under art. 1429 Código Civil — for each individual flat AND for the building’s common areas',
              'The condomínio administrator checks that policies exist and may arrange them at the owners’ expense if there are no policies',
              'Minimum — fire; in practice, people usually take out multirriscos (includes fire + water + civil liability)',
              'Paid by the owner of each flat; common areas — through the condomínio contribution',
              'Does NOT cover the contents inside the flat (recheio) — for that you need a separate multirriscos with recheio'
            ]}
          ]},
          { id: 't4', title: 'Specialised add-ons', content: [
            { kind: 'checklist', items: [
              '**Assistência domiciliária 24/7** — plumber, electrician, locksmith in case of problems (+€10-30/year)',
              '**Domestic appliance repairs** — repairs for large appliances after the warranty ends (+€20-40/year)',
              '**Cyber-theft protection** — protection against cyber-theft and identity theft (+€5-15/year)',
              '**Pet insurance** — veterinary cover for pets (sometimes can be added to home insurance)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'choose',
      title: '🎯 How to choose an insurer',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Top companies', content: [
            { kind: 'checklist', items: [
              '**Fidelidade** — the largest, Portuguese, reliable',
              '**Generali Tranquilidade** (Generali group) — good terms, many agents',
              '**Allianz** — international, slightly more expensive, but reliable',
              '**Zurich** — premium, better for expensive property',
              '**Liberty Seguros** — specific packages with bonuses',
              '**Cofidis, Mediator** — insurance marketplace, operate as intermediaries',
              '**CTT Seguros** — in CTT branches, attractive prices'
            ]}
          ]},
          { id: 'c2', title: 'Online comparison', content: [
            { kind: 'checklist', items: [
              '**ComparaJá.pt** — quote aggregator',
              '**Doctor Finanças** — financial comparison site',
              '**Raconoscer / Seguros.pt** — specialised sites',
              'Compare: price, franquia (excess), cover limits, exclusions',
              '💡 **Bargaining power**: show another quote — they may reduce the price by up to 20%'
            ]}
          ]},
          { id: 'c3', title: 'What to check', content: [
            { kind: 'checklist', items: [
              '**Capital seguro do edifício** — must be ≥ the rebuild cost (not the market price!)',
              '**Capital seguro do recheio** — value your belongings honestly (do not copy from the insurer’s examples)',
              '**Franquia** (excess): usually €100-300; the higher it is, the cheaper the policy',
              '**Exclusions**: read the small print — usually not covered:',
              '  - Earthquakes (must be added separately)',
              '  - War / nuclear risks / terrorism are generally excluded',
              '  - Commercial use (if you let as AL)',
              '  - Jewellery > €5,000 (separate valuation, declaração)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'claim',
      title: '📞 How to make a claim',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Immediately (48 h)', content: [
            { kind: 'checklist', items: [
              'Call the insurer’s 24/7 line (all of them have one)',
              'Or use the app (most have one)',
              '📸 **Photograph ALL damage** — the most important step',
              'Do not repair before assessment (except emergency actions: turn off water, electricity)',
              'Keep all receipts: emergency repairs, temporary accommodation',
              'Witnesses: neighbours, police (for theft)'
            ]}
          ]},
          { id: 's2', title: 'Documents', content: [
            { kind: 'checklist', items: [
              'Insurance contract (apólice)',
              'Photos / videos of the damage',
              'Police report (for theft, vandalism)',
              'Receipts for repairs / purchases of damaged items',
              'Declaração do vizinho / sindico, if they are witnesses'
            ]}
          ]},
          { id: 's3', title: 'Loss adjuster', content: [
            { kind: 'paragraph', text: 'The insurer sends a perito (loss adjuster) within 3-7 days. I recommend being at home, showing everything, and discussing the details. You can invite an independent perito (€100-300) if the insurer undervalues the damage.' }
          ]},
          { id: 's4', title: 'Payment', content: [
            { kind: 'checklist', items: [
              '**Small amounts**: 2-4 weeks',
              '**Large amounts > €5,000**: 1-3 months',
              '**Disputes**: the insurer’s Provedor do Cliente → Provedor dos Segurados (ASF) → court',
              'Free help: DECO Proteste (consumer rights protection) for disputes'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📝 **Photo inventory**: photograph all major items (appliances, jewellery, artworks) with serial numbers. For making a claim — the gold standard',
          '💾 **Digital backup**: save the inventory in the cloud (not on the device)',
          '🔒 **Panic button / alarm**: 10-15% discount from the insurer',
          '🎂 **Renewal date**: review the policy every year — your belongings have changed (you bought new appliances, moved home)',
          '💍 **Expensive jewellery / watches / collection**: separate declaração, an independent valuation is needed',
          '🌊 **Natural disasters**: earthquake cover in PT is cheap (low-activity zone), but if your region is risky (Algarve, Azores) — add it',
          '🏠 **Alojamento Local (AL)**: if you let the property — you need separate commercial insurance (many standard policies exclude this)',
          '💰 **Annual or monthly payment**: annual is 3-5% cheaper',
          '📅 **Cancellation**: in writing 30 days before renewal',
          '🔄 **Changing insurer**: compare every year; savings of 10-20% are typical'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Multirriscos for a 70-100 m² flat', amountEURMin: 150, amountEURMax: 500, note: '€/year' },
    { label: 'Seguro de recheio (tenant)', amountEURMin: 50, amountEURMax: 150, note: '€/year' },
    { label: 'Assistência domiciliária (add-on)', amountEURMin: 10, amountEURMax: 30, note: '€/year' },
    { label: 'Independent perito (loss adjuster)', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/consumidor', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1429 (mandatory fire insurance in PH)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DL 72/2008 — Legal Regime of the Insurance Contract', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/72-2008-456608', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ComparaJá — insurance comparison', url: 'https://www.comparaja.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}

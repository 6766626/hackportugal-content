export default {
  editorialVoice: 'hackportugal',
  id: 'rental-contract',
  categoryId: 'housing_rent',
  title: 'Long-term renting in Portugal — legal framework and process',
  tldr: 'Long-term renting (arrendamento habitacional) is regulated by the NRAU (Lei 6/2006, as amended). If a **term is stated** in the contract, the minimum is 1 year for housing (with exceptions for temporary purposes). If **NO term is stated**, under the Código Civil the contract is deemed to have been concluded for **5 years**. Under art. 1076 Código Civil (after Mais Habitação 2023), the legal limit is: caução of up to **2 monthly rents** + advance rent of up to **2 months**. Requests for 3-12 months in advance are common on the market for foreigners without a fiador, but are legally vulnerable — discuss the structure with a lawyer (seguro de fiança, separate guarantee). The contract is registered with Finanças by the owner (who also issues recibos de renda) by the end of the month following the start of the contract.',
  tags: ['renting', 'nrau', 'contract', 'caução', 'fiador'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'legal-framework',
      title: 'Legal framework',
      content: [
        { kind: 'paragraph', text: 'Main documents: Código Civil (articles on renting), Lei 6/2006 (NRAU — Novo Regime do Arrendamento Urbano), numerous laws and decree-laws with amendments. Important for 2024: Lei 56/2023 “Mais Habitação” was PARTIALLY REPEALED by Decreto-Lei 81/2024 (November 2024, “Construir Portugal”): the moratorium on new AL licences was lifted, CAE (compulsory rental of vacant flats) was abolished, the mandatory expiry of AL in 2030 was removed, and IRS on rental income was reformed.' },
        { kind: 'paragraph', text: 'Key principles: tenant protection (eviction only through the courts), major repairs are the owner’s responsibility, rent indexation is allowed no more than once a year and not above the official INE coefficient (in 2026: **2.16%**, INE publication — October 2025).' },
        { kind: 'paragraph', text: 'Caução and advance rent (art. 1076 Código Civil after Lei 56/2023 “Mais Habitação”): maximum 2 monthly rents as caução + maximum 2 monthly rents as advance rent. Requests for more must be set up under a separate legal structure (seguro de fiança, another guarantee), otherwise the clause may be challenged as unlawful.' }
      ]
    },
    {
      id: 'terms',
      title: 'Key terms',
      content: [
        { kind: 'checklist', items: [
          'Arrendatário / inquilino — tenant',
          'Senhorio — landlord (owner)',
          'Contrato de arrendamento habitacional — residential tenancy agreement',
          'Renda — monthly rent',
          'Caução — security deposit, under art. 1076 Código Civil (after Mais Habitação) maximum 2 monthly rents; returned when you move out. Advance rent of up to 2 months may also be agreed',
          'Fiador — guarantor: an individual resident in Portugal with stable income, who is liable with their assets for the tenant’s obligations',
          'Seguro de fiança — an insurance company replaces the fiador, approximately 5-7% of annual rent',
          'IMI — municipal property tax, paid by the owner by law',
          'Condomínio — contribution to maintenance of the building’s common areas (usually not included in the rent)',
          'Recibo de renda — monthly receipt from the owner with the parties’ NIF, the basis for the tax return'
        ]}
      ]
    },
    {
      id: 'pricing',
      title: 'Market benchmarks (2026)',
      content: [
        { kind: 'paragraph', text: 'Prices increased substantially in 2022-2025. According to INE and Banco de Portugal statistics:' },
        { kind: 'checklist', items: [
          'Lisboa centre: T1 (1 bedroom) €1,400-€2,500/month',
          'Lisboa suburbs (Oeiras, Almada): T1 €900-€1,500',
          'Porto centre: T1 €900-€1,400',
          'Porto suburbs: T1 €650-€1,000',
          'Coimbra: T1 €550-€850',
          'Braga: T1 €500-€800',
          'Algarve seasonal: T1 €700-€1,500 (winter), up to x2 in summer',
          'Alentejo small towns: T1 €350-€600'
        ]},
        { kind: 'paragraph', text: 'Notation: T0 = studio, T1 = 1 bedroom + living room, T2 = 2 bedrooms + living room, etc.' }
      ]
    },
    {
      id: 'search-channels',
      title: 'Search channels',
      content: [
        { kind: 'paragraph', text: 'There are several categories of housing search channels in Portugal:' },
        { kind: 'checklist', items: [
          'Online aggregator portals (the largest: Idealista, Imovirtual, Casa Sapo, Supercasa) — the main channel, with hundreds of thousands of listings',
          'OLX Imóveis — many listings directly from owners (fewer commissions)',
          'Estate agencies (imobiliárias) — the largest networks: RE/MAX, Century 21, ERA, Engel & Völkers. Commission is 1 month’s rent, often paid by the owner',
          'Local Facebook groups (by city and neighbourhood)',
          'Medium-term rentals (6-12 months) for foreigners: platforms without a fiador, but 20-40% more expensive',
          'Junta de Freguesia (local parish council) — sometimes has social housing programmes'
        ]},
        { kind: 'warning', text: 'Typical scam: a listing with photos of a good flat, the “owner” is abroad and asks for an advance payment to “reserve” it without a viewing. NEVER pay for a flat that you have not seen in person or through a trusted representative.' }
      ]
    },
    {
      id: 'process',
      title: 'Rental process — step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preparation in advance', content: [
            { kind: 'checklist', items: [
              'Obtain a NIF',
              'Open a bank account in Portugal (preferably)',
              'Prepare proof of income: employment contract, 3 months’ payslips, bank statement or IRS return',
              'Find a fiador (if available) — their Cartão de Cidadão (CC) + income',
              'If there is no fiador: budget for 3-12 months’ advance payment or seguro de fiança'
            ]}
          ]},
          { id: 'p2', title: '2. Search and viewing', content: [
            { kind: 'paragraph', text: 'Make a shortlist of options. At the first viewing, check: damp on walls and windows (white marks in corners = mould), heating (critical in winter — Portugal is among the worst in the EU for housing insulation), hot water (gas water heater esquentador or electric water heater termoacumulador), noise from the street and neighbours, water pressure.' }
          ]},
          { id: 'p3', title: '3. Offer and negotiations', content: [
            { kind: 'paragraph', text: 'Points to discuss: term (12/24/36 months), amount of caução, who pays IMI and condomínio (owners’ association), furniture (mobilado (furnished) / mobilado parcialmente (partly furnished) / sem mobília (unfurnished)), restrictions on pets, rent indexation, the owner’s prior commitment to fix noted defects before move-in.' }
          ]},
          { id: 'p4', title: '4. Signing the contract', content: [
            { kind: 'paragraph', text: 'At least 2 copies. Mandatory elements under Lei 6/2006: names and NIF of the parties, full address of the property, property tax registration number (artigo matricial) and freguesia (local parish council), term, rent amount and indexation method, amount of caução, start date.' }
          ]},
          { id: 'p5', title: '5. Handover of keys', content: [
            { kind: 'paragraph', text: 'Prepare an inventory of condition (inventário) — a list of existing furniture, condition of walls, floor and sanitary fittings. Photograph everything. This will protect you when the caução is returned.' }
          ]},
          { id: 'p6', title: '6. Registration with Finanças', content: [
            { kind: 'paragraph', text: 'Within 30 days, the owner must register the contract on Portal das Finanças (tax portal). They receive a comprovativo (confirmation) and give you a copy. Without registration: you cannot use the contract for an atestado de residência, for AIMA, or for the rent deduction in IRS.' },
            { kind: 'warning', text: 'If the owner refuses to register it, this is a serious red flag (possibly tax evasion). Insist or choose another flat.' }
          ]}
        ]}
      ]
    },
    {
      id: 'without-fiador',
      title: 'If you have no guarantor',
      content: [
        { kind: 'paragraph', text: 'Newly arrived foreigners usually cannot access a fiador. Options:' },
        { kind: 'checklist', items: [
          '⚠️ Advance payment of 3-12 months — a common market practice for foreigners without a fiador, but as “advance rent” it is legally vulnerable: art. 1076 CC limits it to 2 months. It needs to be structured as seguro de fiança, depósito de garantia or another guarantee — discuss this with a lawyer',
          '⚠️ “Increased caução” of 3-6 months — also conflicts with art. 1076 CC (maximum 2 months). If the landlord insists, ask to structure the excess through seguro de fiança',
          'Seguro de fiança — the insurance company guarantees the obligations, costing 5-7% of annual rent (a legal way to work around the limits of art. 1076)',
          'Medium-term rental (6-12 months) through intermediary services — usually without a fiador, but 20-40% more expensive',
          'Social housing stock (for certain categories) — through the municipality',
          'Renting a room in shared housing — often a simplified process'
        ]}
      ]
    },
    {
      id: 'rights-and-duties',
      title: 'Rights and duties',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Tenant rights', content: [
            { kind: 'checklist', items: [
              'Peaceful possession of the flat for the term of the contract',
              'Protection against arbitrary rent increases — only once a year and not above the INE coefficient',
              'Protection against eviction — only by court order, except in cases of non-payment for 2+ months or serious breaches',
              'Major repairs at the owner’s expense (roof, electrical wiring, structural defects)',
              'Return of caução within 30 days after the end of the contract (less documented damage)',
              'IRS deduction for rent — 15% up to €700-€800/year (threshold increased by OE 2024/25; check the exact value on portaldasfinancas.gov.pt)'
            ]}
          ]},
          { id: 'r2', title: 'Tenant duties', content: [
            { kind: 'checklist', items: [
              'Pay rent on time (usually by the 8th day of the month)',
              'Pay utilities (electricidade, gás, água — bills come directly to you as the tenant)',
              'Routine repairs (cosmetic, replacing light bulbs, minor repairs)',
              'Maintain the flat — keep it clean and avoid damage',
              'Notify the owner 120 days in advance if you wish to terminate the contract (the period varies by type)',
              'Comply with the regulamento do condomínio (building rules)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Disputes',
      content: [
        { kind: 'checklist', items: [
          'Non-return of caução — written complaint to the owner, then to the Balcão Nacional do Arrendamento (BNA) or Julgados de Paz',
          'Problems with technical condition — written demand by post with acknowledgement of receipt, photos, deadlines for fixing the issue',
          'Noise and neighbours — complaint to the Junta de Freguesia, police (112 for loud night-time noise)',
          'Unwanted rent increase — challenge it at the BNA; a coefficient above INE is unlawful',
          'Eviction before the end of the term — free legal aid through the Ordem dos Advogados (if low income) or a commercial lawyer',
          'DECO Proteste — consumer rights organisation, provides advice on rental contracts'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Passport / Cartão de Cidadão (CC)', note: 'both parties' },
    { title: 'NIF', note: 'both parties — mandatory in the contract' },
    { title: 'Proof of income', note: 'payslips / statements / contract' },
    { title: 'Fiador (if any)', note: 'their Cartão de Cidadão (CC), NIF, proof of income' },
    { title: 'IBAN', note: 'for automatic rent debit' }
  ],
  costs: [
    { label: 'Caução (deposit)', amountEURMin: 500, amountEURMax: 3000, note: 'max 2 months’ rent under art. 1076 CC' },
    { label: 'Advance rent (max)', amountEURMin: 500, amountEURMax: 3000, note: 'max 2 months under art. 1076 CC; more — structure through seguro de fiança' },
    { label: 'Seguro de fiança', amountEURMin: 300, amountEURMax: 1500, note: '5-7% of annual rent' },
    { label: 'Agent’s commission', amountEURMin: 0, amountEURMax: 2000, note: 'often paid by the owner' }
  ],
  sources: [
    { title: 'Lei 6/2006 — NRAU (Novo Regime do Arrendamento Urbano)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34498475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1076 (caução e antecipação de rendas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Mais Habitação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 81/2024 — Construir Portugal (part of Mais Habitação repealed)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/81-2024-892876283', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — Registration of a tenancy agreement', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Renting a home', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/arrendar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

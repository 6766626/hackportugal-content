export default {
  editorialVoice: 'hackportugal',
  id: 'rental-contract',
  categoryId: 'housing_rent',
  title: 'Long-term renting in Portugal — legal framework and process',
  tldr: 'Long-term rental (arrendamento habitacional) is governed by the NRAU (Lei 6/2006 as amended). If the **term is specified** in the contract — minimum 1 year for housing (with exceptions for temporary purposes). If the **term is NOT specified** — under the Código Civil the contract is deemed to be for **5 years**. Under art. 1076 Código Civil (after Mais Habitação 2023) the lawful cap is: caução up to **2 monthly rents** + advance payment up to **2 months**. Demands for 3–12 months’ prepayment are widespread on the market for foreigners without a fiador, but are legally vulnerable — discuss the structure with a lawyer (seguro de fiança, separate guarantee). The contract is registered in Finanças by the owner (who also issues recibos de renda) by the end of the month following the start of the contract.',
  tags: ['rent', 'nrau', 'contract', 'caução', 'fiador'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'legal-framework',
      title: 'Legal framework',
      content: [
        { kind: 'paragraph', text: 'Main instruments: Código Civil (articles on tenancy), Lei 6/2006 (NRAU — Novo Regime do Arrendamento Urbano), and numerous laws and decree-laws with amendments. Important for 2024–2026: Lei 56/2023 “Mais Habitação” was PARTIALLY REPEALED under the “Construir Portugal” programme: Decreto-Lei 43/2024 (July 2024) revoked the coercive leasing of vacant dwellings (art. 108-C CAE), and Decreto-Lei 76/2024 (23 October 2024) lifted the moratorium on new AL licences in apartamentos and removed the automatic 5-year expiry of AL.' },
        { kind: 'paragraph', text: 'Key principles: tenant protection (eviction only via court), major repairs — the owner’s obligation, rent indexation — no more than once a year and not above the official INE coefficient (in 2026: **2.24%**, coefficient 1.0224, published in Aviso n.º 23174/2025/2 of 19.09.2025).' },
        { kind: 'paragraph', text: 'Caução and advance payment (art. 1076 Código Civil after Lei 56/2023 “Mais Habitação”): a maximum of 2 monthly rents as caução + a maximum of 2 monthly rents as advance payment. Demands above that must be set up through a separate legal structure (seguro de fiança, other guarantee), otherwise the clause may be challenged as unlawful.' }
      ]
    },
    {
      id: 'terms',
      title: 'Key terms',
      content: [
        { kind: 'checklist', items: [
          'Arrendatário / inquilino — tenant (renter)',
          'Senhorio — landlord (owner)',
          'Contrato de arrendamento habitacional — residential tenancy agreement',
          'Renda — monthly rent',
          'Caução — security deposit; under art. 1076 Código Civil (after Mais Habitação) a maximum of 2 monthly rents; returned on move-out. Additionally, prepayment of rent up to 2 months may be agreed',
          'Fiador — guarantor: a natural person — resident of Portugal with stable income, who is liable with their assets for the tenant’s obligations',
          'Seguro de fiança — an insurance company replaces the fiador, about 5–7% of the annual rent',
          'IMI — municipal property tax, by law paid by the owner',
          'Condomínio — contribution for maintaining the building’s common areas (usually not included in the rent)',
          'Recibo de renda — monthly receipt from the owner with the parties’ NIFs, the basis for the tax return'
        ]}
      ]
    },
    {
      id: 'pricing',
      title: 'Market benchmarks (2026)',
      content: [
        { kind: 'paragraph', text: 'Prices rose significantly in 2022–2025. According to INE and Banco de Portugal statistics:' },
        { kind: 'checklist', items: [
          'Lisboa centre: T1 (1 bedroom) €1,400–2,500/month',
          'Lisboa suburbs (Oeiras, Almada): T1 €900–1,500/month',
          'Porto centre: T1 €900–1,400/month',
          'Porto suburbs: T1 €650–1,000/month',
          'Coimbra: T1 €550–850/month',
          'Braga: T1 €500–800/month',
          'Algarve (seasonal): T1 €700–1,500/month (winter), up to x2 in summer',
          'Alentejo small towns: T1 €350–600/month'
        ]},
        { kind: 'paragraph', text: 'Legend: T0 = studio, T1 = 1 bedroom + living room, T2 = 2 bedrooms + living room, etc.' }
      ]
    },
    {
      id: 'search-channels',
      title: 'Search channels',
      content: [
        { kind: 'paragraph', text: 'In Portugal there are several categories of housing search channels:' },
        { kind: 'checklist', items: [
          'Online portal aggregators (largest: Idealista, Imovirtual, Casa Sapo, Supercasa) — the main channel, hundreds of thousands of listings',
          'OLX Imóveis — many listings directly from owners (fewer commissions)',
          'Real estate agencies (imobiliárias) — largest networks: RE/MAX, Century 21, ERA, Engel & Völkers. Commission of 1 month’s rent, often paid by the owner',
          'Local Facebook groups (by cities and neighbourhoods)',
          'Medium-term rental (6–12 months) for foreigners: platforms without a fiador, but 20–40% more expensive',
          'Junta de Freguesia (parish council) — sometimes has social housing programmes'
        ]},
        { kind: 'warning', text: 'Typical scam: a listing with photos of a good flat, the “owner” is abroad, asks for a prepayment to “reserve” without a viewing. NEVER pay for a flat you have not seen in person or via a trusted representative.' }
      ]
    },
    {
      id: 'process',
      title: 'Rental process — step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preliminary preparation', content: [
            { kind: 'checklist', items: [
              'Obtain NIF',
              'Open a bank account in Portugal (preferable)',
              'Prepare proof of income: employment contract, payslips for 3 months, bank statement or IRS return',
              'Find a fiador (if available) — their Cartão de Cidadão (CC) + income',
              'If no fiador: budget for 3–12 months’ prepayment or a seguro de fiança'
            ]}
          ]},
          { id: 'p2', title: '2. Search and viewing', content: [
            { kind: 'paragraph', text: 'Prepare a shortlist. At the first viewing check: damp on walls and windows (white traces in corners = mould), heating (critical in winter — Portugal is among the worst in the EU for housing insulation), hot water (gas water heater esquentador or storage heater termoacumulador), street and neighbour noise, water pressure.' }
          ]},
          { id: 'p3', title: '3. Offer and negotiation', content: [
            { kind: 'paragraph', text: 'Negotiable items: term (12/24/36 months), size of the caução, who pays IMI and condomínio (owners’ association), furniture (mobilado (furnished) / mobilado parcialmente (partially furnished) / sem mobília (unfurnished)), pet restrictions, rent indexation, the owner’s prior commitment to fix noted defects before move‑in.' }
          ]},
          { id: 'p4', title: '4. Signing the contract', content: [
            { kind: 'paragraph', text: 'At least in 2 copies. Mandatory elements under Lei 6/2006: names and NIFs of the parties, full address of the property, artigo matricial (matriculation number) and freguesia, term, rent amount and indexation method, amount of caução, start date.' }
          ]},
          { id: 'p5', title: '5. Handover of keys', content: [
            { kind: 'paragraph', text: 'Prepare an inventory (inventário) — list the existing furniture, condition of walls, floors, plumbing. Photograph everything. This will protect you when the caução is returned.' }
          ]},
          { id: 'p6', title: '6. Registration in Finanças', content: [
            { kind: 'paragraph', text: 'Within 30 days the owner must register the contract on the Portal das Finanças (tax portal). They receive a comprovativo (confirmation) and provide you with a copy. Without registration: you cannot use the contract for an atestado de residência, for AIMA, or for the rent deduction in IRS.' },
            { kind: 'warning', text: 'If the owner refuses to register — this is a serious red flag (possible tax evasion). Insist, or choose another flat.' }
          ]}
        ]}
      ]
    },
    {
      id: 'without-fiador',
      title: 'If you do not have a guarantor',
      content: [
        { kind: 'paragraph', text: 'Newly arrived foreigners most often do not have a fiador. Options:' },
        { kind: 'checklist', items: [
          '⚠️ Prepayment of 3–12 months in advance — a widespread market practice for foreigners without a fiador, but as “rent prepayment” it is legally vulnerable: art. 1076 CC limits it to 2 months. It needs to be structured as a seguro de fiança, depósito de garantia, or another guarantee — discuss with a lawyer',
          '⚠️ “Increased caução” of 3–6 months — also contrary to art. 1076 CC (max 2 months). If the landlord insists — ask to structure the excess via a seguro de fiança',
          'Seguro de fiança — an insurer guarantees the obligations, costs 5–7% of the annual rent (a legally compliant way to bypass the art. 1076 caps)',
          'Medium-term rental (6–12 months) via intermediary services — usually without a fiador, but 20–40% more expensive',
          'Social housing fund (for certain categories) — via the municipality',
          'Room rental in shared housing — often a simplified process'
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
              'Quiet enjoyment of the flat for the contract term',
              'Protection from arbitrary rent increases — only once per year and not above the INE coefficient',
              'Protection from eviction — only by court decision, except in cases of 2+ months of non-payment or gross violations',
              'Major repairs — at the owner’s expense (roof, wiring, structural defects)',
              'Return of the caução within 30 days after the end of the contract (minus documented damage)',
              'IRS deduction for rent — 15% up to €700–800/year (threshold raised in OE 2024/25; check the exact value on portaldasfinancas.gov.pt)'
            ]}
          ]},
          { id: 'r2', title: 'Tenant duties', content: [
            { kind: 'checklist', items: [
              'Timely payment of rent (usually by the 8th of the month)',
              'Payment of utilities (electricidade, gás, água — bills go directly to you as the tenant)',
              'Routine maintenance (cosmetic, bulb replacement, minor repairs)',
              'Upkeep of the flat — maintaining cleanliness, no damage',
              'Notice to the owner 120 days in advance if you wish to terminate the contract (the period varies by type)',
              'Compliance with the regulamento do condomínio (building rules)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Dispute situations',
      content: [
        { kind: 'checklist', items: [
          'Non-return of the caução — a written claim to the owner, then to the Balcão Nacional do Arrendamento (BNA) or the Julgados de Paz',
          'Problems with technical condition — a written demand by registered mail with proof of delivery, photos, and deadlines for remedy',
          'Noise and neighbours — complaint to the Junta de Freguesia, police (112 for loud night-time noise)',
          'Undesired rent increase — challenge at the BNA; a coefficient above INE is unlawful',
          'Eviction before term — free legal aid via the Ordem dos Advogados (if low income) or a commercial lawyer',
          'DECO Proteste — consumer rights protection, provides advice on tenancy contracts'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Passport / Cartão de Cidadão (CC)', note: 'both parties' },
    { title: 'NIF', note: 'both parties — mandatory in the contract' },
    { title: 'Proof of income', note: 'payslips / bank statements / contract' },
    { title: 'Fiador (if any)', note: 'their Cartão de Cidadão (CC), NIF, proof of income' },
    { title: 'IBAN', note: 'for automatic rent debits' }
  ],
  costs: [
    { label: 'Caução (deposit)', amountEURMin: 500, amountEURMax: 3000, note: 'max 2 months’ rent under art. 1076 CC' },
    { label: 'Rent prepayment (max)', amountEURMin: 500, amountEURMax: 3000, note: 'max 2 months under art. 1076 CC; beyond that — structure via a seguro de fiança' },
    { label: 'Seguro de fiança', amountEURMin: 300, amountEURMax: 1500, note: '5–7% of annual rent' },
    { label: 'Agent’s commission', amountEURMin: 0, amountEURMax: 2000, note: 'often paid by the owner' }
  ],
  sources: [
    { title: 'Lei 6/2006 — NRAU (Novo Regime do Arrendamento Urbano)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34498475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1076 (caução and advance payment of rents)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Mais Habitação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 76/2024 — Alojamento Local after Mais Habitação (Construir Portugal)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/76-2024-892301177', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 43/2024 — revokes coercive leasing (CAE) of vacant properties', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/43-2024-862870533', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Portal das Finanças — Registration of Tenancy Contract', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Rent a house', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/arrendar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

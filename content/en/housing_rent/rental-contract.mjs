export default {
  editorialVoice: 'hackportugal',
  id: 'rental-contract',
  categoryId: 'housing_rent',
  title: 'Long-term rental in Portugal — legal framework and process',
  tldr: 'Long-term rental (arrendamento habitacional) is governed by the NRAU (Lei 6/2006, as amended). For **contratos com prazo certo** the minimum is 1 year and the maximum is 30 years; if no term is stated, the contract is deemed to have been concluded for **5 years** (Código Civil arts. 1094-1095). Exceptions for contratos para fins especiais transitórios may be shorter. Under art. 1076 Código Civil the limit is: caução up to **2 months’ rent** + renda antecipada up to **2 months**. Requests for 3-12 months’ advance payment are legally vulnerable — discuss a lawful structure with a lawyer (seguro de fiança, garantia bancária, fiador). The contract is registered with Finanças by the owner, who also issues recibos de renda.',
  tags: ['rental', 'nrau', 'contrato', 'caução', 'fiador'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'legal-framework',
      title: 'Legal framework',
      content: [
        { kind: 'paragraph', text: 'Main documents: Código Civil (articles on rental), Lei 6/2006 (NRAU — Novo Regime do Arrendamento Urbano), Decreto-Lei 160/2006 (formal elements of the contract), numerous amending laws and decree-laws. Important for 2024–2026: Lei 56/2023 “Mais Habitação” has been PARTIALLY REPEALED under the “Construir Portugal” programme: Decreto-Lei 43/2024 (July 2024) repealed/amended measures on arrendamento coercivo de imóveis devolutos (compulsory rental of vacant properties), Decreto-Lei 76/2024 (23 October 2024) lifted the moratorium on new AL licences in apartamentos and removed the automatic 5-year expiry of AL.' },
        { kind: 'paragraph', text: 'Key principles: tenant protection (eviction only through the courts), major repairs are the owner’s responsibility, rent indexation — no more than once a year and no higher than the official INE coefficient (in 2026: **2.24%**, coefficient 1.0224, published in Aviso n.º 23174/2025/2 of 19.09.2025).' },
        { kind: 'paragraph', text: 'Caução and advance payment (art. 1076 Código Civil after Lei 56/2023 “Mais Habitação”): maximum 2 months’ rent as caução + maximum 2 months’ rent as advance payment. Requests for more must be arranged through a separate legal structure (seguro de fiança, another guarantee); otherwise the clause may be challenged as unlawful.' }
      ]
    },
    {
      id: 'terms',
      title: 'Key terms',
      content: [
        { kind: 'checklist', items: [
          'Arrendatário / inquilino — tenant',
          'Senhorio — landlord (owner)',
          'Contrato de arrendamento habitacional — residential rental agreement',
          'Renda — monthly rent',
          'Caução — security deposit, under art. 1076 Código Civil (after Mais Habitação) maximum 2 months’ rent; returned on moving out. Advance payment of rent of up to 2 months may also be agreed',
          'Fiador — guarantor: an individual resident in Portugal with stable income, who is liable with their assets for the tenant’s obligations',
          'Seguro de fiança — an insurance company replaces the fiador, approximately 5-7% of annual rent',
          'IMI — municipal property tax, legally paid by the owner',
          'Condomínio — building charges; the owner is responsible to the condomínio. In rentals they are often included in the rent, but the contract may separately pass some despesas/encargos to the tenant if this is expressly stated',
          'Recibo de renda — monthly tax receipt from the landlord, usually electronic on Portal das Finanças, the basis for the tax return'
        ]}
      ]
    },
    {
      id: 'pricing',
      title: 'Market benchmarks (2026)',
      content: [
        { kind: 'paragraph', text: 'Prices rose significantly in 2022-2025. According to INE and Banco de Portugal statistics:' },
        { kind: 'checklist', items: [
          'Lisboa centre: T1 (1 bedroom) €1400-2500/month',
          'Lisboa suburbs (Oeiras, Almada): T1 €900-1500',
          'Porto centre: T1 €900-1400',
          'Porto suburbs: T1 €650-1000',
          'Coimbra: T1 €550-850',
          'Braga: T1 €500-800',
          'Algarve seasonal: T1 €700-1500 (winter), up to x2 in summer',
          'Alentejo small towns: T1 €350-600'
        ]},
        { kind: 'paragraph', text: 'Notation: T0 = studio, T1 = 1 bedroom + living room, T2 = 2 bedrooms + living room, etc.' }
      ]
    },
    {
      id: 'search-channels',
      title: 'Search channels',
      content: [
        { kind: 'paragraph', text: 'Several categories of housing search channels operate in Portugal:' },
        { kind: 'checklist', items: [
          'Online aggregator portals (largest: Idealista, Imovirtual, Casa Sapo, Supercasa) — the main channel, with hundreds of thousands of listings',
          'OLX Imóveis — many listings directly from owners (fewer commissions)',
          'Estate agencies (imobiliárias) — largest networks: RE/MAX, Century 21, ERA, Engel & Völkers. Commission is 1 month’s rent, often paid by the owner',
          'Local Facebook groups (by city and neighbourhood)',
          'Medium-term rental (6-12 months) for foreigners: platforms without fiador, but 20-40% more expensive',
          'Junta de Freguesia (parish authority) — sometimes has social housing programmes'
        ]},
        { kind: 'warning', text: 'Typical scam: a listing with photos of a good flat, the “owner” is abroad and asks for an advance payment to “reserve” it without a viewing. NEVER pay for a flat that you have not seen in person or through a trusted representative.' }
      ]
    },
    {
      id: 'process',
      title: 'Rental process — step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preliminary preparation', content: [
            { kind: 'checklist', items: [
              'Obtain a NIF',
              'Open a bank account in Portugal (preferably)',
              'Prepare proof of income: employment contract, 3 months’ payslips, bank statement or IRS return',
              'Find a fiador (if available) — their Cartão de Cidadão (CC) + income',
              'If there is no fiador: discuss **legal** guarantees — maximum 2 months’ advance payment + maximum 2 months’ caução, or seguro de fiança/garantia bancária/fiador. A request for 3–12 months in cash as renda antecipada or additional caução is legally vulnerable'
            ]}
          ]},
          { id: 'p2', title: '2. Search and viewing', content: [
            { kind: 'paragraph', text: 'Make a shortlist. At the first viewing, check: damp on walls and windows (white marks in corners = mould), heating (critical in winter — Portugal is one of the worst in the EU for housing insulation), hot water (gas water heater esquentador or electric water heater termoacumulador), noise from the street and neighbours, water pressure.' }
          ]},
          { id: 'p3', title: '3. Offer and negotiations', content: [
            { kind: 'paragraph', text: 'Points to discuss: term (12/24/36 months), amount of caução, who pays IMI and condomínio (owners’ association), furniture (mobilado (furnished) / mobilado parcialmente (partly furnished) / sem mobília (unfurnished)), restrictions on pets, rent indexation, the owner’s prior commitment to fix identified defects before move-in.' }
          ]},
          { id: 'p4', title: '4. Signing the contract', content: [
            { kind: 'paragraph', text: 'At least 2 copies. Mandatory elements under Lei 6/2006 + DL 160/2006: parties’ details and NIF, detailed address and identificação matricial/predial, finalidade do arrendamento, term, rent amount and indexation method, caução amount, start date. Also check the **licença de utilização** (or applicable exemption), **certificado energético** (if required), and all anexos/inventário.' }
          ]},
          { id: 'p5', title: '5. Handover of keys', content: [
            { kind: 'paragraph', text: 'Prepare a condition inventory (inventário) — list of existing furniture, condition of walls, flooring and sanitary fittings. Photograph everything. This will protect you when the caução is returned.' }
          ]},
          { id: 'p6', title: '6. Registration with Finanças', content: [
            { kind: 'paragraph', text: 'Within 30 days the owner must register the contract on Portal das Finanças (tax portal). They receive a comprovativo (confirmation) and give you a copy. Without registration and recibos de renda, you generally cannot correctly claim the rent deduction in IRS. For Junta/AIMA, a registered contract greatly increases the reliability of address evidence, but the specific set of documents depends on the Junta and the type of AIMA procedure.' },
            { kind: 'warning', text: 'If the owner refuses to register — this is a serious red flag (possibly tax evasion). Insist or choose another flat.' }
          ]}
        ]}
      ]
    },
    {
      id: 'without-fiador',
      title: 'If you do not have a guarantor',
      content: [
        { kind: 'paragraph', text: 'Newly arrived foreigners most often do not have access to a fiador. Options:' },
        { kind: 'checklist', items: [
          '⚠️ Advance payment of 3-12 months — a common market practice for foreigners without a fiador, but as “advance rent payment” it is legally vulnerable: art. 1076 CC limits it to 2 months. The excess above 2 months should not be documented as an additional cash depósito/caução (that is again caução). Legal alternatives are seguro de fiança, garantia bancária, fiador or another independent guarantee — check the structure with an advogado/solicitador',
          '⚠️ “Increased caução” of 3-6 months — also conflicts with art. 1076 CC (maximum 2 months). If the landlord insists — structure the excess through seguro de fiança/garantia bancária',
          'Seguro de fiança — an insurance company guarantees the obligations, costs 5-7% of annual rent (a legal way around the limits of art. 1076)',
          'Medium-term rental (6-12 months) through intermediary services — usually without a fiador, but 20-40% more expensive',
          'Social housing stock (for some categories) — through the municipality',
          'Room rental in shared housing — often a simplified process'
        ]}
      ]
    },
    {
      id: 'rights-and-duties',
      title: 'Rights and obligations',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Tenant’s rights', content: [
            { kind: 'checklist', items: [
              'Peaceful possession of the flat for the term of the contract',
              'Protection from arbitrary rent increases — only once a year and no higher than the INE coefficient',
              'Protection from eviction — self-help eviction is ILLEGAL. Even with 2+ months’ arrears or a serious breach, the landlord must terminate the contract and use the prescribed despejo procedure through BAS (Balcão do Arrendatário e do Senhorio) / tribunal; they cannot simply change the locks or remove belongings',
              'Major repairs — at the owner’s expense (roof, electrical wiring, structural defects)',
              'Return of caução: it is best to state the deadline directly in the contract (for example 15–30 days after entrega das chaves); there is no universal statutory “30 days” deadline under the general regime',
              'IRS deduction: 15% of expenses on renda de habitação permanente within the current year’s limit — check the actual cap under art. 78.º-E CIRS on portaldasfinancas.gov.pt'
            ]}
          ]},
          { id: 'r2', title: 'Tenant’s obligations', content: [
            { kind: 'checklist', items: [
              'Timely payment of rent (usually by the 8th day of the month)',
              'Payment of utilities (electricidade, gás, água — bills are issued directly to you as tenant)',
              'Routine repairs (cosmetic, replacing light bulbs, minor repairs)',
              'Keeping the flat in good order — maintaining cleanliness, no damage',
              'Giving the owner 120 days’ notice if you wish to terminate the contract (the period varies by type)',
              'Compliance with the regulamento do condomínio (building rules)'
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
          'Non-return of caução — written complaint, then Julgado de Paz/tribunal or (if the conditions fit) injunção em matéria de arrendamento through **Balcão do Arrendatário e do Senhorio (BAS)**',
          'Problems with technical condition — written request by registered post, photos, deadlines for remedying',
          'Noise and neighbours — complaint to Junta de Freguesia, police (112 for loud night-time noise)',
          'Annual atualização renda in an existing contract must not exceed the official INE coefficient unless there is a specific legal basis. Dispute — written objection, then BAS/Julgado de Paz/tribunal/advogado',
          'Eviction before the end of the term — free legal aid through Ordem dos Advogados (if low income) or a commercial lawyer',
          'DECO Proteste — consumer rights protection, provides advice on rental contracts'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Passport / Cartão de Cidadão (CC)', note: 'both parties' },
    { title: 'NIF', note: 'of both parties — mandatory in the contract' },
    { title: 'Proof of income', note: 'payslips / statements / contract' },
    { title: 'Fiador (if any)', note: 'their Cartão de Cidadão (CC), NIF, proof of income' },
    { title: 'IBAN', note: 'for automatic rent collection' }
  ],
  costs: [
    { label: 'Caução (deposit)', amountEURMin: 500, amountEURMax: 3000, note: 'max 2 months’ rent under art. 1076 CC' },
    { label: 'Advance rent payment (max)', amountEURMin: 500, amountEURMax: 3000, note: 'max 2 months under art. 1076 CC; more — structure through seguro de fiança' },
    { label: 'Seguro de fiança', amountEURMin: 300, amountEURMax: 1500, note: '5-7% of annual rent' },
    { label: 'Agent’s commission', amountEURMin: 0, amountEURMax: 2000, note: 'often paid by the owner' }
  ],
  sources: [
    { title: 'Lei 6/2006 — NRAU (Novo Regime do Arrendamento Urbano)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34498475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1076 (caução e antecipação de rendas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Mais Habitação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 76/2024 — Alojamento Local after Mais Habitação (Construir Portugal)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/76-2024-892301177', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 43/2024 — repeals arrendamento coercivo (CAE) de imóveis devolutos', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/43-2024-862870533', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Portal das Finanças — Registration of Rental Contract', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Renting a home', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/arrendar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

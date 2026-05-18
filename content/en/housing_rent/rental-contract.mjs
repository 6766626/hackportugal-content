export default {
  editorialVoice: 'hackportugal',
  id: 'rental-contract',
  categoryId: 'housing_rent',
  title: 'Long-term rental in Portugal — legal framework and process',
  tldr: 'Long-term rental (arrendamento habitacional) is governed by the NRAU (Lei 6/2006, as amended). For **contratos com prazo certo**, the minimum is 1 year and the maximum is 30 years; if the term is not stated, the contract is deemed to have been concluded for **5 years** (Código Civil arts. 1094-1095).\n\nExceptions for contratos para fins especiais transitórios may be shorter. Under art. 1076 Código Civil, the limit is: caução of up to **2 months’ rent** + renda antecipada of up to **2 months**. Requests for 3-12 months’ prepayment are legally vulnerable — discuss a lawful structure with a lawyer (seguro de fiança, garantia bancária, fiador).\n\nThe contract is registered with Finanças by the owner, who also issues recibos de renda.',
  tags: ['rental', 'nrau', 'contrato', 'caução', 'fiador'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'legal-framework',
      title: 'Legal framework',
      content: [
        { kind: 'paragraph', text: 'Main documents: Código Civil (articles on rental), Lei 6/2006 (NRAU — Novo Regime do Arrendamento Urbano), Decreto-Lei 160/2006 (formal elements of the contract), numerous amending laws and decree-laws. Important for 2024–2026: Lei 56/2023 “Mais Habitação” has been PARTIALLY REPEALED under the “Construir Portugal” programme: Decreto-Lei 43/2024 (July 2024) repealed/amended measures on arrendamento coercivo de imóveis devolutos (compulsory rental of vacant properties), Decreto-Lei 76/2024 (23 October 2024) lifted the moratorium on new AL licences in apartamentos and removed the automatic 5-year expiry of AL.' },
        { kind: 'paragraph', text: 'Key principles: tenant protection (eviction only through the courts), major repairs are the owner’s responsibility, rent indexation no more than once a year and not above the official INE coefficient (in 2026: **2.24%**, coefficient 1.0224, published in Aviso n.º 23174/2025/2 of 19.09.2025).' },
        { kind: 'paragraph', text: 'Caução and prepayment (art. 1076 Código Civil after Lei 56/2023 “Mais Habitação”): maximum 2 months’ rent as caução + maximum 2 months’ rent as prepayment. Requests for more must be arranged through a separate legal structure (seguro de fiança, another guarantee), otherwise the clause may be challenged as unlawful.' }
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
          'Caução — security deposit; under art. 1076 Código Civil (after Mais Habitação), maximum 2 months’ rent; returned when you move out. A rent prepayment of up to 2 months may additionally be agreed',
          'Fiador — guarantor: a natural person resident in Portugal with stable income, who is liable with their assets for the tenant’s obligations',
          'Seguro de fiança — an insurance company replaces the fiador, approximately 5-7% of annual rent',
          'IMI — municipal property tax, paid by the owner by law',
          'Condomínio — building charges; the owner is responsible to the condomínio. In rentals they are often included in the rent, but the contract may separately pass some despesas/encargos on to the tenant if this is expressly stated',
          'Recibo de renda — monthly tax receipt from the landlord, usually electronic on Portal das Finanças, used as the basis for the tax return'
        ]}
      ]
    },
    {
      id: 'pricing',
      title: 'Market benchmarks (2026)',
      content: [
        { kind: 'paragraph', text: 'Prices rose significantly in 2022-2025. According to INE and Banco de Portugal statistics:' },
        { kind: 'checklist', items: [
          'Lisboa centre: T1 (1 bedroom) €1,400-€2,500/month',
          'Lisboa suburbs (Oeiras, Almada): T1 €900-€1,500',
          'Porto centre: T1 €900-€1,400',
          'Porto suburbs: T1 €650-€1,000',
          'Coimbra: T1 €550-€850',
          'Braga: T1 €500-€800',
          'Algarve seasonally: T1 €700-€1,500 (winter), up to x2 in summer',
          'Alentejo small towns: T1 €350-€600'
        ]},
        { kind: 'paragraph', text: 'Notation: T0 = studio, T1 = 1 bedroom + living room, T2 = 2 bedrooms + living room, etc.' }
      ]
    },
    {
      id: 'search-channels',
      title: 'Search channels',
      content: [
        { kind: 'paragraph', text: 'In Portugal there are several categories of housing search channels:' },
        { kind: 'checklist', items: [
          'Online aggregator portals (the largest: Idealista, Imovirtual, Casa Sapo, Supercasa) — the main channel, with hundreds of thousands of listings',
          'OLX Imóveis — many listings directly from owners (fewer commissions)',
          'Estate agencies (imobiliárias) — the largest networks: RE/MAX, Century 21, ERA, Engel & Völkers. Commission is 1 month’s rent, often paid by the owner',
          'Local Facebook groups (by city and neighbourhood)',
          'Medium-term rental (6-12 months) for foreigners: platforms without fiador, but 20-40% more expensive',
          'Junta de Freguesia (parish council) — sometimes has social housing programmes'
        ]},
        { kind: 'warning', text: 'A typical scam: a listing with photos of a good flat, the “owner” is abroad and asks for prepayment to “reserve” it without a viewing. NEVER pay for a flat that you have not seen in person or through a trusted representative.' }
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
              'Prepare proof of income: employment contract, payslips for 3 months, bank statement or IRS declaration',
              'Find a fiador (if available) — their Cartão de Cidadão (CC) + income',
              'If there is no fiador: discuss **lawful** guarantees — maximum 2 months’ prepayment + maximum 2 months’ caução, or seguro de fiança/garantia bancária/fiador. A request for 3–12 months in cash as renda antecipada or additional caução is legally vulnerable'
            ]}
          ]},
          { id: 'p2', title: '2. Search and viewing', content: [
            { kind: 'paragraph', text: 'Make a shortlist. At the first viewing, check: damp on walls and windows (white marks in corners = mould), heating (critical in winter — Portugal is one of the worst countries in the EU for housing insulation), hot water (gas water heater esquentador or electric cylinder termoacumulador), street and neighbour noise, water pressure.' }
          ]},
          { id: 'p3', title: '3. Offer and negotiations', content: [
            { kind: 'paragraph', text: 'Items to discuss: term (12/24/36 months), amount of caução, who pays IMI and condomínio (owners’ association), furniture (mobilado (furnished) / mobilado parcialmente (partly furnished) / sem mobília (unfurnished)), restrictions on pets, rent indexation, the owner’s prior undertaking to fix identified defects before move-in.' }
          ]},
          { id: 'p4', title: '4. Signing the contract', content: [
            { kind: 'paragraph', text: 'At least 2 copies. Mandatory elements under Lei 6/2006 + DL 160/2006: parties’ details and NIF, full address and identificação matricial/predial, finalidade do arrendamento, term, rent amount and indexation method, amount of caução, start date. Also check the **licença de utilização** (or applicable exemption), **certificado energético** (if required), and all anexos/inventário.' }
          ]},
          { id: 'p5', title: '5. Handover of keys', content: [
            { kind: 'paragraph', text: 'Prepare a condition inventory (inventário) — list of existing furniture, condition of walls, flooring and plumbing. Photograph everything. This will protect you when the caução is returned.' }
          ]},
          { id: 'p6', title: '6. Registration with Finanças', content: [
            { kind: 'paragraph', text: 'Within 30 days, the owner must register the contract on Portal das Finanças (tax portal). They receive a comprovativo (confirmation) and give you a copy. Without registration and recibos de renda, you will generally be unable to correctly claim a rent deduction in IRS. For Junta/AIMA, a registered contract greatly increases the reliability of address evidence, but the specific document set depends on the Junta and the type of AIMA procedure.' },
            { kind: 'warning', text: 'If the owner refuses to register — this is a serious red flag (possibly tax evasion). Insist or choose another flat.' }
          ]}
        ]}
      ]
    },
    {
      id: 'without-fiador',
      title: 'If you have no guarantor',
      content: [
        { kind: 'paragraph', text: 'Newly arrived foreigners usually do not have access to a fiador. Options:' },
        { kind: 'checklist', items: [
          '⚠️ Prepayment 3-12 months in advance — common market practice for foreigners without a fiador, but as “rent prepayment” it is legally vulnerable: art. 1076 CC limits it to 2 months. The excess over 2 months should not be documented as an additional cash depósito/caução (that is again caução). Lawful alternatives are seguro de fiança, garantia bancária, fiador or another independent guarantee — check the structure with an advogado/solicitador',
          '⚠️ “Increased caução” of 3-6 months — also conflicts with art. 1076 CC (maximum 2 months). If the landlord insists — structure the excess through seguro de fiança/garantia bancária',
          'Seguro de fiança — an insurance company guarantees the obligations, costs 5-7% of annual rent (a lawful way around the limits of art. 1076)',
          'Medium-term rental (6-12 months) through intermediary services — usually without fiador, but 20-40% more expensive',
          'Social housing fund (for some categories) — through the municipality',
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
              'Peaceful possession of the flat for the contract term',
              'Protection from arbitrary rent increases — only once a year and not above the INE coefficient',
              'Protection from eviction — self-help eviction is ILLEGAL. Even with 2+ months’ arrears or a serious breach, the landlord must terminate the contract and use the prescribed despejo procedure through BAS (Balcão do Arrendatário e do Senhorio) / tribunal; they cannot simply change the locks or remove belongings',
              'Major repairs — at the owner’s expense (roof, electrical wiring, structural defects)',
              'Return of caução: it is best to state the deadline directly in the contract (for example, 15–30 days after entrega das chaves); there is no universal legal “30-day” deadline under the general regime',
              'IRS deduction: 15% of expenses on renda de habitação permanente within the current year’s limit — check the actual cap under art. 78.º-E CIRS on portaldasfinancas.gov.pt'
            ]}
          ]},
          { id: 'r2', title: 'Tenant duties', content: [
            { kind: 'checklist', items: [
              'Timely payment of rent (usually by the 8th day of the month)',
              'Payment of utilities (electricidade, gás, água — bills come directly to you as tenant)',
              'Routine repairs (decorative repairs, replacing bulbs, minor repairs)',
              'Maintaining the flat — keeping it clean, avoiding damage',
              'Notifying the owner 120 days in advance if you wish to terminate the contract (the period varies by type)',
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
          'Problems with technical condition — written demand by post with acknowledgement of receipt, photos, deadlines for remedying',
          'Noise and neighbours — complaint to Junta de Freguesia, police (112 for loud night-time noise)',
          'Annual atualização renda in an active contract must not exceed the official INE coefficient unless there is a special legal basis. Dispute — written objection, then BAS/Julgado de Paz/tribunal/advogado',
          'Eviction before the end of the term — free legal aid through Ordem dos Advogados (if low income) or a commercial lawyer',
          'DECO Proteste — consumer rights organisation, provides advice on rental contracts'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Passport / Cartão de Cidadão (CC)', note: 'both parties' },
    { title: 'NIF', note: 'of both parties — mandatory in the contract' },
    { title: 'Proof of income', note: 'payslips / statements / contract' },
    { title: 'Fiador (if any)', note: 'their Cartão de Cidadão (CC), NIF, proof of income' },
    { title: 'IBAN', note: 'for direct debit of rent' }
  ],
  costs: [
    { label: 'Caução (deposit)', amountEURMin: 500, amountEURMax: 3000, note: 'max 2 months’ rent under art. 1076 CC' },
    { label: 'Rent prepayment (max)', amountEURMin: 500, amountEURMax: 3000, note: 'max 2 months under art. 1076 CC; more — structure through seguro de fiança' },
    { label: 'Seguro de fiança', amountEURMin: 300, amountEURMax: 1500, note: '5-7% of annual rent' },
    { label: 'Agent’s commission', amountEURMin: 0, amountEURMax: 2000, note: 'often paid by the owner' }
  ],
  sources: [
    { title: 'Lei 6/2006 — NRAU (Novo Regime do Arrendamento Urbano)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34498475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1076 (caução e antecipação de rendas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Mais Habitação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 76/2024 — Alojamento Local after Mais Habitação (Construir Portugal)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/76-2024-892301177', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 43/2024 — repeals arrendamento coercivo (CAE) of imóveis devolutos', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/43-2024-862870533', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Portal das Finanças — Rental Contract Registration', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Renting a home', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/arrendar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}

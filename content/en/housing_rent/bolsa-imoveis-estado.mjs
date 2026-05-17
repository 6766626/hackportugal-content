export default {
  editorialVoice: 'hackportugal',
  id: 'bolsa-imoveis-estado',
  categoryId: 'housing_rent',
  title: 'Bolsa de Imóveis do Estado: state housing database for rent',
  tldr: 'Bolsa de Imóveis do Estado on imoveis.gov.pt is a showcase of state-owned properties: some are offered for arrendamento, venda or concessão. It is not a single waiting list for social housing and not a guarantee of a flat. For renting, check the specific aviso: who can apply, renda, term, documents and deadline. Expats usually need a NIF, legal stay/residence permit, income in Portugal/IRS or equivalent, and no debts to Finanças/Segurança Social. Applying is usually free; rent and caução depend on the tender.',
  tags: ['rent', 'property', 'housing', 'state'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What it is in practice',
      content: [
        { kind: 'paragraph', text: 'imoveis.gov.pt is the official portal for property owned by the state, public institutes and some state-owned companies. It publishes properties for sale, rent, concessão or other procedures. For a tenant, the important listings are those with the operação type: arrendamento or arrendamento para habitação.' },
        { kind: 'paragraph', text: 'Portal da Habitação is a separate IHRU ecosystem for housing programmes: arrendamento acessível, Apoio ao Arrendamento, 1.º Direito, Porta 65 and others. Sometimes a listing on imoveis.gov.pt leads to rules or an application through IHRU/Portal da Habitação.' },
        { kind: 'warning', text: 'Do not confuse Bolsa de Imóveis do Estado with a “social flat from the Câmara Municipal”. Municipal housing is usually handled through the Câmara Municipal/Junta and has separate waiting lists. On imoveis.gov.pt you take part in a specific concurso/aviso for a specific property.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who can apply',
      content: [
        { kind: 'paragraph', text: 'There is no single rule for all properties: the conditions are set by the aviso. But for residential rental, state listings usually check identity, tax identification, legal stay and the ability to pay the renda.' },
        { kind: 'checklist', items: [
          'NIF in Portugal',
          'identity document: passport, Cartão de Cidadão, residence permit or another document proving legal stay',
          'address for notifications and email/phone',
          'proof of income: IRS, recibos de vencimento, recibos verdes, employment contract, pension or foreign income with translation',
          'declaração de não dívida from Finanças, if the aviso requires it',
          'declaração de situação contributiva from Segurança Social, if the aviso requires it',
          'household composition/agregado familiar: spouse, children, dependants',
          'confirmation that you do not own suitable housing in the relevant município, if this condition is stated',
          'for renda acessível programmes — compliance with the income limits and taxa de esforço stated in the programme rules',
          'for students/young workers — university certificate or contrato de trabalho, if the property is intended for this group'
        ] },
        { kind: 'warning', text: 'A foreign national is not automatically excluded, but a “tourist without the right to reside” will almost always lose out: for a long-term contract, a state landlord usually requires legal stay, a NIF and verifiable income.' }
      ]
    },
    {
      id: 'how-to-search',
      title: 'How to search for a property on imoveis.gov.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-portal', title: '1. Open the portal', content: [
            { kind: 'paragraph', text: 'Go to imoveis.gov.pt and use the search by distrito, concelho, freguesia, property type and operação. Look for the words “arrendamento”, “habitação”, “renda acessível”, “concurso” and “aviso”.' }
          ] },
          { id: 'read-listing', title: '2. Download the aviso and peças do procedimento', content: [
            { kind: 'paragraph', text: 'The property card often looks simple, but the legally important documents are the PDFs: aviso, caderno de encargos, minuta do contrato, floor plan, visita conditions, application period and selection criteria.' }
          ] },
          { id: 'check-rent', title: '3. Check the renda and expenses', content: [
            { kind: 'paragraph', text: 'The listing should state the renda mensal or the basis for an offer. Check whether condomínio, IMI, insurance, water/electricity/gas are included and who pays for repairs. In a normal tenancy, utilities are almost always paid by the tenant.' }
          ] },
          { id: 'visit', title: '4. Book a visita', content: [
            { kind: 'paragraph', text: 'For old state-owned properties, the visita is critical: the condition may be “as is”. Check for damp, windows, electrics, certificado energético, the presence of a kitchen, lift and transport links.' }
          ] }
        ] }
      ]
    },
    {
      id: 'application',
      title: 'Application: what to prepare',
      content: [
        { kind: 'paragraph', text: 'The application format is stated in the aviso: online form, email, physical entrega em mão or registered post. Do not send it “however is convenient”: state tenders may reject an application for using the wrong channel or missing a signature.' },
        { kind: 'checklist', items: [
          'formulário de candidatura from the aviso',
          'copy of the identity document of all adult household members',
          'NIF of all applicants',
          'residence permit/visa/document proving legal stay, if you are not a PT/EU citizen',
          'latest declaração de IRS and nota de liquidação; if you arrived recently — foreign tax return/contract/bank statements with translation',
          '3 latest payslips or recibos verdes',
          'declaração de não dívida Finanças and Segurança Social, if required',
          'comprovativo de morada: rental contract, atestado de residência, utility bill',
          'declaração de honra on household composition, absence of housing or compliance with the programme conditions',
          'priority documents: disability, children, monoparental, displacement, if the aviso awards points',
          'signature: digital via CMD/Cartão de Cidadão or handwritten, as required by the procedure'
        ] },
        { kind: 'warning', text: 'Deadlines are counted strictly. If the prazo ends at 17:00 on a working day, an email at 17:03 may be invalid. Keep the comprovativo de submissão/recibo de entrega.' }
      ]
    },
    {
      id: 'contract-terms',
      title: 'Contract, term and rent increases',
      content: [
        { kind: 'paragraph', text: 'After selection, a lista provisória/final or a notification to the winner is published. Then the contrato de arrendamento is signed. Housing is governed by the NRAU/Código Civil rules, and arrendamento acessível is also subject to special programme conditions, including renda limits and term requirements.' },
        { kind: 'checklist', items: [
          'contract term: check the minuta; accessible rent often uses a long term, while for students it may be seasonal/academic-year based',
          'caução: usually 1–2 mensalidades, but the exact amount is in the aviso/contrato',
          'rendas adiantadas: check how many months must be paid on signing',
          'renda update: for ordinary contracts, the annual coefficient for 2026 is 2.16%, if the contract does not contain another lawful scheme and there is no exception',
          'obras: minor ongoing upkeep is usually for the tenant, structural repairs are for the owner, but old buildings require careful reading',
          'subarrendamento/Alojamento Local are almost always prohibited without written permission',
          'registration of the contract with Finanças is the landlord’s obligation; ask for recibos de renda',
          'moving out: comply with the pré-aviso period in the contract and the law, otherwise you may lose part of the caução'
        ] },
        { kind: 'warning', text: 'A low renda does not mean “indefinite and unconditional”. In state and accessible programmes, breaching the conditions — not living there yourself, hiding income, renting out a room, building up debt — may lead to termination.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'If there are no suitable properties',
      content: [
        { kind: 'paragraph', text: 'There may be few residential properties on imoveis.gov.pt, especially in Lisboa, Porto, Cascais, Oeiras and Algarve. Check Portal da Habitação and Câmara Municipal programmes in your place of residence in parallel.' },
        { kind: 'checklist', items: [
          'Portal da Habitação: IHRU programmes and informações sobre arrendamento acessível',
          'Câmara Municipal: habitação municipal, renda apoiada, concursos locais',
          'Porta 65: rental support for young tenants, if you meet the age and income requirements',
          'Apoio ao Arrendamento: check current conditions on portaldahabitacao.pt',
          'private market: Idealista, Imovirtual, OLX, agencies with an AMI licence',
          'cooperatives and fundações: sometimes publish renda acessível outside imoveis.gov.pt'
        ] },
        { kind: 'paragraph', text: 'In practice: create a spreadsheet with properties, deadline, renda, required documents and status. State listings appear irregularly, and the application period may be short.' }
      ]
    }
  ],
  costs: [
    { label: 'Search on imoveis.gov.pt', amountEUR: 0, note: 'The official portal is free; do not pay intermediaries for “access to the database”.' },
    { label: 'Application', amountEUR: 0, note: 'Usually free, unless the aviso provides for a specific fee or guarantee.' },
    { label: 'Caução on signing', amountEURMin: 920, amountEURMax: 2400, note: 'Typically 1–2 monthly renda; the actual amount depends on the property. The range is indicative for accessible rent, not a legal limit.' },
    { label: 'Certidão de não dívida online', amountEUR: 0, note: 'Usually downloadable free of charge from Finanças and Segurança Social if you have access.' }
  ],
  sources: [
    {
      title: 'Official Imóveis do Estado portal',
      url: 'https://imoveis.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal da Habitação — IHRU programmes and housing rental',
      url: 'https://www.portaldahabitacao.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 68/2019 — Programa de Arrendamento Acessível',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/68-2019-122317335',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código Civil — tenancy contract regime',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}

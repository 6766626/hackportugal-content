export default {
  editorialVoice: 'hackportugal',
  id: 'ifap-agricultura-subsidios',
  categoryId: 'work_business',
  title: 'IFAP: PEPAC subsidies for micro-farmers and agricultor familiar',
  tldr: 'IFAP pays agricultural subsidies under PEPAC 2023-2027: basic/environmental payments, apoios associados and schemes for small holdings. For an expat with a plot, this is not “money for land”: you need a NIF, IBAN, IFAP beneficiário registration, parcelas in iSIP/parcelário, atividade agrícola and an annual Pedido Único. Realistically, for a micro-holding, expect roughly €500-3,000 per year, but the amount depends on crops, hectares, animals and the rules for the year. Estatuto da Agricultura Familiar gives priorities and benefits, but requires family labour, income from agriculture and compliance with limits.',
  tags: ['ifap', 'pepac', 'farm', 'agriculture'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-ifap-pays',
      title: 'What IFAP actually pays',
      content: [
        { kind: 'paragraph', text: 'IFAP is the Instituto de Financiamento da Agricultura e Pescas. Payments under PEPAC 2023-2027 go through it: CAP direct payments, environmental measures, area compensation, animals/crops and part of investment projects. For a small plot, the important point is not grants for a “countryside dream”, but the annual Pedido Único and correct registration of the holding.' },
        { kind: 'paragraph', text: 'A typical micro-farmer with a few hectares of olives, vineyard, orchard, pasture or vegetable garden may see an order of magnitude of €500-3,000 per year. This is not a guaranteed rate: payments are calculated by eligible hectares, crop, region, rights/schemes, environmental commitments, animals and the budget of the specific campaign.' },
        { kind: 'checklist', items: [
          'PEPAC runs for the 2023-2027 period; applications and payments are handled in annual campaigns',
          'The main form is the Pedido Único, submitted through Portal do IFAP or an entidade reconhecida',
          'You need parcelas entered in iSIP/parcelário, with the correct crops and areas',
          'The land must be yours, rented or lawfully used; “the neighbour allowed it” without a document is risky',
          'For animals, correct registrations in SNIRA/BDN and compliance with veterinary rules are required',
          'Selling produce requires an atividade aberta in Finanças and proper invoices/faturas',
          'Subsidies may be checked on site and by satellite monitoring',
          'Errors in areas, crops or double declaration of land lead to reductions and repayments'
        ] }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can apply as an expat',
      content: [
        { kind: 'paragraph', text: 'Citizenship is usually not the key filter. It is more important to be identified in Portugal as an IFAP beneficiário, have a NIF, a bank account with an IBAN, access to Portal do IFAP and a lawful right to use agricultural land. For a resident with a residence permit, an EU citizen with CRUE or an Lda company, the path is practically the same: first register the holding, then submit the annual application.' },
        { kind: 'checklist', items: [
          'NIF and access to Finanças; for online processes, Chave Móvel Digital or Cartão de Cidadão are convenient',
          'IBAN in the name of the applicant or company',
          'Document for the land: escritura/caderneta predial, rental agreement, comodato or outro título válido',
          'IFAP beneficiário registration and dados de identificação atualizados',
          'Parcelário/iSIP: each agricultural area must be drawn and classified',
          'Atividade agrícola in Finanças if there is regular sale of produce or business activity',
          'NISS and Segurança Social — if you work as a trabalhador independente or hire workers',
          'No critical debts to the Autoridade Tributária and Segurança Social for many support measures',
          'For organic farming — contrato with an entidade certificadora and compliance with the produção biológica regime'
        ] },
        { kind: 'warning', text: 'Buying a quinta or terreno rústico does not in itself grant a residence permit or create a right to subsidies. IFAP looks at real agricultural operation, documents for land use and compliance with the campaign rules.' }
      ]
    },
    {
      id: 'register-ifap',
      title: 'How to register with IFAP and prepare the plot',
      content: [
        { kind: 'paragraph', text: 'The practical route for a newcomer is not to try to fill everything in yourself straight away, but to go to an associação agrícola, gabinete técnico or entidade reconhecida in your concelho. They understand local crops, know the parcelário and usually submit the Pedido Único for a small fee. But responsibility for the data remains with you.' },
        { kind: 'substeps', items: [
          { id: 'beneficiario', title: '1. Become an IFAP beneficiário', content: [
            { kind: 'paragraph', text: 'Registration creates your número de beneficiário/NIFAP and links your NIF, address, contacts and IBAN. Check that the name in IFAP matches the bank account and tax details.' }
          ] },
          { id: 'parcelario', title: '2. Enter the land in parcelário/iSIP', content: [
            { kind: 'paragraph', text: 'Each parcela is drawn on the map, with the crop, area, usage regime and boundaries indicated. For old quintas, it often turns out that the cadastre, caderneta predial and actual fence do not match — this needs to be resolved before the application.' }
          ] },
          { id: 'activity', title: '3. Put the tax status in order', content: [
            { kind: 'paragraph', text: 'If you sell olive oil, vegetables, eggs, honey or services, open atividade in Finanças with the appropriate CAE/CIRS. Low turnover may fall under the IVA exemption under art. 53 CIVA if the annual limit of €15,000 is met, but this does not remove the need for faturas and IRS.' }
          ] },
          { id: 'evidence', title: '4. Gather evidence of the holding', content: [
            { kind: 'checklist', items: [
              'caderneta predial rústica or rental agreement/comodato',
              'parcelas plan from iSIP',
              'photographs of crops, trees, irrigation systems, pastures',
              'invoices for seeds, plants, feed, fertilisers, certification',
              'veterinary and SNIRA/BDN records for animals',
              'contract with a lagar, adega, cooperativa or buyers, if any',
              'produção biológica certificate if you are applying for organic measures'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'pedido-unico',
      title: 'Annual Pedido Único: where money is lost',
      content: [
        { kind: 'paragraph', text: 'Pedido Único is the annual declaration/application for payments. The campaign usually opens at the beginning of the year and closes in spring; IFAP publishes the exact dates each year. In 2026, check the calendário da campanha on ifap.pt: late submission or corrections after the deadline may mean penalties, a reduced payment or refusal.' },
        { kind: 'checklist', items: [
          'Check which parcelas are actually eligible: forest, yard, house, swimming pool and roads are not paid as agricultural area',
          'Do not overstate hectares: satellite monitoring and inspections quickly find discrepancies',
          'Indicate the correct crop: olival, vinha, frutos secos, pastagem permanente, hortícolas, etc.',
          'Check the commitments for eco-regimes: they can provide an extra payment, but require evidence',
          'If declaring animals, check dates, numbers, movements and veterinary records',
          'Keep documents for at least several years: IFAP may request them after payment',
          'Calculate tax separately: subsidies may be income for IRS/IRC depending on your regime',
          'After submission, check mensagens/notificações in Portal do IFAP, not just email'
        ] },
        { kind: 'warning', text: 'The most expensive beginner mistake is to declare land that is actually used by a neighbour, tenant or previous owner. A double application for one parcela almost always leads to a dispute, blocking and inspections.' }
      ]
    },
    {
      id: 'agricultor-familiar',
      title: 'Estatuto da Agricultura Familiar: why it is needed',
      content: [
        { kind: 'paragraph', text: 'Estatuto da Agricultura Familiar was created by Decreto-Lei 64/2018. It is not a separate “state salary”, but recognition of a family agricultural holding. The title may give priority or more favourable conditions in some PEPAC measures, rural development programmes, local markets, capacitação and administrative procedures.' },
        { kind: 'paragraph', text: 'The criteria are checked not by the attractive description of the quinta, but by income, family labour, registration of the holding and limits. In practice, the title is useful for those who genuinely live from agriculture at least partly, not simply own a country house with a garden.' },
        { kind: 'checklist', items: [
          'The applicant must be titular de exploração agrícola familiar and an adult',
          'The holding must be registered and identified in IFAP/parcelário',
          'Family labour must be a substantial part of the trabalho total da exploração',
          'The share of agricultural income in family income must comply with the rules of the estatuto',
          'Family income and the amount of CAP direct payments must not exceed the established limits',
          'Up-to-date Finanças and Segurança Social data are required',
          'The reconhecimento title is usually requested online through the IFAP/DGADR ecosystem',
          'After recognition, the criteria must be maintained; if circumstances change, the title may not be renewed or may be cancelled'
        ] },
        { kind: 'warning', text: 'Do not confuse agricultor familiar with an automatic special tax regime. IVA, IRS, Segurança Social, sanitary authorisations, water/borehole licences and rules for selling food products remain separate obligations.' }
      ]
    },
    {
      id: 'micro-farm-playbook',
      title: 'Working plan for a micro-holding in 2026',
      content: [
        { kind: 'paragraph', text: 'If you have just bought or are renting a plot, the goal of the first year is not the maximum subsidy, but clean data. Correct the parcelário, legalise land use, choose crops, open atividade if selling and submit a careful Pedido Único. Only after that does it make sense to add organic farming, animals, eco-regimes or investment projects.' },
        { kind: 'checklist', items: [
          'January-February: gather land documents, NIF, IBAN, Portal do IFAP/Finanças access',
          'February-March: go to an associação agrícola and check parcelário/iSIP',
          'Before submitting the Pedido Único: decide which crops and areas can genuinely be declared',
          'Spring: submit the Pedido Único within the 2026 campaign deadline and keep the comprovativo',
          'Summer-autumn: respond to IFAP notifications, keep the plot in the declared condition',
          'When selling: emitir faturas, keep expense records and account for subsidies for IRS',
          'Before new investments: check PEPAC avisos abertos, rather than buying machinery “for a future grant”',
          'If income from the holding becomes regular: check Estatuto da Agricultura Familiar and Segurança Social'
        ] },
        { kind: 'warning', text: 'Grants for a tractor, irrigation, estufa or turismo rural are not the same procedure as annual direct payments. Usually, an aviso aberto, business plan, orçamento, own funding and waiting for approval before expenditure are required. Purchases before aprovação are often not reimbursed.' }
      ]
    }
  ],
  costs: [
    { label: 'IFAP beneficiário registration', amountEUR: 0, note: 'Usually free; costs may arise if an associação/gabinete handles everything.' },
    { label: 'Assistance from an associação agrícola with the Pedido Único', amountEURMin: 25, amountEURMax: 150, note: 'A guide figure for a micro-application; depends on the region, number of parcelas and membership.' },
    { label: 'Realistic annual payment to a micro-holding', amountEURMin: 500, amountEURMax: 3000, note: 'Not an IFAP tariff, but a practical order of magnitude for small plots; the actual amount is calculated under PEPAC.' },
    { label: 'Produção biológica certification', amountEURMin: 150, amountEURMax: 500, note: 'Per year for a small producer; the price depends on the entidade certificadora and crops.' }
  ],
  sources: [
    { title: 'IFAP — Official portal: Pedido Único and PEPAC apoios', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'PEPAC Portugal 2023-2027 — CAP Strategic Plan', url: 'https://www.pepacc.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGADR — Estatuto da Agricultura Familiar', url: 'https://www.dgadr.gov.pt/agricultura-familiar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 64/2018 — Estatuto da Agricultura Familiar', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/64-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

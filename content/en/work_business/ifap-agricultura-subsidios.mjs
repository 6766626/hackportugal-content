export default {
  editorialVoice: 'hackportugal',
  id: 'ifap-agricultura-subsidios',
  categoryId: 'work_business',
  title: 'IFAP: PEPAC subsidies for micro-farmers and agricultor familiar',
  tldr: 'IFAP pays agricultural subsidies under PEPAC 2023-2027: basic/ecological payments, apoios associados and schemes for small holdings. For an expat with a plot this is not “money for land”: you need NIF, IBAN, IFAP beneficiário registration, parcelas in iSIP/parcelário, atividade agrícola and an annual Pedido Único. Realistically for a micro-holding — roughly €500–3,000 per year, but the amount depends on crops, hectares, animals and the rules of the year. Estatuto da Agricultura Familiar gives priorities and benefits, but requires family labour, income from agriculture and limits.',
  tags: ['ifap', 'pepac', 'farm', 'agriculture'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-ifap-pays',
      title: 'What IFAP actually pays',
      content: [
        { kind: 'paragraph', text: 'IFAP — Instituto de Financiamento da Agricultura e Pescas. PEPAC 2023-2027 payments go through it: CAP direct payments, environmental measures, area-based compensations, animals/crops and part of investment projects. For a small plot, what matters are not grants for a “dream in the countryside”, but the annual Pedido Único and correct farm registration.' },
        { kind: 'paragraph', text: 'A typical micro-farmer with a few hectares of olives, vineyard, orchard, pasture or a vegetable garden can see on the order of €500–3,000 a year. This is not a guaranteed rate: payments are calculated by eligible hectares, crop, region, rights/schemes, environmental commitments, animals and the budget of the specific campaign.' },
        { kind: 'checklist', items: [
          'PEPAC runs for the period 2023-2027; applications and payments proceed in annual campaigns',
          'The main form is the Pedido Único, submitted via the Portal do IFAP or an entidade reconhecida',
          'You need parcelas entered in iSIP/parcelário, with the correct crops and areas',
          'The land must be yours, leased or lawfully used; “the neighbour allowed it” without a document is risky',
          'For animals you need correct registrations in SNIRA/BDN and compliance with veterinary rules',
          'Selling produce requires an atividade opened in Finanças and proper invoices/faturas',
          'Subsidies can be checked on site and via satellite monitoring',
          'Errors in areas, crops or double-declaring land lead to reductions and repayments'
        ] }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can apply as an expat',
      content: [
        { kind: 'paragraph', text: 'Citizenship is usually not the key filter. It is more important to be identified in Portugal as a beneficiário IFAP, have a NIF, a bank account with an IBAN, access to the Portal do IFAP and the legal right to use agricultural land. For a resident with an autorização de residência, an EU citizen with a CRUE or an Lda company, the path is practically identical: first register the holding, then apply annually.' },
        { kind: 'checklist', items: [
          'NIF and access to Finanças; for online processes, Chave Móvel Digital or Cartão de Cidadão are convenient',
          'IBAN in the name of the applicant or company',
          'Document for the land: escritura/caderneta predial, lease agreement, comodato or outro título válido',
          'IFAP beneficiário registration and dados de identificação up to date',
          'Parcelário/iSIP: each agricultural area must be drawn and classified',
          'Atividade agrícola in Finanças, if there is regular sale of products or entrepreneurial activity',
          'NISS and Segurança Social — if you work as a trabalhador independente or hire workers',
          'No critical debts to the Autoridade Tributária and Segurança Social for many support measures',
          'For organics — a contrato with an entidade certificadora and compliance with the produção biológica regime'
        ] },
        { kind: 'warning', text: 'Buying a quinta or terreno rústico by itself does not grant an autorização de residência and does not create a right to subsidies. IFAP looks at actual agricultural exploitation, documents on the use of land and compliance with the campaign rules.' }
      ]
    },
    {
      id: 'register-ifap',
      title: 'How to register with IFAP and prepare your plot',
      content: [
        { kind: 'paragraph', text: 'A practical route for a beginner is not to try to fill in everything alone straight away, but to go to an associação agrícola, gabinete técnico or entidade reconhecida in your concelho. They know local crops, understand the parcelário and usually submit the Pedido Único for a small fee. But responsibility for the data remains with you.' },
        { kind: 'substeps', items: [
          { id: 'beneficiario', title: '1. Become a beneficiário IFAP', content: [
            { kind: 'paragraph', text: 'Registration creates your número de beneficiário/NIFAP and links your NIF, address, contacts and IBAN. Check that the name in IFAP matches the bank account and tax data.' }
          ] },
          { id: 'parcelario', title: '2. Enter the land in the parcelário/iSIP', content: [
            { kind: 'paragraph', text: 'Each parcela is drawn on the map, with the crop, area, use regime and boundaries indicated. For older quintas it often turns out that the cadastre, caderneta predial and the actual fence do not match — this must be resolved before applying.' }
          ] },
          { id: 'activity', title: '3. Sort out your tax status', content: [
            { kind: 'paragraph', text: 'If you sell olive oil, vegetables, eggs, honey or services, open an atividade in Finanças with an appropriate CAE/CIRS. Small turnover may qualify for IVA exemption under art. 53 CIVA if the annual limit of €15,000 is respected, but this does not cancel faturas and IRS.' }
          ] },
          { id: 'evidence', title: '4. Gather evidence of the holding', content: [
            { kind: 'checklist', items: [
              'caderneta predial rústica or a lease/comodato agreement',
              'parcel plans from iSIP',
              'photos of crops, trees, irrigation systems, pastures',
              'invoices for seeds, plants, feed, fertilisers, certification',
              'veterinary and SNIRA/BDN records for animals',
              'a contract with a lagar, adega, cooperativa or buyers, if any',
              'a produção biológica certificate if you claim organic measures'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'pedido-unico',
      title: 'The annual Pedido Único: where money is lost',
      content: [
        { kind: 'paragraph', text: 'The Pedido Único is an annual declaration/application for payments. The campaign usually opens at the beginning of the year and closes in spring; IFAP publishes the exact dates every year. In 2026, check the calendário da campanha on ifap.pt: being late or making corrections after the deadline may mean penalties, a reduction in payment or refusal.' },
        { kind: 'checklist', items: [
          'Check which parcelas are actually eligible: forest, yard, house, pool and roads are not paid as agricultural area',
          'Do not overstate hectares: satellite monitoring and checks quickly find discrepancies',
          'Indicate the correct crop: olival, vinha, frutos secos, pastagem permanente, hortícolas, etc.',
          'Reconcile obligations under eco-regimes: they can give a top-up but require evidence',
          'If you declare animals, check dates, numbers, movements and veterinary records',
          'Keep documents for at least several years: IFAP may request them after payment',
          'Calculate tax separately: subsidies may be income for IRS/IRC depending on your regime',
          'After submission, check mensagens/notificações in the Portal do IFAP, not just email'
        ] },
        { kind: 'warning', text: 'The most expensive mistake for beginners is to submit land that is actually used by a neighbour, tenant or previous owner. Double-declaring the same parcela almost always leads to conflict, blockage and checks.' }
      ]
    },
    {
      id: 'agricultor-familiar',
      title: 'Estatuto da Agricultura Familiar: why it matters',
      content: [
        { kind: 'paragraph', text: 'The Estatuto da Agricultura Familiar was created by Decreto-Lei 64/2018. This is not a separate “salary from the state”, but recognition of family farming. The title can give priority or more advantageous conditions in some PEPAC measures, rural development programmes, local markets, capacity building and administrative procedures.' },
        { kind: 'paragraph', text: 'Criteria are checked not by a pretty description of a quinta, but by income, family labour, holding registration and limits. In practice the title is useful for those who genuinely live off agriculture at least partially, not just those who own a country house with a garden.' },
        { kind: 'checklist', items: [
          'The applicant must be the titular de exploração agrícola familiar and of legal age',
          'The holding must be registered and identified in IFAP/parcelário',
          'Family labour must be a substantial part of the trabalho total da exploração',
          'The share of income from agriculture in the family income must meet the estatuto rules',
          'Family income and the volume of CAP direct payments must not exceed the established limits',
          'You need up-to-date data in Finanças and Segurança Social',
          'The reconhecimento title is usually requested online through the IFAP/DGADR ecosystem',
          'After recognition you need to maintain the criteria; if things change the title may not be renewed or may be annulled'
        ] },
        { kind: 'warning', text: 'Do not confuse agricultor familiar with an automatic special tax regime. IVA, IRS, Segurança Social, sanitary permits, licences for water/boreholes and the rules for selling products remain separate obligations.' }
      ]
    },
    {
      id: 'micro-farm-playbook',
      title: 'Working plan for a micro-holding for 2026',
      content: [
        { kind: 'paragraph', text: 'If you have only just bought or rented a plot, the goal of the first year is not the maximum subsidy but clean data. Fix the parcelário, legalise the use of the land, choose crops, open an atividade for sales and submit a tidy Pedido Único. Only after that does it make sense to add organics, animals, eco-regimes or investment projects.' },
        { kind: 'checklist', items: [
          'January–February: gather land documents, NIF, IBAN, access to the Portal do IFAP/Finanças',
          'February–March: go to an associação agrícola and check the parcelário/iSIP',
          'Before submitting the Pedido Único: decide which crops and areas to actually declare',
          'Spring: submit the Pedido Único within the 2026 campaign deadlines and keep the comprovativo',
          'Summer–autumn: respond to IFAP notifications, keep the plot in the declared condition',
          'For sales: emitir faturas, track expenses and account for subsidies for IRS',
          'Before new investments: check PEPAC avisos abertos, rather than buying equipment “for a future grant”',
          'If income from the holding becomes regular: check the Estatuto da Agricultura Familiar and Segurança Social'
        ] },
        { kind: 'warning', text: 'Grants for a tractor, irrigation, estufa or turismo rural are not the same procedure as annual direct payments. You usually need an aviso aberto, a business plan, orçamento, own financing and to wait for approval before spending. Purchases made before aprovação are often not reimbursed.' }
      ]
    }
  ],
  costs: [
    { label: 'IFAP beneficiário registration', amountEUR: 0, note: 'Usually free; there may be costs if everything is handled by an associação/gabinete.' },
    { label: 'Associação agrícola assistance with the Pedido Único', amountEURMin: 25, amountEURMax: 150, note: 'Benchmark for a micro-application; depends on the region, number of parcelas and membership.' },
    { label: 'Realistic annual payment for a micro-holding', amountEURMin: 500, amountEURMax: 3000, note: 'Not an IFAP tariff, but a practical order of magnitude for small plots; the actual amount is calculated under PEPAC.' },
    { label: 'Produção biológica certification', amountEURMin: 150, amountEURMax: 500, note: 'Per year for a small producer; the price depends on the entidade certificadora and crops.' }
  ],
  sources: [
    { title: 'IFAP — Official portal: Pedido Único and PEPAC supports', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'PEPAC Portugal 2023-2027 — Strategic Plan of the CAP', url: 'https://www.pepacc.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGADR — Estatuto da Agricultura Familiar', url: 'https://www.dgadr.gov.pt/estatuto-da-agricultura-familiar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 64/2018 — Estatuto da Agricultura Familiar', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/64-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

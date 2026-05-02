export default {
  editorialVoice: 'hackportugal',
  id: 'e-fatura-deductions',
  categoryId: 'taxes',
  title: 'e-Fatura: validating receipts and IRS tax deductions',
  tldr: 'e-Fatura is a section of Portal das Finanças where receipts with your NIF are collected. For IRS 2025, filed from 1 April to 30 June 2026, check and confirm invoices by 25 February 2026: without validation, some expenses will not be included in deductions. Main limits: general family expenses — 35% up to €250 per taxpayer, health — 15% up to €1,000, education — 30% up to €800, housing rent — 15% up to the established limit, IVA for restaurants/repairs/veterinary care/gyms — up to €250 per household.',
  tags: ['irs', 'efatura', 'deductions', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'What e-Fatura is and why it means money',
      content: [
        { kind: 'paragraph', text: 'e-Fatura links receipts and invoices to your NIF. When a shop, clinic, restaurant, school or landlord sends an invoice to Finanças, it appears in your personal area. This data is then automatically pulled into the IRS tax return.' },
        { kind: 'paragraph', text: 'For 2025 expenses, the key date is 25 February 2026: by then you need to confirm pending invoices, assign a category and correct errors. The IRS tax return for 2025 is filed from 1 April to 30 June 2026.' },
        { kind: 'checklist', items: [
          'Always ask for your NIF to be added to the receipt: “com número de contribuinte, por favor”.',
          'Check e-Fatura at least once a quarter, not only in February.',
          'Health, education, rent, restaurants, car/motorbike repairs, hairdressers, veterinary care and gyms are especially important.',
          'Receipts without a NIF usually do not provide IRS deductions.',
          'If an invoice is shown as “pendente”, it may not go into the correct category without your action.',
          'If you have children, check the e-Fatura of each member of the agregado familiar separately.'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'How to log in and what to check',
      content: [
        { kind: 'paragraph', text: 'Go to faturas.portaldasfinancas.gov.pt using your NIF + senha de acesso or Chave Móvel Digital (CMD). If you have a family, check the NIF of each adult and child: expenses are distributed across taxpayers.' },
        { kind: 'checklist', items: [
          'Open “Despesas dedutíveis em IRS” — the general deductions overview.',
          'Open “Verificar faturas” or “Complementar Informação Faturas” — the list of problematic invoices.',
          'Check whether there is any “pendente” status.',
          'Assign the expense sector: saúde, educação, habitação, lares, despesas gerais familiares or another one.',
          'For despesas mistas, indicate whether the purchase is related to professional activity.',
          'Save the changes and check the deductions summary page again.',
          'Download or save disputed receipts: pharmacies, schools, rent payments, large medical expenses.'
        ] },
        { kind: 'warning', text: 'The Finanças password does not arrive instantly: if you are a new resident with a NIF, request your senha de acesso in advance. In February, the portal may be slow due to high traffic.' }
      ]
    },
    {
      id: 'categories',
      title: 'IRS deduction categories in 2026',
      content: [
        { kind: 'paragraph', text: 'Below are the main deductions usually visible through e-Fatura and Portal das Finanças for the IRS tax return. Limits apply under the rules of the Código do IRS and may additionally be restricted by the overall deductions cap depending on household income.' },
        { kind: 'checklist', items: [
          'Despesas gerais familiares: 35% of expenses, maximum €250 per taxpayer; for a family with two adults, usually up to €500.',
          'Monoparental: for a single parent, the rate for general family expenses is 45%, maximum €335.',
          'Saúde: 15% of medical expenses, maximum €1,000 per household; expenses with 23% IVA usually require a receita médica.',
          'Educação e formação: 30% of expenses, overall limit €800; schools, universities, creche, livros escolares and formação with the correct CAE may qualify.',
          'Habitação — rendas: 15% of rent payments for permanent housing, if the contract is registered with Finanças and recibos de renda eletrónicos are issued.',
          'Lares: 25% of expenses for nursing homes and support for elderly relatives, with a separate limit.',
          'Exigência de fatura: part of the IVA on restaurants, alojamento, hairdressers, car/motorbike repairs, veterinary care, ginásios and monthly passes; the overall limit is usually €250 per household.'
        ] },
        { kind: 'warning', text: 'Having a receipt in e-Fatura does not mean the full amount will automatically be refunded. An IRS deduction reduces the tax payable; it does not reimburse the purchase cost. If little IRS was withheld, the actual refund may be lower than the visible limit.' }
      ]
    },
    {
      id: 'validate',
      title: 'Validation by 25 February: what to click',
      content: [
        { kind: 'substeps', items: [
          { id: 'pending', title: '1. Deal with “Faturas Pendentes”', content: [
            { kind: 'paragraph', text: 'Open each invoice with the pendente status. The system asks you to choose a sector because the seller has several types of activity or the data is incomplete.' },
            { kind: 'checklist', items: [
              'Pharmacy: choose saúde; if there is 23% IVA, tick that there is a receita médica only if one really exists.',
              'School, university, creche: choose educação if the supplier has a suitable CAE.',
              'Restaurant or café: usually restauração e alojamento for the deduction of part of the IVA.',
              'Workshop: manutenção e reparação de veículos automóveis or motociclos.',
              'Ginásio: atividades de clubes desportivos / ginásios, if the relevant sector is displayed.'
            ] }
          ] },
          { id: 'professional', title: '2. Mark professional expenses', content: [
            { kind: 'paragraph', text: 'If you are on recibos verdes or have an atividade aberta, some invoices may show the question “Âmbito da atividade profissional?”. For personal expenses, answer “Não”; for business expenses, answer “Sim” in full or in part if the portal offers a percentage.' }
          ] },
          { id: 'children', title: '3. Check children and spouse', content: [
            { kind: 'paragraph', text: 'Children’s expenses often go under the child’s NIF: escola, creche, explicações, saúde. Log in to each dependente’s e-Fatura with their NIF and Finanças password, or through representative access if it has been set up.' }
          ] }
        ] }
      ]
    },
    {
      id: 'missing-or-wrong',
      title: 'If a receipt is missing or the category is wrong',
      content: [
        { kind: 'paragraph', text: 'Sellers usually submit invoices by the 5th day of the following month, but delays happen. If the receipt is still missing by February, you can register it manually through “Registar Faturas”, but keep the original: Finanças may request proof.' },
        { kind: 'checklist', items: [
          'Check whether the NIF was printed correctly on the receipt.',
          'Compare the date, amount, seller’s NIF and invoice number.',
          'If the NIF was not added at payment, it usually cannot be corrected later through e-Fatura — ask the seller to cancel it and issue the correct invoice, if this is still possible.',
          'If the category is wrong, try changing it in “Complementar Informação”.',
          'If the portal does not let you choose educação/saúde, the problem may be the seller’s CAE; request a correct invoice or explanation from the supplier.',
          'For rent, check not e-Fatura but recibos de renda eletrónicos and the contrato de arrendamento in Portal das Finanças.',
          'After 25 February, corrections are more difficult: some data can be challenged later during the reclamação period, but it is better not to rely on this.'
        ] },
        { kind: 'warning', text: 'Do not manually add fictitious invoices or invoices already counted. Duplicates and unsubstantiated expenses may lead to an IRS correction, juros compensatórios and fines.' }
      ]
    },
    {
      id: 'irs-filing',
      title: 'How this goes into the IRS tax return',
      content: [
        { kind: 'paragraph', text: 'After e-Fatura closes, Finanças calculates deduções à coleta. Before filing IRS, check the “Despesas para Deduções à Coleta” page and then Modelo 3 or IRS Automático, if it is available to you.' },
        { kind: 'checklist', items: [
          'By 15 March, the final deduction amounts usually become visible.',
          'From 15 to 31 March, you can usually reclamar despesas gerais familiares and exigência de fatura if the amounts are wrong.',
          'From 1 April to 30 June 2026, the IRS tax return for 2025 is filed.',
          'Before submitting the return, simulate the result: “Simular”.',
          'Compare tributação conjunta and separada if you are married or in união de facto.',
          'If you recently moved, check tax residence: a Portugal resident declares worldwide income, while a non-resident declares only Portuguese income.',
          'Save the filing confirmation and liquidação IRS when it appears.'
        ] },
        { kind: 'warning', text: 'e-Fatura does not replace a tax review of the return. For expat situations — foreign income, remote work, IFICI, crypto, property sale, dual residence — it is better to check Modelo 3 and anexos separately.' }
      ]
    }
  ],
  costs: [
    { label: 'Access to e-Fatura', amountEUR: 0, note: 'Free through Portal das Finanças.' },
    { label: 'Senha de acesso Finanças', amountEUR: 0, note: 'Requested free of charge; the letter arrives at the tax address.' },
    { label: 'Chave Móvel Digital', amountEUR: 0, note: 'Free digital authentication if you have a suitable document and an active phone number.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — e-Fatura',
      url: 'https://faturas.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — e-Fatura Manual',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Manual_e-Fatura.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — deduções à coleta',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

export default {
  editorialVoice: 'hackportugal',
  id: 'e-fatura-deductions',
  categoryId: 'taxes',
  title: 'e-Fatura: validating receipts and IRS tax deductions',
  tldr: 'e-Fatura is a section of Portal das Finanças where receipts with your NIF are collected. For IRS 2025, filed from 1 April to 30 June 2026, check and confirm invoices by 25 February 2026: without validation, some expenses will not be included in deductions. Main limits: general family expenses — 35% up to €250 per taxpayer, healthcare — 15% up to €1,000, education — 30% up to €800, housing rent — 15% up to the set limit, IVA on restaurants/repairs/vets/gyms — up to €250 per household.',
  tags: ['irs', 'efatura', 'deductions', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'What e-Fatura is and why it means money',
      content: [
        { kind: 'paragraph', text: 'e-Fatura links receipts and invoices to your NIF. When a shop, clinic, restaurant, school or landlord sends an invoice to Finanças, it appears in your personal area. This data is then automatically pulled into the IRS tax return.' },
        { kind: 'paragraph', text: 'For 2025 expenses, the key date is 25 February 2026: by then you must confirm pending invoices, assign a category and correct errors. The IRS return for 2025 is filed from 1 April to 30 June 2026.' },
        { kind: 'checklist', items: [
          'Always ask for your NIF to be added to the receipt: “com número de contribuinte, por favor”.',
          'Check e-Fatura at least once a quarter, not only in February.',
          'Healthcare, education, rent, restaurants, car/motorbike repairs, hairdressers, vets and gyms are especially important.',
          'Receipts without a NIF usually do not provide IRS deductions.',
          'If an invoice is shown as “pendente”, it may not enter the correct category without your action.',
          'If you have children, check the e-Fatura of each member of the agregado familiar separately.'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'How to log in and what to check',
      content: [
        { kind: 'paragraph', text: 'Go to faturas.portaldasfinancas.gov.pt using NIF + senha de acesso or Chave Móvel Digital (CMD). If you have a family, check the NIF of each adult and child: expenses are allocated by taxpayer.' },
        { kind: 'checklist', items: [
          'Open “Despesas dedutíveis em IRS” — the overall deductions overview.',
          'Open “Verificar faturas” or “Complementar Informação Faturas” — the list of problematic invoices.',
          'Check whether there is any “pendente” status.',
          'Assign the expense sector: saúde, educação, habitação, lares, despesas gerais familiares or another one.',
          'For despesas mistas, state whether the purchase is connected to professional activity.',
          'Save the changes and check the final deductions page again.',
          'Download or save disputed receipts: pharmacies, schools, rent payments, large medical expenses.'
        ] },
        { kind: 'warning', text: 'The Finanças password does not arrive instantly: if you are a new resident with a NIF, request the senha de acesso in advance. In February, due to high demand, the portal may run slowly.' }
      ]
    },
    {
      id: 'categories',
      title: 'IRS deduction categories in 2026',
      content: [
        { kind: 'paragraph', text: 'Below are the main deductions usually visible through e-Fatura and Portal das Finanças for the IRS return. Limits apply under the rules of the Código do IRS and may also be restricted by an overall deductions cap depending on household income.' },
        { kind: 'checklist', items: [
          'Despesas gerais familiares: 35% of expenses, maximum €250 per taxpayer; for a family with two adults, usually up to €500.',
          'Monoparental: for a single parent, the rate for general family expenses is 45%, maximum €335.',
          'Saúde: 15% of medical expenses, maximum €1,000 per household; expenses with IVA 23% usually require a receita médica.',
          'Educação e formação: 30% of expenses, overall limit €800; schools, universities, creche, livros escolares and formação with the correct CAE qualify.',
          'Habitação — rendas: 15% of rent payments for permanent housing, if the contract is registered with Finanças and recibos de renda eletrónicos are issued.',
          'Lares: 25% of expenses for care homes and support for elderly relatives, with a separate limit.',
          'Exigência de fatura: part of the IVA on restaurants, alojamento, hairdressers, car/motorbike repairs, vets, ginásios and mensal passes; the overall limit is usually €250 per household.'
        ] },
        { kind: 'warning', text: 'Having a receipt in e-Fatura does not mean the whole amount will be refunded automatically. An IRS deduction reduces tax payable; it does not refund the cost of the purchase. If little IRS was withheld, the actual refund may be lower than the visible limit.' }
      ]
    },
    {
      id: 'validate',
      title: 'Validation by 25 February: what to click',
      content: [
        { kind: 'substeps', items: [
          { id: 'pending', title: '1. Sort out “Faturas Pendentes”', content: [
            { kind: 'paragraph', text: 'Open each invoice with the pendente status. The system asks you to choose a sector because the seller has several types of activity or the data is incomplete.' },
            { kind: 'checklist', items: [
              'Pharmacy: choose saúde; if there is IVA 23%, mark that you have a receita médica only if you genuinely have one.',
              'School, universidade, creche: choose educação if the provider has an appropriate CAE.',
              'Restaurant or café: usually restauração e alojamento for the deduction of part of the IVA.',
              'Workshop: manutenção e reparação de veículos automóveis or motociclos.',
              'Ginásio: atividades de clubes desportivos / ginásios, if the corresponding sector is displayed.'
            ] }
          ] },
          { id: 'professional', title: '2. Mark professional expenses', content: [
            { kind: 'paragraph', text: 'If you are on recibos verdes or have atividade aberta, some invoices may ask “Âmbito da atividade profissional?”. For personal expenses answer “Não”; for business expenses answer “Sim” fully or partially, if the portal offers a proportion.' }
          ] },
          { id: 'children', title: '3. Check children and spouse', content: [
            { kind: 'paragraph', text: 'Children’s expenses often go to the child’s NIF: escola, creche, explicações, saúde. Log in to each dependente’s e-Fatura with their NIF and Finanças password, or through representative access if it has been set up.' }
          ] }
        ] }
      ]
    },
    {
      id: 'missing-or-wrong',
      title: 'If the receipt is missing or the category is wrong',
      content: [
        { kind: 'paragraph', text: 'Sellers usually submit invoices by the 5th day of the following month, but delays happen. If the receipt is still missing by February, you can register it manually via “Registar Faturas”, but keep the original: Finanças may request proof.' },
        { kind: 'checklist', items: [
          'Check whether the NIF was printed correctly on the receipt.',
          'Compare the date, amount, seller’s NIF and invoice number.',
          'If the NIF was not added at payment, you usually cannot correct it later through e-Fatura — ask the seller to cancel and issue the correct invoice, if this is still possible.',
          'If the category is wrong, try changing it in “Complementar Informação”.',
          'If the portal does not allow you to choose educação/saúde, the issue may be the seller’s CAE; ask the provider for a correct invoice or an explanation.',
          'For rent, check not e-Fatura but recibos de renda eletrónicos and contrato de arrendamento in Portal das Finanças.',
          'After 25 February, corrections are harder: some data can be disputed later during the reclamação period, but it is better not to rely on this.'
        ] },
        { kind: 'warning', text: 'Do not manually add fictitious invoices or invoices already recorded. Duplicates and unconfirmed expenses may lead to an IRS adjustment, juros compensatórios and fines.' }
      ]
    },
    {
      id: 'irs-filing',
      title: 'How this gets into the IRS return',
      content: [
        { kind: 'paragraph', text: 'After e-Fatura closes, Finanças calculates deduções à coleta. Before filing IRS, check the “Despesas para Deduções à Coleta” page and then Modelo 3 or IRS Automático, if available to you.' },
        { kind: 'checklist', items: [
          'By 15 March, the final deduction amounts usually become visible.',
          'From 15 to 31 March, you can usually reclamar despesas gerais familiares and exigência de fatura if the amounts are incorrect.',
          'From 1 April to 30 June 2026, the IRS return for 2025 is filed.',
          'Before submitting the return, simulate the result: “Simular”.',
          'Compare tributação conjunta and separada if you are married or in união de facto.',
          'If you have recently moved, check tax residence: a Portugal resident declares worldwide income; a non-resident declares only Portuguese income.',
          'Save the filing confirmation and liquidação IRS when it appears.'
        ] },
        { kind: 'warning', text: 'e-Fatura does not replace a tax check of the return. For expat situations — foreign income, remote work, IFICI, crypto, sale of property, dual residence — it is better to check Modelo 3 and anexos separately.' }
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
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/efatura_portal.pdf',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}

export default {
  editorialVoice: 'hackportugal',
  id: 'e-fatura-deductions',
  categoryId: 'taxes',
  title: 'e-Fatura: validating invoices and IRS tax deductions',
  tldr: 'e-Fatura is the section of the Portal das Finanças where invoices with your NIF are collected. For IRS 2025, filed from 1 April to 30 June 2026, review and confirm invoices by 25 February 2026: without validation, part of the expenses will not be included in the deductions. Main caps: general family expenses — 35% up to €250 per taxpayer, healthcare — 15% up to €1,000, education — 30% up to €800, rent — 15% up to the statutory cap, IVA on restaurants/repairs/veterinary/gyms — up to €250 per household.',
  tags: ['irs', 'e-fatura', 'deductions', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'What e-Fatura is and why this is money',
      content: [
        { kind: 'paragraph', text: 'e-Fatura links receipts and invoices to your NIF. When a shop, clinic, restaurant, school or landlord submits an invoice to Finanças, it appears in your personal area. This data is then automatically pulled into your IRS return.' },
        { kind: 'paragraph', text: 'For 2025 expenses the key date is 25 February 2026: by then you need to confirm any pending invoices, assign a category and correct errors. The IRS return for 2025 is filed from 1 April to 30 June 2026.' },
        { kind: 'checklist', items: [
          'Always ask to add your NIF to the receipt: “com número de contribuinte, por favor”.',
          'Check e-Fatura at least once a quarter, not only in February.',
          'Particularly important are healthcare, education, rent, restaurants, car/motorbike repairs, hairdressers, veterinary, gyms.',
          'Receipts without a NIF usually do not give IRS deductions.',
          'If an invoice shows as “pendente”, it may not fall into the correct category without your action.',
          'If you have children, check e-Fatura for each member of the agregado familiar separately.'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'How to log in and what to check',
      content: [
        { kind: 'paragraph', text: 'Go to faturas.portaldasfinancas.gov.pt via NIF + senha de acesso or Chave Móvel Digital (CMD). If you have a family, check the NIF of every adult and child: expenses are allocated per taxpayer.' },
        { kind: 'checklist', items: [
          'Open “Despesas dedutíveis em IRS” — the overall overview of deductions.',
          'Open “Verificar faturas” or “Complementar Informação Faturas” — the list of problematic invoices.',
          'Check whether any status reads “pendente”.',
          'Assign the expense sector: saúde, educação, habitação, lares, despesas gerais familiares or another.',
          'For despesas mistas indicate whether the purchase is connected to professional activity.',
          'Save changes and check the final deductions page again.',
          'Download or save contentious receipts: pharmacies, schools, rent payments, large medical expenses.'
        ] },
        { kind: 'warning', text: 'The Finanças password does not arrive instantly: if you are a new resident with a NIF, request the senha de acesso in advance. In February, due to high load the portal may be slow.' }
      ]
    },
    {
      id: 'categories',
      title: 'IRS deduction categories in 2026',
      content: [
        { kind: 'paragraph', text: 'Below are the main deductions that are usually visible via e-Fatura and the Portal das Finanças for the IRS return. Caps apply under the rules of the Código do IRS and may also be limited by the overall ceiling on deductions depending on the household’s income.' },
        { kind: 'checklist', items: [
          'Despesas gerais familiares: 35% of expenses, maximum €250 per taxpayer; for a family with two adults usually up to €500.',
          'Monoparental: for a single parent the rate for general family expenses is 45%, maximum €335.',
          'Saúde: 15% of healthcare expenses, maximum €1,000 per household; expenses with IVA at 23% usually require a prescription.',
          'Educação e formação: 30% of expenses, overall cap €800; eligible are schools, universities, creche, livros escolares, formação with the correct CAE.',
          'Habitação — rendas: 15% of rent payments for primary residence, if the contract is registered with Finanças and recibos de renda eletrónicos are issued.',
          'Lares: 25% of expenses for care homes and support to elderly relatives, with a separate cap.',
          'Exigência de fatura: part of the IVA on restaurants, alojamento, hairdressers, car/motorbike repair, veterinary, ginásios and mensal passes; the overall cap is usually €250 per household.'
        ] },
        { kind: 'warning', text: 'Having an invoice in e-Fatura does not mean an automatic refund of the whole amount. An IRS deduction reduces tax due; it does not refund the purchase price. If little IRS was withheld, the actual refund may be lower than the visible cap.' }
      ]
    },
    {
      id: 'validate',
      title: 'Validation by 25 February: what to click',
      content: [
        { kind: 'substeps', items: [
          { id: 'pending', title: '1. Clear “Faturas Pendentes”', content: [
            { kind: 'paragraph', text: 'Open each invoice with status pendente. The system asks you to choose a sector because the seller has several activity types or the data is incomplete.' },
            { kind: 'checklist', items: [
              'Pharmacy: choose saúde; if there is IVA at 23%, tick that there is a prescription only if one actually exists.',
              'School, universidade, creche: choose educação if the supplier has an appropriate CAE.',
              'Restaurant or café: usually restauração e alojamento for the deduction of part of the IVA.',
              'Oficina: manutenção e reparação de veículos automóveis ou motociclos.',
              'Ginásio: atividades de clubes desportivos / ginásios, if the corresponding sector is shown.'
            ] }
          ] },
          { id: 'professional', title: '2. Mark professional expenses', content: [
            { kind: 'paragraph', text: 'If you are on recibos verdes or have an atividade aberta, some invoices may ask “Âmbito da atividade profissional?”. For personal expenses answer “Não”; for business expenses answer “Sim” in full or partially if the portal offers a split.' }
          ] },
          { id: 'children', title: '3. Check children and spouse', content: [
            { kind: 'paragraph', text: 'Children’s expenses often appear under the child’s NIF: escola, creche, explicações, saúde. Log in to each dependent’s e-Fatura with their NIF and Finanças password or via representative access if it is set up.' }
          ] }
        ] }
      ]
    },
    {
      id: 'missing-or-wrong',
      title: 'If an invoice is missing or the category is wrong',
      content: [
        { kind: 'paragraph', text: 'Sellers usually submit invoices by the 5th of the following month, but delays happen. If by February an invoice is missing, you can register it manually via “Registar Faturas”, but keep the original: Finanças may request proof.' },
        { kind: 'checklist', items: [
          'Check whether the NIF was printed on the receipt correctly.',
          'Compare the date, amount, seller’s NIF and the invoice number.',
          'If the NIF was not added at payment, it is usually not possible to fix it later via e-Fatura — ask the seller to cancel and issue the correct invoice if this is still possible.',
          'If the category is wrong, try to change it in “Complementar Informação”.',
          'If the portal does not let you choose educação/saúde, the issue may be the seller’s CAE; ask the supplier for a correct invoice or an explanation.',
          'For rent check not e-Fatura, but the recibos de renda eletrónicos and the contrato de arrendamento in the Portal das Finanças.',
          'After 25 February corrections are harder: some data can be disputed later in the reclamação period, but it is better not to rely on this.'
        ] },
        { kind: 'warning', text: 'Do not add fictitious or already accounted invoices manually. Duplicates and unsubstantiated expenses may lead to an IRS adjustment, juros compensatórios and fines.' }
      ]
    },
    {
      id: 'irs-filing',
      title: 'How this flows into the IRS return',
      content: [
        { kind: 'paragraph', text: 'After e-Fatura closes, Finanças calculates the deduções à coleta. Before filing IRS, check the “Despesas para Deduções à Coleta” page and then Modelo 3 or IRS Automático, if it is available to you.' },
        { kind: 'checklist', items: [
          'By 15 March the final deduction amounts usually become visible.',
          'From 15 to 31 March you can usually reclamar despesas gerais familiares and exigência de fatura if the amounts are incorrect.',
          'From 1 April to 30 June 2026 you file IRS for 2025.',
          'Before submitting the return, simulate the result: “Simular”.',
          'Compare tributação conjunta and separada if you are married or in união de facto.',
          'If you have moved recently, check your tax residency: a Portugal resident declares worldwide income, a non-resident only Portuguese-source income.',
          'Save the submission confirmation and the liquidação IRS when it appears.'
        ] },
        { kind: 'warning', text: 'e-Fatura does not replace a proper review of the tax return. For expat scenarios — foreign-source income, remote work, IFICI, crypto, property disposals, dual residency — it is better to review Modelo 3 and annexes separately.' }
      ]
    }
  ],
  costs: [
    { label: 'Access to e-Fatura', amountEUR: 0, note: 'Free via the Portal das Finanças.' },
    { label: 'Senha de acesso Finanças', amountEUR: 0, note: 'Requested free of charge; the letter arrives at the tax address.' },
    { label: 'Chave Móvel Digital', amountEUR: 0, note: 'Free digital authentication, if you have an appropriate document and an active phone number.' }
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
      title: 'Tax Authority — e-Fatura manual',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/efatura_portal.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS Code — deductions to be offset against tax',
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

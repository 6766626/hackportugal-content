export default {
  editorialVoice: 'hackportugal',
  id: 'fne-financas-novo-extrato',
  categoryId: 'documents_fiscal',
  title: 'Obtaining Finanças certificates: IRS, IUC, IMI, dividends and no-debt',
  tldr: 'In the Portal das Finanças you can obtain AT tax certificates free or for a small fee: declaração de não-dívida, certidão de IRS, IUC, IMI, comprovativo de morada fiscal and income statements, including dividends. Path: Portal das Finanças → Cidadãos → Serviços → Certidões. Most PDFs are issued instantly and cost €0; some certidões may cost up to €10. Validity depends on the type: não-dívida is usually 3 months; many recipients accept the other certificates no older than 6 months.',
  tags: ['finanças', 'certificates', 'irs', 'imi', 'iuc'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-you-can-get',
      title: 'Which certificates are available in Finanças',
      content: [
        { kind: 'paragraph', text: 'The Portal das Finanças is the main source of official tax certificates from the Autoridade Tributária e Aduaneira (AT). PDFs with a verification code are usually accepted by banks, the Câmara Municipal, AIMA, employers, universities, insurers and landlords.' },
        { kind: 'checklist', items: [
          'Declaração de situação tributária regularizada / certidão de não-dívida — confirmation that you have no overdue tax debts to the AT.',
          'Certidão de IRS — statement regarding filed IRS returns, assessment (liquidação) or income for a specific year.',
          'Comprovativo de entrega da declaração IRS — confirmation that the IRS Modelo 3 return was submitted.',
          'Demonstração de liquidação IRS — the IRS tax calculation: income, deductions, withholdings, amount payable or refundable.',
          'Certidão de domicílio fiscal / comprovativo de morada fiscal — your official tax address in Portugal.',
          'Certidão de teor matricial / IMI — property data: artigo matricial, valor patrimonial tributário (VPT), freguesia, owner.',
          'Certidão IUC — information on the IUC vehicle tax and cars linked to your NIF.',
          'Certidão de rendimentos — proof of income, including IRS categories; dividends are usually shown as rendimentos de capitais, category E, if they were declared or reported to the AT.'
        ] }
      ]
    },
    {
      id: 'login',
      title: 'Logging in to the Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Go to portaldasfinancas.gov.pt. You need a NIF and one of the login methods: Finanças password, Chave Móvel Digital (CMD), or Cartão de Cidadão with PIN and card reader.' },
        { kind: 'checklist', items: [
          'Make sure you have an active NIF.',
          'If you do not have a Finanças password, request it on the portal; the letter usually arrives at your tax address.',
          'If you have a residence permit and a Portuguese phone number, it is more convenient to enable Chave Móvel Digital.',
          'Ensure your morada fiscal is up to date: many certificates rely on the tax address.',
          'Disable the browser’s auto-translator if portal buttons start behaving incorrectly.',
          'Download PDFs immediately: some pages do not restore the result after your session ends.'
        ] },
        { kind: 'warning', text: 'Having a NIF by itself does not mean you are a tax resident. The comprovativo de morada fiscal shows the address held by the AT, but for a bank or a foreign tax authority you may need a separate certidão de residência fiscal.' }
      ]
    },
    {
      id: 'path-certidoes',
      title: 'Where to find the Certidões section',
      content: [
        { kind: 'paragraph', text: 'Standard path in 2026: Portal das Finanças → Cidadãos → Serviços → Certidões. Menu labels on the portal sometimes change, so it is quicker to use the search bar with terms like “certidão”, “não dívida”, “domicílio fiscal”, “IRS”, “IUC”, “IMI”.' },
        { kind: 'substeps', items: [
          {
            id: 'non-debt',
            title: 'No-debt certificate',
            content: [
              { kind: 'paragraph', text: 'Look for “Situação Tributária Regularizada” or “Certidão de dívida e não dívida”. Choose emissão, confirm the request and download the PDF.' },
              { kind: 'warning', text: 'Declaração de não-dívida is usually valid for 3 months, not 6. If a bank, AIMA or Câmara asks for a “certidão recente”, it is best to issue it again 1–7 days before submission.' }
            ]
          },
          {
            id: 'irs',
            title: 'IRS and income',
            content: [
              { kind: 'paragraph', text: 'For IRS, use the sections IRS → Consultar Declaração, Obter Comprovativo, Liquidação or Certidões. For dividend income, look for rendimentos certificates, or download the IRS Modelo 3 return + Anexo E and the demonstração de liquidação for the required year.' }
            ]
          },
          {
            id: 'imi-iuc',
            title: 'IMI and IUC',
            content: [
              { kind: 'paragraph', text: 'For property, look for “Património”, “Prédios”, “Caderneta Predial” or “Certidão de teor matricial”. For vehicles, look for “Veículos”, “IUC” and tax comprovativos/certidões.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'documents-by-purpose',
      title: 'What to download for different situations',
      content: [
        { kind: 'paragraph', text: 'Recipients often word requests vaguely: “tax certificate”, “proof of address”, “IRS statement”. It is better to confirm the Portuguese document name and the tax year.' },
        { kind: 'checklist', items: [
          'For a bank when opening an account: comprovativo de morada fiscal, declaração de IRS, or a certidão de residência fiscal if the bank verifies tax residence.',
          'For a mortgage: IRS Modelo 3 for the last 1–2 years, demonstração de liquidação, declaração de não-dívida, and the caderneta predial if you own property.',
          'For AIMA: they sometimes ask for declaração de IRS, comprovativo de atividade, não-dívida, or proof of income; requirements depend on the type of residence permit.',
          'For renting: the comprovativo de morada fiscal usually does not prove the right to live in a flat; the landlord may ask for the contrato de arrendamento and IRS.',
          'For selling/buying property: caderneta predial, IMI, VPT, certidão permanente predial from the Conservatória — this is a separate document, not only from Finanças.',
          'For a car: IUC comprovativo, vehicle data and no outstanding IUC debts.',
          'For foreign tax authorities: you often need a certidão de residência fiscal, sometimes indicating the year and the applicable convenção para evitar dupla tributação.',
          'For dividends: take IRS Anexo E, declaração de rendimentos and your broker’s documents; Finanças does not automatically see all foreign payments.'
        ] }
      ]
    },
    {
      id: 'validity-and-costs',
      title: 'Validity, cost and PDF verification',
      content: [
        { kind: 'paragraph', text: 'Most electronic certificates in the Portal das Finanças are issued instantly in PDF and are free. If the system shows emolumentos or a taxa, you can pay via referência Multibanco/MB WAY, after which the document becomes available.' },
        { kind: 'checklist', items: [
          'Typical cost: €0 for most comprovativos and certidões downloaded online.',
          'Some certidões or certified variants may cost up to €10.',
          'Validity is not universal: check the “validade” field in the PDF.',
          'Não-dívida is usually valid for 3 months.',
          'For IRS, IMI, IUC and morada fiscal, many organisations require a document no older than 3–6 months, even if the PDF has no explicit expiry.',
          'A PDF from the Portal das Finanças usually contains a código de validação; the recipient can verify authenticity online.',
          'If you need the document in English, the AT usually does not translate it automatically: get a tradução certificada from a translator if the recipient does not accept PT.',
          'If the data are incorrect, first correct the underlying record: morada fiscal, IRS declaration, registo do imóvel or veículo; the new certidão will pull the updated data.'
        ] },
        { kind: 'warning', text: 'Do not send your full IRS to third parties unless necessary: it contains your NIF, address, income, withholdings, marital status and bank details for refunds. For rentals or school, sometimes the first page or a certidão específica is enough.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Common problems for expats',
      content: [
        { kind: 'checklist', items: [
          'Finanças password sent to an old address — update your morada fiscal or use CMD.',
          'The certificate shows a foreign address — this means your domicílio fiscal has not yet been changed to Portugal.',
          'No IRS for the previous year — you may not have been a tax resident or the return was not filed.',
          'Dividends not visible — a foreign broker may not have reported data to the AT; check Anexo E and CRS/withholding statements.',
          'Não-dívida not being issued — check pagamentos em falta, coimas, IMI, IUC, IVA, IRS, or whether the debt is in instalments (dívida em prestações).',
          'IMI certificate is empty — the property may be registered to another NIF, in an estate, or not yet updated after the transaction.',
          'IUC still linked to a sold car — check whether the buyer re-registered the veículo at the IRN/IMT; the tax is paid by the owner on the anniversary date of the registration (aniversário da matrícula).',
          'Recipient does not accept the PDF — send it together with the código de validação or ask them to specify the exact name of the required certidão.'
        ] },
        { kind: 'paragraph', text: 'If the online section does not work, you can open a pedido e-balcão in the Portal das Finanças: describe the document, tax year, NIF and purpose. For urgent cases, an appointment at a Serviço de Finanças can help, but for most certificates the AT expects you to obtain them online.' }
      ]
    }
  ],
  costs: [
    { label: 'Comprovativo de morada fiscal', amountEUR: 0, note: 'Usually downloaded free of charge in the Portal das Finanças.' },
    { label: 'Declaração de não-dívida / situação tributária regularizada', amountEUR: 0, note: 'Electronic issuance is usually free; validity is typically 3 months.' },
    { label: 'IRS comprovativo / liquidação', amountEUR: 0, note: 'Available online for filed returns and years with data in the AT.' },
    { label: 'Individual AT certificates', amountEURMin: 0, amountEURMax: 10, note: 'The cost depends on the type of certificate and issuance method; the portal will show the amount before confirmation.' }
  ],
  sources: [
    { title: 'Portal das Finanças — login and services of the Autoridade Tributária', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — Cidadãos / Serviços / Certidões section', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — services and contacts of the Autoridade Tributária e Aduaneira', url: 'https://eportugal.gov.pt/entidades/autoridade-tributaria-e-aduaneira', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}

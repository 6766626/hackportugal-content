export default {
  editorialVoice: 'hackportugal',
  id: 'fne-financas-novo-extrato',
  categoryId: 'documents_fiscal',
  title: 'Getting certificates from Finanças: IRS, IUC, IMI, dividends and no debts',
  tldr: 'In Portal das Finanças you can obtain AT tax certificates free of charge or for a small fee: declaração de não-dívida, certidão de IRS, IUC, IMI, comprovativo de morada fiscal and income certificates, including dividends. Path: Portal das Finanças → Cidadãos → Serviços → Certidões. Most PDFs are issued immediately and cost €0; some certidões can cost up to €10.\n\nValidity depends on the type: não-dívida is usually 3 months, while many recipients accept other certificates no older than 6 months.',
  tags: ['finanças', 'certificates', 'irs', 'imi', 'iuc'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-you-can-get',
      title: 'Which certificates are available in Finanças',
      content: [
        { kind: 'paragraph', text: 'Portal das Finanças is the main source of official tax certificates from Autoridade Tributária e Aduaneira (AT). PDFs with a verification code are usually accepted by banks, Câmara Municipal, AIMA, employers, universities, insurers and landlords.' },
        { kind: 'checklist', items: [
          'Declaração de situação tributária regularizada / certidão de não-dívida — confirmation that you have no overdue tax debts to AT.',
          'Certidão de IRS — a certificate for submitted IRS returns, liquidação or income for a specific year.',
          'Comprovativo de entrega da declaração IRS — confirmation that the IRS Modelo 3 return was submitted.',
          'Demonstração de liquidação IRS — IRS tax calculation: income, deductions, withholdings, amount payable or refund.',
          'Certidão de domicílio fiscal / comprovativo de morada fiscal — the official tax address in Portugal.',
          'Certidão de teor matricial / IMI — property data: artigo matricial, valor patrimonial tributário (VPT), freguesia, owner.',
          'Certidão IUC — data on IUC vehicle tax and vehicles linked to your NIF.',
          'Certidão de rendimentos — confirmation of income, including IRS categories; dividends are usually shown as rendimentos de capitais, categoria E, if they were declared or reported to AT.'
        ] }
      ]
    },
    {
      id: 'login',
      title: 'Logging in to Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Go to portaldasfinancas.gov.pt. You need a NIF and one of the login methods: Finanças password, Chave Móvel Digital (CMD) or Cartão de Cidadão with PIN and card reader.' },
        { kind: 'checklist', items: [
          'Check that you have an active NIF.',
          'If you do not have a Finanças password, request it on the portal; the letter usually arrives at your tax address.',
          'If you have a residence permit and a Portuguese telephone number, it is more convenient to activate Chave Móvel Digital.',
          'Make sure your morada fiscal is up to date: many certificates are tied to the tax address.',
          'Disable the browser’s automatic translation if the portal buttons start working incorrectly.',
          'Download PDFs immediately: some pages do not restore the result after you log out of the session.'
        ] },
        { kind: 'warning', text: 'Having a NIF does not in itself mean tax residence. Comprovativo de morada fiscal shows the address in AT, but a bank or foreign tax authority may sometimes require a separate certidão de residência fiscal.' }
      ]
    },
    {
      id: 'path-certidoes',
      title: 'Where to find the Certidões section',
      content: [
        { kind: 'paragraph', text: 'The standard path in 2026 is: Portal das Finanças → Cidadãos → Serviços → Certidões. On the portal, menu item names sometimes change, so it is quicker to use the search bar with words such as “certidão”, “não dívida”, “domicílio fiscal”, “IRS”, “IUC”, “IMI”.' },
        { kind: 'substeps', items: [
          {
            id: 'non-debt',
            title: 'Certificate of no debts',
            content: [
              { kind: 'paragraph', text: 'Search for “Situação Tributária Regularizada” or “Certidão de dívida e não dívida”. Choose emissão, confirm the request and download the PDF.' },
              { kind: 'warning', text: 'Declaração de não-dívida is usually valid for 3 months, not 6. If a bank, AIMA or Câmara asks for a “certidão recente”, it is better to issue it again 1–7 days before submission.' }
            ]
          },
          {
            id: 'irs',
            title: 'IRS and income',
            content: [
              { kind: 'paragraph', text: 'For IRS, use the IRS → Consultar Declaração, Obter Comprovativo, Liquidação or Certidões sections. For dividend income, look for certificates relating to rendimentos or download the declaração IRS Modelo 3 + Anexo E and demonstração de liquidação for the relevant year.' }
            ]
          },
          {
            id: 'imi-iuc',
            title: 'IMI and IUC',
            content: [
              { kind: 'paragraph', text: 'For property, search for “Património”, “Prédios”, “Caderneta Predial” or “Certidão de teor matricial”. For cars, search for “Veículos”, “IUC” and tax comprovativos/certidões.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'documents-by-purpose',
      title: 'What to download for different situations',
      content: [
        { kind: 'paragraph', text: 'Recipients often phrase requests vaguely: “tax certificate”, “proof of address”, “IRS statement”. It is better to clarify the Portuguese name of the document and the tax year.' },
        { kind: 'checklist', items: [
          'For a bank when opening an account: comprovativo de morada fiscal, declaração de IRS or certidão de residência fiscal, if the bank checks tax residence.',
          'For a mortgage: IRS Modelo 3 for the last 1–2 years, demonstração de liquidação, declaração de não-dívida, caderneta predial if you own property.',
          'For AIMA: they sometimes ask for declaração de IRS, comprovativo de atividade, não-dívida or proof of income; requirements depend on the type of residence permit.',
          'For renting: comprovativo de morada fiscal usually does not prove the right to live in the flat; the landlord may ask for contrato de arrendamento and IRS.',
          'For selling/buying property: caderneta predial, IMI, VPT, certidão permanente predial from Conservatória — this is a separate document, not only Finanças.',
          'For a car: comprovativo IUC, vehicle details and no debts for IUC.',
          'For foreign tax authorities: certidão de residência fiscal is often required, sometimes specifying the year and the applicable convenção para evitar dupla tributação.',
          'For dividends: take Anexo E IRS, declaração de rendimentos and broker documents; Finanças does not automatically see all foreign payments.'
        ] }
      ]
    },
    {
      id: 'validity-and-costs',
      title: 'Validity, cost and PDF verification',
      content: [
        { kind: 'paragraph', text: 'Most electronic certificates in Portal das Finanças are issued immediately as PDFs and are free. If the system shows emolumentos or taxa, you can pay via referência Multibanco/MB WAY, after which the document becomes available.' },
        { kind: 'checklist', items: [
          'Usual cost: €0 for most comprovativos and certidões downloaded online.',
          'Some certidões or certified versions can cost up to €10.',
          'Validity is not universal: check the “validade” field in the PDF.',
          'Não-dívida is usually valid for 3 months.',
          'For IRS, IMI, IUC and morada fiscal, many organisations require a document no older than 3–6 months, even if the PDF has no explicit validity period.',
          'A PDF from Portal das Finanças usually contains a código de validação; the recipient can verify authenticity online.',
          'If the document is needed in English, AT usually does not translate it automatically: arrange a tradução certificada with a translator if the recipient does not accept PT.',
          'If the data is incorrect, first correct the source record: morada fiscal, IRS declaration, registo do imóvel or veículo; the new certidão will pull in the updated data.'
        ] },
        { kind: 'warning', text: 'Do not send a full IRS return to third parties unless necessary: it contains NIF, address, income, withholdings, marital status and bank details for the refund. For renting or school, the first page or a certidão específica is sometimes enough.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Common problems for expats',
      content: [
        { kind: 'checklist', items: [
          'The Finanças password was sent to an old address — update your morada fiscal or use CMD.',
          'The certificate shows a foreign address — this means your domicílio fiscal has not yet been changed to Portugal.',
          'There is no IRS for last year — you may not have been a tax resident or the return may not have been submitted.',
          'Dividends are not visible — a foreign broker may not have reported the data to AT; check Anexo E and CRS/withholding statements.',
          'Não-dívida is not issued — check pagamentos em falta, coimas, IMI, IUC, IVA, IRS or an instalment plan dívida em prestações.',
          'The IMI certificate is empty — the property may be registered under another NIF, in an estate, or not yet updated after the transaction.',
          'IUC remains attached to a sold car — check whether the buyer re-registered the veículo with IRN/IMT; the tax is paid by the owner on the aniversário da matrícula date.',
          'The recipient does not accept the PDF — send it together with the código de validação or ask them to specify the exact name of the required certidão.'
        ] },
        { kind: 'paragraph', text: 'If the online section does not work, you can open a pedido e-balcão in Portal das Finanças: describe the document, tax year, NIF and purpose. For urgent cases, an appointment at Serviço de Finanças helps, but AT expects most certificates to be obtained online.' }
      ]
    }
  ],
  costs: [
    { label: 'Comprovativo de morada fiscal', amountEUR: 0, note: 'Usually downloaded free of charge in Portal das Finanças.' },
    { label: 'Declaração de não-dívida / situação tributária regularizada', amountEUR: 0, note: 'Electronic issue is usually free; validity is usually 3 months.' },
    { label: 'IRS comprovativo / liquidação', amountEUR: 0, note: 'Available online for submitted returns and years with data in AT.' },
    { label: 'Individual AT certidões', amountEURMin: 0, amountEURMax: 10, note: 'The cost depends on the type of certificate and method of issue; the portal will show the amount before confirmation.' }
  ],
  sources: [
    { title: 'Portal das Finanças — login and Autoridade Tributária services', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — Cidadãos / Serviços / Certidões section', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Autoridade Tributária e Aduaneira services and contacts', url: 'https://www.gov.pt/entidades/autoridade-tributaria-e-aduaneira', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}

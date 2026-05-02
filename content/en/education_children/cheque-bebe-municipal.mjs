export default {
  editorialVoice: 'hackportugal',
  id: 'cheque-bebe-municipal',
  categoryId: 'education_children',
  title: 'Cheque-Bebé and municipal grants for newborns',
  tldr: 'Cheque-Bebé is not a national payment, but municipal support: a voucher or reimbursement of child-related expenses. In 2026 Cascais gives €500, Oeiras — €350, and in small municípios €250–1,000 is common. Applications are usually submitted to the Câmara Municipal within 6 months after birth or adoption. Key conditions: the child and at least one parent must have a NIF and actual residência fiscal/address in the município, with no debts to the Câmara or Finanças.',
  tags: ['cheque-bebé', 'municipality', 'children', 'câmara'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Cheque-Bebé is',
      content: [
        { kind: 'paragraph', text: 'Cheque-Bebé, Incentivo à Natalidade, Apoio à Natalidade or Bebé+ is a local payment from the Câmara Municipal. It is not a Segurança Social benefit and does not depend directly on your D1-D8 visa, AIMA residence permit or citizenship, unless the municipal rules introduce separate restrictions.' },
        { kind: 'paragraph', text: 'The format depends on the município: bank transfer, cartão/vale for purchases from local traders, reimbursement against recibos/faturas, or a mixed scheme. The money can usually be spent on children’s goods, pharmacy items, clothing, equipment, and sometimes saúde/educação services.' },
        { kind: 'checklist', items: [
          'Cascais: Cheque-Bebé €500 per child, under the municipal Cascais Baby programme.',
          'Oeiras: Apoio à Natalidade €350 per child.',
          'Small municípios: often €250–1,000, sometimes more for a 2nd/3rd child.',
          'The application deadline is most often 6 months after birth or adoption.',
          'This is a separate measure: it does not cancel abono de família, licença parental or IRS tax deductions.'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is usually eligible',
      content: [
        { kind: 'paragraph', text: 'The exact conditions are set out in the Regulamento Municipal of the specific Câmara. For expats, the main risk is not the amount but proving the link with the município: address, NIF, residência fiscal and no debts.' },
        { kind: 'checklist', items: [
          'The child was born or adopted, and there is an assento de nascimento / certidão de nascimento.',
          'At least one parent or legal representative lives in the município.',
          'The parent has a NIF; residência fiscal in this município at Finanças is often required.',
          'The child also has a NIF, or it must be obtained before the payment.',
          'The family is registered at the address: contrato de arrendamento, escritura, atestado de residência from the Junta de Freguesia or a utilities bill.',
          'There are no debts to the Câmara Municipal, municipal services and sometimes the Autoridade Tributária.',
          'The application is submitted on time: usually up to 6 months after birth, but in some municípios the deadline is 90 days or 12 months.',
          'Purchases, if reimbursement is required, were made after the child’s birth and issued as a fatura with the NIF of the applicant or the child.'
        ] },
        { kind: 'warning', text: 'Do not rely on “I live near Cascais/Oeiras”. Eligibility is usually tied to the specific município, not to the Greater Lisbon area. If your address is in Amadora, Sintra or Lisboa, the Cascais/Oeiras programme does not apply.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents: what to prepare in advance',
      content: [
        { kind: 'paragraph', text: 'The list varies slightly, but the basic pack is almost the same. It is better to collect it before the birth: after the maternity hospital, deadlines slip quickly, especially if you need to obtain the child’s NIF and certidão.' },
        { kind: 'checklist', items: [
          'Parent’s document: passport, Cartão de Cidadão, residence permit or other ID.',
          'NIF of the applicant parent.',
          'Child’s NIF: obtained at Finanças or through a representative if the child is still an infant.',
          'Certidão de nascimento / assento de nascimento of the child.',
          'Comprovativo de morada: atestado de residência from the Junta de Freguesia, tenancy agreement, escritura, água/luz/telecom bill.',
          'Comprovativo de residência fiscal from Portal das Finanças, if the Câmara requires it.',
          'Applicant’s IBAN, if payment is by bank transfer.',
          'Declaração de não dívida à Autoridade Tributária and Segurança Social — sometimes the Câmara requests it itself, sometimes it asks you to upload it.',
          'Faturas with NIF, if the programme works as reimbursement rather than a fixed cheque.',
          'Formulário municipal, signed by hand or via Chave Móvel Digital (CMD), if submitting online.'
        ] }
      ]
    },
    {
      id: 'apply',
      title: 'How to apply to the Câmara Municipal',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-regulation', title: '1. Find your Câmara page', content: [
            { kind: 'paragraph', text: 'Search the Câmara website for the words “Cheque Bebé”, “Apoio à Natalidade”, “Incentivo à Natalidade”, “Bebé+”, “Regulamento Municipal”. Check the year and the PDF regulamento: amounts and deadlines change annually through the orçamento municipal.' }
          ] },
          { id: 'confirm-deadline', title: '2. Check the application deadline', content: [
            { kind: 'paragraph', text: 'The typical deadline is 6 months from the date of birth or adoption. If the child was born on 10 April 2026, the safe deadline is 10 October 2026, unless the regulamento of your município gives a different deadline.' }
          ] },
          { id: 'submit', title: '3. Submit online or in person', content: [
            { kind: 'paragraph', text: 'Larger Câmara accept applications via balcão online/serviços online with CMD or by email with a PDF. In small municípios it is often simpler to go in person to the Balcão Único/Atendimento Municipal.' }
          ] },
          { id: 'track', title: '4. Track Câmara requests', content: [
            { kind: 'paragraph', text: 'If a document is missing, the Câmara usually gives a deadline to correct it. Check email and caixa postal. Not replying is a common reason for refusal.' }
          ] }
        ] }
      ]
    },
    {
      id: 'examples-2026',
      title: 'Examples of amounts in 2026',
      content: [
        { kind: 'paragraph', text: 'The amounts below are guidance based on current municipal programmes as of April 2026. Before applying, still open your Câmara website: benefits are approved locally and may depend on the orçamento, family registration and the absence of debts.' },
        { kind: 'checklist', items: [
          'Cascais — €500 under Cheque-Bebé/Cascais Baby: application through Câmara Municipal de Cascais, usually for residentes no concelho.',
          'Oeiras — €350 under Apoio à Natalidade: application through Câmara Municipal de Oeiras, for residents of the concelho.',
          'Inland areas and small towns — often €500–1,000, sometimes with an increase for a 2nd/3rd child.',
          'Some municípios pay not in cash, but with a voucher that can only be used at aderentes locais.',
          'Some programmes require purchases to be made in the município’s comércio local.'
        ] },
        { kind: 'warning', text: 'Do not buy everything in advance without checking the rules. If the programme reimburses expenses only against faturas after the birth and only in shops in the concelho, receipts from Amazon, IKEA or another município may not be accepted.' }
      ]
    },
    {
      id: 'combine-benefits',
      title: 'What it can be combined with',
      content: [
        { kind: 'paragraph', text: 'Municipal Cheque-Bebé can usually be received alongside national payments. These are different levels: Câmara Municipal, Segurança Social and IRS.' },
        { kind: 'checklist', items: [
          'Abono de família para crianças e jovens — a national Segurança Social benefit, dependent on agregado familiar income.',
          'Subsídio parental — payments during licença parental, if there are contributions to Segurança Social.',
          'Dedução à coleta IRS for a dependente — a tax deduction in the annual IRS return.',
          'Reembolso de creche or apoio creche — if there are local programmes from the Câmara or Santa Casa.',
          'Cheque-dentista, vacinação and SNS — through the child’s número de utente.',
          'Municipal discounts for transportes, piscina, ATL, escola or manuais — check separately on the Câmara website.'
        ] },
        { kind: 'warning', text: 'If you moved recently, first put your address in order: NIF with the correct residência fiscal at Finanças, contrato/atestado and the child’s registration. Many refusals are not related to citizenship, but to the Câmara not seeing you as resident in the município.' }
      ]
    }
  ],
  costs: [
    { label: 'Cascais — Cheque-Bebé', amountEUR: 500, note: 'Municipal support per child; conditions and form of payment follow the rules of Câmara Municipal de Cascais.' },
    { label: 'Oeiras — Apoio à Natalidade', amountEUR: 350, note: 'Municipal support per child; application to Câmara Municipal de Oeiras.' },
    { label: 'Typical range in other municípios', amountEURMin: 250, amountEURMax: 1000, note: 'Amounts vary significantly; check the regulamento municipal and orçamento for 2026.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Cascais — Cascais Baby / Cheque-Bebé', url: 'https://www.cm-cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Oeiras — Apoio à Natalidade', url: 'https://www.cm-oeiras.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal ePortugal — birth registration and child documents', url: 'https://eportugal.gov.pt/servicos/registar-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária — NIF and certidões on Portal das Finanças', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

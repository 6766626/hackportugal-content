export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-mudanca-municipal',
  categoryId: 'housing_rent',
  title: 'Relocation support: municipalities that pay you to move',
  tldr: 'Portugal does not have a single national “relocation payment”, but some municípios in inland regions provide apoios à fixação de novos residentes: usually €2,000–€5,000 per family or applicant. In 2026, such programmes can be found in Mértola, Ourique, Torre de Moncorvo, Pampilhosa da Serra and similar concelhos. You almost always need to actually move, register your address, have no debts to Finanças/Segurança Social and live there for at least 2 years — otherwise the money may be reclaimed.',
  tags: ['move', 'municipality', 'housing', 'subsidies'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What these payments are',
      content: [
        { kind: 'paragraph', text: 'Apoio à mudança or apoio à fixação de novos residentes is a local Câmara Municipal measure, not a right under national law. Municipalities in inland and sparsely populated areas use it to attract workers, families with children, remote professionals and entrepreneurs.' },
        { kind: 'paragraph', text: 'The typical amount in 2026 is from €2,000 to €5,000. Sometimes the amount is fixed; sometimes it is made up of a basic relocation payment, an extra amount for each child, support for renting, buying/renovating a home, or starting a business.' },
        { kind: 'warning', text: 'This is not a substitute for a D1–D8 visa, residence permit, contrato de arrendamento or income. The municipality may approve the payment only after checking actual residence and documents; programme budgets are often limited and applications close without much warning.' }
      ]
    },
    {
      id: 'where-to-look',
      title: 'Where to look for programmes in 2026',
      content: [
        { kind: 'paragraph', text: 'Do not look on the ePortugal portal, but on the website of the specific Câmara Municipal: sections such as Apoios, Incentivos, Habitação, Fixação de População, Regulamentos Municipais, Avisos or Balcão Único. In small municípios, the information is often provided as a PDF regulation and a separate aviso de abertura.' },
        { kind: 'checklist', items: [
          'Mértola — support programmes for fixação de novos residentes and families in inland Alentejo; check the latest aviso on cm-mertola.pt.',
          'Ourique — local incentivos à fixação de população/famílias; conditions depend on the current regulamento municipal.',
          'Torre de Moncorvo — a typical example of a município do interior with support for new residents and families; amounts and application windows are published by the Câmara.',
          'Pampilhosa da Serra — known for measures to attract residents, including support for families, housing and relocation; check the current edital.',
          'Neighbouring concelhos in Beira Interior, Trás-os-Montes, Baixo Alentejo and Centro may have similar payments, but do not advertise them in English.',
          'If there is no page on the website, write to the Balcão Único or Gabinete de Apoio ao Munícipe: ask about “apoio à fixação de novos residentes / apoio à mudança”.'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who usually qualifies',
      content: [
        { kind: 'paragraph', text: 'Conditions differ by regulamento municipal, but the logic is almost the same everywhere: the municipality pays not for an intention to move, but for actually settling in the concelho and committing to live there for the specified period.' },
        { kind: 'checklist', items: [
          'The applicant is over 18, has a NIF and legal stay in Portugal: residence permit, visa, Cartão de Cidadão or registo de cidadão UE.',
          'The new address is in this specific município and is confirmed by a contrato de arrendamento, escritura, caderneta predial, declaração do senhorio or atestado de residência.',
          'You move your domicílio fiscal in Finanças to an address in the concelho.',
          'You register with the Junta de Freguesia and can obtain an atestado de residência.',
          'You have not been a resident of this município in the last 1–3 years — check the exact period in the regulation.',
          'You have no debts to Finanças, Segurança Social or the município itself.',
          'There is a link to work or economic activity: contrato de trabalho, recibos verdes, remote work, empresa, atividade aberta or an employment plan.',
          'You commit to living in the município, usually for at least 24 months; if you leave early, the subsidy may have to be repaid proportionally or in full.',
          'If the payment is for a family, the spouse/partner and children must also be registered at the new address.'
        ] },
        { kind: 'warning', text: 'Expats are not automatically excluded, but the documents must be Portuguese and verifiable. A passport + Airbnb for one month almost never works: you need a real address and stable residence.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents: prepare them before applying',
      content: [
        { kind: 'paragraph', text: 'The most common reason for refusal is not income level, but an incomplete file: no no-debt certificate, the tax address is still in Lisbon/Porto, the rental contract is not registered with Finanças, or the application was submitted after the window closed.' },
        { kind: 'checklist', items: [
          'Documento de identificação: residence permit, passport + residence permit/visa, Cartão de Cidadão or EU registration certificate.',
          'NIF for all adult applicants.',
          'Comprovativo de domicílio fiscal from Portal das Finanças with an address in the município.',
          'Atestado de residência from the Junta de Freguesia or another document expressly listed in the regulation.',
          'Contrato de arrendamento, comprovativo de compra of the home or declaração de cedência de habitação.',
          'Comprovativo de situação profissional: contrato de trabalho, declaração da entidade patronal, início de atividade, recibos verdes, certidão permanente da empresa.',
          'Certidão de não dívida às Finanças.',
          'Declaração de situação contributiva regularizada da Segurança Social.',
          'IBAN in the applicant’s name.',
          'Declaração de compromisso de residência for 2 years, if required by the form.',
          'Household composition: certidão de nascimento for children, casamento/união de facto, if there are family top-ups.'
        ] }
      ]
    },
    {
      id: 'application-process',
      title: 'How to apply without missing the window',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-regulation', title: '1. Find the regulamento and aviso de abertura', content: [
            { kind: 'paragraph', text: 'The regulamento explains the permanent rules, while the aviso de abertura sets out the specific 2026 window: dates, budget, form, application limit and submission e-mail/platform. Without an aviso, the programme may exist “on paper” but not be accepting applications.' }
          ] },
          { id: 'confirm-by-email', title: '2. Confirm the details by e-mail', content: [
            { kind: 'paragraph', text: 'Write to the Câmara Municipal before moving or immediately afterwards. Ask them to confirm: whether the prazo de candidatura is open, whether a foreigner with your type of residence permit can apply, whether they accept a contrato de trabalho remoto and what the minimum residence period is.' }
          ] },
          { id: 'move-and-register', title: '3. Move and change your addresses', content: [
            { kind: 'paragraph', text: 'First, there must be a provable address: rental/purchase/cedência, then domicílio fiscal in Finanças, atestado de residência from the Junta de Freguesia and only then the application, unless the regulation allows prior approval.' }
          ] },
          { id: 'submit', title: '4. Submit the complete file', content: [
            { kind: 'paragraph', text: 'Submission is usually through the Balcão Único, the Câmara e-mail or presencialmente. Ask for a comprovativo de entrega with the date and process number.' }
          ] },
          { id: 'after-approval', title: '5. Keep proof of residence', content: [
            { kind: 'paragraph', text: 'After the payment, keep the rental contract, água/luz/internet bills, recibos de renda, IRS, children’s school registration and any letters from the Câmara. The municipality may check whether you live there throughout the entire commitment period.' }
          ] }
        ] }
      ]
    },
    {
      id: 'risks-and-tactics',
      title: 'Risks and practical tactics',
      content: [
        { kind: 'checklist', items: [
          'Do not sign an expensive long-term contract only for the subsidy: the budget may run out before you apply.',
          'First check transport, schools, Centro de Saúde, internet and the labour market: €5,000 will not compensate for being unable to live somewhere for 2 years.',
          'If you work remotely, obtain a letter from your employer in advance about remote work from Portugal or prepare recibos verdes/contratos de prestação de serviços.',
          'Ask whether the municipal grant can be combined with Porta 65, Apoio ao Arrendamento or other programmes; cumulation is sometimes limited.',
          'Check the tax treatment of the payment: many apoios municipais are not salary, but you should still keep the decisão de atribuição and recibo for IRS.',
          'If the family moves in stages, clarify which date counts as the start of residência: the contract date, atestado, mudança do domicílio fiscal or Câmara decision.',
          'Check the obrigação de restituição: if you leave before 24 months, you may be asked to repay the money in full, with interest or proportionally.'
        ] },
        { kind: 'warning', text: 'Do not trust adverts from agencies saying “we will help you get €5,000 for moving” without a link to an official regulamento municipal. The only reliable source is the Câmara Municipal and the published aviso.' }
      ]
    }
  ],
  costs: [
    { label: 'Typical municipal payment for relocation/resident settlement', amountEURMin: 2000, amountEURMax: 5000, note: 'Range across programmes in municípios do interior; the exact amount depends on the regulation, family, children and budget.' },
    { label: 'Atestado de residência at the Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'The fee depends on the Junta; sometimes free, sometimes a few euros.' },
    { label: 'Changing domicílio fiscal in Finanças', amountEUR: 0, note: 'Free via Portal das Finanças or presencialmente.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Mértola — official municipal website and apoios/avisos sections', url: 'https://www.cm-mertola.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Ourique — official website and regulamentos municipais', url: 'https://www.cm-ourique.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Município de Torre de Moncorvo — official website, avisos and apoios municipais', url: 'https://www.cm-moncorvo.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Pampilhosa da Serra — official website and programas de apoio', url: 'https://www.cm-pampilhosadaserra.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

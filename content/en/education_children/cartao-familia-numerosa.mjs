export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-familia-numerosa',
  categoryId: 'education_children',
  title: 'Cartão de Família Numerosa: discounts for families with 3+ children',
  tldr: 'Cartão de Família Numerosa is an APFN card for families with 3 or more children. In 2026, membership costs €15/year and gives access to partner discounts: CP, museums, shops, insurance, services, and sometimes utility programmes. It is not a state benefit and does not replace abono de família, but it often works alongside Câmara Municipal municipal benefits: water, IMI, school meals, transport. It is suitable for foreign residents if they can prove family composition and an address in Portugal.',
  tags: ['family', 'children', 'apfn', 'discounts'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What the card provides',
      content: [
        { kind: 'paragraph', text: 'Cartão de Família Numerosa is issued by APFN — Associação Portuguesa de Famílias Numerosas. It is an association card for families with 3 or more children, not a residence permit, not a tax status and not a Segurança Social benefit.' },
        { kind: 'paragraph', text: 'The main benefit is access to APFN partner discounts and proof of large-family status for some commercial and municipal programmes. In 2026, the standard APFN fee is €15/year per family.' },
        { kind: 'checklist', items: ['discounts with APFN partners: transport, culture, shops, insurance, education, leisure', 'CP discounts for family trips — conditions depend on the train type and fare', 'discounts or free days at certain museums and cultural venues', 'Câmara Municipal municipal benefits: water, school services, transport, sport — if there is a local programme', 'may help when requesting tarifa familiar da água, but the card itself does not guarantee the tariff', 'commercial discounts usually require showing the card and an identity document'] }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who counts as família numerosa',
      content: [
        { kind: 'paragraph', text: 'The basic APFN rule: a family with 3 or more children. Minor children and dependent children are usually counted. For foreigners, what matters is not the passport, but the actual family, address and documents proving family composition.' },
        { kind: 'checklist', items: ['parents with 3+ children living in Portugal', 'expat families with a residence permit, D1-D8 visa, EU Cartão de Cidadão or another lawful basis of residence', 'mixed families where one parent is Portuguese or an EU citizen', 'a single parent with 3+ children', 'families where some children are over 18, if they remain dependants — APFN may request proof of study or dependency', 'adopted children and children under guardianship are counted where documents are available'] },
        { kind: 'warning', text: 'Do not confuse Cartão de Família Numerosa with abono de família, IRS deductions or estatuto de cuidador. The APFN card does not give an automatic right to benefits and does not change your tax status.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the application',
      content: [
        { kind: 'paragraph', text: 'The document set depends on the family composition, but the logic is simple: APFN needs to see who the parents are, who the children are, where the family lives and how to contact you. It is better to have foreign documents in Portuguese, English or with a translation if the original is in Russian.' },
        { kind: 'checklist', items: ['parents’ documents: passport, Cartão de Residência, Cartão de Cidadão or EU residence document', 'parents’ NIF — useful for identification and bills, although the APFN card is not a tax procedure', 'children’s birth certificates or equivalent civil registry documents', 'adoption, guardianship or parental responsibility document, if applicable', 'proof of address in Portugal: contrato de arrendamento, recibo de renda, utility bill or atestado de residência from the Junta de Freguesia', 'email and Portuguese phone number for contact', 'proof of payment of the €15/year APFN fee', 'for children aged 18+ — proof of study or another document if APFN asks for evidence of dependency'] },
        { kind: 'warning', text: 'Russian birth certificates are often requested with a certified translation. If a document was issued outside the EU, check in advance whether an apostille/legalização is needed for the specific situation.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply through APFN',
      content: [
        { kind: 'substeps', items: [
          { id: 'register', title: '1. Complete the APFN form', content: [
            { kind: 'paragraph', text: 'Go to apfn.com.pt and choose membership of the Associação / Cartão de Família Numerosa. Fill in the parents’ details, children’s details, address and contacts.' }
          ] },
          { id: 'upload-documents', title: '2. Attach documents', content: [
            { kind: 'paragraph', text: 'Upload or send copies of the family documents according to APFN instructions. If the system asks for clarification, reply quickly: questions most often concern the children’s ages, address or proof of relationship.' }
          ] },
          { id: 'pay-fee', title: '3. Pay €15/year', content: [
            { kind: 'paragraph', text: 'Payment of the membership fee activates participation in APFN. Keep the comprovativo de pagamento: it may be requested while the application is being processed.' }
          ] },
          { id: 'receive-card', title: '4. Receive the card and use the discounts', content: [
            { kind: 'paragraph', text: 'After approval, APFN issues the Cartão de Família Numerosa. Conditions of use depend on the partner: sometimes a physical card is needed, sometimes the card number or proof of membership is enough.' }
          ] }
        ] }
      ]
    },
    {
      id: 'where-discounts-work',
      title: 'Where to find discounts and how not to lose money',
      content: [
        { kind: 'paragraph', text: 'APFN discounts are not a single state tariff. Each partner sets its own rules: percentage, validity period, excluded dates, need to book in advance, limit by children or adults.' },
        { kind: 'checklist', items: ['before buying CP tickets, check the discount page and fare conditions: not all promotions can be combined', 'at museums, check with the ticket office: the benefit may apply only to the permanent exhibition or on certain days', 'for water, search your Câmara Municipal for “tarifa familiar da água” or “famílias numerosas”', 'for electricity, check the applicability of the reduced IVA to the increased consumption limit for households with 5+ people and potência contratada up to 6.9 kVA', 'for school meals, ATL, transport and sport, check the regulamento municipal — rules differ by concelho', 'keep recibos and proof of family composition: municipalities often update benefits annually', 'do not rely on automatic renewal: APFN and the Câmara may require annual confirmation'] },
        { kind: 'warning', text: 'Municipal benefits “stack” with the APFN card only if this is expressly allowed by the Câmara Municipal or service provider. For example, an APFN partner discount and tarifa familiar da água are different mechanisms; one card does not oblige the provider to grant both benefits.' }
      ]
    },
    {
      id: 'expat-tips',
      title: 'Practical tips for expats',
      content: [
        { kind: 'paragraph', text: 'If you have only just moved, first collect the basic Portuguese identifiers: NIF, proof of address, children’s documents for school and SNS. After that, the APFN card and municipal applications become noticeably easier.' },
        { kind: 'checklist', items: ['ask the Junta de Freguesia for an atestado de residência listing family members if the rental contract is in only one parent’s name', 'check your Câmara Municipal website: Lisboa, Porto, Cascais, Oeiras, Braga, Coimbra and other concelhos have different family programmes', 'if the children are studying, keep declarações de matrícula — they are often needed for benefits', 'in the event of divorce or separate residence, prepare the agreement on parental responsibilities and the children’s address', 'when buying travel passes, compare the APFN discount, the municipal school pass and Navegante/Andante — the cheapest option is not always through APFN', 'check APFN partners once a year: the list of discounts changes'] }
      ]
    }
  ],
  costs: [
    { label: 'APFN membership fee', amountEUR: 15, note: 'In 2026, the standard annual fee per family for access to Cartão de Família Numerosa and partner discounts.' },
    { label: 'Municipal applications', amountEUR: 0, note: 'Usually free, but the Câmara Municipal may require recent certificates or annual renewal.' },
    { label: 'Translation of foreign documents', amountEURMin: 20, amountEURMax: 60, note: 'Indicative price per document; depends on the language, notarisation and urgency.' }
  ],
  sources: [
    { title: 'APFN — Associação Portuguesa de Famílias Numerosas and Cartão de Família Numerosa', url: 'https://www.apfn.com.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — Portuguese government portal: family and social services', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — services for families, children and households', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

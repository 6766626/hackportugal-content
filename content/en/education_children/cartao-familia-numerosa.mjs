export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-familia-numerosa',
  categoryId: 'education_children',
  title: 'Cartão de Família Numerosa: discounts for families with 3+ children',
  tldr: 'Cartão de Família Numerosa is an APFN card for families with 3 or more children. In 2026, membership costs €15/year and gives access to partner discounts: CP, museums, shops, insurance, services, and sometimes utility programmes. It is not a state benefit and does not replace abono de família, but it often works alongside Câmara Municipal municipal benefits: water, IMI, school meals, transport. It is suitable for foreign residents who can confirm their family composition and address in Portugal.',
  tags: ['family', 'children', 'apfn', 'discounts'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What the card gives you',
      content: [
        { kind: 'paragraph', text: 'Cartão de Família Numerosa is issued by APFN — Associação Portuguesa de Famílias Numerosas. It is an association card for families with 3 or more children, not a residence permit, not a tax status, and not a Segurança Social benefit.' },
        { kind: 'paragraph', text: 'The main benefit is access to APFN partner discounts and confirmation of large-family status for some commercial and municipal programmes. In 2026, the standard APFN fee is €15/year per family.' },
        { kind: 'checklist', items: ['discounts with APFN partners: transport, culture, shops, insurance, education, leisure', 'CP discounts for family journeys — conditions depend on the type of train and fare', 'benefits or free days at certain museums and cultural sites', 'Câmara Municipal municipal benefits: water, school services, transport, sport — if there is a local programme', 'may help when requesting tarifa familiar da água, but the card itself does not guarantee the tariff', 'commercial discounts usually require presenting the card and an identity document'] }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who counts as a família numerosa',
      content: [
        { kind: 'paragraph', text: 'APFN’s basic rule: a family with 3 or more children. Usually, minor children and dependent children are counted. For foreigners, what matters is not the passport, but the actual family, address, and documents confirming the family composition.' },
        { kind: 'checklist', items: ['parents with 3+ children living in Portugal', 'expat families with a residence permit, D1-D8 visa, EU Cartão de Cidadão, or another legal basis for residence', 'mixed families where one parent is Portuguese or an EU citizen', 'a single parent with 3+ children', 'families where some children are over 18, if they remain dependants — APFN may request proof of study or dependency', 'adopted children and children under guardianship are counted if documents are available'] },
        { kind: 'warning', text: 'Do not confuse Cartão de Família Numerosa with abono de família, IRS deductions, or estatuto de cuidador. The APFN card does not give an automatic right to benefits and does not change your tax status.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the application',
      content: [
        { kind: 'paragraph', text: 'The document set depends on the family composition, but the logic is simple: APFN must see who the parents are, who the children are, where the family lives, and how to contact you. Foreign documents are best provided in Portuguese, English, or with a translation if the original is in Russian.' },
        { kind: 'checklist', items: ['parents’ documents: passport, Cartão de Residência, Cartão de Cidadão, or EU residence document', 'parents’ NIF — useful for identification and invoices, although the APFN card is not a tax procedure', 'children’s birth certificates or equivalent civil registry documents', 'adoption, guardianship, or parental responsibility document, if applicable', 'proof of address in Portugal: contrato de arrendamento, recibo de renda, utility bill, or atestado de residência from the Junta de Freguesia', 'email and Portuguese phone number for contact', 'proof of payment of the APFN fee of €15/year', 'for children aged 18+ — certificate of study or another document if APFN asks for proof of dependency'] },
        { kind: 'warning', text: 'Russian birth certificates are often requested with a certified translation. If the document was not issued in the EU, check in advance whether an apostille/legalização is needed for your specific situation.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply through APFN',
      content: [
        { kind: 'substeps', items: [
          { id: 'register', title: '1. Fill in the APFN form', content: [
            { kind: 'paragraph', text: 'Go to apfn.com.pt and choose membership of the Associação / Cartão de Família Numerosa. Fill in the parents’ details, children’s details, address, and contacts.' }
          ] },
          { id: 'upload-documents', title: '2. Attach documents', content: [
            { kind: 'paragraph', text: 'Upload or send copies of the family documents according to APFN’s instructions. If the system asks for clarification, reply quickly: most questions concern the children’s ages, address, or proof of relationship.' }
          ] },
          { id: 'pay-fee', title: '3. Pay €15/year', content: [
            { kind: 'paragraph', text: 'Payment of the membership fee activates participation in APFN. Keep the comprovativo de pagamento: it may be requested when the application is processed.' }
          ] },
          { id: 'receive-card', title: '4. Receive the card and use the discounts', content: [
            { kind: 'paragraph', text: 'After approval, APFN issues the Cartão de Família Numerosa. Conditions of use depend on the partner: sometimes a physical card is needed, and sometimes the card number or proof of membership is enough.' }
          ] }
        ] }
      ]
    },
    {
      id: 'where-discounts-work',
      title: 'Where to find discounts and how not to lose money',
      content: [
        { kind: 'paragraph', text: 'APFN discounts are not a single state tariff. Each partner sets its own rules: percentage, validity period, excluded dates, need to book in advance, limit by children or adults.' },
        { kind: 'checklist', items: ['before buying CP tickets, check the discount page and fare conditions: not all promotions can be combined', 'at museums, check with the ticket office: the benefit may apply only to the permanent exhibition or on specific days', 'for water, look on your Câmara Municipal website for “tarifa familiar da água” or “famílias numerosas”', 'for electricity, check the applicability of reduced IVA to the increased consumption limit for households with 5+ people and potência contratada up to 6.9 kVA', 'for school meals, ATL, transport, and sport, check the regulamento municipal — rules differ by concelho', 'keep recibos and proof of family composition: municipalities often renew benefits annually', 'do not count on automatic renewal: APFN and the Câmara may require annual confirmation'] },
        { kind: 'warning', text: 'Municipal benefits “stack” with the APFN card only if the Câmara Municipal or service provider expressly allows it. For example, an APFN partner discount and tarifa familiar da água are different mechanisms; one card does not oblige the provider to give both benefits.' }
      ]
    },
    {
      id: 'expat-tips',
      title: 'Practical tips for expats',
      content: [
        { kind: 'paragraph', text: 'If you have just moved, first collect the basic Portuguese identifiers: NIF, proof of address, children’s documents for school, and SNS. After that, the APFN card and municipal applications are noticeably easier.' },
        { kind: 'checklist', items: ['ask the Junta de Freguesia for an atestado de residência listing the family members if the rental contract is only in one parent’s name', 'check your Câmara Municipal website: Lisboa, Porto, Cascais, Oeiras, Braga, Coimbra, and other concelhos have different family programmes', 'if the children are studying, keep declarações de matrícula — they are often needed for benefits', 'in case of divorce or separate residence, prepare the agreement on parental responsibility and the children’s address', 'when buying passes, compare the APFN discount, the municipal school pass, and Navegante/Andante — the cheapest option is not always through APFN', 'check APFN partners once a year: the list of discounts changes'] }
      ]
    }
  ],
  costs: [
    { label: 'APFN membership fee', amountEUR: 15, note: 'In 2026, the standard annual fee per family for access to Cartão de Família Numerosa and partner discounts.' },
    { label: 'Municipal applications', amountEUR: 0, note: 'Usually free, but the Câmara Municipal may require recent certificates or annual renewal.' },
    { label: 'Translation of foreign documents', amountEURMin: 20, amountEURMax: 60, note: 'Indicative amount per document; depends on the language, notarisation, and urgency.' }
  ],
  sources: [
    { title: 'APFN — Associação Portuguesa de Famílias Numerosas and Cartão de Família Numerosa', url: 'https://www.apfn.com.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — Portuguese government portal: family and social services', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — services for families, children, and households', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

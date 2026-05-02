export default {
  editorialVoice: 'hackportugal',
  id: 'csi-complemento-idosos',
  categoryId: 'healthcare',
  title: 'CSI — Complemento Solidário para Idosos: supplement for older people on a low income',
  tldr: 'Complemento Solidário para Idosos (CSI) is a monthly Segurança Social top-up for people aged 66 years and 9 months or over in 2026, if they have lived in Portugal for at least 6 consecutive years and have very low income. The maximum is around €600/month; in practice, they pay the difference between your assessable income and the CSI limit. Plus: 100% coverage of part of prescription medicines within the SNS and dental benefits. It is not immediately available to new D7/D8 pensioners: a residence period is required.',
  tags: ['csi', 'pension', 'idosos', 'sns'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-csi',
      title: 'What CSI is and who actually needs it',
      content: [
        { kind: 'paragraph', text: 'CSI is not a pension, but a social supplement to an older person’s income. It is paid by Segurança Social if income is below the set annual reference amount. If someone has almost no income, the payment can reach approximately €600/month; if they have a pension, rent, interest or a foreign pension, CSI is reduced.' },
        { kind: 'paragraph', text: 'For expats, this matters in two situations: you have lived in Portugal for a long time and your pension is small; or you are moving to join an older relative and are planning their social protection. But CSI does not work as support immediately after moving: the key condition is 6 consecutive years of legal residence in Portugal.' },
        { kind: 'checklist', items: [
          'Age in 2026: at least 66 years and 9 months — normal age for old-age pension.',
          'Residence: at least 6 consecutive years in Portugal on the application date.',
          'Income: below the CSI limit; for a single applicant, the reference amount is around €7,200/year.',
          'For a couple, the spouse/partner’s income is taken into account; the practical couple threshold is around €12,600/year.',
          'Foreign pensions, rent, interest, investment income and income from property must be declared.',
          'You need to have a NISS and be registered with Segurança Social.',
          'You must already receive, or be entitled to request, the relevant pension, if applicable.',
          'CSI does not replace a residence permit, D7/D8 visa, IRS return or health insurance.'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Eligibility conditions in 2026',
      content: [
        { kind: 'paragraph', text: 'The main conditions are age, residence, low resources and the absence of significant financial assets. Segurança Social looks not only at a Portuguese pension, but also at payments from abroad. For Russians, Ukrainians, British citizens, Americans and other non-EU residents, this usually means: you need to prove legal residence and disclose foreign pensions and accounts.' },
        { kind: 'checklist', items: [
          'Age: 66 years and 9 months or over in 2026.',
          'Residence: living in Portugal for 6 consecutive years immediately before the application.',
          'For third-country nationals: a valid residence permit / autorização de residência or other legal residence status.',
          'The applicant’s income is below the annual valor de referência CSI — around €7,200/year.',
          'If there is a spouse, união de facto or shared household, their income is also taken into account.',
          'Movable assets — bank balances, deposits, securities — must not exceed 240 IAS. With IAS at €537.13 in 2026, this is €128,911.20.',
          'Since 2024, the income of adult children generally no longer blocks CSI in the way it used to; the focus is on the resources of the applicant and the couple.',
          'If you are entitled to an old-age pension, sobrevivência or another applicable benefit, Segurança Social may require you to request it first.'
        ] },
        { kind: 'warning', text: 'A mistake that often leads to refusals for expats: “I have a small Portuguese pension”. That is not enough. Segurança Social takes worldwide income into account: a foreign pension, rent from a flat abroad, interest on deposits, dividends, investments and part of property resources.' }
      ]
    },
    {
      id: 'how-much',
      title: 'How much they pay: not a fixed €600, but a top-up to the limit',
      content: [
        { kind: 'paragraph', text: 'CSI is calculated as the difference between the set annual reference amount and your assessable income. This is why two people of the same age may receive different amounts: one almost the maximum, another €40–100/month, a third €0.' },
        { kind: 'paragraph', text: 'A simplified example: if the CSI limit is around €7,200/year, and your assessable pension and other income are €4,800/year, the annual top-up may be around €2,400, i.e. about €200/month. If income is zero, the maximum is around €600/month.' },
        { kind: 'checklist', items: [
          'A Portuguese old-age pension is taken into account.',
          'A foreign state or private pension is taken into account.',
          'Income from renting out property in Portugal or abroad is taken into account.',
          'Interest, dividends and investment income are taken into account.',
          'Property and financial assets may affect the assessment of resources.',
          'If income changes, you must notify Segurança Social.',
          'The payment is usually made monthly together with other social benefits or to the IBAN provided.'
        ] },
        { kind: 'warning', text: 'Do not plan your budget on the basis of “I will definitely get €600”. This is the maximum supplement for minimal resources. The actual amount only becomes clear after Segurança Social calculates it.' }
      ]
    },
    {
      id: 'health-benefits',
      title: 'CSI bonuses: medicines, teeth, glasses',
      content: [
        { kind: 'paragraph', text: 'CSI is valuable not only because of the monthly payment. Recipients are entitled to benefícios adicionais de saúde — additional health benefits. In practice, this reduces an older person’s spending on prescription medicines, dentistry and some medical devices.' },
        { kind: 'checklist', items: [
          'Medicines: for CSI recipients, there is 100% coverage of part of the cost of prescription medicines prescribed within the SNS system and covered by the relevant comparticipação rules.',
          'Dentistry: access to cheque-dentista / dental benefits through the SNS, usually via a médico de família or Centro de Saúde.',
          'Glasses and lenses: partial reimbursement of costs may be possible under benefícios adicionais de saúde.',
          'Dental prostheses: partial reimbursement of costs may be possible within the set limits.',
          'To use the benefits, you need a número de utente SNS and up-to-date registration at a Centro de Saúde.',
          'Prescriptions must be issued by a doctor and go through the normal SNS/pharmacy system.',
          'A private clinic without an SNS referral may not give entitlement to reimbursement.'
        ] },
        { kind: 'warning', text: '“100% medicines” does not mean any medicines from any private clinic. Check that the medicine is prescribed, goes through the SNS system and falls within the reimbursement rules for CSI recipients.' }
      ]
    },
    {
      id: 'apply',
      title: 'How to apply',
      content: [
        { kind: 'paragraph', text: 'You can apply online through Segurança Social Direta / gov.pt or in person at a balcão da Segurança Social. For older applicants, it is often easier to go in person or through a representative with a procuração, because documents, foreign income and bank details need to be checked.' },
        { kind: 'checklist', items: [
          'The applicant’s NISS.',
          'The applicant’s NIF.',
          'Documento de identificação: Cartão de Cidadão, residence permit / autorização de residência, passport with proof of status.',
          'Proof of living in Portugal for 6 consecutive years: residence permit, certificados, atestado de residência, Câmara Municipal/Junta de Freguesia documents, tax and social records.',
          'IBAN of a Portuguese or SEPA account for payments.',
          'Documents relating to a Portuguese pension, if any.',
          'Certificates for foreign pensions and social benefits.',
          'Documents on rental income, bank interest, investments.',
          'Details of the spouse/partner and their income, if applicable.',
          'Contact details: address, telephone, email, so that Segurança Social can request missing documents.'
        ] },
        { kind: 'paragraph', text: 'After submission, Segurança Social checks income and entitlement to the payment. If approved, the payment is awarded taking into account the application date under Segurança Social rules. If income, family situation, address or bank assets change, you must report this, otherwise overpayments may have to be repaid.' }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Applying immediately after moving on a D7: it will usually be refused because there are not 6 years of residence.',
          'Not declaring a foreign pension: Segurança Social may request proof, and overpayments are recovered.',
          'Confusing CSI with pensão social de velhice: these are different schemes.',
          'Assuming that children are obliged to support the applicant and that CSI is therefore impossible: after the reforms, children’s income is generally no longer the same automatic barrier it used to be.',
          'Not having a número de utente SNS: CSI health benefits will be harder to use.',
          'Holding large deposits above 240 IAS: in 2026, the asset limit is €128,911.20.',
          'Not updating your address with Finanças and Segurança Social: you may miss letters requesting documents.',
          'Ignoring IRS: even with low income, foreign pensions and tax residence need to be analysed separately.'
        ] },
        { kind: 'warning', text: 'If you are helping an older relative, do not transfer large sums to their account before applying “for convenience”. Bank balances and assets may affect entitlement to CSI.' }
      ]
    }
  ],
  costs: [
    { label: 'CSI application', amountEUR: 0, note: 'The Segurança Social public service is free of charge.' },
    { label: 'Maximum monthly top-up', amountEURMax: 600, note: 'Reference for 2026: maximum where assessable income is almost zero; the actual amount is calculated individually.' },
    { label: 'Movable asset threshold', amountEURMax: 128911.2, note: '240 IAS with IAS at €537.13 in 2026; includes bank balances, deposits and other financial assets.' }
  ],
  sources: [
    {
      title: 'Segurança Social — Complemento Solidário para Idosos',
      url: 'https://seg-social.pt/complemento-solidario-para-idosos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt — Request the Complemento Solidário para Idosos',
      url: 'https://www.gov.pt/servicos/pedir-o-complemento-solidario-para-idosos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

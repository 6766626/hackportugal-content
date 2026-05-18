export default {
  editorialVoice: 'hackportugal',
  id: 'alimentos-pensao-ex-conjugue',
  categoryId: 'emergency_rights',
  title: 'Pensão de alimentos: child maintenance and maintenance for a former spouse',
  tldr: 'In Portugal, pensão de alimentos is set by agreement or by the Tribunal de Família e Menores. For children, the court looks at the child’s expenses and the parents’ income; in practice, the range is often 10–30% of the payer’s net income, but there is no statutory table. For a former spouse, maintenance is exceptional: after divorce, each person is expected to support themselves. If a parent does not pay, you can enforce through the court and request FGADM; in typical cases, the fund pays around €124/month per child, but the amount depends on the court decision and limits.',
  tags: ['maintenance', 'family', 'fgadm', 'divorce'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What counts as maintenance in Portugal',
      content: [
        { kind: 'paragraph', text: 'Pensão de alimentos means regular payments for support. In family cases, there are two different regimes: child maintenance and maintenance for a former spouse. They are not added together automatically and are assessed under different Código Civil rules.' },
        { kind: 'checklist', items: [
          'For a child: food, housing, clothing, school, transport, health, medicines, extracurricular activities, a share of rent and utilities',
          'For a child: usually paid until the age of 18; after 18 — if the child is studying or in vocational training, usually up to 25, if this is reasonable',
          'For a former spouse: only if they cannot support themselves and there are grounds based on income, age, health, length of marriage and role in the family',
          'The court does not apply an official 10%, 20% or 30% formula; this is only a practical benchmark from cases',
          'The amount can be changed if circumstances change: job loss, increased income, illness, the child moving, a new school, a change in living arrangements',
          'Maintenance can be paid as money, payment of specific expenses, or a mixed model, but it is better to set a monthly amount and separate extraordinary expenses',
          'A foreign court decision on divorce or maintenance may require recognition/enforcement in Portugal if collection takes place here'
        ] }
      ]
    },
    {
      id: 'children',
      title: 'Child maintenance 👶',
      content: [
        { kind: 'paragraph', text: 'In cases involving children, the court sets parental responsibilities: who the child lives with, contact arrangements, who makes important decisions and how much the other parent pays. This is called regulação das responsabilidades parentais.' },
        { kind: 'paragraph', text: 'The amount depends on the child’s needs and the means of both parents.\n\nIn practice, with one child and ordinary incomes, courts often fall within a range of 10–30% of the payer’s net income, but this is not a guaranteed bracket: with a low salary the amount may be lower, while with private school and high incomes it may be higher.' },
        { kind: 'checklist', items: [
          'Collect recibos de vencimento or declaração de IRS for both parents',
          'Prepare a list of the child’s expenses: creche/escola, food, clothing, transport, medicines, insurance, clubs/activities',
          'Attach evidence: faturas, recibos, contrato de arrendamento, bills for luz/água/gás, medical prescriptions',
          'State the living arrangement: residência alternada, residência com um progenitor or another actual arrangement',
          'Set out despesas extraordinárias separately: dentistry, glasses, operations, school trips, laptop',
          'Ask for annual indexation, for example by inflação/IAS, if the parties agree or the court considers it reasonable',
          'Record the payment date, IBAN, payment reference and consequences of delay',
          'If the parent receives salário mínimo nacional of €920 in 2026, the court can still order maintenance, but will take the payer’s minimum expenses into account'
        ] },
        { kind: 'warning', text: 'Do not stop paying on your own because of a conflict with the other parent or because the child has started living with you for more days. First formalise the change by agreement or through the court; otherwise a debt will arise.' }
      ]
    },
    {
      id: 'ex-spouse',
      title: 'Maintenance for a former spouse',
      content: [
        { kind: 'paragraph', text: 'After divorce, Portuguese law starts from the principle that each former spouse must support themselves. Therefore pensão de alimentos ao ex-cônjuge is not automatic compensation for the marriage, but an exceptional measure where one spouse genuinely needs support and the other can pay.' },
        { kind: 'checklist', items: [
          'The court looks at the length of the marriage and cohabitation',
          'The age and health of each spouse',
          'Qualifications, work, and ability to enter the labour market',
          'Income, assets, rent, loans and compulsory expenses',
          'Who looks after the children and how this affects work',
          'The standard of living during the marriage, but without any guarantee that it will be preserved after divorce',
          'Each person’s contribution to the family economy, including unpaid care for the home and children',
          'The existence of a new marriage, união de facto or substantial change in income'
        ] },
        { kind: 'paragraph', text: 'Maintenance for a former spouse may be temporary. It can be reduced, ended or increased through the court if circumstances change. For expats, it is important to know: if one spouse has left Portugal, this does not cancel the obligation, but it does make service of documents and enforcement more complicated.' },
        { kind: 'warning', text: 'In Portugal, there is no general state fund that pays maintenance to a former spouse instead of the debtor. FGADM applies to children, not to an ex-cônjuge. Names such as FNGCAS are often used incorrectly; check exactly which fund or benefit is being offered to you.' }
      ]
    },
    {
      id: 'how-to-formalize',
      title: 'How to formalise it: agreement or court',
      content: [
        { kind: 'substeps', items: [
          { id: 'agreement', title: '1. If the parents/spouses have agreed', content: [
            { kind: 'paragraph', text: 'The agreement must be made enforceable: in a divorce by mutual consent through a Conservatória, it is submitted together with the acordo de responsabilidades parentais. If there are minor children, the Ministério Público checks whether the child’s interests are protected.' },
            { kind: 'checklist', items: [
              'Full names, NIF and addresses of the parties',
              'Child’s details: name, date of birth, número de utente/NIF if available',
              'Monthly amount and payment date',
              'Recipient’s IBAN',
              'Who pays for escola, saúde, atividades, férias',
              'How unforeseen expenses are shared: 50/50, in proportion to income, or otherwise',
              'Indexation and review date',
              'What happens if the child or parent moves'
            ] }
          ] },
          { id: 'court', title: '2. If agreement is not possible', content: [
            { kind: 'paragraph', text: 'A pedido is filed with the Tribunal de Família e Menores for the place where the child or respondent lives. For urgent children’s issues, the court can order provisional measures before the final decision.' },
            { kind: 'paragraph', text: 'A lawyer is not always compulsory at the first step, but in cases of conflict, a foreign element, non-payment or a dispute about income, it is better to go with an advogado. If income is low, file a pedido de proteção jurídica with Segurança Social.' }
          ] },
          { id: 'foreigners', title: '3. If you are an expat', content: [
            { kind: 'paragraph', text: 'The court needs documents in a language it can understand. Foreign decisions, marriage/birth certificates and income statements may require apostila, tradução certificada and sometimes revisão de sentença estrangeira.' },
            { kind: 'warning', text: 'Do not confuse divorce, parental responsibilities and maintenance with immigration status. A parent’s residence permit does not in itself decide the maintenance issue; the court looks at family and financial circumstances.' }
          ] }
        ] }
      ]
    },
    {
      id: 'non-payment-and-fgadm',
      title: 'If a parent does not pay: enforcement and FGADM',
      content: [
        { kind: 'paragraph', text: 'If there is a court decision or approved agreement, non-payment becomes a debt. You can request court enforcement: deductions from salário, penhora of a bank account, IRS refund, assets or other income.' },
        { kind: 'paragraph', text: 'For children, there is the Fundo de Garantia de Alimentos Devidos a Menores — FGADM. This is a state mechanism through Segurança Social that pays instead of the debtor when maintenance has been ordered by the court, but the parent does not pay and enforcement does not produce results.' },
        { kind: 'checklist', items: [
          'There must be a valid court decision or approved maintenance agreement',
          'The child must live in Portugal',
          'The debtor does not pay in full or in part',
          'First, incumprimento das responsabilidades parentais is usually recorded',
          'The court assesses the income of the family with whom the child lives',
          'The needs benchmark is linked to IAS; in 2026 IAS = €537.13',
          'The FGADM amount is not automatically the same as the debt; it is set by the court within the limits of the law and the fund’s budget',
          'In typical cases involving an absent parent, a payment of around €124/month per child is seen, but this is not a universal tariff',
          'The state can then recover these amounts from the debtor',
          'FGADM does not cover maintenance for a former spouse'
        ] },
        { kind: 'warning', text: 'If the debtor pays in cash, require a receipt or a transfer to an IBAN. Without a payment trail, it is then difficult to prove whether the debt was or was not paid.' }
      ]
    },
    {
      id: 'tax-and-practical',
      title: 'Taxes, evidence and practical rules',
      content: [
        { kind: 'paragraph', text: 'Maintenance can have IRS consequences.\n\nIn Portugal, the tax treatment depends on who pays, who receives, whom the amount is intended for and whether there is a court decision or homologated agreement. The rules may differ for an ex-cônjuge and children, so before filing the IRS return, check Portal das Finanças or speak to a contabilista.' },
        { kind: 'checklist', items: [
          'Pay only by bank transfer with the reference “pensão de alimentos month/year”',
          'Keep the court decision, acordo homologado, comprovativos de pagamento and correspondence',
          'Do not mix maintenance and gifts: gifts do not replace the compulsory amount',
          'If income has fallen, immediately file a pedido de alteração; debt for past months usually does not disappear by itself',
          'If the child’s expenses have increased, collect faturas before applying for an increase',
          'For international enforcement, find out the debtor’s address, employer and bank details in advance',
          'In cases of domestic violence or threats, request separate protective measures and do not negotiate without a lawyer',
          'If you have a low income, request apoio judiciário/proteção jurídica before filing the claim'
        ] },
        { kind: 'warning', text: 'An oral agreement “you do not pay for now” is dangerous for both sides. In Portugal, the safe option is a written agreement approved by the Conservatória/Tribunal, or a new court decision.' }
      ]
    }
  ],
  costs: [
    { label: 'FGADM for a child', amountEUR: 124, note: 'Typical indicative payment in cases involving an absent parent; the exact amount is set by the court, and it is not an automatic tariff.' },
    { label: 'Advogado for a family case', amountEURMin: 600, amountEURMax: 2500, note: 'Private lawyer for an agreement, maintenance variation or enforcement; complex international cases cost more.' },
    { label: 'Proteção jurídica', amountEUR: 0, note: 'If Segurança Social approves legal aid, court fees and/or a lawyer may be covered by the state.' },
    { label: 'IAS 2026', amountEUR: 537.13, note: 'Used as a social benchmark, including when checking need for certain benefits and funds.' }
  ],
  sources: [
    {
      title: 'justica.gov.pt: divorce, parental responsibilities and maintenance',
      url: 'https://justica.gov.pt/Guias/guia-do-divorcio',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: information on family services and Justiça',
      url: 'https://www.gov.pt/servicos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: Fundo de Garantia de Alimentos Devidos a Menores',
      url: 'https://www.seg-social.pt/fundo-de-garantia-de-alimentos-devidos-a-menores',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código Civil: maintenance obligation, parental responsibilities and maintenance for a former spouse',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}

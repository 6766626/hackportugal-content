export default {
  editorialVoice: 'hackportugal',
  id: 'ancv-cheque-acolhimento',
  categoryId: 'daily_life',
  title: 'Cheque Acolhimento: tourist vouchers from your employer',
  tldr: 'Cheque Acolhimento is a corporate tourist voucher for holidays in Portugal: hotels, Alojamento Local, restaurants, Quintas, tourist services with programme partners. An employer can give an employee up to €500 per year as an extra-salary benefit; for the company, this is claimed as a tax-deductible expense. For the worker, it is not cash: the voucher cannot be cashed out, usually cannot be exchanged for change, and the validity period and acceptance network must be checked before booking.',
  tags: ['tourism', 'voucher', 'work', 'benefits'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Cheque Acolhimento is',
      content: [
        { kind: 'paragraph', text: 'Cheque Acolhimento is not a state payment to individuals, but a corporate tool: a company buys tourist vouchers and gives them to workers as a social/motivational benefit. In concept, it is similar to the French Chèques Vacances: money is pre-allocated to tourism and hospitality within a partner network.' },
        { kind: 'paragraph', text: 'Use is usually limited to Portugal and programme partners: hotéis, Alojamento Local, turismo rural, Quintas, restaurantes, experiências turísticas. Before paying, you need to check whether the specific place accepts Cheque Acolhimento, because it is not a bank card and not a universal voucher.' },
        { kind: 'checklist', items: [
          'Issued by the employer, not by AIMA, Câmara Municipal or Segurança Social',
          'The company chooses the face value; the programme benchmark is up to €500 per year per worker',
          'Can be used for accommodation, meals and tourist services with partners',
          'The voucher is not cash and usually cannot be cashed out',
          'Change is usually not given when paying with a voucher',
          'Validity period and partial-payment rules depend on the issuer and format',
          'May not work for bookings via Booking/Airbnb/OTAs — check direct payment with the property',
          'For an expat employee, NIF and correct payroll details matter, but no separate immigration procedure is needed'
        ] }
      ]
    },
    {
      id: 'how-to-get',
      title: 'How to get it through your employer',
      content: [
        { kind: 'paragraph', text: 'The worker does not personally “apply” for Cheque Acolhimento at Turismo de Portugal. The practical route is to ask HR/Payroll whether the company has a benefícios flexíveis policy or a social budget for tourism. If not, you can suggest that the employer join the programme as an alternative to a cash bonus.' },
        { kind: 'checklist', items: [
          'Write to HR: “A empresa oferece Cheque Acolhimento ou outro benefício de turismo?”',
          'Check the annual limit: the whole amount at once or in instalments',
          'Ask for the rules: validity period, partner list, possibility of split payment',
          'Check whether the benefit will appear on the recibo de vencimento',
          'If you are a remote worker in a PT-entity, eligibility usually depends on company policy, not nationality',
          'If you are a contractor on recibos verdes, this is not a standard employee benefit — a separate agreement with the client is needed',
          'If the employer is foreign and has no PT payroll, the Portuguese Cheque Acolhimento usually does not apply automatically'
        ] },
        { kind: 'warning', text: 'Do not agree to a “we will give you a voucher instead of part of your salary” arrangement if it reduces base salary, subsídio de férias, subsídio de Natal or the Segurança Social base without clear written agreement. The benefit should be additional or a correctly formalised element of compensation.' }
      ]
    },
    {
      id: 'tax-and-payroll',
      title: 'Taxes and accounting: what matters for the worker',
      content: [
        { kind: 'paragraph', text: 'The key argument for companies is that up to €500 per year per worker may be treated as an expense linked to the tourist acolhimento/benefícios programme. In practice, tax treatment depends on the paperwork: invoice to the company, list of recipients, internal regulamento de benefícios and correct payroll reporting.' },
        { kind: 'paragraph', text: 'For the worker, the main point is not to treat the voucher as “net cash”. Even if the company says “this is €500”, it can only be used under the network rules. If the benefit appears on the recibo de vencimento, check whether any IRS/Segurança Social withholding has arisen and whether your cash salary has been reduced.' },
        { kind: 'checklist', items: [
          'Ask HR for the written benefit conditions before receiving it',
          'Check the recibo de vencimento for the month of issue',
          'Compare salário base: it should not unexpectedly decrease',
          'Check that subsídio de alimentação has not been replaced with the voucher unless this was agreed',
          'Keep the email/company policy — it may be useful in a dispute',
          'If you are a PT tax resident, any employer benefits may potentially have an IRS effect',
          'If the amount is above €500 per year, ask HR to explain the tax treatment of the excess',
          'A tax advantage for the company does not mean automatic tax neutrality for all workers'
        ] },
        { kind: 'warning', text: 'In Portugal in 2026, IRS and Segurança Social treatment of employee benefits depends on the specific classification of the payment. If HR promises “isento de tudo”, ask for a reference to an internal opinion from a contabilista certificado or fiscalista.' }
      ]
    },
    {
      id: 'where-to-use',
      title: 'Where and how to use it without surprises',
      content: [
        { kind: 'paragraph', text: 'The best scenario is to choose a partner from the network in advance, write to them directly and get written confirmation: whether they accept Cheque Acolhimento, whether the booking can be paid in full or in part, whether payment on site is required, and whether there are blackout dates.' },
        { kind: 'checklist', items: [
          'Check the partner before booking, not at reception',
          'Ask: “Aceitam Cheque Acolhimento? Em formato digital ou papel?”',
          'Check whether the voucher can be combined with a bank card',
          'Check whether the amount is refunded if the booking is cancelled',
          'Look at the validity period: an expired voucher is usually not extended automatically',
          'Do not count on using it through international aggregators',
          'For a restaurant, check whether the voucher is accepted for the whole menu or only for refeições',
          'For Quintas and turismo rural, check the minimum number of nights',
          'Keep payment confirmation until check-out and final settlement of the bill'
        ] },
        { kind: 'paragraph', text: 'If you are planning a holiday in high season — July, August, Semana Santa, Natal/Ano Novo — book earlier. Having a voucher does not guarantee availability and does not fix the accommodation price.' }
      ]
    },
    {
      id: 'expat-cases',
      title: 'Typical cases for expats',
      content: [
        { kind: 'substeps', items: [
          { id: 'employee-portuguese-company', title: 'You are an employee of a Portuguese company', content: [
            { kind: 'paragraph', text: 'The simplest case. Ask HR to include you in the programme on the same basis as other employees. The usual payroll details are needed: NIF, address, bank/contact details, sometimes NISS.' }
          ] },
          { id: 'remote-for-foreign-company', title: 'You live in PT, but your employer is abroad', content: [
            { kind: 'paragraph', text: 'A foreign company without Portuguese payroll usually does not issue Cheque Acolhimento through the local scheme. A similar travel benefit is possible, but its tax treatment in PT will be a separate issue.' }
          ] },
          { id: 'freelancer-recibos-verdes', title: 'You are on recibos verdes', content: [
            { kind: 'paragraph', text: 'Cheque Acolhimento as an employee benefit usually does not apply. A client can pay you for services or reimburse expenses under a contract, but this is not the same as a voucher for a worker.' }
          ] },
          { id: 'company-owner', title: 'You own an Lda.', content: [
            { kind: 'paragraph', text: 'You can discuss with a contabilista the purchase of vouchers for workers, including gerência, if remuneração is formalised. Rules, limits and a consistent approach are needed so that the expense looks business-related rather than personal.' }
          ] }
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Red flags before agreeing',
      content: [
        { kind: 'checklist', items: [
          'The employer offers to replace part of salário base with a voucher',
          'There are no written rules or validity period',
          'You cannot see the partner list in advance',
          'HR does not explain how the benefit appears on the recibo de vencimento',
          'The voucher is accepted only by “partners we know”, without a public network',
          'The amount is promised as “up to €500”, but in practice depends on performance without criteria',
          'The voucher cannot be used in your region or on the dates you need',
          'Cancelling the booking results in the full face value being lost',
          'You are offered the chance to buy the voucher yourself “at a discount” through an unverified link'
        ] },
        { kind: 'warning', text: 'Cheque Acolhimento is a useful benefit if you actually travel around Portugal. If liquidity matters more to you, compare it with a cash bonus: €500 in vouchers ≠ €500 in a bank account.' }
      ]
    }
  ],
  costs: [
    { label: 'Usual cost for the worker', amountEUR: 0, note: 'If the employer issues the voucher as a benefit, the worker usually does not pay for issuance.' },
    { label: 'Typical annual benefit limit', amountEURMax: 500, note: 'Programme benchmark for the company per worker per year; the actual amount depends on the employer policy.' }
  ],
  sources: [
    { title: 'Turismo de Portugal — tourism support programmes and initiatives', url: 'https://www.turismodeportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRC and company expenses', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRC — expense recognition regime and documentação fiscal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

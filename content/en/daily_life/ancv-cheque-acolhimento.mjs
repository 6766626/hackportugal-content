export default {
  editorialVoice: 'hackportugal',
  id: 'ancv-cheque-acolhimento',
  categoryId: 'daily_life',
  title: 'Cheque Acolhimento: tourist vouchers from your employer',
  tldr: 'Cheque Acolhimento is a corporate tourist voucher for holidays in Portugal: hotels, Alojamento Local (AL), restaurants, Quintas, tour services with programme partners. An employer can give an employee up to €500 per year as an extra-salary benefit; for the company, this is claimed as a tax-deductible expense. For the employee, it is not cash: the voucher cannot be cashed out, usually cannot be exchanged for change, and the validity period and acceptance network must be checked before booking.',
  tags: ['tourism', 'voucher', 'work', 'benefits'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Cheque Acolhimento is',
      content: [
        { kind: 'paragraph', text: 'Cheque Acolhimento is not a state payment to individuals, but a corporate tool: a company buys tourist vouchers and gives them to employees as a social/motivational benefit. In principle, it is similar to the French Chèques Vacances: the money is pre-allocated to tourism and hospitality within a partner network.' },
        { kind: 'paragraph', text: 'Use is usually limited to Portugal and programme partners: hotels, Alojamento Local (AL), rural tourism, Quintas, restaurants, tourist experiences. Before paying, you need to check whether the specific place accepts Cheque Acolhimento, because it is not a bank card and not a universal voucher.' },
        { kind: 'checklist', items: [
          'It is issued by the employer, not AIMA, Câmara Municipal or Segurança Social',
          'The company chooses the face value; the programme benchmark is up to €500 per year per employee',
          'It can be used for accommodation, meals and tourist services with partners',
          'The voucher is not cash and usually cannot be cashed out',
          'Change is usually not given when paying with the voucher',
          'The validity period and partial payment rules depend on the issuer and format',
          'It may not work for bookings through Booking/Airbnb/OTAs — check direct payment with the property',
          'For an expat employee, NIF and correct payroll details are important, but no separate immigration procedure is needed'
        ] }
      ]
    },
    {
      id: 'how-to-get',
      title: 'How to get it through your employer',
      content: [
        { kind: 'paragraph', text: 'An employee does not “apply” for Cheque Acolhimento at Turismo de Portugal. The practical route is to ask HR/Payroll whether the company has a benefícios flexíveis policy or a social budget for tourism. If not, you can suggest that the employer join the programme as an alternative to a cash bonus.' },
        { kind: 'checklist', items: [
          'Write to HR: “A empresa oferece Cheque Acolhimento ou outro benefício de turismo?”',
          'Check the annual limit: the whole amount at once or in instalments',
          'Ask for the rules: validity period, list of partners, possibility of split payment',
          'Check whether the benefit will appear on the recibo de vencimento',
          'If you are a remote worker in a PT entity, eligibility usually depends on company policy, not nationality',
          'If you are a contractor on recibos verdes, this is not a standard employee benefit — a separate agreement with the client is needed',
          'If the employer is foreign and has no PT payroll, the Portuguese Cheque Acolhimento usually does not apply automatically'
        ] },
        { kind: 'warning', text: 'Do not agree to a “we will give you a voucher instead of part of your salary” arrangement if it reduces your base salary, subsídio de férias, subsídio de Natal or Segurança Social base without clear written agreement. The benefit should be additional or a correctly documented element of compensation.' }
      ]
    },
    {
      id: 'tax-and-payroll',
      title: 'Taxes and accounting: what matters for the employee',
      content: [
        { kind: 'paragraph', text: 'The key argument for companies is that up to €500 per year per employee may be treated as an expense linked to the tourism acolhimento/benefícios programme. In practice, the tax treatment depends on the documentation: invoice to the company, list of recipients, internal regulamento de benefícios and correct payroll reporting.' },
        { kind: 'paragraph', text: 'For the employee, the main point is not to treat the voucher as “net money”. Even if the company says “this is €500”, it can only be used under the network rules. If the benefit appears on the recibo de vencimento, check whether any IRS/Segurança Social withholding has arisen and whether the cash salary has decreased.' },
        { kind: 'checklist', items: [
          'Ask HR to provide the written benefit terms before receiving it',
          'Check the recibo de vencimento for the month of issue',
          'Compare the salário base: it should not unexpectedly decrease',
          'Check that the voucher has not replaced the subsídio de alimentação, if this has not been agreed',
          'Keep the email/company policy — it will be useful in a dispute',
          'If you are a PT tax resident, any employer benefits may potentially have an IRS effect',
          'If the amount is above €500 per year, ask HR to explain the tax treatment of the excess',
          'A tax advantage for the company does not mean automatic tax neutrality for all employees'
        ] },
        { kind: 'warning', text: 'In Portugal in 2026, IRS and Segurança Social on employee benefits depend on the specific classification of the payment. If HR promises “isento de tudo”, ask for a link to an internal opinion from a contabilista certificado or fiscalista.' }
      ]
    },
    {
      id: 'where-to-use',
      title: 'Where and how to use it without surprises',
      content: [
        { kind: 'paragraph', text: 'The best scenario is to choose a partner from the network in advance, write to them directly and obtain written confirmation: whether they accept Cheque Acolhimento, whether the booking can be paid in full or in part, whether payment on site is required, and whether there are blackout dates.' },
        { kind: 'checklist', items: [
          'Check the partner before booking, not at reception',
          'Ask: “Aceitam Cheque Acolhimento? Em formato digital ou papel?”',
          'Check whether the voucher can be combined with a bank card',
          'Check whether the amount is refunded if the booking is cancelled',
          'Check the validity period: an expired voucher is usually not extended automatically',
          'Do not count on using it through international aggregators',
          'For a restaurant, check whether the voucher is accepted for the whole menu or only for refeições',
          'For Quintas and rural tourism, check the minimum number of nights',
          'Keep proof of payment until check-out and final settlement of the bill'
        ] },
        { kind: 'paragraph', text: 'If you are planning a holiday in high season — July, August, Semana Santa, Natal/Ano Novo — book earlier. Having a voucher does not guarantee availability and does not lock in the accommodation price.' }
      ]
    },
    {
      id: 'expat-cases',
      title: 'Typical cases for expats',
      content: [
        { kind: 'substeps', items: [
          { id: 'employee-portuguese-company', title: 'You are an employee of a Portuguese company', content: [
            { kind: 'paragraph', text: 'The simplest case. Ask HR to include you in the programme on the same basis as other employees. Standard payroll details are needed: NIF, address, bank/contact details, sometimes NISS.' }
          ] },
          { id: 'remote-for-foreign-company', title: 'You live in PT, but your employer is abroad', content: [
            { kind: 'paragraph', text: 'A foreign company without Portuguese payroll usually does not issue Cheque Acolhimento through the local scheme. A similar travel benefit is possible, but its tax treatment in PT will be a separate issue.' }
          ] },
          { id: 'freelancer-recibos-verdes', title: 'You are on recibos verdes', content: [
            { kind: 'paragraph', text: 'Cheque Acolhimento as an employee benefit usually does not apply. A client may pay you for services or reimburse expenses under a contract, but this is not the same as a voucher for an employee.' }
          ] },
          { id: 'company-owner', title: 'You own an Lda.', content: [
            { kind: 'paragraph', text: 'You can discuss buying vouchers for employees with a contabilista, including gerência, if remuneração is in place. Rules, limits and a consistent approach are needed so that the expense looks business-related rather than personal.' }
          ] }
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Red flags before agreeing',
      content: [
        { kind: 'checklist', items: [
          'The employer proposes replacing part of the salário base with a voucher',
          'There are no written rules and no validity period',
          'You cannot see the partner list in advance',
          'HR does not explain how the benefit appears on the recibo de vencimento',
          'The voucher is accepted only by “friendly partners”, with no public network',
          'The amount is promised as “up to €500”, but in practice depends on performance with no criteria',
          'The voucher cannot be used in your region or on the dates you need',
          'Cancelling the booking leads to the total loss of the face value',
          'You are offered the chance to buy the voucher yourself “at a discount” through an unverified link'
        ] },
        { kind: 'warning', text: 'Cheque Acolhimento is a useful benefit if you really travel around Portugal. If liquidity matters more to you, compare it with a cash bonus: a €500 voucher ≠ €500 in your bank account.' }
      ]
    }
  ],
  costs: [
    { label: 'Usual cost for the employee', amountEUR: 0, note: 'If the voucher is issued by the employer as a benefit, the employee usually does not pay for issuance.' },
    { label: 'Typical annual benefit limit', amountEURMax: 500, note: 'Programme benchmark for the company per employee per year; the actual amount depends on the employer’s policy.' }
  ],
  sources: [
    { title: 'Turismo de Portugal — tourism support programmes and initiatives', url: 'https://www.turismodeportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRC and company expenses', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRC — expense recognition regime and documentação fiscal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

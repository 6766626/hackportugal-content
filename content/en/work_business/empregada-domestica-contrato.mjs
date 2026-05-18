export default {
  editorialVoice: 'hackportugal',
  id: 'empregada-domestica-contrato',
  categoryId: 'work_business',
  title: 'Empregada doméstica: formally hiring a domestic worker',
  tldr: 'A cleaner, nanny, carer, cozinheira or jardineiro in a private home is a trabalhador do serviço doméstico. In 2026, put it in writing, register with Segurança Social within the 15 days before work starts, and pay contributions monthly. The norm is up to 40 hours/week, the full-time minimum is SMN €920 × 14, and holiday entitlement is 22 working days. Since 2023, hiding a worker from Segurança Social can become a criminal offence: up to 3 years in prison or a fine of up to 360 days.',
  tags: ['domestic', 'contract', 'segurança-social', 'work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-is-domestic-worker',
      title: 'Who must be registered as a trabalhador do serviço doméstico',
      content: [
        { kind: 'paragraph', text: 'If a person regularly works in your private home and is paid, this is not “help by arrangement” but domestic work. The regime applies to limpeza, lavandaria, cozinha, babysitting, cuidados a idosos, jardinagem, driving services for the family and similar work for a household, not for a company.' },
        { kind: 'checklist', items: [
          'A cleaner comes every week for 3–6 hours — they must be registered.',
          'A nanny collects a child from school 5 days a week — they must be registered.',
          'A carer lives in the home with an elderly relative — they must be registered, with specific conditions for accommodation and rest.',
          'A gardener only services your home and is paid directly by you — they must be registered.',
          'A cleaning company issues a factura-recibo with IVA — this is not your trabalhador; the company registers its own workers.',
          'One-off help on a single occasion without regularity is usually not an employment contract, but it is better to pay via recibo/factura if the person acts as self-employed.'
        ] },
        { kind: 'warning', text: 'Do not confuse this with recibos verdes. If you set the schedule, place, instructions and pay regularly, these are signs of an employment relationship. Calling the person a “freelancer” is not enough.' }
      ]
    },
    {
      id: 'contract',
      title: 'Prepare a written contrato de trabalho doméstico',
      content: [
        { kind: 'paragraph', text: 'For an expat family, the safe standard in 2026 is a written contract before the first working day. It is needed for Segurança Social, insurance, proof of salary, working hours and in the event of a dispute with ACT/the court. If the contract is fixed-term, written form is mandatory; for open-ended employment, do not skimp on paperwork either.' },
        { kind: 'checklist', items: [
          'Employer details: name, NIF, NISS, residential address.',
          'Worker details: name, NIF, NISS, document, address.',
          'Start date and contract type: sem termo or termo certo.',
          'Duties: limpeza, cozinha, babysitting, cuidador, motorista, jardineiro, etc.',
          'Place of work: home address or several family addresses.',
          'Schedule: days of the week, hours, breaks, maximum 40 hours/week.',
          'Pay: monthly or hourly gross, payment dates, Multibanco/bank transfer.',
          'Subsídio de Natal and subsídio de férias: 13th and 14th payments or the proportional part.',
          'Holiday: 22 working days per year after a full year of work.',
          'Meals/accommodation, if provided, and what exactly is considered part of remuneration.',
          'Notice periods for contract termination and probationary period, if applicable.',
          'Mandatory acidentes de trabalho insurance.'
        ] },
        { kind: 'warning', text: 'Do not include passport retention, a ban on leaving the house, payment “cash only without recibo”, or round-the-clock availability in the contract. A live-in worker still needs rest, personal time and compliance with the 40 hours/week limit.' }
      ]
    },
    {
      id: 'social-security-registration',
      title: 'Register the worker with Segurança Social before they start',
      content: [
        { kind: 'paragraph', text: 'An individual employer registers a trabalhador do serviço doméstico via gov.pt or Segurança Social Direta.\n\nThe deadline is within the 15-day period before work starts, meaning not after the first day. In practice: signed the contract → immediately submit the admissão → the worker starts.' },
        { kind: 'substeps', items: [
          { id: 'prepare-access', title: '1. Prepare access and numbers', content: [
            { kind: 'checklist', items: [
              'Your NIF and NISS as empregador.',
              'Access to Segurança Social Direta or Chave Móvel Digital (CMD).',
              'The worker’s NISS; if they do not have one, request a NISS first.',
              'The worker’s NIF, if they have one.',
              'Contract start date.',
              'Schedule and expected remuneração.',
              'Contribution base type: remuneração convencional or remuneração real.'
            ] }
          ] },
          { id: 'submit-admission', title: '2. Submit the admissão', content: [
            { kind: 'paragraph', text: 'On gov.pt, choose the service “Registar trabalhador do serviço doméstico”. The system redirects to Segurança Social Direta. Enter the worker’s details, start date, working arrangement and pay. Save the comprovativo as a PDF.' }
          ] },
          { id: 'pay-contributions', title: '3. Pay contributions every month', content: [
            { kind: 'paragraph', text: 'Contributions are paid for the previous month, usually from the 10th to the 20th of the following month, via referência Multibanco/Segurança Social Direta. Do not shift the whole amount onto the worker: the employer’s share is your obligation.' }
          ] }
        ] },
        { kind: 'warning', text: 'Since 2023, hiding a worker from Segurança Social is not just an administrative risk. If the admissão is not reported on time and the situation drags on, the crime de ocultação de trabalhador may apply: up to 3 years’ imprisonment or a fine of up to 360 days.' }
      ]
    },
    {
      id: 'money-and-contributions',
      title: 'How much to pay: salary, contributions, holiday pay',
      content: [
        { kind: 'paragraph', text: 'Minimum full-time pay in 2026 is based on SMN €920 per month, usually 14 payments per year: 12 salaries + subsídio de férias + subsídio de Natal. For part-time, calculate proportionally to the hours, but not below the minimum rate.' },
        { kind: 'paragraph', text: 'For Segurança Social, domestic work has two base regimes. Remuneração real means contributions on the actual salary. Remuneração convencional is a base linked to IAS; in 2026 IAS = €537.13, with an hourly notional base of around €3.10. This is a contribution base, not permission to pay the worker €3.10/hour.' },
        { kind: 'checklist', items: [
          'Full-time 40 hours/week: not below €920 gross/month × 14 in 2026.',
          'Part-time: salary is proportional to hours, plus proportional holiday and Christmas payments.',
          'Holiday: 22 working days of paid holiday per year.',
          'Subsídio de férias is usually paid before the holiday or according to an agreed schedule.',
          'Subsídio de Natal is usually paid by 15 December or proportionally on contract termination.',
          'You may withhold only the worker’s share of contributions, not the employer’s share.',
          'Pay by bank transfer and keep the comprovativo; cash with no trail is a bad idea.',
          'For the worker’s IRS, issue payment confirmations; the employer may have limits on tax deductions, check in Portal das Finanças.'
        ] },
        { kind: 'warning', text: 'Market rates in Lisbon/Cascais/Porto are often above the minimum: cleaning at €8–15/hour gross and more. But Segurança Social and labour rights are calculated not from the “market”, but from the declared salary and the law.' }
      ]
    },
    {
      id: 'insurance-and-compliance',
      title: 'Insurance, schedule and monthly documents',
      content: [
        { kind: 'paragraph', text: 'A domestic worker is your employee. The family takes on employer obligations: accident insurance, working time records, payments to Segurança Social, holiday and proper contract termination.' },
        { kind: 'checklist', items: [
          'Take out seguro de acidentes de trabalho para serviço doméstico before work starts.',
          'Keep the contrato, comprovativo de admissão, policy, recibos/payslips and payments for at least several years.',
          'Keep a simple timesheet: dates, hours, overtime, holiday, sick leave.',
          'Do not exceed 40 hours/week without lawful compensation and agreement.',
          'Provide weekly rest; for a live-in worker, record rest periods separately.',
          'If sick, the worker obtains baixa médica via SNS/SNS24, rather than “just not coming”.',
          'If salary, hours or contract termination change, update the details in Segurança Social.',
          'On dismissal, pay salary, holiday pay, the proportional Christmas amount and compensation if due.'
        ] },
        { kind: 'warning', text: 'If the worker is a foreign national without the right to work, this is a separate risk for the family. Check the residence permit, CPLP/temporary document, autorização de residência or another document granting the right to work in Portugal.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes made by expat families',
      content: [
        { kind: 'checklist', items: [
          'Hiring someone “for a couple of months” and not registering them because “she asked for cash herself”. The risk remains with the employer.',
          'Confusing limpeza through a company with a personal empregada doméstica.',
          'Registering with Segurança Social after work has started. The deadline is before the start, within the 15 days beforehand.',
          'Paying 12 monthly salaries and forgetting subsídio de férias and subsídio de Natal.',
          'No seguro de acidentes de trabalho: a fall on the stairs in your home will become an expensive problem.',
          'The hourly rate verbally “includes everything”, but the contract does not specify what happens with holiday pay and Natal.',
          'A live-in nanny effectively works 24/7. Living in the home does not remove the working time limit and rest.',
          'Not closing the contrato in Segurança Social after dismissal, so contributions continue to accrue.'
        ] },
        { kind: 'paragraph', text: 'The correct setup is simple: written contract, admissão in advance, insurance, salary to a bank account, contributions every month. This is cheaper than fines, a dispute with ACT or a criminal case over undeclared work.' }
      ]
    }
  ],
  costs: [
    { label: 'Minimum full-time salary in 2026', amountEUR: 920, note: 'SMN per month, usually 14 payments per year: 12 salaries + férias + Natal.' },
    { label: 'IAS 2026 for the Segurança Social notional base', amountEUR: 537.13, note: 'Remuneração convencional; hourly base around €3.10 for calculating contributions, not the minimum wage.' },
    { label: 'Segurança Social contributions under remuneração convencional', amountEURMin: 0, amountEURMax: 0, note: 'Rate usually 28.3% of the notional base: 18.9% employer + 9.4% worker.' },
    { label: 'Segurança Social contributions under remuneração real', amountEURMin: 0, amountEURMax: 0, note: 'Rate usually 33.3% of the actual salary: 22.3% employer + 11% worker.' },
    { label: 'Seguro de acidentes de trabalho doméstico', amountEURMin: 30, amountEURMax: 120, note: 'Indicative annual range; depends on hours, duties, salary and insurer.' }
  ],
  sources: [
    {
      title: 'gov.pt: registering a trabalhador do serviço doméstico',
      url: 'https://www.gov.pt/servicos/registar-trabalhador-do-servico-domestico',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: trabalhador do serviço doméstico',
      url: 'https://www.seg-social.pt/trabalhador-do-servico-domestico',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 235/92: legal regime for the contrato de serviço doméstico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1992-34519175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2023: Agenda do Trabalho Digno and crime de ocultação de trabalhador',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2023-211340863',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}

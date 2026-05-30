export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-refeicao-empregado',
  categoryId: 'work_business',
  title: 'Subsídio de Refeição: employer-provided meals without IRS and Segurança Social',
  tldr: 'Subsídio de Refeição is a daily meal allowance. In the private sector it is not mandatory under the general Código do Trabalho, but it is often set out in the contrato de trabalho or CCT; for Administração Pública civil servants, €6.15 per working day applies. In 2026, cash is exempt from IRS/Segurança Social up to €6.15, and cartão/vale refeição up to €10.46. Anything above the limit is treated as salary and is subject to tax and contributions.',
  tags: ['work', 'irs', 'meal', 'salary'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Subsídio de Refeição is',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Refeição is not a “bonus”, but a separate line on the recibo de vencimento: the employer pays a fixed amount for each day actually worked to cover meals.' },
        { kind: 'paragraph', text: 'In Administração Pública, the base amount for April 2026 is €6.15 per day. This figure is often used as a benchmark in private companies too, but a private employer is only obliged to pay subsídio de refeição if it is written in your contrato de trabalho, internal regulations or applicable CCT — contrato coletivo de trabalho.' },
        { kind: 'checklist', items: [
          'It is usually paid for working days, not weekends.',
          'It is usually not paid for annual leave, sick leave or unpaid absence.',
          'It may be paid in cash together with salary.',
          'It may be paid onto a cartão refeição or as a vale refeição.',
          'Common cards: Edenred, Pluxee ex-Sodexo, Coverflex, Euroticket.',
          'The amount must be visible in the payslip/recibo de vencimento as a separate line.',
          'If you work part-time, the amount may be proportional to hours if this is established by the contract or CCT.'
        ] }
      ]
    },
    {
      id: 'tax-free-limits-2026',
      title: 'Tax-free limits in 2026',
      content: [
        { kind: 'paragraph', text: 'For IRS and Segurança Social, what matters is not the mere fact of payment, but the payment method and the daily limit. As of April 2026, these practical limits apply: cash — up to €6.15 per day; cartão/vale refeição — up to €10.46 per day.' },
        { kind: 'checklist', items: [
          'Cash €6.15 per day: €0 IRS and €0 Segurança Social.',
          'Cash €7 per day: €6.15 is exempt, €0.85 is treated as salary.',
          'Cartão refeição €10.46 per day: €0 IRS and €0 Segurança Social.',
          'Cartão refeição €11 per day: €10.46 is exempt, €0.54 is treated as salary.',
          'The amount above the limit is included in the base de incidência contributiva.',
          'IRS is withheld on the excess at your withholding tax rate.',
          'Segurança Social is usually charged on the excess: 11% employee and 23.75% employer.',
          'The limit applies per day, not as a monthly “bank” detached from days worked.'
        ] },
        { kind: 'warning', text: 'The old cash limit of €5.20 is no longer a relevant benchmark for 2026. For current practice, use €6.15 cash and €10.46 cartão/vale.' }
      ]
    },
    {
      id: 'cash-vs-card',
      title: 'Cash or card: which is better',
      content: [
        { kind: 'paragraph', text: 'If the employer is willing to pay more than €6.15 per day, a card is almost always better: the tax-free ceiling is higher — €10.46 instead of €6.15. With 22 working days, that is up to €230.12 per month without IRS and Segurança Social via cartão refeição versus €135.30 cash.' },
        { kind: 'checklist', items: [
          'Cash is more convenient: the money arrives in your normal bank account.',
          'Cash above €6.15 quickly loses its advantage because of IRS and Segurança Social.',
          'Cartão refeição is more advantageous for amounts of €6.16–€10.46 per day.',
          'Cartão is usually accepted in supermarkets, restaurants, cafés, take-away and food delivery, if the seller’s MCC is eligible.',
          'Cartão cannot normally be used for rent, fuel, clothing or cash withdrawals.',
          'The card balance is usually carried over to the next month, but check the provider’s terms.',
          'On termination of employment, the unused card balance usually remains with the employee, but access depends on the issuer’s terms.'
        ] },
        { kind: 'warning', text: 'Do not confuse cartão refeição with an ordinary bank card. The tax exemption depends on it being specifically a meal card/voucher with restricted use for meals.' }
      ]
    },
    {
      id: 'private-sector-rights',
      title: 'If the employer does not pay',
      content: [
        { kind: 'paragraph', text: 'In the private sector in Portugal, there is no universal rule that “every employee must receive subsídio de refeição”. So the first step is to check documents, not rumours.' },
        { kind: 'checklist', items: [
          'Open the contrato de trabalho: is there a line for subsídio de refeição, valor diário, cash/cartão.',
          'Check the CCT for your sector: hotelaria, construção, limpeza, call centre, IT outsourcing and other sectors may have mandatory conditions.',
          'Look at the recibo de vencimento: the payment must be a separate line.',
          'Compare the number of paid days with the actual working days in the month.',
          'Check whether the employer has included meals inside base salary — this matters for holiday pay, natal and compensation.',
          'If the condition is already in the contract or CCT, the employer should not simply remove the payment unilaterally.',
          'If the conditions are breached, first request a written explanation from HR/payroll.',
          'In cases of systematic breach, you can contact ACT — Autoridade para as Condições do Trabalho.'
        ] },
        { kind: 'warning', text: 'The phrase “this is a benefit, so we can cancel it whenever we want” is not always correct. If the payment is established in the contrato, CCT or has become a stable part of working conditions, a legal check is needed before cancellation.' }
      ]
    },
    {
      id: 'how-to-read-payslip',
      title: 'How to check the recibo de vencimento',
      content: [
        { kind: 'paragraph', text: 'In the payslip, look for a separate line such as Subsídio de Refeição, Subs. Alimentação, Ticket Refeição or Cartão Refeição. The number of days and daily rate are usually shown next to it.' },
        { kind: 'checklist', items: [
          'Number of days: usually 20–23 depending on the month and your schedule.',
          'Daily rate: for example €6.15, €7.63, €9.60 or €10.46.',
          'Payment method: together with salário líquido or as a separate top-up onto the cartão.',
          'Isento: the part up to the limit should not be included in IRS/Segurança Social.',
          'Tributável: only the excess above €6.15 cash or €10.46 cartão should be taxed.',
          'If you were on annual leave for the whole month, subsídio de refeição will usually be €0.',
          'If you worked remote from home, entitlement depends on the contract/CCT and internal policy, but many employers continue to pay.',
          'Keep payslips: they are useful for disputes with HR, ACT and when checking IRS.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Tax-free cash limit', amountEUR: 6.15, note: 'Per day, if the payment is made in cash together with salary.' },
    { label: 'Tax-free cartão/vale refeição limit', amountEUR: 10.46, note: 'Per day, if a meal card or voucher with a restricted purpose is used.' },
    { label: 'Example for 22 working days cash', amountEUR: 135.30, note: '22 × €6.15 without IRS and Segurança Social.' },
    { label: 'Example for 22 working days cartão', amountEUR: 230.12, note: '22 × €10.46 without IRS and Segurança Social.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Código do IRS, art. 2: taxation of subsídio de refeição',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs2.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — contribution framework for employees working for an employer',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Portaria n.º 51-B/2026/1: update of subsídio de refeição in Administração Pública to €6.15',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/51-b-2026-1031110274',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'DRE — Código do Trabalho, Lei n.º 7/2009',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 90
}

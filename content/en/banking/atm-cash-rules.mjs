export default {
  editorialVoice: 'hackportugal',
  id: 'atm-cash-rules',
  categoryId: 'banking',
  title: 'ATMs, cash and limits in Portugal',
  tldr: 'The main ATM network is Multibanco (MB), with around 12,000 machines. They accept most international cards, but whether a specific card is accepted depends on the issuing bank. Multibanco usually does not charge an additional fee, but the foreign issuing bank may apply its own fee. The withdrawal limit is €200–400/day. Cash payments between private individuals are prohibited for amounts **≥ €3,000** (art. 63-E LGT); for IRC/IRS taxpayers with organised accounting — **≥ €1,000** for invoices. Cash deposits above €10,000 require justification of the origin of funds under AML rules — banks may request documents even for lower amounts when carrying out risk-based analysis.',
  tags: ['atm', 'multibanco', 'cash', 'limits', 'banknote'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'multibanco',
      title: 'Multibanco — ATM network',
      content: [
        { kind: 'paragraph', text: 'The operator is SIBS. ATMs are located near all banks, at petrol stations, in shopping centres and airports. They accept all Visa/Mastercard/Maestro cards, as well as local Portuguese cards.' },
        { kind: 'checklist', items: [
          '💰 Cash withdrawal — €0 for cards from your own bank',
          '💳 For cards from other Portuguese banks — €0 (domestic withdrawals in Multibanco — Aviso Banco de Portugal 8/2009 / Lei 53/2020)',
          '🌍 For foreign cards — €0 if the card is EU/SEPA, otherwise €2–4 + exchange-rate difference',
          '📅 Limit: usually €200–400/day',
          '💼 POS terminals: amount up to €1,000',
          '🔐 PIN + often SMS-OTP when changing card'
        ]}
      ]
    },
    {
      id: 'mb-services',
      title: 'What else Multibanco does',
      content: [
        { kind: 'checklist', items: [
          '💸 Transfers by IBAN (up to €10,000/day)',
          '📄 Payment for services (Finanças, Segurança Social, IMI, IRS, IUC) using entidade + referência',
          '📱 Mobile top-up',
          '🎟️ Buying transport / cultural event tickets',
          '🅿️ Parking payment',
          '🔒 Cartão temporário Multibanco — virtual card for online purchases',
          '💼 Checking balance, transactions and statements',
          '🎲 Payment for games (Jackpot, Euromillions)'
        ]}
      ]
    },
    {
      id: 'cash-limits',
      title: 'Cash payment limits',
      content: [
        { kind: 'paragraph', text: 'art. 63-E LGT (Lei Geral Tributária) — restrictions on cash payments. The prohibitions apply to transactions equal to or above the threshold:' },
        { kind: 'checklist', items: [
          '🧑‍🤝‍🧑 Between ordinary private individuals: cash payments **≥ €3,000** per transaction are prohibited',
          '🏢 IRC/IRS taxpayers with organised accounting: cash payments for invoices/documents **≥ €1,000** are prohibited',
          '✈️ Non-resident tourists (private individuals with no obligation to keep organised accounting in Portugal): the threshold is usually **≥ €10,000** for cash transactions without special AML procedures',
          '⚖️ Fines under RGIT for breaches can be significant; enforcement is carried out by AT',
          '📋 Transactions from €3,000 (or €1,000 for businesses) — bank transfer/cheque/electronic payment',
          '🛒 IMPORTANT: splitting one transaction into several payments to avoid the threshold is a separate breach'
        ]}
      ]
    },
    {
      id: 'damaged',
      title: 'Torn or damaged banknote',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Partially torn / dirty', content: [
            { kind: 'paragraph', text: 'Any bank in Portugal will exchange a banknote if > 50% of its area and the main security features (watermark, metallic strip) remain. Free of charge.' }
          ]},
          { id: 'd2', title: 'Heavily damaged', content: [
            { kind: 'paragraph', text: 'Banco de Portugal — branch in Lisboa / Porto / Faro / Funchal. Assessment + decision within 7–30 days. They refund it if accidental damage is proven.' }
          ]},
          { id: 'd3', title: 'Counterfeit', content: [
            { kind: 'paragraph', text: 'Confiscation without compensation. Report to PSP + Banco de Portugal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'deposit-limits',
      title: 'Cash deposit limits',
      content: [
        { kind: 'checklist', items: [
          '💰 < €10,000 — no questions asked',
          '📋 €10,000–15,000 — the bank may ask for the origin of funds (simplified AML check)',
          '📄 > €15,000 — Declaração de origem de fundos is mandatory',
          '🌍 > €10,000 brought in from abroad — customs declaration',
          '🇷🇺 Russian Federation citizens: total deposit > €100,000 — prohibited in the EU (sanctions 833/2014)',
          '🇧🇾 Belarusian citizens — similar restriction'
        ]},
        { kind: 'warning', text: 'Frequent deposits of €9,500 are treated as structuring. The bank is obliged to report to UIF (Unidade de Informação Financeira). A fine or account freeze is possible.' }
      ]
    }
  ],
  costs: [
    { label: 'MB cash withdrawal', amountEUR: 0 },
    { label: 'Withdrawal with a foreign non-EU card', amountEURMin: 2, amountEURMax: 4 },
    { label: 'Fine for breaching the cash limit', amountEURMin: 180, amountEURMax: 4500 }
  ],
  sources: [
    { title: 'Lei Geral Tributária — art. 63-E (cash payment limit)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 92/2017 — amendment to the LGT', url: 'https://dre.pt/dre/detalhe/lei/92-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — exchange of damaged banknotes and coins', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SIBS — Multibanco', url: 'https://www.sibs.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}

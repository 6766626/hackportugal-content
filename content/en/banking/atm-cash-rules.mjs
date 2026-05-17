export default {
  editorialVoice: 'hackportugal',
  id: 'atm-cash-rules',
  categoryId: 'banking',
  title: 'ATMs, cash and limits in Portugal',
  tldr: 'The main ATM network is Multibanco (MB), with around 12,000 machines. They accept most international cards, but whether a specific card is accepted depends on the issuing bank. Multibanco usually does not charge an additional fee, but the foreign issuing bank may apply its own fee. The withdrawal limit is €200–400/day. Cash payments between private individuals are prohibited for amounts **≥ €3,000** (art. 63-E LGT); for IRC/IRS taxpayers with organised accounting — **≥ €1,000** on invoices. Cash deposits above €10,000 require justification of the source of funds under AML rules — banks may request documents even for smaller amounts based on risk-level analysis.',
  tags: ['atm', 'multibanco', 'cash', 'limits', 'banknote'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'multibanco',
      title: 'Multibanco — the ATM network',
      content: [
        { kind: 'paragraph', text: 'The operator is SIBS. ATMs are located next to all banks, at petrol stations, in shopping centres and airports. They usually accept most Visa/Mastercard/Maestro cards and Portuguese cards, but acceptance of a specific foreign card depends on the issuer, the network, sanctions restrictions and the ATM settings.' },
        { kind: 'checklist', items: [
          '💰 Cash withdrawal — €0 for cards from your own bank',
          '💳 For cards from other banks in Portugal — €0 (domestic withdrawals in Multibanco — Aviso Banco de Portugal 8/2009 / Lei 53/2020)',
          '🌍 In Multibanco there is usually no ATM-side surcharge; the fee and exchange rate are set by the card-issuing bank. Avoid DCC (“charge in your home currency”) and choose to be charged in EUR. Fees may be higher at independent ATMs',
          '📅 The typical Multibanco limit is up to €400/day, often a maximum of €200 per transaction; the issuing bank may set its own limit',
          '🔐 PIN + often SMS-OTP when changing card'
        ]}
      ]
    },
    {
      id: 'mb-services',
      title: 'What else Multibanco does',
      content: [
        { kind: 'checklist', items: [
          '💸 Transfers by IBAN — limits depend on the bank and the card/account settings; the bank usually sets a daily maximum',
          '📄 Payment of services (Finanças, Segurança Social, IMI, IRS, IUC) using entidade + referência',
          '📱 Mobile top-up',
          '🎟️ Purchase of tickets for transport / cultural events',
          '🅿️ Parking payment',
          '🔒 MB NET / cartões virtuais via MB WAY or the bank — temporary/one-off virtual cards for online purchases',
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
          '🏢 IRC/IRS taxpayers with organised accounting: cash payments on invoices/documents **≥ €1,000** are prohibited',
          '✈️ Non-resident tourists (private individuals with no obligation to keep organised accounting in Portugal): the threshold is usually **≥ €10,000** for cash transactions without special AML procedures',
          '⚖️ Fines under RGIT for breaches can be significant; enforcement is carried out by AT',
          '📋 Transactions from €3,000 (or €1,000 for businesses) — bank transfer/cheque/electronic payment',
          '🛒 IMPORTANT: splitting one transaction into several payments to bypass the threshold is a separate breach'
        ]}
      ]
    },
    {
      id: 'damaged',
      title: 'Torn or damaged banknote',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Partly torn / dirty', content: [
            { kind: 'paragraph', text: 'A damaged euro banknote can be presented to a bank or Banco de Portugal. It is usually reimbursed if more than 50% of the banknote remains, or if destruction of the missing part is proven. If intentional damage/anti-theft ink is suspected, examination and refusal are possible.' }
          ]},
          { id: 'd2', title: 'Heavily damaged', content: [
            { kind: 'paragraph', text: 'Contact Banco de Portugal or go through a bank; check addresses and opening hours on the Banco de Portugal website. The examination period depends on the case.' }
          ]},
          { id: 'd3', title: 'Counterfeit', content: [
            { kind: 'paragraph', text: 'Confiscation without reimbursement. Report it to PSP + Banco de Portugal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'deposit-limits',
      title: 'Cash deposit limits',
      content: [
        { kind: 'checklist', items: [
          '💰 Even for amounts < €10,000, the bank may request the source of funds if the transaction is atypical, frequent, does not match the customer profile or creates an AML risk',
          '📋 The bank applies AML checks based on the risk profile; the source of funds may be requested for any amount, especially for large, frequent or atypical cash deposits',
          '📄 For large or atypical transactions, the bank may require documents on the origin of funds; for transactions around/above €15,000, AML due diligence is especially likely, but the specific requirements depend on the bank and the customer profile',
          '🌍 When entering or leaving the EU with cash ≥ €10,000, a customs declaration is required; when moving cash within the EU, authorities may also require disclosure of information (Reg (EU) 2018/1672)',
          '🇷🇺 Reg (EU) 833/2014 art. 5b: EU banks are generally prohibited from accepting deposits from Russian citizens/residents and Russian legal entities if the total amount of the customer’s deposits in that bank exceeds €100,000. Exceptions apply for EU/EEA/Swiss citizens and persons with a temporary/permanent residence permit in the EU/EEA/Switzerland',
          '🇧🇾 A similar sanctions restriction applies to Belarusian citizens/residents and Belarusian legal entities (Reg (EC) 765/2006); similar exceptions apply for persons with a residence permit in the EU/EEA/Switzerland'
        ]},
        { kind: 'warning', text: 'Frequent deposits just below thresholds may be considered structuring. If a transaction looks suspicious, the bank is obliged to file a suspicious transaction report with UIF/Polícia Judiciária and may request documents, delay the transaction or restrict the account under its AML procedures.' }
      ]
    }
  ],
  costs: [
    { label: 'MB cash withdrawal', amountEUR: 0 },
    { label: 'Withdrawal with a foreign card', amountEUR: 0, note: 'There is usually no surcharge in Multibanco; the fee is set by the issuing bank. Independent ATMs may apply their own charges' },
    { label: 'Fine for breaching the cash limit', amountEURMin: 180, amountEURMax: 4500 }
  ],
  sources: [
    { title: 'Lei Geral Tributária — art. 63-E (cash payment limit)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 92/2017 — amendment to the LGT', url: 'https://dre.pt/dre/detalhe/lei/92-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — exchange of damaged banknotes and coins', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SIBS — Multibanco', url: 'https://www.sibs.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

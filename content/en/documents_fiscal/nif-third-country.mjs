export default {
  editorialVoice: 'hackportugal',
  id: 'nif-third-country',
  categoryId: 'documents_fiscal',
  title: 'How to get a NIF — third-country nationals',
  tldr: 'NIF (Número de Identificação Fiscal) is the Portuguese tax number, needed for almost everything: renting, banking, SIM, SNS. Since 2022 (Ofício Circulado 90054/2022), the mere fact that a non-resident with an address outside the EU/EEA obtains a NIF does not always require a tax representative — the obligation arises when there is a tax connection with Portugal (income, property, car, activity). Free in person at Finanças, or €70-150 through a representative online (2026 market range).',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['nif', 'documents', 'taxes', 'first steps'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'What a NIF is and why you need it',
      content: [
        { kind: 'paragraph', text: 'A 9-digit tax number. Issued by the tax authority Autoridade Tributária e Aduaneira (AT). Without a NIF, you cannot: rent a home on a long-term contract, open an account with a Portuguese bank, sign an employment contract, buy a contract SIM, register with the SNS, or buy a car or property.' },
        { kind: 'warning', text: 'Do not confuse it with a NISS (social security number) — that is a separate number in Segurança Social, needed for employment and benefits.' },
        { kind: 'paragraph', text: 'Residence permit ≠ tax residency. Getting a resident card does not in itself make you tax resident and does not change your tax address in AT — this must be done separately.' }
      ]
    },
    {
      id: 'variant-in-portugal',
      title: 'Option A. In person at Finanças (if you are already in Portugal)',
      audience: { statuses: ['visiting', 'newlyArrived', 'resident'] },
      content: [
        { kind: 'paragraph', text: 'If you go to Finanças in person, you must be legally present in Portugal: on a visa, under visa-free entry, or with a valid residence permit from another Schengen country (where applicable).' },
        { kind: 'checklist', items: [
          'Passport (original + copy)',
          'For a foreign tax address — proof of address from your country of residence (bill, bank statement no older than 3 months). It is better to state a Portuguese address only where there is a real basis: rental contract, atestado de residência, utility bills. A hotel voucher is usually not accepted for a tax address',
          'If your tax address is outside the EU/EEA and you have a tax connection with Portugal (income/property/car/activity) — a tax representative with tax domicile in Portugal. For simply obtaining a NIF without tax obligations, since 2022 AT allows no representative, but individual offices may request one in practice'
        ]},
        { kind: 'paragraph', text: 'How to book: Finanças website → "Agendamentos" → in-person appointment → choose the service "Atribuição de Número de Contribuinte". Without an appointment — walk-in queue from early morning at larger Lisboa/Porto offices.' },
        { kind: 'timeline', text: 'You receive the NIF on the day of the visit (they print a confirmation with the Número de Identificação Fiscal).' },
        { kind: 'cost', items: [{ label: 'Finanças fee', amountEUR: 0 }] }
      ]
    },
    {
      id: 'variant-remote',
      title: 'Option B. Remotely through a representative',
      content: [
        { kind: 'paragraph', text: 'If you are not yet in Portugal or do not want to travel and queue — you hire a tax representative (lawyer/company). The representative can be removed after changing your tax address to a Portuguese one (usually after moving and obtaining a residence permit) — but specifically through changing the address in Portal das Finanças, not automatically when you obtain a residence permit.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Choose a representative', content: [
            { kind: 'paragraph', text: 'Options: a Portuguese lawyer with tax domicile in Portugal (Ordem dos Advogados list — portal.oa.pt) or a certified firm. The representative is an individual or legal entity with tax domicile in Portugal. Additional requirements may apply for activities involving IVA.' }
          ]},
          { id: 's2', title: '2. Send documents', content: [
            { kind: 'checklist', items: ['Passport scan', 'Proof of address from the last 3 months (bill, bank statement)', 'Signed power of attorney (procuração) — the representative usually sends a template'] }
          ]},
          { id: 's3', title: '3. Receive the NIF by email', content: [
            { kind: 'timeline', text: 'Usually 5-15 working days.' }
          ]}
        ]},
        { kind: 'cost', items: [{ label: 'Representative', amountEURMin: 70, amountEURMax: 150, note: 'one-off, often includes 1 address change' }] }
      ]
    },
    {
      id: 'after',
      title: 'After obtaining the NIF',
      content: [
        { kind: 'checklist', items: [
          'Activate the password for Portal das Finanças (see the guide "Get a Finanças password")',
          'Check that the address is recorded correctly (important for tax correspondence)',
          'Check resident/non-resident status in AT and whether there is a tax representative — update if necessary',
          'Keep the NIF confirmation (printout of the Número de Identificação Fiscal)'
        ]},
        { kind: 'warning', text: 'If you have in practice become tax resident in Portugal (183+ days or a permanent place of residence), change your tax address to a Portuguese one separately. While AT shows a foreign address/non-resident status, a Portuguese employer withholds IRS as for a non-resident — for employment income this is usually a fixed rate of 25% (Código do IRS art. 71).' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'original + copy of all completed pages' },
    { title: 'Proof of address', note: 'utility bill / bank statement no older than 3 months' },
    { title: 'Power of attorney (procuração)', note: 'only for the representative option' }
  ],
  costs: [
    { label: 'Finanças state fee', amountEUR: 0 },
    { label: 'Through a representative (online)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'Autoridade Tributária — Ofício Circulado No 90054/2022 (tax representative)', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/instrucoes_administrativas/Pages/oficio-circulado-90054-2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Request a NIF for an individual', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS — tax domicile and taxation of non-residents', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}

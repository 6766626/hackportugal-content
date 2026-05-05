export default {
  editorialVoice: 'hackportugal',
  id: 'nif-third-country',
  categoryId: 'documents_fiscal',
  title: 'How to get an NIF — third-country nationals',
  tldr: 'NIF (Número de Identificação Fiscal) — the Portuguese tax identification number, required for everything: renting, banking, SIM, SNS. Since 2022 (Ofício Circulado 90054/2022), merely obtaining an NIF as a non-resident with an address outside the EU/EEA does not always require a fiscal representative — the obligation arises when you have a tax connection to Portugal (income, property, car, activity). Free at Finanças in person or €70–€150 via a representative online (market range 2026).',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['nif', 'documents', 'taxes', 'first steps'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'What the NIF is and what it is for',
      content: [
        { kind: 'paragraph', text: 'A 9-digit tax number. Issued by the tax authority Autoridade Tributária e Aduaneira (AT). Without an NIF you cannot: rent housing on a long-term contract, open an account with a Portuguese bank, sign an employment contract, buy a SIM on contract, register with the SNS, or buy a car or property.' },
        { kind: 'warning', text: 'Do not confuse it with the NISS (social security number) — this is a separate number in the Segurança Social, required for employment and benefits.' },
        { kind: 'paragraph', text: 'Residence permit ≠ tax residency. Getting a residence card by itself does not make you a tax resident and does not change your tax address with the AT — you must do that separately.' }
      ]
    },
    {
      id: 'variant-in-portugal',
      title: 'Option A. In person at Finanças (if you are already in Portugal)',
      audience: { statuses: ['visiting', 'newlyArrived', 'resident'] },
      content: [
        { kind: 'paragraph', text: 'If you go to Finanças in person, you must be lawfully present in Portugal: on a visa, under visa‑free entry, or with a valid residence permit of another Schengen country (where applicable).' },
        { kind: 'checklist', items: [
          'Passport (original + copy)',
          'For a foreign tax address — proof of address from your country of residence (utility bill or bank statement not older than 3 months). It is better to state a Portuguese address only where there is a real basis: a tenancy agreement, atestado de residência, utility bills. A hotel voucher is usually not accepted as a tax address',
          'If your tax address is outside the EU/EEA and you have a tax connection to Portugal (income/property/car/activity) — a fiscal representative with tax domicile in Portugal. For simply obtaining an NIF without tax obligations, the AT has allowed the absence of a representative since 2022, but individual offices may still request one in practice'
        ]},
        { kind: 'paragraph', text: 'How to book: Finanças website → "Agendamentos" → in-person appointment → choose the service "Atribuição de Número de Contribuinte". Without an appointment — walk‑in queue from early morning in large branches in Lisboa/Porto.' },
        { kind: 'timeline', text: 'You receive the NIF on the day of the visit (they will print a confirmation with the Número de Identificação Fiscal).' },
        { kind: 'cost', items: [{ label: 'Finanças fee', amountEUR: 0 }] }
      ]
    },
    {
      id: 'variant-remote',
      title: 'Option B. Remotely via a representative',
      content: [
        { kind: 'paragraph', text: 'If you are not yet in Portugal or do not want to travel and queue, hire a fiscal representative (lawyer/company). You can remove the representative after changing your tax address to a Portuguese one (usually after moving and obtaining a residence permit) — but specifically by changing the address in the Portal das Finanças, not automatically upon receiving the residence permit.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Choose a representative', content: [
            { kind: 'paragraph', text: 'Options: a Portuguese lawyer with tax domicile in Portugal (Ordem dos Advogados list — portal.oa.pt) or a certified firm. A representative may be a natural or legal person with tax domicile in Portugal. For activities involving IVA, additional requirements may apply.' }
          ]},
          { id: 's2', title: '2. Send the documents', content: [
            { kind: 'checklist', items: ['Scan of passport', 'Proof of address from the last 3 months (utility bill or bank statement)', 'Signed power of attorney (procuração) — the representative usually sends a template'] }
          ]},
          { id: 's3', title: '3. Receive the NIF by email', content: [
            { kind: 'timeline', text: 'Usually 5–15 working days.' }
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
          'Activate the password for the Portal das Finanças (see the guide "Get a password for Finanças")',
          'Check that the address is recorded correctly (important for tax correspondence)',
          'Check the resident/non-resident status in the AT and whether a fiscal representative is listed — update if necessary',
          'Keep the NIF confirmation (printout of the Número de Identificação Fiscal)'
        ]},
        { kind: 'warning', text: 'If you have in fact become a Portuguese tax resident (183+ days or habitual abode), change your tax address to a Portuguese one separately. While the AT shows a foreign address/non-resident status, a Portuguese employer withholds IRS as for a non-resident — for employment income usually a flat rate of 25% (Código do IRS art. 71).' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'original + copy of all completed pages' },
    { title: 'Proof of address', note: 'utility bill / bank statement not older than 3 months' },
    { title: 'Power of attorney (procuração)', note: 'only for the representative option' }
  ],
  costs: [
    { label: 'Finanças fee', amountEUR: 0 },
    { label: 'Via representative (online)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'Autoridade Tributária — Ofício Circulado n.º 90054/2022 (fiscal representative)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Oficio_Circulado_90054_2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Request an NIF for an individual', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS — tax domicile and taxation of non-residents', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}

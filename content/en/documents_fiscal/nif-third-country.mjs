export default {
  editorialVoice: 'hackportugal',
  id: 'nif-third-country',
  categoryId: 'documents_fiscal',
  title: 'How to get a NIF — third-country nationals',
  tldr: 'NIF (Número de Identificação Fiscal) is the Portuguese tax number, needed for almost everything: renting, banking, a SIM, SNS. Since 2022 (Ofício Circulado 90054/2022), the mere fact that a non-resident with an address outside the EU/EEA obtains a NIF does not always require a fiscal representative — the obligation arises when there is a tax connection with Portugal (income, property, car, activity).\n\nFree at Finanças in person or €70–150 through a representative online (2026 market range).',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['nif', 'documents', 'taxes', 'first steps'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'What a NIF is and why you need one',
      content: [
        { kind: 'paragraph', text: 'A 9-digit tax number. It is issued by the tax authority, Autoridade Tributária e Aduaneira (AT). Without a NIF you cannot: rent housing under a long-term contract, open an account with a Portuguese bank, sign an employment contract, buy a contract SIM, register with SNS, or buy a car or property.' },
        { kind: 'warning', text: 'Do not confuse it with NISS (social security number) — this is a separate number in Segurança Social, needed for employment and benefits.' },
        { kind: 'paragraph', text: 'A residence permit ≠ tax residence. Getting a resident card does not by itself make you a tax resident and does not change your tax address in AT — this must be done separately.' }
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
          'For a foreign tax address — proof of address from your country of residence (utility bill, bank statement no older than 3 months). A Portuguese address is best used only when there is a real basis: rental contract, atestado de residência, utility bills. A hotel voucher is usually not suitable for a tax address',
          'If your tax address is outside the EU/EEA and a tax connection with Portugal arises (income/property/car/activity), as a general rule you need to appoint a fiscal representative with tax domicile in Portugal. An alternative for many individuals is subscribing to electronic notifications/citations in Portal das Finanças/Caixa Postal Eletrónica; for IVA/professional activity and certain cases, a representative remains mandatory'
        ]},
        { kind: 'paragraph', text: 'How to get an appointment: Finanças website → "Agendamentos" → in-person appointment → choose the service "Atribuição de Número de Contribuinte". In some offices a walk-in queue may be possible, but service without an appointment is not guaranteed; it is better to book or check with the specific serviço de finanças.' },
        { kind: 'timeline', text: 'You receive the NIF on the day of the visit (they print a confirmation with the Número de Identificação Fiscal).' },
        { kind: 'cost', items: [{ label: 'Finanças fee', amountEUR: 0 }] }
      ]
    },
    {
      id: 'variant-remote',
      title: 'Option B. Remotely through a representative',
      content: [
        { kind: 'paragraph', text: 'If you are not yet in Portugal or do not want to travel and queue, you hire a fiscal representative (lawyer/company).\n\nYou can remove the representative after changing your tax address to a Portuguese one (usually after moving and obtaining a residence permit) — but specifically by changing the address in Portal das Finanças, not automatically when you receive a residence permit.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Choose a representative', content: [
            { kind: 'paragraph', text: 'A representative is an individual or legal entity with tax domicile in Portugal. Options: Portuguese lawyer (Ordem dos Advogados — portal.oa.pt), solicitador, contabilista certificado, or a company/provider. Check the contract, powers, renewal price and who exactly will be the fiscal representative; there is no special universal state certification for “NIF companies”. Additional requirements may apply for activities with IVA.' }
          ]},
          { id: 's2', title: '2. Send the documents', content: [
            { kind: 'checklist', items: ['Passport scan', 'Proof of address from the last 3 months (bill, bank statement)', 'Signed power of attorney (procuração) — the representative usually sends a template'] }
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
      title: 'After receiving the NIF',
      content: [
        { kind: 'checklist', items: [
          'Activate the password for Portal das Finanças (see the guide "Get a Finanças password")',
          'Check that the address is recorded correctly (important for tax correspondence)',
          'Check resident/non-resident status in AT and whether there is a fiscal representative — update if necessary',
          'Keep the NIF confirmation (printout of the Número de Identificação Fiscal)'
        ]},
        { kind: 'warning', text: 'If you have in fact become a tax resident of Portugal (183+ days or a permanent home), separately change your tax address to a Portuguese one. While AT shows a foreign address/non-resident status, a Portuguese employer withholds IRS as for a non-resident — for employment income the rate is usually 25% (Código do IRS art. 71; withholding at source — under the retenção na fonte rules).' }
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
    { title: 'Autoridade Tributária — Ofício Circulado n.º 90054/2022 (fiscal representative)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Oficio_Circulado_90054_2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Request a NIF for an individual', url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS — tax domicile and taxation of non-residents', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}

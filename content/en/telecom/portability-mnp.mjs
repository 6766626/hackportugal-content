export default {
  editorialVoice: 'hackportugal',
  id: 'portability-mnp',
  categoryId: 'telecom',
  title: 'Number portability (MNP) between operators',
  tldr: 'Number portability between Portuguese operators (Lei das Comunicações Eletrónicas no. 16/2022 + Regulamento da Portabilidade no. 38/2025) is FREE, takes a maximum of 1 working day, and is requested from the new operator (they deal with the old one themselves).\n\nTo port your number you need the Código de Validação da Portabilidade (CVP) — a 12-digit code. For mobile numbers you can get it by SMS with the text “CVP” to your current operator’s own short number (each one differs: MEO 16200, Vodafone 12815, NOS 1242); on post-paid plans it is printed on your bill.\n\nPortability does NOT reset the lock-in period with the old operator — if there is a penalty, it must be paid.',
  tags: ['number portability', 'mnp', 'switching operator', 'porting code'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'how-it-works',
      title: '🔄 How MNP works',
      content: [
        { kind: 'paragraph', text: 'The right to port your number (MNP, Mobile Number Portability) when changing operator is guaranteed by law — the Lei das Comunicações Eletrónicas (Lei no. 16/2022); the procedure is detailed in the Regulamento da Portabilidade no. 38/2025 (in force since 10 November 2025). The service is free. You do NOT need to go to the old operator’s shop.' },
        { kind: 'checklist', items: [
          '📅 Porting time: 1 working day (by law — a maximum of 1 working day after consent)',
          '💰 Cost: €0',
          '⏰ Downtime: up to 3 hours on the porting day (usually 30–60 minutes)',
          '📲 The number stays the same, the SIM changes to a new one (from the new operator)',
          '⚠️ IMPORTANT: the service with the old operator may leave an active lock-in period — and a penalty, if there is one'
        ]}
      ]
    },
    {
      id: 'step-by-step',
      title: '📋 Step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Obtain the porting code (CVP) from the old operator', content: [
            { kind: 'checklist', items: [
              '📲 For mobile: SMS with the text “CVP” from the old SIM to YOUR operator’s own short number — there is no single number, each one differs: MEO — 16200, Vodafone — 12815, NOS — 1242 (NOWO — 928190785)',
              '🧾 On post-paid plans the CVP is printed on the monthly bill; on pre-paid the operator sends it by SMS within 24 hours of activation',
              '🔢 The CVP is a 12-digit code; you give it to the new operator when requesting the port',
              '💡 Alternative: request the CVP in your customer area, via the support line, or at the operator’s shop'
            ]}
          ]},
          { id: 'p2', title: '2. Submit the request with the new operator', content: [
            { kind: 'checklist', items: [
              '📍 Go to the new operator’s shop with Cartão de Cidadão or passport + porting code',
              'Sign the new contract (tariff)',
              'Receive the new SIM (or eSIM)',
              'Do not activate the new SIM until you receive porting confirmation!'
            ]}
          ]},
          { id: 'p3', title: '3. Porting day', content: [
            { kind: 'checklist', items: [
              '⏰ Porting usually happens at night (00:00–03:00) or in the morning',
              '📵 Old SIM: “no network” — switch to the new one',
              '📲 Insert the new SIM and restart the phone',
              '✅ Same number, new operator',
              '🔁 If the porting has not happened within 24 hours — call the new operator to escalate'
            ]}
          ]},
          { id: 'p4', title: '4. Close the old account', content: [
            { kind: 'checklist', items: [
              '📝 The old operator automatically closes the account after porting',
              '💸 The final bill arrives for the days up to porting (pro rata)',
              '⚠️ If the old contract had a lock-in period — the penalty will be on the final bill',
              '🧾 Keep the last receipt for your records'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'pitfalls',
      title: '⚠️ Pitfalls',
      content: [
        { kind: 'checklist', items: [
          '🛑 The lock-in period with the old operator is NOT reset — if there are 6 months left on the contract × €20 — the penalty is around €60 (50%)',
          '🛑 If the old operator had a bundle (fibre + television + SIM) — a separate request is needed for each service',
          '🛑 Porting happens within 1 working day — but an operator may “drag it out” for 2–3 days. By law, you can complain to ANACOM',
          '🛑 If you had a post-paid plan with the old operator — the last bill for “unclosed” days arrives 2–3 weeks later',
          '🛑 Sometimes the new operator asks you to “pay extra for the SIM” (≈ €10) — formally this is unlawful for MNP customers',
          '✅ Keep the SMS with the porting code (CVP) as evidence for ANACOM'
        ]}
      ]
    },
    {
      id: 'reverse',
      title: '↩️ If something went wrong',
      content: [
        { kind: 'paragraph', text: 'You have 14 days to withdraw from a new contract concluded remotely, under DL 24/2014. Returning to the old operator is a separate porting procedure (1 day).' },
        { kind: 'checklist', items: [
          '📞 Old number not working for 24+ hours — call the new operator and ANACOM',
          '🛡️ ANACOM: anacom.pt → Reclamação online → choose the operator → describe the problem',
          '📑 Livro de Reclamações in the new operator’s shop — a mandatory channel',
          '⏰ Average resolution time via ANACOM: 2–3 weeks, effective'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Number portability (MNP)', amountEUR: 0 },
    { label: 'Obtaining the porting code', amountEUR: 0 },
    { label: 'Lock-in penalty (if the contract is active)', amountEURMin: 0, amountEURMax: 300, note: 'depends on the remaining term' }
  ],
  sources: [
    { title: 'ANACOM — Regulamento da Portabilidade no. 38/2025 (in force since 10.11.2025)', url: 'https://www.anacom.pt/render.jsp?contentId=1801193', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'ANACOM — How to find my Portability Validation Code (CVP)', url: 'https://www.anacom.pt/render.jsp?contentId=1471912', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'ANACOM — Number portability', url: 'https://www.anacom.pt/render.jsp?categoryId=324335', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

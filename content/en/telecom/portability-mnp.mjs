export default {
  editorialVoice: 'hackportugal',
  id: 'portability-mnp',
  categoryId: 'telecom',
  title: 'Number portability (MNP) between operators',
  tldr: 'Number portability between Portuguese operators under DL 56/2010 is FREE, takes 1 working day, and is requested from the new operator (they deal with the old one themselves).\n\nTo obtain the Código de Validação da Portabilidade (CVP): send an SMS with the text “CVP” to the short number 1696 from the old SIM (for mobile numbers).\n\nThe standard command for Portuguese operators is exactly “CVP”, not “PORT”. Portability does NOT reset the lock-in period with the old operator — if there is a penalty, it must be paid.',
  tags: ['number portability', 'mnp', 'switching operator', 'porting code'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'how-it-works',
      title: '🔄 How MNP works',
      content: [
        { kind: 'paragraph', text: 'MNP (Mobile Number Portability) is guaranteed by law under DL 56/2010 — every user has the right to port their number when changing operator without losing it. The service is free. You do NOT need to go to the old operator’s shop.' },
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
          { id: 'p1', title: '1. Obtain the porting code from the old operator', content: [
            { kind: 'checklist', items: [
              '📲 SMS “CVP” to number 1696 from the old SIM (Código de Validação da Portabilidade — the standard command for Portuguese operators)',
              '🕒 You will receive the porting code by SMS within 1 hour',
              '⚠️ The code is valid for 30 days',
              '💡 Alternative: call the old operator’s support and ask them to arrange a number porting request'
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
          '✅ Keep the SMS with the porting code as evidence for AT/ANACOM'
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
    { title: 'DL 56/2010 — Number portability', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/56-2010-307067', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANACOM — Portability', url: 'https://www.anacom-consumidor.com/portabilidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}

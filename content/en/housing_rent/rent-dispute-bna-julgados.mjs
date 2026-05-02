export default {
  editorialVoice: 'hackportugal',
  id: 'rent-dispute-bna-julgados',
  categoryId: 'housing_rent',
  title: 'Dispute with a landlord: DECO, Julgados de Paz, BNA',
  tldr: 'In Portugal, it is best to handle a dispute with a landlord step by step: written complaint → DECO/mediation → Julgados de Paz, if the amount is up to €15,000 and it is not an eviction → court. BNA does not help you “complain” about a landlord: it is an electronic channel for the Procedimento Especial de Despejo, usually used by the landlord for eviction. If you receive a BNA notice, deadlines are short: usually 15 days for oposição, so it is best to go straight to a lawyer.',
  tags: ['rent', 'bna', 'julgados', 'deco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map',
      title: 'Escalation map: where to go with which dispute',
      content: [
        { kind: 'paragraph', text: 'Do not start with the police or BNA if the dispute is about repairs, the deposit, a rent increase or unlawful deductions. In Portugal, written trails matter: email, carta registada com aviso de receção, recibos de renda, photographs, orçamento from a tradesperson.' },
        { kind: 'checklist', items: [
          'Deposit not returned — first a written demand, then DECO/mediation or Julgados de Paz, if the amount is up to €15,000.',
          'Landlord does not carry out urgent repairs — written notice with a prazo, then Julgados de Paz or Tribunal Judicial; if there is a health risk, also Câmara Municipal.',
          'Unlawful renda increase — check the contract, term, 2026 index for ordinary annual atualização: 2.16%; then submit a written objection.',
          'Landlord enters without permission — written prohibition; if there are threats or a break-in, call PSP/GNR.',
          'Notice of contract termination — check the form, deadline and grounds; do not move out just because of a verbal request.',
          'You received a letter from BNA or agente de execução — this is already an eviction procedure; deadlines are short, and you need oposição through a lawyer.',
          'Dispute amount above €15,000 or the dispute is complex — usually Tribunal Judicial, not Julgados de Paz.',
          'Eviction as a claim is not handled by Julgados de Paz: BNA or court is used for despejo.'
        ] },
        { kind: 'warning', text: 'Do not withhold the last renda “against the deposit” without a legal check. This often gives the landlord a formal argument of late payment.' }
      ]
    },
    {
      id: 'direct-letter',
      title: 'Step 1 — written complaint to the landlord',
      content: [
        { kind: 'paragraph', text: 'Verbal agreements on WhatsApp are useful as context, but formal messages are needed for a dispute. Send an email and, if the issue is financial or urgent, a carta registada com aviso de receção to the landlord’s address from the contract or the latest official correspondence.' },
        { kind: 'checklist', items: [
          'State the contract number, the flat address and the start date of the arrendamento.',
          'Describe the fact: “infiltração na cozinha desde 10.03.2026”, “caução de €1,840 não devolvida”.',
          'Attach evidence: photos, videos, recibos de renda, Multibanco/MB WAY payment confirmations, orçamento, technical report.',
          'Set a reasonable deadline: 5–10 working days for a reply, less only in an emergency.',
          'For repairs, state separately whether the defect prevents normal living or creates a health risk.',
          'For the deposit, ask for an itemised breakdown of deductions and copies of repair invoices.',
          'For a rent increase, ask for the legal basis and calculation; for ordinary indexation in 2026, the reference point is 2.16%.',
          'Keep proof of delivery, screenshots and outgoing files in PDF.'
        ] },
        { kind: 'paragraph', text: 'The wording should be calm: the aim is to show that you gave the landlord a chance to remedy the breach. This will be useful at DECO, Julgados de Paz or in court.' }
      ]
    },
    {
      id: 'deco-mediation',
      title: 'Step 2 — DECO and mediation before court',
      content: [
        { kind: 'paragraph', text: 'DECO is useful as an early filter: it helps check the contract, draft a letter, and assess the legality of a renda increase, caução deduction or refusal to repair. It is not a state court and not an enforcement body: a DECO decision by itself will not force the landlord to pay.' },
        { kind: 'checklist', items: [
          'Prepare the contrato de arrendamento and all aditamentos.',
          'Download recibos de renda from Portal das Finanças if the landlord issues them electronically.',
          'Collect proof of payment: bank transfers, Multibanco, MB WAY, receipts.',
          'Create a chronology: date of the problem → first message → reply → repeated complaint.',
          'Calculate the claim amount separately: caução, repair costs, extra renda, interest, damage.',
          'Ask DECO to assess whether the dispute is suitable for Julgados de Paz or requires Tribunal Judicial.',
          'If the landlord agrees to negotiations, record the outcome in writing: amount, payment deadline, IBAN, repair date.'
        ] },
        { kind: 'warning', text: 'DECO does not replace an advogado if a notice has already arrived from BNA, a court citação or a letter from an agente de execução. In these cases, mediation may be too late.' }
      ]
    },
    {
      id: 'julgados-de-paz',
      title: 'Step 3 — Julgados de Paz: the fast route up to €15,000',
      content: [
        { kind: 'paragraph', text: 'Julgados de Paz are simplified “peace courts” for small civil disputes. Under Lei 78/2001, they can hear urban lease disputes up to €15,000, except actual ações de despejo. Typical tenant cases: return of caução, minor damage, repairs not carried out, payment disputes.' },
        { kind: 'checklist', items: [
          'Check territorial jurisdiction: the Julgado de Paz must serve the município where the flat is located or where the defendant has an address.',
          'The claim amount must be up to €15,000.',
          'An eviction claim is not filed there — that is BNA or Tribunal Judicial.',
          'A lawyer is usually not mandatory, but is useful in a dispute about contract termination or a large amount.',
          'The process starts with a requerimento: who you are, who the defendant is, the facts, the amount, the evidence.',
          'Mediação is usually proposed first; if there is no agreement, the case goes to julgamento.',
          'A Julgado de Paz decision has the force of a court judgment and can be enforced if the losing party does not pay.',
          'The court fee is normally €70 per case: it is usually split between the parties; the loser may pay more by decision.'
        ] },
        { kind: 'paragraph', text: 'This is a good route if the landlord ignores letters, but the dispute is simple and document-based. For example: “return the caução of €1,840, there are no deductions or invoices” is stronger than an abstract “the landlord is bad”.' }
      ]
    },
    {
      id: 'bna-eviction',
      title: 'Step 4 — BNA: if it is already about eviction',
      content: [
        { kind: 'paragraph', text: 'BNA is the Balcão Nacional do Arrendamento. It is not a tenant protection service, but an electronic channel of the Ministério da Justiça for the Procedimento Especial de Despejo. It is usually used by the landlord when they want to terminate the contract and recover the imóvel: for example, because of non-payment of renda, expiry of the contract or valid termination.' },
        { kind: 'checklist', items: [
          'BNA is used only where there are formal grounds and documents: written contract, notices, proof of debt or termination of the contract.',
          'If the landlord has not registered the contract with Finanças, this may complicate the procedure for them, but it does not always “save” the tenant.',
          'After notification, the tenant usually has 15 days for oposição; silence may lead to emissão de título de desocupação.',
          'Oposição must be legally grounded: incorrect notice, debt already paid, wrong amount, invalid termination, breach of deadlines.',
          'If oposição is filed, the case usually moves to Tribunal Judicial.',
          'If there is a risk of eviction, do not limit yourself to DECO: contact an advogado or apply for apoio judiciário through Segurança Social if your income is low.',
          'Do not ignore letters, even if they arrived at an old address or you do not understand the Portuguese text.'
        ] },
        { kind: 'warning', text: 'Actual eviction without a lawful procedure — changing locks, cutting off water/electricity, removing belongings — is unlawful. In that situation, call PSP/GNR, record evidence and urgently contact an advogado.' }
      ]
    },
    {
      id: 'evidence-and-tactics',
      title: 'What to prepare in advance',
      content: [
        { kind: 'paragraph', text: 'In rent disputes, the winner is not the person who complains the loudest, but the one with a tidy evidence file. Prepare it before the consultation: this saves money and reduces the risk of missing a deadline.' },
        { kind: 'checklist', items: [
          'Contrato de arrendamento, aditamentos, furniture inventário, key handover record.',
          'Landlord’s NIF, address for notices, IBAN, name of the management company, if any.',
          'All recibos de renda and proof of payment by month.',
          'Letters about renda increases, termination, repairs, visitas, caução.',
          'Photos/videos with dates: defects, mould, leaks, damage on move-in and move-out.',
          'Orçamentos and faturas from tradespeople; do not pay for major repairs without written consent unless there is an urgent emergency.',
          'Witnesses: neighbours, técnicos, former tenants; write down names and contacts.',
          'One-page chronology: dates, events, amounts, links to evidence.',
          'Claim calculation in €: principal, interest, expenses, amounts already paid.'
        ] },
        { kind: 'paragraph', text: 'If the dispute involves unsafe housing — mould, electrical risk, collapse, sewage — you can also contact Câmara Municipal in parallel. A municipal inspection does not replace a monetary claim, but an official relatório strengthens your position.' }
      ]
    }
  ],
  costs: [
    { label: 'Carta registada com aviso de receção', amountEURMin: 3, amountEURMax: 6, note: 'Depends on weight and the CTT service; needed as proof of delivery.' },
    { label: 'Julgados de Paz', amountEUR: 70, note: 'Standard taxa de justiça per case; it is usually split between the parties, but the loser may pay more.' },
    { label: 'Advogado consultation on renting', amountEURMin: 60, amountEURMax: 150, note: 'Indicative price for an initial consultation; in Lisbon and for urgent BNA matters it may be more expensive.' },
    { label: 'Apoio judiciário', amountEUR: 0, note: 'Free or partially free legal aid through Segurança Social for low income; the decision is not immediate.' }
  ],
  sources: [
    { title: 'Balcão Nacional do Arrendamento — official BNA portal', url: 'https://www.bna.mj.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz — jurisdiction, contacts and information for citizens', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001 — organização, competência e funcionamento dos Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34480075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 6/2006 — Novo Regime do Arrendamento Urbano and procedures for terminating a tenancy', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34515375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

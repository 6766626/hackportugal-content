export default {
  editorialVoice: 'hackportugal',
  id: 'rent-dispute-bna-julgados',
  categoryId: 'housing_rent',
  title: 'Dispute with a landlord: DECO, Julgados de Paz, BNA',
  tldr: 'In Portugal, a dispute with a landlord is best handled step by step: written complaint → DECO/mediation → Julgados de Paz, if the amount is up to €15,000 and it is not an eviction → court. BNA is not a complaints service: tenants most often encounter it through Procedimento Especial de Despejo, but BNA also provides Injunção em Matéria de Arrendamento for specific tenant or landlord claims provided for by law. For an ordinary complaint about a deposit or a domestic conflict, this is not a universal route. If you have received a BNA notice, deadlines are short: usually 15 days for oposição, so it is best to go to a lawyer immediately.',
  tags: ['rent', 'bna', 'julgados', 'deco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map',
      title: 'Escalation map: where to take which dispute',
      content: [
        { kind: 'paragraph', text: 'Do not start with the police or BNA if the dispute is about repairs, a deposit, a rent increase or unlawful deductions. In Portugal, written trails matter: email, carta registada com aviso de receção, recibos de renda, photographs, an orçamento from a tradesperson.' },
        { kind: 'checklist', items: [
          'Deposit not being returned — first a written demand, then DECO/mediation or Julgados de Paz, if the amount is up to €15,000.',
          'Landlord is not carrying out urgent repairs — written notice with a prazo, then Julgados de Paz or Tribunal Judicial; if there is a health risk, also Câmara Municipal.',
          'Unlawful rent increase — for the ordinary annual atualização in 2026, use the official 2026 coefficient (1.0224, i.e. 2.24%) published by INE in the Diário da República; do not confuse it with 2.16% for 2025. The coefficient changes every year, so check the INE Aviso for the relevant year.',
          'Landlord enters without permission — written prohibition; in case of threats or forced entry, call PSP/GNR.',
          'Notice of termination of the contract — check the form, deadline and grounds; do not move out solely because of a verbal request.',
          'You have received a letter from BNA or an agente de execução — this is already an eviction procedure; deadlines are short, and oposição through a lawyer is needed.',
          'The disputed amount is above €15,000 or the dispute is complex — usually Tribunal Judicial, not Julgados de Paz.',
          'Eviction as a claim is not heard by Julgados de Paz: BNA or court is used for despejo.'
        ] },
        { kind: 'warning', text: 'Do not withhold the last renda “against the deposit” without legal review. This often gives the landlord a formal argument that payment is overdue.' }
      ]
    },
    {
      id: 'direct-letter',
      title: 'Step 1 — written complaint to the landlord',
      content: [
        { kind: 'paragraph', text: 'Verbal agreements on WhatsApp are useful as context, but a dispute needs formal communications. Send an email and, if the issue is financial or urgent, a carta registada com aviso de receção to the landlord’s address in the contract or in the latest official correspondence.' },
        { kind: 'checklist', items: [
          'State the contract number, the address of the flat and the start date of the arrendamento.',
          'Describe the fact: “infiltração na cozinha desde 10.03.2026”, “caução de €1,840 não devolvida”.',
          'Attach evidence: photos, videos, recibos de renda, comprovativos Multibanco/MB WAY, orçamento, relatório técnico.',
          'Set a reasonable deadline: 5–10 working days for a reply, less only in an emergency.',
          'For repairs, state separately whether the defect prevents normal living or creates a health risk.',
          'For the deposit, ask for an itemised breakdown of deductions and copies of repair invoices.',
          'For a rent increase, refer to the official 2026 coefficient (1.0224, i.e. 2.24%) rather than the 2.16% for 2025; remember that the percentage changes every year and must be checked against the INE/Diário da República Aviso for that year.',
          'Save proof of delivery, screenshots and outgoing files as PDFs.'
        ] },
        { kind: 'paragraph', text: 'The wording should be calm: the aim is to show that you gave the landlord a chance to correct the breach. This will be useful at DECO, Julgados de Paz or in court.' }
      ]
    },
    {
      id: 'deco-mediation',
      title: 'Step 2 — DECO and mediation before court',
      content: [
        { kind: 'paragraph', text: 'DECO is useful as an early filter: it helps check the contract, draft a letter, and assess the legality of a renda increase, caução deductions or refusal to carry out repairs. It is not a state court and not an enforcement authority: a DECO decision by itself will not force the landlord to pay.' },
        { kind: 'checklist', items: [
          'Prepare the contrato de arrendamento and all aditamentos.',
          'Download recibos de renda from Portal das Finanças if the landlord issues them electronically.',
          'Gather proof of payment: bank transfers, Multibanco, MB WAY, receipts.',
          'Make a chronology: date of the problem → first message → reply → repeated complaint.',
          'Calculate the claim amount separately: caução, repair expenses, excess renda, interest, damage.',
          'Ask DECO to assess whether the dispute is suitable for Julgados de Paz or whether Tribunal Judicial is needed.',
          'If the landlord agrees to negotiate, record the outcome in writing: amount, payment deadline, IBAN, repair date.'
        ] },
        { kind: 'warning', text: 'DECO does not replace an advogado if a notice from BNA, a court citação or a letter from an agente de execução has already arrived. In these cases, mediation may be too late.' }
      ]
    },
    {
      id: 'julgados-de-paz',
      title: 'Step 3 — Julgados de Paz: a faster route up to €15,000',
      content: [
        { kind: 'paragraph', text: 'Julgados de Paz are simplified “justice of the peace courts” for small civil disputes. Under Lei 78/2001, they can hear urban lease disputes up to €15,000, except for ações de despejo themselves. Typical tenant cases: return of caução, minor damage, uncompleted repairs, payment disputes.' },
        { kind: 'checklist', items: [
          'Check territorial jurisdiction: the Julgado de Paz must serve the município where the flat is located or where the defendant has an address.',
          'The claim amount must be up to €15,000.',
          'An eviction claim is not filed there — that is BNA or Tribunal Judicial.',
          'A lawyer is usually not mandatory, but is useful in a dispute about termination of the contract or a large amount.',
          'The process starts with a requerimento: who you are, who the defendant is, facts, amount, evidence.',
          'Mediação is usually offered first; if there is no agreement, the case goes to julgamento.',
          'A Julgado de Paz decision has the force of a court judgment and can be enforced if the losing party does not pay.',
          'The court fee is normally €70 per case: it is usually shared between the parties; the loser may pay more by decision.'
        ] },
        { kind: 'paragraph', text: 'This is a good route if the landlord ignores letters, but the dispute is simple and documentary. For example: “return the caução of €1,840, there are no deductions or invoices” is stronger than an abstract “the landlord is bad”.' }
      ]
    },
    {
      id: 'bna-eviction',
      title: 'Step 4 — BNA: if it is already about eviction',
      content: [
        { kind: 'paragraph', text: 'BNA — Balcão Nacional do Arrendamento. This is an electronic channel of the Ministério da Justiça primarily for Procedimento Especial de Despejo, and also for Injunção em Matéria de Arrendamento in special cases. It is not a general tenant protection service and not a place for an ordinary “complaint”. It is usually used by a landlord who wants to terminate the contract and recover the imóvel: for example, because of non-payment of renda, expiry of the contract or valid termination.' },
        { kind: 'checklist', items: [
          'For Procedimento Especial de Despejo, formal grounds and documents are needed: a written contract, notices, evidence of debt or termination of the contract. For Injunção em Matéria de Arrendamento, separate grounds and evidence apply, for example for certain housing defects or risks.',
          'If the landlord has not registered the contract with Finanças, this may complicate the procedure for them, but it does not always “save” the tenant.',
          'After notification, the tenant usually has 15 days for oposição; silence may lead to emissão de título de desocupação.',
          'Oposição must be legally substantiated: incorrect notice, debt already paid, wrong amount, invalid termination, breach of deadlines.',
          'If oposição is filed, the case usually moves to Tribunal Judicial.',
          'If there is a risk of eviction, do not limit yourself to DECO: contact an advogado or seek apoio judiciário through Segurança Social if your income is low.',
          'Do not ignore letters, even if they arrived at an old address or you do not understand the Portuguese text.'
        ] },
        { kind: 'warning', text: 'Actual eviction without a lawful procedure — changing locks, cutting off water/electricity, removing belongings — is unlawful. In that situation, call PSP/GNR, record evidence and urgently contact an advogado.' }
      ]
    },
    {
      id: 'evidence-and-tactics',
      title: 'What to prepare in advance',
      content: [
        { kind: 'paragraph', text: 'In rental disputes, the winner is not the person who complains loudest, but the person with a tidy evidence file. Prepare it before a consultation: it saves money and reduces the risk of missing a deadline.' },
        { kind: 'checklist', items: [
          'Contrato de arrendamento, aditamentos, furniture inventory, key handover record.',
          'Landlord’s NIF, address for notices, IBAN, name of the property management company, if any.',
          'All recibos de renda and proof of payment by month.',
          'Letters about renda increases, termination, repairs, visitas, caução.',
          'Photos/videos with dates: defects, mould, leaks, damage on move-in and move-out.',
          'Orçamentos and faturas from tradespeople; do not pay for major repairs without written consent unless there is an urgent emergency.',
          'Witnesses: neighbours, técnicos, former tenants; record names and contacts.',
          'A 1-page chronology: dates, events, amounts, links to evidence.',
          'Calculation of the claim in €: principal, interest, expenses, amounts already paid.'
        ] },
        { kind: 'paragraph', text: 'If the dispute concerns unsafe housing — mould, electrical risk, collapse, sewage — you can also contact Câmara Municipal in parallel. A municipal inspection does not replace a monetary claim, but an official relatório strengthens your position.' }
      ]
    }
  ],
  costs: [
    { label: 'Carta registada com aviso de receção', amountEURMin: 3, amountEURMax: 6, note: 'Depends on weight and the CTT service; needed as proof of delivery.' },
    { label: 'Julgados de Paz', amountEUR: 70, note: 'Standard taxa de justiça per case; usually shared between the parties, but the loser may pay more.' },
    { label: 'Advogado consultation on rental matters', amountEURMin: 60, amountEURMax: 150, note: 'Indicative price for an initial consultation; in Lisbon and for urgent BNA matters it may be more expensive.' },
    { label: 'Apoio judiciário', amountEUR: 0, note: 'Free or partly free legal aid through Segurança Social for low income; the decision is not immediate.' }
  ],
  sources: [
    { title: 'Balcão Nacional do Arrendamento — official BNA portal', url: 'https://www.bna.mj.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz — jurisdiction, contacts and information for citizens', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001 — organisation, jurisdiction and functioning of Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34480075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 6/2006 — Novo Regime do Arrendamento Urbano and lease termination procedures', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34515375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}

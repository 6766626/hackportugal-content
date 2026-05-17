export default {
  editorialVoice: 'hackportugal',
  id: 'rent-dispute-bna-julgados',
  categoryId: 'housing_rent',
  title: 'Dispute with a landlord: DECO, Julgados de Paz, BNA',
  tldr: 'In Portugal, a dispute with a landlord is best handled step by step: written complaint → DECO/mediation → Julgados de Paz, if the amount is up to €15,000 and it is not an eviction → court. BNA does not help you “complain” about a landlord: it is an electronic channel for the Procedimento Especial de Despejo, usually used by the landlord for eviction. If you receive a BNA notice, deadlines are short: usually 15 days for oposição, so it is best to go straight to a lawyer.',
  tags: ['rent', 'bna', 'julgados', 'deco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map',
      title: 'Escalation map: where to go with which dispute',
      content: [
        { kind: 'paragraph', text: 'Do not start with the police or BNA if the dispute is about repairs, a deposit, a rent increase or unlawful deductions. In Portugal, written trails matter: email, carta registada com aviso de receção, recibos de renda, photographs, orçamento from a tradesperson.' },
        { kind: 'checklist', items: [
          'The deposit is not being returned — first send a written demand, then DECO/mediation or Julgados de Paz, if the amount is up to €15,000.',
          'The landlord is not carrying out urgent repairs — send a written notice with a prazo, then Julgados de Paz or Tribunal Judicial; if there is a health risk, also contact the Câmara Municipal.',
          'Unlawful increase in renda — check the contract, term, 2026 index for ordinary annual atualização: 2.16%; then send a written objection.',
          'The landlord enters without permission — send a written prohibition; in case of threats or forced entry, call PSP/GNR.',
          'Notice of termination of the contract — check the form, deadline and grounds; do not move out just because of an oral request.',
          'You have received a letter from BNA or an agente de execução — this is already an eviction procedure; deadlines are short, and oposição through a lawyer is needed.',
          'The dispute amount is above €15,000 or the dispute is complex — usually Tribunal Judicial, not Julgados de Paz.',
          'Eviction as a claim is not handled by Julgados de Paz: for despejo, BNA or the courts are used.'
        ] },
        { kind: 'warning', text: 'Do not withhold the last renda “against the deposit” without legal review. This often gives the landlord a formal argument that payment is in arrears.' }
      ]
    },
    {
      id: 'direct-letter',
      title: 'Step 1 — written complaint to the landlord',
      content: [
        { kind: 'paragraph', text: 'Oral agreements on WhatsApp are useful as context, but formal communications are needed for a dispute. Send an email and, if the issue is financial or urgent, a carta registada com aviso de receção to the landlord’s address in the contract or in the latest official correspondence.' },
        { kind: 'checklist', items: [
          'State the contract number, the flat address and the start date of the arrendamento.',
          'Describe the fact: “infiltração na cozinha desde 10.03.2026”, “caução de €1,840 não devolvida”.',
          'Attach evidence: photos, videos, recibos de renda, Multibanco/MB WAY proof, orçamento, relatório técnico.',
          'Set a reasonable deadline: 5–10 working days for a reply, less only in an emergency.',
          'For repairs, state separately whether the defect prevents normal occupation or creates a health risk.',
          'For the deposit, ask for a breakdown of deductions and copies of repair invoices.',
          'For a rent increase, ask for the legal basis and calculation; for ordinary indexation in 2026, the reference is 2.16%.',
          'Save proof of delivery, screenshots and outgoing files as PDFs.'
        ] },
        { kind: 'paragraph', text: 'The wording should be calm: the aim is to show that you gave the landlord a chance to correct the breach. This will be useful at DECO, Julgados de Paz or in court.' }
      ]
    },
    {
      id: 'deco-mediation',
      title: 'Step 2 — DECO and mediation before court',
      content: [
        { kind: 'paragraph', text: 'DECO is useful as an early filter: it helps review the contract, draft a letter, and assess the legality of a renda increase, caução deductions or refusal to carry out repairs. It is not a state court or an enforcement authority: a DECO decision in itself will not force the landlord to pay.' },
        { kind: 'checklist', items: [
          'Prepare the contrato de arrendamento and all aditamentos.',
          'Download recibos de renda from Portal das Finanças if the landlord issues them electronically.',
          'Gather proof of payment: bank transfers, Multibanco, MB WAY, receipts.',
          'Make a chronology: date of the problem → first message → reply → repeated complaint.',
          'Calculate the claim amount separately: caução, repair expenses, excess renda, interest, damage.',
          'Ask DECO to assess whether the dispute is suitable for Julgados de Paz or requires Tribunal Judicial.',
          'If the landlord agrees to negotiations, record the outcome in writing: amount, payment deadline, IBAN, repair date.'
        ] },
        { kind: 'warning', text: 'DECO does not replace an advogado if you have already received a notice from BNA, a court citação or a letter from an agente de execução. In these cases, mediation may be too late.' }
      ]
    },
    {
      id: 'julgados-de-paz',
      title: 'Step 3 — Julgados de Paz: a faster route up to €15,000',
      content: [
        { kind: 'paragraph', text: 'Julgados de Paz are simplified “small claims courts” for minor civil disputes. Under Lei 78/2001, they can hear urban lease disputes up to €15,000, except for ações de despejo themselves. Typical tenant cases: return of caução, minor damage, uncompleted repairs, payment disputes.' },
        { kind: 'checklist', items: [
          'Check territorial jurisdiction: the Julgado de Paz must cover the município where the flat is located or where the defendant has an address.',
          'The claim amount must be up to €15,000.',
          'Eviction claims are not filed there — that is BNA or Tribunal Judicial.',
          'A lawyer is usually not mandatory, but is useful in disputes over termination of the contract or a large amount.',
          'The process starts with a requerimento: who you are, who the defendant is, facts, amount, evidence.',
          'Mediação is usually offered first; if there is no agreement, the case goes to julgamento.',
          'A Julgado de Paz decision has the force of a court judgment and can be enforced if the losing party does not pay.',
          'The standard court fee is €70 per case: it is usually divided between the parties; the losing party may pay more by decision.'
        ] },
        { kind: 'paragraph', text: 'This is a good route if the landlord ignores letters, but the dispute is straightforward and document-based. For example: “return the caução of €1,840, there are no deductions or invoices” is stronger than an abstract “the landlord is bad”.' }
      ]
    },
    {
      id: 'bna-eviction',
      title: 'Step 4 — BNA: if it is already about eviction',
      content: [
        { kind: 'paragraph', text: 'BNA is the Balcão Nacional do Arrendamento. It is not a tenant protection service, but an electronic Ministério da Justiça channel for the Procedimento Especial de Despejo. It is usually used by the landlord when they want to terminate the contract and recover the imóvel: for example, because of unpaid renda, expiry of the contract or valid termination.' },
        { kind: 'checklist', items: [
          'BNA is used only with formal grounds and documents: a written contract, notices, proof of debt or termination of the contract.',
          'If the landlord has not registered the contract with Finanças, this may complicate the procedure for them, but it does not always “save” the tenant.',
          'After notification, the tenant usually has 15 days for oposição; silence may lead to emissão de título de desocupação.',
          'Oposição must be legally grounded: incorrect notice, the debt has already been paid, incorrect amount, invalid termination, breach of deadlines.',
          'If oposição is filed, the case usually moves to Tribunal Judicial.',
          'If there is a risk of eviction, do not limit yourself to DECO: contact an advogado or apply for apoio judiciário through Segurança Social if your income is low.',
          'Do not ignore letters, even if they arrived at an old address or you do not understand the Portuguese text.'
        ] },
        { kind: 'warning', text: 'De facto eviction without a lawful procedure — changing locks, cutting off water/electricity, removing belongings — is illegal. In this situation, call PSP/GNR, record evidence and urgently contact an advogado.' }
      ]
    },
    {
      id: 'evidence-and-tactics',
      title: 'What to prepare in advance',
      content: [
        { kind: 'paragraph', text: 'In rental disputes, the person who wins is not the one who complains the loudest, but the one with a tidy evidence folder. Prepare it before the consultation: this saves money and reduces the risk of missing a deadline.' },
        { kind: 'checklist', items: [
          'Contrato de arrendamento, aditamentos, furniture inventário, key handover record.',
          'Landlord’s NIF, address for notices, IBAN, name of the management company, if any.',
          'All recibos de renda and proof of payment by month.',
          'Letters about renda increases, termination, repairs, visitas, caução.',
          'Photos/videos with dates: defects, mould, leaks, damage at move-in and move-out.',
          'Orçamentos and faturas from tradespeople; do not pay for major repairs without written consent, unless there is an urgent emergency.',
          'Witnesses: neighbours, técnicos, former tenants; write down names and contacts.',
          'A 1-page chronology: dates, events, amounts, links to evidence.',
          'Calculation of the claim in €: principal, interest, expenses, amounts already paid.'
        ] },
        { kind: 'paragraph', text: 'If the dispute relates to unsafe housing — mould, electrical risk, collapse, sewage — you can also contact the Câmara Municipal in parallel. A municipal inspection does not replace a monetary claim, but an official relatório strengthens your position.' }
      ]
    }
  ],
  costs: [
    { label: 'Carta registada com aviso de receção', amountEURMin: 3, amountEURMax: 6, note: 'Depends on the weight and CTT service; needed as proof of delivery.' },
    { label: 'Julgados de Paz', amountEUR: 70, note: 'Standard taxa de justiça for the case; usually divided between the parties, but the losing party may pay more.' },
    { label: 'Advogado consultation on rent', amountEURMin: 60, amountEURMax: 150, note: 'Indicative price for an initial consultation; in Lisbon and with an urgent BNA matter it may be more expensive.' },
    { label: 'Apoio judiciário', amountEUR: 0, note: 'Free or partially free legal aid through Segurança Social for low income; the decision is not immediate.' }
  ],
  sources: [
    { title: 'Balcão Nacional do Arrendamento — official BNA portal', url: 'https://www.bna.mj.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz — jurisdiction, contacts and information for citizens', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001 — organisation, jurisdiction and operation of the Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34480075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 6/2006 — Novo Regime do Arrendamento Urbano and procedures for terminating a tenancy', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34515375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}

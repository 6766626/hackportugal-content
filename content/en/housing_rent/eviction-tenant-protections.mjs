export default {
  editorialVoice: 'hackportugal',
  id: 'eviction-tenant-protections',
  categoryId: 'housing_rent',
  title: 'Tenant protection during eviction: BNA, denúncia and refusal to renew',
  tldr: 'In Portugal, a landlord cannot simply change the locks: eviction goes through a court or the Balcão Nacional do Arrendamento (BNA).\n\nIf you have received a denúncia, oposição à renovação or a BNA notice, the key deadline is usually 15 days for oposição in the BNA and 30 days for replies on “rendas antigas”. In 2026, Lei 6/2006 (NRAU) and the rules of the Código Civil apply: check the notice period, grounds, form of the letter and protections for people aged 65+, disability ≥60% and old contracts.',
  tags: ['rent', 'bna', 'eviction', 'denúncia'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-arrived',
      title: '1. Understand exactly what you have been sent',
      content: [
        { kind: 'paragraph', text: 'In residential renting in Portugal there are several different “papers” that expats often call “eviction” with one word. The legal consequences are different: a simple letter from the landlord does not yet mean immediate eviction.' },
        { kind: 'checklist', items: [
          'Oposição à renovação — the landlord does not want to renew a fixed-term contract at the end of the term.',
          'Denúncia — termination of an open-ended contract or termination on a special ground, for example for the landlord’s own housing or major works.',
          'Resolução — termination due to breach, most often rent arrears.',
          'Comunicação para desocupação — a requirement to vacate the property after the contract has ended.',
          'Notificação do BNA — a procedimento especial de despejo has already been started; this is not a “warning”, but an eviction process.',
          'A letter from the landlord’s advogado/solicitador — important, but by itself it does not give the right to change the locks.',
          'An oral WhatsApp message saying “leave in a month” — usually insufficient for lawful termination of the tenancy.'
        ] },
        { kind: 'warning', text: 'Do not ignore registered letters. In Portugal, the deadline often starts running from receipt of the letter or from the moment when it is deemed delivered under postal notification rules, even if you did not collect it.' }
      ]
    },
    {
      id: 'check-validity',
      title: '2. Check the lawfulness of the denúncia or refusal to renew',
      content: [
        { kind: 'paragraph', text: 'For fixed-term contracts, the landlord usually uses oposição à renovação. For open-ended contracts — denúncia under Código Civil art. 1101. An error in the notice period, ground or form of notice can give the tenant a strong position for a reply and oposição.' },
        { kind: 'checklist', items: [
          'Check the type of contract: prazo certo, duração indeterminada or an old contract predating the NRAU.',
          'Check the start date, the end date of the current period and automatic renewals.',
          'For a fixed-term contract, the landlord must observe the notice periods under Código Civil art. 1097: 240 days if the contract or renewal term is ≥6 years; 120 days if from 1 to 6 years; 60 days if from 6 months to 1 year; 1/3 of the term if less than 6 months.',
          'Usually, the landlord’s oposição to the first renovação only takes effect after 3 years from the start of the contract, even if the contract states a 1-year term; there are exceptions, for example the need for housing for the landlord or their children.',
          'For an open-ended contract, the landlord’s denúncia is possible on the grounds in Código Civil art. 1101: the landlord’s own housing or that of their first-degree descendants, demolition/major reconstruction, or aviso mínimo 5 years.',
          'If the ground is the landlord’s own housing, check whether it is stated in writing and whether the requirements of art. 1102 have been met.',
          'If the ground is obras profundas or demolição, the landlord usually has to prove licences/municipal documents and comply with art. 1103.',
          'The notice must be in writing and sent by a proper method: carta registada com aviso de receção, notificação avulsa or another lawful channel.',
          'Check the address, the names of all tenants, NIF, description of the imóvel and the signature of the landlord/authorised representative.',
          'Keep the envelope, aviso de receção, screenshots of CTT tracking and a copy of the contract.'
        ] },
        { kind: 'warning', text: 'A contract clause saying “the landlord may evict with 30 days’ notice” does not override the mandatory rules of Lei 6/2006 and the Código Civil. Such clauses often do not work against a residential tenant.' }
      ]
    },
    {
      id: 'bna-process',
      title: '3. If a BNA notice has arrived: 15 days is the critical deadline',
      content: [
        { kind: 'paragraph', text: 'Balcão Nacional do Arrendamento (BNA) is an electronic mechanism for the procedimento especial de despejo. The landlord applies there when they consider that the contract has already been lawfully terminated and the tenant has not vacated the property. The BNA does not “check everything for you”: if the tenant stays silent, the process can quickly move to a título de desocupação.' },
        { kind: 'checklist', items: [
          'Immediately find the date on which the notificação BNA was received.',
          'The tenant usually has 15 days for oposição.',
          'If oposição is not filed, the BNA may issue a título para desocupação do locado.',
          'If oposição is filed, the case usually goes to court, where the debt, deadline, grounds and documents are checked.',
          'In a dispute about rent arrears, prepare recibos, bank transfers, MB WAY, Multibanco and correspondence.',
          'If the landlord did not issue recibos eletrónicos, this does not remove your obligation to pay, but it may help prove the landlord’s bad faith.',
          'If there is genuinely a debt, urgently discuss with an advogado the possibility of pagamento, acordo or depósito, because protection is weaker in cases of arrears.',
          'Do not move out “under pressure” if you do not understand the consequences: handing over the keys may look like voluntary vacating.',
          'For oposição, it is better to use an advogado or solicitador; if your income is low, request apoio judiciário from Segurança Social.'
        ] },
        { kind: 'warning', text: 'If you have received a notificação do BNA, do not spend a week corresponding with the landlord. At the same time, immediately look for an advogado/solicitador: 15 days pass quickly, especially if the letter was received before a weekend or public holidays.' }
      ]
    },
    {
      id: 'old-rents-vulnerable',
      title: '4. Old contracts and vulnerable tenants: rendas antigas',
      content: [
        { kind: 'paragraph', text: 'Rendas antigas are primarily old residential leases, usually predating the RAU/NRAU, where the transition to the new Lei 6/2006 system is limited by social guarantees. For expats this is rare, but it matters when buying a “right to rent”, inheriting residence from relatives or long-term renting in old housing stock in Lisbon/Porto.' },
        { kind: 'checklist', items: [
          'If the residential tenancy contract is old, do not agree orally to a “new standard contrato” without checking: you may lose protection.',
          'Key protection statuses: idade ≥65 anos, deficiência com grau de incapacidade ≥60%, low household RABC and certain long-term residence situations.',
          'A landlord’s proposal to transfer the contract into the NRAU or increase rentas must be answered in writing; for several protected statuses, the 30-day deadline is important.',
          'Attach evidence: Cartão de Cidadão/passport, certificado multiusos for disability, AT/Finanças income documents, household composition.',
          'If a tenant aged 65+ or with disability ≥60% has lived there for a long time, the landlord usually cannot simply “not renew” on general grounds; the exceptions are complex and more often linked to serious works or special regimes.',
          'Do not sign an adenda with a new term, new renta or waiver of old status before getting advice.',
          'If the landlord demands cash without a recibo, pay traceably or require a recibo: proof of payment is critical in the BNA.'
        ] },
        { kind: 'warning', text: 'Protections for rendas antigas are technical and depend on the date of the contract, age, income and correspondence. A mistake in the first reply to the landlord can be very costly; get advice before sending a letter.' }
      ]
    },
    {
      id: 'illegal-eviction',
      title: '5. What to do in cases of unlawful pressure or changed locks',
      content: [
        { kind: 'paragraph', text: 'Even if the contract has ended, the landlord has no right to remove belongings, cut off water/electricity, change the locks or threaten you on their own initiative. Actual eviction is carried out through a lawful procedure, not through “self-help”.' },
        { kind: 'checklist', items: [
          'If the locks have been changed — call the PSP/GNR and have an ocorrência recorded.',
          'Film the door, meters, belongings, correspondence and witnesses.',
          'Do not use force against the landlord; your aim is evidence and restoration of access through lawful channels.',
          'If utilities have been disconnected, ask the supplier to confirm who initiated the disconnection and when.',
          'Write to the landlord briefly and in writing: demand immediate restoration of access and an end to unlawful actions.',
          'Gather proof of residence: contrato, recibos, bills, correspondência, children’s matrícula, número de utente at the address.',
          'Go to an advogado for a providência cautelar or another urgent court remedy.',
          'If there are threats, stalking or violence — make a separate police report.'
        ] },
        { kind: 'warning', text: 'Do not agree to “cash for keys” without a written acordo: the amount, move-out date, return of caução, condition of the property, who pays utilities and waiver of future claims must be recorded.' }
      ]
    },
    {
      id: 'response-plan',
      title: '6. Practical plan for the first 48 hours',
      content: [
        { kind: 'substeps', items: [
          { id: 'hour-1', title: 'First hour', content: [
            { kind: 'checklist', items: [
              'Photograph the letter, envelope and aviso de receção.',
              'Write down the date of actual receipt.',
              'Find the contrato de arrendamento and all adendas.',
              'Download recibos de renda from Portal das Finanças, if they exist.',
              'Save bank payments for the last 12–24 months.'
            ] }
          ] },
          { id: 'day-1', title: 'First day', content: [
            { kind: 'checklist', items: [
              'Compare the notice period with Código Civil art. 1097, 1098, 1101–1103.',
              'Check whether there is any debt and for which months.',
              'Write a chronology: when you moved in, what you paid, which letters you received.',
              'Do not send an emotional WhatsApp reply to the landlord.',
              'Book an appointment with an advogado/solicitador; if your income is low — apply for apoio judiciário.'
            ] }
          ] },
          { id: 'day-2', title: 'Second day', content: [
            { kind: 'checklist', items: [
              'Prepare a written reply or oposição if the deadline is already running.',
              'If you need document translation, order it immediately.',
              'If the landlord is ready for an acordo, require a draft in writing.',
              'If the BNA has arrived — oposição takes priority, not negotiations.',
              'Make a backup housing plan, but do not vacate the imóvel without understanding the legal consequences.'
            ] }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apoio judiciário through Segurança Social', amountEUR: 0, note: 'For low-income households; may cover an advogado and court costs.' },
    { label: 'Initial consultation with an advogado on renting', amountEURMin: 80, amountEURMax: 200, note: 'Market range in Lisbon/Porto in 2026; urgent BNA-oposição may cost more.' },
    { label: 'CTT registered letters with aviso de receção', amountEURMin: 4, amountEURMax: 8, note: 'Depends on weight and service; use for provable replies to the landlord.' }
  ],
  sources: [
    { title: 'Balcão Nacional do Arrendamento — official BNA portal', url: 'https://bna.mj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 6/2006 — NRAU, consolidated legislation', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34468375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — urban tenancy rules, consolidated legislation', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — legal protection / apoio judiciário', url: 'https://www.seg-social.pt/protecao-juridica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}

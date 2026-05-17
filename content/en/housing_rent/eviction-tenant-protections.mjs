export default {
  editorialVoice: 'hackportugal',
  id: 'eviction-tenant-protections',
  categoryId: 'housing_rent',
  title: 'Tenant protection during eviction: BNA, denúncia and refusal to renew',
  tldr: 'In Portugal, a landlord cannot simply change the locks: eviction goes through a court or the Balcão Nacional do Arrendamento (BNA). If you receive a denúncia, oposição à renovação or a BNA notice, the key deadline is usually 15 days for oposição in BNA and 30 days for replies on “rendas antigas”. In 2026, Lei 6/2006 (NRAU) and the rules of the Código Civil apply: check the notice period, grounds, letter format and protections for people aged 65+, disability ≥60% and old contracts.',
  tags: ['rent', 'bna', 'eviction', 'denúncia'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-arrived',
      title: '1. Understand exactly what you have been sent',
      content: [
        { kind: 'paragraph', text: 'In housing rental in Portugal there are several different “papers” that expats often call by the single word “eviction”. The legal consequences differ: a simple letter from the landlord is not the same as immediate eviction.' },
        { kind: 'checklist', items: [
          'Oposição à renovação — the landlord does not want to renew a fixed-term contract at the end of its term.',
          'Denúncia — termination of an open-ended contract or termination on a special ground, for example for the landlord’s own housing or major works.',
          'Resolução — termination due to a breach, most often rent arrears.',
          'Comunicação para desocupação — a demand to vacate the property after the contract has ended.',
          'Notificação do BNA — a procedimento especial de despejo has already been started; this is not a “warning”, but an eviction process.',
          'A letter from the landlord’s advogado/solicitador — important, but in itself it does not give the right to change the locks.',
          'An oral WhatsApp message saying “leave in a month” — usually not enough to lawfully terminate a tenancy.'
        ] },
        { kind: 'warning', text: 'Do not ignore registered letters. In Portugal, the deadline often starts running from receipt of the letter or from the moment it is deemed delivered under postal notification rules, even if you did not collect it.' }
      ]
    },
    {
      id: 'check-validity',
      title: '2. Check the lawfulness of the denúncia or refusal to renew',
      content: [
        { kind: 'paragraph', text: 'For fixed-term contracts, the landlord usually uses oposição à renovação. For open-ended contracts — denúncia under Código Civil art. 1101. A mistake in the notice period, grounds or form of the notice may give the tenant a strong position for a reply and oposição.' },
        { kind: 'checklist', items: [
          'Check the type of contract: prazo certo, duração indeterminada or an old contract before the NRAU.',
          'Check the start date, the end date of the current period and automatic renewals.',
          'For a fixed-term contract, the landlord must comply with the notice periods under Código Civil art. 1097: 240 days if the term of the contract or renewal is ≥6 years; 120 days if from 1 to 6 years; 60 days if from 6 months to 1 year; 1/3 of the term if less than 6 months.',
          'Usually the landlord’s oposição to the first renovação only takes effect after 3 years from the start of the contract, even if the contract states a 1-year term; there are exceptions, for example the need for housing for the landlord or their children.',
          'For an open-ended contract, the landlord’s denúncia is possible on the grounds in Código Civil art. 1101: the landlord’s own housing or that of their first-degree descendants, demolition/major reconstruction, or aviso mínimo 5 years.',
          'If the ground is the landlord’s own housing, check whether it is stated in writing and whether the requirements of art. 1102 have been met.',
          'If the ground is obras profundas or demolição, the landlord usually has to prove licences/municipal documents and comply with art. 1103.',
          'The notice must be in writing and sent by a proper method: carta registada com aviso de receção, notificação avulsa or another lawful channel.',
          'Check the address, the names of all tenants, NIF, description of the imóvel and the signature of the landlord/authorised representative.',
          'Keep the envelope, aviso de receção, CTT tracking screenshots and a copy of the contract.'
        ] },
        { kind: 'warning', text: 'A contract clause saying “the landlord may evict with 30 days’ notice” does not override the mandatory rules of Lei 6/2006 and the Código Civil. Such clauses often do not work against a residential tenant.' }
      ]
    },
    {
      id: 'bna-process',
      title: '3. If you receive a BNA notice: 15 days is the critical deadline',
      content: [
        { kind: 'paragraph', text: 'Balcão Nacional do Arrendamento (BNA) is an electronic mechanism for the procedimento especial de despejo. The landlord applies there when they believe the contract has already been lawfully terminated and the tenant has not vacated the property. BNA does not “check everything for you”: if the tenant stays silent, the process can quickly move to a título de desocupação.' },
        { kind: 'checklist', items: [
          'Immediately find the date of receipt of the notificação BNA.',
          'Usually the tenant has 15 days for oposição.',
          'If you do not file oposição, BNA may issue a título para desocupação do locado.',
          'If you file oposição, the case usually moves to court, where the debt, deadline, grounds and documents are checked.',
          'If there is a dispute about rent arrears, prepare recibos, bank transfers, MB WAY, Multibanco and correspondence.',
          'If the landlord did not issue recibos eletrónicos, this does not remove your obligation to pay, but it may help prove the landlord’s bad faith.',
          'If the debt is real, urgently discuss with an advogado the possibility of pagamento, acordo or depósito, because protection is weaker in arrears cases.',
          'Do not move out “under pressure” if you do not understand the consequences: handing over the keys may look like voluntary vacation.',
          'For oposição it is better to use an advogado or solicitador; if your income is low, request apoio judiciário from Segurança Social.'
        ] },
        { kind: 'warning', text: 'If you have received a notificação do BNA, do not spend a week corresponding with the landlord. In parallel, immediately look for an advogado/solicitador: 15 days pass quickly, especially if the letter is received before a weekend or holidays.' }
      ]
    },
    {
      id: 'old-rents-vulnerable',
      title: '4. Old contracts and vulnerable tenants: rendas antigas',
      content: [
        { kind: 'paragraph', text: 'Rendas antigas are primarily old residential leases, usually before the RAU/NRAU, where the transition to the new Lei 6/2006 system is limited by social guarantees. For expats this is rare, but important when buying “tenancy rights”, inheriting residence from relatives or taking a long-term tenancy in the old housing stock of Lisbon/Porto.' },
        { kind: 'checklist', items: [
          'If the residential tenancy contract is old, do not verbally agree to a “new standard contrato” without checking: you may lose protection.',
          'Key protected statuses: idade ≥65 anos, deficiência com grau de incapacidade ≥60%, low household RABC and some long-term residence situations.',
          'The landlord’s proposal to transition the contract into the NRAU or increase rentas must be answered in writing; for a number of protected statuses, the 30-day deadline is important.',
          'Attach evidence: Cartão de Cidadão/passport, certificado multiusos for disability, AT/Finanças income documents, household composition.',
          'If a tenant aged 65+ or with disability ≥60% has lived there for a long time, the landlord usually cannot simply “not renew” on general grounds; the exceptions are complex and are more often linked to serious works or special regimes.',
          'Do not sign an adenda with a new term, new rent or waiver of old status before a consultation.',
          'If the landlord demands cash without a recibo, pay by traceable means or demand a recibo: proof of payment is critical in BNA.'
        ] },
        { kind: 'warning', text: 'Rendas antigas protections are technical and depend on the contract date, age, income and correspondence. A mistake in the first reply to the landlord can be very costly; get advice before sending the letter.' }
      ]
    },
    {
      id: 'illegal-eviction',
      title: '5. What to do in case of unlawful pressure or changing the locks',
      content: [
        { kind: 'paragraph', text: 'Even if the contract has ended, the landlord has no right to remove belongings, cut off water/electricity, change the locks or threaten you on their own initiative. Actual eviction is carried out through a lawful procedure, not through “self-help”.' },
        { kind: 'checklist', items: [
          'If the locks have been changed — call PSP/GNR and record an ocorrência.',
          'Take video of the door, meters, belongings, correspondence and witnesses.',
          'Do not use force against the landlord; your aim is evidence and restoration of access through lawful channels.',
          'If utilities have been disconnected, ask the supplier for confirmation of who initiated the disconnection and when.',
          'Write to the landlord briefly and in writing: demand immediate restoration of access and an end to unlawful actions.',
          'Gather proof of residence: contrato, recibos, bills, correspondência, children’s matrícula, número de utente at the address.',
          'Go to an advogado for a providência cautelar or another urgent court remedy.',
          'If there are threats, stalking or violence — make a separate police report.'
        ] },
        { kind: 'warning', text: 'Do not agree to “cash for keys” without a written acordo: the amount, move-out date, return of the caução, condition of the property, who pays utilities and waiver of future claims must be recorded.' }
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
              'Check whether there is a debt and for which months.',
              'Write a chronology: when you moved in, what you paid, which letters you received.',
              'Do not send an emotional reply to the landlord on WhatsApp.',
              'Book an appointment with an advogado/solicitador; if your income is low — apply for apoio judiciário.'
            ] }
          ] },
          { id: 'day-2', title: 'Second day', content: [
            { kind: 'checklist', items: [
              'Prepare a written reply or oposição, if the deadline is already running.',
              'If you need documents translated, order it immediately.',
              'If the landlord is ready for an acordo, demand a written draft.',
              'If BNA has arrived — prioridade is oposição, not negotiations.',
              'Make a backup housing plan, but do not vacate the imóvel without understanding the legal consequences.'
            ] }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apoio judiciário through Segurança Social', amountEUR: 0, note: 'For low-income households; may cover an advogado and court costs.' },
    { label: 'Initial advogado consultation on rental matters', amountEURMin: 80, amountEURMax: 200, note: 'Market range in Lisbon/Porto in 2026; urgent BNA-oposição may cost more.' },
    { label: 'Registered CTT letters with aviso de receção', amountEURMin: 4, amountEURMax: 8, note: 'Depends on weight and service; use for provable replies to the landlord.' }
  ],
  sources: [
    { title: 'Balcão Nacional do Arrendamento — official BNA portal', url: 'https://bna.mj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 6/2006 — NRAU, consolidated legislation', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34468375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — urban lease rules, consolidated legislation', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — legal protection / apoio judiciário', url: 'https://www.seg-social.pt/protecao-juridica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}

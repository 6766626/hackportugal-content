export default {
  editorialVoice: 'hackportugal',
  id: 'viver-em-comunidade-condominio',
  categoryId: 'housing_rent',
  title: 'Condomínio terms: quotas, assembleia, regulamento',
  tldr: 'A condomínio in Portugal is not a “voluntary residents’ chat”, but the legal regime of a prédio em propriedade horizontal. Each owner pays quotas according to permilagem, usually €20–€100 per month for a flat, plus contributions for obras. The annual assembleia approves the budget, accounts, administrator and works. The fundo comum de reserva is mandatory: at least 10% of the annual budget. A tenant usually follows the regulamento, but the owner votes and is responsible to the condomínio.',
  tags: ['condomínio', 'renting', 'flat', 'quotas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-condominio',
      title: 'What a condomínio is and who is responsible for what',
      content: [
        { kind: 'paragraph', text: 'A condomínio arises when a building is divided into independent units — flats, shops, garages — and common parts: stairs, lifts, roof, façade, risers, entrance door, courtyard. The legal basis is the Código Civil, art. 1414–1438-A, and Decreto-Lei 268/94.' },
        { kind: 'checklist', items: [
          'Condómino — the owner of the unit, not the tenant.',
          'Administrador do condomínio — the elected building manager/company, who implements assembleia decisions and collects quotas.',
          'Assembleia de condóminos — the owners’ meeting, where the budget, works, accounts and regulamento are approved.',
          'Quotas — regular contributions for building maintenance: cleaning, electricity, lift, insurance, minor repairs.',
          'Fundo comum de reserva — a mandatory reserve for major works on common parts.',
          'Regulamento do condomínio — the building’s internal rules: noise, rubbish, pets, parking, use of common areas.',
          'A tenant must comply with the building rules, but debts to the condomínio usually remain the owner’s responsibility, unless the tenancy agreement has shifted part of the expenses to the tenant.'
        ] },
        { kind: 'warning', text: 'If you rent a flat, do not accept “condomínio incluído” verbally. The tenancy agreement must be clear: who pays monthly quotas, who pays obras extraordinárias, and whether the garage, lift, pool and storage room are included.' }
      ]
    },
    {
      id: 'quotas-and-reserve',
      title: 'Quotas and fundo comum de reserva: how much to pay',
      content: [
        { kind: 'paragraph', text: 'The amount of quotas is not the same for every flat. It is usually calculated according to permilagem — your unit’s share in the building, stated in the caderneta predial / título constitutivo da propriedade horizontal. A larger flat, garage or terrace often means a larger share of expenses.' },
        { kind: 'checklist', items: [
          'Typical range in an ordinary building without a pool or concierge: €20–€100 per month per flat.',
          'A building with a lift, garage, garden, pool or portaria may cost €100–€250+ per month.',
          'The fundo comum de reserva is mandatory under DL 268/94: at least 10% of the latest annual condomínio budget.',
          'Reserve money is used for conservation works: roof, façade, risers, lift, structural repairs.',
          'Extra quotas are possible if the reserve does not cover the works: for example, a €40,000 façade is divided between condóminos according to permilagem.',
          'Late payment of quotas may lead to cobrança judicial; the assembleia minutes stating the debt amount are an enforceable document if the legal requirements are met.',
          'When buying a flat, the notary/bank usually requests a declaração de dívida do condomínio — a certificate of contribution debts.'
        ] },
        { kind: 'warning', text: 'A low quota is not always a plus. If the building has collected €10–€15 for years and has not built a reserve, a new owner may quickly receive an extra quota for the roof, lift or façade running into thousands of euros.' }
      ]
    },
    {
      id: 'assembleia',
      title: 'Assembleia: when it takes place and how voting works',
      content: [
        { kind: 'paragraph', text: 'The ordinary annual assembleia is held to approve the previous year’s accounts and the new year’s budget. Under Código Civil art. 1431, it takes place in the first half of January, but the regulamento or a decision of the condóminos may move the ordinary meeting to the first quarter.' },
        { kind: 'checklist', items: [
          'The administrador convenes it by letter, email or another agreed method, with an agenda.',
          'Check whether there is a proxy: an owner may delegate their voting right to another person.',
          'Votes are usually counted by permilagem, not “one flat = one vote”.',
          'Ordinary decisions are taken by a majority of the capital present, unless the law requires more.',
          'Works for conservação of common parts are usually approved by the assembleia; urgent works may be ordered by the administrador and reported afterwards.',
          'Changing the título constitutivo, using common parts for a different purpose or major construction changes may require unanimity or a qualified majority.',
          'The assembleia minutes — ata — should be requested and kept: they confirm the budget, quotas, debts and decisions on obras.',
          'If you have bought a flat recently, ask for the last 2–3 atas before the transaction: they often show future expenses.'
        ] },
        { kind: 'paragraph', text: 'For an expat, the practical minimum is to find out the administrador’s contact details, the date of the next assembleia, the monthly quota amount, the saldo do fundo comum de reserva and whether there are approved works for the next 12–24 months.' }
      ]
    },
    {
      id: 'regulamento',
      title: 'Regulamento: building rules, noise, rubbish, pets',
      content: [
        { kind: 'paragraph', text: 'The regulamento do condomínio is mandatory if the building has more than 4 condóminos. It sets out the internal order: how to use common areas, where to store bicycles, when repairs may be carried out, what is forbidden on the façade and balconies.' },
        { kind: 'checklist', items: [
          'Noise: the general night-time period under the Regulamento Geral do Ruído is from 23:00 to 07:00; municipal rules and the police may intervene in the event of breaches.',
          'Repairs: often allowed only on working days and during daytime hours; check the Câmara Municipal and condomínio rules.',
          'Rubbish: in Lisbon and other cities there are schedules for putting out lixo indiferenciado, reciclagem and monos; fines are possible for incorrect disposal.',
          'Pets: the condomínio cannot arbitrarily ban the lawful keeping of pets inside your unit, but it may regulate common areas, leads, the lift and cleaning.',
          'Façade and balconies: air conditioning, awnings, satellite dishes and closing a varanda often require condomínio permission and sometimes Câmara Municipal approval.',
          'Garage: you cannot automatically use a parking place as a storage area, workshop or EV charging point without complying with safety rules.',
          'Alojamento Local: specific restrictions depend on the law, municipal zones and condomínio decisions; do not assume that a flat is automatically suitable for AL.'
        ] },
        { kind: 'warning', text: 'A WhatsApp chat rule is not the same as the regulamento. Ask for the written regulamento and atas. But even if the rules are poorly formalised, the general rules on noise, safety, the façade and common parts still apply.' }
      ]
    },
    {
      id: 'renters-buyers-check',
      title: 'Checklist for tenants and buyers',
      content: [
        { kind: 'substeps', items: [
          { id: 'tenant', title: 'If you are renting', content: [
            { kind: 'checklist', items: [
              'Check the despesas de condomínio clause in the tenancy agreement.',
              'Ordinary quotas are more often paid by the owner, but the contract may shift them to the tenant — this must be written down.',
              'Extra quotas for the façade, roof, lift and structural works should usually remain with the owner.',
              'Ask for the regulamento before moving in, especially if you have a dog, bicycle, garage, air conditioning or renovation plans.',
              'Clarify the rules on noise, using the lift when moving, furniture disposal and use of the garagem/arrecadação.',
              'If the administrador writes to you directly about debts, forward it to the owner and managing agent; the legal debtor is usually the condómino.'
            ] }
          ] },
          { id: 'buyer', title: 'If you are buying', content: [
            { kind: 'checklist', items: [
              'Request a declaração de não dívida ao condomínio.',
              'Ask for the latest assembleia atas for the last 2–3 years.',
              'Check the monthly quota and saldo do fundo comum de reserva.',
              'Look in the atas for the words obras, infiltrações, fachada, telhado, elevador, garagem, dívida.',
              'Compare the condition of the building with the size of the reserve: old building + small fund = risk of an extra quota.',
              'Check whether there is a professional administrador or everything depends on one volunteer neighbour.',
              'If you are buying a top floor or basement, separately check roof leaks, terraço, humidade and responsabilidades comuns.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'disputes',
      title: 'Disputes: first ata and administrador, then Julgado de Paz',
      content: [
        { kind: 'paragraph', text: 'The typical sequence is: first write to the administrador with facts, photos, dates and a reference to the regulamento; then the matter is taken to the assembleia; if it is not resolved — a complaint to the Câmara Municipal, the police in cases of noise/danger, or a civil claim.' },
        { kind: 'checklist', items: [
          'For noise at night: record dates, video/audio for yourself, and call the PSP/GNR in the case of repeated breaches.',
          'For leaks: notify the owner, administrador and the upstairs neighbour in writing; request a vistoria and involvement of the insurer.',
          'For condomínio debts: the administrador acts against the debtor owner, not against the tenant without a contractual obligation.',
          'For unlawful works in common parts: demand the ata authorising them and, if the façade/structure is affected, a Câmara Municipal inspection.',
          'For minor civil disputes, you can go to a Julgado de Paz if there is one in your area and the amount is within its jurisdiction.',
          'Julgados de Paz hear civil cases up to €15,000; the standard taxa de justiça is €70 per case, usually divided between the parties according to the outcome.'
        ] },
        { kind: 'warning', text: 'Do not withhold rent or a condominium fee unilaterally without legal advice. In Portugal this often worsens your position: first written notice, evidence, prazo para resolver, then the official procedure.' }
      ]
    }
  ],
  costs: [
    { label: 'Ordinary monthly quotas', amountEURMin: 20, amountEURMax: 100, note: 'Typical range for a flat in an ordinary building; not a statutory tariff, depends on permilagem, lift, garage, services and city.' },
    { label: 'Fundo comum de reserva', amountEURMin: 0, amountEURMax: 0, note: 'At least 10% of the annual condomínio budget; paid as part of quotas or as a separate line.' },
    { label: 'Julgado de Paz', amountEUR: 70, note: 'Standard taxa de justiça per case; cases up to €15,000, if the Julgado de Paz has territorial and subject-matter jurisdiction.' }
  ],
  sources: [
    { title: 'Código Civil — propriedade horizontal, art. 1414–1438-A', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 268/94 — condomínio regime, fundo comum de reserva and cobrança', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/268-1994-619403', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — noise, municipal rules and contacts', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Julgados de Paz — jurisdiction, costs and operation', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

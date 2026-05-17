export default {
  editorialVoice: 'hackportugal',
  id: 'voto-imigrante-municipal',
  categoryId: 'country_specific',
  title: 'Voting rights for migrants in municipal elections in Portugal',
  tldr: 'In Portugal, foreign nationals can vote in eleições autárquicas — elections for Câmara Municipal, Assembleia Municipal and Junta de Freguesia. EU citizens vote if resident and registered in the recenseamento eleitoral. Brazil and Cabo Verde — with lawful residence usually for more than 2 years and reciprocity. A number of countries with treaty reciprocity, including Argentina, Chile, Colombia, Iceland, Norway, New Zealand, Peru, United Kingdom, Uruguay, Venezuela, — with a longer period of lawful residence. Registration is free, checks are done at eleitor.mai.gov.pt.',
  tags: ['vote', 'elections', 'migrants', 'cplp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-vote',
      title: 'Which foreign nationals can vote 🗳️',
      content: [
        { kind: 'paragraph', text: 'This is only about local elections / eleições autárquicas: Câmara Municipal, Assembleia Municipal and Assembleia de Freguesia. It does not give the right to vote in elections for the Assembleia da República, Presidente da República or referendums, except under special regimes for certain citizens, for example brasileiros com estatuto de igualdade de direitos políticos.' },
        { kind: 'checklist', items: [
          'EU citizens living in Portugal: can vote in municipal elections after registering in the recenseamento eleitoral.',
          'Citizens of Brazil: the right depends on lawful residence, registration and the reciprocity regime; for broader political rights, the Estatuto de Igualdade de Direitos Políticos is needed.',
          'Citizens of Cabo Verde: usually fall under the CPLP regime with reciprocity for eleições autárquicas after lawful residence of more than 2 years.',
          'Citizens of other countries with reciprocity: Argentina, Chile, Colombia, Iceland, Norway, New Zealand, Peru, United Kingdom, Uruguay, Venezuela — the right depends on the period of lawful residence and the current MAI/CNE declaration.',
          'Age: 18+ on election day.',
          'You must be registered as a voter in the freguesia where you live.',
          'The address in the recenseamento eleitoral must match your actual place of residence, because you vote in your own freguesia.'
        ] },
        { kind: 'warning', text: 'Check your country against the current CNE/MAI list before elections. The list of countries with reciprocity may be updated by state declarations; do not rely on old tables from blogs.' }
      ]
    },
    {
      id: 'residence-periods',
      title: 'Residence period: EU, CPLP and treaty countries',
      content: [
        { kind: 'paragraph', text: 'For EU citizens, the key condition is residence in Portugal and registration as an eleitor. A minimum residence period for the municipal vote usually does not apply in the same way as for third-country nationals.' },
        { kind: 'paragraph', text: 'For citizens of Portuguese-speaking countries with reciprocity, in practice primarily Brazil and Cabo Verde, the rule of lawful residence for more than 2 years applies for active voting rights in local elections, unless there is a special broader status.' },
        { kind: 'paragraph', text: 'For “other treaty / reciprocity countries”, you need to check the current CNE and MAI wording. Public guides often mix up the active right to vote and the passive right to stand as a candidate: the periods for candidacy are higher. If someone tells you “4 years”, clarify whether they mean voting or being eligible for election.' },
        { kind: 'checklist', items: [
          'EU: residência + registration in the recenseamento eleitoral.',
          'CPLP with reciprocity: usually legal residence of more than 2 years for voting.',
          'Brazil: check the Estatuto de Igualdade separately if you want rights broader than municipal ones.',
          'Cabo Verde: check the legal residence period and registration.',
          'Argentina / Chile / Colombia / Iceland / Norway / New Zealand / Peru / UK / Uruguay / Venezuela: check the current CNE reciprocal list.',
          'For candidacy, the periods and rules are stricter than for voting.',
          'Having a NIF, NISS or SNS does not in itself create a voting right.'
        ] }
      ]
    },
    {
      id: 'register',
      title: 'How to register in the recenseamento eleitoral',
      content: [
        { kind: 'paragraph', text: 'Foreign nationals are usually not added to the lists automatically. You need to request inscrição no recenseamento eleitoral at the freguesia/município where you live or through available digital services, if they are open for your status.' },
        { kind: 'checklist', items: [
          'Check your status and polling place at eleitor.mai.gov.pt.',
          'Prepare your passport or Cartão de Cidadão / national ID for EU citizens.',
          'Prepare your Portugal residence permit or Certificado de Registo de Cidadão da União Europeia for EU citizens.',
          'Take proof of address: atestado de residência, contrato de arrendamento, a utilities bill or a Câmara/Junta document, if requested.',
          'State your country of citizenship and the basis of your voting right: EU, CPLP/reciprocity or treaty reciprocity.',
          'Ask for confirmation of registration or save a print/screenshot from Portal do Eleitor.',
          'Check your freguesia after moving: you will vote where you are registered.'
        ] },
        { kind: 'warning', text: 'Registration and changes in the recenseamento eleitoral are usually closed 60 days before elections. If local elections have been called, do not wait until the final week: you may not be included in the cadernos eleitorais for the current vote.' }
      ]
    },
    {
      id: 'election-day',
      title: 'On election day',
      content: [
        { kind: 'paragraph', text: 'In local elections, you vote at the assembleia de voto of your freguesia. The polling station and eleitor number are checked at eleitor.mai.gov.pt or via MAI SMS services, if they are active for the specific elections.' },
        { kind: 'checklist', items: [
          'Take a valid ID document: Cartão de Cidadão, passport, EU national ID or residence permit.',
          'Check the morada and freguesia in the eleitor lists in advance.',
          'At the polling station, state your name and show ID.',
          'You will receive ballot papers for the municipal bodies: Câmara Municipal, Assembleia Municipal, Assembleia de Freguesia.',
          'Voting is secret; you do not need to photograph the ballot paper and doing so may cause problems.',
          'If you are not on the list, ask the mesa to check the caderno eleitoral and the freguesia details.',
          'If you have moved recently, the polling station may be in the old freguesia until the change has been updated.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes by migrants',
      content: [
        { kind: 'checklist', items: [
          'Thinking that a residence permit automatically gives the right to vote. It does not: you need a country with a suitable regime and registration.',
          'Confusing municipal elections with national elections. Foreign voting rights are almost always limited to local elections.',
          'Checking only the NIF address in Finanças. The electoral address is a separate record in the recenseamento eleitoral.',
          'Moving to another freguesia and not updating the registration.',
          'Missing the 60-day suspension period before elections.',
          'Assuming that all CPLP citizens automatically have the same rights. Reciprocity and lawful residence are needed.',
          'Confusing the right to vote with the right to stand as a candidate: the rules for candidacy are stricter.',
          'Relying on country lists from before Brexit or before new MAI/CNE declarations.'
        ] },
        { kind: 'paragraph', text: 'If you are not sure, write to or go to the Junta de Freguesia for your address and ask them to check “inscrição no recenseamento eleitoral para cidadão estrangeiro”. This is a free administrative procedure.' }
      ]
    }
  ],
  costs: [
    { label: 'Registration in the recenseamento eleitoral', amountEUR: 0, note: 'Free; possible costs only for obtaining proof of address if the Junta de Freguesia requires an atestado.' },
    { label: 'Atestado de residência at the Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'The fee depends on the freguesia; sometimes free for specific purposes.' }
  ],
  sources: [
    {
      title: 'CNE — Comissão Nacional de Eleições: rights of foreign voters and eleições autárquicas',
      url: 'https://www.cne.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal do Eleitor MAI — checking the recenseamento eleitoral and polling place',
      url: 'https://www.eleitor.mai.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei n.º 13/99 — Legal Framework of the Recenseamento Eleitoral',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1999-34439975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei Orgânica n.º 1/2001 — Election of the holders of the bodies of local authorities',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei-organica/2001-34438175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}

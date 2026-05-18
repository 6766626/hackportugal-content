export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Portuguese citizenship by descent',
  tldr: 'There are direct routes for children of Portuguese citizens and for grandchildren of Portuguese citizens. For a grandchild, this is citizenship by origin, processed through an application/declaration to IRN/Conservatória if the conditions of art. 1 Lei 37/81 are met (including sufficient knowledge of Portuguese). For great-grandchildren there is NO direct category: the parent or grandparent must first obtain citizenship, after which the applicant applies as a child/grandchild. Otherwise, the ordinary routes remain (naturalisation after lawful residence).',
  tags: ['citizenship', 'descent', 'ancestors'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: 'Categories by descent',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Child of a Portuguese citizen', content: [
            { kind: 'paragraph', text: 'If, at the time of birth, one of the parents was already a Portuguese citizen, a child born abroad may obtain citizenship by origin through birth registration or a declaration at a Conservatória / IRN / consulate. If the parent became Portuguese only AFTER the child’s birth, a separate analysis applies: for minors there may be a citizenship acquisition regime, while for adults there is not always a direct route.' }
          ]},
          { id: 'd2', title: 'Grandchild of a Portuguese citizen', content: [
            { kind: 'paragraph', text: 'This is citizenship by origin, but it is NOT “automatic”: you must submit a declaration/application to IRN or a Conservatória and meet the conditions of art. 1.º Lei da Nacionalidade.\n\nIn practice, the key proof of a connection to the Portuguese community is sufficient knowledge of the Portuguese language, usually level A2 (CIPLE or a recognised equivalent/exemption). “Cultural ties” alone are usually not enough. Criminal/security-related grounds for exclusion are also checked.' }
          ]},
          { id: 'd3', title: 'Great-grandchild and beyond — there is NO direct route', content: [
            { kind: 'paragraph', text: 'There is no direct “great-grandchild” category in Lei 37/81. The usual sequence is: first, the intermediate generation obtains citizenship (parent or grandparent); then the applicant checks whether they can apply as the child or grandchild of a Portuguese citizen. If the chain cannot be built, the ordinary routes remain, above all naturalisation after 5 years of lawful residence (under the new law after publication of Decreto AR 48/XVII in the DRE — 7 years for CPLP/EU, 10 years for others).' }
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Applicant’s birth certificate (full form, with apostille/legalisation and translation)',
          'Birth certificate of the parent through whom the family relationship is proven',
          'Birth certificate of the grandmother/grandfather (if the applicant is a grandchild)',
          'Proof of the ancestor’s Portuguese citizenship (assento de nascimento at the Conservatória, Cartão de Cidadão, passport or historical record)',
          'For GRANDCHILDREN: proof of sufficient knowledge of the Portuguese language — usually an A2 certificate (CIPLE or a recognised equivalent/exemption). For CHILDREN of Portuguese citizens this is generally NOT required',
          'Criminal record certificates from countries of citizenship and countries of residence after the age of 16 (with apostille/legalisation and translation). IRN can obtain the Portuguese certidão do registo criminal itself with the applicant’s authorisation',
          'For grandchildren: there must NOT be a conviction resulting in imprisonment for 3 years or more (on the Portuguese scale) or grounds related to a security/terrorism threat',
          'In certain acquisition regimes, the Ministério Público may object (oposição) in cases of voluntary military service for a foreign state or non-technical public functions for a foreign state — this is NOT an ordinary checklist item, but it matters in rare cases'
        ]},
        { kind: 'warning', text: 'The chain of certificates must be uninterrupted. If the ancestor lost citizenship or records have been lost, the process is more complex.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Compile the family tree', content: [
            { kind: 'paragraph', text: 'Apostille/legalisation of all foreign certificates + translation into Portuguese, duly certified (notary in Portugal, consulate, lawyer/solicitador or another method accepted by IRN). Portuguese records are searched by place and period: Conservatória/IRN for civil registry, Arquivo Distrital for many old records, Torre do Tombo for specific collections. It is best to start with the exact concelho/freguesia and year.' }
          ]},
          { id: 'p2', title: '2. Check the ancestor’s record', content: [
            { kind: 'paragraph', text: 'On the IRN website or through a request to the Conservatória — make sure the record exists.' }
          ]},
          { id: 'p3', title: '3. Sit CIPLE A2', content: [
            { kind: 'paragraph', text: 'Except for children of Portuguese citizens — they do not need this.' }
          ]},
          { id: 'p4', title: '4. Submit the application to IRN', content: [
            { kind: 'paragraph', text: 'Conservatória dos Registos Centrais (Lisboa) or a consulate.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sefardi',
      title: 'Sephardic Jews — regime at risk of abolition',
      content: [
        { kind: 'paragraph', text: 'The Sephardic route evolved in three stages: (1) **Lei Orgânica n.º 1/2013** introduced it into the Lei da Nacionalidade (details — Decreto-Lei 30-A/2015); (2) **Decreto-Lei n.º 26/2022** (01.09.2022) tightened the Regulamento and required proof of ties to Portugal; (3) **Lei Orgânica n.º 1/2024 of 5 March 2024** (entered into force on 01.04.2024) materially changed the law itself: it introduced mandatory **legal residence in Portugal for ≥ 3 years (consecutive or interpolated)** + assessment by a special commission at the Ministry of Justice (researchers + representatives of Jewish communities with religious legal entity status in PT). After 1/2024, the “remote” Sephardic route is effectively closed.' },
        { kind: 'paragraph', text: '**03.05.2026 President Seguro promulgated Decreto AR 48/XVII** (renamed from 17/XVII after passing through the TC) — the law **completely abolishes** the Sephardic route, even in its current format with 3 years’ residence. It enters into force on the day after publication in Diário da República; **check the current publication status at diariodarepublica.pt**. The text of the law contains a transitional provision — administrative processes being processed on the date of entry into force are subject to the previous version of Lei 37/81 (the PS proposal for broader transitional guarantees was rejected). In his speech on 03.05.2026, Seguro also publicly asked for already submitted cases to be considered under the old rules for the sake of legal certainty.\n\nUntil 48/XVII enters into force, the Sephardic route technically operates under the post-LO 1/2024 regime (residence ≥ 3 years + commission).' },
        { kind: 'warning', text: 'If you plan to apply — do it URGENTLY, before Decreto 48/XVII is published in the DRE. Filing locks the case into the old regime (the law’s transitional provision + the President’s request to IRN). After publication, the new law will completely eliminate this route for new applicants.' }
      ]
    }
  ],
  costs: [
    { label: 'IRN fee', amountEURMin: 0, amountEURMax: 250, note: 'Depends on the basis: for minor children of Portuguese citizens it is free in some cases; for grandchildren it is usually around €250. Check against the current Tabela de Emolumentos IRN' },
    { label: 'Archive requests', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Translations + apostilles', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nacionalidade por efeito da vontade ou origem', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidated', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei Orgânica n.º 1/2013 — introduction of the Sephardic route into the Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2013-654468', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 26/2022 — tightening of the Sephardic route from 01.09.2022 (amendment to the Regulamento)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/26-2022-180773692', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Orgânica n.º 1/2024 (05.03.2024) — material change to the Sephardic regime: residence for 3+ years + commission, in force from 01.04.2024', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2024-854130977', kind: 'law', language: 'pt', lastRetrieved: '2026-05-18' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (Sephardic, original version)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgation of Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}

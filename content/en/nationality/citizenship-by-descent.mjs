export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Portuguese citizenship by descent (Lei Orgânica 1/2026)',
  tldr: '🆕 Under the new Lei Orgânica n.º 1/2026 (published on 18/05/2026, in force from 19/05/2026) the direct descent routes are:\n\n👶 Child of a Portuguese citizen — handled by application/declaration at IRN/Conservatória; no language requirement.\n\n👦 Grandchild of a Portuguese citizen — citizenship by origin (art. 1(1)(d/e) Lei 37/81), handled by application to IRN with sufficient knowledge of Portuguese (sufficient knowledge — usually evidenced by CIPLE A2, but in some cases IRN accepts other evidence).\n\n🆗 Great-grandchild of an originarily-Portuguese ancestor — there IS a separate NATURALISATION route (art. 6(8)): ≥ 5 years of legal residence is enough (the 7/10-year rule is waived) plus the other art. 6(1) requirements. For more distant degrees (great-great-grandchildren and beyond) there is still no direct route — the intermediate generation must obtain citizenship first.\n\n🚫 The Sephardic route has been fully abolished (from 19/05/2026). Applications under the Sephardic route submitted BEFORE 19/05/2026 may be assessed under the previous regime (LO 1/2024 — residence ≥ 3 years + committee).\n\n⚖️ Transitional provision: for applications submitted on Portal da Nacionalidade BEFORE 19/05/2026, the previous rules apply (including the Sephardic route under LO 1/2024).',
  tags: ['citizenship', 'descent', 'ancestors'],
  estimatedReadMinutes: 5,
  recentlyChangedAt: '2026-06-22',
  changeSummary: 'Added the naturalization route for great-grandchildren of originarily-Portuguese ancestors (art. 6(8) Lei Orgânica 1/2026): 5 years residence, 7/10-year rule waived.',
  steps: [
    {
      id: 'categories',
      title: 'Categories by descent',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Child of a Portuguese citizen', content: [
            { kind: 'paragraph', text: 'If, at the time of birth, one of the parents was already a Portuguese citizen, a child born abroad may obtain citizenship by origin through birth registration or a declaration at a Conservatória / IRN / consulate. If the parent became Portuguese only AFTER the child was born — a separate analysis applies: for minors there may be an acquisition-of-citizenship regime, while for adults there is not always a direct route.' }
          ]},
          { id: 'd2', title: 'Grandchild of a Portuguese citizen', content: [
            { kind: 'paragraph', text: 'This is citizenship by origin, but it is NOT “automatic”: you must submit a declaration/application to IRN or a Conservatória and meet the conditions of art. 1.º Lei da Nacionalidade.\n\nIn practice, the key proof of connection to the Portuguese community is sufficient knowledge of the Portuguese language, usually A2 level (CIPLE or a recognised equivalent/exemption). “Cultural ties” alone are usually not enough. Criminal/security exclusion grounds are also checked.' }
          ]},
          { id: 'd3', title: 'Great-grandchild of an originarily-Portuguese ancestor — a separate naturalisation route (5 years of residence)', content: [
            { kind: 'paragraph', text: 'Under the new version of Lei 37/81 (art. 6.º n.º 8, in force from 19/05/2026) a great-grandchild — a third-degree descendant in the direct line of an originarily-Portuguese ancestor (descendente em 3.º grau na linha reta de portugueses originários) — can obtain citizenship by naturalisation with the 7/10-year requirement waived: ≥ 5 years of legal residence in Portugal is enough, plus the other art. 6.º n.º 1 requirements (A2 language, culture/history test, no conviction above the threshold, means of subsistence). This is specifically a route through naturalisation (not “by origin”, as for children and grandchildren). For more distant degrees of kinship (great-great-grandchild and beyond) there is no direct route — you must first obtain citizenship for the intermediate generation.' }
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
          'Birth certificate of the grandparent (if the applicant is a grandchild)',
          'Proof of the ancestor’s Portuguese citizenship (assento de nascimento in the Conservatória, Cartão de Cidadão, passport or historical record)',
          'For GRANDCHILDREN: proof of sufficient knowledge of the Portuguese language — usually an A2 certificate (CIPLE or a recognised equivalent/exemption). For CHILDREN of Portuguese citizens this is generally NOT required',
          'Criminal record certificates from countries of citizenship and countries of residence after age 16 (with apostille/legalisation and translation). The Portuguese certidão do registo criminal can be obtained by IRN itself with the applicant’s authorisation',
          'For grandchildren: there must be NO sentence to imprisonment of 3 years or more (on the Portuguese scale) and no grounds related to security threats/terrorism',
          'In certain acquisition regimes, the Ministério Público may object (oposição) in cases of voluntary military service for a foreign state or non-technical public functions for a foreign state — this is NOT a standard checklist item, but it matters in rare cases'
        ]},
        { kind: 'warning', text: 'The chain of certificates must be continuous. If the ancestor lost citizenship or records are missing, the process is more complex.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Gather the family line', content: [
            { kind: 'paragraph', text: 'Apostille/legalisation of all foreign certificates + translation into Portuguese, duly certified (notary in Portugal, consulate, lawyer/solicitador or another method accepted by IRN).\n\nPortuguese records are searched by place and period: Conservatória/IRN for civil registry, Arquivo Distrital for many older records, Torre do Tombo for specific collections. It is best to start with the exact concelho/freguesia and year.' }
          ]},
          { id: 'p2', title: '2. Check the ancestor’s record', content: [
            { kind: 'paragraph', text: 'On the IRN website or via a request to the Conservatória — make sure the record exists.' }
          ]},
          { id: 'p3', title: '3. Take CIPLE A2', content: [
            { kind: 'paragraph', text: 'Except for children of Portuguese citizens — they do not need it.' }
          ]},
          { id: 'p4', title: '4. Submit the application to IRN', content: [
            { kind: 'paragraph', text: 'Conservatória dos Registos Centrais (Lisbon) or a consulate.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sefardi',
      title: 'Sephardic Jews — regime abolished',
      content: [
        { kind: 'paragraph', text: 'The Sephardic route evolved in three stages: (1) Lei Orgânica n.º 1/2013 introduced it into the Lei da Nacionalidade (details — Decreto-Lei 30-A/2015); (2) Decreto-Lei n.º 26/2022 (01/09/2022) tightened the Regulamento and required proof of connection with Portugal; (3) Lei Orgânica n.º 1/2024 of 5 March 2024 (entered into force on 01/04/2024) materially changed the law itself: it introduced mandatory legal residence in Portugal ≥ 3 years (consecutive or interpolated) + assessment by a special committee at the Ministry of Justice (researchers + representatives of Jewish communities with religious legal entity status in PT).\n\nAfter 1/2024 the “remote” Sephardic route was effectively closed.' },
        { kind: 'paragraph', text: 'On 03/05/2026 President Seguro promulgated Decreto AR 48/XVII (renumbered from 17/XVII after passing through the TC) — the law fully abolishes the Sephardic route, even in its current format with 3 years of residence. It enters into force on the day after publication in Diário da República; published as Lei Orgânica n.º 1/2026, DR 18/05/2026, in force from 19/05/2026. The text of the law contains a transitional provision — administrative processes pending on the date of entry into force are subject to the previous version of Lei 37/81 (the PS proposal for broader transitional guarantees was rejected). In his speech on 03/05/2026, Seguro also publicly asked that already submitted cases be assessed under the old rules for the sake of legal certainty.\n\nFrom 19/05/2026 the Sephardic route is closed to new applicants. Cases submitted BEFORE that date are assessed under the previous regime (post-LO 1/2024 — residence ≥ 3 years + committee).' },
        { kind: 'warning', text: 'The deadline has passed: the Sephardic route is no longer available to new applicants. Under the transitional provision (art. 7 LO 1/2026), the previous regime is preserved only for cases that were already pending on 19/05/2026. If you applied BEFORE that date — check the status of your case; if not — the Sephardic route is no longer open to you.' }
      ]
    }
  ],
  costs: [
    { label: 'IRN fee', amountEURMin: 0, amountEURMax: 250, note: 'Depends on the basis: for minor children of Portuguese citizens it is free in some cases; for grandchildren it is usually around €250. Check the current Tabela de Emolumentos IRN' },
    { label: 'Archive requests', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Translations + apostilles', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nationality by effect of will or origin', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidated', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei Orgânica n.º 1/2013 — introduction of the Sephardic route into the Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2013-654468', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 26/2022 — tightening of the Sephardic route from 01/09/2022 (amendment to the Regulamento)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/26-2022-180773692', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Orgânica n.º 1/2024 (05/03/2024) — material change to the Sephardic regime: 3+ years of residence + committee, in force from 01/04/2024', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2024-854130977', kind: 'law', language: 'pt', lastRetrieved: '2026-05-18' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (Sephardic, original version)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgation of Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-06-23',
  verifyIntervalDays: 90
}

export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Portuguese citizenship by descent',
  tldr: 'Available to grandchildren and great‑grandchildren of Portuguese citizens if the link is proven. Portuguese grandmother or grandfather + proof of connection = right to citizenship. For a grandchild — automatic right at birth + registration. For a great‑grandchild — a more complex process.',
  tags: ['citizenship', 'descent', 'ancestry'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: 'Descent categories',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Child of a Portuguese citizen (any generation)', content: [
            { kind: 'paragraph', text: 'If one parent is Portuguese (acquired citizenship by the time the child was born), the child automatically has the right to Portuguese citizenship. Registration — at the Conservatória.' }
          ]},
          { id: 'd2', title: 'Grandchild of a Portuguese citizen', content: [
            { kind: 'paragraph', text: 'If a grandmother or grandfather is a citizen of Portugal (and this link is evidenced by documents), the grandchild can apply for citizenship. A “connection with the Portuguese community” is required — A2 Portuguese or cultural connection.' }
          ]},
          { id: 'd3', title: 'Great‑grandchild and beyond', content: [
            { kind: 'paragraph', text: 'Possible, but more difficult — stronger proof of connection is required: residence in Portugal, command of the language, family roots.' }
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Applicant’s birth certificate',
          'Birth certificate of the parent through whom descent is claimed',
          'Grandmother’s or grandfather’s birth certificate (if the applicant is a grandchild)',
          'Proof of the ancestor’s citizenship (entry at the Conservatória or passport)',
          'Portuguese A2 (or equivalent)',
          'Criminal record certificate',
          'No military service in a country opposing Portugal (rare requirement)'
        ]},
        { kind: 'warning', text: 'The chain of certificates must be unbroken. If the ancestor lost citizenship or records are missing, the process is more complex.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Compile the family tree', content: [
            { kind: 'paragraph', text: 'Apostille + sworn translation of all certificates. For records from Portuguese archives — request via the Arquivo Nacional.' }
          ]},
          { id: 'p2', title: '2. Verify the ancestor’s record', content: [
            { kind: 'paragraph', text: 'On the IRN website or by a request to the Conservatória — make sure the record exists.' }
          ]},
          { id: 'p3', title: '3. Sit the CIPLE A2', content: [
            { kind: 'paragraph', text: 'Except for children of Portuguese citizens — they do not require it.' }
          ]},
          { id: 'p4', title: '4. Submit the application to the IRN', content: [
            { kind: 'paragraph', text: 'Conservatória dos Registos Centrais (Lisbon) or a consulate.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sefardi',
      title: 'Sephardic Jews — regime at risk of repeal',
      content: [
        { kind: 'paragraph', text: 'An expedited route for Sephardic Jews was introduced into the Lei da Nacionalidade through **Lei Orgânica n.º 1/2013** (then detailed in regulation by Decreto-Lei 30-A/2015) and was in force for almost 10 years. Significant tightening of the regime has applied since **01.09.2022** — through **Decreto-Lei n.º 26/2022**, which amended the Regulamento da Nacionalidade and required evidence of a real connection to Portugal (residence, economic or cultural ties). Since then, the number of applications has dropped sharply.' },
        { kind: 'paragraph', text: '**03.05.2026 President Seguro promulgated Decreto AR 48/XVII** (after passing through the TC it was renumbered from 17/XVII) — the law fully repeals the expedited Sephardic route. The law will enter into force on the day after publication in the Diário da República (expected in the coming days). In his speech on 03.05.2026, Seguro publicly asked that applications already submitted be assessed under the old rules for legal certainty. Under the law currently in force, until publication in the DRE this route still technically operates under the regime after Decreto-Lei 26/2022.' },
        { kind: 'warning', text: 'If you intend to apply — do it URGENTLY, before publication of Decreto 48/XVII in the DRE. Filing anchors your case under the old regime (especially given the President’s request to the IRN). After publication the new law will entirely eliminate this route.' }
      ]
    }
  ],
  costs: [
    { label: 'IRN fee', amountEUR: 250 },
    { label: 'Archive requests', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Translations + apostilles', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nationality by effect of will or origin', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidated', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 2/2022 — tightening of the Sephardic route', url: 'https://diariodarepublica.pt/dr/detalhe/lei/2-2022-179324500', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (Sephardic)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'National Archive Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidency of the Republic — Promulgation of Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}

export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Portuguese citizenship by descent',
  tldr: 'Available to grandchildren and great-grandchildren of Portuguese citizens if the connection is proven. Portuguese grandmother or grandfather + proof of connection = right to citizenship. For a grandchild — automatic right by birth + registration. For a great-grandchild — a more complex process.',
  tags: ['citizenship', 'descent', 'ancestors'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: 'Categories by descent',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Child of a Portuguese citizen (any generation)', content: [
            { kind: 'paragraph', text: 'If one of the parents is Portuguese (obtained citizenship by the time the child was born), the child automatically has the right to Portuguese citizenship. Registration is at the Conservatória.' }
          ]},
          { id: 'd2', title: 'Grandchild of a Portuguese citizen', content: [
            { kind: 'paragraph', text: 'If the grandmother or grandfather is a Portuguese citizen (and this link is proven by documents), the grandchild may apply for citizenship. A “connection with the Portuguese community” is required — A2 language level or a cultural connection.' }
          ]},
          { id: 'd3', title: 'Great-grandchild and further descendants', content: [
            { kind: 'paragraph', text: 'Possible, but more difficult — stronger proof of connection is required: residence in Portugal, language proficiency, family roots.' }
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
          'Birth certificate of the parent through whom the family relationship is proven',
          'Birth certificate of the grandmother or grandfather (if the applicant is a grandchild)',
          'Proof of the ancestor’s citizenship (record at the Conservatória or passport)',
          'Portuguese language A2 (or equivalent)',
          'Criminal record certificate',
          'No military service in a country opposing Portugal (a rare requirement)'
        ]},
        { kind: 'warning', text: 'The chain of certificates must be uninterrupted. If the ancestor lost citizenship or records have been lost, the process is more complex.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Gather the family tree', content: [
            { kind: 'paragraph', text: 'Apostille + sworn translation of all certificates. For records from Portuguese archives — request via Arquivo Nacional.' }
          ]},
          { id: 'p2', title: '2. Check the ancestor’s record', content: [
            { kind: 'paragraph', text: 'On the IRN website or via a request to the Conservatória — make sure the record exists.' }
          ]},
          { id: 'p3', title: '3. Take CIPLE A2', content: [
            { kind: 'paragraph', text: 'Except for children of Portuguese citizens — they do not need this.' }
          ]},
          { id: 'p4', title: '4. Apply to IRN', content: [
            { kind: 'paragraph', text: 'Conservatória dos Registos Centrais (Lisboa) or a consulate.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sefardi',
      title: 'Sephardic Jews — regime at risk of abolition',
      content: [
        { kind: 'paragraph', text: 'The fast-track route for Sephardic Jews was introduced into the Lei da Nacionalidade through **Lei Orgânica n.º 1/2013** (then the regulation was detailed by Decreto-Lei 30-A/2015) and operated for almost 10 years. A significant tightening of the regime has applied since **01.09.2022** — through **Decreto-Lei n.º 26/2022**, which amended the Regulamento da Nacionalidade and required proof of a real connection with Portugal (residence, economic or cultural ties). After this, the number of applications fell sharply.' },
        { kind: 'paragraph', text: 'Decreto AR 17/XVII (adopted again by Parliament on 01.04.2026) provides for the abolition of this route. As at 28.04.2026, the law has NOT been promulgated by President Seguro. Until the final text is published in the DRE, it is impossible to state the content of the transitional provisions with certainty. Under current law before promulgation, this route technically operates under the regime after Decreto-Lei 26/2022.' },
        { kind: 'warning', text: 'If you plan to apply — do so BEFORE promulgation of the new law. After abolition, restoring this route will be practically impossible.' }
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
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

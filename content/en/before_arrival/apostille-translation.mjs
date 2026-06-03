export default {
  editorialVoice: 'hackportugal',
  id: 'apostille-translation',
  categoryId: 'before_arrival',
  title: 'Apostille and sworn translation of documents',
  tldr: 'Documents from your country of origin for Portugal must be: 1) apostilled (for countries party to the Hague Convention) or legalised at a consulate; 2) translated by a sworn translator. Without this, they are not accepted by AIMA, Finanças, IRN, universities.',
  tags: ['apostille', 'translation', 'legalisation', 'documents'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-apostille',
      title: 'What an apostille is',
      content: [
        { kind: 'paragraph', text: 'An apostille is a stamp confirming the authenticity of an official document for use in another country. It is established by the 1961 Hague Convention.' },
        { kind: 'paragraph', text: 'Hague Convention countries (most countries) — the apostille applies. Countries outside the convention — consular legalisation is required (slower and more expensive).' }
      ]
    },
    {
      id: 'what-apostilize',
      title: 'What to apostille for moving to Portugal',
      content: [
        { kind: 'checklist', items: [
          'Birth certificate — ALWAYS (for NIF, AIMA, citizenship, marriage)',
          'Marriage certificate — if you are married',
          'Divorce certificate (if applicable)',
          'Death certificate of a spouse (if you are widowed)',
          'Criminal record certificate — valid for 3-6 months, a “fresh” one is often required',
          'Degree certificate + transcript + academic record — for recognition',
          'School certificate — for children',
          'Medical certificates — rarely, but possible',
          'Powers of attorney'
        ]},
        { kind: 'warning', text: 'You do NOT need to apostille a passport or residence permit — they are recognised internationally in their own right.' }
      ]
    },
    {
      id: 'russia-process',
      title: 'Apostille in Russia',
      audience: { countryCodes: ['RU'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Civil registry office — certificates', content: [
            { kind: 'paragraph', text: 'Obtain a duplicate certificate from the civil registry office → apostille at the regional civil registry department or the Ministry of Justice. 3-30 days, RUB 2,500-4,000.' }
          ]},
          { id: 'r2', title: '2. Criminal record certificate', content: [
            { kind: 'paragraph', text: 'Ministry of Internal Affairs → apostille through the Ministry of Justice. 2-4 weeks. It can be done remotely via Gosuslugi + consulate, but the consular process is slower.' }
          ]},
          { id: 'r3', title: '3. Degree certificate', content: [
            { kind: 'paragraph', text: 'Rosobrnadzor → apostille. Or notarisation of a copy + apostille at the Ministry of Justice.' }
          ]},
          { id: 'r4', title: '4. Portuguese Consulate in Moscow', content: [
            { kind: 'paragraph', text: 'An alternative is legalisation at the consulate (only if an apostille is unavailable).' }
          ]}
        ]}
      ]
    },
    {
      id: 'belarus-process',
      title: 'Apostille in Belarus',
      audience: { countryCodes: ['BY'] },
      content: [
        { kind: 'paragraph', text: 'Civil registry office — certificates (apostilled at the Ministry of Justice of the Republic of Belarus). Ministry of Internal Affairs — criminal record certificate (apostille at the Ministry of Justice). Degree certificate — Ministry of Education of the Republic of Belarus.' },
        { kind: 'paragraph', text: 'The usual timeframe is 2-4 weeks. Expedited services are available when applying in person in Minsk.' }
      ]
    },
    {
      id: 'ukraine-process',
      title: 'Apostille in Ukraine',
      audience: { countryCodes: ['UA'] },
      content: [
        { kind: 'paragraph', text: 'Civil registry office — certificates + apostille at the Ministry of Justice of Ukraine. Criminal record certificate — Ministry of Internal Affairs → Ministry of Justice. Remote processing is possible via Diia or by power of attorney.' }
      ]
    },
    {
      id: 'translation',
      title: 'Sworn translation in Portugal',
      content: [
        { kind: 'paragraph', text: 'Portugal does not have the institution of a “sworn translator” in the same way as some other countries. Instead:' },
        { kind: 'substeps', items: [
          { id: 't1', title: 'Option A — certified translator at the Conservatória do Registo Civil', content: [
            { kind: 'paragraph', text: 'The translator prepares the translation → certifies it at the Conservatória do Registo Civil. This is the official route.' }
          ]},
          { id: 't2', title: 'Option B — certified by a notary, lawyer or solicitador', content: [
            { kind: 'paragraph', text: 'A notary, lawyer (advogado) or solicitador, as well as a chamber of commerce, can add a certification statement to the translation — this is allowed under Decreto-Lei n.º 237/2001. In practice this is the most common and convenient route.' }
          ]},
          { id: 't3', title: 'Option C — Portuguese consulate in the country of origin', content: [
            { kind: 'paragraph', text: 'Translation by a consular translator. Convenient if the document is being legalised at the consulate.' }
          ]},
          { id: 't4', title: 'Option D — sworn translator in your own country', content: [
            { kind: 'paragraph', text: 'Translation by a sworn translator (if such an institution exists, as in the Russian Federation/Ukraine) + apostille on the translation — accepted in Portugal.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Apostille in the Russian Federation (certificate)', amountEURMin: 25, amountEURMax: 45, note: 'RUB 2,500-4,000' },
    { label: 'Apostille in the Russian Federation (criminal record certificate)', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Sworn translation (1 document)', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Certification at the Conservatória do Registo Civil/by a notary', amountEURMin: 25, amountEURMax: 60 }
  ],
  sources: [
    { title: 'Hague Conference — Apostille Convention', url: 'https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Translations and certifications', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

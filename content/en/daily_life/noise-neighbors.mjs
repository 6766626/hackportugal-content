export default {
  editorialVoice: 'hackportugal',
  id: 'noise-neighbors',
  categoryId: 'daily_life',
  title: 'Noise and neighbours — what is legal, where to complain',
  tldr: 'In Portugal, night-time quiet hours are 23:00–07:00 (Decreto-Lei 9/2007, Regulamento Geral do Ruído). Music, drilling, dogs barking — everything is regulated. Complaints: first amicably, then PSP/GNR, Câmara Municipal and Inspeção-Geral da Agricultura, do Mar, do Ambiente (IGAMAOT). Fines are up to €2,500 for individuals and up to €24,000 for legal entities.',
  tags: ['noise', 'neighbours', 'quiet', 'rights', 'complaint'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'quiet-hours',
      title: 'Statutory quiet hours',
      content: [
        { kind: 'checklist', items: [
          '🌙 Quiet period (período de repouso): 23:00 – 07:00 on ordinary days',
          '🌙 Weekends and public holidays: municipal regulations often extend this until 09:00',
          '☀️ Daytime hours: noise is permitted, but not excessive',
          '🔨 Renovation works: usually 08:00–20:00 on weekdays, 09:00–18:00 at weekends (depends on the municipality)',
          '📏 Limit level: Lden 55 dB(A), Lnight 45 dB(A) for residential areas'
        ]},
        { kind: 'warning', text: 'Hours may be made stricter by municipal regulation. Check the website of your city’s Câmara Municipal under “Ambiente” or “Ruído”.' }
      ]
    },
    {
      id: 'sources-of-noise',
      title: 'Typical sources and their rules',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Neighbours’ music / parties', content: [
            { kind: 'paragraph', text: 'Not permitted during the período de repouso. During the day — permitted if it does not exceed dB limits. Measured by PSP with a sound level meter.' }
          ]},
          { id: 's2', title: 'Renovation and drilling', content: [
            { kind: 'paragraph', text: 'Most regulations allow 09:00–19:00 on weekdays. On Saturday — restricted, on Sunday — PROHIBITED (except in emergencies).' }
          ]},
          { id: 's3', title: 'Dogs barking', content: [
            { kind: 'paragraph', text: 'Constant barking at night = a breach. The owner must take action (behavioural correction, care for the dog). Otherwise — a fine and, in extreme cases, compulsory relocation of the animal.' }
          ]},
          { id: 's4', title: 'Air conditioners / heat pumps', content: [
            { kind: 'paragraph', text: 'They must comply with the dB restrictions stated in the appliance’s documentation. Installation is sometimes regulated by the condomínio rules.' }
          ]},
          { id: 's5', title: 'Restaurants and bars', content: [
            { kind: 'paragraph', text: 'They have a special noise licence. Complaints are submitted to ASAE and the municipal inspectorate. Mass complaints can lead to the licence being revoked.' }
          ]},
          { id: 's6', title: 'Church bells and mosques', content: [
            { kind: 'paragraph', text: 'Exempt from dB level restrictions (religious activity), but not from quiet hours — they ring only during the day and on holy days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-complain',
      title: 'Where to complain and how',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Amicably', content: [
            { kind: 'paragraph', text: 'The first attempt usually resolves 70% of cases. Knock, explain politely. In a condominium — through the building manager.' }
          ]},
          { id: 'c2', title: '2. PSP/GNR (112)', content: [
            { kind: 'checklist', items: [
              'During the incident, if the noise is excessive',
              'They will arrive with a sound level meter and take measurements',
              'They will draw up an auto de notícia — the basis for a fine',
              'The local officer in a city — PSP, in a town/village — GNR'
            ]}
          ]},
          { id: 'c3', title: '3. Câmara Municipal', content: [
            { kind: 'checklist', items: [
              'For chronic breaches (construction, restaurants, industry)',
              'Written complaint via the municipality’s website or in person',
              'The municipal inspectorate attends and takes measurements',
              'The fine procedure is lengthy (3–6 months)'
            ]}
          ]},
          { id: 'c4', title: '4. Livro de Reclamações (complaints book)', content: [
            { kind: 'paragraph', text: 'For licensed bars/restaurants/shops. A copy automatically goes to the regulator, ASAE.' }
          ]},
          { id: 'c5', title: '5. Court (for compensation)', content: [
            { kind: 'paragraph', text: 'If the noise has caused damage (lack of sleep, health issues, reduced rental value) — Julgado de Paz (small claims court) for claims up to €15,000. Evidence — recordings, measurements, medical certificates.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines',
      content: [
        { kind: 'checklist', items: [
          'Individual: €500–2,500',
          'Legal entity (bar, shop, building site): €2,500–24,000',
          'Repeat breach: doubling + possible closure',
          'No noise licence (bar): immediate suspension of activity',
          'Failure to comply with a municipality order: fine + classification as a repeat breach'
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '📱 Download an app to measure dB (unofficial, but useful for recording evidence)',
          '📹 A short video recording with a time stamp is better than “my neighbour’s word”',
          '📋 Record the date/time of each incident — 5+ episodes are persuasive for court',
          '🗣️ A complaint should always be in Portuguese — English/Russian slows the process down',
          '🏢 In a condominium — always go through the building manager; the meeting minutes are strong evidence'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Complaint to PSP/GNR', amountEUR: 0 },
    { label: 'Complaint to Câmara Municipal', amountEUR: 0 },
    { label: 'Julgado de Paz', amountEUR: 70 },
    { label: 'Fine for the neighbour (individual)', amountEURMin: 500, amountEURMax: 2500 }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 9/2007 — General Noise Regulation', url: 'https://dre.pt/dre/detalhe/decreto-lei/9-2007', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APA — Portuguese Environment Agency (Noise)', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Noise complaint', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/apresentar-uma-queixa-por-ruido', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações — official portal', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}

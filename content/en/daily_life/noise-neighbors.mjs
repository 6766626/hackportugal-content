export default {
  editorialVoice: 'hackportugal',
  id: 'noise-neighbors',
  categoryId: 'daily_life',
  title: 'Noise and neighbours — what is legal, where to complain',
  tldr: 'In Portugal, night-time quiet hours are 23:00–07:00 (Decreto-Lei 9/2007, Regulamento Geral do Ruído). Music, drilling, barking dogs — everything is regulated. Complaints: first amicably, then PSP/GNR, Câmara Municipal. Fines depend on the category of infringement (Lei 50/2006 on contraordenações ambientais) and can vary substantially for individuals and legal entities.',
  tags: ['noise', 'neighbours', 'quiet', 'rights', 'complaint'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'quiet-hours',
      title: 'Quiet hours under the law',
      content: [
        { kind: 'checklist', items: [
          '🌙 Rest period (período de repouso): 23:00 – 07:00 on ordinary days',
          '🌙 Weekends and public holidays: in municipal regulations this is often extended until 09:00',
          '☀️ Daytime hours: noise is allowed, but not excessive',
          '🔨 Renovation works: the national RGR rule — weekdays 08:00–20:00; at weekends/public holidays it is usually additionally restricted or requires special licenciamento. The municipal regulation may be stricter',
          '📏 Lden 55 dB(A), Lnight 45 dB(A) — these are planning indicators for “zonas sensíveis” (classified zones), not a simple threshold for neighbour noise; other RGR criteria apply to neighbour disputes'
        ]},
        { kind: 'warning', text: 'Hours may be made stricter by municipal regulation. Check the website of your city’s Câmara Municipal in the “Ambiente” or “Ruído” section.' }
      ]
    },
    {
      id: 'sources-of-noise',
      title: 'Typical sources and their rules',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Neighbour music / parties', content: [
            { kind: 'paragraph', text: 'Not permitted during the período de repouso. Even during the day, the authorities may order measures/deadlines if noise systematically interferes with the normal use of housing — it is not strictly “everything is allowed as long as it is < dB”.' }
          ]},
          { id: 's2', title: 'Renovation and drilling', content: [
            { kind: 'paragraph', text: 'The national RGR rule for conservation/renovation works inside residential/commercial buildings is weekdays 08:00–20:00. On Saturdays and Sundays it is often restricted or requires licenciamento, except in emergencies. The municipal regulation may be stricter.' }
          ]},
          { id: 's3', title: 'Barking dogs', content: [
            { kind: 'paragraph', text: 'Constant barking at night = an infringement. The owner must take measures (behavioural correction, care for the dog). Otherwise — a fine and, in extreme cases, compulsory relocation of the animal.' }
          ]},
          { id: 's4', title: 'Air conditioners / heat pumps', content: [
            { kind: 'paragraph', text: 'They must comply with the dB limits stated in the appliance specifications. Installation is sometimes regulated by the condomínio rules.' }
          ]},
          { id: 's5', title: 'Restaurants and bars', content: [
            { kind: 'paragraph', text: 'They have a special noise licence. Complaints are submitted to ASAE and the municipal inspectorate. Mass complaints lead to the licence being withdrawn.' }
          ]},
          { id: 's6', title: 'Church bells and mosques', content: [
            { kind: 'paragraph', text: 'Exempt from dB-level restrictions (religious activity), but not from quiet hours — they ring/call only during the day and on holy days.' }
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
            { kind: 'paragraph', text: 'Usually the first attempt resolves 70% of cases. Knock, explain politely. In a condominium — through the managing agent.' }
          ]},
          { id: 'c2', title: '2. PSP/GNR', content: [
            { kind: 'checklist', items: [
              'During the incident, if the noise is excessive',
              'PSP/GNR will usually come, speak to the offender and may draw up an auto de notícia, but a calibrated sonometer is not always present on ordinary neighbour calls — for an official measurement, a municipal inspection is more often needed',
              'The local police force in a city — PSP, in a rural area/village — GNR'
            ]}
          ]},
          { id: 'c3', title: '3. Câmara Municipal', content: [
            { kind: 'checklist', items: [
              'For chronic infringements (construction, restaurants, industry)',
              'Written complaint via the municipality’s website or in person',
              'The municipal inspectorate attends with measuring equipment',
              'The fine procedure is lengthy (3–6 months)'
            ]}
          ]},
          { id: 'c4', title: '4. Livro de Reclamações (complaints book)', content: [
            { kind: 'paragraph', text: 'For licensed bars/restaurants/shops. A copy is automatically sent to the regulator ASAE.' }
          ]},
          { id: 'c5', title: '5. Court (for compensation)', content: [
            { kind: 'paragraph', text: 'If the noise caused damage (sleep deprivation, health, rent dropped) — Julgado de Paz (small claims court) for claims up to €15,000. Evidence — recordings, measurements, medical certificates.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines',
      content: [
        { kind: 'checklist', items: [
          'The amount of fines depends on the category of contraordenação ambiental under Lei 50/2006 (leve/grave/muito grave) and on whether the offender is an individual or a legal entity. The ranges vary substantially and are regularly updated — it is best to check the exact rate in the current version of the law',
          'Repeated infringement: possible doubling and/or closure',
          'No noise licence (bar): immediate suspension of activity',
          'Failure to comply with a municipal order: fine + recognition as a repeated infringement'
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '📱 Download an app for measuring dB (unofficial, but useful for recording evidence)',
          '📹 A short video recording with a timestamp is better than “my neighbour’s word”',
          '📋 Record the date/time of each incident — 5+ episodes are persuasive in court',
          '🗣️ A complaint should always be in Portuguese — English/Russian slows the process down',
          '🏢 In a condominium — always go through the managing agent; minutes of the meeting are strong evidence'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Complaint to PSP/GNR', amountEUR: 0 },
    { label: 'Complaint to Câmara Municipal', amountEUR: 0 },
    { label: 'Julgado de Paz', amountEUR: 70 },
    { label: 'Fine for the neighbour (individual)', amountEURMin: 0, amountEURMax: 0, note: 'the range depends on the category of infringement under Lei 50/2006; see the current version' }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 9/2007 — Regulamento Geral do Ruído', url: 'https://dre.pt/dre/detalhe/decreto-lei/9-2007', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APA — Agência Portuguesa do Ambiente (Noise)', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Noise complaint', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/apresentar-uma-queixa-por-ruido', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações — official portal', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

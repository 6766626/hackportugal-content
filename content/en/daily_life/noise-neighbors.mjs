export default {
  editorialVoice: 'hackportugal',
  id: 'noise-neighbors',
  categoryId: 'daily_life',
  title: 'Noise and neighbours — what is legal, where to complain',
  tldr: 'In Portugal, night-time quiet hours are 23:00–07:00 (Decreto-Lei 9/2007, Regulamento Geral do Ruído).\n\nMusic, drilling, barking dogs — everything is regulated. Complaints: first peacefully, then PSP/GNR, Câmara Municipal. Fines depend on the category of the offence (Lei 50/2006 on contraordenações ambientais) and can vary significantly for individuals and legal entities.',
  tags: ['noise', 'neighbours', 'quiet', 'rights', 'complaint'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'quiet-hours',
      title: 'Legal quiet hours',
      content: [
        { kind: 'checklist', items: [
          '🌙 Rest period (período de repouso): 23:00 – 07:00 on ordinary days',
          '🌙 Weekends and public holidays: in municipal regulations this is often extended until 09:00',
          '☀️ Daytime hours: noise is allowed, but not excessive',
          '🔨 Renovation works: the national RGR rule — weekdays 08:00–20:00; at weekends/public holidays it is usually additionally restricted or requires special licensing. The municipal regulation may be stricter',
          '📏 Lden 55 dB(A), Lnight 45 dB(A) — these are planning indicators for “zonas sensíveis” (classified zones), not a simple threshold for neighbour noise; other RGR criteria apply to neighbour disputes'
        ]},
        { kind: 'warning', text: 'Hours may be made stricter by municipal regulation. Check your city’s Câmara Municipal website under “Ambiente” or “Ruído”.' }
      ]
    },
    {
      id: 'sources-of-noise',
      title: 'Typical sources and their rules',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Neighbour music / parties', content: [
            { kind: 'paragraph', text: 'During the período de repouso, this is not permitted. Even during the day, the authorities may order measures/deadlines if noise systematically disrupts the normal use of a dwelling — it is not strictly “everything is allowed as long as it is < dB”.' }
          ]},
          { id: 's2', title: 'Renovation works and drilling', content: [
            { kind: 'paragraph', text: 'The national RGR rule for conservation/renovation works inside residential/commercial buildings is weekdays 08:00–20:00. On Saturday and Sunday it is often restricted or requires licensing, except for emergencies. The municipal regulation may be stricter.' }
          ]},
          { id: 's3', title: 'Barking dogs', content: [
            { kind: 'paragraph', text: 'Constant barking at night = a breach. The owner must take measures (behavioural correction, caring for the dog). Otherwise — a fine and, in extreme cases, compulsory relocation of the animal.' }
          ]},
          { id: 's4', title: 'Air conditioners / heat pumps', content: [
            { kind: 'paragraph', text: 'They must comply with the dB limits stated in the appliance’s technical specifications. Installation is sometimes regulated by the condominium rules.' }
          ]},
          { id: 's5', title: 'Restaurants and bars', content: [
            { kind: 'paragraph', text: 'They have a special noise licence. Complaints are submitted to ASAE and the municipal inspectorate. Mass complaints can lead to withdrawal of the licence.' }
          ]},
          { id: 's6', title: 'Church bells and mosques', content: [
            { kind: 'paragraph', text: 'They are exempt from dB-level restrictions (religious activity), but not from quiet hours — they ring only during the day and on holy days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-complain',
      title: 'Where to complain and how',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Peacefully', content: [
            { kind: 'paragraph', text: 'Usually the first attempt resolves 70% of cases. Knock, explain politely. In a condominium — through the building manager.' }
          ]},
          { id: 'c2', title: '2. PSP/GNR', content: [
            { kind: 'checklist', items: [
              'During the incident, if the noise is excessive',
              'PSP/GNR will usually come, speak to the offender and may draw up an auto de notícia, but a calibrated sonometer is not always present on ordinary neighbour calls — for an official measurement, the municipal inspectorate is more often needed',
              'The local police force in the city — PSP, in the countryside/village — GNR'
            ]}
          ]},
          { id: 'c3', title: '3. Câmara Municipal', content: [
            { kind: 'checklist', items: [
              'For chronic breaches (construction, restaurants, industry)',
              'Written complaint via the municipality website or in person',
              'The municipal inspectorate visits and takes measurements',
              'The fine procedure is lengthy (3–6 months)'
            ]}
          ]},
          { id: 'c4', title: '4. Livro de Reclamações (complaints book)', content: [
            { kind: 'paragraph', text: 'For bars/restaurants/shops with a licence. A copy automatically goes to the regulator ASAE.' }
          ]},
          { id: 'c5', title: '5. Court (for compensation)', content: [
            { kind: 'paragraph', text: 'If the noise has caused damage (lack of sleep, health, reduced rent) — Julgado de Paz (small claims court) for claims up to €15,000. Evidence — recordings, measurements, medical certificates.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines',
      content: [
        { kind: 'checklist', items: [
          'The amount of fines depends on the category of contraordenação ambiental under Lei 50/2006 (leve/grave/muito grave) and on whether the offender is an individual or a legal entity. The ranges differ significantly and are updated regularly — it is better to check the exact rate in the current version of the law',
          'Repeat offence: possible doubling and/or closure',
          'No noise licence (bar): immediate suspension of activity',
          'Failure to comply with a municipal order: fine + recognition of a repeat offence'
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
          '📋 Record the date/time of each incident — 5+ incidents are persuasive for court',
          '🗣️ A complaint should always be in Portuguese — English/Russian slows the process down',
          '🏢 In a condominium — always through the building manager; the minutes of a meeting are strong evidence'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Complaint to PSP/GNR', amountEUR: 0 },
    { label: 'Complaint to Câmara Municipal', amountEUR: 0 },
    { label: 'Julgado de Paz', amountEUR: 70 },
    { label: 'Fine for a neighbour (individual)', amountEURMin: 0, amountEURMax: 0, note: 'the range depends on the category of offence under Lei 50/2006; see the current version' }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 9/2007 — General Noise Regulation', url: 'https://dre.pt/dre/detalhe/decreto-lei/9-2007', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APA — Portuguese Environment Agency (Noise)', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Noise complaint', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/apresentar-uma-queixa-por-ruido', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações — official portal', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

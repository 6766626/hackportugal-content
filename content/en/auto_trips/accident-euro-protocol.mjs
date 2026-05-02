export default {
  editorialVoice: 'hackportugal',
  id: 'accident-euro-protocol',
  categoryId: 'auto_trips',
  title: 'Road accident in Portugal — Declaração Amigável (European accident statement) and when to call GNR',
  tldr: 'In a road accident with no injuries and no disputes, fill in the **Declaração Amigável de Acidente Automóvel (DAAA)**, the two-party European accident statement. If there is a dispute, a drunk driver, injuries or third parties involved — 112 → GNR/PSP. The policyholder must notify the insurer of the accident within **8 days** (DL 72/2008 — Regime Jurídico do Contrato de Seguro). Missing the deadline **does not automatically** mean everyone loses the right to compensation (for an injured third party, there is a separate regime), but it creates a real risk of refusal or a reduced payout, especially if the delay has harmed the insurer. It is better to meet the deadline.',
  tags: ['road accident', 'crash', 'insurance', 'gnr', 'declaração amigável'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'first-minutes',
      title: 'The first few minutes at the scene',
      content: [
        { kind: 'checklist', items: [
          '🚨 Switch on your hazard lights. If you are on a motorway, read the “Flat tyre on the motorway” guide',
          '🦺 Put on a reflective vest BEFORE getting out of the car (mandatory in Portugal)',
          '⚠️ Place the warning triangle 30 m away (city street — 50 cm from the pavement is acceptable, motorway — 30 m)',
          '🚑 Check everyone: if there are any injuries → call 112 immediately',
          '📸 Take photos: vehicle positions, number plates, road signs, skid marks, damage',
          '🪪 Exchange: identity documents, driving licences, vehicle document (DUA), Carta Verde (insurance policy)'
        ]}
      ]
    },
    {
      id: 'when-gnr',
      title: 'When to call GNR / PSP (112)',
      content: [
        { kind: 'checklist', items: [
          '🚑 There are injured people (of any kind — even “just a bruise”)',
          '💥 Material damage is clearly > €5,000 or infrastructure has been damaged',
          '⚖️ A driver is suspected of driving under the influence (alcohol/drugs)',
          '🚗 One of the parties has no documents or no insurance',
          '🏃 The at-fault driver has left the scene of the accident',
          '🗣️ There is a conflict and the parties cannot agree',
          '🌍 One of the parties is a foreigner without Portuguese insurance and does not speak the languages'
        ]},
        { kind: 'paragraph', text: 'GNR Brigada de Trânsito is responsible for motorways and intercity roads, while PSP covers cities. They will draw up an auto de notícia (police report) — a strong document for court or the insurance company.' }
      ]
    },
    {
      id: 'daaa',
      title: 'Declaração Amigável — how to fill it in',
      content: [
        { kind: 'paragraph', text: 'The European accident statement form is standard across the EU. Every driver has one in the glove compartment together with the Carta Verde. It is a self-copying form.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: '1. Fill in the front side together', content: [
            { kind: 'checklist', items: [
              'Date, time, location (kilometre / street)',
              'Whether there are any injured people (even if there are “no wounds”)',
              'Whether there are any witnesses',
              'Details of both policies (insurer, number)',
              'Vehicle description (make, registration number, owner, driver)',
              'Accident diagram — draw the positions, arrows, signs',
              'Tick the 17 circumstance checkboxes (speed, turning, overtaking, etc.)'
            ]}
          ]},
          { id: 'd2', title: '2. Both parties sign', content: [
            { kind: 'paragraph', text: 'IMPORTANT: by signing, you agree ONLY to the facts on the front side. Liability is determined by the insurer. DO NOT write “I am at fault” in the “comments” field.' }
          ]},
          { id: 'd3', title: '3. Separate the copies', content: [
            { kind: 'paragraph', text: 'White (original) — for you, yellow — for the other party. At the top of the form there are instructions on what to do next.' }
          ]},
          { id: 'd4', title: '4. Submit it to the insurer within 8 days', content: [
            { kind: 'checklist', items: [
              'Email / form on the website / insurer’s app',
              'Attach photos from the scene',
              'Your IBAN for compensation',
              'Report from the repair garage'
            ]}
          ]}
        ]},
        { kind: 'warning', text: 'No DAAA and no GNR → the insurance company will most likely refuse compensation. Always draw up a report.' }
      ]
    },
    {
      id: 'special-cases',
      title: 'Special situations',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'The other party has left the scene', content: [
            { kind: 'paragraph', text: 'Call 112 → GNR/PSP auto de notícia. FGA (Fundo de Garantia Automóvel), where the at-fault party is uninsured, covers physical injury to people and (with limitations) material damage. Where the at-fault party is **unknown** and has left the scene of the accident, cover for material damage is limited to special cases; physical injury to people is usually covered. Contact FGA directly (fga.pt) or through your insurer for instructions.' }
          ]},
          { id: 's2', title: 'Accident involving an unknown object (post, sign)', content: [
            { kind: 'paragraph', text: 'GNR is mandatory. Without a report, the insurance company will treat this as “own damage” — full compensation will only be available if you have a Casco (danos próprios) package, not basic RC.' }
          ]},
          { id: 's3', title: 'A foreigner is involved in the accident', content: [
            { kind: 'paragraph', text: 'Carta Verde (“green card”) works throughout the EU/EEA. If there is none, call GNR and check the insurance. For drivers from the Russian Federation/Brazil after 2022, Carta Verde may not work — check with the insurer.' }
          ]},
          { id: 's4', title: 'Taxi / Uber / Bolt', content: [
            { kind: 'paragraph', text: 'The platform has trip insurance. Be sure to report the incident through the app within 24 hours.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'Afterwards — medical and legal',
      content: [
        { kind: 'checklist', items: [
          '🏥 Even a “minor” bruise → SNS / private clinic within 24 hours. A certificate is needed for the insurance company / pension',
          '⚖️ Serious accident resulting in disability → specialist road traffic accident lawyer',
          '💰 Non-material damage, loss of earnings — all compensated under the Código Civil (Civil Code)',
          '📋 Limitation period — 3 years from the moment the damage stabilises (art. 498 CC)',
          '🚗 Repairs — only at accredited repair garages in the insurer’s network or with an agreed estimate'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros (guide to DAAA)', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Estrada (Portuguese Highway Code) — artigo 89 (participação de acidente)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGA — Fundo de Garantia Automóvel', url: 'https://www.fga.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}

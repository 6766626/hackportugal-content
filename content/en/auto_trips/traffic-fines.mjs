export default {
  editorialVoice: 'hackportugal',
  id: 'traffic-fines',
  categoryId: 'auto_trips',
  title: 'Traffic fines in Portugal — types, points, appeals',
  tldr: 'ANSR (Autoridade Nacional de Segurança Rodoviária) fines are divided into minor (leves), serious (graves), and very serious (muito graves). A driver has 12 points in the "carta por pontos" system — they are deducted for offences. At 0 points, the licence is suspended. A 50% discount applies if paid within 15 days. Appeals must be submitted in writing to ANSR or to the court within 15 days.',
  tags: ['fine', 'traffic rules', 'ansr', 'points'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Classification of fines',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Leve (minor)', content: [
            { kind: 'checklist', items: [
              '€60–300 for an individual, €300–1500 for a legal entity',
              'Example: not wearing a seat belt, crossing a bus lane, failing to give way to a pedestrian',
              'No points deducted'
            ]}
          ]},
          { id: 't2', title: 'Grave (serious)', content: [
            { kind: 'checklist', items: [
              '€120–600',
              '−3 points',
              'Example: exceeding the speed limit by 30–60 km/h on a motorway, crossing a solid line, overtaking at a crossing'
            ]}
          ]},
          { id: 't3', title: 'Muito Grave (very serious)', content: [
            { kind: 'checklist', items: [
              '€500–2500',
              'From −4 to −6 points',
              'Example: exceeding the speed limit by more than 60 km/h, driving under the influence of alcohol, driving into the oncoming lane, running a red light',
              'Licence suspension for up to 2 years is possible'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'points',
      title: 'Carta por pontos — 12 points',
      content: [
        { kind: 'paragraph', text: 'Carta por pontos has been in force since 01/06/2016. Every driver has 12 points, which are deducted for offences. Points are restored automatically: +1 for every 3 years without offences.' },
        { kind: 'checklist', items: [
          '⬇️ Points deduction: road crime (crime rodoviário) −6, very serious administrative offence (contra-ordenação muito grave) −5, serious offence (grave) −3 per offence. There is no formal "warning" at 9 points',
          '⬇️ Below a certain level, IMT may require training / retraining (acção de formação)',
          '⬇️ Reaching 0 points = cancellation of the driving licence (cassação do título); a new licence cannot be obtained for 2 years, then the procedure starts from scratch',
          '🚨 0 points immediately for: exceeding the speed limit by more than 80 km/h, alcohol above 1.2 g/l, fuga (leaving the scene)',
          '📅 Points are restored: +1 for 3 years',
          '✅ Refresher course (Curso de aperfeiçoamento) — you can recover 4 points once every 5 years'
        ]}
      ]
    },
    {
      id: 'speeding',
      title: 'Speeding fines',
      content: [
        { kind: 'paragraph', text: 'Under the rules: urban areas — 50 km/h, outside urban areas — 90 km/h, motorway — 120 km/h. The minimum camera tolerance is 7%. Fines:' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Up to 20 km/h in an urban area / 30 km/h outside an urban area — Leve', content: [
            { kind: 'paragraph', text: '€60–300, no points deducted' }
          ]},
          { id: 's2', title: '20–40 / 30–60 km/h — Grave', content: [
            { kind: 'paragraph', text: '€120–600, −3 points, possible driving ban for 1–6 months' }
          ]},
          { id: 's3', title: '> 40 / > 60 km/h — Muito Grave', content: [
            { kind: 'paragraph', text: '€500–2500, −4/−6 points, driving ban for 2–24 months' }
          ]}
        ]}
      ]
    },
    {
      id: 'alcohol',
      title: 'Alcohol and drugs',
      content: [
        { kind: 'checklist', items: [
          '🍺 > 0.5 g/l, with less than 2 years of driving experience — > 0.2 g/l: Grave — €250–1250, −3 points, driving ban for 1–12 months',
          '🥃 > 0.8 g/l: Muito Grave — €500–2500, −4 points, driving ban for 2–12 months',
          '🍾 > 1.2 g/l: criminal case — up to 1 year in prison or a fine, −6 points, driving ban for 3–24 months',
          '💊 Drugs: treated as equivalent to > 1.2 g/l, plus criminal liability',
          '🚨 Fuga (leaving the scene where alcohol is suspected) — 0 points immediately'
        ]}
      ]
    },
    {
      id: 'payment',
      title: 'Paying a fine',
      content: [
        { kind: 'checklist', items: [
          '📬 You have received an Auto de Contra-Ordenação letter with a reference',
          '✂️ Pagamento voluntário: with voluntary payment within the set deadline (usually 15 working days from notification), the **minimum amount** of the coima is paid, not a "50% discount". The specific minimum amount is stated in the notice',
          '💳 Methods: ANSR online, Portal das Finanças, Multibanco, CTT/Payshop',
          '📅 Deadline for full payment — 30 days after notification',
          '⏰ Late payment — +30%, then court proceedings',
          '💸 Debt > €50 — will block the IPO and sale of the car'
        ]}
      ]
    },
    {
      id: 'appeal',
      title: 'Appeal',
      content: [
        { kind: 'checklist', items: [
          '📝 Written Impugnação within 15 days from the date of notification',
          '📬 Address: ANSR (Autoridade Nacional de Segurança Rodoviária) or GNR, whichever issued the fine',
          '📸 Evidence: witnesses, dashcam video, photos of signs',
          '🏛️ It automatically goes to the Tribunal de Pequena Instância Criminal',
          '⚖️ Pay only after the court decision',
          '⚠️ If you lose in court — plus court costs (~€50–200)'
        ]},
        { kind: 'warning', text: 'If you do not appeal and do not pay, the fine becomes an enforceable document. It may be recovered from your salary, IBAN, or seized property.' }
      ]
    }
  ],
  costs: [
    { label: 'Leve fine', amountEURMin: 60, amountEURMax: 300 },
    { label: 'Grave fine', amountEURMin: 120, amountEURMax: 600 },
    { label: 'Muito Grave fine', amountEURMin: 500, amountEURMax: 2500 },
    { label: 'Pagamento voluntário (minimum coima amount)', amountEUR: 0, note: 'with voluntary payment within the set deadline, the minimum amount stated in the notice is paid' }
  ],
  sources: [
    { title: 'Código da Estrada (Portuguese traffic rules)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pay a traffic fine', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pagar-coimas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}

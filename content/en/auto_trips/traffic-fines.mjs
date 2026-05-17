export default {
  editorialVoice: 'hackportugal',
  id: 'traffic-fines',
  categoryId: 'auto_trips',
  title: 'Road traffic fines in Portugal — types, points, appeals',
  tldr: 'ANSR (Autoridade Nacional de Segurança Rodoviária) fines are divided into minor (leves), serious (graves), and very serious (muito graves). A driver has 12 points in the “carta por pontos” system — points are deducted for offences. At 0 points — cassação do título. Within 15 working days after notification, it is usually possible to pay voluntarily the **minimum coima amount** (not a “50% discount”). Defesa/contestação — within 15 working days to the address/under the procedure stated in the notice.',
  tags: ['fine', 'road traffic rules', 'ansr', 'points'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Classification of fines',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Leve (minor)', content: [
            { kind: 'checklist', items: [
              '€60-300 for an individual, €300-1,500 for a legal entity',
              'Example: not wearing a seat belt, crossing a stop line, failing to give way to a pedestrian',
              'No points deducted'
            ]}
          ]},
          { id: 't2', title: 'Grave (serious)', content: [
            { kind: 'checklist', items: [
              '€120-600 (typical range; depends on the offence)',
              'Usually **−2 points**; for a grave offence involving alcohol — −3 points',
              'Example: speeding by 30-60 km/h on a motorway, crossing a solid line, overtaking at a pedestrian crossing'
            ]}
          ]},
          { id: 't3', title: 'Muito Grave (very serious)', content: [
            { kind: 'checklist', items: [
              '€500-2,500 (typical range)',
              'Usually **−4 points**; for a muito grave offence involving alcohol/drugs — −5; for a road crime — −6',
              'Example: speeding by more than 60 km/h, drink-driving, driving into the oncoming lane, running a red light',
              'Driving licence suspension of up to 2 years is possible'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'points',
      title: 'Carta por pontos — 12 points',
      content: [
        { kind: 'paragraph', text: 'Carta por pontos has been in force since 01/06/2016. Each driver has 12 points, which are deducted for offences. Points are restored automatically: +1 for every 3 years without offences.' },
        { kind: 'checklist', items: [
          '⬇️ Points deduction: for road crimes (crime rodoviário) — −6; for administrative muito grave offences — −4 (−5 for alcohol/drugs); for grave offences — −2 (−3 for alcohol). There is no formal “warning” at 9 points',
          '⬇️ At 5 or 4 points — compulsory **ação de formação de segurança rodoviária**',
          '⬇️ At 3, 2 or 1 point — compulsory **theory test**',
          '⬇️ At 0 points — **cassação da carta**; a new título de condução can only be obtained after the legally provided period and after meeting the requirements',
          '📅 Points are restored: +1 for 3 years without offences',
          '✅ Refresher course (Curso de aperfeiçoamento) — you can recover 4 points once every 5 years'
        ]}
      ]
    },
    {
      id: 'speeding',
      title: 'Speeding fines',
      content: [
        { kind: 'paragraph', text: 'According to the rules: urban areas — 50 km/h, outside urban areas — 90 km/h, motorway — 120 km/h. Calibration/tolerances for radars and cameras are regulated by the relevant IPQ/ANSR rules; allow a margin of at least 7%, but the specific permitted discrepancy depends on the type of measurement. Fines:' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Up to 20 km/h in urban areas / 30 km/h outside urban areas — Leve', content: [
            { kind: 'paragraph', text: '€60-300, no points deducted' }
          ]},
          { id: 's2', title: '20-40 / 30-60 km/h — Grave', content: [
            { kind: 'paragraph', text: '€120-600, usually −2 points, possible driving ban for 1-6 months' }
          ]},
          { id: 's3', title: '40-60 / 60-80 km/h — Muito Grave', content: [
            { kind: 'paragraph', text: '€300-1,500, usually −4 points, driving ban for 2-24 months' }
          ]},
          { id: 's4', title: '> 60 / > 80 km/h — Muito Grave', content: [
            { kind: 'paragraph', text: '€500-2,500, usually −4 points, driving ban for 2-24 months' }
          ]}
        ]}
      ]
    },
    {
      id: 'alcohol',
      title: 'Alcohol and drugs',
      content: [
        { kind: 'checklist', items: [
          '🍺 > 0.5 g/l, with less than 2 years’ driving experience — > 0.2 g/l: Grave — €250-1,250, −3 points, driving ban for 1-12 months',
          '🥃 > 0.8 g/l: Muito Grave — €500-2,500, −4 points, driving ban for 2-12 months',
          '🍾 > 1.2 g/l: criminal case — up to 1 year in prison or a fine, −6 points, driving ban for 3-24 months',
          '💊 Drugs: muito grave, usually €500-2,500, −5 points, ban for 2 months-2 years; criminal liability is possible if inability to drive safely is proven',
          '🚨 Refusing/evading a test or leaving the scene of a road accident can entail serious administrative/criminal consequences; there is no automatic “0 points immediately” as a general rule'
        ]}
      ]
    },
    {
      id: 'payment',
      title: 'Paying a fine',
      content: [
        { kind: 'checklist', items: [
          '📬 You received an Auto de Contra-Ordenação letter with a reference',
          '✂️ Pagamento voluntário: with voluntary payment within the set deadline (usually 15 working days from notification), the **minimum amount** of the coima is paid, not a “50% discount”. The specific minimum amount is stated in the notice',
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
          '📝 **Defesa/contestação administrativa** within 15 working days from the date of notification, in the manner and to the address stated in the auto/notificação',
          '📬 Address and procedure: ANSR / GNR / PSP — stated in the auto itself',
          '📸 Evidence: witnesses, dashcam video, photos of signs',
          '🏛️ First, ANSR/the competent authority reviews the defesa and issues a decision. If the decision is unfavourable — appeal to court within the set deadline; the competent court depends on the comarca',
          '⚖️ Pay only after the final decision if it is unfavourable',
          '⚠️ If you lose in court — plus court costs (~€50-200)'
        ]},
        { kind: 'warning', text: 'If you do not appeal and do not pay — the fine becomes an enforceable title. Recovery may be made from salary, IBAN or seized assets.' }
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
    { title: 'Código da Estrada (Portuguese road traffic rules)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pay a traffic coima', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pagar-coimas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

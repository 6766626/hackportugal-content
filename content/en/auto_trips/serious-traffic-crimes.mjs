export default {
  editorialVoice: 'hackportugal',
  id: 'serious-traffic-crimes',
  categoryId: 'auto_trips',
  title: 'Serious traffic offences — criminal road offences',
  tldr: 'In Portugal, some offences are not administrative but criminal (Código Penal + Código da Estrada). These include: driving with BAC ≥1.2 g/l, refusing an alcohol test, driving after being disqualified, negligent homicide / serious bodily harm, leaving the scene of an accident. Penalties: driving ban from 2 months to 3 years, fines up to €15,000, imprisonment up to 5 years.\n\nThe carta por pontos system: for a crime rodoviário — −6 points; for a contra-ordenação muito grave (incl. BAC 0.8–1.2) — −5 points; grave — usually −3. At 0 points — cassação do título: you cannot obtain a new licence for 2 years, then you must retake everything from scratch. A conviction remains on the certidão do registo criminal.',
  tags: ['traffic rules', 'crime', 'driving', 'fines'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'alcohol',
      title: 'Alcohol at the wheel — the main trap',
      content: [
        { kind: 'paragraph', text: 'Portugal has one of the strictest BAC control systems in Europe.' },
        { kind: 'checklist', items: [
          '🍺 BAC 0.5–0.8 g/l (about 1–2 glasses of wine) — contra-ordenação grave: fine €250–1,250, ban 1–12 months, minus 3 points',
          '🍷 BAC 0.8–1.2 g/l — contra-ordenação muito grave: fine €500–2,500, ban 2–24 months, minus 5 points',
          '🍸 BAC ≥ 1.2 g/l — criminal offence (art. 292 Código Penal): up to 1 year in prison or a fine of up to 120 daily rates, ALWAYS a ban of 2+ months, criminal record for 5–10 years',
          '🚫 Refusal to take the test — treated as BAC ≥ 1.2 g/l + charge of "desobediência qualificada" (up to 2 years in prison)',
          '⚠️ For new drivers (<3 years of licence): limit 0.2 g/l — even a pint of beer can be an offence',
          '💼 For professional drivers (taxis, lorries, buses): 0.2 g/l'
        ]}
      ]
    },
    {
      id: 'points',
      title: 'Points system — 12 points with deductions',
      content: [
        { kind: 'paragraph', text: 'Since 2016, a points system has applied (carta por pontos). All drivers start with 12 points.\n\nCrime rodoviário = −6 points.\n\nContra-ordenação muito grave = −5 points.\n\nGrave = −3 points.\n\nLeve does not deduct points in the general table. Reach 0 — cassação do título; you cannot obtain a new licence for 2 years, after which you must go through the licensing process again.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Minus 1 point — contra-ordenações graves', content: [
            { kind: 'checklist', items: [
              'Speeding by 30–60 km/h in town (60–80 outside town, 80–100 on a motorway)',
              'Running a red light',
              'Using a phone while driving without a hands-free kit',
              'Failing to give way to a pedestrian on a pedestrian crossing',
              'Driving without a seat belt',
              'No child seat for <12 years / <135 cm'
            ]}
          ]},
          { id: 'p2', title: 'Minus 2 points', content: [
            { kind: 'checklist', items: [
              'Speeding by 60+ km/h in town',
              'Overtaking across a solid line',
              'Failing to stop when required by GNR / PSP',
              'Driving in a prohibited place (one-way street, pedestrian zone)'
            ]}
          ]},
          { id: 'p3', title: 'Minus 3 points', content: [
            { kind: 'checklist', items: [
              'Alcohol 0.5–0.8 g/l',
              'Racing in town',
              'Driving without a licence or with an expired licence',
              'Using false number plates'
            ]}
          ]},
          { id: 'p4', title: 'Minus 4 points', content: [
            { kind: 'checklist', items: [
              'Alcohol 0.8–1.2 g/l',
              'Driving without a valid IPO (roadworthiness inspection)',
              'Refusal to stop + pursuit'
            ]}
          ]},
          { id: 'p5', title: 'Minus 5 points — criminal offence', content: [
            { kind: 'checklist', items: [
              'Alcohol ≥ 1.2 g/l',
              'Refusal to take an alcohol / drugs test',
              'Leaving the scene of an accident with injured persons',
              'Drugs at the wheel',
              'Negligent homicide / serious bodily harm'
            ]}
          ]}
        ]},
        { kind: 'paragraph', text: 'Recovering points: +1 point every 3 years without offences, maximum 12. A "re-education course" is possible — 2–3 days at IMT — +2 points (paid, ~€250).' }
      ]
    },
    {
      id: 'speed-cameras',
      title: 'Cameras — margin of error and how they work',
      content: [
        { kind: 'checklist', items: [
          '📐 Official margin of error: 7% (built into the fine calculation)',
          'Example: limit 120, speed 140 — it will be recorded as (140 × 0.93 = 130.2) → fine for +10 km/h, not +20',
          'Fixed cameras: signs warn you 300 m in advance',
          'Hidden ANSR radars: no warning, may be in GNR cars',
          'Mobile radars — often on the verge in small villages on national roads',
          'The fine arrives by post at the owner’s address within 30–90 days',
          '🕐 Payment deadline: 15 days — minimum da coima (×1), 30 days — no penalty, afterwards — ×2–3',
          '⚖️ Appeal: via recurso in tribunal, within 20 days after receiving the notice — lawyer €150–300'
        ]}
      ]
    },
    {
      id: 'check-fines',
      title: 'How to check your fines and points',
      content: [
        { kind: 'checklist', items: [
          '🚦 IMT Portal Digital (imt-ip.pt) — sign in with CMD / CC → "Consultar carta" → shows points + history',
          '⚖️ Portal das Finanças → e-balcão — unpaid fines and court cases',
          '📧 Email notifications from ANSR — subscribe on ansr.pt for alerts about new fines',
          '📞 Call IMT 800 501 501',
          '📄 Certidão da carta de condução — request via imt-ip.pt, shows full history (for work, visa, court)'
        ]}
      ]
    },
    {
      id: 'foreign-licence',
      title: 'For non-Portuguese driving licences',
      content: [
        { kind: 'paragraph', text: 'The points system applies to all drivers on Portuguese territory, even with foreign licences. If you reach 0 points — loss of the right to drive in Portugal (your home licence is not valid in Portugal); when you return home, the licence works as usual.' },
        { kind: 'checklist', items: [
          'Fines linked to foreign licences are recorded in the centralised EUCARIS database (for EU licences) or in Portugal’s national register',
          'When exchanging your licence for a Portuguese one (after exchange) — points are transferred',
          'Fine notices arrive at the vehicle registration address',
          'For a rental car with a UK licence: the company receives the fine and bills you + €30–50 as an administrative fee'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'BAC 0.5-0.8 fine', amountEURMin: 250, amountEURMax: 1250 },
    { label: 'BAC 0.8-1.2 fine', amountEURMin: 500, amountEURMax: 2500 },
    { label: 'BAC ≥ 1.2 fine (criminal offence)', amountEURMin: 500, amountEURMax: 15000 },
    { label: 'Points recovery course', amountEUR: 250 },
    { label: 'Appeal through a lawyer', amountEURMin: 150, amountEURMax: 300 }
  ],
  sources: [
    { title: 'Código da Estrada — DRE', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código Penal — art. 291-292 (driving)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34437675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Portal Digital', url: 'https://portal.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

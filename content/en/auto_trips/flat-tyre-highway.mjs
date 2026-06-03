export default {
  editorialVoice: 'hackportugal',
  id: 'flat-tyre-highway',
  categoryId: 'auto_trips',
  title: 'Flat tyre on the motorway — the correct sequence',
  tldr: 'On Portuguese motorways it is strictly forbidden to change a wheel on the carriageway. Sequence: hazard lights → move onto the hard shoulder → triangle 30 m → vest → call the motorway operator’s roadside assistance or your own insurer. For ordinary drivers, assistência em viagem insurance usually covers recovery and transfer.',
  tags: ['accident', 'wheel', 'tyre', 'motorway', 'assistance'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'first-seconds',
      title: 'The first seconds — safety',
      content: [
        { kind: 'checklist', items: [
          '🚨 Switch on the hazard lights immediately',
          '🛞 Do NOT brake sharply — hold the steering wheel, ease off the accelerator smoothly',
          '➡️ Check the right mirror — is there a chance to move onto the hard shoulder',
          '🛑 Pull over AS FAR as possible from the traffic lane, parallel to the barrier',
          '⚙️ Engage park / handbrake, switch off the ignition, remove the key'
        ]},
        { kind: 'warning', text: 'If the tyre bursts at a speed of >100 km/h and you lose control — do not try to stop immediately, reduce speed smoothly, steer along the centre of the lane, straighten the car.' }
      ]
    },
    {
      id: 'get-out',
      title: 'How to leave the car',
      content: [
        { kind: 'checklist', items: [
          '🦺 Put on a reflective vest BEFORE getting out',
          '🚪 Exit on the side OPPOSITE the traffic (through the passenger door)',
          '🚸 Move all passengers behind the barrier, away from the lane',
          '⚠️ Place the triangle at a distance of ≥30 m behind the car (Art. 88 Código da Estrada)',
          '📍 Remember the kilometre marker (kp) — the assistance service will need it'
        ]},
        { kind: 'warning', text: 'Do NOT change the wheel on the hard shoulder of a motorway, even if you have a spare wheel. This is expressly prohibited by the Código da Estrada and is dangerous — every year drivers are killed by passing lorries.' }
      ]
    },
    {
      id: 'call-help',
      title: 'Calling for help',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'A. assistência em viagem insurance', content: [
            { kind: 'paragraph', text: 'If you have it (usually in the RC package or separately for ~€30/year), call the insurer’s number — they will organise a tow truck and transfer to the nearest garage. Usually the first 50–100 km are free.' }
          ]},
          { id: 'c2', title: 'B. Motorway concessionaire', content: [
            { kind: 'checklist', items: [
              'Brisa (A1, A2, A6, A8, A9-A13): 707 500 900 or 210 730 300',
              'Ascendi (A4, A11, A24, A41, A42): 229 767 767',
              'The exact operator number is printed on your toll ticket and on roadside signs',
              'There are always emergency SOS posts every 2 km — they connect you directly to the operator’s control centre'
            ]}
          ]},
          { id: 'c3', title: 'C. GNR — if there are injuries or an accident', content: [
            { kind: 'paragraph', text: '112 — the universal emergency services number. GNR Brigada de Trânsito attends road accidents.' }
          ]}
        ]}
      ]
    },
    {
      id: 'paperwork',
      title: 'Afterwards — documents and compensation',
      content: [
        { kind: 'checklist', items: [
          '📄 Tow truck receipt — needed for the insurer',
          '🏪 Receipt for the new tyre — if the breakdown was caused by a pothole or debris on the road, you can submit a claim to the concessionaire',
          '📝 Submit a complaint on the Brisa / Ascendi website with photos of the location + kp',
          '⏰ Claim deadline — 30 days',
          '💶 The concessionaire often reimburses the cost of the tyre if you prove the cause (photo of the pothole, GNR report)'
        ]}
      ]
    },
    {
      id: 'prevention',
      title: 'Prevention',
      content: [
        { kind: 'checklist', items: [
          '🛞 Check tyre pressure once a month at a petrol station (free at Galp/BP)',
          '🌡️ In summer +0.3 bar above the nominal value — Portuguese heat “deflates” tyres',
          '👀 Inspect the tread for cracks and bulges once every 2 months',
          '📐 Tread depth at least 1.6 mm (IPO is strict)',
          '🎯 Change tyres in pairs on the same axle',
          '📅 Tyres older than 10 years — replace even with good tread (ageing of the rubber compound)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Código da Estrada — consolidated text', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal — road safety', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Nacional de Segurança Rodoviária (ANSR)', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — tyre safety', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

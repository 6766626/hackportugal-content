export default {
  editorialVoice: 'hackportugal',
  id: 'via-card-electronic-toll',
  categoryId: 'auto_trips',
  title: 'Via Verde and alternatives — all ways to pay for roads',
  tldr: 'Via Verde is an electronic device for driving through without stopping. It is not the only option. Alternatives: Via Card (single-use), prepaid TollCard, post-payment via CTT/Payshop, EasyToll for foreign plates. For Portuguese plates, after driving through, payment becomes available after ~48 h, and the payment window is usually 15 working days. After the window — an administrative offence fine (a fixed range, NOT a universal “×25”). From 01.01.2025, tolls were abolished on the A22 Algarve, A23, A24, A25 and parts of the A28, A4, A13.',
  tags: ['via verde', 'toll', 'toll roads', 'scut'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'options',
      title: 'What options are available',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Via Verde (best option for residents)', content: [
            { kind: 'checklist', items: [
              'Electronic identifier (the little green box on the windscreen)',
              'Automatic debit from a bank account / card',
              'Works on ALL toll roads, EMEL car parks, Galp/Repsol petrol stations (discounts), Transtejo and Soflusa ferries',
              'Installation: order online at viaverde.pt and it arrives by post, or collect it at Via Verde/CTT branches',
              '€27.50 refundable deposit + €2/month',
              'Free (no subscription fee): Via Verde Gratuita subscription for those with <€8/month traffic'
            ]}
          ]},
          { id: 'o2', title: 'Via Card (for short trips)', content: [
            { kind: 'paragraph', text: 'A plastic prepaid card for a set amount (€5, €10, €20). Used at “electronic” payment points on older toll roads (A1, A2) — insert it into the Via Verde device on the contact lane. Does NOT work on Scut (roads without toll booths).' }
          ]},
          { id: 'o3', title: 'EasyToll (for foreign plates)', content: [
            { kind: 'paragraph', text: 'When first entering a Scut, you link a bank card to the number plate at EasyToll terminals (available near the border and at airports). After that, tolls are charged automatically. Valid for 30 days.' }
          ]},
          { id: 'o4', title: 'TollCard (prepaid for tourists)', content: [
            { kind: 'paragraph', text: 'A card with a €5/€10/€20/€40 balance. Activated by SMS → the balance is then deducted. You can buy it at Galp, Repsol and BP petrol stations. For short trips.' }
          ]},
          { id: 'o5', title: 'CTT / Payshop (after the fact)', content: [
            { kind: 'paragraph', text: 'If you drove through an electronic gantry without Via Verde and did not link EasyToll — for Portuguese plates, payment becomes available after ~48 h, and the payment window is usually 15 working days. You can pay at CTT post offices, at Payshop, or online at portagens.ctt.pt. After the window — an administrative offence fine.' }
          ]}
        ]}
      ]
    },
    {
      id: 'scut-explained',
      title: 'What ex-SCUT means and which are now free',
      content: [
        { kind: 'paragraph', text: 'SCUT (Sem Cobrança ao Utilizador) — former roads without toll booths. Over time, some of them became tolled via electronic gantries (without booths), and from 01.01.2025 the government abolished tolls on a number of ex-SCUT roads — A22, A23, A24, A25 and parts of A28, plus A4 and A13/A13-1. Before travelling, check the current status of each road (Infraestruturas de Portugal, Via Verde) — the rules may still change.' },
        { kind: 'checklist', items: [
          '✅ From 01.01.2025 FREE: A22 Algarve, A23 Beira Interior, A24 Interior Norte, A25 Beira Litoral, parts of A28 Norte Litoral, A4 Marão, A13/A13-1',
          '💳 Tolled via pórtico eletrónico (electronic gantries, no booths): A29 Espinho-Ovar, A41/A42 Porto ring road and remaining sections',
          '📷 Sign of a toll road: a gantry over the road with a “Pórtico Eletrónico” sign',
          '🟢 When driving through with Via Verde: green light = processed; ⚠️ without Via Verde — status “payment required” via CTT/Payshop within the stated period (usually from 48 h to 15 working days for Portuguese plates)'
        ]}
      ]
    },
    {
      id: 'proehali-bez',
      title: 'Drove through a Scut without Via Verde — what to do',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'If the car has Portuguese plates', content: [
            { kind: 'checklist', items: [
              'Payment becomes available after ~48 h after driving through, and the payment window is usually 15 working days via CTT/Payshop or portagens.ctt.pt',
              'Have the number plate + date/approximate time of passage ready',
              'After the window — a notification from AT with an administrative offence fine (a fixed range according to the table — NOT a universal “×25”)',
              'Additional court costs of €30-100',
              'It is better to pay quickly — the minimum fine only applies within the set period (see the notification)'
            ]}
          ]},
          { id: 'p2', title: 'If the car has foreign plates', content: [
            { kind: 'checklist', items: [
              'The notification goes through your country’s national registration authority',
              'EU plate: Directive 2011/82/EU applies — information is shared and the fine arrives',
              'Non-EU (Russian Federation, UA, BY, CH, USA): a letter from Infraestruturas de Portugal is sent to the registration address',
              'If ignored — on your next entry into Portugal, you may be stopped at the border and required to pay',
              'Solution: link EasyToll before the trip or install Via Verde Visitors'
            ]}
          ]},
          { id: 'p3', title: 'Challenge a fine', content: [
            { kind: 'paragraph', text: 'Via AT portaldasfinancas.gov.pt → e-balcão. Grounds: broken Via Verde, duplicate fine, incorrect number plate. Deadline — 15 days from receiving the notification.' }
          ]}
        ]}
      ]
    },
    {
      id: 'via-verde-visitors',
      title: 'Via Verde Visitors (for short-term trips)',
      content: [
        { kind: 'checklist', items: [
          'Electronic device like regular Via Verde, but with a fixed term of 1 week / 2 weeks / 1 month',
          'Price: €6 / €8 / €12 + prepaid balance',
          'Order online or at Via Verde branches',
          'For hire cars — often included in the rental package (check)',
          'After return — the deposit is refunded'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Via Verde — deposit (refundable)', amountEUR: 27.50 },
    { label: 'Via Verde — subscription fee', amountEUR: 2, note: '/month' },
    { label: 'Via Verde Gratuita (with <€8/month traffic)', amountEUR: 0 },
    { label: 'Via Card (prepaid)', amountEURMin: 5, amountEURMax: 40 },
    { label: 'Via Verde Visitors (1 week)', amountEUR: 6 },
    { label: 'EasyToll activation', amountEUR: 0, note: '+tolls' },
    { label: 'Fine for non-payment of tolls (after the window)', note: 'fixed range for an administrative offence according to the IP/AT table; specific amounts — in the notification (NOT a universal “×25”)' }
  ],
  sources: [
    { title: 'Via Verde — official portal', url: 'https://www.viaverde.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal — tolls', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EasyToll — linking for foreigners', url: 'https://www.portugaltolls.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Directive 2011/82/EU — cross-border enforcement', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0082', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

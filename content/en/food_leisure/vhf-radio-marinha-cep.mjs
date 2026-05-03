export default {
  editorialVoice: 'hackportugal',
  id: 'vhf-radio-marinha-cep',
  categoryId: 'food_leisure',
  title: 'VHF marine radio — CEP licence and operator certificate',
  tldr: 'If you have a VHF radio on board (or plan to install one), you need two documents: 1) Licença de Estação (CEP) from ANACOM (Autoridade Nacional de Comunicações — the national communications regulator) for the radio itself — €30–€80 per year; 2) Operator Certificate (SRC/LRC) — your personal authorisation to transmit, essentially a radio operator “licence”. SRC (Short Range Certificate) — for VHF near the coast, exam €80–€150. LRC (Long Range Certificate) — for DSC and satellite/long‑range communications. Using marine frequencies without these documents is an offence, fines up to €2,000. When the VHF is on, channel 16 must be monitored continuously. Foreign certificates RYA SRC, ICC VHF and UKHO are recognised.',
  tags: ['vhf', 'radio', 'anacom', 'src', 'navigation'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-needed',
      title: 'When VHF and its licences are required',
      content: [
        { kind: 'checklist', items: [
          'Navigation class Costeira (“coastal”) and above: VHF is mandatory (Decreto-Lei 124/2004)',
          'Navigation class Local (“local”): VHF is not mandatory but strongly recommended',
          'Marinas often require you to keep watch on channel 16 on entry and exit',
          'Any use of VHF requires two documents: a station licence and an operator certificate',
          'A handheld VHF also counts as a radio station — the same licensing requirements apply',
          'A “receive‑only” receiver does not require a licence, but in Portugal there are restrictions on possessing marine receivers without a transmit function'
        ] }
      ]
    },
    {
      id: 'cep-station',
      title: 'CEP — Licença de Estação (for the station itself)',
      content: [
        { kind: 'paragraph', text: 'CEP is the licence for the specific VHF installation on your boat. It is tied to the vessel, not to a person.' },
        { kind: 'checklist', items: [
          'Issued by ANACOM',
          'Submission: at anacom.pt → electronic forms (e‑formulários) → Estações de barco',
          'You will need: boat registration, VHF details (model, serial number, DSC capability), MMSI',
          'MMSI (Maritime Mobile Service Identity) — mandatory 9‑digit identifier for DSC',
          'MMSI is issued via ANACOM and free when applying for the CEP',
          'CEP cost: €30–€80 per year (depends on vessel category)',
          'Renewal: annually; payment via Multibanco (ATM/online) or MB WAY (mobile payment service)'
        ] },
        { kind: 'paragraph', text: 'If you change boats, the CEP does not transfer — apply again.' }
      ]
    },
    {
      id: 'src-operator',
      title: 'SRC — operator certificate (for you)',
      content: [
        { kind: 'paragraph', text: 'SRC (Short Range Certificate) is a personal operator certificate; you may not transmit without it.' },
        { kind: 'checklist', items: [
          'Issuing body: ANACOM via accredited maritime schools',
          'Minimum age: 16',
          'Course: 8–16 hours of theory plus radio practice',
          'Content: radio procedures, NATO phonetic alphabet, channel overview, DSC operation, emergency procedures, MAYDAY/PAN-PAN/SECURITE',
          'Course cost: €100–€200',
          'Exam: test + practical component on VHF and DSC',
          'The certificate has no expiry',
          'If you already have RYA SRC or ICC VHF — ANACOM offers simplified recognition'
        ] },
        { kind: 'paragraph', text: 'LRC (Long Range Certificate) — for long‑range communications (MF/HF, satellite). Usually required for ocean passages. Course 30–50 hours, ~€250–€400.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Getting the SRC — step by step',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Find a school',
            content: [
              { kind: 'paragraph', text: 'See the list of ANACOM‑accredited courses at anacom.pt → Radiocomunicações marítimas. Many schools are the same ones that prepare for skipper licences. There is often a combo: Patrão Local + SRC in one course ~€700.' }
            ]
          },
          {
            id: 's2',
            title: 'Enrol on a course',
            content: [
              { kind: 'paragraph', text: 'Courses run 1–2 times per month in Cascais, Lisboa, Setúbal, Vilamoura, Porto. Popular schools: Sea Boat Academy, Náutica Escola, Cascais Marina (CMI). Typically 2–3 full days or 4–6 evening sessions.' }
            ]
          },
          {
            id: 's3',
            title: 'Sit the exam',
            content: [
              { kind: 'checklist', items: [
                'Theory: ~30 questions; at least 80% correct required',
                'Practical: transmitting MAYDAY/PAN-PAN, using DSC',
                'Knowledge of ITU Radio Regulations',
                'Channels: 16 (distress/calling), 67 (contact with the Capitania — port captaincy), 74 (port operations), 70 (DSC)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Receive your SRC',
            content: [
              { kind: 'paragraph', text: 'The school submits your data to ANACOM; within 2–4 weeks the certificate arrives by post or email. It may be electronic (with QR) or plastic.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'foreign-conversion',
      title: 'Recognition of foreign certificates',
      content: [
        { kind: 'checklist', items: [
          'RYA SRC — recognised directly by ANACOM, registration required',
          'ICC VHF endorsement — recognised',
          'UK CAA SRC (post‑Brexit) — re‑examination in Portugal required',
          'NRR/NDA from Germany and France — recognised within the EU',
          'US FCC GMDSS / Marine Operator — equivalence needs to be checked',
          'The Russian “Marine radiocommunication” — usually not recognised; a full course is required',
          'Registration/recognition fee: €50–€100'
        ] }
      ]
    },
    {
      id: 'usage-rules',
      title: 'VHF operating rules',
      content: [
        { kind: 'checklist', items: [
          'Channel 16 (156.800 MHz) — distress and calling: when the VHF is on it must be monitored continuously',
          'Call sequence: your vessel ×3, called station ×3, then switch to a working channel',
          'Channel 70 — DSC distress/calls only, not for voice',
          'Channel 67 — communication with the Capitania in Lisboa and Cascais',
          'Channel 74 — port operations',
          'Channels 6, 8, 72, 77 — ship‑to‑ship communication',
          'Do not spam and do not conduct private chats on air',
          'Do not use it ashore — marine VHF is intended for use on the water',
          'MAYDAY — life‑threatening emergency, PAN‑PAN — urgent assistance, SECURITE — navigational hazard',
          'After a MAYDAY transmission everyone maintains silence on 16 until the situation is concluded'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines',
      content: [
        { kind: 'checklist', items: [
          'Using VHF without a CEP: €250–€1,500',
          'Transmitting without an SRC: €500–€2,000',
          'False MAYDAY: €1,000–€5,000 + criminal prosecution',
          'Operating on a non‑marine frequency: €250–€1,000',
          'Interference with aviation/shore radio communications: criminal prosecution'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'CEP — station licence', amountEURMin: 30, amountEURMax: 80, note: 'Per year' },
    { label: 'MMSI assignment', amountEUR: 0, note: 'Free with CEP' },
    { label: 'SRC course', amountEURMin: 100, amountEURMax: 200 },
    { label: 'SRC exam', amountEURMin: 30, amountEURMax: 80 },
    { label: 'LRC course (for long passages)', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Recognition of a foreign certificate', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Fixed VHF (Standard Horizon, Icom)', amountEURMin: 200, amountEURMax: 700 },
    { label: 'Handheld VHF', amountEURMin: 100, amountEURMax: 350 }
  ],
  sources: [
    { title: 'ANACOM — Maritime radiocommunications', url: 'https://www.anacom.pt/render.jsp?categoryId=320', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANACOM — Operator certificates', url: 'https://www.anacom.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 53/2009 — radiocommunications', url: 'https://dre.pt/dre/detalhe/decreto-lei/53-2009-606037', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ITU Radio Regulations', url: 'https://www.itu.int/pub/R-REG-RR', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}

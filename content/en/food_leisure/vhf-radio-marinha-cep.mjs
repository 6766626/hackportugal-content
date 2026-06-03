export default {
  editorialVoice: 'hackportugal',
  id: 'vhf-radio-marinha-cep',
  categoryId: 'food_leisure',
  title: 'Marine VHF radio — CEP licence and operator certificate',
  tldr: 'If you have a VHF radio on board (or plan to install one), you need two documents: 1) Licença de Estação (CEP) from DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos — the maritime authority) for the radio station itself, applied for via the www.bmar.pt portal — a one-off fee of €88.80 per frequency band; 2) Certificado de Operador (SRC/LRC) — personal authorisation to operate on air, essentially the operator’s “licence”. SRC (Short Range Certificate) — for VHF near the coast, exam €80–150. LRC (Long Range Certificate) — for DSC and satellite/long-range communications. Operating on marine frequencies without these documents is an offence, with fines for individuals of up to €3,740. Emergency channel 16 must be monitored continuously when VHF is switched on. Foreign certificates RYA SRC and ICC VHF are recognised.',
  tags: ['vhf', 'radio', 'anacom', 'src', 'navigation'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-needed',
      title: 'When VHF and its licences are needed',
      content: [
        { kind: 'checklist', items: [
          'Costeira (“coastal”) navigation class and above: VHF is mandatory (Decreto-Lei 124/2004)',
          'Local navigation class: VHF is not mandatory, but is strongly recommended',
          'Marinas often require you to maintain contact on channel 16 when entering and leaving',
          'Any use of VHF requires two documents: a station licence and an operator certificate',
          'Handheld VHF also counts as a radio station — the same licensing requirements apply',
          'A “listen-only” receiver does not require a licence, but in Portugal there are restrictions on keeping marine receivers without a transmit function'
        ] }
      ]
    },
    {
      id: 'cep-station',
      title: 'CEP — Licença de Estação (for the station itself)',
      content: [
        { kind: 'paragraph', text: 'CEP is the licence for the specific VHF installation on your boat. It is linked to the vessel, not to the person.' },
        { kind: 'checklist', items: [
          'Issued by DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos)',
          'Application: register and authenticate on the www.bmar.pt portal (Licença de Estação de Embarcação)',
          'You will need: boat registration, VHF details (model, serial number, whether it has DSC), MMSI',
          'MMSI (Maritime Mobile Service Identity) — mandatory 9-digit identifier for DSC',
          'MMSI is arranged through DGRM and is free when applying for CEP',
          'CEP cost: a one-off fee of €88.80 per licensed frequency band (for a recreational craft)',
          'For recreational craft the licence has no expiry date (Decreto-Lei 93/2018) — no annual renewal needed; you can pay via Multibanco (ATM/online payment) or MB WAY (mobile payment service)'
        ] },
        { kind: 'paragraph', text: 'If you change boat, CEP cannot be transferred — apply again.' }
      ]
    },
    {
      id: 'src-operator',
      title: 'SRC — operator certificate (for you)',
      content: [
        { kind: 'paragraph', text: 'SRC (Short Range Certificate) is a personal operator certificate; without it you may not transmit on air.' },
        { kind: 'checklist', items: [
          'Who issues it: DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos) through accredited maritime schools',
          'Minimum age: 16',
          'Course: 8–16 hours of theory plus practical radio operation',
          'Content: radio communication rules, NATO phonetic alphabet, channel overview, DSC operation, emergency procedures, MAYDAY/PAN-PAN/SECURITE',
          'Course cost: €100–200',
          'Exam: test + practical part on VHF and DSC',
          'Certificate has no expiry date',
          'If you already have RYA SRC or ICC VHF — DGRM has simplified recognition'
        ] },
        { kind: 'paragraph', text: 'LRC (Long Range Certificate) is for long-range communications (MF/HF, satellite). Usually needed for ocean passages. Course 30–50 hours, ~€250–400.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Getting SRC — step by step',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Find a school',
            content: [
              { kind: 'paragraph', text: 'The operator certificate is issued by DGRM — see the procedure and the list of accredited courses on dgrm.pt (Certificação profissional, Circular n.º 56). Many schools are the same ones that prepare people for skipper licences. There are often combos: Patrão Local + SRC in one course for ~€700.' }
            ]
          },
          {
            id: 's2',
            title: 'Enrol on a course',
            content: [
              { kind: 'paragraph', text: 'Courses run 1–2 times a month in Cascais, Lisboa, Setúbal, Vilamoura, Porto. Popular schools: Sea Boat Academy, Náutica Escola, Cascais Marina (CMI). Usually this is 2–3 full days or 4–6 evening sessions.' }
            ]
          },
          {
            id: 's3',
            title: 'Pass the exam',
            content: [
              { kind: 'checklist', items: [
                'Theory: ~30 questions, at least 80% correct answers required',
                'Practical: transmitting MAYDAY/PAN-PAN, using DSC',
                'Knowledge of ITU Radio Regulations',
                'Channels: 16 (emergency/calling), 67 (communication with Capitania — harbour master’s office), 74 (port operations), 70 (DSC)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Receive your SRC',
            content: [
              { kind: 'paragraph', text: 'The school submits your details to DGRM; after 2–4 weeks the certificate arrives by post or email. It may be electronic (with QR) or plastic.' }
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
          'RYA SRC — recognised directly by DGRM, registration required',
          'ICC VHF endorsement — recognised',
          'UK CAA SRC (after Brexit) — re-examination in Portugal is required',
          'NRR/NDA from Germany and France — recognised within the EU',
          'US FCC GMDSS / Marine Operator — equivalence must be checked',
          'Russian “Maritime Radio Communications” — usually not recognised, full course required',
          'Registration/recognition cost: €50–100'
        ] }
      ]
    },
    {
      id: 'usage-rules',
      title: 'Rules for using VHF',
      content: [
        { kind: 'checklist', items: [
          'Channel 16 (156.800 MHz) — emergency and calling: when VHF is switched on, it must be monitored continuously',
          'Call sequence: your vessel ×3, called station ×3, then switch to a working channel',
          'Channel 70 — only for DSC emergencies/calls, not for voice communication',
          'Channel 67 — communication with Capitania in Lisboa and Cascais',
          'Channel 74 — port operations',
          'Channels 6, 8, 72, 77 — ship-to-ship communication',
          'Do not flood the channel or hold private conversations on air',
          'Do not use it on land — marine VHF is intended for use on the water',
          'MAYDAY — threat to life, PAN-PAN — urgent assistance, SECURITE — navigational danger',
          'After a MAYDAY transmission, everyone maintains silence on channel 16 until the situation is resolved'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines',
      content: [
        { kind: 'checklist', items: [
          'Using VHF without CEP: €250–1,500',
          'Operating on air without SRC: €500–2,000',
          'False MAYDAY: €1,000–5,000 + criminal prosecution',
          'Operating on a non-marine frequency: €250–1,000',
          'Interference with aviation/coastal radio communications: criminal prosecution'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'CEP — station licence', amountEUR: 88.8, note: 'One-off fee per frequency band; no expiry for recreational craft' },
    { label: 'MMSI assignment', amountEUR: 0, note: 'Free with CEP' },
    { label: 'SRC course', amountEURMin: 100, amountEURMax: 200 },
    { label: 'SRC exam', amountEURMin: 30, amountEURMax: 80 },
    { label: 'LRC course (for long-distance voyages)', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Recognition of foreign certificate', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Fixed VHF (Standard Horizon, Icom)', amountEURMin: 200, amountEURMax: 700 },
    { label: 'Handheld VHF', amountEURMin: 100, amountEURMax: 350 }
  ],
  sources: [
    { title: 'DGRM — Vessel Station Licence (BMAR portal)', url: 'https://www.dgrm.pt/navios-e-embarcacoes?articleId=204988', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'DGRM — Professional certification (radiotelephone operator certificate)', url: 'https://www.dgrm.pt/certificacao-profissional', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'ANACOM — Maritime radiocommunications (spectrum)', url: 'https://www.anacom.pt/render.jsp?categoryId=387625', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Decreto-Lei 53/2009 — radiocommunications', url: 'https://dre.pt/dre/detalhe/decreto-lei/53-2009-606037', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 93/2018 — recreational boating (station licence, art. 51)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/93-2018-117038233', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'ITU Radio Regulations', url: 'https://www.itu.int/pub/R-REG-RR', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

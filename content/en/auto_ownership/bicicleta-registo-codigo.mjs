export default {
  editorialVoice: 'hackportugal',
  id: 'bicicleta-registo-codigo',
  categoryId: 'auto_ownership',
  title: 'Bicycle in Portugal — registration, licences and rules',
  tldr: 'Ordinary bicycles (without a motor) in Portugal do NOT require registration, a licence or insurance. Since 2022, a voluntary bicycle register has been introduced via MyBike (mybike.pt) — to protect against theft. Electric bicycles (e-bikes) up to 250 W and 25 km/h do not require registration. Above that, it is a speed pedelec / e-moped and you need: registration with IMT, an AM or A1 licence, helmet, insurance. Highway Code: ride on the right-hand side of the road, you may use cycle lanes, pavement — only children under 10. A helmet is compulsory for children under 16, recommended for everyone. Bicycle on CP trains — free outside peak hours, on Lisboa Metro — yes at most stations.',
  tags: ['bicycle', 'bicycles', 'mybike', 'e-bike', 'imt'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'no-license-needed',
      title: 'When registration and a licence are NOT needed',
      content: [
        { kind: 'checklist', items: [
          '✅ Ordinary bicycle without a motor (any size, any value) — no registration, no licence, no insurance',
          '✅ Electric bicycle up to 250 W power and up to 25 km/h maximum speed with pedal assist, not a throttle — the same rules as for an ordinary bicycle',
          '✅ Cargo bike — the same rules, if without a motor or an e-bike within the limits',
          '✅ Hoverboards and e-skateboards up to 6 km/h — no registration'
        ] },
        { kind: 'paragraph', text: 'In law, this corresponds to EU Directive 2002/24/EC. A pedelec up to 250 W is a “bicycle” in law, not a “motorcycle”.' }
      ]
    },
    {
      id: 'speed-pedelec-emoped',
      title: 'When registration and a licence are needed',
      content: [
        { kind: 'checklist', items: [
          '🛑 Speed pedelec (S-pedelec): power >250 W OR speed >25 km/h with pedal assist. This is already an e-moped',
          '🛑 E-bike with throttle (without pedalling) if above 25 km/h',
          '🛑 Electric scooters above 25 km/h — separate guide',
          'What is needed for an S-pedelec / e-moped up to 50 cm³ or 4 kW:',
          '  • Registration with IMT, obtaining a matrícula',
          '  • Category AM licence (16+) or A1',
          '  • Insurance is compulsory',
          '  • Helmet (compulsory for everyone)',
          '  • IUC (annual road tax)',
          '  • IMT inspection (vistoria) every 2 years'
        ] }
      ]
    },
    {
      id: 'mybike-register',
      title: 'MyBike — voluntary register to protect against theft',
      content: [
        { kind: 'paragraph', text: 'Since 2022, the Federação Portuguesa de Cicloturismo (FPCUB), together with PSP, has launched mybike.pt — a national voluntary bicycle register. Free of charge. Value: if the bicycle is stolen, the police will have an identifier for searching for it.' },
        { kind: 'checklist', items: [
          'You register: frame number (stamped on the frame), photo, colour, model, series',
          'You receive a QR code, which you stick on the bicycle',
          'If the bicycle is found (without the owner) — PSP scans the QR code and sees your contact details',
          'Helps to RETURN the bicycle if it is found',
          'Does not help with insurance: bicycle insurance is separate',
          'Where to register: mybike.pt → Cidadão → Registo Voluntário'
        ] },
        { kind: 'paragraph', text: 'Alternatively — Bike Register (international) or Velocheckpoint. But for Portugal, MyBike is integrated with PSP — the most reliable option.' }
      ]
    },
    {
      id: 'rules-of-road',
      title: 'Road rules',
      content: [
        { kind: 'paragraph', text: 'Portugal’s Highway Code (Código da Estrada) says:' },
        { kind: 'checklist', items: [
          '✅ A cyclist is a road user. Right-hand side of the road',
          '✅ You may ride on cycle lanes (ciclovia)',
          '✅ You may ride on the hard shoulder/verge (berma) on roads without a cycle lane',
          '❌ PAVEMENT: only children under 10 may ride on the pavement. Adults — NO',
          '✅ In pedestrian zones: you may walk the bicycle alongside you, but not ride it',
          '✅ Two abreast: you may ride in pairs if you do not obstruct traffic',
          '🚦 Traffic lights: the same rules as for cars',
          '🚦 Pedestrian crossing: dismount and walk the bicycle — cross as a pedestrian',
          '⚠️ Alcohol: 0.5 per mille for cyclists (as for cars), 0.2 for young people under 25 or novice drivers',
          '⚠️ Phone in hand: prohibited, as for motorists',
          '🌃 At night: a front light (white) and rear light (red) + reflector are compulsory. Reflectors on the pedals. Without them — fine €60-300'
        ] }
      ]
    },
    {
      id: 'helmet',
      title: 'Helmet — compulsory or not',
      content: [
        { kind: 'checklist', items: [
          'Children under 16: HELMET COMPULSORY (Decreto-Lei 41/2007)',
          'Adults: RECOMMENDED, but not compulsory',
          'Child seat: allowed for children up to 7 years old, must have footrests and straps',
          'Bicycle with load / trailer: up to 80 kg in total, trailer must have lights',
          'Sports rallies: a helmet is compulsory for all participants under FPC rules',
          'Pedelec / e-moped: helmet is compulsory regardless of age'
        ] }
      ]
    },
    {
      id: 'theft-insurance',
      title: 'Theft and insurance',
      content: [
        { kind: 'paragraph', text: 'Bicycle theft in Lisbon and Porto is a real problem, especially for expensive bikes. What to do:' },
        { kind: 'checklist', items: [
          'Report it to PSP immediately: “furto de bicicleta”, you need the frame number, MyBike registration, photos',
          'The chances of finding it increase if you have MyBike + a photo with the frame number',
          'Bicycle insurance: €50-200/year from Tranquilidade, Fidelidade, Generali. Covers: theft, damage, liability for injuries',
          'Expensive bicycles (>€1,500): insurance is essential',
          'Additionally: you can add the bicycle to your home insurance (seguro multirriscos), often cheaper',
          'Lock: U-lock minimum €60, not cheap cable locks',
          'GPS tracker: AirTag in the frame or special bike trackers (Powunity, Vodafone V-Bike)'
        ] }
      ]
    },
    {
      id: 'public-transport',
      title: 'Bicycle on public transport',
      content: [
        { kind: 'checklist', items: [
          'CP trains (Lisboa-Porto, Sintra, etc.): bicycle FREE, in special carriages. Peak-hour restrictions — check conditions',
          'Lisboa Metro: allowed at most stations except during peak hours. Free',
          'Lisboa Carris bus: folding bicycle in a cover — yes; ordinary bicycle — no',
          'Porto Metro: bicycle — yes, outside station peak hours',
          'Lisboa bridges (Vasco da Gama, 25 de Abril): cycling is NOT allowed. Use the ferry or Metro',
          'Tejo ferries (Cacilhas, Barreiro, Trafaria): bicycle — yes, usually free',
          'Boleias (lifts/carpooling): no special restrictions',
          'Plane: packing in a bike box, depending on the company: Ryanair €60, TAP €75-100'
        ] }
      ]
    },
    {
      id: 'cycling-routes',
      title: 'Cycling infrastructure and routes',
      content: [
        { kind: 'checklist', items: [
          'Lisboa: ciclovia along the Tejo (Belém — Cais do Sodré — Parque das Nações), Avenida da Liberdade — seamless',
          'Porto: Marginal Foz, ciclovia to Matosinhos and Vila do Conde',
          'Cascais Marginal: 25 km by the sea Lisboa → Cascais',
          'EuroVelo 1 (Atlantic Coast Route): across the whole of Portugal from north to south',
          'Ecopistas: former railway lines converted into cycle paths. Dão (Beira), Lousã, Tâmega',
          'Via Algarviana: 300 km through the Algarve, requires MTB',
          'Caminho Português a Santiago by bicycle: Porto → Santiago in 5-7 days',
          'GIRA in Lisboa, Bira in Porto, BicLisboa, U-Bike: public bicycle systems'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registration in MyBike', amountEUR: 0, note: 'Free' },
    { label: 'New city bicycle', amountEURMin: 200, amountEURMax: 800 },
    { label: 'E-bike within the limits (250 W, 25 km/h)', amountEURMin: 800, amountEURMax: 3500 },
    { label: 'Speed pedelec / e-moped (with registration)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'E-moped registration with IMT', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Bicycle insurance', amountEURMin: 50, amountEURMax: 200, note: 'Per year' },
    { label: 'Good-quality U-lock', amountEURMin: 60, amountEURMax: 150 },
    { label: 'GPS tracker', amountEURMin: 30, amountEURMax: 200, note: 'AirTag or dedicated tracker' },
    { label: 'Adult helmet', amountEURMin: 30, amountEURMax: 200 }
  ],
  sources: [
    { title: 'MyBike — bicycle register', url: 'https://www.mybike.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IMT — Motorised two-wheeled vehicles', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 41/2007 — Código da Estrada', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34490175', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'PSP — road safety for cyclists', url: 'https://www.psp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

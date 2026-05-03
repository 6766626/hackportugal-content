export default {
  editorialVoice: 'hackportugal',
  id: 'bicicleta-registo-codigo',
  categoryId: 'auto_ownership',
  title: 'Bicycles in Portugal — registration, licences and rules',
  tldr: 'Conventional bicycles (no motor) in Portugal do NOT require registration, a licence or insurance. Since 2022 there has been a voluntary bicycle register via MyBike (mybike.pt) — to protect against theft. E-bikes up to 250 W and 25 km/h — no registration required. Above that — it is a speed pedelec/e-moped and you need: registration with IMT, AM or A1 licence, helmet, insurance. Highway Code: ride on the right-hand side, you may use cycle lanes; pavement — only children up to 10. Helmets are compulsory for children under 16, recommended for everyone. Bikes on CP trains — free outside peak hours; in Lisboa Metro — yes at most stations.',
  tags: ['bicycle', 'bike', 'mybike', 'e-bike', 'imt'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'no-license-needed',
      title: 'When registration and a licence are NOT needed',
      content: [
        { kind: 'checklist', items: [
          '✅ A regular bicycle without a motor (any size, any value) — no registration, no licence, no insurance',
          '✅ E-bike up to 250 W power and up to 25 km/h maximum speed with pedal assistance (assist), not throttle — same rules as a regular bike',
          '✅ Cargo bike — same rules if no motor or an e-bike within the limits',
          '✅ Hoverboards and e-skateboards up to 6 km/h — no registration'
        ] },
        { kind: 'paragraph', text: 'This aligns in law with EU Directive 2002/24/EC. A pedelec up to 250 W is a “bicycle” under the law, not a “motorcycle”.' }
      ]
    },
    {
      id: 'speed-pedelec-emoped',
      title: 'When registration and a licence are required',
      content: [
        { kind: 'checklist', items: [
          '🛑 Speed pedelec (S-pedelec): power >250 W OR speed >25 km/h with pedal assistance. This counts as an e-moped',
          '🛑 E-bike with a throttle (no pedalling) if above 25 km/h',
          '🛑 E-scooters above 25 km/h — separate guide',
          'What you need for an S-pedelec/e-moped up to 50 cm³ or 4 kW:',
          '  • Registration with IMT, obtain matrícula',
          '  • AM (16+) or A1 licence',
          '  • Insurance is mandatory',
          '  • Helmet (compulsory for everyone)',
          '  • IUC (annual road tax)',
          '  • IMT inspection (vistoria) every 2 years'
        ] }
      ]
    },
    {
      id: 'mybike-register',
      title: 'MyBike — voluntary register for theft protection',
      content: [
        { kind: 'paragraph', text: 'Since 2022, Federação Portuguesa de Cicloturismo (FPCUB), together with PSP, launched mybike.pt — the national voluntary bicycle register. Free of charge. Value: if the bike is stolen, the police will have an identifier to search for it.' },
        { kind: 'checklist', items: [
          'You register: frame number (stamped on the frame), photos, colour, model, series',
          'You receive a QR code, which you stick on the bike',
          'If the bike is found (without the owner) — PSP scans the QR and sees your contact',
          'Helps to RETURN the bike if found',
          'Does not help with insurance: bicycle insurance is separate',
          'Where to register: mybike.pt → Cidadão → Registo Voluntário'
        ] },
        { kind: 'paragraph', text: 'Alternatively — Bike Register (international) or Velocheckpoint. But for Portugal, MyBike is integrated with PSP — the most reliable.' }
      ]
    },
    {
      id: 'rules-of-road',
      title: 'Rules of the road',
      content: [
        { kind: 'paragraph', text: 'Portugal’s Highway Code (Código da Estrada) says:' },
        { kind: 'checklist', items: [
          '✅ A cyclist is a road user. Keep to the right-hand side',
          '✅ You may ride on cycle lanes (ciclovia)',
          '✅ You may ride on the verge (berma) on roads without a cycle lane',
          '❌ PAVEMENT: only children up to 10 may ride on the pavement. Adults — NO',
          '✅ In pedestrian areas: you may walk the bike beside you, but not ride',
          '✅ Two abreast: you may ride two abreast if you do not obstruct traffic',
          '🚦 Traffic lights: same rules as for cars',
          '🚦 Pedestrian crossing: dismount and wheel the bike — cross as a pedestrian',
          '⚠️ Alcohol: 0.5‰ for cyclists (same as for cars), 0.2‰ for under-25s or novice riders',
          '⚠️ Phone in hand: prohibited as for motorists',
          '🌃 At night: front white light and rear red light are mandatory + reflector. Reflectors on the pedals. Without — fine €60–€300'
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
          'Child seat: permitted for children up to 7 years, must have footrests and straps',
          'Bicycle with load/trailer: up to 80 kg in total, the trailer must have lights',
          'Sporting rallies: helmet compulsory for all participants under FPC rules',
          'Pedelec/e-moped: helmet compulsory regardless of age'
        ] }
      ]
    },
    {
      id: 'theft-insurance',
      title: 'Theft and insurance',
      content: [
        { kind: 'paragraph', text: 'Bicycle theft in Lisbon and Porto is a real issue, especially for expensive bikes. What to do:' },
        { kind: 'checklist', items: [
          'Report immediately to PSP: “furto de bicicleta”, you will need the frame number, MyBike registration, photos',
          'Chances of recovery increase if you have MyBike + a photo showing the frame number',
          'Bicycle insurance: €50–€200 per year from Tranquilidade, Fidelidade, Generali. Covers: theft, damage, liability for injuries',
          'Expensive bicycles (>€1,500): insurance is mandatory',
          'Additionally: you can add the bicycle to your home insurance (seguro multirriscos), often cheaper',
          'Lock: U-lock at least €60, not cheap cable locks',
          'GPS tracker: an AirTag in the frame or special bike trackers (Powunity, Vodafone V-Bike)'
        ] }
      ]
    },
    {
      id: 'public-transport',
      title: 'Bicycles on public transport',
      content: [
        { kind: 'checklist', items: [
          'CP trains (Lisboa–Porto, Sintra, etc.): bicycles FREE, in designated carriages. Peak-hour restrictions — check conditions',
          'Lisboa Metro: permitted at most stations except during peak hours. Free',
          'Lisboa Carris buses: folding bike in a bag — yes; regular bike — no',
          'Porto Metro: bicycles — yes, outside peak hours',
          'Lisboa bridges (Vasco da Gama, 25 de Abril): cycling NOT ALLOWED. Use the ferry or Metro',
          'Tejo ferries (Cacilhas, Barreiro, Trafaria): bicycles — yes, usually free',
          'Boleias (hitchhiking/lifts): no specific restrictions',
          'Aeroplane: pack in a bike box, depending on the airline: Ryanair €60, TAP €75–€100'
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
          'Cascais Marginal: 25 km along the sea Lisboa → Cascais',
          'EuroVelo 1 (Atlantic Coast Route): across Portugal from north to south',
          'Ecopistas: former railway lines converted into cycleways. Dão (Beira), Lousã, Tâmega',
          'Via Algarviana: 300 km across the Algarve, requires MTB',
          'Portuguese Camino to Santiago by bike: Porto → Santiago in 5–7 days',
          'GIRA in Lisboa, Bira in Porto, BicLisboa, U-Bike: public bike systems'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'MyBike registration', amountEUR: 0, note: 'Free' },
    { label: 'New city bike', amountEURMin: 200, amountEURMax: 800 },
    { label: 'E-bike within limits (250 W, 25 km/h)', amountEURMin: 800, amountEURMax: 3500 },
    { label: 'Speed pedelec/e-moped (with registration)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'e-moped registration at IMT', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Bicycle insurance', amountEURMin: 50, amountEURMax: 200, note: 'Per year' },
    { label: 'Quality U-lock', amountEURMin: 60, amountEURMax: 150 },
    { label: 'GPS tracker', amountEURMin: 30, amountEURMax: 200, note: 'AirTag or dedicated' },
    { label: 'Adult helmet', amountEURMin: 30, amountEURMax: 200 }
  ],
  sources: [
    { title: 'MyBike — bicycle register', url: 'https://www.mybike.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IMT — Motorised two-wheeled vehicles', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 41/2007 — Código da Estrada', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34490175', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'PSP — road safety for cyclists', url: 'https://www.psp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}

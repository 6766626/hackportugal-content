export default {
  editorialVoice: 'hackportugal',
  id: 'patinetes-eletricas-rules',
  categoryId: 'auto_ownership',
  title: 'Electric scooters in Portugal: rules, helmet, Bolt/Lime/TIER',
  tldr: 'In 2026, an ordinary trotineta elétrica is considered a veículo de mobilidade individual, treated as a velocípede, if it is not designed to exceed 25 km/h and has power up to 0.25 kW. You must ride on cycle lanes or the carriageway, not on the passeio: a typical coima is €60–300. The law sets no minimum age for such a scooter; Bolt/Lime/TIER rentals almost always require 18+. A helmet is not legally required for adults but is strongly recommended. Important: since 20 June 2025 (Decreto-Lei n.º 26/2025) insurance is mandatory for scooters faster than 25 km/h or heavier than 25 kg (above 14 km/h); a standard scooter up to 25 km/h and under 25 kg still does not need it.',
  tags: ['trotinetas', 'scooter', 'fines', 'bolt'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'legal-status',
      title: '1. What counts as a “normal” electric scooter',
      content: [
        { kind: 'paragraph', text: 'For an everyday user, the important threshold is in the Código da Estrada: an electric trotineta falls under the velocípede/veículo de mobilidade individual regime if its design maximum speed is no more than 25 km/h and its nominal continuous power is no more than 0.25 kW. City Bolt, Lime, TIER and similar services are configured around exactly this.' },
        { kind: 'checklist', items: [
          'Maximum design speed: 25 km/h.',
          'Nominal continuous power: up to 0.25 kW.',
          'A category B or AM licence is not needed for this type of scooter.',
          'Registration with IMT and a matrícula are not required for a standard trotineta elétrica.',
          'IUC, ISV and IMT/ISV taxes do not apply to an ordinary scooter.',
          'Compulsory liability insurance (as for a car) is not required for a standard scooter up to 25 km/h and under 25 kg.',
          'Since 20 June 2025 (Decreto-Lei n.º 26/2025), insurance is mandatory if the scooter is faster than 25 km/h OR heavier than 25 kg and goes faster than 14 km/h.',
          'If the scooter is faster/more powerful, it may cease to be a “trotineta” and fall under the ciclomotor/motociclo regime: in that case homologação, matrícula, seguro and a licence are required.'
        ] },
        { kind: 'warning', text: 'Many private models from AliExpress/Amazon have an unlock option for 30–45 km/h. On the road, this already creates a risk of a fine, refusal of insurance cover and seizure while the vehicle category is clarified.' }
      ]
    },
    {
      id: 'where-to-ride',
      title: '2. Where you may ride, and where you may not 🚫',
      content: [
        { kind: 'paragraph', text: 'The basic logic is the same as for a bicycle: first the ciclovia/faixa ciclável, if there is one; if not, the right-hand side of the carriageway. A pedestrian zone and the passeio are not a normal traffic lane for an electric scooter.' },
        { kind: 'checklist', items: [
          'Allowed: cycle paths, cycle lanes, shared lanes, areas where velocípedes are permitted.',
          'Allowed: the carriageway near the right-hand edge, if there is no cycling infrastructure.',
          'Not allowed: passeio/pavement, except for a brief crossing to enter a courtyard, garage or car park.',
          'Not allowed: pedestrian crossings at speed; it is safer to dismount and cross as a pedestrian.',
          'Not allowed: motorways, IP/IC roads and roads where velocípedes are prohibited by signs.',
          'Not allowed: two people riding one scooter, if the model is not designed and authorised for a passenger.',
          'Not allowed: phone in hand, headphones in both ears, alcohol/drugs — the Código da Estrada rules apply.',
          'At night and in the rain, working lights/reflectors are needed; when visibility is poor, the police readily stop riders.'
        ] },
        { kind: 'warning', text: 'For riding on the passeio or another breach of traffic rules for velocípedes, the typical coima is €60–300. In tourist areas of Lisboa, Porto, Cascais and the Algarve, checks are more frequent, especially in summer and at night.' }
      ]
    },
    {
      id: 'age-helmet-safety',
      title: '3. Age, helmet and safety',
      content: [
        { kind: 'paragraph', text: 'The practical rule for 2026: an electric scooter is not a children’s toy. The Código da Estrada sets no minimum age for a scooter up to 25 km/h (treated as a velocípede) — which often surprises people. In practice, rental services set 18+ in the account terms, because a contract, payment card and responsibility for fines/damage are required.' },
        { kind: 'checklist', items: [
          'The law sets no minimum age for a scooter up to 25 km/h; it is still unsafe for children.',
          'Bolt, Lime, TIER and Hive almost always require 18+ — check the Terms in the app.',
          'A helmet is not legally required for adults but is strongly recommended; for children, all the more so.',
          'For night-time: white front light, red rear light, reflective elements.',
          'One trotineta — one rider; a child “on the platform in front” is considered an offence and dangerous transport.',
          'Do not ride with a bag on the handlebars: this is a typical cause of falls on calçada portuguesa.',
          'In the rain, braking distance increases sharply; calçada paving and tram rails are especially slippery.',
          'In an accident, call 112, photograph the location, the scooter, the QR/rental number and witness details.'
        ] },
        { kind: 'warning', text: 'Even if, in practice, the police do not always check helmets on adults, not wearing a helmet after an injury can complicate a dispute with an insurer or rental service: they often refer to “safe use” in the service rules.' }
      ]
    },
    {
      id: 'shared-apps',
      title: '4. Bolt, Lime, TIER, Hive: how to use them without surprises',
      content: [
        { kind: 'paragraph', text: 'Rental services operate under municipal licences. Zone maps, parking, speed and penalties vary not only across the country but also by neighbourhood: Lisboa, Porto, Braga, Coimbra, Faro and Cascais may have different geofencing rules.' },
        { kind: 'checklist', items: [
          'Before riding, check the slow zone, no-ride zone and mandatory parking zone in the app.',
          'In the centre, speed may automatically drop to 10–15 km/h.',
          'Ending the ride is possible only in an authorised zone; otherwise the meter will continue running.',
          'A parking photo after the ride is mandatory: without it, a penalty fee may be charged.',
          'Do not leave the scooter on the passeio, at the entrance to a prédio, a stop, a ramp or a passadeira.',
          'If the scooter is faulty, end the ride immediately and send a photo to support.',
          'Check the brakes and handlebars before starting: if there is a fall due to an obvious fault, it is easier to dispute if you have photos/videos from before the ride.',
          'You must not give your account to a friend: fines, damage and blocking will be applied to the account holder.'
        ] },
        { kind: 'paragraph', text: 'Tariffs change, but the typical model is an unlock fee + a price per minute. In the tourist season, apps may enable dynamic pricing or a day pass. Always check the final price before starting, especially if the ride is to the airport, a railway station or a beach area.' }
      ]
    },
    {
      id: 'insurance-fines',
      title: '5. Insurance, fines and what to do if stopped by the police',
      content: [
        { kind: 'paragraph', text: 'For a standard trotineta elétrica up to 25 km/h and under 25 kg, separate compulsory civil liability insurance is not required. But since 20 June 2025 (Decreto-Lei n.º 26/2025) insurance has become mandatory for scooters faster than 25 km/h or heavier than 25 kg (above 14 km/h). And in any case damage is not free: if you hit a pedestrian, damage a car or break a shop window, the rider may have to pay personally.' },
        { kind: 'checklist', items: [
          'For a powerful scooter (>25 km/h, or >25 kg above 14 km/h), you must take out seguro under Decreto-Lei n.º 26/2025: riding without it means a coima of €250–1,250 and seizure.',
          'For a personal scooter up to 25 km/h, it is sensible to have seguro de responsabilidade civil familiar/vida privada, even though it is not compulsory.',
          'Check whether your multirriscos habitação or seguro familiar covers damage caused by trotinetas elétricas.',
          'Rentals usually have basic cover, but with an excess, exclusions and refusal in cases of alcohol, riding two-up or breaching zones.',
          'If stopped by the police, calmly show your ID/residence permit or passport, the rental app and explain your route.',
          'Do not argue on the spot about how the offence is classified: ask for the auto de contraordenação and the details for defesa.',
          'Save the ride screenshot, GPS route, app receipt and parking photo.',
          'If you receive a coima of €60–300, the payment/appeal deadlines are stated in the notice; letters sent to your Portuguese address must not be ignored.',
          'In an accident with injured people, always call 112 and PSP/GNR; a verbal agreement “without police” often falls apart later.'
        ] },
        { kind: 'warning', text: 'Alcohol on a scooter is a bad idea legally and physically. In night-life areas such as Bairro Alto, Cais do Sodré, Ribeira, Albufeira and Lagos, the police regularly check light mobility riders after they leave bars.' }
      ]
    }
  ],
  costs: [
    { label: 'Fine for riding on the passeio/pavement or breaching traffic rules', amountEURMin: 60, amountEURMax: 300, note: 'Typical coima under the Código da Estrada for breaches of the velocípedes regime/riding on the pavement.' },
    { label: 'Bolt/Lime/TIER rental', amountEURMin: 0.15, amountEURMax: 0.35, note: 'Indicative per minute; unlock fee and passes depend on the city, season and app.' },
    { label: 'Fine for riding without compulsory insurance (powerful scooter)', amountEURMin: 250, amountEURMax: 1250, note: 'Under Decreto-Lei n.º 26/2025 for scooters >25 km/h or >25 kg (above 14 km/h); seizure possible.' },
    { label: 'Personal helmet', amountEURMin: 25, amountEURMax: 80, note: 'A normal urban helmet from Decathlon/a sports shop; cheaper than a fine and an injury.' },
    { label: 'Seguro responsabilidade civil familiar', amountEURMin: 25, amountEURMax: 80, note: 'Indicative per year; check whether trotinetas elétricas are included.' }
  ],
  sources: [
    { title: 'IMT: veículos de mobilidade individual and rules for trotinetas', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — consolidated legislation, rules for velocípedes/trotinetas and coimas', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-34457775', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 102-B/2020 — changes to the Código da Estrada on mobilidade suave', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-b-2020-150077473', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASF: new vehicles subject to compulsory motor insurance (Decreto-Lei n.º 26/2025, in force from 20.06.2025)', url: 'https://www.asf.com.pt/pt/w/ni_seg_auto', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Bolt Portugal: safety rules and terms of use for scooters', url: 'https://bolt.eu/pt-pt/scooters/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}

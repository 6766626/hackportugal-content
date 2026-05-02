export default {
  editorialVoice: 'hackportugal',
  id: 'compra-bicicleta-usada',
  categoryId: 'auto_ownership',
  title: 'Buying a used bicycle: OLX, Vinted, Custojusto and checking the seller',
  tldr: 'In Portugal, people usually look for a used bicycle on OLX, Custojusto, Vinted and in niche shops such as Bici Used. A normal city-bike price in 2026: €80–250, MTB €150–600, e-bike usually from €700. Before paying, check the frame serial number, chain wear, brakes, play in the bearings and provenance: receipt, photos, ownership history. A helmet is not legally required for a standard bicycle, but lights and reflectors in the dark are mandatory under the Código da Estrada.',
  tags: ['bicycle', 'olx', 'vinted', 'theft'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-search',
      title: 'Where to search and how to read listings',
      content: [
        { kind: 'paragraph', text: 'OLX.pt is the largest classifieds board in Portugal: it has the most bicycles, but also the most junk, resellers and suspicious listings. Custojusto is similar to OLX; sometimes old listings from private sellers remain there. Vinted is convenient for folding, children’s and inexpensive city bicycles, but it has fewer technical details and it is harder to inspect before buying.' },
        { kind: 'paragraph', text: 'For expensive road bikes, gravel bikes, MTB and e-bikes, also check specialised shops and resale platforms: Bici Used, local bike shops, city-specific Facebook groups. A shop is more expensive, but often provides a receipt, basic diagnostics and sometimes a short warranty.' },
        { kind: 'checklist', items: [
          'Search using the words: bicicleta, bike, BTT, estrada, gravel, elétrica, dobrável, criança',
          'Filter by area: Lisboa, Porto, Braga, Coimbra, Algarve — shipping a bicycle is often inconvenient',
          'Compare the price with Decathlon, Sport Zone and new models: if the difference is less than 25–30%, used does not always make sense',
          'A very cheap Trek, Specialized, Cube, Scott, Canyon or Cannondale is a reason to check especially carefully',
          'A listing without photos of the serial number, cassette, chain, brakes and head-tube area — ask for additional photos',
          'The phrase “não sei o tamanho” for an expensive bicycle often means a reseller or a seller without an ownership history',
          'If the seller rushes you, asks for a sinal/adiantamento in advance or sends a link to an “OLX courier” outside the site — do not pay'
        ] }
      ]
    },
    {
      id: 'reputation-and-scam-check',
      title: 'Seller reputation and typical scams',
      content: [
        { kind: 'paragraph', text: 'On OLX and Custojusto, reputation is weaker than on marketplaces with escrow: the profile may be new and reviews are limited. So what matters is not the “star”, but the seller’s behaviour: willingness to show the bicycle, provide the serial number, explain its provenance, meet in a safe place and not demand prepayment.' },
        { kind: 'checklist', items: [
          'Check the profile registration date and the seller’s other listings',
          'Ask for a photo of the bicycle next to a piece of paper with today’s date or your name',
          'Ask for the frame serial number before the meeting, but do not publish your own number openly after purchase',
          'Ask: where it was bought, when it was serviced, why it is being sold, whether there is a fatura/recibo',
          'For an e-bike, ask for photos of the charger, battery keys, display with mileage and errors',
          'Do not follow links to “OLX pagamento”, “transportadora”, “seguro comprador” sent via WhatsApp/SMS',
          'MB WAY is safe only if you yourself know what you are doing: do not disclose códigos, PIN, dados do cartão',
          'For Vinted, use payment and chat inside the app; if you move to WhatsApp, buyer protection effectively disappears',
          'Meet during the day near a metro station, shopping centre, bike shop or police station; not in an entrance hall and not at night'
        ] },
        { kind: 'warning', text: 'Bicycles in Portugal are often stolen from garagens, arrecadações, building entrances and the street. If the seller cannot explain the provenance of an expensive bicycle, the price is 50%+ below market, the lock has been “lost”, and there is no charger/keys — it is better to walk away.' }
      ]
    },
    {
      id: 'serial-number',
      title: 'Serial number and provenance check',
      content: [
        { kind: 'paragraph', text: 'Standard bicycles in Portugal do not have mandatory state registration like cars. So the frame serial number is your main anchor: you can use it to search for theft reports, prove ownership to an insurer and file a report with PSP/GNR if the bicycle is stolen from you later.' },
        { kind: 'checklist', items: [
          'Look for the number on the underside of the bottom bracket, the head tube, the rear dropout or under the e-bike battery',
          'Match the number on the frame with the fatura, warranty booklet, purchase photo or service documents',
          'Check the number and model via Google, Facebook groups, Bike Index and local stolen bike posts',
          'Inspect the number area: it should not have been ground off, painted over with a thick layer, altered or covered with a sticker',
          'Photograph the number and the general view of the bicycle; do not photograph the seller without consent',
          'Save the correspondence, listing, phone number, NIF/name from the recibo, if the seller is willing to provide it',
          'After purchase, take your own photos of the number, frame and components and store them in the cloud'
        ] },
        { kind: 'paragraph', text: 'For an expensive purchase, ask for a simple recibo de compra e venda: date, price, seller’s name, document/NIF if the parties wish, make, model, colour, serial number, signatures. It is not a notarial deed, but it is much better than cash with no trace.' }
      ]
    },
    {
      id: 'technical-check',
      title: 'Technical inspection in 10–15 minutes',
      content: [
        { kind: 'paragraph', text: 'Do not buy a bicycle without a short test ride. Even a beautiful bicycle may need €100–300 of repairs. If you do not know what you are looking at, arrange to meet at an oficina de bicicletas and pay €10–20 for a quick inspection — it is cheaper than replacing the drivetrain after purchase.' },
        { kind: 'checklist', items: [
          'Frame size: you should be able to stand confidently over the frame and not have to stretch to the handlebars as if doing the splits',
          'Frame and fork: cracks, dents, signs of a crash, wheels sitting crooked — red flag',
          'Chain: check with a chain checker; 0.75% wear is already a reason to bargain, 1.0% often takes the cassette and chainrings with it',
          'Shifting: all gears should engage without crunching, skipping or dropping by themselves',
          'Brakes: the lever should not pull all the way to the handlebar; the disc should not rub heavily or be bent',
          'Wheels: lift and spin them — wobble, runout, hub grinding and play mean repairs',
          'Headset and bottom bracket: hold the brake and rock the bicycle; clicks and play are a reason to reduce the price',
          'Tyres: cracks from the sun are common in Portugal; a pair of new tyres can easily cost €30–80',
          'E-bike: the battery must charge, not rattle, the keys must fit, and the motor must not show errors'
        ] },
        { kind: 'warning', text: 'Do not buy an e-bike without a charger and battery keys. “Depois compro carregador” is almost always a bad idea: an original battery and electronics can cost hundreds of euros, and the bicycle’s provenance will be hard to prove.' }
      ]
    },
    {
      id: 'law-and-safety',
      title: 'Law, lights, helmet and safety',
      content: [
        { kind: 'paragraph', text: 'Under the Código da Estrada, a bicycle is a velocípede. For a standard bicycle, a helmet in Portugal is not a mandatory general requirement, but it is strongly recommended, especially in the city, on EN roads and for children. Traffic rules, working brakes, and — in the dark and in poor visibility — front/rear lights and reflective elements are mandatory.' },
        { kind: 'checklist', items: [
          'Front white or yellow light — use it at night, in tunnels, rain/fog',
          'Rear red light and reflector — must-have for the city and suburbs',
          'A bell or other audible signal is useful in the city, even if the seller removed it',
          'Buy a helmet new if you do not know the crash history of the old one',
          'A good U-lock or folding lock is more important than a cheap cable: in Lisbon and Porto, cables are cut quickly',
          'Do not leave the bicycle outside overnight, even with two locks',
          'Immediately after purchase, replace the combination/old lock if it came “included”',
          'For carriage on Comboios de Portugal and the metro, check the rules of the specific operator and peak hours'
        ] },
        { kind: 'paragraph', text: 'If the bicycle is stolen, file a queixa with PSP or GNR and include the serial number, photos, place, date, distinguishing features and purchase documents. Without a serial number, the chance of recovering the bicycle drops sharply.' }
      ]
    },
    {
      id: 'payment-and-handover',
      title: 'Payment and handover',
      content: [
        { kind: 'paragraph', text: 'The safest scenario for a private deal: in-person meeting, inspection, test ride, serial number check, short recibo, then payment. For amounts up to €200–300, cash is often used; for expensive bicycles, a bank transfer or MB WAY on the spot is more convenient, but only after inspection.' },
        { kind: 'checklist', items: [
          'Save a screenshot of the listing before it is deleted',
          'Check that all promised accessories are included: charger, keys, pedals, mudguards, rack',
          'Take a photo of the bicycle after handover',
          'Ask the seller to write in the chat “recebi €X pela bicicleta marca/modelo/serial”',
          'Do not send a sinal in advance, except for a symbolic amount to a known shop with a proper invoice',
          'If buying from a shop, require a fatura with NIF or consumidor final and clarify the warranty',
          'After purchase, immediately adjust the saddle, tyre pressure and brakes, and buy lights if there are none'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Used city bicycle', amountEURMin: 80, amountEURMax: 250, note: 'Working range for OLX/Custojusto in 2026; cheaper often requires repairs' },
    { label: 'Used MTB / BTT', amountEURMin: 150, amountEURMax: 600, note: 'Depends heavily on the fork, drivetrain and wheel condition' },
    { label: 'Used e-bike', amountEURMin: 700, amountEURMax: 2000, note: 'Below €700, check the battery, charger, keys and provenance especially carefully' },
    { label: 'Basic service at an oficina de bicicletas', amountEURMin: 35, amountEURMax: 90, note: 'Brake/gear adjustment without expensive parts' },
    { label: 'Decent U-lock/folding lock', amountEURMin: 30, amountEURMax: 80, note: 'Do not economise: a cheap cable is suitable only as a second lock' },
    { label: 'Lights and reflectors', amountEURMin: 15, amountEURMax: 60, note: 'Needed for riding at night and in poor visibility' }
  ],
  sources: [
    { title: 'OLX Portugal — bicycles and private listings section', url: 'https://www.olx.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — rules for velocípedes, lighting and traffic', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34402975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Custojusto Portugal — private classifieds board', url: 'https://www.custojusto.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Vinted Portugal — purchase and in-platform protection rules', url: 'https://www.vinted.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

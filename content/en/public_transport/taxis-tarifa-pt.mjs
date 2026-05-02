export default {
  editorialVoice: 'hackportugal',
  id: 'taxis-tarifa-pt',
  categoryId: 'public_transport',
  title: 'Taxis in Portugal: Tarifário 1/2/3, night surcharges and booking',
  tldr: 'Taxis in Portugal are not TVDE/Uber: the price is calculated by taxímetro and regulated by tariffs. In town, Tarifa 1 is usually used: starting fare €3.25 on weekdays 06:00–21:00; Tarifa 2: starting fare €3.90 at night 21:00–06:00, at weekends and on public holidays. Tarifa 3 applies outside the populated area: the kilometre rate is higher because the taxi’s return journey is paid for. Surcharges: booking by phone/app around €0.80, luggage/pet €1.60, toll roads — paid by the passenger.',
  tags: ['taxi', 'tariff', 'lisbon', 'airport'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'taxi-vs-tvde',
      title: 'Taxi ≠ TVDE: how not to confuse them',
      content: [
        { kind: 'paragraph', text: 'A regular taxi in Portugal is a licensed vehicle with a TAXI sign, taxímetro, licence number and official tariff sticker. The colour is usually beige; older cars may be black and green.' },
        { kind: 'paragraph', text: 'TVDE means Uber, Bolt, FREENOW Ride, Cabify and other private-hire services priced by app. TVDE vehicles do not have a taxímetro and do not use Tarifário 1/2/3. This guide is specifically about legal táxis.' },
        { kind: 'checklist', items: [
          'In a taxi, the price runs on the taxímetro, not on a pre-shown app price.',
          'The driver must switch on the meter at the start of the journey.',
          'The licence and the complaints book Livro de Reclamações must be visible inside the vehicle.',
          'You are entitled to ask for a recibo/fatura with NIF or without NIF.',
          'Card payment is not always available: check before getting in — “Aceita cartão?”',
          'MB WAY is sometimes available with taxi drivers, but it is not a guaranteed payment method.',
          'TVDE can be cheaper in the city, but at airports/at night surge pricing sometimes makes taxis better value.'
        ] }
      ]
    },
    {
      id: 'tarifas-1-2-3',
      title: 'Tarifário 1/2/3: what the number on the meter means',
      content: [
        { kind: 'paragraph', text: 'The tariff number is shown on the taxímetro. The key point: Tarifa 1 and 2 are urban journeys within a populated area; Tarifa 3 is for journeys outside the populated area/municipal zone, where the taxi’s return journey is effectively built into the price.' },
        { kind: 'checklist', items: [
          'Tarifa 1 — urban daytime tariff: weekdays roughly 06:00–21:00. Portugal-wide guide: starting fare €3.25, kilometre around €0.47.',
          'Tarifa 2 — urban night/weekend/public-holiday tariff: roughly 21:00–06:00, Saturday, Sunday and feriados. Guide: starting fare €3.90, kilometre around €0.56.',
          'Tarifa 3 — non-urban daytime journey: applies after leaving the zone where the urban tariff is valid. Guide: around €0.94/km, because the taxi’s return is taken into account.',
          'For a non-urban night/weekend journey, the next higher tariff may be switched on, often labelled Tarifa 4; the logic is the same, but it is more expensive.',
          'Waiting in traffic or while the passenger stops is charged by time: a guide is around €14.80/hour in the daytime urban mode and higher at night.',
          'The minimum fare is usually equal to the starting fare; a short 500 m journey will not cost €0.50.'
        ] },
        { kind: 'warning', text: 'Exact amounts depend on the current convenção de preços and local rules. If the figures on the sticker in the car differ from the guides above, use the official table inside the vehicle and the taxímetro receipt.' }
      ]
    },
    {
      id: 'surcharges',
      title: 'Night, weekend and other surcharges',
      content: [
        { kind: 'paragraph', text: 'The night and public-holiday surcharge is usually not added as a separate line: the driver simply switches on Tarifa 2 instead of Tarifa 1. So at night you see a higher starting fare and more expensive tariff “steps” on the meter.' },
        { kind: 'checklist', items: [
          'Night: roughly from 21:00 to 06:00 — Tarifa 2.',
          'Weekends: Saturday and Sunday — Tarifa 2 even during the day.',
          'Public holidays, feriados — Tarifa 2.',
          'Booking a taxi by phone, radio dispatch or through an app may add around €0.80.',
          'Luggage in the boot: usually €1.60; hand luggage in the cabin without using the boot should usually not be counted as a luggage surcharge.',
          'Transporting a pet: usually €1.60; a cão de assistência should not be charged as an ordinary animal.',
          'Toll roads, bridges and portagens are paid by the passenger on top of the tariff.',
          'Lisboa Airport: at the official rank there may be a small supplemento, typically €1.60, often connected with the airport/luggage; this is not a €5–10 “airport fee”.',
          'Taxis are usually not responsible for providing a child seat: if it is essential, book in advance and check with the dispatcher.'
        ] },
        { kind: 'warning', text: 'If the driver asks for a fixed price “without the meter” within the city, especially from Lisboa Airport or at a railway station, that is a red flag. Ask them to turn on the taxímetro: “Pode ligar o taxímetro, por favor?”' }
      ]
    },
    {
      id: 'how-to-book',
      title: 'How to book: rank, phone, FREE NOW',
      content: [
        { kind: 'paragraph', text: 'In large cities, the easiest options are: hail a free taxi on the rua, use a praça de táxis at a station/airport/hospital, or book through an app. In smaller towns, it is more reliable to call the local dispatch centre.' },
        { kind: 'substeps', items: [
          { id: 'rank', title: '1. Praça de táxis rank', content: [
            { kind: 'paragraph', text: 'Go to the first car in the queue, but if you need card payment, have large luggage or an animal — check before getting in. At Lisboa Airport, use the official queue by the exit and do not accept offers from people inside the terminal.' }
          ] },
          { id: 'phone', title: '2. Phone', content: [
            { kind: 'paragraph', text: 'For Lisboa, the number +351 218 119 000 works. Give the address, landmark, number of passengers, luggage and whether you need pagamento com cartão.' },
            { kind: 'paragraph', text: 'Useful phrase: “Queria pedir um táxi para [morada]. Somos duas pessoas, com uma mala. Aceita cartão?”' }
          ] },
          { id: 'app', title: '3. FREE NOW', content: [
            { kind: 'paragraph', text: 'In FREE NOW you can book specifically a Taxi, not a TVDE ride. In some cities the app shows an approximate range, but the final taxi price is still calculated by the taxímetro plus legal supplementos.' }
          ] }
        ] }
      ]
    },
    {
      id: 'airport-and-long-distance',
      title: 'Lisboa Airport and intercity journeys',
      content: [
        { kind: 'paragraph', text: 'From Lisboa Airport to the centre, the journey is usually short: Marquês de Pombal, Baixa and Saldanha often come to roughly €10–18 during the day without heavy traffic; at night/at weekends it is more expensive. To Cascais, Sintra, Setúbal or another municipality, the meter may switch to the non-urban tariff.' },
        { kind: 'checklist', items: [
          'Before getting in, check that it is an official taxi with a TAXI roof sign.',
          'Make sure the taxímetro is reset to zero and switched on after the journey starts.',
          'If you are travelling far, ask for a guide price: “Quanto pode custar aproximadamente?”',
          'For intercity trips, the driver may offer a preço combinado; agree only if the price is clear before you set off.',
          'Toll bridges 25 de Abril/Vasco da Gama, motorways and SCUT are paid separately.',
          'If you need a receipt for a company or IRS, ask immediately for “fatura com NIF”.',
          'If you have large luggage, check the supplemento; €1.60 is normal, €10 “per suitcase” is not.'
        ] },
        { kind: 'warning', text: 'For long journeys, taxis are often more expensive than train, Rede Expressos, FlixBus or a pre-booked transfer. But at night, with children, animals or large luggage, a taxi may be the most practical option.' }
      ]
    },
    {
      id: 'complaints',
      title: 'If the price seems wrong',
      content: [
        { kind: 'paragraph', text: 'Do not argue on the road. First ask for a receipt and photograph the taxi number/licence. The receipt should show the date, time, amount, operator details and, if you asked for it, your NIF.' },
        { kind: 'checklist', items: [
          'Ask for a recibo/fatura: “Pode dar recibo, por favor?”',
          'Photograph the taxi licence number and the tariff sticker inside the vehicle.',
          'Check whether Tarifa 2 has been switched on legally: night, weekend or feriado.',
          'Check whether the journey went outside the populated area: in that case Tarifa 3 may be normal.',
          'If the driver refuses to give a receipt, that is grounds for a complaint.',
          'Ask for the Livro de Reclamações on the spot or submit a complaint online.',
          'For systemic breaches, you can complain to IMT/municipal services and through Livro de Reclamações Eletrónico.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Tarifa 1 starting fare, city, weekdays 06:00–21:00', amountEUR: 3.25, note: 'Guide based on current official tariffs; check the table inside the vehicle' },
    { label: 'Tarifa 2 starting fare, night/weekends/public holidays', amountEUR: 3.90, note: 'Usually applies 21:00–06:00, sábados, domingos and feriados' },
    { label: 'Urban km Tarifa 1', amountEUR: 0.47, note: 'The taxímetro calculates in steps, not as a single “per km” line' },
    { label: 'Urban km Tarifa 2', amountEUR: 0.56, note: 'Night/weekend urban mode' },
    { label: 'Non-urban km Tarifa 3', amountEUR: 0.94, note: 'Daytime guide; more expensive because the taxi’s return is paid for' },
    { label: 'Booking by phone/app', amountEUR: 0.80, note: 'May be added as a supplemento' },
    { label: 'Luggage or animal', amountEUR: 1.60, note: 'Usual legal surcharge; assistance dogs not treated as ordinary animals' },
    { label: 'Lisboa airport/luggage supplemento', amountEUR: 1.60, note: 'Small supplemento at the official rank; do not confuse with an arbitrary “airport fee”' }
  ],
  sources: [
    { title: 'IMT: taxis and transporte em táxi', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE: consolidated Decreto-Lei on transporte em táxi', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1989-34540275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lisboa Airport: taxis from the airport', url: 'https://www.aeroportolisboa.pt/en/lis/access-parking/getting-to-and-from-the-airport/taxi', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'FREE NOW Portugal: booking a Taxi through the app', url: 'https://www.free-now.com/pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

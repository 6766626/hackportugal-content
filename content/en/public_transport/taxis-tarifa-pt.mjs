export default {
  editorialVoice: 'hackportugal',
  id: 'taxis-tarifa-pt',
  categoryId: 'public_transport',
  title: 'Taxis in Portugal: Tarifário 1/2/3, night surcharges and booking',
  tldr: 'Taxis in Portugal are not TVDE/Uber: the price is calculated by taxímetro and regulated by tariffs. In town, Tarifa 1 is usually used: starting fare €3.25 on weekdays 06:00–21:00; Tarifa 2: starting fare €3.90 at night 21:00–06:00, at weekends and on public holidays. Tarifa 3 applies outside the locality: the km rate is higher because the vehicle’s return journey is included. Surcharges: booking by phone/app about €0.80, luggage/animal €1.60, toll roads — paid by the passenger.',
  tags: ['taxi', 'tariff', 'lisboa', 'airport'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'taxi-vs-tvde',
      title: 'Taxi ≠ TVDE: how not to confuse them',
      content: [
        { kind: 'paragraph', text: 'A regular taxi in Portugal is a licensed vehicle with a TAXI sign, taxímetro, licence number and official tariff sticker. The colour is usually beige; older vehicles may be black and green.' },
        { kind: 'paragraph', text: 'TVDE means Uber, Bolt, FREENOW Ride, Cabify and other private hire services priced through an app. TVDE vehicles do not have a taxímetro and do not use Tarifário 1/2/3. This guide is specifically about legal táxis.' },
        { kind: 'checklist', items: [
          'In a taxi, the price is calculated by taxímetro, not by a price shown in advance in an app.',
          'The driver must switch on the meter at the start of the journey.',
          'The licence and Livro de Reclamações complaints book must be visible inside the vehicle.',
          'You have the right to ask for a recibo/fatura with NIF or without NIF.',
          'Card payment is not always available: check before getting in — “Aceita cartão?”',
          'MB WAY is sometimes available with taxi drivers, but it is not a guaranteed payment method.',
          'TVDE may be cheaper in town, but at airports/at night surge pricing can sometimes make a taxi better value.'
        ] }
      ]
    },
    {
      id: 'tarifas-1-2-3',
      title: 'Tarifário 1/2/3: what the number on the meter means',
      content: [
        { kind: 'paragraph', text: 'The taxímetro displays the tariff number. The key point: Tarifa 1 and 2 are urban journeys within the locality; Tarifa 3 is for journeys outside the locality/municipal area, where the vehicle’s return journey is effectively built into the price.' },
        { kind: 'checklist', items: [
          'Tarifa 1 — daytime urban tariff: weekdays roughly 06:00–21:00. Portugal-wide guide: starting fare €3.25, km around €0.47.',
          'Tarifa 2 — night/weekend/public holiday urban tariff: roughly 21:00–06:00, Saturday, Sunday and feriados. Guide: starting fare €3.90, km around €0.56.',
          'Tarifa 3 — daytime out-of-town journey: applies after leaving the zone where the urban tariff applies. Guide: around €0.94/km, because the taxi’s return is taken into account.',
          'For an out-of-town night/weekend journey, the next higher tariff may be used, often called Tarifa 4; the logic is the same, but more expensive.',
          'Waiting in traffic or while the passenger stops is charged by time: as a guide, around €14.80/hour in daytime urban mode and higher at night.',
          'The minimum fare is usually equal to the starting fare; a short 500 m journey will not cost €0.50.'
        ] },
        { kind: 'warning', text: 'Exact amounts depend on the current convenção de preços and local rules. If the figures on the sticker in the vehicle differ from the guides above, follow the official table inside the vehicle and the taxímetro receipt.' }
      ]
    },
    {
      id: 'surcharges',
      title: 'Night, weekend and other surcharges',
      content: [
        { kind: 'paragraph', text: 'The night and public holiday surcharge is usually not added as a separate line: the driver simply switches on Tarifa 2 instead of Tarifa 1. That is why at night you see a higher starting fare and more expensive tariff “steps” on the meter.' },
        { kind: 'checklist', items: [
          'Night: approximately from 21:00 to 06:00 — Tarifa 2.',
          'Weekends: Saturday and Sunday — Tarifa 2 even during the day.',
          'Public holidays feriados — Tarifa 2.',
          'Calling a taxi by phone, radio dispatch centre or via an app may add about €0.80.',
          'Luggage in the boot: usually €1.60; hand luggage in the passenger cabin without using the boot should normally not be counted as a luggage surcharge.',
          'Transporting a pet: usually €1.60; a cão de assistência should not be charged as an ordinary animal.',
          'Toll roads, bridges and portagens are paid by the passenger on top of the fare.',
          'Lisboa Airport: at the official rank there may be a small supplemento, typically €1.60, often linked to the airport/luggage; this is not a €5–10 “airport charge”.',
          'Taxis are usually not responsible for providing a child seat: if it is essential, book in advance and check with the dispatcher.'
        ] },
        { kind: 'warning', text: 'If the driver asks for a fixed price “without the meter” within town, especially from Lisboa Airport or at a railway station, this is a red flag. Ask them to switch on the taxímetro: “Pode ligar o taxímetro, por favor?”' }
      ]
    },
    {
      id: 'how-to-book',
      title: 'How to book: rank, phone, FREE NOW',
      content: [
        { kind: 'paragraph', text: 'In larger cities, the easiest options are: hail a free taxi on the rua, use a praça de táxis at a railway station/airport/hospital, or book through an app. In smaller towns, it is more reliable to call the local dispatch centre.' },
        { kind: 'substeps', items: [
          { id: 'rank', title: '1. Praça de táxis rank', content: [
            { kind: 'paragraph', text: 'Go to the first vehicle in the queue, but if you need card payment, have large luggage or an animal — check before getting in. At Lisboa Airport, use the official queue by the exit and do not accept offers from people inside the terminal.' }
          ] },
          { id: 'phone', title: '2. Phone', content: [
            { kind: 'paragraph', text: 'For Lisboa, the number +351 218 119 000 works. State the address, a landmark, the number of passengers, luggage and whether pagamento com cartão is needed.' },
            { kind: 'paragraph', text: 'Useful phrase: “Queria pedir um táxi para [morada]. Somos duas pessoas, com uma mala. Aceita cartão?”' }
          ] },
          { id: 'app', title: '3. FREE NOW', content: [
            { kind: 'paragraph', text: 'In FREE NOW, you can call an actual Taxi rather than a TVDE ride. In some cities the app shows an approximate range, but the final taxi price is still calculated by taxímetro plus legal supplementos.' }
          ] }
        ] }
      ]
    },
    {
      id: 'airport-and-long-distance',
      title: 'Lisboa Airport and journeys between towns',
      content: [
        { kind: 'paragraph', text: 'From Lisboa Airport to the centre, the journey is usually short: Marquês de Pombal, Baixa and Saldanha often come to roughly €10–18 in the daytime without heavy traffic; at night/weekends it is more expensive. To Cascais, Sintra, Setúbal or another municipality, the meter may switch to the out-of-town tariff.' },
        { kind: 'checklist', items: [
          'Before getting in, check that it is an official taxi with a roof sign TAXI.',
          'Make sure the taxímetro is reset to zero and switched on after the journey starts.',
          'If you are travelling far, ask for an estimate: “Quanto pode custar aproximadamente?”',
          'For intercity trips, the driver may offer a preço combinado; agree only if the price is clear before departure.',
          'Toll bridges 25 de Abril/Vasco da Gama, motorways and SCUT are paid separately.',
          'If you need a receipt for a company or IRS, immediately ask for “fatura com NIF”.',
          'If the luggage is large, check the supplemento; €1.60 is normal, €10 “per suitcase” is not.'
        ] },
        { kind: 'warning', text: 'For long-distance trips, a taxi is often more expensive than the train, Rede Expressos, FlixBus or a pre-booked transfer. But at night, with children, animals or large luggage, a taxi may be the most practical option.' }
      ]
    },
    {
      id: 'complaints',
      title: 'If the price seems wrong',
      content: [
        { kind: 'paragraph', text: 'Do not argue on the road. First ask for a receipt and photograph the taxi number/licence. The receipt should show the date, time, amount, operator details and, if requested, your NIF.' },
        { kind: 'checklist', items: [
          'Ask for a recibo/fatura: “Pode dar recibo, por favor?”',
          'Photograph the taxi licence number and the tariff sticker inside the vehicle.',
          'Check whether Tarifa 2 was legally switched on: night, weekend or feriado.',
          'Check whether the journey went outside the locality: in that case Tarifa 3 may be normal.',
          'If the driver refuses to provide a receipt, that is grounds for a complaint.',
          'Ask for the Livro de Reclamações on the spot or submit a complaint online.',
          'For systemic breaches, you can complain to IMT/municipal services and via Livro de Reclamações Eletrónico.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Tarifa 1 starting fare, urban, weekdays 06:00–21:00', amountEUR: 3.25, note: 'Guide based on current official tariffs; check the table inside the vehicle' },
    { label: 'Tarifa 2 starting fare, night/weekends/public holidays', amountEUR: 3.90, note: 'Usually applies 21:00–06:00, sábados, domingos and feriados' },
    { label: 'Urban km Tarifa 1', amountEUR: 0.47, note: 'The taxímetro calculates in steps, not as a single “per km” line' },
    { label: 'Urban km Tarifa 2', amountEUR: 0.56, note: 'Night/weekend urban mode' },
    { label: 'Out-of-town km Tarifa 3', amountEUR: 0.94, note: 'Daytime guide; more expensive because the taxi’s return journey is paid for' },
    { label: 'Booking by phone/app', amountEUR: 0.80, note: 'May be added as a supplemento' },
    { label: 'Luggage or animal', amountEUR: 1.60, note: 'Standard legal surcharge; assistance dogs not treated as ordinary animals' },
    { label: 'Lisboa airport/luggage supplemento', amountEUR: 1.60, note: 'Small supplemento at the official rank; do not confuse with an arbitrary “airport fee”' }
  ],
  sources: [
    { title: 'IMT: taxis and transporte em táxi', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE: consolidated Decreto-Lei on transporte em táxi', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1989-34540275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lisboa Airport: taxis from the airport', url: 'https://www.aeroportolisboa.pt/en/lis/access-parking/getting-to-and-from-the-airport/taxi', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'FREE NOW Portugal: booking a Taxi through the app', url: 'https://www.free-now.com/pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}

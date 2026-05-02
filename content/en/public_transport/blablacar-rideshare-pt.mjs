export default {
  editorialVoice: 'hackportugal',
  id: 'blablacar-rideshare-pt',
  categoryId: 'public_transport',
  title: 'BlaBlaCar in Portugal — rideshares between cities',
  tldr: 'BlaBlaCar in Portugal is useful for intercity travel when the CP train is expensive or the timetable is inconvenient: Lisboa—Porto is usually €15-25 per seat versus around €30-40 for Alfa/Intercidades without a promotion. Book via blablacar.pt or the app, and check the rating, number of trips, phone/e-mail verification and reviews. Payment and cancellation rules depend on the specific trip; if the driver cancels, there is usually a full refund. In 2026 COVID masks are not mandatory, but the driver may ask for their own rules to be followed.',
  tags: ['blablacar', 'rideshares', 'intercity', 'transport'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use',
      title: 'When BlaBlaCar is genuinely good value',
      content: [
        { kind: 'paragraph', text: 'BlaBlaCar is carpooling: the driver is travelling on their own route and sells spare seats, usually cheaper than the train and sometimes faster than a coach with connections. In Portugal it works best on popular corridors: Lisboa—Porto, Lisboa—Coimbra, Porto—Braga, Porto—Viseu, Lisboa—Algarve, Porto—Aveiro.' },
        { kind: 'checklist', items: [
          'Lisboa—Porto: often €15-25 per seat; the Alfa/Intercidades train without a promotion is usually around €30-40',
          'Lisboa—Coimbra: often €8-15',
          'Porto—Braga / Porto—Aveiro: often €4-8',
          'Lisboa—Faro / Algarve: often €15-25, but in summer seats are taken more quickly',
          'Plus: you can leave from areas outside railway stations; sometimes the driver picks up near the metro or a shopping centre',
          'Minus: there is no guarantee as with CP/Rede Expressos; the driver may cancel, be late or change the meeting point',
          'For airports, use it with a margin: for a flight it is better to arrive 2-3 hours before departure plus a buffer for traffic'
        ] }
      ]
    },
    {
      id: 'booking',
      title: 'How to book a trip',
      content: [
        { kind: 'substeps', items: [
          { id: 'search', title: '1. Find the route', content: [
            { kind: 'paragraph', text: 'Open blablacar.pt or the BlaBlaCar app. Enter the departure city, destination city, date and number of passengers. For large cities, do not look only at “Lisboa” or “Porto”, but also at specific points: Oriente, Sete Rios, Aeroporto, Campanhã, Casa da Música.' }
          ] },
          { id: 'compare', title: '2. Compare more than just the price', content: [
            { kind: 'checklist', items: [
              'Meeting point: whether it is convenient to reach by metro/bus',
              'Drop-off point: city centre, railway station or outskirts',
              'Journey time and stated stops',
              'Luggage size: a cabin-size suitcase is usually easier to agree, but ask in advance about a large suitcase',
              'Whether you can travel with an animal',
              'How talkative the driver is: Bla, BlaBla, BlaBlaBla',
              'Number of free seats in the back: 2 people on the back row is more comfortable than 3',
              'Driver reviews and rating'
            ] }
          ] },
          { id: 'reserve', title: '3. Book and message the driver', content: [
            { kind: 'paragraph', text: 'After booking, send a short message straight away: “Olá, vou com uma mala pequena. O ponto de encontro é mesmo em Oriente?” This checks that the driver is active and lets you agree luggage in advance.' }
          ] }
        ] }
      ]
    },
    {
      id: 'ratings-safety',
      title: 'Ratings, safety and common sense',
      content: [
        { kind: 'paragraph', text: 'BlaBlaCar runs on reputation. In Portugal there are plenty of normal everyday trips, but it is still a private car, not a licensed coach.' },
        { kind: 'checklist', items: [
          'Choose drivers with a photo, confirmed phone/e-mail and several reviews',
          'Check recent reviews from the last few months, not only the overall rating',
          'Check that the driver’s name, car and number plate match the app',
          'Do not agree to payment far outside the platform if the trip was listed with online booking',
          'Do not get into the car if the driver appears drunk or aggressive',
          'Send a friend the trip link/screenshot and approximate arrival time',
          'Wear a seat belt in any seat: fines and risk in Portugal are real',
          'For night trips, choose drivers with a large number of reviews',
          'If you do not speak Portuguese, write in English in advance; many drivers reply, but not all'
        ] },
        { kind: 'warning', text: 'BlaBlaCar is not a replacement for official transport for critical deadlines: AIMA appointment, exam, international flight, operation in SNS. For these cases, build in a margin or take CP/Rede Expressos with clear passenger rights.' }
      ]
    },
    {
      id: 'payment-cancel',
      title: 'Payment and cancellation',
      content: [
        { kind: 'paragraph', text: 'In 2026 BlaBlaCar in Portugal may show different payment models depending on the trip and platform settings: online payment when booking or an arrangement with the driver. Always check the “Pagamento” screen before confirming.' },
        { kind: 'checklist', items: [
          'If payment is online: save the booking confirmation and cancellation rules from the app',
          'If payment is in cash/MB WAY by arrangement: confirm the amount before the trip',
          'Do not transfer money in advance directly to an unknown driver if the platform does not require it',
          'If the driver cancels the trip, with online payment the full amount is usually refunded under BlaBlaCar rules',
          'If the passenger cancels in advance, the refund is usually better than when cancelling at the last moment',
          'If cancelling less than 24 hours beforehand, the conditions may be worse: part of the amount may be retained',
          'If the driver does not arrive, record this in the app and contact support',
          'For disputes, you need screenshots of the chat, booking, time and meeting place'
        ] },
        { kind: 'warning', text: 'The exact refund percentages depend on the version of the BlaBlaCar rules, the account country and the payment method. Before an expensive trip, open the BlaBlaCar Help Centre and check the cancellation/refund section specifically for your booking.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Alternatives: CP, coaches, Tabuna, Carzz',
      content: [
        { kind: 'paragraph', text: 'BlaBlaCar is not the only option. In Portugal, intercity transport depends heavily on the route: on some routes the train is more convenient, on others the coach is cheaper, and elsewhere rideshares fill the “gaps” between towns and cities.' },
        { kind: 'checklist', items: [
          'CP: the best option if there is a direct Alfa Pendular or Intercidades and you bought a promotion in advance',
          'Rede Expressos / FlixBus: often cheaper than the train, especially Lisboa—Porto and Lisboa—Algarve',
          'BlaBlaCar: good when you need a flexible pick-up point or the CP ticket has become expensive',
          'Tabuna: appears as a more local/older-audience alternative for finding rideshares; check activity in your region',
          'Carzz: check route availability and reviews; coverage may be weaker than BlaBlaCar',
          'Facebook/WhatsApp groups for towns and cities: they work for short routes, but the risk is higher — there is no proper rating or support',
          'For regular commuting, check the passe intermodal/metropolitano: in Lisboa and Porto, monthly passes are often better value than any rideshares'
        ] },
        { kind: 'warning', text: 'Local services and groups have less protection: there is no single refund standard, moderation is weaker, and it is harder to prove the agreement. For a first trip in the country, BlaBlaCar or an official carrier is safer.' }
      ]
    },
    {
      id: 'covid-etiquette',
      title: 'COVID etiquette and a conflict-free trip',
      content: [
        { kind: 'paragraph', text: 'In 2026 Portugal has no general mandatory mask regime for private BlaBlaCar trips. But the driver has the right to ask for a mask, ventilation or to refuse a passenger with clear symptoms — it is a private trip.' },
        { kind: 'checklist', items: [
          'If you are coughing or ill, warn the driver before getting in',
          'It is better to have a mask with you: it costs little and avoids conflicts',
          'Do not eat in the car without permission',
          'Do not be late: 5-10 minutes can disrupt the route for all passengers',
          'Ask in advance about luggage, an animal, a child seat',
          'Sit in the agreed seat, do not take up the whole boot',
          'After the trip, leave an honest review: punctuality, driving style, communication'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'BlaBlaCar Lisboa—Porto', amountEURMin: 15, amountEURMax: 25, note: 'Typical range per seat on a popular route; depends on the date, demand and driver.' },
    { label: 'BlaBlaCar Lisboa—Coimbra', amountEURMin: 8, amountEURMax: 15, note: 'Guide price for a medium-distance intercity route.' },
    { label: 'CP train Lisboa—Porto without a promotion', amountEURMin: 30, amountEURMax: 40, note: 'Usual price order for Alfa Pendular/Intercidades; promotional fares may be lower when bought early.' },
    { label: 'BlaBlaCar commission/service fee', amountEURMin: 0, amountEURMax: 5, note: 'May be added when booking online; the exact amount is visible before payment.' }
  ],
  sources: [
    { title: 'BlaBlaCar Portugal — trip search and booking', url: 'https://www.blablacar.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'BlaBlaCar Help Centre — booking, payment, cancellation and refunds', url: 'https://support.blablacar.com/hc/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP — Comboios de Portugal, ticket purchase and fares', url: 'https://www.cp.pt/passageiros/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Rede Expressos — intercity coaches in Portugal', url: 'https://rede-expressos.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

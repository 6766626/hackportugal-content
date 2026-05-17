export default {
  editorialVoice: 'hackportugal',
  id: 'elevadores-lisboa',
  categoryId: 'public_transport',
  title: 'Lisbon lifts and funiculars: Bica, Glória, Lavra, Santa Justa',
  tldr: 'Ascensor da Bica, Glória, Lavra and Elevador de Santa Justa are not museum attractions, but Carris lines. Navegante is valid on them: with a monthly Navegante Municipal for €30 or Metropolitano for €40, the journey is included at no extra cost. Single tickets from the driver are expensive: the funiculars are around €4.20 for 2 journeys, Santa Justa around €6.10 for ida e volta; zapping/a preloaded Navegante is usually better value. At peak times and at Santa Justa there are queues — it is often quicker to walk up.',
  tags: ['carris', 'navegante', 'lifts', 'lisbon'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-they-are',
      title: 'What these lines are',
      content: [
        { kind: 'paragraph', text: 'In Lisbon, the word elevador can mean both a vertical lift and a rail funicular. All four lines in the centre are operated by Carris, so the payment rules are the same as on Carris buses and trams, with separate expensive onboard tickets for tourist routes.' },
        { kind: 'checklist', items: ['Ascensor da Bica: Rua de São Paulo / Cais do Sodré ↔ Bairro Alto, one of the most photogenic climbs', 'Ascensor da Glória: Restauradores ↔ São Pedro de Alcântara / Bairro Alto, the most practical for going up from Baixa', 'Ascensor do Lavra: Largo da Anunciada ↔ Rua Câmara Pestana, the oldest and usually less touristy', 'Elevador de Santa Justa: Baixa ↔ Largo do Carmo / Chiado, a vertical lift with a view and a big queue', 'These are short lines: the journey takes about 2–5 minutes, but waiting at Santa Justa in summer can be 30–60 minutes'] }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'How to pay with Navegante 💳',
      content: [
        { kind: 'paragraph', text: 'If you have a Navegante with an active monthly pass, simply tap the card on the validator when boarding. You do not need to pay extra for Bica, Glória, Lavra or Santa Justa: they are part of the Carris network.' },
        { kind: 'checklist', items: ['Navegante Municipal Lisboa for €30 / month covers Carris within the municipality of Lisboa', 'Navegante Metropolitano for €40 / month covers Carris and most AML transport, including journeys outside Lisboa', 'Zapping on Navegante also works: the standard preloaded Carris fare is deducted, not the tourist onboard ticket', 'A single-use Viva Viagem / Navegante Occasional with a valid Carris/Metro ticket also works, if the ticket has been loaded in advance', 'Validate the card every time: Carris inspectors check even on short lines', 'A contactless bank card does not always replace Navegante on historic Carris lines — for a tourist it is more reliable to have Navegante Occasional or to buy a ticket from a staff member'] },
        { kind: 'warning', text: 'A monthly Navegante gives you the right to the journey itself. Access to the upper viewing platform at Santa Justa may be charged separately: if you only need to go up to Chiado/Carmo, go through as a regular Carris passenger.' }
      ]
    },
    {
      id: 'single-tickets',
      title: 'Single tickets: where you overpay',
      content: [
        { kind: 'paragraph', text: 'The main beginner mistake is paying the driver/operator as a tourist. On these lines, the onboard ticket is noticeably more expensive than a normal Carris journey using Navegante/zapping.' },
        { kind: 'checklist', items: ['Bica, Glória, Lavra funiculars: Carris onboard ticket — around €4.20, usually includes 2 journeys', 'Elevador de Santa Justa: onboard ticket — around €6.10, usually ida e volta and tourist access under Carris rules', 'A normal journey via zapping/preloaded Navegante is cheaper; the exact amount depends on the Carris fare on the date of travel', 'A Carris/Metro day ticket on Navegante Occasional can pay off if the day includes metro, trams, buses and funiculars', 'Children, students, +65 and concession profiles use the same Navegante rules if the concession has been set up on the card', 'A ticket from the driver is bought inside the vehicle/from the operator; cash may be needed, so do not rely only on a card'] },
        { kind: 'warning', text: 'Carris fares are revised. Before travelling with single payment, check the “Tarifários” page on carris.pt: this is where current prices for onboard tickets, zapping and passes are published.' }
      ]
    },
    {
      id: 'walking-vs-elevator',
      title: 'When it is better to walk',
      content: [
        { kind: 'paragraph', text: 'Funiculars are useful if you have a suitcase, a pushchair, after a long walk or if you live on a hill. But for a healthy adult it is often quicker to walk, especially when there is a queue of tourists by the carriage.' },
        { kind: 'checklist', items: ['Santa Justa: to get up to Largo do Carmo, it is often quicker to enter on foot from the Chiado side or Rua do Carmo / Calçada do Sacramento', 'Glória: a good option uphill to Miradouro de São Pedro de Alcântara; downhill on foot is usually quicker', 'Bica: worth riding for the experience and photos, but at tourist peak times it can be quicker to walk via neighbouring streets', 'Lavra: the most practical if you need to go up to Campo Mártires da Pátria and do not want to walk up a steep slope', 'With a pushchair or wheelchair Santa Justa looks convenient, but queues and narrow approaches can spoil the route', 'After rain, lisboeta calçada is slippery: the funicular is safer than descending over polished cobbles'] }
      ]
    },
    {
      id: 'practical-timing',
      title: 'Timing, queues and safety',
      content: [
        { kind: 'paragraph', text: 'These are central tourist lines, so the timetable matters less than the crowd. Carris publishes current horários and service alerts on its website and in apps; before travelling, check whether the line is stopped for maintenance.' },
        { kind: 'checklist', items: ['The best time for Santa Justa is early morning or late evening, not in the middle of the day', 'On Glória and Bica, protect your phone: photos at the open window and a crowd at the entrance are a typical pickpocketing situation', 'Do not stand on the tracks for a photo: the carriages move slowly, but the streets are narrow and the driver’s visibility is limited', 'If the line is closed, look for a Carris bus, metro or walking route — replacements may not be clearly signposted on site', 'For daily life in Lisboa, a monthly Navegante is almost always better value than separate tourist tickets', 'If you are showing the city to guests, explain to them in advance the difference between “travelling as a Carris passenger” and “buying a tourist ticket at the lift”'] }
      ]
    }
  ],
  costs: [
    { label: 'Navegante Municipal Lisboa', amountEUR: 30, note: 'Monthly pass for the municipality of Lisboa; includes Carris, including Bica, Glória, Lavra, Santa Justa.' },
    { label: 'Navegante Metropolitano', amountEUR: 40, note: 'Monthly pass for the Área Metropolitana de Lisboa; convenient if you travel outside Lisboa.' },
    { label: 'Onboard ticket for Bica / Glória / Lavra', amountEUR: 4.2, note: 'Carris guide price for purchase on site; usually 2 journeys. Check the current Tarifário.' },
    { label: 'Elevador de Santa Justa onboard ticket', amountEUR: 6.1, note: 'Carris guide price for ida e volta / tourist ticket. With Navegante the journey is usually cheaper or included in the pass.' }
  ],
  sources: [
    { title: 'Carris — fares, Navegante, onboard tickets and passes', url: 'https://www.carris.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carris — timetables and information for Ascensores and Elevador de Santa Justa', url: 'https://www.carris.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — information on city lifts, funiculars and mobility', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

export default {
  editorialVoice: 'hackportugal',
  id: 'porto-walking-tour-ribeira',
  categoryId: 'travel_portugal',
  title: 'Walking route through Porto’s historic centre',
  tldr: 'A 2.5 km route for 3 hours: from the Clérigos Tower via Livraria Lello, Sé Cathedral and São Bento station to the Ribeira waterfront and the Luís I Bridge. The historic centre is UNESCO-listed. Lots of descents and stone staircases — footwear makes the difference. At the end, cross to Vila Nova de Gaia for the wine cellars.',
  tags: ['porto', 'ribeira', 'walking tour', 'unesco', 'sights'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route-overview',
      title: 'Route',
      content: [
        { kind: 'walkingRoute', distanceKm: 2.5, durationMinutes: 180, difficulty: 'moderate', points: [
          {
            name: '1. Torre dos Clérigos',
            description: 'An 18th-century Baroque bell tower 76 m high. 225 steps to the viewing platform — the best panorama of Porto. Next to it is the church of the same name, with an oval nave, which is rare.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%88%D0%BD%D1%8F_%D0%9A%D0%BB%D0%B5%D1%80%D0%B8%D0%B3%D1%83%D1%88',
              en: 'https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_dos_Cl%C3%A9rigos'
            },
            coord: { lat: 41.1458, lon: -8.6137 }
          },
          {
            name: '2. Livraria Lello',
            description: 'A 1906 bookshop in Neo-Gothic and Art Nouveau style. The legendary wooden spiral staircase: a likely prototype for Hogwarts, although Rowling denies this. Entry is €10, credited towards the purchase of a book.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%BD%D0%B8%D0%B6%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD_%D0%9B%D0%B5%D0%BB%D0%BB%D0%BE_%D0%B8_%D0%B1%D1%80%D0%B0%D1%82',
              en: 'https://en.wikipedia.org/wiki/Livraria_Lello',
              pt: 'https://pt.wikipedia.org/wiki/Livraria_Lello'
            },
            coord: { lat: 41.1470, lon: -8.6146 }
          },
          {
            name: '3. Igreja do Carmo',
            description: 'Two churches merged into one façade are separated by Porto’s narrowest house, 1 m wide. The side wall is entirely covered with a 1912 azulejo panel.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Carmo_Church_(Porto)',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_do_Carmo_(Porto)'
            },
            coord: { lat: 41.1471, lon: -8.6163 }
          },
          {
            name: '4. Estação de São Bento',
            description: 'A railway station from 1916. The entrance hall is faced with 20,000 azulejo tiles: scenes from Portuguese history, the Battle of Arcos de Valdevez, and King João I’s entry into Porto.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD-%D0%91%D0%B5%D0%BD%D1%82%D1%83_(%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB)',
              en: 'https://en.wikipedia.org/wiki/S%C3%A3o_Bento_railway_station',
              pt: 'https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_Ferrovi%C3%A1ria_de_Porto-S%C3%A3o_Bento'
            },
            coord: { lat: 41.1459, lon: -8.6107 }
          },
          {
            name: '5. Sé do Porto',
            description: 'A 12th-century fortress-like cathedral. The cloister has 18th-century azulejos, and there is a silver altar in the Chapel of the Blessed Sacrament. Nearby is a monument to Vimara Peres, the first Count of Portucale.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%D0%9F%D0%BE%D1%80%D1%82%D1%83',
              en: 'https://en.wikipedia.org/wiki/Porto_Cathedral',
              pt: 'https://pt.wikipedia.org/wiki/S%C3%A9_Catedral_do_Porto'
            },
            coord: { lat: 41.1430, lon: -8.6112 }
          },
          {
            name: '6. Rua das Flores / Igreja da Misericórdia',
            description: 'A pedestrian street with cafés, boutiques and tourist flow. The Misericórdia church is from the 16th century; next to it is a museum with the masterpiece “Fons Vitae” by Flemish masters.',
            wikipedia: {
              pt: 'https://pt.wikipedia.org/wiki/Rua_das_Flores_(Porto)'
            },
            coord: { lat: 41.1440, lon: -8.6131 }
          },
          {
            name: '7. Palácio da Bolsa',
            description: 'A Neoclassical stock exchange palace from 1850. The Arab Room is an imitation of the Alhambra; the painting took 18 years. Tours are available in Portuguese, English, Spanish and French.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Palácio_da_Bolsa',
              en: 'https://en.wikipedia.org/wiki/Pal%C3%A1cio_da_Bolsa',
              pt: 'https://pt.wikipedia.org/wiki/Pal%C3%A1cio_da_Bolsa'
            },
            coord: { lat: 41.1411, lon: -8.6155 }
          },
          {
            name: '8. Ribeira + Ponte Luís I',
            description: 'The waterfront with colourful houses — UNESCO-listed. The Luís I Bridge dates from 1886; its designer was Théophile Seyrig, a pupil of Eiffel. On foot, you can cross the upper deck to Vila Nova de Gaia or walk along the river on the lower deck. The views from the bridge are postcard-perfect.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D1%82_%D0%9B%D1%83%D0%B8%D1%88%D0%B0_I',
              en: 'https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge',
              pt: 'https://pt.wikipedia.org/wiki/Ponte_Luís_I'
            },
            coord: { lat: 41.1402, lon: -8.6117 }
          }
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Practical logistics',
      content: [
        { kind: 'checklist', items: [
          '👟 Steep descents from Clérigos to Ribeira — you need shoes with non-slip soles',
          '🎟️ Lello — entry by timed slots; book online in advance',
          '🎟️ Palácio da Bolsa — guided visits only, 30-minute tours, €14',
          '🚇 Finish at Ribeira → “São Bento” or “Jardim do Morro” metro (Gaia)',
          '🍷 Optional: cross the bridge to Gaia — wine cellars (Graham\'s, Sandeman, Taylor\'s, Cálem)',
          '📸 Sunset from the bridge’s upper deck — the best photo of Porto'
        ]}
      ]
    },
    {
      id: 'context',
      title: 'Porto in context',
      content: [
        { kind: 'paragraph', text: 'The city gave the country its name (“Portucale”) and still shares an informal “capital” role with Lisbon. In the 19th century, it was an industrial centre. The historic centre was added to the UNESCO list in 1996.' },
        { kind: 'wikiLink', title: 'Historic Centre of Porto (UNESCO)', urls: {
          ru: 'https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%86%D0%B5%D0%BD%D1%82%D1%80_%D0%9F%D0%BE%D1%80%D1%82%D1%83',
          en: 'https://en.wikipedia.org/wiki/Historic_Centre_of_Oporto',
          pt: 'https://pt.wikipedia.org/wiki/Centro_Hist%C3%B3rico_do_Porto'
        }}
      ]
    }
  ],
  sources: [
    { title: 'Visit Porto — Historic Centre', url: 'https://www.visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Historic Centre of Oporto', url: 'https://whc.unesco.org/en/list/755/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal do Porto', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

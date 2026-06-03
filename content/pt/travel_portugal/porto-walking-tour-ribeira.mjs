export default {
  editorialVoice: 'hackportugal',
  id: 'porto-walking-tour-ribeira',
  categoryId: 'travel_portugal',
  title: 'Percurso a pé pelo centro histórico do Porto',
  tldr: 'Percurso de 2,5 km em 3 horas: da Torre dos Clérigos, passando pela Livraria Lello, pela Sé e pela estação de São Bento, até à marginal da Ribeira e à Ponte Luís I. O centro histórico está inscrito na UNESCO. Há muitas descidas e escadas de pedra — o calçado faz a diferença. No final — travessia para Vila Nova de Gaia, em direcção às caves de vinho.',
  tags: ['porto', 'ribeira', 'visita a pé', 'unesco', 'pontos de interesse'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route-overview',
      title: 'Percurso',
      content: [
        { kind: 'walkingRoute', distanceKm: 2.5, durationMinutes: 180, difficulty: 'moderate', points: [
          {
            name: '1. Torre dos Clérigos',
            description: 'Torre sineira barroca do século XVIII com 76 m de altura. 225 degraus até ao miradouro — a melhor panorâmica do Porto. Ao lado fica a igreja com o mesmo nome, com uma nave oval, algo raro.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%88%D0%BD%D1%8F_%D0%9A%D0%BB%D0%B5%D1%80%D0%B8%D0%B3%D1%83%D1%88',
              en: 'https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_dos_Cl%C3%A9rigos'
            },
            coord: { lat: 41.1458, lon: -8.6137 }
          },
          {
            name: '2. Livraria Lello',
            description: 'Livraria de 1906 em estilo neogótico e Arte Nova. A lendária escadaria em madeira em caracol: provável protótipo de Hogwarts, embora Rowling o negue. Entrada — 10 €, valor descontado na compra de um livro.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%BD%D0%B8%D0%B6%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD_%D0%9B%D0%B5%D0%BB%D0%BB%D0%BE_%D0%B8_%D0%B1%D1%80%D0%B0%D1%82',
              en: 'https://en.wikipedia.org/wiki/Livraria_Lello',
              pt: 'https://pt.wikipedia.org/wiki/Livraria_Lello'
            },
            coord: { lat: 41.1470, lon: -8.6146 }
          },
          {
            name: '3. Igreja do Carmo',
            description: 'Dois templos unidos numa só fachada, separados pela casa mais estreita do Porto, com 1 m de largura. A parede lateral está totalmente revestida por um painel de azulejos de 1912.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Carmo_Church_(Porto)',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_do_Carmo_(Porto)'
            },
            coord: { lat: 41.1471, lon: -8.6163 }
          },
          {
            name: '4. Estação de São Bento',
            description: 'Estação ferroviária de 1916. O átrio é revestido com 20 000 azulejos: cenas da história de Portugal, a batalha de Arcos de Valdevez e a entrada do rei D. João I no Porto.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD-%D0%91%D0%B5%D0%BD%D1%82%D1%83_(%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB)',
              en: 'https://en.wikipedia.org/wiki/S%C3%A3o_Bento_railway_station',
              pt: 'https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_Ferrovi%C3%A1ria_de_Porto-S%C3%A3o_Bento'
            },
            coord: { lat: 41.1459, lon: -8.6107 }
          },
          {
            name: '5. Sé do Porto',
            description: 'Catedral do século XII com aparência de fortaleza. Claustro com azulejos do século XVIII, altar de prata na capela do Santíssimo Sacramento. Ao lado — monumento a Vimara Peres, primeiro conde de Portucale.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%D0%9F%D0%BE%D1%80%D1%82%D1%83',
              en: 'https://en.wikipedia.org/wiki/Porto_Cathedral',
              pt: 'https://pt.wikipedia.org/wiki/S%C3%A9_Catedral_do_Porto'
            },
            coord: { lat: 41.1430, lon: -8.6112 }
          },
          {
            name: '6. Rua das Flores / Igreja da Misericórdia',
            description: 'Rua pedonal com cafés, boutiques e muito movimento turístico. A Igreja da Misericórdia é do século XVI; ao lado fica um museu com a obra-prima «Fons Vitae», de mestres flamengos.',
            wikipedia: {
              pt: 'https://pt.wikipedia.org/wiki/Rua_das_Flores_(Porto)'
            },
            coord: { lat: 41.1440, lon: -8.6131 }
          },
          {
            name: '7. Palácio da Bolsa',
            description: 'Palácio neoclássico da Bolsa, de 1850. O Salão Árabe é uma imitação da Alhambra; a decoração levou 18 anos a concluir. Visitas guiadas em português, inglês, espanhol e francês.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Pal%C3%A1cio_da_Bolsa',
              en: 'https://en.wikipedia.org/wiki/Pal%C3%A1cio_da_Bolsa',
              pt: 'https://pt.wikipedia.org/wiki/Pal%C3%A1cio_da_Bolsa'
            },
            coord: { lat: 41.1411, lon: -8.6155 }
          },
          {
            name: '8. Ribeira + Ponte Luís I',
            description: 'Marginal com casas coloridas — UNESCO. Ponte Luís I, de 1886; o autor foi Théophile Seyrig, discípulo de Eiffel. Pode atravessar a pé pelo tabuleiro superior até Vila Nova de Gaia ou seguir junto ao rio pelo tabuleiro inferior. As vistas da ponte são de postal.',
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
      title: 'Logística prática',
      content: [
        { kind: 'checklist', items: [
          '👟 Descidas acentuadas dos Clérigos até à Ribeira — é preciso calçado com sola antiderrapante',
          '🎟️ Lello — entrada por horários marcados; reserve online com antecedência',
          '🎟️ Palácio da Bolsa — apenas com guia; visitas de 30 min, 14 €',
          '🚇 Final na Ribeira → metro «São Bento» ou «Jardim do Morro» (Gaia)',
          '🍷 Opcional: atravessar a ponte para Gaia — caves de vinho (Graham\'s, Sandeman, Taylor\'s, Cálem)',
          '📸 Pôr do sol no tabuleiro superior da Ponte Luís I — a melhor fotografia do Porto'
        ]}
      ]
    },
    {
      id: 'context',
      title: 'O Porto em contexto',
      content: [
        { kind: 'paragraph', text: 'A cidade deu o nome ao país («Portucale») e continua a partilhar com Lisboa um papel informal de “capital”. No século XIX — centro industrial. O centro histórico foi inscrito na UNESCO em 1996.' },
        { kind: 'wikiLink', title: 'Centro Histórico do Porto (UNESCO)', urls: {
          ru: 'https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%86%D0%B5%D0%BD%D1%82%D1%80_%D0%9F%D0%BE%D1%80%D1%82%D1%83',
          en: 'https://en.wikipedia.org/wiki/Historic_Centre_of_Oporto',
          pt: 'https://pt.wikipedia.org/wiki/Centro_Hist%C3%B3rico_do_Porto'
        }}
      ]
    }
  ],
  sources: [
    { title: 'Visit Porto — Centro Histórico', url: 'https://www.visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Centro Histórico do Porto', url: 'https://whc.unesco.org/en/list/755/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal do Porto', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

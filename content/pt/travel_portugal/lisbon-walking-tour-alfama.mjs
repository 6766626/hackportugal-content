export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-walking-tour-alfama',
  categoryId: 'travel_portugal',
  title: 'Percurso pedonal por Alfama — o bairro mais antigo de Lisboa',
  tldr: 'Percurso de 3 km para 2,5–3,5 horas pelo coração da Lisboa medieval. Início — Sé de Lisboa, fim — Miradouro da Graça. Subida calma por ruelas estreitas empedradas, castelo, 3 miradouros, museu do fado. Conveniente para combinar com jantar numa das tabernas locais com fado ao vivo.',
  tags: ['lisboa', 'alfama', 'visita a pé', 'fado', 'pontos de interesse'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route-overview',
      title: 'Percurso',
      content: [
        { kind: 'walkingRoute', distanceKm: 3.0, durationMinutes: 180, difficulty: 'moderate', points: [
          {
            name: '1. Sé de Lisboa',
            description: 'Catedral do século XII, a igreja mais antiga da cidade. Sobreviveu a 3 terramotos. No interior — claustro com escavações arqueológicas das épocas romana e visigótica.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%D0%9B%D0%B8%D1%81%D1%81%D0%B0%D0%B1%D0%BE%D0%BD%D0%B0',
              en: 'https://en.wikipedia.org/wiki/Lisbon_Cathedral',
              pt: 'https://pt.wikipedia.org/wiki/S%C3%A9_de_Lisboa'
            },
            coord: { lat: 38.7099, lon: -9.1335 }
          },
          {
            name: '2. Igreja de Santo António',
            description: 'Construída no local onde nasceu Santo António de Pádua, em 1195. Na cave — cripta. A 13 de junho há festa na cidade, com maratona de casamentos mesmo junto à igreja.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%B8%D0%B9_%D0%9F%D0%B0%D0%B4%D1%83%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9',
              en: 'https://en.wikipedia.org/wiki/Igreja_de_Santo_Ant%C3%B3nio_(Lisbon)',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_de_Santo_Ant%C3%B3nio_(Lisboa)'
            },
            coord: { lat: 38.7105, lon: -9.1338 }
          },
          {
            name: '3. Miradouro de Santa Luzia',
            description: 'Miradouro com painel de azulejos «Tomada de Lisboa aos mouros» (1147). Daqui tem-se a melhor vista sobre os telhados de Alfama e o Tejo. Brisa, bancos, pérgula florida.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Miradouro_de_Santa_Luzia',
              pt: 'https://pt.wikipedia.org/wiki/Miradouro_de_Santa_Luzia'
            },
            coord: { lat: 38.7118, lon: -9.1303 }
          },
          {
            name: '4. Miradouro das Portas do Sol',
            description: '50 m mais acima — «Portas do Sol». Estátua de São Vicente, padroeiro da cidade, com um corvo. Daqui vê-se a cúpula de São Vicente de Fora e o Campo de Santa Clara, com a Feira da Ladra às terças-feiras e sábados.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Alfama',
              pt: 'https://pt.wikipedia.org/wiki/Alfama'
            },
            coord: { lat: 38.7121, lon: -9.1295 }
          },
          {
            name: '5. Castelo de São Jorge',
            description: 'Fortaleza mourisca no topo da colina. Muralhas do século XI, cidadela restaurada, 11 torres. Pavões passeiam pelo recinto. Panorama de 360° sobre toda Lisboa.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D1%8F_(%D0%9B%D0%B8%D1%81%D1%81%D0%B0%D0%B1%D0%BE%D0%BD)',
              en: 'https://en.wikipedia.org/wiki/S%C3%A3o_Jorge_Castle',
              pt: 'https://pt.wikipedia.org/wiki/Castelo_de_S%C3%A3o_Jorge'
            },
            coord: { lat: 38.7139, lon: -9.1335 }
          },
          {
            name: '6. Igreja de São Vicente de Fora',
            description: 'Mosteiro do século XVI, painéis de azulejos sobre as fábulas de La Fontaine. No panteão — túmulos dos reis da dinastia de Bragança (1640–1910). É possível subir ao terraço — vista sobre Alfama de outro ângulo.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%92%D0%B8%D0%BD%D1%81%D0%B5%D0%BD%D1%82%D0%B0_(%D0%9B%D0%B8%D1%81%D1%81%D0%B0%D0%B1%D0%BE%D0%BD)',
              en: 'https://en.wikipedia.org/wiki/Monastery_of_S%C3%A3o_Vicente_de_Fora',
              pt: 'https://pt.wikipedia.org/wiki/Mosteiro_de_S%C3%A3o_Vicente_de_Fora'
            },
            coord: { lat: 38.7156, lon: -9.1281 }
          },
          {
            name: '7. Museu do Fado',
            description: 'Museu do fado português — canção urbana incluída na lista do património imaterial da UNESCO. Biografias de cantores, discos antigos, atuações.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B4%D1%83',
              en: 'https://en.wikipedia.org/wiki/Museu_do_Fado',
              pt: 'https://pt.wikipedia.org/wiki/Museu_do_Fado'
            },
            coord: { lat: 38.7122, lon: -9.1276 }
          },
          {
            name: '8. Miradouro da Graça',
            description: 'Miradouro final sob pinheiros, com vista para o castelo e o rio. Ao lado — igreja da Graça e uma das melhores tabernas locais do bairro, «Damas». Ao fim do dia — pôr do sol sobre o castelo.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Gra%C3%A7a_(Lisbon)',
              pt: 'https://pt.wikipedia.org/wiki/Miradouro_da_Gra%C3%A7a'
            },
            coord: { lat: 38.7177, lon: -9.1311 }
          }
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '👟 Calçado confortável é obrigatório — a calçada portuguesa fica escorregadia com chuva',
          '🕙 Melhor horário — 09:30–12:00 ou depois das 16:30, para evitar o calor do meio-dia',
          '💧 Leve água consigo — há cafés, mas são pouco frequentes e caros',
          '🎒 Tenha atenção aos bolsos nas multidões de turistas junto à Sé e ao Castelo',
          '🚇 Início do percurso — a 3 min do metro Baixa-Chiado (saída «Rua Augusta»)',
          '🎟️ Castelo de São Jorge: bilhete 17 € (2026), reservar online',
          '🎵 À noite em Alfama — dezenas de tabernas locais com fado ao vivo (jantar + vinho ~35–50 €/pessoa)'
        ]}
      ]
    },
    {
      id: 'about-alfama',
      title: 'Sobre Alfama',
      content: [
        { kind: 'paragraph', text: 'Alfama é um dos poucos bairros que sobreviveram ao terramoto de 1755. O nome vem do árabe «al-hamma» («fonte quente»). Antes da Reconquista, era o bairro mourisco; mais tarde, tornou-se bairro de pescadores. Hoje é uma zona histórica protegida pela UNESCO, com arquitetura única, onde convivem ruelas estreitas, casas com varandas floridas e fiadas de azulejos.' },
        { kind: 'wikiLink', title: 'Terramoto de 1755 — contexto do bairro', urls: {
          ru: 'https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%81%D1%81%D0%B0%D0%B1%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D1%82%D1%80%D1%8F%D1%81%D0%B5%D0%BD%D0%B8%D0%B5_(1755)',
          en: 'https://en.wikipedia.org/wiki/1755_Lisbon_earthquake',
          pt: 'https://pt.wikipedia.org/wiki/Sismo_de_Lisboa_de_1755'
        }}
      ]
    }
  ],
  sources: [
    { title: 'Visit Lisboa — o que ver em Alfama', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Lisboa — Património', url: 'https://www.lisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — património imaterial: fado', url: 'https://ich.unesco.org/en/RL/fado-urban-popular-song-of-portugal-00563', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

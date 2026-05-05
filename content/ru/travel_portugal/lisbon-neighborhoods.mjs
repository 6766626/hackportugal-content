export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-neighborhoods',
  categoryId: 'travel_portugal',
  title: 'Районы Лиссабона — где жить',
  tldr: 'Центр (Baixa/Chiado) — дорого, туристично. Alfama/Mouraria — исторический и модный, но шумный. Avenidas Novas / Saldanha / Areeiro — современные районы с метро, подходят для семей. Parque das Nações — новый семейный район. Campo de Ourique / Estrela — камерные, зелёные. Almada / Cacilhas — другой берег, дешевле. Cascais / Oeiras — пригороды у океана.',
  tags: ['lisboa', 'районы', 'жильё'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'center',
      title: 'Исторический центр',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Baixa / Chiado', content: [
            { kind: 'paragraph', text: 'Торговый центр, кафе, музеи. Очень туристический район. Аренда T1 от € 1500–2500/мес. Плюс: всё рядом. Минус: толпы, шум ночью.' }
          ]},
          { id: 'c2', title: 'Alfama / Mouraria', content: [
            { kind: 'paragraph', text: 'Старейший район, фаду, крутые улицы. Атмосферный, но мало парковок, плохая доступность для семей с колясками. T1 от € 1200–2000/мес.' }
          ]},
          { id: 'c3', title: 'Bairro Alto / Príncipe Real', content: [
            { kind: 'paragraph', text: 'Ночная жизнь (Bairro Alto) и бутики (Príncipe Real). Шумно по ночам, плохой выбор для сна, если вы не любите тусовки. T1 € 1500–2500.' }
          ]}
        ]}
      ]
    },
    {
      id: 'family',
      title: 'Семейные районы',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Avenidas Novas / Saldanha', content: [
            { kind: 'paragraph', text: 'Деловой центр. Метро синей и жёлтой линий. Много иностранцев, рестораны, Corte Inglés. T1 € 1400–2200, T2 € 1800–3000.' }
          ]},
          { id: 'f2', title: 'Areeiro / Roma', content: [
            { kind: 'paragraph', text: 'Тихие районы со школами. Метро зелёной линии. Есть русскоязычный клуб. T1 € 1200–1800.' }
          ]},
          { id: 'f3', title: 'Parque das Nações', content: [
            { kind: 'paragraph', text: 'Построен к Expo 98. Современный, просторный, много парков, океанариум. Семейный район. T1 € 1400–2200, T2 € 2000–3500.' }
          ]},
          { id: 'f4', title: 'Campo de Ourique', content: [
            { kind: 'paragraph', text: 'Камерный, зелёный район с рынком. Любимый район иностранцев. T1 € 1300–2000.' }
          ]},
          { id: 'f5', title: 'Estrela / Lapa', content: [
            { kind: 'paragraph', text: 'Дипломатический, с садом Estrela, престижный. T1 € 1500–2500, виллы € 3000+.' }
          ]}
        ]}
      ]
    },
    {
      id: 'budget',
      title: 'Доступные районы',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Penha de França / Anjos', content: [
            { kind: 'paragraph', text: 'Центр Лиссабона, но дешевле. Район развивается, модный среди молодёжи. T1 от € 800–1500.' }
          ]},
          { id: 'b2', title: 'Arroios / Alameda', content: [
            { kind: 'paragraph', text: 'Мультикультурный район, разнообразие кухонь. Метро зелёной линии. T1 € 1000–1600.' }
          ]},
          { id: 'b3', title: 'Lumiar / Telheiras', content: [
            { kind: 'paragraph', text: 'Северная часть, спокойная. Школы, парки. T1 € 900–1400, T2 € 1300–2000.' }
          ]},
          { id: 'b4', title: 'Almada / Cacilhas (южный берег)', content: [
            { kind: 'paragraph', text: 'На южной стороне Тежу. На пароме 10 мин до центра Лиссабона. На 30–40% дешевле городских цен. T1 € 600–1000.' }
          ]},
          { id: 'b5', title: 'Seixal / Barreiro / Amora', content: [
            { kind: 'paragraph', text: 'Ещё дальше на юг. Много переезжающих работников из Лиссабона. T1 € 500–900.' }
          ]}
        ]}
      ]
    },
    {
      id: 'coast',
      title: 'Побережье — Cascais / Oeiras',
      content: [
        { kind: 'substeps', items: [
          { id: 'cc1', title: 'Cascais', content: [
            { kind: 'paragraph', text: 'Курортный город у океана. Престижный, много иностранцев. Поезд (Urbanos) до Лиссабона — 40 мин. T1 € 1500–3000, виллы € 5000+.' }
          ]},
          { id: 'cc2', title: 'Oeiras', content: [
            { kind: 'paragraph', text: 'Между Лиссабоном и Cascais. Технологический хаб (Lagoas Park). Международные школы. T1 € 1200–2200.' }
          ]},
          { id: 'cc3', title: 'Estoril', content: [
            { kind: 'paragraph', text: 'Между Cascais и Oeiras. Казино, пляжи. Дорого. T1 € 1500–2800.' }
          ]}
        ]}
      ]
    },
    {
      id: 'choose',
      title: 'Как выбрать',
      content: [
        { kind: 'checklist', items: [
          'Работа в центре + без авто → Avenidas Novas, Areeiro, Saldanha',
          'Семья с детьми + школы → Parque das Nações, Oeiras, Cascais, Areeiro',
          'Бюджет → Almada, Amadora, Barreiro',
          'Ночная жизнь → Bairro Alto, Cais do Sodré (но не жить)',
          'Атмосфера старого города → Alfama, Mouraria, Graça',
          'Океан близко → Cascais, Estoril, Oeiras, Caxias',
          'Молодые иностранцы → Penha de França, Campo de Ourique, Arroios',
          'Русскоязычная школа/клуб → Oeiras (Carlos Freixo), Cascais'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — гид по районам и фрегезиям', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — статистика по жилью в Лиссабоне', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Lisboa — туристический портал', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
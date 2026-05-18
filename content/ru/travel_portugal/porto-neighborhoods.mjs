export default {
  editorialVoice: 'hackportugal',
  id: 'porto-neighborhoods',
  categoryId: 'travel_portugal',
  title: 'Районы Порту — где жить',
  tldr: 'Baixa / Ribeira — исторический центр, туристично. Cedofeita / Boavista — модный район, дизайнерская среда. Foz — у океана, премиальный район. Bonfim — район на подъёме, доступный. Matosinhos — побережье, морепродукты. Vila Nova de Gaia (другой берег) — дешевле, виды те же. Аренда на 30-40% ниже, чем в Лиссабоне.',
  tags: ['porto', 'районы', 'жильё'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'center',
      title: 'Центральные районы',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Baixa / Aliados', content: [
            { kind: 'paragraph', text: 'Центр, метро S. Bento и Trindade. Днём туристично, ночью спокойнее, чем в Лиссабоне. T1 — 900-1400 €.' }
          ]},
          { id: 'c2', title: 'Ribeira', content: [
            { kind: 'paragraph', text: 'UNESCO, вид на Дору. Очень туристично, крутые улочки. Плюс: красиво; минус: шумно и мало супермаркетов. T1 — 1000-1800 €, если найдёте.' }
          ]},
          { id: 'c3', title: 'Cedofeita', content: [
            { kind: 'paragraph', text: 'Творческий район, бутики, кафе, галереи. Популярен у молодых экспатов. T1 — 900-1400 €.' }
          ]},
          { id: 'c4', title: 'Bonfim', content: [
            { kind: 'paragraph', text: 'Рядом с центром, район восстанавливается. Более аутентичный, местный. T1 — 700-1200 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'premium',
      title: 'Премиальные районы',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Foz do Douro', content: [
            { kind: 'paragraph', text: 'У устья Дору, премиальный район. Пляжи, рестораны, семьи. Далеко от центра, нужна машина или линия метро 1. T1 — 1200-2000 €, виллы — 2500+ €.' }
          ]},
          { id: 'p2', title: 'Boavista', content: [
            { kind: 'paragraph', text: 'Бизнес-район. Casa da Música, небоскрёбы по меркам Португалии. Хорошие школы. T1 — 1000-1700 €.' }
          ]},
          { id: 'p3', title: 'Massarelos / Campo Alegre', content: [
            { kind: 'paragraph', text: 'Между центром и Foz. Ботанический сад. Зелёный, спокойный район. T1 — 900-1500 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'budget',
      title: 'Доступные районы',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Campanhã', content: [
            { kind: 'paragraph', text: 'Рядом с главным ж/д вокзалом. Дёшево, район развивается, но пока грубоватый. T1 — 600-900 €.' }
          ]},
          { id: 'b2', title: 'Paranhos', content: [
            { kind: 'paragraph', text: 'Университетский район, много молодёжи. Жёлтая линия метро. T1 — 700-1100 €.' }
          ]},
          { id: 'b3', title: 'Areosa / Ramalde', content: [
            { kind: 'paragraph', text: 'Северные районы, подходят для семей. Синяя и жёлтая линии метро. T1 — 700-1100 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'outside',
      title: 'Пригороды',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Vila Nova de Gaia', content: [
            { kind: 'paragraph', text: 'Южный берег Дору, знаменитые погреба портвейна. Жёлтая и фиолетовая линии метро через Ponte Luís I. Те же виды, на 20-30% дешевле. T1 — 700-1200 €.' }
          ]},
          { id: 'o2', title: 'Matosinhos', content: [
            { kind: 'paragraph', text: 'На западе. Пляжи, морепродукты, рыбный порт. Синяя линия метро. T1 — 700-1200 €.' }
          ]},
          { id: 'o3', title: 'Maia', content: [
            { kind: 'paragraph', text: 'Север Порту. Аэропорт. Семейный район, школы. Желательно иметь машину. T1 — 600-1000 €.' }
          ]},
          { id: 'o4', title: 'Gondomar / Valongo', content: [
            { kind: 'paragraph', text: 'Восток. Дёшево, но связь с центром через машину или автобус. T1 — 500-800 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'vs-lisbon',
      title: 'Порту и Лиссабон',
      content: [
        { kind: 'checklist', items: [
          '💰 Аренда в Порту на 30-40% дешевле',
          '🌆 Порту компактнее, всё в шаговой доступности',
          '🌧️ Порту дождливее и прохладнее (океан, север)',
          '🍷 Портвейн, долина Дору — уникальная особенность',
          '✈️ Меньше международных рейсов, но есть прямые рейсы в Европу',
          '🎓 Отличные университеты (Porto, Católica)',
          '🏝️ Хорошие пляжи (Matosinhos, Foz, Leça)',
          '👔 Меньше экспатов, более местная атмосфера',
          '🚆 Alfa Pendular до Лиссабона за 2,5 ч'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — жилищные индикаторы Норте', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — туристический портал', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
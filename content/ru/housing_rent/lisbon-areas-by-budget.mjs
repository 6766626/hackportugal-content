export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-areas-by-budget',
  categoryId: 'housing_rent',
  title: 'Где жить в Лиссабоне: районы по бюджету и типу семьи',
  tldr: 'В 2026 Greater Lisbon выбирают не «Лиссабон или нет», а связку бюджет + школа/офис + транспорт. Для одного: 900–1 300 €/мес — Almada, Amadora, Loures, Sintra; 1 300–1 800 € — Oeiras, Benfica, Telheiras; 1 800 €+ — Lisbon centre/Cascais. Семье с ребёнком T2/T3 обычно нужен бюджет 1 500–2 800 €/мес. Аренда: Lisbon 20–25 €/м², Oeiras 16–20 €/м², Cascais 18–24 €/м², Almada/Sintra/Loures 11–16 €/м².',
  tags: ['аренда', 'lisboa', 'oeiras', 'cascais', 'семья'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map-logic',
      title: 'Как читать карту Greater Lisbon',
      content: [
        { kind: 'paragraph', text: 'Greater Lisbon — это не только município de Lisboa. Для жизни важнее транспортная ось: поезд Cascais line, Sintra line, Fertagus через мост 25 de Abril, метро, A5/IC19/A2. Разница в аренде между Lisbon centre и Sintra/Almada может быть 600–1 200 € в месяц за похожий T2.' },
        { kind: 'checklist', items: [
          'Если офис в Saldanha/Marquês/Campo Pequeno — смотрите Lisbon metro, Oeiras по Cascais line, Loures/Odivelas по metro/автобусу.',
          'Если офис в Parque das Nações — удобны Moscavide, Olivais, Sacavém, Loures, Vila Franca line.',
          'Если офис в Oeiras/Lagoas Park/Taguspark — лучше Oeiras, Carcavelos, Paço de Arcos, Massamá, Cacém; из центра Лиссабона часто дольше.',
          'Если школа международная — заранее проверяйте Cascais/Oeiras/Sintra: там больше частных и international schools, но аренда выше.',
          'Если нужен пляж без машины — Cascais line: Algés, Oeiras, Carcavelos, Parede, Cascais.',
          'Если бюджет важнее имиджа — Almada, Seixal, Amadora, Sintra, Loures дают больше м² за те же деньги.',
          'Если нет машины — выбирайте максимум 10–12 минут пешком до metro/CP/Fertagus; автобусная зависимость сильно ухудшает быт.'
        ] }
      ]
    },
    {
      id: 'budgets',
      title: 'Бюджеты 2026: сколько закладывать на аренду',
      content: [
        { kind: 'paragraph', text: 'Ориентиры ниже — для долгосрочной аренды без коммунальных платежей, по объявлениям и сделкам на рынке весной 2026. Хорошие квартиры уходят быстро; собственники часто просят 2 депозита + 1–2 месяца вперёд и подтверждение дохода.' },
        { kind: 'checklist', items: [
          'До 1 000 €/мес: студия/T0 или маленькая T1 в Amadora, Loures, Sintra, Margem Sul; в Lisboa почти всегда компромисс по состоянию или району.',
          '1 000–1 300 €/мес: T1 в Almada, Amadora, Loures, Sintra; иногда T1 в Benfica/Olivais/Algés.',
          '1 300–1 700 €/мес: T1/T2 в Oeiras, Algés, Benfica, Telheiras, Moscavide; T2 лучше искать вне центра.',
          '1 700–2 200 €/мес: нормальный T2 для пары или семьи в Oeiras, Almada premium, Cascais не у моря, Lisbon outer ring.',
          '2 200–3 000 €/мес: T2/T3 в Cascais/Oeiras/Lisbon good areas; уже можно выбирать школу, парковку и состояние.',
          '3 000 €+/мес: Cascais, Estoril, Chiado, Príncipe Real, Avenidas Novas, Parque das Nações, семейные T3/T4 с гаражом.'
        ] },
        { kind: 'warning', text: 'Не планируйте бюджет «ровно впритык». К аренде добавьте 120–250 €/мес за электричество/газ/воду/интернет для пары и 200–350 €/мес для семьи, плюс condomínio иногда включён, иногда нет.' }
      ]
    },
    {
      id: 'areas',
      title: 'Районы по типу семьи и цене за м²',
      content: [
        { kind: 'substeps', items: [
          { id: 'single-couple', title: 'Один человек или пара без детей', content: [
            { kind: 'paragraph', text: 'Главный критерий — дорога до работы и вечерняя жизнь. Если хочется города: Avenidas Novas, Arroios, Anjos, Alameda, Campo de Ourique, Benfica. Если хочется дешевле: Amadora, Damaia, Odivelas, Loures, Almada.' },
            { kind: 'checklist', items: [
              'Lisboa centre: 20–25 €/м²; T1 часто 1 200–1 800 €/мес.',
              'Benfica/Telheiras/Olivais: 17–22 €/м²; спокойнее, метро/поезд, меньше туристического шума.',
              'Almada/Cacilhas: 12–16 €/м²; паром/metro sul + вид на Лиссабон, хороша для центра и Santos/Cais do Sodré.',
              'Amadora/Odivelas/Loures: 11–15 €/м²; практично, но проверяйте конкретную улицу ночью и транспорт.',
              'Sintra line: 10–14 €/м²; больше площади, но commute легко становится 45–70 минут.'
            ] }
          ] },
          { id: 'family-kids', title: 'Семья с ребёнком', content: [
            { kind: 'paragraph', text: 'Семье обычно важны школа, парк, парковка, лифт, шум и медицина. Самые понятные зоны: Oeiras, Carcavelos, Parede, Cascais, Benfica, Telheiras, Parque das Nações, Alfragide, некоторые части Almada и Sintra.' },
            { kind: 'checklist', items: [
              'Oeiras: 16–20 €/м²; сильный баланс школ, моря, парков, офисов и Cascais line.',
              'Cascais/Estoril/Parede: 18–24 €/м²; дороже, зато школы, пляж, expat-среда, безопасность.',
              'Benfica/Telheiras: 17–22 €/м²; семейно, метро/CP, парки, дешевле центра.',
              'Parque das Nações: 20–25 €/м²; удобно, современно, но T3 с гаражом часто 2 500 €+.',
              'Sintra: 10–14 €/м²; больше домов и T3/T4, но без машины и рядом с поездом жить сложнее.',
              'Almada/Caparica: 12–17 €/м²; хороша, если нужен пляж и бюджет, но мост 25 de Abril непредсказуем в час пик.'
            ] }
          ] },
          { id: 'remote-workers', title: 'Удалёнка и digital nomad', content: [
            { kind: 'paragraph', text: 'Для удалёнки важнее качество квартиры, интернет, шум и доступ к аэропорту/центру 1–2 раза в неделю. Не переплачивайте за центр, если не ходите туда каждый день.' },
            { kind: 'checklist', items: [
              'Cascais: дорого, но комфортно, море, коворкинги, англоязычная среда.',
              'Oeiras/Carcavelos: компромисс цена/море/поезд; хорош для тех, кто ездит и в Lisboa, и в Cascais.',
              'Almada/Costa da Caparica: пляжный образ жизни дешевле Cascais, но зимой влажно, транспорт зависит от точки.',
              'Sintra: красиво и дешевле за м², но влажность, холодные дома и commute — частые сюрпризы.',
              'Loures/Sacavém/Moscavide: практично для аэропорта и Parque das Nações, меньше lifestyle, больше бытового удобства.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'commute',
      title: 'Commute: реальные времена до центра',
      content: [
        { kind: 'paragraph', text: 'Сравнивайте не расстояние по карте, а door-to-door: пешком до станции + ожидание + поезд/метро + пересадка + путь от станции. В час пик машина часто проигрывает поезду.' },
        { kind: 'checklist', items: [
          'Cascais → Cais do Sodré: поезд около 40 минут; door-to-door часто 55–75 минут.',
          'Oeiras → Cais do Sodré: поезд около 20–25 минут; door-to-door 35–50 минут.',
          'Carcavelos/Parede → Cais do Sodré: поезд около 25–35 минут; door-to-door 45–60 минут.',
          'Sintra → Rossio/Oriente: поезд около 40–50 минут; door-to-door 60–80 минут.',
          'Cacém/Queluz → Rossio: поезд около 20–35 минут; door-to-door 40–60 минут.',
          'Almada/Cacilhas → Cais do Sodré: паром около 10 минут, но с подходами 30–45 минут.',
          'Pragal/Corroios → Sete Rios/Entrecampos: Fertagus около 15–25 минут; door-to-door 35–55 минут.',
          'Loures/Sacavém → Saldanha/Oriente: автобус/поезд/metro 30–60 минут в зависимости от адреса.'
        ] },
        { kind: 'warning', text: 'Если квартира «15 минут до Лиссабона» — уточняйте: до какой станции, в какое время и чем. На A5, IC19, 2ª Circular и мосту 25 de Abril 15 минут легко превращаются в 45–70.' }
      ]
    },
    {
      id: 'shortlist',
      title: 'Быстрый shortlist по сценариям',
      content: [
        { kind: 'checklist', items: [
          'Бюджет до 1 200 €, один человек: Amadora, Odivelas, Loures, Almada, Cacém, Queluz, Sacavém.',
          'Бюджет 1 200–1 700 €, пара: Benfica, Olivais, Moscavide, Algés, Oeiras, Almada, Alfragide.',
          'Семья, T2/T3 до 2 000 €: Oeiras дальше от моря, Benfica, Telheiras, Loures, Almada, Sintra рядом с CP.',
          'Семья, T2/T3 2 000–3 000 €: Oeiras, Carcavelos, Parede, Cascais не prime, Parque das Nações, Avenidas Novas.',
          'Нужны international schools: Cascais, Estoril, Oeiras, Carcavelos, Linhó/Sintra; бронируйте школу до договора аренды.',
          'Нужен океан: Cascais line или Costa da Caparica; проверяйте влажность, отопление и парковку.',
          'Нужен аэропорт: Olivais, Alvalade, Parque das Nações, Moscavide, Sacavém, Loures.',
          'Нужен максимум м² за бюджет: Sintra, Loures, Margem Sul, Amadora; внимательно проверяйте транспорт и состояние дома.'
        ] }
      ]
    },
    {
      id: 'viewing-checks',
      title: 'Что проверить до подписания договора',
      content: [
        { kind: 'paragraph', text: 'В Португалии дорого исправлять ошибку района: расторжение договора, новый депозит, переезд, агентская комиссия, школа. Перед caução сделайте один тестовый маршрут утром и один вечером.' },
        { kind: 'checklist', items: [
          'Договор аренды зарегистрирован в Finanças, собственник может выдавать recibos de renda.',
          'Classe energética, влажность, плесень, окна, отопление: зимой Лиссабонские дома могут быть холодными.',
          'Шум: самолёты в Alvalade/Olivais, поезда у линий CP, nightlife в Santos/Cais/Arroios.',
          'Парковка: в Lisboa и Cascais без гаража это отдельная проблема; проверьте EMEL/municipal permits.',
          'Интернет: есть ли fibra MEO/NOS/Vodafone по конкретному адресу, а не «в районе».',
          'Супермаркет, аптека, Centro de Saúde, школа/садик — пешком или только на машине.',
          'Безопасность конкретной улицы: пройдитесь после 21:00, особенно возле станций.',
          'Condomínio: кто платит, есть ли лифт, ремонт фасада, долги condomínio.',
          'Срок договора, aviso prévio, возможность регистрации адреса для AIMA/Finanças/SNS.'
        ] },
        { kind: 'warning', text: 'Не переводите депозит только по видео и не верьте «слишком хорошей» цене. Нормально попросить Caderneta Predial, identificação do senhorio и draft contrato antes de pagar.' }
      ]
    }
  ],
  costs: [
    { label: 'T1 в Lisboa centre', amountEURMin: 1200, amountEURMax: 1800, note: 'Обычно 20–25 €/м², выше в Chiado, Príncipe Real, Baixa, Avenidas Novas.' },
    { label: 'T2/T3 для семьи в Oeiras', amountEURMin: 1700, amountEURMax: 2800, note: 'Зависит от близости к Cascais line, моря, гаража и состояния здания.' },
    { label: 'T2/T3 для семьи в Cascais/Estoril', amountEURMin: 2200, amountEURMax: 3500, note: 'International schools и море повышают цену; Parede/Carcavelos часто дешевле Cascais centre.' },
    { label: 'T1/T2 в Almada/Sintra/Loures', amountEURMin: 900, amountEURMax: 1600, note: 'Больше м² за бюджет, но commute и машина становятся ключевыми.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Oeiras — информация о município, мобильности и сервисах', url: 'https://www.cm-oeiras.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Cascais — информация о município, транспорте и городских сервисах', url: 'https://www.cm-cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Idealista — индексы цен аренды и продажи жилья по municípios и freguesias', url: 'https://www.idealista.pt/media/relatorios-preco-habitacao/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP — horários e linhas urbanas de Lisboa: Cascais, Sintra, Azambuja, Sado', url: 'https://www.cp.pt/passageiros/pt/consultar-horarios/horarios-resultado', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}

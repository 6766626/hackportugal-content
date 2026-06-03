export default {
  editorialVoice: 'hackportugal',
  id: 'domestic-flights-ferries',
  categoryId: 'travel_portugal',
  title: 'Внутренние перелёты и паромы — Мадейра, Азоры, континент',
  tldr: 'Для поездок между материком и островами самолёт обязателен. TAP и Ryanair летают Лиссабон/Порту → Мадейра (Фуншал) / Азоры (Понта-Делгада).\n\nНа Азорах для резидентов действуют субсидированные цены. Паромы Soflusa/Transtejo ходят через Тежу в Лиссабоне, круизы по Дору — в Порту, а на Азорах — между островами.',
  tags: ['самолёт', 'паром', 'мадейра', 'азоры'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'airlines',
      title: 'Авиакомпании',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'TAP Air Portugal', content: [
            { kind: 'paragraph', text: 'Национальный перевозчик. Лиссабон/Порту → Фуншал: 4–8 рейсов в день, 1,5 ч. Лиссабон → Понта-Делгада: ежедневно, 2 ч 30 мин. Цены от € 50 при раннем бронировании до € 300 в сезон.' }
          ]},
          { id: 'a2', title: 'Ryanair', content: [
            { kind: 'paragraph', text: 'Дешёвые билеты от € 20 на рейсы Лиссабон — Фуншал и Порту — Фару. Но за багаж и выбор места берут доплату, поэтому внимательно читайте условия тарифа.' }
          ]},
          { id: 'a3', title: 'SATA / Azores Airlines', content: [
            { kind: 'paragraph', text: 'Региональный перевозчик Азор. Межостровные рейсы: 10–30 мин, € 40–€ 80. Рейсы Лиссабон → Азоры тоже есть.' }
          ]},
          { id: 'a4', title: 'Порту → Лиссабон', content: [
            { kind: 'paragraph', text: 'TAP летает 8–10 раз в день, 50 мин. Но с учётом дороги до аэропорта поезд или автобус часто выходят дешевле. Лучше выбрать поезд.' }
          ]}
        ]}
      ]
    },
    {
      id: 'azores-residents',
      title: 'Азоры — особые условия для резидентов',
      content: [
        { kind: 'paragraph', text: 'Резиденты Азор и Мадейры получают субсидированные тарифы на внутренние рейсы — до -80%. Нужно подтверждение резидентства.' },
        { kind: 'paragraph', text: 'Покупайте по тарифу «tarifa residente» на SATA или TAP, указав ВНЖ Мадейры или Азор.' }
      ]
    },
    {
      id: 'ferries',
      title: 'Паромы',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Тежу — Лиссабон', content: [
            { kind: 'paragraph', text: 'Transtejo / Soflusa — паромы через реку Тежу. Главные направления: Cacilhas (южный берег, вид на Лиссабон), Barreiro, Seixal, Montijo, Trafaria. Оплата картой Navegante или билетом. От Cais do Sodré/Belém.' }
          ]},
          { id: 'f2', title: 'Дору — Порту', content: [
            { kind: 'paragraph', text: 'Короткие круизы (6 мостов, 45 мин, € 18–€ 25) и долгие (до Régua, день, € 60–€ 100). Для жителей Порту — катамараны rabelo от Cais da Ribeira.' }
          ]},
          { id: 'f3', title: 'Азорские острова — между островами', content: [
            { kind: 'paragraph', text: 'Atlânticoline — паромы между островами. В сезон (апрель–октябрь) работают все линии. Зимой — ограничения. Между соседними островами 1–2 ч, € 15–€ 30. Для резидентов скидки.' },
            { kind: 'link', text: 'atlanticoline.pt', url: 'https://www.atlanticoline.pt/' }
          ]},
          { id: 'f4', title: 'Мадейра → Porto Santo', content: [
            { kind: 'paragraph', text: 'Porto Santo Line. Ежедневный паром Фуншал → Porto Santo (маленький остров с пляжами), 2,5 ч, € 30–€ 60.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          'Мадейра и Азоры — разный климат. На Мадейре стабильно +20–25 °C, на Азорах переменчивая погода',
          'Для Мадейры / Азор бронируйте заранее: в сезон, июль–август, цены в 2 раза выше',
          'Паромы в Лиссабоне: используйте карту Navegante, так дешевле',
          'Аэропорт → город: Лиссабон, Alameda, метро € 1,90, 20 мин; Порту, Aeroporto, метро (фиолетовая линия), € 2,25, 30 мин',
          'Ryanair — всегда берите ручную кладь, за багаж нужно доплачивать',
          'TAP Miles & Go — накопление миль (можно через карту Millennium BCP)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'TAP Air Portugal', url: 'https://www.flytap.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SATA Azores Airlines', url: 'https://www.azoresairlines.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Atlânticoline', url: 'https://www.atlanticoline.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Transtejo Soflusa — паромы через Тежу', url: 'https://ttsl.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
export default {
  editorialVoice: 'hackportugal',
  id: 'ride-sharing-apps',
  categoryId: 'auto_trips',
  title: 'Uber / Bolt / FreeNow / BlaBlaCar в Португалии',
  tldr: 'Uber и Bolt — лидеры. Работают по всей стране. Bolt обычно на 10–20% дешевле. FreeNow — официальные такси через приложение. Обычное такси (чёрно-зелёные машины) — оплата по счётчику, дороже в аэропорту. BlaBlaCar — попутные поездки между городами.',
  tags: ['uber', 'bolt', 'такси', 'blablacar'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'apps',
      title: 'Основные приложения',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Uber', content: [
            { kind: 'paragraph', text: 'Работает в Лиссабоне, Порту, Алгарве, Браге, Коимбре, Авейру. UberX (обычный), Uber Comfort, Uber Black. Часто используется для поездок в аэропорт.' },
          ]},
          { id: 'a2', title: 'Bolt', content: [
            { kind: 'paragraph', text: 'Эстонская компания. Обычно дешевле Uber на 10–20%. Больше машин в крупных городах. Категории Bolt: Económica / Standard / XL.' }
          ]},
          { id: 'a3', title: 'FreeNow (бывший mytaxi)', content: [
            { kind: 'paragraph', text: 'Официальные такси (чёрно-зелёные) через приложение. Цена по счётчику. Часто более предсказуемая стоимость в час пик, когда у Uber/Bolt действует повышающий коэффициент.' }
          ]},
          { id: 'a4', title: 'Обычное такси', content: [
            { kind: 'paragraph', text: 'Можно остановить на улице, найти на стоянке или вызвать по телефону. Тариф 1 (день): стартовая стоимость € 3,25 + € 0,47/км. Тариф 2 (ночь, выходные): +20%. Аэропорт — фиксированные цены по направлениям.' }
          ]},
          { id: 'a5', title: 'BlaBlaCar', content: [
            { kind: 'paragraph', text: 'Попутчики между городами. Лиссабон—Порту может стоить € 15–25 (дешевле автобуса). Лиссабон—Мадрид — популярное направление. Оплата через приложение, без наличных.' }
          ]}
        ]}
      ]
    },
    {
      id: 'price-comparison',
      title: 'Цена — ориентир (Лиссабон)',
      content: [
        { kind: 'checklist', items: [
          'Аэропорт → Байша (Лиссабон): Uber/Bolt € 10–15, такси € 15–20, FreeNow ~€ 15',
          'Байша → Белен: Uber/Bolt € 7–10, такси € 10–14',
          'Лиссабон → Кашкайш: Uber/Bolt € 25–35, такси € 40–50',
          'Короткие поездки 5–10 мин: обычно € 4–6',
          'Час пик / повышающий коэффициент: до x2'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          'Сравнивайте Uber и Bolt в один момент — цена меняется поминутно',
          'В Uber есть Uber Pool (совместные поездки) — дешевле, но медленнее (сейчас не везде)',
          'Избегайте такси-ловушек в туристических местах — могут включить счётчик до посадки или выбрать кривой маршрут',
          'Для длинных поездок BlaBlaCar экономнее: Лиссабон—Порту от € 15 против € 20–40 за поезд',
          'Чаевые: 5–10% принято в Португалии для Uber/Bolt (можно оставить в приложении)',
          'Оплата: любая международная карта + MB WAY',
          'Если такси вас обсчитало — запомните номер и жалуйтесь в Autoridade de Mobilidade e Transportes'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AMT — регулятор перевозок Португалии', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — индивидуальные перевозки', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 45/2018 — регулирование TVDE (Uber/Bolt)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/45-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
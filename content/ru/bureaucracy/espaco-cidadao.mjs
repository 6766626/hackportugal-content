export default {
  editorialVoice: 'hackportugal',
  id: 'espaco-cidadao',
  categoryId: 'digital_gov',
  title: 'Espaço Cidadão — государственные услуги в одном окне',
  tldr: 'Espaço Cidadão — точки обслуживания (есть по всей стране, но не гарантированно в каждом муниципалитете), где решают многие вопросы с госуслугами: Chave Móvel Digital, изменение адреса, ряд справок и другие. Конкретный набор услуг зависит от точки — NIF/NISS есть не в каждом Espaço Cidadão. В больших городах есть Loja de Cidadão (отдельные окна разных ведомств — состав отличается по городу). Запись через ePortugal.gov.pt **рекомендуется**, но не везде обязательна — некоторые услуги работают по живой очереди или талонам.',
  tags: ['espaço cidadão', 'loja de cidadão', 'госуслуги'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'difference',
      title: 'Espaço Cidadão и Loja de Cidadão',
      content: [
        { kind: 'checklist', items: [
          'Loja de Cidadão — в крупных городах (Лиссабон, Порту, Фару), отдельные окна разных ведомств (обычно Finanças, Segurança Social, IRN, IMT и др.). Состав ведомств отличается в каждой конкретной Loja de Cidadão — AIMA/IMT есть не везде',
          'Espaço Cidadão — в любом муниципалитете, даже небольшом, универсальный оператор решает базовые задачи, но со сложными случаями отправляет в Loja de Cidadão'
        ]}
      ]
    },
    {
      id: 'services',
      title: 'Что можно сделать',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (удостоверение гражданина Португалии) — замена, обновление ПИН-кода',
          'Chave Móvel Digital — активация',
          'NIF — получение (для ЕС/CPLP — без представителя)',
          'Изменение налогового адреса',
          'NISS — оформление',
          'Справки о несудимости',
          'Регистрация автомобиля (IMT) — простые случаи',
          'Семейное пособие — оформление',
          'Регистрация брака, рождения ребёнка — базовые справки'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Как попасть',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Найти ближайший Espaço Cidadão', content: [
            { kind: 'link', text: 'Карта Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao' }
          ]},
          { id: 'e2', title: '2. Записаться онлайн', content: [
            { kind: 'paragraph', text: 'Через ePortugal.gov.pt → выбрать услугу → выбрать место → выбрать время. Запись обязательна.' }
          ]},
          { id: 'e3', title: '3. Взять документы и прийти', content: [
            { kind: 'paragraph', text: 'На 10 мин раньше. Каждая услуга занимает 15-30 мин. Оператор часто помогает с соседними вопросами без отдельной записи.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          'Всегда бронируйте слот заранее — по живой очереди часто не принимают',
          'Берите оригинал и копию каждого документа',
          'Если оператор отказывает — вежливо попросите позвать старшего сотрудника',
          'В Лиссабоне/Порту выгоднее ехать в менее загруженный Espaço Cidadão в пригороде — свободных слотов больше',
          'Английский не всегда понимают — заранее подготовьте заявление по-португальски'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ePortugal — Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Loja de Cidadão — официальный сайт', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
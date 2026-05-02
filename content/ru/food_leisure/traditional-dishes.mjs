export default {
  editorialVoice: 'hackportugal',
  id: 'traditional-dishes',
  categoryId: 'food_leisure',
  title: 'Что попробовать из португальской кухни',
  tldr: 'Основа — bacalhau (треска, «1001 рецепт»), sardinhas assadas (сардины в Лиссабоне летом), cozido à portuguesa (мясное ассорти), francesinha (главное блюдо Порту), arroz de marisco (рис с морепродуктами), leitão da Bairrada (молочный поросёнок). Десерт — pastel de nata везде, ovos moles в Авейру.',
  tags: ['еда', 'кухня', 'bacalhau', 'pastel de nata'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'must-try',
      title: 'ТОП-10: что обязательно попробовать',
      content: [
        { kind: 'checklist', items: [
          '🐟 Bacalhau à Brás — треска с картошкой, яйцом и луком (классика)',
          '🐟 Bacalhau com Natas — треска, запечённая со сливочным соусом',
          '🐟 Bacalhau à Lagareiro — треска, запечённая с оливковым маслом и «мини-картошкой»',
          '🐟 Sardinhas Assadas — жареные на углях сардины (июнь-сентябрь, дешевле в тавернах)',
          '🐟 Arroz de Marisco — рис с морепродуктами, самый популярный в Алгарве',
          '🍖 Cozido à Portuguesa — отварное мясо, колбасы, овощи, нут',
          '🍖 Leitão da Bairrada — молочный поросёнок на вертеле (регион Байррада)',
          '🥪 Francesinha — сэндвич с мясом, сыром, соусом и яйцом (Порту, обязательно попробовать)',
          '🍲 Caldo Verde — суп из капусты и колбасы chouriço (повсеместно)',
          '🥟 Pastéis de Bacalhau — треска в кляре (закуска)'
        ]}
      ]
    },
    {
      id: 'desserts',
      title: 'Десерты',
      content: [
        { kind: 'checklist', items: [
          '🥧 Pastel de Nata — заварной крем в хрустящем тесте (лучшие — Pastéis de Belém, оригинал)',
          '🥚 Ovos Moles de Aveiro — яичный желток + сахар, в вафле (DOP Авейру)',
          '🧁 Queijadas de Sintra — творожные кексы',
          '🌰 Castanhas assadas — жареные каштаны (ноябрь-январь)',
          '🍮 Leite-Creme — португальский крем-брюле',
          '🍰 Bolo Rei — рождественский кекс с сухофруктами (декабрь-январь)',
          '🍧 Arroz Doce — сладкий рис с корицей'
        ]}
      ]
    },
    {
      id: 'drinks',
      title: 'Напитки',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Кофе', content: [
            { kind: 'checklist', items: [
              'Bica (Лиссабон) / Cimbalino (Порту) — эспрессо, 0,70–1 €',
              'Meia de Leite — эспрессо с молоком пополам, в чашке',
              'Galão — большой кофе с молоком (в стакане)',
              'Abatanado — «длинный» кофе, американо',
              'Pingado — эспрессо с каплей молока'
            ]}
          ]},
          { id: 'd2', title: 'Вино', content: [
            { kind: 'checklist', items: [
              'Vinho Verde — лёгкое «зелёное» вино (север Португалии, лучше охлаждённое)',
              'Douro DOC — насыщенное красное',
              'Alentejo — богатое красное',
              'Портвейн (Порту) — десертное вино, Ruby / Tawny / Vintage',
              'Madeira — десертное вино с острова Мадейра',
              'Игристое Bairrada — белое игристое вино'
            ]}
          ]},
          { id: 'd3', title: 'Другие', content: [
            { kind: 'checklist', items: [
              'Ginjinha — вишнёвый ликёр (Лиссабон, барчики A Ginjinha возле Rossio)',
              'Licor Beirão — травяной бренди',
              'Sumol / Compal — фруктовые нектары',
              'Água com gás / sem gás — с газом / без газа'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'regional',
      title: 'Региональные специалитеты',
      content: [
        { kind: 'checklist', items: [
          'Северо-Запад (Порту, Минью) — francesinha, caldo verde, bacalhau com broa',
          'Центр (Коимбра, Авейру) — ovos moles, leitão, chanfana (козлёнок)',
          'Лиссабон и Сетубал — bifana (сэндвич со свининой), caracóis (улитки летом)',
          'Алентежу — porco preto (чёрная свинина), migas, açorda',
          'Алгарве — морепродукты, cataplana, doce fino',
          'Мадейра — espetada (мясо на вертеле), bolo do caco (хлеб)',
          'Азорские острова — cozido das Furnas (вулканический cozido)'
        ]}
      ]
    },
    {
      id: 'etiquette',
      title: 'Этикет',
      content: [
        { kind: 'checklist', items: [
          'Хлеб и оливки приносят «бесплатно» — но обычно они платные (couvert 1–3 €). Скажите «não, obrigado», если не хотите',
          'Основной обед 13:00-15:00, ужин 20:00-22:00',
          'Кофе — после десерта, никогда с едой',
          'Чаевые: 5–10% принято оставлять в ресторане, в кафе — округлять счёт',
          'Menu do dia (обед дня) — самый дешёвый вариант в ресторане, часто 8–12 €',
          'В «taxa» включены не чаевые, а IVA',
          'Просить счёт: «A conta, por favor»'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomia', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGAV — безопасность продуктов питания', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGADR — программа DOP/IGP (защищённые рецепты)', url: 'https://www.dgadr.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
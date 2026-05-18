export default {
  editorialVoice: 'hackportugal',
  id: 'traditional-dishes',
  categoryId: 'food_leisure',
  title: 'Что попробовать из португальской кухни',
  tldr: 'Основа — bacalhau (треска, «1001 рецепт»), sardinhas assadas (сардины в Лиссабоне летом), cozido à portuguesa (мясное ассорти), francesinha (главное блюдо Порту), arroz de marisco (рис с морепродуктами), leitão da Bairrada (молочный поросёнок)\.\n\nДесерт — pastel de nata везде, ovos moles в Авейру.',
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
          '🐟 Arroz de Marisco — рис с морепродуктами, классика прибрежной Португалии',
          '🍖 Cozido à Portuguesa — отварное мясо, колбасы, овощи, нут',
          '🍖 Leitão da Bairrada — молочный поросёнок на вертеле (регион Байррада)',
          '🥪 Francesinha — сэндвич с мясом, сыром и соусом; яйцо часто добавляют сверху (Порту, обязательно попробовать)',
          '🍲 Caldo Verde — суп из капусты и колбасы chouriço (повсеместно)',
          '🥟 Pastéis de Bacalhau — жареные крокеты из трески и картофеля (закуска)'
        ]}
      ]
    },
    {
      id: 'desserts',
      title: 'Десерты',
      content: [
        { kind: 'checklist', items: [
          '🥧 Pastel de Nata — заварной крем в хрустящем тесте (лучшие — Pastéis de Belém, оригинал)',
          '🥚 Ovos Moles de Aveiro — яичный желток + сахар, в вафельной оболочке (IGP/PGI Aveiro)',
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
              'Bica (Лиссабон) / Cimbalino (Порту) — эспрессо, обычно около € 0,90–1,30 в обычных кафе, дороже в туристических местах',
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
              'Madeira — креплёное вино с Мадейры: от сухого до сладкого, часто как аперитив или десертное',
              'Bairrada espumante — игристое вино, чаще белое или rosé'
            ]}
          ]},
          { id: 'd3', title: 'Другие', content: [
            { kind: 'checklist', items: [
              'Ginjinha — вишнёвый ликёр (Лиссабон, барчики A Ginjinha возле Rossio)',
              'Licor Beirão — португальский травяной ликёр',
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
          'Центр (Коимбра, Авейру) — ovos moles, leitão, chanfana (козлятина/коза, тушённая в красном вине)',
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
          'Хлеб, оливки, масло, паштеты могут поставить на стол как couvert, но они платные, если вы их едите; цены должны быть в меню. Не хотите — сразу скажите «não, obrigado» и попросите убрать',
          'Основной обед 13:00-15:00, ужин 20:00-22:00',
          'Кофе — после десерта, никогда с едой',
          'Чаевые не обязательны: в кафе обычно округляют, в ресторане за хороший сервис можно оставить небольшую сумму или около 5–10%',
          'Menu do dia/prato do dia — обычно самый бюджетный обед: примерно € 9–15 в зависимости от города и района',
          'На счёте «IVA incluído» означает, что НДС уже включён в цену. Отдельная «taxa de serviço» возможна только если заранее указана',
          'Просить счёт: «A conta, por favor»'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomia', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGAV — безопасность продуктов питания', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGADR — DOP/IGP: защищённые наименования и традиционные продукты', url: 'https://www.dgadr.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
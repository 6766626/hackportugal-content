export default {
  editorialVoice: 'hackportugal',
  id: 'idealista-imovirtual-buscar',
  categoryId: 'housing_rent',
  title: 'Idealista, Imovirtual, Casa Sapo: как искать аренду в Португалии',
  tldr: 'В 2026 году аренду в Португалии чаще всего ищут через Idealista, Imovirtual, Casa Sapo и иногда Custojusto. Idealista даёт самые быстрые уведомления, Imovirtual — большой каталог, Casa Sapo часто дублирует агентства, Custojusto полезен для частников, но риск скама выше. Ищите по T1/T2/T3, mobilado/sem mobília, проверяйте licença de utilização, contrato, recibos de renda и не переводите депозит до просмотра и идентификации владельца/агентства.',
  tags: ['аренда', 'idealista', 'imovirtual', 'скам'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'platforms',
      title: 'Где искать: что даёт каждая платформа',
      content: [
        { kind: 'paragraph', text: 'В Португалии объявления часто дублируются: один и тот же объект может висеть на Idealista, Imovirtual и сайте агентства с разной ценой или статусом. Самая рабочая стратегия — настроить уведомления на 2–3 площадках и писать в первые часы после публикации.' },
        { kind: 'checklist', items: [
          'Idealista — самый популярный агрегатор, удобная карта, быстрые alertas, много агентств и частников.',
          'Imovirtual — крупный каталог, сильнее представлен за пределами Лиссабона и Порту, часто есть объявления от агентств.',
          'Casa Sapo — старый портал, много агентских объектов; полезен как дополнительная проверка, но часть объявлений устаревает.',
          'Custojusto — доска частных объявлений; можно найти собственника напрямую, но больше фейков и “слишком хороших” цен.',
          'Сайты агентств: Remax, ERA, Century 21, Zome, Keller Williams, Savills, JLL — иногда объект появляется там раньше агрегаторов.',
          'Facebook-группы и Telegram-чаты — только как дополнительный канал; не переводите деньги незнакомым людям без договора и проверки.'
        ] },
        { kind: 'warning', text: 'Если объявление висит неделями с ценой сильно ниже рынка, скорее всего объект уже сдан, это lead для агентства или скам. В Лиссабоне, Порту, Cascais, Oeiras, Braga хорошие квартиры часто уходят за 24–72 часа.' }
      ]
    },
    {
      id: 'filters',
      title: 'Как правильно выставить фильтры',
      content: [
        { kind: 'paragraph', text: 'Португальская типология отличается от привычного “количество комнат”. T означает número de quartos — спальни, а не все комнаты. T1 = одна спальня + sala, T2 = две спальни + sala, T0 = студия.' },
        { kind: 'checklist', items: [
          'Tipo: apartamento, moradia, quarto. Для семьи обычно нужен apartamento или moradia; quarto — комната в общей квартире.',
          'Tipologia: T0, T1, T2, T3. T1 подходит одному/паре, T2 — паре с ребёнком или под кабинет, T3 — семье.',
          'Preço: ставьте верхнюю границу реалистично и проверяйте, включены ли condomínio, água, luz, gás, internet.',
          'Área: полезная площадь может быть указана как área bruta или área útil; сравнивайте осторожно.',
          'Mobilado — с мебелью; sem mobília — без мебели. “Cozinha equipada” означает оборудованную кухню, но не обязательно мебель в комнатах.',
          'Casas de banho: количество санузлов важно для T2/T3; “1 WC” в старом фонде может быть узким и без окна.',
          'Andar / elevador: 3.º andar sem elevador — это четвёртый уровень по русской логике и без лифта.',
          'Certificado energético: A/B лучше, E/F/G часто означает холод зимой, сырость и высокие счета за электричество.',
          'Animais permitidos: если есть животное, спрашивайте письменно до просмотра; многие объявления по умолчанию против pets.',
          'Duração mínima: некоторые объекты сдаются только на 12+ месяцев, краткосрочная аренда может идти как alojamento local и стоить дороже.'
        ] }
      ]
    },
    {
      id: 'messages',
      title: 'Как писать владельцу или агенту, чтобы вам ответили',
      content: [
        { kind: 'paragraph', text: 'На горячем рынке выигрывает не тот, кто написал “Está disponível?”, а тот, кто сразу выглядит платёжеспособным и понятным арендатором. Пишите на португальском или английском, коротко, без длинной биографии.' },
        { kind: 'checklist', items: [
          'Укажите, кто будет жить: “casal sem filhos”, “família de 3 pessoas”, “one person working remotely”.',
          'Напишите дату въезда и желаемый срок: например, “entrada a partir de 1 de junho, contrato de 12 meses ou mais”.',
          'Скажите про доход: contrato de trabalho, recibos verdes, remote work, пенсия, savings. Не отправляйте полные документы в первом сообщении.',
          'Уточните NIF, ВНЖ/visa status, если это важно: “tenho NIF e contrato de trabalho em Portugal”.',
          'Если есть животное — честно: “temos um cão pequeno, treinado, podemos pagar caução adicional se necessário”.',
          'Предложите 2–3 окна для просмотра: “posso visitar hoje depois das 18h ou amanhã de manhã”.',
          'Просите подтвердить: preço, caução, rendas adiantadas, duração do contrato, recibos de renda, licença de utilização.'
        ] },
        { kind: 'paragraph', text: 'Пример короткого сообщения: “Bom dia, tenho interesse no T2 em Arroios. Somos um casal, ambos com contrato de trabalho, temos NIF e pretendemos arrendar por 12+ meses a partir de 1 de maio. Podemos visitar hoje às 18h ou amanhã de manhã? Pode confirmar caução, rendas adiantadas e se há recibos de renda?”' }
      ]
    },
    {
      id: 'documents-money',
      title: 'Документы и деньги: что обычно просят',
      content: [
        { kind: 'paragraph', text: 'Стандартного государственного списка документов для аренды нет: собственник оценивает риск. Но в 2026 году в крупных городах почти всегда просят подтверждение дохода и авансовые платежи.' },
        { kind: 'checklist', items: [
          'Documento de identificação: паспорт, Cartão de Cidadão, cartão de residência или visa page.',
          'NIF — почти всегда нужен для договора и recibos de renda.',
          'Comprovativo de rendimentos: contrato de trabalho, últimos recibos de vencimento, declaração IRS, recibos verdes, банковская справка.',
          'Fiador — поручитель в Португалии; часто требуют у студентов, recém-chegados и людей без местного дохода.',
          'Caução — депозит за ущерб; обычно 1–2 месячные аренды, но на практике могут просить больше.',
          'Rendas adiantadas — аренда вперёд; закон ограничивает аванс по rentas antecipadas, но рынок всё равно торгуется жёстко.',
          'Contrato de arrendamento — должен содержать объект, срок, цену, NIF сторон, условия расторжения и подписи.',
          'Recibos de renda — электронные квитанции через Portal das Finanças; нужны для IRS и подтверждения легальной аренды.',
          'Licença de utilização или подтверждение, что жильё легально для проживания; особенно важно для старого фонда и пристроек.'
        ] },
        { kind: 'warning', text: 'Не отправляйте сканы паспорта, ВНЖ, payslips и банковские выписки до базовой проверки объявления. Для первого контакта достаточно описать статус. Полные документы — только агентству/владельцу, которого вы идентифицировали.' }
      ]
    },
    {
      id: 'scams-red-flags',
      title: 'Красные флаги и скам',
      content: [
        { kind: 'paragraph', text: 'Типичный скам: “владелец за границей”, “ключи через курьера/Airbnb”, “сначала депозит, потом просмотр”, фотографии из другого города, цена на 30–50% ниже рынка. В Португалии это встречается регулярно, особенно на Custojusto, Facebook и WhatsApp.' },
        { kind: 'checklist', items: [
          'Цена заметно ниже похожих объектов в том же bairro и при этом квартира “идеальная”.',
          'Просят перевести caução или primeira renda до живого просмотра или видеопросмотра с демонстрацией адреса.',
          'Отказываются показать документы собственника или агентства, дают только WhatsApp и иностранный IBAN.',
          'Фотографии выглядят как каталог Airbnb, нет вида из окон, фасада, подъезда, счётчиков.',
          'Адрес не совпадает с картой, район описан расплывчато: “near center” без rua или freguesia.',
          'Объявление исчезает и появляется с другим телефоном/ценой.',
          'Агент не указан на сайте агентства, нет номера AMI у mediadora imobiliária.',
          'Договор предлагают “потом”, а сейчас просят “reservation fee”.',
          'Обещают аренду без NIF, договора и recibos, но требуют крупный cash-депозит.'
        ] },
        { kind: 'warning', text: 'Безопасный минимум: увидеть квартиру, проверить личность владельца или licença AMI агентства, получить проект договора, платить на португальский/проверяемый IBAN и сохранять comprovativo. Наличные без recibo — плохая идея.' }
      ]
    },
    {
      id: 'market-reality',
      title: 'Реальность рынка в 2026: скорость, торг и продление',
      content: [
        { kind: 'paragraph', text: 'В 2026 году рынок аренды остаётся напряжённым в Lisboa, Porto, Cascais, Oeiras, Amadora, Almada, Braga, Aveiro, Algarve. Хорошие объекты быстро получают десятки контактов. Если квартира подходит, лучше идти на просмотр сразу и держать документы готовыми.' },
        { kind: 'checklist', items: [
          'Создайте alertas на Idealista и Imovirtual по цене, зоне и типологии; включите push/email.',
          'Смотрите не только центр: транспорт в Lisboa/Porto может быть важнее расстояния по карте.',
          'Проверяйте влажность: запах mofo, пятна у окон, холодные стены, отсутствие отопления.',
          'Уточняйте расходы: condomínio, IMI обычно платит владелец, но serviços/utility bills — арендатор.',
          'Фиксируйте состояние квартиры фото/видео в день передачи ключей и отправляйте владельцу письменно.',
          'Индексация rentas в 2026 году ориентируется на коэффициент 2,16%, если договор допускает ежегодное обновление по закону.',
          'Если нужен atestado de residência, SNS, школа или NHR/IFICI-документы, нелегальная аренда без договора создаст проблемы.'
        ] },
        { kind: 'paragraph', text: 'Не бойтесь торговаться, но на горячих объектах торг часто проигрывает скорости. Более реалистичная переговорная позиция — предложить стабильный срок, прозрачные документы, быструю дату въезда и нормальный депозит вместо попытки сбить цену на 10–15%.' }
      ]
    }
  ],
  costs: [
    { label: 'Обычная caução', amountEURMin: 920, amountEURMax: 3000, note: 'Часто 1–2 месячные аренды; сумма зависит от города, цены квартиры и профиля арендатора.' },
    { label: 'Аренда вперёд', amountEURMin: 920, amountEURMax: 3000, note: 'На практике часто просят 1–2 месяца вперёд при подписании договора.' },
    { label: 'Пользование Idealista/Imovirtual/Casa Sapo для арендатора', amountEUR: 0, note: 'Поиск и ответы на объявления обычно бесплатны; платные продвижения касаются в основном размещения/агентств.' }
  ],
  sources: [
    { title: 'Idealista Portugal — поиск аренды и уведомления', url: 'https://www.idealista.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Imovirtual — каталог недвижимости в Португалии', url: 'https://www.imovirtual.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — recibos de renda eletrónicos', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Diário da República — режим do arrendamento urbano и atualização de rendas', url: 'https://diariodarepublica.pt', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}

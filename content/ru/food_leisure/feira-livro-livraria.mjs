export default {
  editorialVoice: 'hackportugal',
  id: 'feira-livro-livraria',
  categoryId: 'food_leisure',
  title: 'Feira do Livro Lisboa и книжные магазины Bertrand/Wook',
  tldr: 'Главная книжная точка Португалии — Feira do Livro Lisboa: ежегодная ярмарка в Parque Eduardo VII, обычно конец мая–июнь, вход бесплатный, сотни издательств, скидки и автограф-сессии. В Porto аналогичная Feira do Livro проходит обычно в сентябре. Для повседневной покупки книг: Bertrand — сеть с исторической Livraria Bertrand do Chiado 1732 года, Wook — крупный онлайн-магазин, Almedina — право/учёба, FNAC — книги + техника. Для бесплатного чтения оформите Cartão de Leitor в муниципальной библиотеке.',
  tags: ['книги', 'lisboa', 'bertrand', 'wook'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'feira-livro-lisboa',
      title: 'Feira do Livro Lisboa: как это работает',
      content: [
        { kind: 'paragraph', text: 'Feira do Livro Lisboa — крупнейшая книжная ярмарка Португалии. Проходит в Parque Eduardo VII в Lisboa, обычно в период конец мая–июнь. На 03.05.2026 точные даты и программа нужно сверять на официальном сайте feiradolivrodelisboa.pt: расписание участников, часы работы, автограф-сессии и акции публикуют там.' },
        { kind: 'paragraph', text: 'Формат простой: павильоны издательств и книжных сетей вдоль аллей парка. Вход обычно бесплатный. Покупаете книги прямо на стендах, часто дешевле, чем в обычном магазине, особенно в часы “Hora H” и на промо конкретных издательств.' },
        { kind: 'checklist', items: [
          'Локация: Parque Eduardo VII, Lisboa; удобно ехать на metro Marquês de Pombal или Parque',
          'Вход: обычно 0 €',
          'Лучшее время: будни днём — меньше людей; вечер и выходные — очереди и мероприятия',
          'Оплата: большинство стендов принимает Multibanco/карты, но MB WAY и наличные тоже полезны',
          'Языки: много книг на PT, есть EN, FR, ES; русские книги встречаются редко',
          'Для детей: отдельные стенды, комиксы, иллюстрированные книги, активности по выходным',
          'Погода: парк открытый, берите воду, кепку и лёгкую сумку/рюкзак',
          'Скидки: сравнивайте цену на стенде, Bertrand/Wook и FNAC — разница бывает заметной'
        ] }
      ]
    },
    {
      id: 'porto-and-other-fairs',
      title: 'Porto и другие книжные события',
      content: [
        { kind: 'paragraph', text: 'В Porto своя Feira do Livro обычно проходит в сентябре, часто в районе Jardins do Palácio de Cristal. Это меньше по масштабу, чем Lisboa, но комфортнее для прогулки и хороша для местных издательств, детских книг и встреч с авторами.' },
        { kind: 'paragraph', text: 'Если вы живёте не в Lisboa/Porto, следите за афишами Câmara Municipal и библиотек: книжные ярмарки, рынки подержанных книг и встречи с авторами регулярно проходят в Coimbra, Braga, Aveiro, Évora, Faro и Cascais.' },
        { kind: 'warning', text: 'Не покупайте билеты на “Feira do Livro Lisboa” у посредников: стандартный вход на ярмарку бесплатный. Платными могут быть только отдельные параллельные мероприятия, если организатор прямо указывает это в официальной программе.' }
      ]
    },
    {
      id: 'bertrand-fnac-almedina',
      title: 'Где покупать офлайн: Bertrand, FNAC, Almedina',
      content: [
        { kind: 'paragraph', text: 'Bertrand — главная книжная сеть страны. Историческая Livraria Bertrand do Chiado в Lisboa работает с 1732 года и известна как старейший действующий книжный магазин в мире. Это не только туристическая точка: там нормальный выбор литературы, путеводителей, учебников PT и книг на английском.' },
        { kind: 'checklist', items: [
          'Bertrand: художественная литература, нон-фикшн, детские книги, португальские авторы, англоязычный отдел',
          'Livraria Bertrand do Chiado: Rua Garrett, Chiado, Lisboa; стоит зайти хотя бы один раз',
          'FNAC: книги + техника + музыка + настолки; удобно в торговых центрах',
          'Almedina: лучший выбор для права, экономики, университетских учебников, налогов, códigos и legislação',
          'El Corte Inglés: хороший англоязычный и подарочный выбор, но часто дороже',
          'Малые livrarias independentes: лучше для редких издательств, поэзии, zines и локальной сцены'
        ] },
        { kind: 'paragraph', text: 'Совет для изучающих португальский: ищите “livros em português europeu”, а не бразильские издания, если цель — привыкнуть к лексике и орфографии Португалии. Для уровня A1–B1 берите детские книги, graded readers и комиксы: читать легче, а разговорных слов больше.' }
      ]
    },
    {
      id: 'wook-online',
      title: 'Wook: покупка книг онлайн',
      content: [
        { kind: 'paragraph', text: 'Wook.pt — один из крупнейших онлайн-магазинов книг в Португалии. Подходит, если нужной книги нет в ближайшем магазине, если нужен учебник, предзаказ или доставка в другой город. На карточке товара смотрите “Disponibilidade”: “em stock” обычно отправляют быстрее, “por encomenda” может занять дольше.' },
        { kind: 'checklist', items: [
          'Создайте аккаунт на wook.pt с email и португальским адресом доставки',
          'Проверьте язык книги: PT-PT, PT-BR, EN, ES — это важно для учебников и детских книг',
          'Сравните ISBN: одно и то же название может иметь разные издания и переводы',
          'Смотрите срок доставки до оплаты, особенно для “por encomenda”',
          'Оплата обычно доступна картой, Multibanco и MB WAY, варианты зависят от заказа',
          'Доставка по Continente и на острова считается отдельно; итоговая цена видна в checkout',
          'Для подарков проверяйте, можно ли добавить embalagem/presente и срок доставки',
          'Если книга нужна срочно, проверьте самовывоз/наличие в Bertrand или FNAC'
        ] },
        { kind: 'warning', text: 'У Wook и других магазинов цена доставки, сроки и доступность меняются по товару и адресу. Не ориентируйтесь на старые скриншоты из Telegram-чата: финальные условия смотрите только в корзине перед оплатой.' }
      ]
    },
    {
      id: 'libraries-card',
      title: 'Бесплатная альтернатива: Cartão de Leitor',
      content: [
        { kind: 'paragraph', text: 'Если вы живёте в Португалии, муниципальные библиотеки — недооценённый ресурс. В Lisboa сеть BLX выдаёт Cartão de Leitor бесплатно; аналогичные карты есть в Porto, Cascais, Oeiras, Coimbra и других municípios. Обычно можно брать книги домой, пользоваться читальным залом, Wi-Fi, детскими зонами и иногда цифровыми ресурсами.' },
        { kind: 'checklist', items: [
          'Найдите библиотеку вашей Câmara Municipal: “biblioteca municipal + город”',
          'Возьмите паспорт/ВНЖ/Cartão de Cidadão или другой документ',
          'Возьмите подтверждение адреса: договор аренды, счёт, atestado de residência или данные residência fiscal',
          'Заполните formulário de inscrição',
          'Получите Cartão de Leitor — обычно бесплатно',
          'Уточните лимит книг и срок empréstimo; часто продление можно сделать онлайн или по email',
          'За просрочку могут блокировать новые выдачи до возврата книг',
          'Для детей карту оформляет родитель/опекун'
        ] },
        { kind: 'paragraph', text: 'Для экспата это хороший способ читать по-португальски без постоянных покупок. Детские отделы особенно полезны семьям: можно регулярно брать книги для школы, histórias infantis и простые книги для практики языка.' }
      ]
    }
  ],
  costs: [
    { label: 'Вход на Feira do Livro Lisboa', amountEUR: 0, note: 'Обычно бесплатный вход; проверяйте официальную программу 2026 года' },
    { label: 'Cartão de Leitor в муниципальной библиотеке', amountEUR: 0, note: 'В Lisboa BLX и во многих municípios регистрация бесплатная' },
    { label: 'Новая книга в мягкой обложке', amountEURMin: 10, amountEURMax: 25, note: 'Обычный диапазон для массовых изданий; учебники и art books дороже' },
    { label: 'Подержанные книги на рынках/alfarrabistas', amountEURMin: 1, amountEURMax: 10, note: 'Зависит от состояния, редкости и языка' }
  ],
  sources: [
    {
      title: 'Официальный сайт Feira do Livro Lisboa',
      url: 'https://feiradolivrodelisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Bertrand — книжная сеть и Livraria Bertrand',
      url: 'https://www.bertrand.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Wook — онлайн-магазин книг',
      url: 'https://www.wook.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Bibliotecas de Lisboa — inscrição и Cartão de Leitor',
      url: 'https://blx.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}

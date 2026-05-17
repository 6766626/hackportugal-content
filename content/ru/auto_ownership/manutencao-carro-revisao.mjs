export default {
  editorialVoice: 'hackportugal',
  id: 'manutencao-carro-revisao',
  categoryId: 'auto_ownership',
  title: 'Manutenção / revisão автомобиля: concessionário, Norauto или Bosch oficina',
  tldr: 'Revisão в Португалии — плановое ТО по километражу или сроку, обычно раз в 12 мес или 10 000–30 000 км по manual do fabricante. В 2026 выбор такой: concessionário дороже, но лучше для гарантии, recall и сложной электроники; Norauto/Feu Vert/Midas быстрее и дешевле для масла, шин, тормозов, батареи; Bosch Car Service — независимые сертифицированные oficinas для диагностики и ремонта. Всегда требуйте orçamento, fatura с NIF и запись в livro de revisões.',
  tags: ['revisao', 'oficina', 'авто', 'garantia'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-revisao',
      title: 'Что такое revisão и чем она не является',
      content: [
        { kind: 'paragraph', text: 'Manutenção или revisão — это плановое обслуживание автомобиля: масло, фильтры, проверка тормозов, подвески, шин, жидкостей, аккумулятора, электроники. Интервал задаёт производитель: у многих машин это 1 год или 10 000–30 000 км, что наступит раньше.' },
        { kind: 'paragraph', text: 'Revisão не заменяет inspeção periódica obrigatória (IPO). IPO — государственный техосмотр по правилам IMT; revisão — коммерческая услуга в oficina. Машина может пройти revisão и всё равно провалить IPO из-за фар, шин, выбросов или люфтов.' },
        { kind: 'checklist', items: [
          'Смотрите manual do fabricante: там указаны интервалы, допуски масла и список работ.',
          'Для машин на гарантии сохраняйте все faturas и подтверждения, что использованы подходящие детали и жидкости.',
          'Для дизеля с DPF не игнорируйте масло нужного допуска: неправильное масло может ускорить проблемы с filtro de partículas.',
          'Для гибридов и EV проверяйте, умеет ли oficina работать с alta tensão; не всякая сеть обслуживает тяговую батарею.',
          'Если на панели горит aviso motor, сначала нужна диагностика, а не “просто troca de óleo”.',
          'Если машина импортирована, проверьте историю обслуживания по VIN у concessionário и наличие campanhas/recalls.'
        ] }
      ]
    },
    {
      id: 'dealer',
      title: 'Concessionário / oficina autorizada: дорого, но безопасно для гарантии',
      content: [
        { kind: 'paragraph', text: 'Concessionário — официальный дилер или autorizada marca: BMW, Mercedes, Toyota, Renault, Peugeot и т.д. Это самый дорогой вариант, но он важен для новых машин, гарантийных случаев, recall, обновления software, сложной электроники и брендовой истории обслуживания.' },
        { kind: 'checklist', items: [
          'Лучший выбор для автомобиля младше 3 лет или с extensão de garantia.',
          'Обычно используют peças originais или детали, одобренные маркой.',
          'Есть доступ к campanhas técnicas, recall и заводским boletins.',
          'Запись может быть на 1–4 недели вперёд, особенно в Lisboa, Porto и Algarve.',
          'Стоимость revisão часто выше сетевых oficinas: ориентир 180–500 € для обычного ТО, премиум-марки и большие сервисы — выше.',
          'После работ просите fatura с NIF, детализацию peças/mão de obra и отметку в livro de revisões digital или бумажном сервисном плане.',
          'Если нашли дополнительный ремонт, требуйте orçamento до начала работ.'
        ] },
        { kind: 'warning', text: 'Юридическая гарантия на новый потребительский товар в Португалии регулируется DL 84/2021 и обычно составляет 3 года, но производитель может спорить по гарантийному ремонту, если ТО сделано без соблюдения спецификаций. Поэтому при машине на гарантии не экономьте на документах: fatura, спецификация масла, referencias деталей, дата и пробег обязательны.' }
      ]
    },
    {
      id: 'chains',
      title: 'Norauto, Feu Vert, Midas: быстро для стандартных работ',
      content: [
        { kind: 'paragraph', text: 'Сетевые oficinas удобны для экспата: сайты с preços, онлайн-запись, понятные пакеты revisão, много точек у торговых центров. Это хороший вариант для масла, фильтров, шин, travões, bateria, escovas, ar condicionado и pré-IPO check.' },
        { kind: 'checklist', items: [
          'Norauto — сильна в шинах, аккумуляторах, revisão, мелком ремонте и аксессуарах.',
          'Feu Vert — похожий формат: revisão, pneus, travões, ar condicionado, диагностика.',
          'Midas — сеть быстрых oficinas для обслуживания, тормозов, выхлопа, амортизаторов и диагностики.',
          'Обычно дешевле concessionário: базовая revisão часто 80–250 €, но итог зависит от масла, фильтров и модели.',
          'Подходит для популярных европейских и японских моделей без сложной неисправности.',
          'Уточняйте, входит ли в цену filtro de habitáculo, filtro de combustível, сброс service indicator и IVA 23% на mainland.',
          'Для редких моделей, сложной электроники, коробок автомат, ADAS-калибровки и EV лучше заранее спросить, есть ли оборудование.'
        ] },
        { kind: 'warning', text: 'Пакет “revisão desde 79 €” почти всегда означает базовую цену. Полностью синтетическое масло нужного допуска, большой объём масла, топливный фильтр, свечи, тормозная жидкость и диагностика оплачиваются отдельно.' }
      ]
    },
    {
      id: 'bosch-independent',
      title: 'Bosch Car Service и независимые oficinas',
      content: [
        { kind: 'paragraph', text: 'Bosch Car Service — сеть независимых сертифицированных oficinas. Это компромисс между дилером и fast-fit сетями: обычно дешевле concessionário, но сильнее в диагностике, электронике, дизельных системах, ABS/ESP, sensores и ремонте, который не ограничивается “масло + шины”.' },
        { kind: 'checklist', items: [
          'Хороший выбор для машины старше гарантии, когда нужна диагностика, а не только ТО.',
          'Часто умеют работать с multimarcas и имеют профессиональное диагностическое оборудование.',
          'Цена типичной revisão часто 120–350 €, сложная диагностика и ремонт считаются отдельно.',
          'Качество зависит от конкретной oficina: сеть даёт стандарты, но мастерская всё равно локальная.',
          'Проверяйте Google reviews, ACP рекомендации, срок ожидания и готовность выдать orçamento escrito.',
          'Просите вернуть старые детали, если меняют дорогие узлы: alternador, compressor A/C, sensores, injectores.',
          'Для caixa automática, corrente de distribuição, embraiagem, turbo и DPF уточняйте опыт именно по вашей модели.'
        ] },
        { kind: 'paragraph', text: 'Независимые bairro oficinas могут быть ещё дешевле, но риск выше: меньше формальных процессов, не всегда выдают подробную fatura, иногда ставят детали “marca branca” без объяснения. Это нормально для старой машины, но не для гарантии или дорогого ремонта.' }
      ]
    },
    {
      id: 'booking-and-documents',
      title: 'Как записаться и не переплатить 🧾',
      content: [
        { kind: 'paragraph', text: 'В Португалии нормальная практика — просить orçamento до ремонта. Для revisão дайте matrícula, VIN, пробег, год, двигатель и фото последнего service plan. Попросите цену с IVA и разделением peças/mão de obra.' },
        { kind: 'checklist', items: [
          'Скажите: “Quero orçamento para revisão anual conforme plano do fabricante, com IVA incluído.”',
          'Уточните масло: спецификация, вязкость, бренд, объём в литрах.',
          'Попросите список фильтров: óleo, ar, habitáculo, combustível.',
          'Спросите, включён ли diagnóstico eletrónico и reset do indicador de manutenção.',
          'Не соглашайтесь на дополнительные работы по телефону без цены: попросите фото/видео и orçamento.',
          'После ремонта проверьте fatura: NIF, matrícula, quilometragem, referências деталей, mão de obra, IVA.',
          'Сохраните fatura в PDF: пригодится при продаже, гарантии и споре с oficina.',
          'Если ремонт дорогой, сравните минимум 2 предложения: concessionário + Bosch/independente или сеть + Bosch.'
        ] },
        { kind: 'warning', text: 'Не оставляйте машину с формулировкой “faça o que for preciso”. Это открывает путь к счёту на сотни евро без вашего контроля. Письменно ограничьте бюджет: “Não executar trabalhos adicionais sem autorização por escrito”.' }
      ]
    },
    {
      id: 'which-one-to-choose',
      title: 'Быстрый выбор по ситуации',
      content: [
        { kind: 'checklist', items: [
          'Новая машина на гарантии: concessionário или oficina, которая документально соблюдает plano do fabricante.',
          'Recall, software update, ошибка ADAS, ключи, мультимедиа: concessionário.',
          'Масло, фильтры, шины, bateria, travões без сложной диагностики: Norauto / Feu Vert / Midas.',
          'Check перед IPO: сеть или Bosch, если нужен быстрый pré-inspeção.',
          'Check перед покупкой подержанной машины: Bosch, ACP inspection или независимая oficina с диагностикой.',
          'Проблемы с diesel, DPF, injectores, sensores, ABS/ESP: Bosch Car Service или профильная oficina.',
          'Старая бюджетная машина: независимая bairro oficina может быть выгодной, если есть рекомендации и fatura.',
          'Премиум, гибрид, EV, автоматическая коробка: не выбирайте только по цене; проверьте оборудование и опыт.'
        ] },
        { kind: 'paragraph', text: 'Практичная стратегия для 2026: пока гарантия активна — держите историю у concessionário или очень аккуратно документируйте независимое ТО. После гарантии — revisão в Bosch/хорошей независимой oficina, а шины, аккумулятор и простые работы можно делать в Norauto/Feu Vert/Midas.' }
      ]
    }
  ],
  costs: [
    { label: 'Базовая revisão в сетевой oficina', amountEURMin: 80, amountEURMax: 250, note: 'Ориентир для масла и базовых фильтров; зависит от двигателя, допуска масла и включённых работ.' },
    { label: 'Revisão в Bosch Car Service / хорошей независимой oficina', amountEURMin: 120, amountEURMax: 350, note: 'Средний рынок для обычного ТО; диагностика и ремонт оплачиваются отдельно.' },
    { label: 'Revisão у concessionário', amountEURMin: 180, amountEURMax: 500, note: 'Обычное плановое ТО; премиум-марки, большие интервальные сервисы, свечи, тормозная жидкость и АКПП могут стоить существенно дороже.' },
    { label: 'Диагностика eletrónica', amountEURMin: 30, amountEURMax: 90, note: 'Часто бесплатно только если ремонт делается там же; заранее уточняйте.' },
    { label: 'Замена шин, работа за 4 колеса', amountEURMin: 40, amountEURMax: 90, note: 'Без стоимости шин; балансировка и válvulas могут считаться отдельно.' }
  ],
  sources: [
    { title: 'IMT — inspeções, veículos и официальная информация по автотранспорту', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACP — manutenção automóvel, inspeção и практические рекомендации водителям', url: 'https://www.acp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 84/2021 — direitos do consumidor na compra e garantia de bens', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/84-2021-172938301', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Bosch Car Service Portugal — rede de oficinas multimarcas', url: 'https://www.boschcarservice.com/pt/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

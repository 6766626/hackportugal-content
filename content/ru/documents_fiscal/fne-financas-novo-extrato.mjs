export default {
  editorialVoice: 'hackportugal',
  id: 'fne-financas-novo-extrato',
  categoryId: 'documents_fiscal',
  title: 'Получение справок Finanças: IRS, IUC, IMI, дивиденды и отсутствие долгов',
  tldr: 'В Portal das Finanças можно бесплатно или за небольшой сбор получить налоговые справки AT: declaração de não-dívida, certidão de IRS, IUC, IMI, comprovativo de morada fiscal и справки по доходам, включая дивиденды. Путь: Portal das Finanças → Cidadãos → Serviços → Certidões. Большинство PDF выдаются сразу и стоят 0 €, отдельные certidões могут стоить до 10 €.\n\nСрок действия зависит от типа: não-dívida обычно 3 месяца, многие получатели принимают остальные справки не старше 6 месяцев.',
  tags: ['finanças', 'certidões', 'irs', 'imi', 'iuc'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-you-can-get',
      title: 'Какие справки доступны в Finanças',
      content: [
        { kind: 'paragraph', text: 'Portal das Finanças — основной источник официальных налоговых справок Autoridade Tributária e Aduaneira (AT). PDF с кодом проверки обычно принимают банки, Câmara Municipal, AIMA, работодатели, университеты, страховые и арендодатели.' },
        { kind: 'checklist', items: [
          'Declaração de situação tributária regularizada / certidão de não-dívida — подтверждение, что у вас нет просроченных налоговых долгов перед AT.',
          'Certidão de IRS — справка по поданным декларациям IRS, liquidação или доходам за конкретный год.',
          'Comprovativo de entrega da declaração IRS — подтверждение, что декларация IRS Modelo 3 была подана.',
          'Demonstração de liquidação IRS — расчёт налога IRS: доходы, вычеты, удержания, сумма к оплате или возврату.',
          'Certidão de domicílio fiscal / comprovativo de morada fiscal — официальный налоговый адрес в Portugal.',
          'Certidão de teor matricial / IMI — данные недвижимости: artigo matricial, valor patrimonial tributário (VPT), freguesia, собственник.',
          'Certidão IUC — данные по транспортному налогу IUC и автомобилям, связанным с вашим NIF.',
          'Certidão de rendimentos — подтверждение доходов, включая категории IRS; дивиденды обычно отражаются как rendimentos de capitais, categoria E, если они декларировались или были сообщены AT.'
        ] }
      ]
    },
    {
      id: 'login',
      title: 'Вход в Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Зайдите на portaldasfinancas.gov.pt. Нужен NIF и один из способов входа: пароль Finanças, Chave Móvel Digital (CMD) или Cartão de Cidadão с PIN и кардридером.' },
        { kind: 'checklist', items: [
          'Проверьте, что у вас есть активный NIF.',
          'Если пароля Finanças нет — запросите его на портале; письмо обычно приходит на налоговый адрес.',
          'Если у вас есть ВНЖ и португальский номер телефона, удобнее подключить Chave Móvel Digital.',
          'Убедитесь, что morada fiscal актуальна: многие справки завязаны на налоговый адрес.',
          'Отключите автопереводчик браузера, если кнопки портала начинают работать некорректно.',
          'Скачивайте PDF сразу: некоторые страницы после выхода из сессии не восстанавливают результат.'
        ] },
        { kind: 'warning', text: 'Наличие NIF само по себе не означает налоговое резидентство. Comprovativo de morada fiscal показывает адрес в AT, но для банка или иностранной налоговой иногда нужна отдельная certidão de residência fiscal.' }
      ]
    },
    {
      id: 'path-certidoes',
      title: 'Где искать раздел Certidões',
      content: [
        { kind: 'paragraph', text: 'Стандартный путь в 2026 году: Portal das Finanças → Cidadãos → Serviços → Certidões. На портале названия пунктов иногда меняются, поэтому быстрее пользоваться строкой поиска по словам “certidão”, “não dívida”, “domicílio fiscal”, “IRS”, “IUC”, “IMI”.' },
        { kind: 'substeps', items: [
          {
            id: 'non-debt',
            title: 'Справка об отсутствии долгов',
            content: [
              { kind: 'paragraph', text: 'Ищите “Situação Tributária Regularizada” или “Certidão de dívida e não dívida”. Выберите emissão, подтвердите запрос и скачайте PDF.' },
              { kind: 'warning', text: 'Declaração de não-dívida обычно действительна 3 месяца, а не 6. Если банк, AIMA или Câmara просит “certidão recente”, лучше выпускать её заново за 1–7 дней до подачи.' }
            ]
          },
          {
            id: 'irs',
            title: 'IRS и доходы',
            content: [
              { kind: 'paragraph', text: 'Для IRS используйте разделы IRS → Consultar Declaração, Obter Comprovativo, Liquidação или Certidões. Для доходов по дивидендам ищите справки по rendimentos или скачивайте declaração IRS Modelo 3 + Anexo E и demonstração de liquidação за нужный год.' }
            ]
          },
          {
            id: 'imi-iuc',
            title: 'IMI и IUC',
            content: [
              { kind: 'paragraph', text: 'Для недвижимости ищите “Património”, “Prédios”, “Caderneta Predial” или “Certidão de teor matricial”. Для автомобилей — “Veículos”, “IUC” и comprovativos/certidões по налогу.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'documents-by-purpose',
      title: 'Что скачать для разных ситуаций',
      content: [
        { kind: 'paragraph', text: 'Получатели часто формулируют запросы расплывчато: “tax certificate”, “proof of address”, “IRS statement”. Лучше уточнить португальское название документа и налоговый год.' },
        { kind: 'checklist', items: [
          'Для банка при открытии счёта: comprovativo de morada fiscal, declaração de IRS или certidão de residência fiscal, если банк проверяет налоговое резидентство.',
          'Для ипотеки: IRS Modelo 3 за последние 1–2 года, demonstração de liquidação, declaração de não-dívida, caderneta predial при наличии недвижимости.',
          'Для AIMA: иногда просят declaração de IRS, comprovativo de atividade, não-dívida или доказательство доходов; требования зависят от типа ВНЖ.',
          'Для аренды: comprovativo de morada fiscal обычно не доказывает право проживания в квартире; арендодатель может просить contrato de arrendamento и IRS.',
          'Для продажи/покупки недвижимости: caderneta predial, IMI, VPT, certidão permanente predial из Conservatória — это отдельный документ, не только Finanças.',
          'Для автомобиля: comprovativo IUC, данные транспортного средства и отсутствие долгов по IUC.',
          'Для иностранных налоговых органов: часто нужна certidão de residência fiscal, иногда с указанием года и применимой convenção para evitar dupla tributação.',
          'Для дивидендов: берите Anexo E IRS, declaração de rendimentos и документы брокера; Finanças видит не все иностранные выплаты автоматически.'
        ] }
      ]
    },
    {
      id: 'validity-and-costs',
      title: 'Срок действия, стоимость и проверка PDF',
      content: [
        { kind: 'paragraph', text: 'Большинство электронных справок в Portal das Finanças выдаются сразу в PDF и бесплатны. Если система показывает emolumentos или taxa, оплатить можно через referência Multibanco/MB WAY, после чего документ становится доступен.' },
        { kind: 'checklist', items: [
          'Обычная стоимость: 0 € для большинства comprovativos и certidões, скачиваемых онлайн.',
          'Отдельные certidões или заверенные варианты могут стоить до 10 €.',
          'Срок действия не универсален: смотрите campo “validade” в PDF.',
          'Não-dívida обычно действительна 3 месяца.',
          'Для IRS, IMI, IUC и morada fiscal многие организации требуют документ не старше 3–6 месяцев, даже если в PDF нет явного срока.',
          'PDF с Portal das Finanças обычно содержит código de validação; получатель может проверить подлинность онлайн.',
          'Если документ нужен на английском, AT обычно не переводит его автоматически: делайте tradução certificada у переводчика, если получатель не принимает PT.',
          'Если данные неверны, сначала исправьте исходную запись: morada fiscal, IRS declaration, registo do imóvel или veículo; новая certidão подтянет обновлённые данные.'
        ] },
        { kind: 'warning', text: 'Не отправляйте полный IRS посторонним без необходимости: там есть NIF, адрес, доходы, удержания, семейное положение и банковские данные для возврата. Для аренды или школы иногда достаточно первой страницы или certidão específica.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Типичные проблемы у экспатов',
      content: [
        { kind: 'checklist', items: [
          'Пароль Finanças отправлен на старый адрес — обновите morada fiscal или используйте CMD.',
          'В справке указан иностранный адрес — значит ваш domicílio fiscal ещё не изменён на Portugal.',
          'Нет IRS за прошлый год — возможно, вы не были налоговым резидентом или декларация не была подана.',
          'Дивиденды не видны — иностранный брокер мог не сообщить данные в AT; проверьте Anexo E и CRS/withholding statements.',
          'Não-dívida не выдаётся — проверьте pagamentos em falta, coimas, IMI, IUC, IVA, IRS или рассрочку dívida em prestações.',
          'IMI-справка пустая — недвижимость может быть зарегистрирована на другого NIF, в наследственной массе или ещё не обновлена после сделки.',
          'IUC висит на проданный автомобиль — проверьте, перерегистрировал ли покупатель veículo в IRN/IMT; налог платит владелец на дату aniversário da matrícula.',
          'Получатель не принимает PDF — отправьте вместе с código de validação или попросите указать точное название требуемой certidão.'
        ] },
        { kind: 'paragraph', text: 'Если онлайн-раздел не работает, можно открыть pedido e-balcão в Portal das Finanças: опишите документ, налоговый год, NIF и цель. Для срочных случаев помогает запись в Serviço de Finanças, но большинство справок AT ожидает, что вы получите онлайн.' }
      ]
    }
  ],
  costs: [
    { label: 'Comprovativo de morada fiscal', amountEUR: 0, note: 'Обычно скачивается бесплатно в Portal das Finanças.' },
    { label: 'Declaração de não-dívida / situação tributária regularizada', amountEUR: 0, note: 'Электронная выдача обычно бесплатна; срок действия обычно 3 месяца.' },
    { label: 'IRS comprovativo / liquidação', amountEUR: 0, note: 'Доступно онлайн по поданным декларациям и годам с данными в AT.' },
    { label: 'Отдельные certidões AT', amountEURMin: 0, amountEURMax: 10, note: 'Стоимость зависит от типа справки и способа выдачи; портал покажет сумму до подтверждения.' }
  ],
  sources: [
    { title: 'Portal das Finanças — вход и услуги Autoridade Tributária', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — раздел Cidadãos / Serviços / Certidões', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — услуги и контакты Autoridade Tributária e Aduaneira', url: 'https://eportugal.gov.pt/entidades/autoridade-tributaria-e-aduaneira', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}

export default {
  editorialVoice: 'hackportugal',
  id: 'lisboa-bip-zip-cartao',
  categoryId: 'daily_life',
  title: 'Cartão BIP/ZIP: резидентская карта Лиссабона со скидками',
  tldr: 'Cartão BIP/ZIP — муниципальная карта Câmara Municipal de Lisboa для жителей 65 зон BIP/ZIP: Bairros e Zonas de Intervenção Prioritária. Это не туристическая Lisboa Card, а локальный документ для доступа к скидкам и условиям участия в программах культуры, спорта, здоровья и соседских проектов. Право зависит от адреса проживания, а не от гражданства. Обычно нужна идентификация и подтверждение адреса в зоне BIP/ZIP; выпуск карты бесплатный.',
  tags: ['lisboa', 'bipzip', 'скидки', 'bairro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Cartão BIP/ZIP',
      content: [
        { kind: 'paragraph', text: 'BIP/ZIP означает Bairros e Zonas de Intervenção Prioritária — районы и зоны Лиссабона, которые Câmara Municipal de Lisboa считает приоритетными для социальной, городской и соседской поддержки. В 2026 году муниципальная карта BIP/ZIP привязана к проживанию в одной из 65 таких зон.' },
        { kind: 'paragraph', text: 'Карта нужна не для транспорта и не для туристических музеев «всё включено». Она подтверждает, что вы живёте в конкретной зоне BIP/ZIP, и может давать доступ к муниципальным скидкам, мероприятиям, спортивным, культурным, образовательным, медицинским и социальным инициативам, которые CML или партнёры запускают для этих районов.' },
        { kind: 'warning', text: 'Не путайте с Lisboa Card: Lisboa Card — платная туристическая карта для транспорта и достопримечательностей. Cartão BIP/ZIP — резидентская муниципальная карта по адресу проживания в приоритетном районе.' }
      ]
    },
    {
      id: 'check-eligibility',
      title: 'Проверьте, входит ли ваш адрес в BIP/ZIP',
      content: [
        { kind: 'paragraph', text: 'Право на Cartão BIP/ZIP определяется не NIF, не ВНЖ и не сроком жизни в Португалии, а адресом: ваша улица и дом должны попадать в одну из зон BIP/ZIP на карте Câmara Municipal de Lisboa.' },
        { kind: 'checklist', items: [
          'Откройте страницу BIP/ZIP на сайте cm-lisboa.pt.',
          'Найдите список или карту Bairros e Zonas de Intervenção Prioritária.',
          'Проверьте не только название bairro, но и конкретную улицу: границы зон могут идти по кварталам.',
          'Если живёте на границе района, уточните по morada completa: rua, número, andar, código postal.',
          'Если адрес в Amadora, Odivelas, Almada, Oeiras или Loures — это уже не Câmara Municipal de Lisboa, даже если «по ощущениям Лиссабон».',
          'Если вы только переезжаете, карта оформляется после появления подтверждения адреса в Лиссабоне.',
          'Если вы снимаете комнату без договора, заранее получите другой документ на адрес: atestado de residência, declaração do senhorio или счёт с вашим именем.'
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Документы для подачи',
      content: [
        { kind: 'paragraph', text: 'CML может менять форму подачи и список подтверждений, поэтому перед визитом проверьте актуальную страницу Cartão BIP/ZIP или позвоните в Linha Lisboa. На практике от иностранного резидента обычно требуют идентификацию и доказательство, что он действительно живёт в зоне BIP/ZIP.' },
        { kind: 'checklist', items: [
          'Паспорт, Cartão de Cidadão, ВНЖ или другой документ, удостоверяющий личность.',
          'NIF — часто нужен для муниципальных форм, даже если не является критерием права.',
          'Подтверждение адреса: contrato de arrendamento, recibo de renda, счёт EDP/água/internet, declaração do senhorio или atestado de residência от Junta de Freguesia.',
          'Código postal completo — 7 цифр, например 1100-000.',
          'Номер телефона и email для связи.',
          'Для несовершеннолетнего — документ ребёнка и документ законного представителя.',
          'Если имя в договоре аренды не ваше — подготовьте доказательство проживания: declaração do titular do contrato + копия документа или atestado de residência.'
        ] },
        { kind: 'warning', text: 'Atestado de residência от Junta de Freguesia обычно не выдают «за 5 минут без доказательств». Junta может попросить свидетелей, договор, счета или другие подтверждения фактического проживания.' }
      ]
    },
    {
      id: 'apply',
      title: 'Как оформить карту',
      content: [
        { kind: 'paragraph', text: 'Подача зависит от текущего канала CML: онлайн-форма, Loja Lisboa / balcão municipal или участие через местные проекты BIP/ZIP. Если на сайте нет активной кнопки заявки, самый рабочий путь — уточнить в Câmara Municipal de Lisboa или в своей Junta de Freguesia, кто принимает заявления по вашему bairro.' },
        { kind: 'checklist', items: [
          'Соберите документы и сделайте PDF/фото, если подача онлайн.',
          'Проверьте, что адрес в документах совпадает с адресом в заявке.',
          'Укажите bairro/zona BIP/ZIP, если форма это просит.',
          'Подайте заявку через канал, указанный CML, или в муниципальном atendimento.',
          'Сохраните comprovativo de pedido: номер заявки, email или квитанцию.',
          'Дождитесь подтверждения выпуска или инструкции, где забрать карту.',
          'При получении проверьте имя, адресную зону и срок действия, если он указан.'
        ] },
        { kind: 'paragraph', text: 'Если сотрудник не узнаёт название Cartão BIP/ZIP, используйте полное название: “Cartão BIP/ZIP — Bairros e Zonas de Intervenção Prioritária da Câmara Municipal de Lisboa”. Это снижает риск, что вас отправят за Lisboa Card для туристов.' }
      ]
    },
    {
      id: 'use',
      title: 'Где использовать и чего ожидать',
      content: [
        { kind: 'paragraph', text: 'Cartão BIP/ZIP не является универсальной «скидочной картой на всё». Льготы зависят от действующих муниципальных программ, партнёров и конкретного bairro. В одном районе акцент может быть на спорт и saúde, в другом — на культурные события, обучение, соседские инициативы или поддержку семей.' },
        { kind: 'checklist', items: [
          'Перед оплатой спрашивайте: “Aceitam Cartão BIP/ZIP?”',
          'Проверяйте условия акции: скидка может действовать только для жителей конкретной зоны.',
          'Берите с собой документ, удостоверяющий личность: партнёр может сверить имя.',
          'Следите за объявлениями CML, Junta de Freguesia, Biblioteca de Lisboa, equipamentos desportivos и местных associações.',
          'Для спортивных объектов уточняйте, применяется ли скидка к inscrição, mensalidade или только к отдельным занятиям.',
          'Для культурных мероприятий проверяйте лимит мест: карта может давать приоритет или цену, но не гарантировать билет.',
          'Если переехали из зоны BIP/ZIP, право на карту и льготы может прекратиться.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Частые ошибки экспатов',
      content: [
        { kind: 'checklist', items: [
          'Пытаться оформить карту по адресу Airbnb или временного отеля — обычно нужен реальный адрес проживания.',
          'Думать, что вся Lisboa входит в BIP/ZIP: нет, только определённые 65 зоны.',
          'Показывать только NIF с адресом в Finanças: он полезен, но не всегда достаточен как comprovativo de morada.',
          'Путать Junta de Freguesia и Câmara Municipal de Lisboa: Junta помогает с atestado и местной информацией, но программа муниципальная.',
          'Ожидать фиксированную скидку в евро или процентах по всей столице: условия зависят от программы и партнёра.',
          'Считать, что карта доступна только португальцам: критерий — проживание в зоне, иностранцы с документами на адрес тоже могут подаваться.',
          'Не обновлять адрес после переезда: если вы сменили bairro, проверьте право заново.'
        ] },
        { kind: 'warning', text: 'Если вам предлагают «платно помочь оформить Cartão BIP/ZIP», проверьте напрямую в CML. Муниципальная карта обычно оформляется бесплатно; посредники не нужны.' }
      ]
    }
  ],
  costs: [
    { label: 'Выпуск Cartão BIP/ZIP', amountEUR: 0, note: 'Муниципальная резидентская карта; если CML не ввела специальный сбор, оформление бесплатно.' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Зависит от Junta и ситуации; иногда бесплатно, иногда небольшой сбор за справку.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — Programa BIP/ZIP',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Lisboa — Bairros e Zonas de Intervenção Prioritária',
      url: 'https://bipzip.cm-lisboa.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal — Atestado de residência pela Junta de Freguesia',
      url: 'https://eportugal.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}

export default {
  editorialVoice: 'hackportugal',
  id: 'ciberseguranca-cncs-denuncia',
  categoryId: 'emergency_rights',
  title: 'Кибербезопасность: CNCS, PJ Crimes Informáticos и онлайн-жалобы',
  tldr: 'Если украли деньги через MB WAY, OLX, phishing, fake AIMA/Finanças/SNS email или взломали аккаунт, действуйте в первые часы: блокируйте карту/MB WAY в банке, сохраняйте доказательства, меняйте пароли. CNCS/CERT.PT принимает сообщения об инцидентах и помогает с технической классификацией, но не расследует преступления и не возвращает деньги. Уголовное заявление подают в Polícia Judiciária — Unidade Nacional de Combate ao Cibercrime e Criminalidade Tecnológica или через официальные каналы полиции. Потребительские споры с продавцами — DECO PROteste / Livro de Reclamações.',
  tags: ['cncs', 'pj', 'фишинг', 'mbway', 'denuncia'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'triage',
      title: 'Сначала остановите ущерб: первые 30 минут',
      content: [
        { kind: 'paragraph', text: 'В Португалии киберинцидент и уголовное преступление — не одно и то же. CNCS/CERT.PT нужен для сообщения о техническом инциденте: phishing-сайт, malware, утечка, DDoS, компрометация email. Polícia Judiciária нужна, если есть кража денег, вымогательство, доступ к аккаунтам, подделка личности или fraude informática по Lei 109/2009.' },
        { kind: 'checklist', items: [
          'Позвоните в банк и попросите немедленно заблокировать карту, MB WAY, transferências, cartões virtuais и доступы к homebanking.',
          'Если использовали MB WAY: заблокируйте привязанные карты и проверьте lista de dispositivos autorizados.',
          'Смените пароль к email, банку, Finanças, AIMA, SNS, redes sociais; включите 2FA через приложение, не SMS, если возможно.',
          'Сделайте скриншоты: SMS, email headers, номер телефона, IBAN, ссылку, профиль OLX/Facebook/Instagram, переписку, comprovativos.',
          'Не удаляйте подозрительные письма: сохраните .eml/.msg или полный cabeçalho técnico.',
          'Если отправили документ: отметьте риск identity theft и сохраните копию того, что ушло.',
          'Если потеряли устройство: удалённо заблокируйте SIM/eSIM и аккаунты Apple ID / Google.',
          'Если есть угроза жизни или физический шантаж — звоните 112, а не ждите онлайн-ответа.'
        ] },
        { kind: 'warning', text: 'Не платите “комиссию за возврат денег”, “taxa AIMA”, “desbloqueio MB WAY” или “multa Finanças” по ссылке из SMS/email. Государственные органы Португалии не просят оплатить штраф или запись в AIMA через случайный link curto, WhatsApp или Revolut/IBAN физлица.' }
      ]
    },
    {
      id: 'cncs',
      title: 'CNCS / CERT.PT: сообщить о киберинциденте',
      content: [
        { kind: 'paragraph', text: 'Centro Nacional de Cibersegurança (CNCS) — национальный орган по кибербезопасности. Его CERT.PT принимает уведомления об инцидентах, анализирует угрозы и может координировать технический ответ. Это не полиция и не суд: CNCS не открывает уголовное дело, не блокирует банковский перевод по вашей просьбе и не взыскивает деньги.' },
        { kind: 'checklist', items: [
          'Используйте официальный сайт cncs.gov.pt и раздел CERT.PT / notificação de incidentes.',
          'Укажите тип инцидента: phishing, malware, ransomware, account takeover, DDoS, data breach, spoofing, scam website.',
          'Вставьте полные URL подозрительных страниц, не только скриншоты.',
          'Приложите email headers, исходный .eml/.msg, SMS-текст, номера телефонов, домены, IP, hashes файлов, если есть.',
          'Укажите дату и время по Португалии, affected accounts, сумму ущерба, банк/платформу.',
          'Если вы компания или associação: добавьте NIPC, контакт técnico, DPO/ответственного, масштаб затронутых данных.',
          'Сохраните номер/подтверждение обращения CNCS: оно пригодится для банка, PJ и страховой.'
        ] },
        { kind: 'warning', text: 'Для организаций инцидент может одновременно быть breach de dados pessoais. Тогда отдельно оценивается уведомление CNPD по GDPR в течение 72 часов после того, как стало известно о нарушении. CNCS и CNPD — разные органы.' }
      ]
    },
    {
      id: 'pj',
      title: 'Polícia Judiciária: когда это преступление',
      content: [
        { kind: 'paragraph', text: 'Если у вас украли деньги, получили доступ к bank account, выманили códigos MB WAY, использовали ваши документы, шантажируют интимными фото, взломали email или магазин — подавайте denúncia/queixa в Polícia Judiciária. В PJ этим занимается Unidade Nacional de Combate ao Cibercrime e Criminalidade Tecnológica (UNC3T).' },
        { kind: 'checklist', items: [
          'Подайте заявление через официальные каналы PJ или лично в отделении Polícia Judiciária; при срочности можно также идти в PSP/GNR, которые примут denúncia и направят материалы.',
          'Опишите факты хронологически: дата, время, платформа, что нажали, какие коды ввели, куда ушли деньги.',
          'Приложите comprovativo da transferência, IBAN получателя, entidade/referência Multibanco, номер MB WAY, номер телефона мошенника.',
          'Приложите переписку OLX, WhatsApp, Telegram, Instagram, Facebook Marketplace, email и SMS.',
          'Укажите, что уже сделали: заблокировали карту, уведомили банк, сообщили CNCS, сменили пароли.',
          'Попросите banco открыть processo de fraude/chargeback/contestação da operação — это делается параллельно с уголовной жалобой.',
          'Сохраните копию auto de notícia / comprovativo da denúncia: банк часто просит её для рассмотрения возврата.'
        ] },
        { kind: 'paragraph', text: 'В португальском праве основные составы для таких случаев — burla informática, acesso ilegítimo, falsidade informática, interceção ilegítima и related offences по Lei do Cibercrime, Lei 109/2009. Формулировать статью самому не обязательно: важнее точно описать факты и доказательства.' },
        { kind: 'warning', text: 'Если мошенничество связано с переводом SEPA/Instant Transfer, время критично. Заявление в PJ не заменяет звонок в банк: только банк может попытаться срочно остановить или отозвать платёж.' }
      ]
    },
    {
      id: 'common-scams',
      title: 'Типичные схемы в Португалии в 2026',
      content: [
        { kind: 'checklist', items: [
          'MB WAY “comprador”: человек на OLX говорит, что переведёт деньги, но просит вас ввести номер телефона/код/“autorizar levantamento”. Итог — деньги списываются у вас.',
          'OLX / Facebook Marketplace courier scam: “DPD/CTT already paid, confirm card to receive”. Ссылка ведёт на fake payment page.',
          'Fake AIMA email/SMS: “regularização”, “agendamento”, “multa”, “taxa urgente”. Проверяйте домен, не платите по ссылкам из письма.',
          'Fake Finanças/Autoridade Tributária: “reembolso IRS”, “dívida fiscal”, “penhora”. Входите только через portal das Finanças вручную, не по SMS.',
          'Fake SNS/SNS24: “marcação”, “receita”, “multa consulta”. Не вводите dados bancários для медицинской записи.',
          'Revolut/crypto recovery scam: обещают вернуть украденное за аванс или “taxa legal”. Это почти всегда второй этап мошенничества.',
          'Rental scam: квартира в Lisboa/Porto/Algarve слишком дешёвая, landlord abroad, просит caução до просмотра и паспорт.',
          'Romance scam / sextortion: быстро переводят общение в WhatsApp/Telegram, затем просят деньги или шантажируют публикацией фото.'
        ] },
        { kind: 'paragraph', text: 'Правило: если вас торопят, пугают штрафом, просят código SMS, código MB WAY, Cartão Matriz, token банка, Chave Móvel Digital или фото ВНЖ/паспорта через мессенджер — прекращайте диалог и проверяйте через официальный сайт вручную.' }
      ]
    },
    {
      id: 'consumer',
      title: 'DECO, Livro de Reclamações и когда это не PJ',
      content: [
        { kind: 'paragraph', text: 'Не каждая онлайн-проблема — cybercrime. Если официальный магазин не доставил товар, спорит с гарантией, отказал в возврате или навязал услугу, сначала используйте consumer route: livro de reclamações eletrónico, apoio ao cliente, chargeback через банк, DECO PROteste или Centro de Arbitragem de Conflitos de Consumo.' },
        { kind: 'checklist', items: [
          'Есть настоящий продавец с NIF/NIPC, factura и адресом — начните с Livro de Reclamações eletrónico.',
          'Платили картой — откройте chargeback/contestação в банке с доказательствами.',
          'Платили MB WAY физлицу за товар с OLX и товар исчез — это уже похоже на burla, подавайте denúncia.',
          'Платили на IBAN компании — приложите factura, contrato, emails, tracking и reclamação.',
          'Если спор доходит до арбитража, проверьте компетентный Centro de Arbitragem по месту/сектору.',
          'DECO PROteste полезна для шаблонов жалоб и давления на компанию, но не заменяет полицию при преступлении.'
        ] },
        { kind: 'warning', text: 'Не отправляйте оригиналы документов “для проверки личности” продавцу с OLX/Facebook. Если уже отправили паспорт/ВНЖ/NIF, укажите это в заявлении: риск последующего кредита, SIM-swap или открытия аккаунтов на ваше имя.' }
      ]
    },
    {
      id: 'evidence',
      title: 'Как собрать доказательства, чтобы жалобу не развалили',
      content: [
        { kind: 'paragraph', text: 'Португальская полиция и банк работают быстрее, когда доказательства структурированы. Сделайте одну папку: 01_bank, 02_messages, 03_emails, 04_links, 05_documents, 06_timeline. Не редактируйте оригинальные файлы; копии можно переводить на русский для себя, но официально пригодятся оригиналы на PT/EN.' },
        { kind: 'checklist', items: [
          'Timeline в одном PDF: дата, время, действие, сумма, кто участвовал.',
          'Comprovativos банка: transaction ID, IBAN, entidade/referência, cartão, merchant name.',
          'Скриншоты с видимыми датой, временем, номером телефона и URL.',
          'Email в формате .eml/.msg плюс screenshot; заголовки email важнее красивого скрина.',
          'Ссылки сохраняйте как текст и через screenshot; мошеннические сайты быстро исчезают.',
          'Не связывайтесь с мошенником после подачи жалобы, если полиция не просит сохранить контакт.',
          'Если язык переписки русский/английский, приложите короткое резюме на португальском или английском.',
          'Храните оригиналы минимум до решения банка/страховой и закрытия расследования.'
        ] },
        { kind: 'paragraph', text: 'Мини-шаблон темы обращения: “Denúncia de burla informática / phishing — perda de [сумма] € — [банк/платформа] — [дата]”. В тексте: “Sou residente em Portugal, NIF [если есть], contacto [телефон/email]. Solicito registo da denúncia e investigação dos factos.”' }
      ]
    }
  ],
  costs: [
    { label: 'Сообщение инцидента в CNCS/CERT.PT', amountEUR: 0, note: 'Бесплатно; это не юридическое представительство и не возврат денег.' },
    { label: 'Подача denúncia/queixa в полицию', amountEUR: 0, note: 'Обычно бесплатно; расходы возможны только на адвоката, переводы или нотариальные копии, если они понадобятся.' },
    { label: 'Livro de Reclamações eletrónico', amountEUR: 0, note: 'Бесплатный официальный канал потребительской жалобы.' }
  ],
  sources: [
    {
      title: 'CNCS — Centro Nacional de Cibersegurança / CERT.PT',
      url: 'https://www.cncs.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Polícia Judiciária — criminalidade informática и контакты PJ',
      url: 'https://policiajudiciaria.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei do Cibercrime — Lei 109/2009',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/109-2009-489693',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações eletrónico — официальный портал жалоб потребителей',
      url: 'https://www.livroreclamacoes.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

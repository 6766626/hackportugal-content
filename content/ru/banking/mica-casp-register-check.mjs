export default {
  "editorialVoice": "hackportugal",
  "id": "mica-casp-register-check",
  "categoryId": "banking",
  "title": "MiCA: как проверить криптосервис перед переводом денег",
  "tldr": "С 01.07.2026 переходные периоды MiCA в ЕС завершены. Перед пополнением проверьте право конкретного юридического лица оказывать нужную услугу в Португалии. Старое национальное AML-регистрирование и известный бренд сами по себе этого не подтверждают.",
  "tags": [
    "mica",
    "крипто",
    "esma",
    "реестр"
  ],
  "estimatedReadMinutes": 4,
  "steps": [
    {
      "id": "entity",
      "title": "Найдите сторону договора",
      "content": [
        {
          "kind": "paragraph",
          "text": "Откройте условия аккаунта и выпишите юридическое название, страну и сайт обслуживающей компании. У одной группы могут быть разные компании для ЕС и других стран. Проверять нужно сторону вашего договора."
        }
      ]
    },
    {
      "id": "register",
      "title": "Проверьте официальный реестр",
      "content": [
        {
          "kind": "paragraph",
          "text": "На странице MiCA ESMA откройте список поставщиков криптоуслуг. Сопоставьте юридическое лицо, разрешённые услуги и сведения о прекращении разрешения. Уточните в реестре компетентного органа право на трансграничное обслуживание Португалии. ESMA предупреждает о задержке обновлений: отсутствие свежей записи требует уточнения у регулятора."
        }
      ]
    },
    {
      "id": "basis",
      "title": "Различайте правовые основания",
      "content": [
        {
          "kind": "paragraph",
          "text": "Статья 59 MiCA предусматривает авторизацию CASP по статье 63 либо право определённых регулируемых финансовых организаций работать по статье 60. Обещание «лицензия в процессе» не продлевает закончившийся переходный период."
        }
      ]
    },
    {
      "id": "migration",
      "title": "Если сервис меняет юридическое лицо",
      "content": [
        {
          "kind": "paragraph",
          "text": "Сохраните уведомление, историю операций и условия переноса активов. До согласия выясните, какое лицо станет стороной договора и какие услуги оно вправе оказывать. Перенос к другой компании внутри бренда не доказывает её полномочий."
        }
      ]
    },
    {
      "id": "decision",
      "title": "Перед пополнением",
      "content": [
        {
          "kind": "paragraph",
          "text": "Сохраните дату проверки и выписку из реестра. Если компания, домен или услуги не совпадают, сначала получите разъяснение через официальный канал регулятора. Этот гайд не утверждает лицензионный статус какой-либо отдельной биржи."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "ESMA — End of MiCA transitional periods, 17 April 2026",
      "url": "https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    },
    {
      "title": "ESMA — MiCA register and update frequency",
      "url": "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    },
    {
      "title": "MiCA — Article 59 authorisation",
      "url": "https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-59-authorisation",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    }
  ],
  "lastVerified": "2026-10-31",
  "verifyIntervalDays": 60,
  "premium": true,
  "recentlyChangedAt": "2026-10-31",
  "changeSummary": "Новый гайд: практическая проверка поставщика криптоуслуг после окончания переходных периодов MiCA."
}

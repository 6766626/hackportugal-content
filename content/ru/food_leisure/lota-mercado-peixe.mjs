export default {
  editorialVoice: 'hackportugal',
  id: 'lota-mercado-peixe',
  categoryId: 'food_leisure',
  title: 'Lota и mercado do peixe — где покупать свежую рыбу как местный',
  tldr: 'Самая свежая рыба в Португалии появляется рано утром после primeira venda в lota Docapesca: Cascais, Sesimbra, Peniche, Matosinhos, Olhão и др. Но lota — в основном оптовый аукцион для зарегистрированных покупателей, не всегда розница. Для обычной покупки идите в municipal mercado do peixe: Mercado 24 de Julho в Lisboa, Bolhão в Porto, рынки в Setúbal, Matosinhos, Olhão. Проверяйте сезон, tamanho mínimo и defeso: в запретные периоды вид легально не продают.',
  tags: ['peixe', 'lota', 'mercado', 'docapesca'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-lota',
      title: 'Что такое lota и почему туда едут рано 🐟',
      content: [
        { kind: 'paragraph', text: 'Lota — это место первой продажи рыбы, выгруженной рыбаками. В Португалии сетью основных lotas и postos управляет Docapesca. Рыба проходит взвешивание, контроль, маркировку и электронный аукцион primeira venda.' },
        { kind: 'paragraph', text: 'Важно: lota не равна “рыбный магазин”. Во многих местах покупают только зарегистрированные profissionais: peixeiros, рестораны, оптовики. Частному человеку могут не продать напрямую или продадут только в соседнем retail-павильоне, если он есть.' },
        { kind: 'checklist', items: [
          'Лучшее время: раннее утро, обычно после ночного/утреннего выхода лодок',
          'Понедельник часто слабее по выбору: часть флота не выходит в воскресенье',
          'После шторма выбор хуже и цены выше',
          'Самая “местная” рыба — та, что пришла в ближайший порт, а не импортная vitrine bonito',
          'Просите рыбу “amanhada” — почистить и выпотрошить',
          'Просите “escamada” — снять чешую',
          'Просите “em postas” — нарезать стейками',
          'Просите “filetes” — филе; не всякая рыба подходит без потерь'
        ] }
      ]
    },
    {
      id: 'where-to-go',
      title: 'Куда идти: lota или municipal mercado',
      content: [
        { kind: 'paragraph', text: 'Если вы не ресторан и не peixeiro, практичный маршрут такой: смотреть на Docapesca, где активный порт, а покупать в ближайшем municipal mercado do peixe или у проверенного peixeiro, который закупается на lota утром.' },
        { kind: 'checklist', items: [
          'Lisboa: Mercado 24 de Julho — классический рыбный рынок у Cais do Sodré; приходить утром',
          'Cascais: lota/Docapesca рядом с мариной; для обычной покупки чаще удобнее Mercado da Vila',
          'Sesimbra: сильный порт по peixe fresco; рынок и местные peixeiros хороши утром',
          'Setúbal: Mercado do Livramento — один из лучших рынков страны для рыбы и marisco',
          'Peniche: крупный рыболовный порт; хороший выбор sardinha, carapau, cavala, peixe de costa',
          'Matosinhos: lota Leixões/Matosinhos и Mercado Municipal de Matosinhos; много ресторанов закупаются рядом',
          'Porto: Mercado do Bolhão — удобнее для города, но не всегда дешевле порта',
          'Olhão: Mercado Municipal de Olhão — сильная точка Algarve, особенно утром у Ria Formosa'
        ] },
        { kind: 'warning', text: 'Не планируйте “купить прямо на аукционе”, если вы просто пришли с сумкой. Правила доступа, часы и возможность розничной продажи зависят от порта. Проверяйте конкретную lota на Docapesca или звоните заранее.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Как выбрать свежую рыбу без туристической переплаты',
      content: [
        { kind: 'paragraph', text: 'На португальском рынке свежесть важнее “дорогого вида”. Дешёвые carapau, cavala, sardinha или faneca в правильный день будут вкуснее уставшего robalo на витрине.' },
        { kind: 'checklist', items: [
          'Глаза: прозрачные и выпуклые, не мутные и впавшие',
          'Жабры: красные или розово-красные, без серо-коричневой слизи',
          'Запах: море и йод, не аммиак',
          'Кожа: блестящая, слизь прозрачная, чешуя держится',
          'Мясо: упругое; ямка от пальца быстро выравнивается',
          'Лёд: рыба должна лежать на льду, но не плавать в воде',
          'Ценник: ищите название вида, zona de captura/происхождение и цену за кг',
          'Размер: слишком мелкая рыба может быть ниже tamanho mínimo — легальный продавец такую не выставляет',
          'Очередь: если местные берут один и тот же ящик, обычно это хороший знак'
        ] },
        { kind: 'paragraph', text: 'Полезные фразы: “É de hoje?” — это сегодняшняя? “É da nossa costa?” — с нашего побережья? “Pode amanhar?” — можете почистить? “Quanto pesa mais ou menos?” — сколько примерно весит?' }
      ]
    },
    {
      id: 'season-and-defeso',
      title: 'Сезонность и defeso: почему не всё продаётся круглый год',
      content: [
        { kind: 'paragraph', text: 'Португальская рыба сезонная. Это не маркетинг: флот, квоты, биология вида, погода и временные запреты defeso реально меняют витрину. DGRM публикует правила промысла, ограничения, размеры и закрытые периоды.' },
        { kind: 'checklist', items: [
          'Sardinha: обычно лучший вкус летом; пик спроса — Santos Populares в июне, но доступность зависит от квот и научных рекомендаций',
          'Carapau: часто хорошее соотношение цена/качество, доступен значительную часть года',
          'Cavala: недорогая жирная рыба, хороша на гриле; часто недооценена иностранцами',
          'Dourada и robalo: часто aquicultura, то есть фермерские; это нормально, но спрашивайте происхождение',
          'Polvo: бывает локальный и импортный; цена сильно скачет',
          'Ameijoa, berbigão, conquilha: для bivalves важны санитарные зоны и закрытия; покупайте только у легальных продавцов',
          'Lampreia: сезонная история севера и центра, обычно зима-весна',
          'Bacalhau fresco — не португальская повседневная классика; традиционный bacalhau чаще солёно-сушёный и импортный'
        ] },
        { kind: 'warning', text: 'Defeso и tamanhos mínimos меняются по виду, зоне и году. Если вид “вдруг исчез” или стал дорогим, это может быть не заговор рынка, а легальный запрет, квота или шторм. Не покупайте рыбу “из багажника” без маркировки: особенно marisco и bivalves — риск отравления и штрафов.' }
      ]
    },
    {
      id: 'prices-and-etiquette',
      title: 'Цены, оплата и рыночный этикет',
      content: [
        { kind: 'paragraph', text: 'Цены на peixe fresco сильно зависят от порта, сезона и погоды. В туристических зонах рыба может быть в 1,5–2 раза дороже, чем на утреннем municipal mercado. Самое выгодное — покупать целую рыбу и просить её подготовить.' },
        { kind: 'checklist', items: [
          'Приходите до 10:00; к обеду лучший товар часто разобран',
          'Берите номерок senha, если рынок работает по очереди',
          'Не трогайте рыбу руками — показывайте продавцу',
          'Уточняйте цену до чистки: вес считают обычно до разделки',
          'Наличные полезны, но многие bancas принимают Multibanco или MB WAY',
          'Пакет со льдом просите, если ехать домой больше 30 минут',
          'Для гриля просите peixe para grelhar; для супа — peixe para caldeirada',
          'Если хотите бюджетно, спрашивайте “O que recomenda hoje mais em conta?”',
          'Не торгуйтесь агрессивно: на рынках чаще выбирают качеством и доверием, а не скидкой'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Sardinha / carapau / cavala на рынке', amountEURMin: 3, amountEURMax: 8, note: 'Ориентир за кг в удачный сезон; после шторма и в туристических местах выше' },
    { label: 'Dourada / robalo aquicultura', amountEURMin: 7, amountEURMax: 14, note: 'Ориентир за кг; дикая рыба обычно заметно дороже' },
    { label: 'Polvo', amountEURMin: 9, amountEURMax: 18, note: 'Ориентир за кг; локальный и крупный может стоить дороже' },
    { label: 'Чистка рыбы на рынке', amountEUR: 0, note: 'Обычно включена в цену, если покупаете у peixeiro; уточняйте до оплаты' }
  ],
  sources: [
    { title: 'Docapesca — сеть lotas, primeira venda и информация о портах', url: 'https://www.docapesca.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGRM — рыболовство, ограничения, defeso, tamanhos mínimos', url: 'https://www.dgrm.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGRM — avisos и правила по bivalves и зонам добычи', url: 'https://www.dgrm.pt/web/guest/pesca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Docapesca — lotas e postos de venda', url: 'https://www.docapesca.pt/pt/lotas-e-postos.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

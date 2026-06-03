export default {
  editorialVoice: 'hackportugal',
  id: 'coimbra',
  categoryId: 'travel_portugal',
  title: 'Coimbra — a universidade mais antiga de Portugal',
  tldr: 'Coimbra é uma cidade universitária no centro do país, a 1–2 h de Lisboa ou do Porto de comboio. Universidade de Coimbra (UNESCO, 1290), com a lendária Biblioteca Joanina. Ambiente de antiga academia, variante masculina do fado. 1 dia é suficiente.',
  tags: ['coimbra', 'universidade', 'excursão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'arrival',
      title: 'Como chegar',
      content: [
        { kind: 'checklist', items: [
          '🚆 Lisboa-Santa Apolónia/Oriente → Coimbra-B: 1 h 45 min, comboio AP, 20–28 €',
          '🚆 Porto-Campanhã → Coimbra-B: 1 h, 15–25 €',
          '🚆 De Coimbra-B (principal estação ferroviária interurbana) até Coimbra (centro) — comboio urbano, 6 min, 1,60 €',
          '🚌 Rede Expressos / FlixBus: 2–2,5 h, 10–15 €',
          '🚗 Carro: pela A1 Lisboa-Porto — 2 h a partir de Lisboa, 1,5 h a partir do Porto'
        ]}
      ]
    },
    {
      id: 'university',
      title: 'Universidade de Coimbra (UNESCO)',
      content: [
        { kind: 'paragraph', text: 'A principal atracção é a universidade mais antiga do país (1290), uma das mais antigas da Europa. Fica numa colina no centro da cidade. Bilhete combinado com a biblioteca — 14 €.' },
        { kind: 'checklist', items: [
          '📚 Biblioteca Joanina (1728) — biblioteca barroca com 60 000 volumes dos séculos XVI–XVIII. Morcegos especiais protegem os livros dos insectos! Sessões de 20 min',
          '🎓 Capela de São Miguel — capela universitária com órgão barroco',
          '🏛️ Paço das Escolas — pátio com monumento a D. João III, terraço com vista para o rio Mondego',
          '🗼 Torre da Universidade — torre sineira, subida 5 €',
          '🏛️ Museu da Ciência — colecções científicas dos séculos XVIII–XIX. 5 €',
          '🎓 Sala dos Capelos — principal sala das cerimónias de atribuição de graus'
        ]}
      ]
    },
    {
      id: 'old-city',
      title: 'Cidade velha',
      content: [
        { kind: 'checklist', items: [
          '⛪ Sé Velha — antiga catedral do século XII, estilo românico. 3 €',
          '⛪ Sé Nova — nova catedral do século XVI, barroca',
          '🏛️ Mosteiro de Santa Cruz — panteão real, túmulos dos primeiros reis Afonso I e Sancho I. 4 €',
          '🌳 Jardim Botânico da Universidade — um dos mais antigos da Europa (século XVIII), gratuito',
          '🏛️ Portagem / Parque Manuel Braga — marginal do Mondego, ponte de Santa Clara',
          '🛕 Mosteiro de Santa Clara-a-Velha — ruínas de um mosteiro gótico junto ao rio. 4 €',
          '🎨 Museu Nacional Machado de Castro — antigo paço episcopal e criptopórtico romano. 6 €'
        ]}
      ]
    },
    {
      id: 'academic-traditions',
      title: 'Tradições académicas',
      content: [
        { kind: 'paragraph', text: 'Os estudantes de Coimbra usam capas negras (capas e batinas) — uma tradição que vem do século XIII. Na primavera, em maio, realiza-se a Queima das Fitas, a festa dos finalistas: cortejos, concertos, canções.' },
        { kind: 'checklist', items: [
          '🎵 Fado de Coimbra — variante masculina do fado, interpretada apenas por homens de capa. É diferente do fado de Lisboa. Concertos no Fado ao Centro ou no ao Capricho',
          '🎓 Praxe — rituais estudantis de iniciação dos caloiros (setembro-outubro)',
          '🎪 Queima das Fitas — 8 dias em maio, concertos no parque de Santa Cruz',
          '🎭 Bar Académico — bares estudantis, mas é fácil entrar com passe'
        ]}
      ]
    },
    {
      id: 'nearby',
      title: 'Nas proximidades',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conímbriga (15 km) — ruínas da cidade romana mais bem preservada de Portugal (séculos I–III d. C.). Mosaicos, fórum, termas. 5 €',
          '🌲 Serra da Lousã (30 km) — montanhas com aldeias de xisto (Talasnal, Candal, Cerdeira)',
          '⛰️ Penela (30 km) — castelo medieval do século XII',
          '🏖️ Figueira da Foz (45 km) — estância balnear no oceano',
          '🌊 Aveiro (60 km) — a «Veneza portuguesa», canais'
        ]}
      ]
    },
    {
      id: 'food',
      title: 'O que provar',
      content: [
        { kind: 'checklist', items: [
          '🥩 Chanfana — cabrito em vinho tinto (prato regional)',
          '🥖 Pastéis de Tentúgal — massa estaladiça com creme (das freiras do século XVI)',
          '🧁 Pastéis de Santa Clara — bolos redondos com recheio doce de feijão',
          '🍷 Vinhos da Bairrada — espumantes e vinhos tintos da região vizinha',
          '🍸 Arraia — aperitivo local, muitas vezes com vinho do Porto',
          '🍖 Restaurante Zé Manel dos Ossos — tasca de culto desde 1967, carne e feijão'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Universidade de Coimbra — património UNESCO', url: 'https://www.uc.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Coimbra — turismo municipal', url: 'https://www.visitportugal.com/en/node/73754', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo do Centro — região', url: 'https://www.turismodocentro.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

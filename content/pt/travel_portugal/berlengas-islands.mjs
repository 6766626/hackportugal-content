export default {
  editorialVoice: 'hackportugal',
  id: 'berlengas-islands',
  categoryId: 'travel_portugal',
  title: 'Berlengas — reserva natural e ilha-fortaleza',
  tldr: 'Arquipélago das Berlengas — grupo de ilhas graníticas a 10 km de Peniche. Reserva da Biosfera da UNESCO. A ilha principal, Berlenga Grande, está aberta de maio a setembro, com limite de 550 visitantes por dia (reserva obrigatória). Na ilha: forte de São João Baptista (século XVII, é possível pernoitar nas “celas”), praias, mergulho, trekking, grutas marítimas. 45 min em lancha rápida, 1:15 em barco normal.',
  tags: ['berlengas', 'ilhas', 'peniche', 'natureza'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'booking',
      title: 'Reserva da visita — obrigatória',
      content: [
        { kind: 'paragraph', text: 'Desde 2011, o ICNF (Instituto da Conservação da Natureza e das Florestas) limita as visitas — 550 pessoas por dia na Berlenga Grande, para preservar o ecossistema.' },
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Reservar o acesso no ICNF', content: [
            { kind: 'paragraph', text: 'berlengaspass.icnf.pt (plataforma BerlengasPass) → escolher a data e o número de pessoas. É também aqui que se paga a taxa obrigatória de acesso/visita (~3 €/pessoa) — não é apenas uma reserva de data gratuita. O registo abre ≥ 30 dias antes da visita. Para julho-agosto, reserve no dia em que a janela abre: os lugares esgotam em poucas horas.' }
          ]},
          { id: 'b2', title: '2. Comprar o bilhete do barco', content: [
            { kind: 'checklist', items: [
              'Feeling Berlenga, Viamar, Julius Berlengas — principais operadores (estão no porto de Peniche)',
              'Lancha rápida: 22-28 € ida e volta, 45 min por trajecto',
              'Barco normal: 18-22 € ida e volta, 1 h 15 min por trajecto',
              'Horário de verão: partidas 9:30 / 11:00 / 14:30',
              'Regresso da ilha: 16:00 / 17:30',
              'Em caso de tempestade, as viagens são canceladas — devolvem-lhe o dinheiro ou remarcam a viagem'
            ]}
          ]},
          { id: 'b3', title: '3. No dia da viagem', content: [
            { kind: 'checklist', items: [
              'Chegar a Peniche 30 min antes',
              'Cais do Porto de Recreio (há um grande parque de estacionamento ao lado)',
              'Mostrar a reserva do ICNF em papel ou no telemóvel',
              'Comprar protector solar, água e snacks em Peniche (na ilha é caro e há pouca escolha)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'what-to-see',
      title: 'O que ver na Berlenga Grande',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: '🏰 Forte de São João Baptista', content: [
            { kind: 'paragraph', text: 'Construído em 1651 numa ilhota separada, ligada à ilha principal por uma ponte de pedra. É possível pernoitar na casa de hóspedes do forte (a partir de 40 €/noite, reserva com 6 meses de antecedência). A fotografia ao pôr do sol com a ponte é a imagem de marca do arquipélago.' }
          ]},
          { id: 'v2', title: '🏖️ Praia do Carreiro do Mosteiro', content: [
            { kind: 'paragraph', text: 'A única praia de areia. Água transparente, 18-22°C na época. Mergulho e snorkeling — água cristalina, muito peixe.' }
          ]},
          { id: 'v3', title: '🌊 Grutas marítimas + Furado Grande', content: [
            { kind: 'paragraph', text: 'Passeio num pequeno barco local (10-15 €, 45 min): dá a volta à ilha, entra na Gruta Azul, na Cova do Sonho e no enorme túnel Furado Grande. Pode reservar directamente com os pescadores na praia.' }
          ]},
          { id: 'v4', title: '🥾 Trekking', content: [
            { kind: 'paragraph', text: 'A única estrada do cais ao forte — 1,5 km a pé, trilho por rochas graníticas. Não há transporte na ilha. Percursos: até ao farol Duque de Bragança (ponto mais alto, 85 m), até ao Farol, trilho circular de 3 km.' }
          ]}
        ]}
      ]
    },
    {
      id: 'stay-overnight',
      title: 'Ficar a pernoitar',
      content: [
        { kind: 'checklist', items: [
          '🏰 Forte de São João Baptista — casa de hóspedes nas antigas celas monásticas. 40-60 €/noite. Reserva com 5 meses de antecedência',
          '🏕️ Campismo da Berlenga — campismo em tendas. 10-15 €/noite + taxa de desembarque. É necessário inscrever-se separadamente na janela do ICNF (10 lugares/noite)',
          '🐟 Há um restaurante, o Mar e Sol (especialidade da casa: caldeirada de peixe; ouriços-do-mar). 15-25 €/pessoa',
          '❌ Não há lojas, não há caixas Multibanco, não há rede móvel (às vezes apanha Vodafone)',
          '⚡ Electricidade apenas dos painéis solares do forte — das 18:00 às 23:00'
        ]}
      ]
    },
    {
      id: 'when-to-go',
      title: 'Quando é melhor ir',
      content: [
        { kind: 'checklist', items: [
          'Época: meados de maio — fim de setembro. Fora da época, os barcos não operam',
          'Tempo: julho-agosto — quente, mas com muitos turistas. Maio/junho e setembro — ideal',
          'Domingo — menos gente',
          'Tempestades na primavera = cancelamentos frequentes. Verifique a previsão meteorológica para Peniche',
          'O vento é muitas vezes forte — leve um corta-vento mesmo com calor',
          '☀️ Um dia nas Berlengas = 5-6 horas (chegada a partir das 11:00, regresso às 16:00-17:00)'
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          '⚠️ Tome um comprimido para o enjoo (Vertigin, Dramamine) 30 min antes da viagem — o barco abana',
          '🥤 Água 2 l/pessoa — na ilha 3 €/garrafa',
          '🐟 A pesca na ilha é proibida (reserva natural)',
          '🐦 Há gaivotas — comportam-se de forma agressiva se a comida estiver exposta; não as alimente',
          '🏊 Nadar apenas na zona assinalada — fora dela há correntes perigosas',
          '♻️ Leve o lixo consigo',
          '📷 Telemóvel num saco zip de plástico — salpicos do mar',
          '♿ Para pessoas com deficiência: o acesso às Berlengas é limitado, não há rampas'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Reserva ICNF', amountEUR: 0 },
    { label: 'Barco ida e volta (rápido)', amountEURMin: 22, amountEURMax: 28 },
    { label: 'Barco ida e volta (normal)', amountEURMin: 18, amountEURMax: 22 },
    { label: 'Passeio pelas grutas marítimas', amountEURMin: 10, amountEURMax: 15 },
    { label: 'Casa de hóspedes no forte', amountEURMin: 40, amountEURMax: 60, note: '€/noite' },
    { label: 'Campismo', amountEURMin: 10, amountEURMax: 15, note: '€/noite' }
  ],
  sources: [
    { title: 'BerlengasPass — ICNF (reserva oficial + taxa)', url: 'https://berlengaspass.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'ICNF — Reserva Natural das Berlengas', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Peniche — Berlengas', url: 'https://visitpeniche.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'hiking-trails',
  categoryId: 'travel_portugal',
  title: 'Hiking e trilhos ecológicos em Portugal — de um fim de semana a uma caminhada de vários dias',
  tldr: 'Em Portugal há mais de 300 trilhos marcados (PR, GR, levadas). Os mais populares: levadas na Madeira (350 km), Rota Vicentina no sudoeste do Alentejo (450 km), trilhos PR na Serra da Estrela, Gerês, Açores. Percursos curtos de um dia (3-15 km, PR) estão disponíveis em cada parque natural; os trilhos GR de vários dias estão assinalados com marcação vermelha e branca, com pernoita em albergues e casas rurais. A entrada é gratuita, mas alguns parques exigem registo online. Época: abril-outubro no continente; Madeira — todo o ano.',
  tags: ['hiking', 'trilhos ecológicos', 'trilhos', 'levadas'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'types',
      title: '🥾 Tipos de trilhos em Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: '🔴⚪ GR (Grande Rota) — de vários dias', content: [
            { kind: 'checklist', items: [
              '**Rota Vicentina** (GR 11) — 450 km do Cabo de São Vicente a Santiago do Cacém, sudoeste do Alentejo',
              '**Caminho Português de Santiago** (GR 1) — 5 rotas de Portugal até Santiago, em Espanha, 140-620 km',
              '**Rota do Guadiana** — ao longo do rio Guadiana, 65 km',
              '**GR 22 — Aldeias Históricas** — 540 km através de 12 aldeias históricas'
            ]}
          ]},
          { id: 't2', title: '🟡⚪ PR (Pequena Rota) — de um dia', content: [
            { kind: 'checklist', items: [
              'Percursos curtos de 3-15 km, normalmente circulares',
              'Marcados com o símbolo «PR» + número + nome do município',
              'Mais de 150 trilhos PR estão registados na FCMP (Federação de Campismo e Montanhismo)',
              'Aplicação **Trilhos de Portugal** — todos os trilhos PR com descrições e GPX',
              'GPX gratuitos em rededetrilhos.pt'
            ]}
          ]},
          { id: 't3', title: '💧 Levadas (Madeira) — algo único', content: [
            { kind: 'checklist', items: [
              'Levadas — canais de irrigação dos séculos XVI-XX, ao longo dos quais passam trilhos',
              '350 km de trilhos marcados',
              'De fáceis (planos) a difíceis (túneis, troços expostos)',
              '**Top 3**: Levada das 25 Fontes (11 km), Levada do Caldeirão Verde (12 km), Levada do Rei (9 km)',
              'Época: todo o ano',
              'Equipamento: botas antiderrapantes, lanterna (para túneis), roupa impermeável'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-regions',
      title: '🏔️ Principais regiões para hiking',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Serra da Estrela (centro)', content: [
            { kind: 'checklist', items: [
              'O maciço mais alto de Portugal continental (1 993 m, Torre)',
              'Neve no inverno, fresco no verão',
              '**Percurso de topo**: PR 1 MTG — Vale do Zêzere, 14 km, excelentes vistas',
              '**Lagoa Comprida** — percurso circular de 8 km',
              '**Covão d\'Ametade** — ponto de partida para muitos percursos curtos',
              'Onde ficar: Manteigas, Seia, Covilhã'
            ]}
          ]},
          { id: 'r2', title: 'Parque Nacional da Peneda-Gerês (noroeste)', content: [
            { kind: 'checklist', items: [
              'O único parque nacional de Portugal (desde 1971)',
              'Montanhas graníticas, cascatas, lobos, cavalos selvagens garrano',
              '**Trilho dos Currais** — 8 km através de pastagens',
              '**Cascata do Arado** — 3 km até à cascata',
              '**Miradouro da Pedra Bela** — percurso curto, mas com vistas impressionantes',
              'Onde ficar: aldeia do Gerês, Campo do Gerês (campismo)'
            ]}
          ]},
          { id: 'r3', title: 'Algarve — Rota Vicentina', content: [
            { kind: 'checklist', items: [
              '**Trilho dos Pescadores** — trilho costeiro, 230 km ao longo da costa sudoeste',
              '**Caminho Histórico** — percurso interior, 263 km através de aldeias',
              'Pode fazer secções diárias de 10-20 km e pernoitar em casas rurais',
              'Bonitas enseadas, menos turistas do que no Algarve meridional',
              'Melhor época: abril-junho, setembro-outubro'
            ]}
          ]},
          { id: 'r4', title: 'Açores — nove ilhas de carácter diferente', content: [
            { kind: 'checklist', items: [
              '**São Miguel**: Lagoa do Fogo, Sete Cidades, nascentes termais das Fumarolas',
              '**Pico**: subida à Pico Mountain (2 351 m) — o ponto mais alto de Portugal. Difícil, com guia, 7-9 horas',
              '**Flores**: «a mais verde» — cascatas, ravinas',
              '**Faial, Terceira** — paisagens vulcânicas',
              'Todos os trilhos têm marcação, GPX em trails.visitazores.com',
              'Há frequentemente vento e chuva — prepare-se'
            ]}
          ]},
          { id: 'r5', title: 'Sintra-Cascais Natural Park (perto de Lisboa)', content: [
            { kind: 'checklist', items: [
              '**Cabo da Roca** — ponto mais ocidental da Europa continental, trilhos costeiros',
              '**Serra de Sintra** — trilhos florestais através do Palácio Nacional da Pena',
              '**Praia do Guincho → Cabo da Roca** — 16 km, bonito percurso costeiro',
              'Perto de Lisboa = muitos turistas',
              'Conselho: começar às 7-8 da manhã para caminhar em silêncio'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'gear',
      title: '🎒 Equipamento e preparação',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Básico (para um PR de um dia)', content: [
            { kind: 'checklist', items: [
              'Botas ou calçado de trekking (não ténis urbanos)',
              'Mochila de 15-25 l',
              'Água: 1.5-2 l por pessoa',
              'Snacks, sanduíche',
              'Corta-vento (mesmo com sol — as condições podem mudar)',
              'SPF 50 + boné',
              'Telemóvel com o percurso GPX, power bank',
              'Bússola ou mapa offline (se não houver rede)'
            ]}
          ]},
          { id: 'g2', title: 'Para percursos de vários dias', content: [
            { kind: 'checklist', items: [
              'Mochila técnica de 40-50 l',
              'Saco-cama 0°C',
              'Colchonete',
              'Tenda (se fizer backpacking) ou reserva de albergue com antecedência',
              'Fogareiro + gás',
              'Kit de primeiros socorros',
              'Roupa ultraleve de muda',
              '*Não* levar gás para o fogareiro no avião — comprar no país'
            ]}
          ]},
          { id: 'g3', title: 'Onde comprar', content: [
            { kind: 'checklist', items: [
              '**Decathlon** (Lisboa, Porto e regiões) — preços acessíveis',
              '**Sport Zone** — saldos regulares',
              '**The North Face / Patagonia / Columbia** — Freeport outlet, Designer Outlet Algarve com descontos',
              '**Lojas locais de equipamento**: Trilhos do Guerreiro, Gerês Natura — especializadas'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Aplicações e recursos',
      content: [
        { kind: 'checklist', items: [
          '**Trilhos de Portugal** (aplicação oficial da FCMP) — mais de 150 PR com GPX',
          '**Wikiloc** — aplicação internacional, muitos trilhos em Portugal',
          '**AllTrails** — em inglês, prática para quem fala inglês',
          '**ViewRanger / Komoot** — europeias, detalhadas',
          '**Outdooractive** — percursos GR',
          '**trilhos.rededetrilhos.pt** — base oficial',
          '**Mapa Amarelo** — para Cabo Verde + Portugal (popular nos Açores)',
          'GPX + mapas offline — obrigatório! Nos parques, muitas vezes não há rede'
        ]}
      ]
    },
    {
      id: 'safety-wild',
      title: '⚠️ Segurança nas montanhas / florestas',
      content: [
        { kind: 'checklist', items: [
          '🚨 **Número de emergência 112**: funciona na maioria dos parques',
          '🐴 **Animais selvagens**: cavalos selvagens do Gerês, javalis, raposas, no Algarve — genetas. Não há perigo grave para pessoas',
          '🐍 **Cobras**: vípera seoanei é venenosa — raramente aparece, normalmente foge. Verifique as botas de manhã',
          '🔥 **Incêndios**: julho-setembro — risco elevado; nível vermelho = proibição em todos os trilhos abertos. Verificar em dgeg.gov.pt',
          '🥵 **Calor**: no verão, começar antes das 8 da manhã, terminar antes das 13. A diferença entre a manhã e o meio-dia é de 10°C',
          '🌨️ **No inverno na Serra da Estrela**: neve, gelo; não vá sem preparação',
          '📍 **Mapas offline**: descarregar com antecedência; nas montanhas de Portugal, muitas vezes não há rede',
          '👥 **Não caminhe sozinho** em percursos longos; informe alguém do seu plano',
          '🦵 **Calçado**: 80% dos problemas no trilho vêm de calçado inadequado; é fácil torcer o tornozelo em terreno pedregoso'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Entrada nos parques (NP Gerês, Estrela)', amountEUR: 0 },
    { label: 'Alguns trilhos privados / propriedades vinícolas', amountEURMin: 5, amountEURMax: 20 },
    { label: 'Albergue (noite)', amountEURMin: 15, amountEURMax: 35 },
    { label: 'Casa rural (1 noite)', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Equipamento básico (se começar do zero)', amountEURMin: 200, amountEURMax: 600 }
  ],
  sources: [
    { title: 'Federação Portuguesa de Campismo e Montanhismo', url: 'https://fcmportugal.com/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rede de Trilhos', url: 'https://rededetrilhos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — Parques e Reservas', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rota Vicentina', url: 'https://rotavicentina.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Visit Madeira Levadas', url: 'https://www.visitmadeira.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'carta-navegador-recreio',
  categoryId: 'food_leisure',
  title: 'Carta de capitão de embarcação de recreio — categorias e formação (Carta de Navegador de Recreio)',
  tldr: 'A Carta de Navegador de Recreio é a licença oficial de capitão para governar uma embarcação de recreio privada. Categorias: MARINHEIRO (até 5 milhas, motor até 30 kW), PATRÃO LOCAL (até 12 milhas, até 50 kW), PATRÃO COSTEIRO (até 25 milhas), PATRÃO ALTO MAR (sem limitações). Idade mínima: 16 anos para Marinheiro, 18 para Patrão. Formação em escolas acreditadas: 30–100 horas, exame na Capitania do Porto, teoria e prática. Custo: aproximadamente 250–1 500 € consoante a categoria. Cartas estrangeiras (RYA Day Skipper, ICC, ASA) podem ser convertidas através da AMN (administração marítima portuguesa) com exame simplificado.',
  tags: ['carta', 'navegador', 'capitão', 'amn', 'curso'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando é necessária a Carta — motor/dimensão',
      content: [
        { kind: 'paragraph', text: 'A licença de capitão não é necessária para todas as embarcações. Regras básicas por potência do motor e dimensão:' },
        { kind: 'checklist', items: [
          'Sem carta: apenas embarcações com motor ≤ 4,5 kW (~6 cv) e comprimento ≤ 7 m',
          'MARINHEIRO: motor até 30 kW (~40 cv) ou vela, até 5 milhas da costa',
          'PATRÃO LOCAL: motor até 50 kW (~67 cv), até 12 milhas',
          'PATRÃO COSTEIRO: sem limites de potência, até 25 milhas',
          'PATRÃO ALTO MAR: sem limites de potência e de distância',
          'Mota de água: é necessária uma Carta para motas de água separada — curso simplificado'
        ] },
        { kind: 'paragraph', text: 'Classes de navegação: Local (área local de navegação), Costeira (área costeira), Largo (alto mar).' },
        { kind: 'warning', text: 'Empresas de aluguer no Algarve e em Cascais dizem muitas vezes: «leve uma lancha de 5 m sem carta». Verifique o motor: se tiver mais de 4,5 kW — é necessária pelo menos a Marinheiro. Caso contrário, a empresa de charter arrisca uma coima e você pode perder a cobertura do seguro em caso de incidente.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos para obter',
      content: [
        { kind: 'checklist', items: [
          'Mínimo de 16 anos (Marinheiro) ou 18 anos (Patrão)',
          'Atestado médico de aptidão para governar embarcações (30–50 €)',
          'Saber nadar: 50 m sem parar sob supervisão (para todas as categorias)',
          'Não há restrições de visto: estrangeiros podem obter a carta em igualdade com os portugueses',
          'NIF (número fiscal) e Cartão de Cidadão ou passaporte + comprovativo de morada',
          'Curso numa escola acreditada pela AMN'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Formação: onde e como',
      content: [
        { kind: 'paragraph', text: 'Consulte a lista de escolas acreditadas em amn.pt → Carta de Navegador → Escolas. Há mais escolas em Cascais, Lisboa, Setúbal, Vilamoura, Sesimbra, Porto.' },
        { kind: 'checklist', items: [
          'MARINHEIRO: 30–40 horas (teoria + ~10 horas de prática), ~250–400 €',
          'PATRÃO LOCAL: ~50 horas, ~400–600 €',
          'PATRÃO COSTEIRO: ~80 horas, ~600–1000 €',
          'PATRÃO ALTO MAR: mais de 100 horas, ~1000–1500 € + prática marítima de ~200 milhas',
          'Mota de água: ~16 horas, ~150–250 €',
          'Programa: fundamentos de navegação, Regras Internacionais para Evitar Abalroamentos no Mar (COLREGS), radiocomunicações VHF (base), meteorologia, segurança, prevenção e actuação em caso de emergência'
        ] },
        { kind: 'paragraph', text: 'Escolas populares: Sea Boat Academy (Cascais), Náutica Escola (Lisboa), Escola de Vela do Sport Club do Porto, Yacht Master Algarve. A CMI e outras organizações internacionais também realizam cursos.' }
      ]
    },
    {
      id: 'exam',
      title: 'Exame e obtenção da Carta',
      content: [
        { kind: 'paragraph', text: 'O exame realiza-se na Capitania do Porto:' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Marcação do exame',
            content: [
              { kind: 'paragraph', text: 'A escola apresenta o pedido em seu nome. Em alternativa, pode inscrever-se directamente através da AMN. A espera é normalmente de 2–6 semanas.' }
            ]
          },
          {
            id: 's2',
            title: 'Exame teórico',
            content: [
              { kind: 'paragraph', text: 'Teste com ~30–50 perguntas, consoante a categoria. Temas: COLREGS (regras de cruzamento e prioridade), trabalho com cartas náuticas, meteorologia, segurança, equipamento obrigatório. Nota mínima de aprovação — 70–75%.' }
            ]
          },
          {
            id: 's3',
            title: 'Exame prático',
            content: [
              { kind: 'paragraph', text: 'Para categorias Patrão e superiores. É necessário demonstrar: atracação ao cais, «homem ao mar», utilização de rádio VHF, trabalho com GPS, navegação por bússola.' }
            ]
          },
          {
            id: 's4',
            title: 'Obtenção da Carta',
            content: [
              { kind: 'checklist', items: [
                'Disponibilidade: aproximadamente em 2–4 semanas',
                'Pode ser levantada na Capitania ou recebida por correio',
                'Válida até aos 70 anos; depois, exame médico de 5 em 5 anos',
                'Cartão de plástico, como a carta de condução'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'foreign-conversion',
      title: 'Conversão de cartas estrangeiras',
      content: [
        { kind: 'paragraph', text: 'Se já tiver uma carta de capitão estrangeira, muitas podem ser convertidas através da AMN, normalmente com um exame simplificado.' },
        { kind: 'checklist', items: [
          'RYA Day Skipper (UK) → normalmente é convertida em Patrão Costeiro com exame teórico',
          'RYA Yachtmaster Coastal/Offshore → Patrão Alto Mar',
          'ICC (International Certificate of Competence) → Patrão Local ou Costeiro, consoante as anotações',
          'ASA (US) Bareboat Cruising 104+ → regra geral, é convertida',
          'Licença russa de condutor de embarcação → na maioria dos casos exige novo exame; por vezes é mais simples fazer o curso de raiz',
          'Licença ucraniana para governar pequenas embarcações → novo exame teórico',
          'Habilitação Náutica brasileira → processo simplificado ao abrigo de acordos CPLP'
        ] },
        { kind: 'paragraph', text: 'Documentos para a conversão:' },
        { kind: 'checklist', items: [
          'Original da carta estrangeira + tradução juramentada para português',
          'Diário de bordo/registos de navegação (logbook) — recomendável',
          'Atestado médico',
          'Pedido à AMN com indicação da categoria pretendida',
          'Custo: 100–300 € + exame simplificado'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          'Quer apenas dar uma volta de lancha com amigos na baía de Lisboa — tire a Marinheiro. Algumas semanas de curso, ~300 €',
          'Planeia alugar uma embarcação no Algarve / na Madeira / nos Açores — considere a Patrão Local: sem ela, muitas empresas não alugam embarcações',
          'Para oceano e travessias entre ilhas dos Açores — no mínimo Patrão Costeiro',
          'Os cursos CMI (internacionais) muitas vezes dão tanto a Carta portuguesa como o ICC',
          'Escolas em Cascais e Vilamoura dão formação em inglês e, no final, emitem a Carta portuguesa',
          'Melhor altura para se inscrever: Outubro–Março (época baixa e preços mais baixos)',
          'Não compre uma embarcação antes de obter a Carta — não haverá quem a possa governar',
          'Tenha em conta as taxas de estacionamento em marinas: em Cascais ~30 €/dia, em Lagos ~25 €, em Vilamoura ~50 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Curso MARINHEIRO', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Curso PATRÃO LOCAL', amountEURMin: 400, amountEURMax: 600 },
    { label: 'Curso PATRÃO COSTEIRO', amountEURMin: 600, amountEURMax: 1000 },
    { label: 'Curso PATRÃO ALTO MAR', amountEURMin: 1000, amountEURMax: 1500 },
    { label: 'Curso: mota de água', amountEURMin: 150, amountEURMax: 250 },
    { label: 'Exame na Capitania', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Conversão de cartas estrangeiras', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Exame médico para a Carta', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Novo exame médico (após os 70 anos, de 5 em 5 anos)', amountEUR: 30 }
  ],
  sources: [
    { title: 'AMN — Carta de Navegador de Recreio', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'AMN — escolas reconhecidas', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 124/2004 — embarcações de recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/124-2004-220127', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 568/89 — categorias e formação', url: 'https://dre.pt/dre/detalhe/portaria/568-1989-580367', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'carta-navegador-recreio',
  categoryId: 'food_leisure',
  title: 'Carta de Navegador de Recreio — categorias e formação',
  tldr: 'Carta de Navegador de Recreio — certificação oficial de capitão para operar embarcação de recreio privada. Categorias: MARINHEIRO (até 5 milhas, motor até 30 kW), PATRÃO LOCAL (até 12 milhas, até 50 kW), PATRÃO COSTEIRO (até 25 milhas), PATRÃO ALTO MAR (sem limites). Idade mínima: 16 anos para Marinheiro, 18 para Patrão. Formação em escolas acreditadas: 30–100 horas, exame na Capitania do Porto, teoria e prática. Custo: cerca de 250–1 500 € consoante a categoria. Títulos estrangeiros (RYA Day Skipper, ICC, ASA) podem ser convertidos via AMN (administração marítima de Portugal) com exame simplificado.',
  tags: ['carta', 'navegador', 'capitão', 'amn', 'curso'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando é necessária a Carta — motor/tamanho',
      content: [
        { kind: 'paragraph', text: 'A carta de capitão não é necessária para todas as embarcações. Regras base quanto à potência do motor e ao tamanho:' },
        { kind: 'checklist', items: [
          'Sem carta: apenas embarcações com motor ≤ 4,5 kW (~6 cv) e comprimento ≤ 7 m',
          'MARINHEIRO: motor até 30 kW (~40 cv) ou vela, até 5 milhas da costa',
          'PATRÃO LOCAL: motor até 50 kW (~67 cv), até 12 milhas',
          'PATRÃO COSTEIRO: sem limitações de potência, até 25 milhas',
          'PATRÃO ALTO MAR: sem limitações de potência e distância',
          'Mota de água (jet ski): é necessária Carta específica para motas de água — curso simplificado'
        ] },
        { kind: 'paragraph', text: 'Áreas de navegação: Local (zona local), Costeira (zona costeira), Largo (alto-mar).' },
        { kind: 'warning', text: 'No Algarve e em Cascais, as empresas de aluguer por vezes dizem: «leve um barco a motor de 5 m sem carta». Verifique o motor: se for superior a 4,5 kW — precisa de, pelo menos, Marinheiro. Caso contrário, a empresa de charter arrisca coima e você pode perder o seguro em caso de incidente.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos para obtenção',
      content: [
        { kind: 'checklist', items: [
          'Mínimo 16 anos (Marinheiro) ou 18 anos (Patrão)',
          'Atestado médico de aptidão para condução de embarcação (30–50 €)',
          'Saber nadar: 50 m sem parar sob supervisão (para todas as categorias)',
          'Sem restrições de visto: estrangeiros podem obter em igualdade com portugueses',
          'NIF (número de contribuinte) e Cartão de Cidadão ou passaporte + comprovativo de morada',
          'Curso numa escola acreditada pela AMN'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Formação: onde e como',
      content: [
        { kind: 'paragraph', text: 'Consulte a lista de escolas acreditadas em amn.pt → Carta de Navegador → Escolas. Há mais escolas em Cascais, Lisboa, Setúbal, Vilamoura, Sesimbra e Porto.' },
        { kind: 'checklist', items: [
          'MARINHEIRO: 30–40 horas (teoria + ~10 horas de prática), ~250–400 €',
          'PATRÃO LOCAL: ~50 horas, ~400–600 €',
          'PATRÃO COSTEIRO: ~80 horas, ~600–1000 €',
          'PATRÃO ALTO MAR: 100+ horas, ~1000–1500 € + prática de mar ~200 milhas',
          'Mota de água: ~16 horas, ~150–250 €',
          'Programa: bases de navegação, Regulamento Internacional para Evitar Abalroamentos (COLREGs), radiocomunicações VHF (básico), meteorologia, segurança, prevenção e resposta a emergências'
        ] },
        { kind: 'paragraph', text: 'Escolas populares: Sea Boat Academy (Cascais), Náutica Escola (Lisboa), Escola de Vela do Sport Club do Porto, Yacht Master Algarve. A CMI e outras organizações internacionais também oferecem cursos.' }
      ]
    },
    {
      id: 'exam',
      title: 'Exame e obtenção da Carta',
      content: [
        { kind: 'paragraph', text: 'O exame realiza-se na Capitania do Porto (capitania do porto):' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Inscrição no exame',
            content: [
              { kind: 'paragraph', text: 'A escola apresenta a candidatura em seu nome. Em alternativa, pode inscrever-se diretamente através da AMN. A espera é normalmente de 2–6 semanas.' }
            ]
          },
          {
            id: 's2',
            title: 'Exame teórico',
            content: [
              { kind: 'paragraph', text: 'Teste com ~30–50 perguntas, consoante a categoria. Tópicos: COLREGs (regras de afastamento), trabalho com cartas, meteorologia, segurança, equipamentos obrigatórios. Nota mínima de aprovação — 70–75%.' }
            ]
          },
          {
            id: 's3',
            title: 'Exame prático',
            content: [
              { kind: 'paragraph', text: 'Para as categorias Patrão e superiores. Deve demonstrar: atracação ao cais, “homem ao mar”, utilização de rádio VHF, uso de GPS, navegação por bússola.' }
            ]
          },
          {
            id: 's4',
            title: 'Receber a Carta',
            content: [
              { kind: 'checklist', items: [
                'Disponível: aproximadamente em 2–4 semanas',
                'Pode levantar na Capitania ou receber por correio',
                'Válida até aos 70 anos; depois, exame médico a cada 5 anos',
                'Cartão plástico, como a carta de condução'
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
        { kind: 'paragraph', text: 'Se já possui uma carta de capitão estrangeira, muitas podem ser convertidas via AMN, normalmente com exame simplificado.' },
        { kind: 'checklist', items: [
          'RYA Day Skipper (UK) → normalmente convertido em Patrão Costeiro com exame teórico',
          'RYA Yachtmaster Coastal/Offshore → Patrão Alto Mar',
          'ICC (International Certificate of Competence) → Patrão Local ou Costeiro, consoante as anotações',
          'ASA (EUA) Bareboat Cruising 104+ → regra geral convertido',
          'Documento da Federação Russa "Udostoverenie sudovoditelya" → frequentemente exige reexame; por vezes é mais simples fazer o curso de raiz',
          'Documento da Ucrânia "Posvidchennia na pravo keruvannia malym sudnom" → reexame teórico',
          'Brasil "Habilitação Náutica" → processo simplificado no âmbito dos acordos CPLP'
        ] },
        { kind: 'paragraph', text: 'Documentos para conversão:' },
        { kind: 'checklist', items: [
          'Original da carta estrangeira + tradução certificada para português',
          'Diário/Logbook de navegação — recomendável',
          'Atestado médico',
          'Requerimento à AMN indicando a categoria pretendida',
          'Custo: 100–300 € + exame simplificado'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          'Quer apenas passear de barco com amigos na baía de Lisboa — faça Marinheiro. Duas semanas de curso, ~300 €',
          'Se planeia alugar barco no Algarve / na Madeira / nos Açores — opte por Patrão Local: sem ele muitas empresas não alugam embarcações',
          'Para o oceano e travessias entre ilhas dos Açores — mínimo Patrão Costeiro',
          'Cursos CMI (internacionais) muitas vezes atribuem a Carta portuguesa e o ICC',
          'Escolas em Cascais e Vilamoura dão formação em inglês e, no final, emitem a Carta portuguesa',
          'Melhor altura para se inscrever: outubro–março (época baixa e preços mais baixos)',
          'Não compre o barco antes de obter a Carta — não terá quem o opere',
          'Considere as taxas de marina: em Cascais ~30 €/dia, em Lagos ~25 €, em Vilamoura ~50 €'
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
    { label: 'Reexame médico (após os 70 anos, a cada 5 anos)', amountEUR: 30 }
  ],
  sources: [
    { title: 'AMN — Carta de Navegador de Recreio', url: 'https://www.amn.pt/DGAM/Paginas/CartasdeNavegador.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'AMN — escolas reconhecidas', url: 'https://www.amn.pt/DGAM/Paginas/EscolasReconhecidas.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 124/2004 — embarcações de recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/124-2004-220127', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 568/89 — categorias e formação', url: 'https://dre.pt/dre/detalhe/portaria/568-1989-580367', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'traffic-fines',
  categoryId: 'auto_trips',
  title: 'Multas de trânsito em Portugal — tipos, pontos, contestação',
  tldr: 'As multas da ANSR (Autoridade Nacional de Segurança Rodoviária) dividem-se em leves, graves e muito graves. O condutor tem 12 pontos no sistema «carta por pontos» — são subtraídos por infrações. Com 0 pontos — cassação do título. No prazo de 15 dias úteis após a notificação, normalmente é possível pagar voluntariamente o **valor mínimo da coima** (não é um «desconto de 50%»). Defesa/contestação — no prazo de 15 dias úteis, para o endereço/segundo o procedimento indicado na notificação.',
  tags: ['multa', 'código da estrada', 'ansr', 'pontos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Classificação das multas',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Leve', content: [
            { kind: 'checklist', items: [
              '60–300 € para pessoa singular, 300–1500 € para pessoa coletiva',
              'Exemplo: não utilização do cinto de segurança, atravessamento de linha longitudinal, não dar passagem a peão',
              'Sem subtração de pontos'
            ]}
          ]},
          { id: 't2', title: 'Grave', content: [
            { kind: 'checklist', items: [
              '120–600 € (intervalo típico; depende da infração)',
              'Normalmente **−2 pontos**; para grave por álcool — −3 pontos',
              'Exemplo: excesso de velocidade de 30–60 km/h em autoestrada, atravessamento de linha contínua, ultrapassagem numa passadeira'
            ]}
          ]},
          { id: 't3', title: 'Muito Grave', content: [
            { kind: 'checklist', items: [
              '500–2500 € (intervalo típico)',
              'Normalmente **−4 pontos**; em muito grave por álcool/drogas — −5; em crime rodoviário — −6',
              'Exemplo: excesso de velocidade superior a 60 km/h, condução em estado de embriaguez, circulação na faixa contrária, passagem com sinal vermelho',
              'Pode haver inibição de conduzir até 2 anos'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'points',
      title: 'Carta por pontos — 12 pontos',
      content: [
        { kind: 'paragraph', text: 'A carta por pontos está em vigor desde 01.06.2016. Cada condutor tem 12 pontos, que são subtraídos em caso de infrações. Os pontos são repostos automaticamente: +1 por cada 3 anos sem infrações.' },
        { kind: 'checklist', items: [
          '⬇️ Subtração de pontos: por crimes rodoviários (crime rodoviário) — −6; por contraordenações muito grave — −4 (−5 para alcohol/drugs); por grave — −2 (−3 para alcohol). Não existe um «aviso» formal aos 9 pontos',
          '⬇️ Com 5 ou 4 pontos — **ação de formação de segurança rodoviária** obrigatória',
          '⬇️ Com 3, 2 ou 1 ponto — **exame teórico** obrigatório',
          '⬇️ Com 0 pontos — **cassação da carta**; só é possível obter novo título de condução após o prazo previsto na lei e o cumprimento dos requisitos',
          '📅 Os pontos são repostos: +1 por 3 anos sem infrações',
          '✅ Curso de aperfeiçoamento — permite recuperar 4 pontos 1 vez a cada 5 anos'
        ]}
      ]
    },
    {
      id: 'speeding',
      title: 'Multas por excesso de velocidade',
      content: [
        { kind: 'paragraph', text: 'Segundo as regras: cidade — 50 km/h, fora das localidades — 90 km/h, autoestrada — 120 km/h. A calibração/tolerâncias dos radares e câmaras são reguladas por regras específicas do IPQ/ANSR; conte com uma margem de pelo menos 7%, mas a divergência admissível concreta depende do tipo de medição. Multas:' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Até 20 km/h na cidade / 30 km/h fora das localidades — Leve', content: [
            { kind: 'paragraph', text: '60–300 €, sem subtração de pontos' }
          ]},
          { id: 's2', title: '20–40 / 30–60 km/h — Grave', content: [
            { kind: 'paragraph', text: '120–600 €, normalmente −2 pontos, possível inibição de conduzir por 1–6 meses' }
          ]},
          { id: 's3', title: '40–60 / 60–80 km/h — Muito Grave', content: [
            { kind: 'paragraph', text: '300–1500 €, normalmente −4 pontos, inibição de conduzir por 2–24 meses' }
          ]},
          { id: 's4', title: '> 60 / > 80 km/h — Muito Grave', content: [
            { kind: 'paragraph', text: '500–2500 €, normalmente −4 pontos, inibição de conduzir por 2–24 meses' }
          ]}
        ]}
      ]
    },
    {
      id: 'alcohol',
      title: 'Álcool e drogas',
      content: [
        { kind: 'checklist', items: [
          '🍺 > 0.5 g/l, com carta há menos de 2 anos — > 0.2 g/l: Grave — 250–1250 €, −3 pontos, inibição de conduzir por 1–12 meses',
          '🥃 > 0.8 g/l: Muito Grave — 500–2500 €, −4 pontos, inibição de conduzir por 2–12 meses',
          '🍾 > 1.2 g/l: processo-crime — até 1 ano de prisão ou multa, −6 pontos, inibição de conduzir por 3–24 meses',
          '💊 Drogas: muito grave, normalmente 500–2500 €, −5 pontos, inibição de 2 meses–2 anos; a responsabilidade criminal é possível se for provada incapacidade de conduzir em segurança',
          '🚨 Recusar/evitar a fiscalização ou abandonar o local de um acidente pode implicar consequências administrativas/criminais graves; não existe «0 pontos imediatamente» automático como regra geral'
        ]}
      ]
    },
    {
      id: 'payment',
      title: 'Pagamento da multa',
      content: [
        { kind: 'checklist', items: [
          '📬 Recebeu uma carta Auto de Contra-Ordenação com referência',
          '✂️ Pagamento voluntário: no pagamento voluntário dentro do prazo estabelecido (normalmente 15 dias úteis após a notificação), paga-se o **valor mínimo** da coima, e não um «desconto de 50%». O valor mínimo concreto está indicado na notificação',
          '💳 Formas: ANSR online, Portal das Finanças, Multibanco, CTT/Payshop',
          '📅 Prazo para pagamento integral — 30 dias após a notificação',
          '⏰ Atraso — +30 %, depois processo judicial',
          '💸 Dívida > 50 € — bloqueia a IPO e a venda do automóvel'
        ]}
      ]
    },
    {
      id: 'appeal',
      title: 'Contestação',
      content: [
        { kind: 'checklist', items: [
          '📝 **Defesa/contestação administrativa** no prazo de 15 dias úteis a contar da data da notificação, segundo o procedimento e para o endereço indicados no auto/notificação',
          '📬 Endereço e procedimento: ANSR / GNR / PSP — indicado no próprio auto',
          '📸 Provas: testemunhas, vídeo de câmara de bordo, fotografias de sinais',
          '🏛️ Primeiro, a ANSR/o órgão competente analisa a defesa e profere decisão. Se a decisão for desfavorável — recurso para tribunal dentro do prazo estabelecido; o tribunal competente depende da comarca',
          '⚖️ Pague apenas após a decisão final, se esta for desfavorável',
          '⚠️ Se perder em tribunal — acrescem custas judiciais (~50–200 €)'
        ]},
        { kind: 'warning', text: 'Se não contestar e não pagar — a multa torna-se título executivo. A cobrança pode incidir sobre o salário, IBAN ou bens penhorados.' }
      ]
    }
  ],
  costs: [
    { label: 'Multa Leve', amountEURMin: 60, amountEURMax: 300 },
    { label: 'Multa Grave', amountEURMin: 120, amountEURMax: 600 },
    { label: 'Multa Muito Grave', amountEURMin: 500, amountEURMax: 2500 },
    { label: 'Pagamento voluntário (valor mínimo da coima)', amountEUR: 0, note: 'no pagamento voluntário dentro do prazo estabelecido, paga-se o valor mínimo indicado na notificação' }
  ],
  sources: [
    { title: 'Código da Estrada', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pagar coima de trânsito', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pagar-coimas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'imt-theory-practice-exam',
  categoryId: 'driving_license',
  title: 'Obter a carta de condução do zero — teoria e prática no IMT',
  tldr: 'Se não tem uma carta de condução válida ou se a carta do seu país não pode ser trocada sem exame (Federação Russa, BY e outros sem acordo bilateral) — tem de fazer os exames em Portugal. Através de uma escola de condução (escola de condução): 32 horas de teoria + 32 horas de prática (categoria B), tarifa da escola de condução 600–1200 € + 70 € de taxa administrativa do IMT. A teoria é feita no IMT, a prática — num veículo de instrução. O teste É EM PORTUGUÊS — a versão em inglês passou a estar disponível de forma regular a partir de 2024.',
  tags: ['carta de condução', 'imt', 'exame', 'teoria', 'escola de condução', 'categoria b'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'who',
      title: '👤 Para quem isto é necessário',
      content: [
        { kind: 'paragraph', text: 'A realização completa dos exames (não a troca) é necessária se:' },
        { kind: 'checklist', items: [
          '🚫 Não tem carta de condução ou a sua validade expirou há mais de 5 anos',
          '🚫 O seu país — Federação Russa, Bielorrússia, Turquemenistão e outros — NÃO tem acordo bilateral com Portugal',
          '🚫 Vive em Portugal há muito tempo (>2 anos) e não fez a troca dentro do prazo',
          '🚫 Quer obter uma nova categoria (mota A, camião C, autocarro D)',
          '✅ Alternativa para UE/CPLP/UA/KZ/MD/RS/CN: veja o guia «Troca de carta de condução»'
        ]}
      ]
    },
    {
      id: 'choose-school',
      title: '🏫 Passo 1. Escolher uma escola de condução',
      content: [
        { kind: 'paragraph', text: 'Não é possível treinar no IMT — a formação tem obrigatoriamente de ser feita através de uma escola de condução certificada (escola de condução).' },
        { kind: 'checklist', items: [
          '📜 Lista de escolas — em anec.pt (Associação Nacional de Escolas de Condução)',
          '💰 Preços: categoria B — 600–1200 € (Lisboa/Porto é mais caro), 350–600 € em cidades pequenas',
          '🌐 Inglês: algumas escolas em Lisboa/Porto/Algarve dão formação em inglês (confirme ao reservar)',
          '🇷🇺 Russo: 1–2 escolas em Lisboa/Cascais (no grupo de Facebook «Russos em Portugal» pode pedir recomendações)',
          '📚 O instrutor de teoria e de prática pode ser o mesmo ou podem ser diferentes',
          '⏱️ Duração: normalmente 2–3 meses desde o início até ao exame'
        ]}
      ]
    },
    {
      id: 'theory',
      title: '📖 Passo 2. Teoria — 32 horas + exame',
      content: [
        { kind: 'paragraph', text: 'O curso teórico é obrigatório — 32 h de aulas + estudo autónomo em casa. Sem isso, não será admitido ao exame.' },
        { kind: 'substeps', items: [
          { id: 't1', title: 'O que se estuda', content: [
            { kind: 'checklist', items: [
              '🛑 Regras de trânsito (Código da Estrada)',
              '🚦 Sinais e marcações rodoviárias',
              '🚙 Funcionamento do veículo (conhecimentos básicos)',
              '🚑 Primeiros socorros, acidentes, situações de emergência',
              '⚖️ Responsabilidade do condutor, coimas, seguro'
            ]}
          ]},
          { id: 't2', title: 'Exame de teoria', content: [
            { kind: 'checklist', items: [
              '📍 É feito no IMT (centros em Lisboa, Porto, Faro, Coimbra e outros)',
              '🖥️ No computador, 30 perguntas de escolha múltipla',
              '✅ Nota de aprovação — mínimo 27/30',
              '⏱️ 30 minutos para o teste',
              '🌐 Língua: português (por defeito), inglês (disponível desde 2024 na maioria dos centros)',
              '💰 Taxa do IMT: 28 €',
              '🔁 Se reprovar: repetição após 3 semanas, taxa de 28 €',
              '📚 A base de perguntas é pública — antes do exame, resolva testes através de test-codigodaestrada.pt ou aplicações'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'practice',
      title: '🚗 Passo 3. Prática — 32 horas + exame',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Aulas de prática', content: [
            { kind: 'checklist', items: [
              '⏱️ 32 horas de formação obrigatória com instrutor',
              '🚙 Num veículo de instrução (com duplos comandos)',
              '🛣️ Condução urbana, estacionamento, inversões de marcha, autoestradas',
              '⛰️ Inclui situações obrigatórias: condução nocturna, chuva, estradas estreitas'
            ]}
          ]},
          { id: 'p2', title: 'Exame de prática', content: [
            { kind: 'checklist', items: [
              '👮 O exame é realizado por um examinador do IMT (não pelo instrutor da escola de condução)',
              '⏱️ 30–45 minutos de condução',
              '🛑 Avaliam: estacionamento, cruzamentos, autoestrada, condução em cidade',
              '✅ Classificação: «Apto» (aprovado) ou «Inapto» (reprovado)',
              '🔁 Se reprovar: nova marcação (1–2 sem), pagamento adicional pelo exame (~50 €), muitas vezes — mais algumas aulas',
              '💰 Taxa do IMT: 42 €',
              '🇬🇧 Normalmente o examinador NÃO fala inglês — a escola tenta escolher um examinador, se for necessário inglês'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: '🪪 Depois da aprovação',
      content: [
        { kind: 'checklist', items: [
          '⏱️ Licença provisória «título de condução provisório» — 1–2 sem, pode conduzir com ela',
          '🪪 Cartão definitivo — 30–90 dias por correio',
          '🚦 Primeiros 3 anos: «novo condutor» — velocidade máxima nas autoestradas 90 km/h (em vez de 120)',
          '🚦 Primeiros 3 anos: álcool 0,2‰ em vez de 0,5‰, a coima duplica',
          '⚠️ Nos primeiros 3 anos, 1 acidente grave = perda da carta; 2 coimas = repetição do exame',
          '🔄 Validade da carta: 15 anos até aos 50 anos; 5 anos dos 50 aos 65; 2 anos a partir dos 65',
          '🌍 Válida automaticamente na UE; noutros países — IDP (carta de condução internacional), se exigida'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📲 Aplicações para estudar a teoria: Tabela B (PT), Conduzir.pt, Hércules',
          '🎥 YouTube «Escola Online» — teoria com exemplos',
          '🚗 Antes do exame — 4–5 aulas com instrutores diferentes para variar os percursos',
          '🕐 Os horários de exame de manhã são menos tensos (à tarde os examinadores ficam cansados)',
          '⛰️ Em Lisboa, a prática é feita em colinas — aprenda a arrancar em subida',
          '☔ A prática à chuva é obrigatória; caso contrário, o examinador pode marcar um dia de chuva',
          '👨‍🏫 Se o instrutor for mau — mude (não tenha receio, é normal)',
          '💰 Reserve orçamento para repetição: +200 € (≈10% das pessoas repetem a prática)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Escola de condução, categoria B', amountEURMin: 600, amountEURMax: 1200 },
    { label: 'Exame de teoria IMT', amountEUR: 28 },
    { label: 'Exame de prática IMT', amountEUR: 42 },
    { label: 'Emissão do cartão', amountEUR: 30 },
    { label: 'Hora adicional de prática (repetição)', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Total mínimo', amountEURMin: 700, amountEURMax: 1500 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'IMT — Instituto da Mobilidade e dos Transportes', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANEC — Associação de escolas de condução de Portugal', url: 'https://www.anec.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Estrada — DRE', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34488475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

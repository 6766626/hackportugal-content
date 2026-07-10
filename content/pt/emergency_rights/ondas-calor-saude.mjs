export default {
  editorialVoice: 'hackportugal',
  id: 'ondas-calor-saude',
  categoryId: 'emergency_rights',
  title: 'Calor e ondas de calor: avisos, saúde, trabalho',
  tldr: 'O calor em Portugal mata mais pessoas do que os incêndios: só em duas ondas de calor no verão de 2026 a DGS contabilizou ~123 mortes em excesso. Acompanhe os avisos do IPMA (os limiares variam por distrito: em Lisboa o «vermelho» é acima de 40 °C, na Guarda já acima de 36 °C). Desde 2026, em vez do «Módulo Verão», vigora um único Plano Nacional de Preparação e Resposta Sazonal em Saúde (4 níveis: verde/amarelo/laranja/vermelho). A base de sobrevivência da DGS: pelo menos 1,5 L de água por dia (sem esperar pela sede), não sair ao sol entre as 11:00 e as 17:00, roupa leve e larga, espaços frescos. Golpe de calor (temperatura corporal ~40 °C, pele quente e seca, confusão) — é 112 de imediato; em caso de dúvida — SNS 24: 808 24 24 24. NÃO existe na lei uma «temperatura máxima para trabalhar» fixa, mas o empregador é obrigado a garantir água, pausas e sombra (ACT). Deixar uma criança ou um animal num carro fechado ao calor é crime.',
  tags: ['onda de calor', 'calor', 'verão', 'saúde'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2026-07-09',
  changeSummary: 'Novo guia: ondas de calor — limiares dos avisos IPMA por distrito, o novo Plano Sazonal em Saúde 2026–2027 unificado, índice ÍCARO, regras da DGS, sinais de golpe de calor (112 vs SNS 24), deveres do empregador no calor (ACT), crianças/animais no carro.',
  steps: [
    {
      id: 'warnings',
      title: 'Como saber do calor com antecedência',
      content: [
        { kind: 'paragraph', text: 'Os avisos de calor (aviso amarelo/laranja/vermelho de «tempo quente») são emitidos pelo IPMA para cada distrito separadamente, quando a previsão da temperatura máxima se mantém acima do limiar durante pelo menos ~48 horas. Os limiares dependem do distrito: os habitantes do sul estão mais «habituados» ao calor, pelo que o nível vermelho chega lá mais tarde.' },
        { kind: 'checklist', items: [
          '🌡️ Exemplos de limiares do aviso vermelho: Lisboa — acima de 40 °C, Porto — acima de 38 °C, Santarém/Évora/Beja — acima de 43 °C, Faro — acima de 41 °C, Guarda — já acima de 36 °C.',
          '📱 Aplicações do IPMA: Meteo@IPMA (previsão + avisos) e Avisos@IPMA (só avisos, horizonte de 72 h) — gratuitas, iOS/Android.',
          '🟢🟡🟠🔴 Desde 2026 a saúde funciona segundo um único Plano Nacional de Preparação e Resposta Sazonal em Saúde 2026–2027 (em vigor de 1 de maio de 2026 a 30 de abril de 2027, substituiu o antigo «Módulo Verão»): 4 níveis — verde (preparação), amarelo (vigilância reforçada), laranja (resposta reforçada), vermelho (emergência).',
          '📊 O índice ÍCARO (INSA + IPMA, maio–setembro) avalia o risco de mortalidade em excesso devido ao calor previsto — é com base nele que as autoridades ativam as medidas.',
          '📩 Em calor extremo, a ANEPC envia SMS AvisoPROCIV — não é preciso subscrição (ver guia separado).',
          'Com o calor, o governo pode declarar Situação de Alerta com proibições (acesso às florestas, fogo, maquinaria) — como a 3–9 de julho de 2026.'
        ] }
      ]
    },
    {
      id: 'health-rules',
      title: 'Base de sobrevivência ao calor (regras da DGS)',
      content: [
        { kind: 'checklist', items: [
          '💧 Beba pelo menos 1,5 L de água por dia, SEM esperar pela sede; evite álcool e bebidas açucaradas.',
          '🕚 Não saia ao sol entre as 11:00 e as 17:00; desporto e tarefas pesadas — de manhã cedo/ao fim do dia.',
          '👕 Roupa leve, larga e clara; chapéu; protetor solar SPF 30+.',
          '🏠 De dia — janelas e estores fechados do lado do sol; arejar de noite e de manhã cedo. Passe pelo menos 2–3 horas por dia num local fresco/climatizado.',
          '👶👵 Grupos vulneráveis segundo a DGS: crianças, idosos, doentes crónicos, grávidas, pessoas com mobilidade reduzida, quem trabalha na rua, pessoas que vivem sós — verifique esses vizinhos e familiares todos os dias.',
          '💊 Medicamentos (Infarmed): os de «2–8 °C» — no frigorífico, em viagem — em mala térmica (não congelar); os «até 25/30 °C» — podem ficar no local habitual; NÃO interrompa o tratamento sem médico, em caso de dúvida — SNS 24.',
          '🚗 NUNCA deixe crianças ou animais num carro estacionado, nem «por 5 minutos»: o habitáculo aquece 10+ °C em 10 minutos.'
        ] },
        { kind: 'warning', text: 'Muitos municípios abrem abrigos climatizados gratuitos durante o calor (bibliotecas, piscinas, edifícios públicos com horário alargado) — o plano nacional exige a definição de «Locais de Abrigo Temporários». Pergunte na câmara municipal ou na junta de freguesia onde pode ir refrescar-se.' }
      ]
    },
    {
      id: 'heatstroke',
      title: 'Esgotamento pelo calor vs golpe de calor: quando ligar 112',
      content: [
        { kind: 'paragraph', text: 'O esgotamento pelo calor desenvolve-se gradualmente: fraqueza, tonturas, dor de cabeça, náuseas, suor abundante. O golpe de calor é uma falha da termorregulação, é mortalmente perigoso e exige ligar 112 de imediato.' },
        { kind: 'checklist', items: [
          '⚠️ Sinais de esgotamento: fraqueza, dor de cabeça, tonturas, cãibras musculares, pele húmida. O que fazer: ir para a sombra/um local fresco, água em pequenos goles, arrefecer com pano húmido, repouso.',
          '🚨 Sinais de golpe de calor: temperatura corporal cerca de 40 °C ou mais, pele QUENTE E SECA (o suor parou), confusão grave/agressividade/perda de consciência, pulso acelerado.',
          '📞 Com sinais de golpe de calor — 112 JÁ. Enquanto a ajuda não chega: levar para a sombra, tirar a roupa a mais, arrefecer ativamente (panos húmidos no pescoço/axilas/virilhas, abanar); se estiver inconsciente — de lado, não dar nada a beber.',
          '☎️ Dúvidas não urgentes (estado geral, medicamentos, o que fazer com um doente crónico) — SNS 24: 808 24 24 24, 24 horas por dia.',
          'O Estado indica expressamente a linha SNS 24 como primeiro contacto durante o calor — não vá às urgências sem necessidade no pico da onda.'
        ] }
      ]
    },
    {
      id: 'work-heat',
      title: 'Trabalhar com calor: o que diz a lei',
      content: [
        { kind: 'paragraph', text: 'NÃO existe na lei portuguesa uma temperatura fixa a partir da qual «se pode não trabalhar» — nem para a rua, nem em geral. A lei exige que as condições (temperatura, humidade) sejam «adequadas ao organismo humano» e que o empregador proteja os trabalhadores do sol excessivo. A única referência numérica é o DL 243/86 para escritórios/comércio/serviços: no interior, «na medida do possível», 18–22 °C (até 25 °C em exceções) — é uma referência, não um limiar de paragem do trabalho.' },
        { kind: 'checklist', items: [
          'O empregador é obrigado (segundo os materiais oficiais da ACT): avaliação dos riscos do calor, água potável fresca (beber a cada 15–20 minutos, água a 10–15 °C), pausas regulares, zonas de descanso à sombra/com ar condicionado.',
          'Trabalhos pesados — nas horas mais frescas; rotação; aclimatização dos novos trabalhadores durante 7–10 dias; formação para reconhecer os sintomas; plano para calor extremo.',
          'Trabalha na rua (construção, agricultura, entregas)? Está no grupo de risco da DGS: exija água e pausas — não é um «privilégio», é um dever do empregador.',
          'O empregador ignora o calor? Documente (fotos, mensagens) e apresente queixa à ACT — Autoridade para as Condições do Trabalho (act.gov.pt, livro de reclamações online).',
          'Teletrabalho/horário flexível no pico da onda — não há obrigação legal do empregador, mas a ACT recomenda flexibilidade; acorde por escrito.'
        ] }
      ]
    },
    {
      id: 'car-criminal',
      title: 'Crianças e animais no carro — são crimes',
      content: [
        { kind: 'checklist', items: [
          '👶 Deixar uma criança em perigo num carro fechado é o crime de «exposição ou abandono» (art. 138 do Código Penal): 1–5 anos de prisão, para os pais 2–5 anos; com ofensa grave — até 8, em caso de morte — até 10 anos.',
          '🐕 Um animal num carro escaldante pode ser qualificado como maus-tratos (art. 387 do CP): até 1 ano de prisão ou multa; em caso de morte/mutilação — até 2 anos.',
          '🚨 Vê uma criança ou um animal fechado num carro ao calor? Ligue 112 (e PSP/GNR). Partir o vidro por conta própria — só perante perigo imediato e evidente para a vida, quando a ajuda não chega a tempo.',
          '☀️ Estacione o seu carro à sombra, use uma proteção no para-brisas; antes de sentar as crianças — areje e arrefeça o habitáculo.',
          'Animais de estimação no calor: passeios de manhã cedo/ao fim do dia (o asfalto de dia queima as patas — teste com a mão), água sempre disponível, tosquia/sombra.'
        ] },
        { kind: 'paragraph', text: 'Guias relacionados: «IPMA: meteorologia oficial e avisos», «AvisoPROCIV: alertas SMS», «Segurança na praia» e «Incêndio florestal por perto: o que fazer» — o calor e os incêndios em Portugal andam de mãos dadas.' }
      ]
    }
  ],
  sources: [
    { title: 'IPMA — critérios de emissão de avisos meteorológicos (tempo quente, limiares por distrito)', url: 'https://www.ipma.pt/pt/enciclopedia/otempo/sam/index.html?page=criterios.xml', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'SNS — Plano Nacional de Preparação e Resposta Sazonal em Saúde 2026–2027', url: 'https://www.sns.min-saude.pt/wp-content/uploads/2026/04/Plano-Sazonal-26_27.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'INSA — sistema de monitorização e vigilância ÍCARO', url: 'https://www.insa.min-saude.pt/conheca-o-sistema-de-monitorizacao-e-vigilancia-icaro/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'ACT — exposição a condições climáticas extremas (calor): deveres do empregador', url: 'https://portal.act.gov.pt/Pages/exposicao-condicoes-climaticas-extremas-calor.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'Infarmed — conservação dos medicamentos em caso de onda de calor', url: 'https://www.infarmed.pt/web/infarmed/profissionais-de-saude/prescricao-e-dispensa/medicamentos_e_calor/conservacao_medicamentos_calor', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'INEM — gestos que salvam: cuidados a ter com o calor', url: 'https://www.inem.pt/2026/05/27/gestos-que-salvam-cuidados-a-ter-com-o-calor-5/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}

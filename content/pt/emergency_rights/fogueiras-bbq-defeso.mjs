export default {
  editorialVoice: 'hackportugal',
  id: 'fogueiras-bbq-defeso',
  categoryId: 'emergency_rights',
  title: 'Fogueiras, churrascos e fogo-de-artifício — quando é proibido (PIR) e as coimas',
  tldr: 'Importante: o «período crítico 1 de julho — 30 de setembro» fixo JÁ NÃO existe na lei. No regime SGIFR em vigor (DL 82/2021), as proibições ativam-se automaticamente nos dias em que o seu município está na classe de perigo PIR (Perigo de Incêndio Rural) «muito elevado» ou «máximo» — verifica-se diariamente em ipma.pt/pt/riscoincendio (durante todo o ano, mas no verão isso é a maioria dos dias no interior). Além disso, o governo pode declarar Situação de Alerta com proibições totais (como em 3–9 de julho de 2026: proibição de acesso às florestas, de qualquer fogo, de fogo-de-artifício e de trabalhos com máquinas).\n\nNos dias de muito elevado/máximo é proibido: fogueiras e grelhadores fora de locais equipados, fogo-de-artifício, queima de sobrantes vegetais, fumar na floresta, máquinas que produzam faíscas. Coimas para pessoas singulares: 280-10 000 €. Se o seu fogo provocar um incêndio florestal — responsabilidade criminal até 5 anos. Quando é permitido: zonas municipais de piquenique (Parques de Merendas), lareiras dentro de restaurantes, a cozinha de casa. O fogo-de-artifício exige licença da Câmara durante todo o ano; a queima de amontoados de sobrantes vegetais exige autorização/comunicação durante todo o ano.',
  tags: ['fogueira', 'churrasco', 'incêndio', 'pir', 'icnf'],
  estimatedReadMinutes: 5,
  recentlyChangedAt: '2026-07-09',
  changeSummary: 'Guia alinhado com o regime SGIFR em vigor: o período crítico fixo deixou de existir — as proibições aplicam-se nos dias de PIR «muito elevado»/«máximo» (mapa diário IPMA/ICNF) e quando é declarada Situação de Alerta (exemplo: 3–9.07.2026, todo o território continental).',
  steps: [
    {
      id: 'periodo-critico',
      title: 'Quando se aplicam as proibições: o PIR diário em vez de um calendário',
      content: [
        { kind: 'paragraph', text: 'A reforma do SGIFR (Decreto-Lei 82/2021) eliminou o antigo esquema com um «período crítico» de calendário: as proibições estão agora ligadas à classe diária de Perigo de Incêndio Rural (PIR), que o IPMA publica para cada município. São cinco classes: reduzido, moderado, elevado, muito elevado, máximo. Todas as proibições duras aplicam-se nos dias de «muito elevado» e «máximo» — em qualquer altura do ano.' },
        { kind: 'checklist', items: [
          'Lei: Decreto-Lei 82/2021 (SGIFR — Sistema de Gestão Integrada de Fogos Rurais); a tabela oficial de restrições está em fogos.icnf.pt',
          'Mapa diário do PIR por município: ipma.pt/pt/riscoincendio e fogos.icnf.pt — verifique de manhã antes de quaisquer planos com fogo ou máquinas',
          'Por cima do PIR, o governo pode declarar Situação de Alerta (como em 3–9 de julho de 2026) — as suas proibições totais prevalecem sobre as regras normais e são amplamente divulgadas na comunicação social + SMS AvisoPROCIV',
          'Cada município (Câmara Municipal) pode introduzir restrições adicionais no seu território'
        ] }
      ]
    },
    {
      id: 'what-banned',
      title: 'O que é proibido nos dias de muito elevado / máximo',
      content: [
        { kind: 'checklist', items: [
          '❌ Quaisquer fogueiras em florestas e zonas rurais',
          '❌ Grelhadores/churrasqueiras na rua fora de zonas municipais especialmente equipadas',
          '❌ Fogo-de-artifício e pirotecnia de todos os tipos',
          '❌ Queima de resíduos de jardim, folhas, ramos (queima — queima em amontoado; queimada — fogo controlado)',
          '❌ Queima de resíduos agrícolas',
          '❌ Utilização de máquinas/ferramentas que produzam faíscas na floresta ou nas suas proximidades',
          '❌ Fumar na floresta e em caminhos de terra junto à floresta',
          '❌ Lançamento de petardos e outra pirotecnia, quaisquer lançamentos «caseiros»',
          '❌ Lanternas voadoras chinesas — proibidas durante todo o ano',
          '❌ Garrafas de vidro na floresta — podem funcionar como uma lente e incendiar erva seca'
        ] }
      ]
    },
    {
      id: 'what-allowed',
      title: 'O que é permitido (com condições)',
      content: [
        { kind: 'checklist', items: [
          '✅ Cozinhar numa cozinha equipada dentro de uma casa particular (gás/eletricidade)',
          '✅ Grelhador numa varanda coberta ou terraço com revestimento não combustível — zona discutível; confirme na Câmara Municipal',
          '✅ Churrasco em parques municipais de piquenique (Parques de Merendas) em grelhadores fixos — normalmente abertos todo o ano, mas podem ser encerrados em caso de nível de perigo vermelho',
          '✅ Grelhadores a gás com proteção contra faíscas — zona cinzenta: na maioria dos municípios são permitidos, mas não «na floresta» nem junto a vegetação',
          '✅ Grelhador elétrico no seu próprio terraço asfaltado/revestido a mosaico, longe de vegetação',
          '✅ Fogo em lareiras dentro de edifícios',
          '✅ Velas a gás/tochas tiki — proibidas em caso de nível de perigo vermelho'
        ] },
        { kind: 'paragraph', text: 'O ICNF mantém o site desfrutaranatureza.pt com um mapa de zonas equipadas. Além disso, cada Câmara Municipal tem a sua própria lista de locais.' },
        { kind: 'warning', text: 'Um grelhador a gás ou elétrico no seu terraço não é automaticamente legal. Em Cascais, Sintra, Mafra e Odemira existem regras locais que proíbem qualquer «churrasco» ao ar livre no verão (nos dias de PIR elevado), exceto em zonas municipais especialmente equipadas.' }
      ]
    },
    {
      id: 'fines',
      title: 'Coimas — sérias',
      content: [
        { kind: 'checklist', items: [
          'Fogueira/grelhador na natureza nos dias de muito elevado/máximo (pessoa singular): 280-10 000 €',
          'Fogueira na natureza em caso de nível de perigo vermelho: 1 500-10 000 € + responsabilidade criminal',
          'Fogo-de-artifício nos dias de muito elevado/máximo: 1 500-3 000 €',
          'Queima de resíduos agrícolas sem licença: 1 000-5 000 €',
          'Fumar na floresta: 100-280 €',
          'Garrafas de vidro na floresta: 250-1 000 €',
          'Obstrução ao trabalho dos bombeiros: responsabilidade criminal',
          'Provocar um incêndio (mesmo sem intenção): procedimento criminal, até 5 anos de pena de prisão + indemnização civil pelos danos (frequentemente milhões de €)',
          'Acender fogo e não assegurar o controlo — originando um incêndio: até 8 anos de prisão e coimas elevadas'
        ] }
      ]
    },
    {
      id: 'fireworks',
      title: 'Fogo-de-artifício e pirotecnia durante todo o ano',
      content: [
        { kind: 'paragraph', text: 'O lançamento de fogo-de-artifício (fogo-de-artifício, foguetes, estrelinhas) exige licença durante todo o ano.' },
        { kind: 'checklist', items: [
          'Categorias da UE: F1 (infantis, até 14 anos), F2 (uso recreativo, 18+), F3 (apenas para operadores), F4 (apenas para profissionais)',
          'F1 e F2 para uso privado: licença da Câmara Municipal — 30-100 € por evento',
          'Normalmente é emitida 10-15 dias antes da data do evento',
          'A PSP (Polícia de Segurança Pública) deve ser notificada com pelo menos 5 dias de antecedência',
          'Nos dias de PIR «muito elevado»/«máximo» e durante uma Situação de Alerta, as licenças não são emitidas e as autorizações já emitidas ficam suspensas',
          'Casamento/festa no verão com fogo-de-artifício — quase de certeza impossível (PIR elevado); na época fria — é possível com licença, se nesse dia a classe de PIR for baixa',
          'Categorias F3/F4 — apenas para empresas licenciadas, não para particulares',
          'Sem licença: 1 000-3 000 € + apreensão'
        ] },
        { kind: 'paragraph', text: 'Onde comprar F1/F2: quiosques de tabaco, lojas especializadas, supermercados antes do Ano Novo e do Carnaval. As estrelinhas são permitidas apenas em espaços interiores e com medidas de segurança contra incêndio; na rua, nos dias de PIR elevado — não são permitidas.' }
      ]
    },
    {
      id: 'agricultural-burning',
      title: 'Queima de resíduos agrícolas (queima/queimada controlada)',
      content: [
        { kind: 'paragraph', text: 'Se você for agricultor ou proprietário de um terreno com vegetação, a queima de sobrantes vegetais é uma prática frequente. Regras:' },
        { kind: 'checklist', items: [
          'Queima de amontoados (queima de montes de sobrantes vegetais): DURANTE TODO O ANO apenas com autorização/comunicação prévia — através de fogos.icnf.pt/queimasqueimadas ou pelo tel. 808 200 520',
          'Queimada (fogo controlado num campo): exige licença municipal e a presença de uma equipa de bombeiros',
          'Nos dias de PIR «muito elevado»/«máximo» — totalmente proibida, exceto em operações de emergência para prevenção de incêndios',
          'No âmbito do Sistema de Gestão Integrada de Fogos Rurais existem programas especiais',
          'Pedido: online através da plataforma do ICNF «Queimas e Queimadas» (fogos.icnf.pt/queimasqueimadas) ou na Câmara Municipal / Junta de Freguesia',
          'A licença é emitida em 24-48 horas, dependendo da complexidade',
          'Custo: 0-30 € (frequentemente gratuita para pequenos volumes)',
          'Numa queimada controlada, devem estar presentes no local bombeiros voluntários'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Na prática: o que fazer no verão',
      content: [
        { kind: 'checklist', items: [
          'Quer fazer um churrasco — vá a um parque de piquenique (Parque de Merendas). Carcavelos, Sintra e Costa da Caparica têm excelentes zonas equipadas',
          'Cada município publica a lista de parques no site da Câmara Municipal',
          'Na época fria, um grelhador doméstico no terraço é normalmente aceitável com uma classe de PIR baixa e cumprindo as medidas de segurança — mas verifique o dia em ipma.pt/pt/riscoincendio',
          'Ano Novo/Festas Populares: o fogo-de-artifício é normalmente apenas municipal; privado — só com licença',
          'Na floresta — nunca. Mesmo um cigarro no parque de Sintra ou no Pinhal de Leiria dá coima',
          'Viu fogo de outra pessoa na floresta: 112 → bombeiros. Não se aproxime',
          'Sapadores Florestais (serviços de prevenção de incêndios florestais) patrulham zonas secas no verão',
          'Leve sempre as garrafas de vidro consigo ao sair da praia e do piquenique'
        ] },
        { kind: 'paragraph', text: 'Para residentes em casas rurais: todos os anos é necessário limpar a faixa de gestão de combustível (50 m em redor da casa) — remover mato e erva seca; o prazo principal dos trabalhos é a primavera (em 2026 — até 31 de maio, para os municípios com declaração de calamidade — até 30 de junho). Incumprimento: coima até 5 000 € para pessoas singulares, e a câmara pode fazer a limpeza por si e apresentar-lhe a conta. Detalhes — no guia «Limpeza do terreno (gestão de combustível)».' }
      ]
    }
  ],
  costs: [
    { label: 'Licença para queima de sobrantes vegetais', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Licença para fogo-de-artifício (categorias F1/F2)', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Coima por grelhador/fogueira nos dias de muito elevado/máximo', amountEURMin: 280, amountEURMax: 10000 },
    { label: 'Coima por fogo-de-artifício sem licença', amountEURMin: 1000, amountEURMax: 3000 },
    { label: 'Coima por fumar na floresta', amountEURMin: 100, amountEURMax: 280 },
    { label: 'Coima por não limpar a faixa de gestão de combustível (pessoa singular)', amountEURMin: 150, amountEURMax: 5000 },
    { label: 'Indemnização se for responsável por um incêndio', amountEURMin: 10000, amountEURMax: 1000000, note: 'Casos reais — milhões de €' }
  ],
  sources: [
    { title: 'ICNF — Defesa da Floresta contra Incêndios', url: 'https://www.icnf.pt/florestas/dfci', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 82/2021 (SGIFR) — Sistema de Gestão Integrada de Fogos Rurais', url: 'https://dre.pt/dre/detalhe/decreto-lei/82-2021-172938081', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'ICNF — Plataforma Queimas e Queimadas (PQQ)', url: 'https://fogos.icnf.pt/queimasqueimadas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'IPMA — alerta meteorológico e risco de incêndio', url: 'https://www.ipma.pt/pt/riscoincendio/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF — Restrições associadas ao Perigo de Incêndio Rural diário (PIR)', url: 'https://fogos.icnf.pt/SGIF2010/InformacaoPublicaDados/Condicionantes_PerigoIncendiosRural.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'GNR — Sistema Nacional de Defesa da Floresta', url: 'https://www.gnr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}

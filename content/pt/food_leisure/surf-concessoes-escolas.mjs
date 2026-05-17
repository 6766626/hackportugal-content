export default {
  editorialVoice: 'hackportugal',
  id: 'surf-concessoes-escolas',
  categoryId: 'food_leisure',
  title: 'Surf em Portugal — concessões, escolas, licenças',
  tldr: 'Portugal é um dos centros mundiais do surf: 850 km de Atlântico, etapas do World Tour em Peniche e na Ericeira, ondas grandes (big wave) na Nazaré. Para surfar por conta própria, não é necessária licença — aplica-se o direito de livre acesso à praia. Escolas e instrutores são um negócio regulado à parte: são necessárias concessões para praias específicas da DGRM (recursos naturais, segurança e serviços marítimos) e da AMN (administração marítima), e os instrutores devem ter credencial da FPS (Federação Portuguesa de Surf) ou da ISA. Campeonatos na WSL Reserve (Ericeira) seguem regras próprias. Aluguer de pranchas: 10–25 €/hora, 30–50 €/dia. Aulas: 30–60 € por 2 horas em grupo. Big wave na Nazaré não é para principiantes, é realmente perigoso (nos últimos anos houve casos mortais).',
  tags: ['surf', 'praia', 'fps', 'wsl', 'nazare', 'ericeira'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'free-access',
      title: 'Livre acesso à praia — o essencial',
      content: [
        { kind: 'paragraph', text: 'Todas as praias em Portugal pertencem ao Estado. Pode entrar livremente com a prancha e surfar em qualquer lugar, incluindo a Praia do Norte (Nazaré). Não é necessária licença.' },
        { kind: 'checklist', items: [
          'Domínio Público Marítimo (DPM): cerca de 50 m da faixa de maré são acessíveis a todos',
          'Pode trazer a sua própria prancha, deixá-la na areia e surfar o dia inteiro',
          'O estacionamento costuma ser pago no verão (~5–15 €/dia em zonas turísticas)',
          'Os nadadores-salvadores, com bandeira vermelha/amarela, podem proibir a entrada na água devido às condições, não por causa do surf em si',
          'Os nadadores-salvadores estão de serviço na época balnear, de 15.06 a 15.09, nas praias populares'
        ] },
        { kind: 'warning', text: 'Não entre na zona balnear — é proibido por lei e perigoso. Na maioria das praias há uma zona separada para surf, delimitada da zona balnear por bandeiras e boias. Banhista atingido = indemnização + procedimento criminal.' }
      ]
    },
    {
      id: 'best-spots',
      title: 'Melhores spots por nível',
      content: [
        { kind: 'paragraph', text: 'Principiantes (ondas verdes, fundo de areia, condições suaves):' },
        { kind: 'checklist', items: [
          'Carcavelos (Lisboa): acessível, transportes públicos convenientes, escolas de surf a cada passo. Ondas de 1–1,5 m',
          'Costa da Caparica: 30 minutos de Lisboa, praia extensa, vários pontos por nível',
          'Praia da Areia Branca (Lourinhã): mais tranquila do que Peniche',
          'Praia do Guincho (Cascais): no verão — água turquesa e vento para kitesurf, no inverno — mais potente',
          'Praia da Bordeira (Algarve): costa oeste, bonita e acessível',
          'Praia da Falésia (sul do Algarve): ondas suaves, para principiantes'
        ] },
        { kind: 'paragraph', text: 'Nível intermédio:' },
        { kind: 'checklist', items: [
          'Ericeira: primeira World Surfing Reserve da Europa, 7 spots, um clássico',
          'Peniche: Supertubos — tubos ao estilo Pipeline (Ricos, Lagide)',
          'Sagres: Tonel e Beliche, Atlântico duro',
          'Praia do Amado (Aljezur): consistente, sessões longas',
          'Praia da Adraga (Sintra): spot técnico'
        ] },
        { kind: 'paragraph', text: 'Avançado/especialista:' },
        { kind: 'checklist', items: [
          'Nazaré: Praia do Norte — ondas grandes (big wave) de classe mundial. Apenas para experientes, com equipa de segurança',
          'Coxos (Ericeira): reef break direita, técnico',
          'Crazy Left (Cabo Raso): esquerda potente',
          'Pedra Branca: reef duro',
          'Açores e Madeira: spots secretos, são necessários contactos locais'
        ] }
      ]
    },
    {
      id: 'schools',
      title: 'Escolas de surf — o que procurar',
      content: [
        { kind: 'paragraph', text: 'As escolas devem ter:' },
        { kind: 'checklist', items: [
          'Concessão para a praia específica da DGRM/Capitania (capitania do porto; direito de exercer actividade ali)',
          'Instrutores com licença FPS, ISA ou equivalente da UE',
          'Seguro para os participantes',
          'Equipamento em bom estado (pranchas sem danos, fatos de surf)',
          'Kit de primeiros socorros e pessoal formado',
          'Registo no IPDJ (Instituto Português do Desporto e Juventude) — para desporto comercial'
        ] },
        { kind: 'paragraph', text: 'Escolas conhecidas:' },
        { kind: 'checklist', items: [
          'Carcavelos Surf School (Carcavelos)',
          'Surfing Lisbon (Carcavelos, Costa)',
          'Lapoint Surf Camp (Ericeira) — melhor para programas semanais',
          'Peniche Surf Camp',
          'Algarve Surf School (vários spots no Algarve)',
          'Nazaré Surf Camp (apenas para nível pelo menos intermédio)',
          'Surf Lisbon (várias localizações)',
          'Reservas: surftrip.pt, booksurfcamps.com, awave.com'
        ] },
        { kind: 'paragraph', text: 'Preços das aulas:' },
        { kind: 'checklist', items: [
          'Aula em grupo de 2 horas (5–8 pessoas): 30–50 €',
          'Aula semiprivada (2–3 pessoas): 60–90 €',
          'Individual 1:1: 80–150 €',
          'Surf camp de uma semana (alojamento incluído): 400–800 €',
          'Pacote de 3 dias + aluguer: 90–150 €'
        ] }
      ]
    },
    {
      id: 'rental',
      title: 'Aluguer de pranchas e equipamento',
      content: [
        { kind: 'checklist', items: [
          'Softtop (para principiantes): 8–12 €/hora, 25–35 €/dia',
          'Shortboard em epóxi/PU: 12–20 €/hora, 30–50 €/dia',
          'Longboard: 15–25 €/hora, 40–60 €/dia',
          'Fato de surf 4/3 (no inverno é necessário 5/4): 5–10 €/dia',
          'Botas de neoprene: 3–5 €/dia',
          'Leash e wax normalmente incluídos',
          'Caução geralmente 50–100 € ou cartão de crédito',
          'Aluguer por uma semana: prancha 80–150 € + fato de surf 30–50 €'
        ] },
        { kind: 'paragraph', text: 'Comprar uma prancha em segunda mão em Portugal:' },
        { kind: 'checklist', items: [
          'OLX.pt — a maior plataforma',
          'Custojusto.pt',
          'Lojas de surf locais em consignação',
          'Softtop para principiantes: 100–200 €',
          'Shortboard em segunda mão decente: 200–400 €',
          'Boa prancha de shaper: 500–800 €'
        ] }
      ]
    },
    {
      id: 'big-wave-nazare',
      title: 'Big wave Nazaré — caso especial',
      content: [
        { kind: 'paragraph', text: 'A Nazaré é o local do recorde mundial da maior onda surfada (24+ m). Época: outubro–março. Isto não é surf turístico — é tow-in ou paddle com embarcações de apoio.' },
        { kind: 'checklist', items: [
          'É necessário um guia local ou ligações na comunidade de shapers',
          'Obrigatório: mota de água para tow‑in + piloto + equipa de segurança',
          'Colete de protecção insuflável',
          'Big‑wave gun especial (prancha de 9–12 ft)',
          'Seguro separado para surf em ondas grandes (big wave)',
          'Sem preparação — nos últimos anos houve casos mortais',
          'WSL Big Wave Tour: Nazaré Tow Surfing Challenge todos os invernos, pode assistir como espectador',
          'Para espectadores: miradouro junto ao forte de São Miguel — a melhor vista',
          'A Garrett McNamara Big Wave School na Nazaré dá cursos para nível intermédio e superior'
        ] },
        { kind: 'warning', text: 'Se está em Portugal por 1 semana — não se meta na Nazaré com uma prancha. Mesmo em dias relativamente calmos, há ondas potentes e correntes de retorno. É um local para especialistas locais com um sistema de segurança bem testado.' }
      ]
    },
    {
      id: 'safety-rules',
      title: 'Segurança e etiqueta',
      content: [
        { kind: 'checklist', items: [
          'Surfe apenas nas zonas assinaladas (fora da zona balnear)',
          'Respeite as bandeiras: vermelha — não pode entrar, amarela — com cuidado, verde — pode',
          'Prioridade: o surfista mais perto do pico tem direito a ir primeiro',
          'Não corte a onda (drop-in/snake): roubar a onda de outra pessoa é má etiqueta',
          'Fato de surf: obrigatório no inverno, recomendado no verão (água 14–19°C)',
          'Protetor solar seguro para recifes: obrigatório',
          'Conheça as correntes de retorno: se for apanhado, nade paralelamente à costa',
          'Não surfe sozinho num local novo',
          'Telemóvel — numa bolsa impermeável, no carro ou com um amigo',
          'Respeite os locais: os surfistas portugueses são simpáticos, mas não gostam de turistas agressivos'
        ] }
      ]
    },
    {
      id: 'competitions-events',
      title: 'Campeonatos e eventos',
      content: [
        { kind: 'checklist', items: [
          'Etapa do WSL Championship Tour em Peniche: outubro, entrada livre para espectadores',
          'WSL Big Wave: Nazaré Tow Surfing Challenge — no inverno',
          'Campeonato Nacional FPS: várias localizações',
          'Ericeira Pro: janeiro–fevereiro',
          'Capítulo Perfeito: competição nas melhores condições',
          'Para participar: licença FPS (~50 €/ano) + pontos de ranking de provas de qualificação',
          'Espectacular para não surfistas: vá a Peniche ou à Ericeira durante as finais'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Aula em grupo de 2 horas', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Aula individual 1:1', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Surf camp de 7 dias (com alojamento)', amountEURMin: 400, amountEURMax: 800 },
    { label: 'Aluguer de softtop por dia', amountEURMin: 25, amountEURMax: 35 },
    { label: 'Aluguer de shortboard por dia', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Aluguer de fato de surf por dia', amountEURMin: 5, amountEURMax: 10 },
    { label: 'Prancha em segunda mão para principiante', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Licença FPS (para competições)', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Curso de ondas grandes (big wave) na Nazaré', amountEURMin: 500, amountEURMax: 2000 }
  ],
  sources: [
    { title: 'IPDJ — registo de praticantes desportivos (FPS reconhecida)', url: 'https://ipdj.gov.pt/clube-de-praticantes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — federações desportivas oficiais', url: 'https://ipdj.gov.pt/federacoes-desportivas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'AMN — concessões no Domínio Público Marítimo', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA — previsão de surf e marés', url: 'https://www.ipma.pt/pt/maritima/marobs/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

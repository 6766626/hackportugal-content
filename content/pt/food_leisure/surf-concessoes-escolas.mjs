export default {
  editorialVoice: 'hackportugal',
  id: 'surf-concessoes-escolas',
  categoryId: 'food_leisure',
  title: 'Surf em Portugal — concessões, escolas, licenças',
  tldr: 'Portugal é um dos centros mundiais do surf: 850 km de Atlântico, etapas do World Tour em Peniche e Ericeira, ondas grandes (big wave) na Nazaré. Para prática pessoal não é necessária licença — vigora o direito de livre acesso à praia. Escolas e instrutores são um negócio separado e regulado: são precisas concessões para praias específicas da DGRM (economia e recursos do mar) e da AMN (administração marítima), e os instrutores devem ter credencial da FPS (Federação Portuguesa de Surf) ou ISA. Campeonatos na WSL Reserve (Ericeira) — por regras próprias. Aluguer de pranchas: 10–25 €/hora, 30–50 €/dia. Aulas: 30–60 € por 2 horas em grupo. Big wave na Nazaré — não é para iniciantes, é realmente perigoso (houve casos mortais nos últimos anos).',
  tags: ['surf', 'praia', 'fps', 'wsl', 'nazaré', 'ericeira'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'free-access',
      title: 'Acesso livre à praia — o principal',
      content: [
        { kind: 'paragraph', text: 'Todas as praias em Portugal são propriedade do Estado. Entrar livremente com a prancha e surfar é possível em todo o lado, incluindo a Praia do Norte (Nazaré). Não é necessária licença.' },
        { kind: 'checklist', items: [
          'Propriedade marítima do Estado (Domínio Público Marítimo, DPM): ~50 m da faixa de maré acessíveis a todos',
          'Pode levar a sua prancha, deixá-la na areia e surfar o dia todo',
          'Estacionamento normalmente pago no verão (~5–15 €/dia em zonas turísticas)',
          'Os nadadores-salvadores com bandeira vermelha/amarela podem proibir a entrada na água devido às condições, e não por causa do próprio surf',
          'Os nadadores-salvadores estão de serviço na época balnear 15.06–15.09 nas praias populares'
        ] },
        { kind: 'warning', text: 'Não entre na zona de banhos — é proibido por lei e perigoso. Na maioria das praias há uma zona de surf separada, demarcada por bandeirolas e boias. Atropelar um banhista = indemnização + procedimento criminal.' }
      ]
    },
    {
      id: 'best-spots',
      title: 'Melhores spots por nível',
      content: [
        { kind: 'paragraph', text: 'Iniciantes (ondas verdes, fundo de areia, condições suaves):' },
        { kind: 'checklist', items: [
          'Carcavelos (Lisboa): acessível, transporte público conveniente, escolas de surf por todo o lado. Ondas de 1–1,5 m',
          'Costa da Caparica: a 30 minutos de Lisboa, praia longa, diferentes picos por nível',
          'Praia da Areia Branca (Lourinhã): mais calma do que Peniche',
          'Praia do Guincho (Cascais): no verão — água turquesa e vento para kitesurf; no inverno — mais potente',
          'Praia da Bordeira (Algarve): costa oeste, bonito e acessível',
          'Praia da Falésia (sul do Algarve): ondas suaves, para iniciantes'
        ] },
        { kind: 'paragraph', text: 'Nível intermédio:' },
        { kind: 'checklist', items: [
          'Ericeira: a primeira World Surfing Reserve na Europa, 7 spots, clássico',
          'Peniche: Supertubos — tubos ao estilo Pipeline (Ricos, Lagide)',
          'Sagres: Tonel e Beliche, Atlântico bruto',
          'Praia do Amado (Aljezur): consistente, sessões longas',
          'Praia da Adraga (Sintra): spot técnico'
        ] },
        { kind: 'paragraph', text: 'Avançado/experiente:' },
        { kind: 'checklist', items: [
          'Nazaré: Praia do Norte — ondas grandes (big wave) de classe mundial. Só para experientes, com equipa de segurança',
          'Coxos (Ericeira): direita em reef, técnico',
          'Crazy Left (Cabo Raso): esquerda poderosa',
          'Pedra Branca: reef exigente',
          'Açores e Madeira: spots secretos, precisam de contactos locais'
        ] }
      ]
    },
    {
      id: 'schools',
      title: 'Escolas de surf — o que procurar',
      content: [
        { kind: 'paragraph', text: 'As escolas devem ter:' },
        { kind: 'checklist', items: [
          'Concessão para a praia específica da DGRM/Capitania (capitania do porto; direito a exercer atividade ali)',
          'Instrutores com licença da FPS, ISA ou equivalente da UE',
          'Seguro para os participantes',
          'Equipamento em bom estado (pranchas sem danos, fatos isotérmicos)',
          'Kit de primeiros socorros e pessoal treinado',
          'Registo no IPDJ (Instituto Português do Desporto e Juventude) — para atividade desportiva comercial'
        ] },
        { kind: 'paragraph', text: 'Escolas conhecidas:' },
        { kind: 'checklist', items: [
          'Carcavelos Surf School (Carcavelos)',
          'Surfing Lisbon (Carcavelos, Costa)',
          'Lapoint Surf Camp (Ericeira) — melhor para programas semanais',
          'Peniche Surf Camp',
          'Algarve Surf School (vários spots no Algarve)',
          'Nazaré Surf Camp (apenas para nível intermédio ou superior)',
          'Surf Lisbon (várias localizações)',
          'Reservas: surftrip.pt, booksurfcamps.com, awave.com'
        ] },
        { kind: 'paragraph', text: 'Preços das aulas:' },
        { kind: 'checklist', items: [
          'Aula de grupo de 2 horas (5–8 pessoas): 30–50 €',
          'Aula semi-privada (2–3 pessoas): 60–90 €',
          'Aula individual 1:1: 80–150 €',
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
          'Soft-top (para iniciantes): 8–12 €/hora, 25–35 €/dia',
          'Shortboard em epóxi/PU: 12–20 €/hora, 30–50 €/dia',
          'Longboard: 15–25 €/hora, 40–60 €/dia',
          'Fato 4/3 (no inverno precisa de 5/4): 5–10 €/dia',
          'Botins de neoprene: 3–5 €/dia',
          'Leash e wax normalmente incluídos',
          'Caução normalmente 50–100 € ou cartão de crédito',
          'Aluguer por semana: prancha 80–150 € + fato 30–50 €'
        ] },
        { kind: 'paragraph', text: 'Comprar prancha usada em Portugal:' },
        { kind: 'checklist', items: [
          'OLX.pt — a maior plataforma',
          'Custojusto.pt',
          'Lojas de surf locais em consignação',
          'Soft-top para iniciantes: 100–200 €',
          'Shortboard usado decente: 200–400 €',
          'Boa prancha de shaper: 500–800 €'
        ] }
      ]
    },
    {
      id: 'big-wave-nazare',
      title: 'Big wave Nazaré — um caso à parte',
      content: [
        { kind: 'paragraph', text: 'Nazaré detém o recorde mundial da maior onda surfada (24+ m). Época: outubro–março. Não é surf turístico — é tow-in ou paddle com embarcações de apoio.' },
        { kind: 'checklist', items: [
          'É preciso guia local ou contactos na comunidade de shapers',
          'Obrigatório: moto de água para tow‑in + piloto + equipa de segurança',
          'Colete insuflável de segurança',
          'Big‑wave gun específica (prancha 9–12 ft)',
          'Seguro específico para surf de ondas grandes (big wave)',
          'Sem preparação — nos últimos anos houve mortes',
          'WSL Big Wave Tour: Nazaré Tow Surfing Challenge todos os invernos, pode ver como espectador',
          'Para espectadores: miradouro junto ao forte de São Miguel — a melhor vista',
          'A Garrett McNamara Big Wave School, na Nazaré, realiza cursos para nível intermédio e superior'
        ] },
        { kind: 'warning', text: 'Se estiver em Portugal por 1 semana — não se meta na Nazaré com prancha. Mesmo em dias relativamente calmos há ondas potentes e correntes de retorno. É um local para peritos locais com sistema de segurança bem oleado.' }
      ]
    },
    {
      id: 'safety-rules',
      title: 'Segurança e etiqueta',
      content: [
        { kind: 'checklist', items: [
          'Surfe apenas nas zonas assinaladas (fora da zona de banhos)',
          'Respeite as bandeiras: vermelho — proibido entrar, amarelo — com cautela, verde — permitido',
          'Prioridade: o surfista mais perto do pico tem direito primeiro',
          'Não faça drop-in/snake: roubar a onda de outro é má educação',
          'Fato de neoprene: obrigatório no inverno, recomendado no verão (água 14–19°C)',
          'Protetor solar reef-safe: obrigatório',
          'Conheça as correntes de retorno: se entrar numa, nade paralelo à costa',
          'Não surfe sozinho num local novo',
          'Telemóvel — em bolsa estanque, no carro ou com um amigo',
          'Respeite os locais: os surfistas portugueses são amistosos, mas não gostam de turistas agressivos'
        ] }
      ]
    },
    {
      id: 'competitions-events',
      title: 'Competições e eventos',
      content: [
        { kind: 'checklist', items: [
          'Etapa do WSL Championship Tour em Peniche: outubro, entrada livre para espectadores',
          'WSL Big Wave: Nazaré Tow Surfing Challenge — no inverno',
          'Campeonato nacional da FPS: várias localizações',
          'Ericeira Pro: janeiro–fevereiro',
          'Capítulo Perfeito: competição nas melhores condições',
          'Para participar: licença FPS (~50 €/ano) + pontos de ranking das provas de qualificação',
          'Espetacular para não surfistas: vá a Peniche ou Ericeira durante as finais'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Aula de grupo 2 horas', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Aula individual 1:1', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Surf camp 7 dias (com alojamento)', amountEURMin: 400, amountEURMax: 800 },
    { label: 'Aluguer de soft-top por dia', amountEURMin: 25, amountEURMax: 35 },
    { label: 'Aluguer de shortboard por dia', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Aluguer de fato por dia', amountEURMin: 5, amountEURMax: 10 },
    { label: 'Prancha usada para iniciante', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Licença FPS (para competições)', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Curso de ondas grandes (big wave) na Nazaré', amountEURMin: 500, amountEURMax: 2000 }
  ],
  sources: [
    { title: 'IPDJ — registro de praticantes (FPS reconhecida)', url: 'https://ipdj.gov.pt/registo-de-praticantes-desportivos-em-federacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — federações desportivas oficiais', url: 'https://ipdj.gov.pt/federacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'AMN — concessões no Domínio Público Marítimo', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA — previsão de surf e marés', url: 'https://www.ipma.pt/pt/maritima/marobs/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}

export default {
  editorialVoice: 'hackportugal',
  id: 'serious-traffic-crimes',
  categoryId: 'auto_trips',
  title: 'Infrações graves ao Código da Estrada — crimes rodoviários',
  tldr: 'Em Portugal, algumas infrações não são administrativas, mas sim criminais (Código Penal + Código da Estrada). Incluem: condução com BAC ≥1.2 g/l, recusa de teste de álcool, condução depois de inibição de conduzir, homicídio / ofensa grave por negligência, abandono do local do acidente. Sanções: inibição de conduzir de 2 meses a 3 anos, coimas até 15 000 €, prisão até 5 anos.\n\nSistema carta por pontos: por crime rodoviário — −6 pontos; por contra-ordenação muito grave (incl. BAC 0.8–1.2) — −5 pontos; grave — normalmente −3. Ao chegar a 0 pontos — cassação do título: não é possível obter nova carta durante 2 anos; depois, é necessário tirar a carta do zero. A condenação fica na certidão do registo criminal.',
  tags: ['código da estrada', 'criminalidade', 'condução', 'coimas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'alcohol',
      title: 'Álcool ao volante — a principal armadilha',
      content: [
        { kind: 'paragraph', text: 'Portugal tem um dos sistemas de controlo de BAC mais rigorosos da Europa.' },
        { kind: 'checklist', items: [
          '🍺 BAC 0.5–0.8 g/l (cerca de 1–2 copos de vinho) — contra-ordenação grave: coima de 250–1 250 €, inibição de conduzir 1–12 meses, menos 3 pontos',
          '🍷 BAC 0.8–1.2 g/l — contra-ordenação muito grave: coima de 500–2 500 €, inibição de conduzir 2–24 meses, menos 5 pontos',
          '🍸 BAC ≥ 1.2 g/l — crime (art. 292 Código Penal): até 1 ano de prisão ou multa até 120 dias, SEMPRE proibição de conduzir de 3 meses a 3 anos, registo criminal durante 5–10 anos',
          '🚫 Recusa de teste — é equiparada a BAC ≥ 1.2 g/l + acusação de "desobediência qualificada" (até 2 anos de prisão)',
          '⚠️ Para novos condutores (<3 anos de carta): limite de 0.2 g/l — até uma caneca de cerveja pode constituir infração',
          '💼 Para condutores profissionais (táxis, camiões, autocarros): 0.2 g/l'
        ]}
      ]
    },
    {
      id: 'points',
      title: 'Sistema de pontos — 12 pontos com subtração',
      content: [
        { kind: 'paragraph', text: 'Desde 2016 vigora o sistema de pontos (carta por pontos). Todos os condutores começam com 12 pontos.\n\nCrime rodoviário = −6 pontos.\n\nContra-ordenação muito grave = −5 pontos.\n\nGrave = −3 pontos.\n\nLeve não retira pontos na tabela geral. Ao chegar a 0 — cassação do título; não é possível obter nova carta durante 2 anos; depois, é necessário fazer novamente todo o processo de obtenção.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Menos 2–3 pontos — contra-ordenação grave', content: [
            { kind: 'checklist', items: [
              'Excesso de velocidade de 30–60 km/h dentro de localidade (60–80 fora de localidade, 80–100 em autoestrada)',
              'Passar um sinal vermelho',
              'Utilizar o telemóvel ao volante sem auricular',
              'Não ceder passagem a peão na passadeira',
              'Conduzir sem cinto de segurança ou sem cadeira de criança para <12 anos / <135 cm',
              'Ultrapassagem sobre linha contínua',
              'Álcool 0.5–0.8 g/l e corridas dentro de localidade — −3 pontos'
            ]}
          ]},
          { id: 'p2', title: 'Menos 4–5 pontos — contra-ordenação muito grave', content: [
            { kind: 'checklist', items: [
              'Excesso de velocidade de 60+ km/h dentro de localidade',
              'Não parar por ordem da GNR / PSP',
              'Circular em local proibido (sentido único, zona pedonal)',
              'Álcool 0.8–1.2 g/l — −5 pontos'
            ]}
          ]},
          { id: 'p3', title: 'Menos 6 pontos — crime (crime rodoviário)', content: [
            { kind: 'checklist', items: [
              'Álcool ≥ 1.2 g/l',
              'Recusa de teste de álcool / drogas',
              'Conduzir sem nunca ter tido habilitação legal',
              'Abandono do local do acidente com feridos',
              'Drogas ao volante',
              'Homicídio / ofensa grave por negligência'
            ]}
          ]}
        ]},
        { kind: 'paragraph', text: 'Recuperação de pontos: +3 pontos no final de cada período de 3 anos sem infrações, até ao máximo de 15 pontos. Aos condutores com 5 ou menos pontos é imposta uma ação de formação de segurança rodoviária obrigatória: sem a frequentar, a carta é suspensa; custo ~250 €.' }
      ]
    },
    {
      id: 'speed-cameras',
      title: 'Radares — margem de erro e como funcionam',
      content: [
        { kind: 'checklist', items: [
          '📐 Margem de erro oficial: 7% (integrada no cálculo da coima)',
          'Exemplo: limite 120, velocidade 140 — será registado como (140 × 0.93 = 130.2) → coima por +10 km/h, e não +20',
          'Radares fixos: há sinais de aviso 300 m antes',
          'Radares ocultos da ANSR: sem aviso, podem estar em veículos da GNR',
          'Radares móveis — muitas vezes na berma, em pequenas aldeias nas estradas nacionais',
          'A coima chega por correio à morada do proprietário em 30–90 dias',
          '🕐 Prazo de pagamento: 15 dias — mínimo da coima (×1), 30 dias — sem agravamento, depois — ×2–3',
          '⚖️ Impugnação: através de recurso no tribunal, no prazo de 20 dias após receber a notificação — advogado 150–300 €'
        ]}
      ]
    },
    {
      id: 'check-fines',
      title: 'Como verificar as suas coimas e pontos',
      content: [
        { kind: 'checklist', items: [
          '🚦 IMT Portal Digital (imt-ip.pt) — entrada com CMD / CC → "Consultar carta" → mostra pontos + histórico',
          '⚖️ Portal das Finanças → e-balcão — coimas por pagar e processos judiciais',
          '📧 Notificações por e-mail da ANSR — subscrever em ansr.pt para avisos sobre novas coimas',
          '📞 Chamada para o IMT 800 501 501',
          '📄 Certidão da carta de condução — pedido através de imt-ip.pt, mostra o histórico completo (para trabalho, visto, tribunal)'
        ]}
      ]
    },
    {
      id: 'foreign-licence',
      title: 'Para cartas de condução não portuguesas',
      content: [
        { kind: 'paragraph', text: 'O sistema de pontos aplica-se a todos os condutores em território português, mesmo com carta estrangeira. Ao chegar a 0 pontos — perda do direito de conduzir em Portugal (a sua carta do país de origem deixa de ser válida em Portugal); ao regressar ao seu país — a carta continua válida como habitualmente.' },
        { kind: 'checklist', items: [
          'As coimas associadas a cartas estrangeiras são registadas na base centralizada EUCARIS (para cartas da UE) ou no registo nacional português',
          'Ao trocar a carta por uma portuguesa (após a troca) — os pontos são transferidos',
          'As notificações de coimas chegam à morada de registo do veículo',
          'Para automóvel alugado com carta britânica: a empresa recebe a coima e emite-lhe a fatura + 30–50 € de taxa administrativa'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Coima BAC 0.5-0.8', amountEURMin: 250, amountEURMax: 1250 },
    { label: 'Coima BAC 0.8-1.2', amountEURMin: 500, amountEURMax: 2500 },
    { label: 'Coima BAC ≥ 1.2 (crime)', amountEURMin: 500, amountEURMax: 15000 },
    { label: 'Curso de recuperação de pontos', amountEUR: 250 },
    { label: 'Impugnação através de advogado', amountEURMin: 150, amountEURMax: 300 }
  ],
  sources: [
    { title: 'Código da Estrada — DRE', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código Penal — art. 291-292 (condução)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34437675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Portal Digital', url: 'https://portal.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

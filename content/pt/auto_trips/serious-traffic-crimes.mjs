export default {
  editorialVoice: 'hackportugal',
  id: 'serious-traffic-crimes',
  categoryId: 'auto_trips',
  title: 'Infracções graves ao Código da Estrada — crimes rodoviários',
  tldr: 'Em Portugal, algumas infracções não são administrativas, mas sim criminais (Código Penal + Código da Estrada). São elas: condução com BAC ≥1.2 g/l, recusa do teste de álcool, condução após inibição de conduzir, homicídio / ofensa grave por negligência, abandono do local de acidente. Sanções: inibição de conduzir de 2 meses a 3 anos, coimas até 15 000 €, prisão até 5 anos. **Sistema carta por pontos**: por crime rodoviário — **−6 pontos**; por contra-ordenação muito grave (incl. BAC 0.8–1.2) — **−5 pontos**; grave — normalmente −3. Com 0 pontos — **cassação do título**: não é possível obter nova carta durante 2 anos; depois — voltar a tirar a carta do zero. A condenação fica na certidão do registo criminal.',
  tags: ['código da estrada', 'crime', 'condução', 'coimas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'alcohol',
      title: 'Álcool ao volante — a principal armadilha',
      content: [
        { kind: 'paragraph', text: 'Portugal tem um dos sistemas de controlo de BAC mais rigorosos da Europa.' },
        { kind: 'checklist', items: [
          '🍺 **BAC 0.5–0.8 g/l** (cerca de 1–2 copos de vinho) — **contra-ordenação grave**: coima 250–1 250 €, inibição de 1–12 meses, menos 3 pontos',
          '🍷 **BAC 0.8–1.2 g/l** — **contra-ordenação muito grave**: coima 500–2 500 €, inibição de 2–24 meses, menos 5 pontos',
          '🍸 **BAC ≥ 1.2 g/l** — **crime** (art. 292 Código Penal): até 1 ano de prisão ou multa até 120 dias, SEMPRE inibição de 2+ meses, registo criminal durante 5–10 anos',
          '🚫 **Recusa do teste** — equiparada a BAC ≥ 1.2 g/l + acusação de "desobediência qualificada" (até 2 anos de prisão)',
          '⚠️ Para novos condutores (<3 anos de carta): limite 0.2 g/l — até uma caneca de cerveja pode ser uma infracção',
          '💼 Para condutores profissionais (táxis, camiões, autocarros): 0.2 g/l'
        ]}
      ]
    },
    {
      id: 'points',
      title: 'Sistema de pontos — 12 pontos com desconto',
      content: [
        { kind: 'paragraph', text: 'Desde 2016, vigora o sistema de pontos (carta por pontos). Todos os condutores começam com 12 pontos. **Crime rodoviário** = −6 pontos. **Contra-ordenação muito grave** = −5 pontos. **Grave** = −3 pontos. **Leve** não retira pontos na tabela geral. Chegou a 0 — cassação do título; não é possível obter nova carta durante 2 anos; depois — processo para a obter novamente.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Menos 1 ponto — contra-ordenações graves', content: [
            { kind: 'checklist', items: [
              'Excesso de velocidade de 30–60 km/h dentro de localidade (60–80 fora de localidade, 80–100 em auto-estrada)',
              'Passar o sinal vermelho',
              'Usar o telemóvel ao volante sem auricular',
              'Não dar prioridade a peão na passadeira',
              'Conduzir sem cinto de segurança',
              'Não ter cadeira de criança para <12 anos / <135 cm'
            ]}
          ]},
          { id: 'p2', title: 'Menos 2 pontos', content: [
            { kind: 'checklist', items: [
              'Excesso de velocidade de 60+ km/h dentro de localidade',
              'Ultrapassagem sobre linha contínua',
              'Não parar por ordem da GNR / PSP',
              'Circular em local proibido (sentido único, zona pedonal)'
            ]}
          ]},
          { id: 'p3', title: 'Menos 3 pontos', content: [
            { kind: 'checklist', items: [
              'Álcool 0.5–0.8 g/l',
              'Corridas dentro de localidade',
              'Conduzir sem carta ou com carta caducada',
              'Uso de matrículas falsas'
            ]}
          ]},
          { id: 'p4', title: 'Menos 4 pontos', content: [
            { kind: 'checklist', items: [
              'Álcool 0.8–1.2 g/l',
              'Conduzir sem IPO válida',
              'Recusa de paragem + perseguição'
            ]}
          ]},
          { id: 'p5', title: 'Menos 5 pontos — crime', content: [
            { kind: 'checklist', items: [
              'Álcool ≥ 1.2 g/l',
              'Recusa do teste de álcool / drogas',
              'Abandono do local de acidente com vítimas',
              'Drogas ao volante',
              'Homicídio / ofensa grave por negligência'
            ]}
          ]}
        ]},
        { kind: 'paragraph', text: 'Recuperação de pontos: +1 ponto a cada 3 anos sem infracções, máximo 12. É possível fazer um «curso de reeducação» — 2–3 dias no IMT — +2 pontos (pago, ~250 €).' }
      ]
    },
    {
      id: 'speed-cameras',
      title: 'Radares — margem de erro e como funcionam',
      content: [
        { kind: 'checklist', items: [
          '📐 Margem de erro oficial: **7%** (integrada no cálculo da coima)',
          'Exemplo: limite 120, velocidade 140 — será registado como (140 × 0.93 = 130.2) → coima por +10 km/h, e não +20',
          'Radares fixos: há sinalização de aviso 300 m antes',
          'Radares ocultos da ANSR: sem aviso, podem estar em viaturas da GNR',
          'Radares móveis — frequentemente na berma em pequenas aldeias nas estradas nacionais',
          'A coima chega por correio à morada do proprietário em 30–90 dias',
          '🕐 Prazo de pagamento: 15 dias — minimum da coima (×1), 30 dias — sem agravamento, depois — ×2–3',
          '⚖️ Impugnação: através de recurso em tribunal, no prazo de 20 dias após receber a notificação — advogado 150–300 €'
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
          '📧 Notificações por email da ANSR — subscrever em ansr.pt para avisos sobre novas coimas',
          '📞 Chamada para o IMT 800 501 501',
          '📄 Certidão da carta de condução — pedido através de imt-ip.pt, mostra o histórico completo (para trabalho, visto, tribunal)'
        ]}
      ]
    },
    {
      id: 'foreign-licence',
      title: 'Para cartas de condução não portuguesas',
      content: [
        { kind: 'paragraph', text: 'O sistema de pontos aplica-se a **todos** os condutores no território de Portugal, mesmo com cartas estrangeiras. Ao atingir 0 pontos — perda do direito de conduzir em Portugal (a sua carta do país de origem não é válida em Portugal); ao regressar a casa — a carta continua válida como habitualmente.' },
        { kind: 'checklist', items: [
          'As coimas associadas a cartas estrangeiras são registadas na base de dados centralizada EUCARIS (para cartas da UE) ou no registo nacional de Portugal',
          'Ao trocar a carta por uma portuguesa (após a troca) — os pontos são transferidos',
          'As notificações de coimas chegam à morada de registo do veículo',
          'Para um automóvel alugado com carta britânica: a empresa recebe a coima e emite-lhe a cobrança + 30–50 € de taxa administrativa'
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

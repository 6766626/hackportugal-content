export default {
  editorialVoice: 'hackportugal',
  id: 'emergency-112',
  categoryId: 'emergency_rights',
  title: 'Contactos de emergência em Portugal (112 e outros)',
  tldr: 'O número único 112 — ambulância, bombeiros, polícia. SNS24 (808 24 24 24) — aconselhamento médico por telefone. INEM (112) — emergência médica. PSP/GNR — polícia. Os números são universais e gratuitos.',
  tags: ['112', 'ambulância', 'polícia', 'emergência'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'emergency',
      title: 'Números principais',
      content: [
        { kind: 'checklist', items: [
          '112 — número único de emergência para todas as situações',
          'SNS24 — 808 24 24 24 — aconselhamento médico, marcação de consulta',
          'PSP — 21 765 4242 (Lisboa) — polícia urbana',
          'GNR — 213 217 000 — gendarmerie (fora das cidades)',
          'Linha de Emergência Social — 144 — apoio social 24/7',
          'APAV — 116 006 — apoio a vítimas de violência',
          'SOS Criança — 116 111 — apoio a crianças'
        ]}
      ]
    },
    {
      id: 'what-to-say',
      title: 'O que dizer ao ligar para o 112',
      content: [
        { kind: 'paragraph', text: 'O operador fala português e inglês. Se necessário, é chamado um intérprete (russo disponível).' },
        { kind: 'checklist', items: [
          '1. Localização — rua, número da porta, cidade, freguesia (Junta de Freguesia)',
          '2. O que aconteceu — ambulância / incêndio / polícia',
          '3. Quantas pessoas ficaram feridas, estado',
          '4. O seu nome e número de telefone',
          '5. Não desligue — o operador dirá quando pode fazê-lo'
        ]}
      ]
    },
    {
      id: 'lost-docs',
      title: 'Perda de documentos',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Passaporte da Federação Russa', content: [
            { kind: 'paragraph', text: 'Consulado da Rússia em Lisboa (R. Pinheiro Chagas 37) — apresentar imediatamente uma declaração de perda, obter um certificado de regresso.' }
          ]},
          { id: 'l2', title: 'Cartão de Cidadão (documento de identificação de cidadão português)', content: [
            { kind: 'paragraph', text: 'Bloquear através do número 211 950 500 (IRN, 24/7). Pedido de novo documento — em qualquer Espaço Cidadão.' }
          ]},
          { id: 'l3', title: 'Autorização de residência (título de residência)', content: [
            { kind: 'paragraph', text: 'Participação à PSP (auto policial) → marcação na AIMA para substituição → taxa de 82 € → espera de 30-60 dias.' }
          ]},
          { id: 'l4', title: 'Cartão bancário', content: [
            { kind: 'paragraph', text: 'Bloquear na aplicação ou por telefone junto do banco. O cartão MB WAY é bloqueado instantaneamente na aplicação.' }
          ]}
        ]}
      ]
    },
    {
      id: 'embassies',
      title: 'Embaixadas e consulados (RU/BY/UA/KZ)',
      content: [
        { kind: 'checklist', items: [
          'Federação Russa, Lisboa — Rua Pinheiro Chagas, 37 · +351 21 846 2424',
          'Bielorrússia — não há embaixada em Portugal, a mais próxima fica em Madrid',
          'Ucrânia — Rua de Alcolena 17, Lisboa · +351 21 301 1030',
          'Cazaquistão — não há embaixada, representação através de Madrid'
        ]}
      ]
    },
    {
      id: 'insurance',
      title: 'Seguro e SNS',
      content: [
        { kind: 'paragraph', text: 'A assistência de emergência no SNS é prestada a todos sem excepção (incluindo pessoas sem estatuto legal e turistas). Para cuidados programados e confirmação de despesas, é necessário o Número de Utente (número de utente do SNS).\n\nUm seguro privado reduz as filas de espera para casos não urgentes.' }
      ]
    }
  ],
  sources: [
    { title: 'INEM — Instituto Nacional de Emergência Médica', url: 'https://www.inem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS24 — linha 808 24 24 24', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'PSP — Polícia de Segurança Pública', url: 'https://www.psp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APAV — apoio a vítimas', url: 'https://apav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Embaixada da Federação Russa em Lisboa', url: 'https://lisbon.mid.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}

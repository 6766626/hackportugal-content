export default {
  editorialVoice: 'hackportugal',
  id: 'eu-flight-compensation',
  categoryId: 'emergency_rights',
  title: 'Compensações por voo cancelado ou atrasado (UE 261/2004)',
  tldr: 'O Regulamento UE 261/2004 dá compensações fixas de 250 € / 400 € / 600 € por voos cancelados ou atrasos ≥ 3 horas, bem como o direito a assistência (comida, hotel) para voos a partir de PT ou para PT em companhias aéreas da UE. Apresente o pedido à companhia aérea no prazo de 30 dias. Recusa / silêncio — reclamação à ANAC (Autoridade Nacional da Aviação Civil).\n\nTambém pode recorrer a serviços como AirHelp / Flightright por uma comissão de 25 %.',
  tags: ['voo', 'compensação', 'ue 261', 'anac', 'companhia aérea'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-applies',
      title: 'Quando se aplica',
      content: [
        { kind: 'checklist', items: [
          '✈️ Voo a partir de um aeroporto na UE (qualquer transportadora) OU para um aeroporto da UE numa transportadora da UE',
          '🕐 Atraso ≥ 3 horas à chegada',
          '❌ Cancelamento < 14 dias antes da partida',
          '🪑 Recusa de embarque por overbooking',
          '✋ Responsabilidade da companhia aérea (não uma circunstância extraordinária — relâmpago, greve de trabalhadores que não sejam seus)'
        ]},
        { kind: 'warning', text: 'Força maior (trovoada, terramoto, greves políticas) — não há direito a compensação, mas o direito a assistência mantém-se.' }
      ]
    },
    {
      id: 'amounts',
      title: 'Montantes da compensação',
      content: [
        { kind: 'checklist', items: [
          '🌍 Até 1500 km: 250 €',
          '🌎 1500–3500 km ou UE > 1500 km: 400 €',
          '🌏 > 3500 km: 600 €',
          '🎟️ São montantes fixos, NÃO dependem do preço do bilhete',
          '👨‍👩‍👧 Por cada passageiro separadamente',
          '🔁 Mais: reembolso do bilhete OU reencaminhamento + direito a assistência'
        ]}
      ]
    },
    {
      id: 'care-rights',
      title: 'Direito a assistência — enquanto espera',
      content: [
        { kind: 'paragraph', text: 'Em atrasos ≥ 2 horas, a companhia aérea É OBRIGADA a assegurar:' },
        { kind: 'checklist', items: [
          '🍔 Refeições e bebidas proporcionais ao tempo de espera',
          '📞 2 chamadas telefónicas / emails',
          '🏨 Hotel — se o atraso implicar pernoita',
          '🚕 Transfer para o hotel',
          '🔄 Se houver recusa — guarde os recibos, para reembolso posterior'
        ]}
      ]
    },
    {
      id: 'how-to-claim',
      title: 'Como apresentar o pedido',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: '1. Reunir provas', content: [
            { kind: 'checklist', items: [
              'Cartão de embarque',
              'Confirmação da reserva',
              'Foto do painel com o atraso / captura de ecrã do email',
              'Recibos de comida / transfer / hotel (para compensação das despesas de assistência)',
              'Testemunhas (nome, contactos dos passageiros próximos)'
            ]}
          ]},
          { id: 'h2', title: '2. Formulário no site da companhia aérea', content: [
            { kind: 'checklist', items: [
              'TAP: flytap.com/claims',
              'Ryanair: ryanair.com/help',
              'easyJet: easyjet.com',
              'Wizz: wizzair.com',
              'Prazo de resposta: 2–6 semanas',
              'Recusam frequentemente — avance para o passo 3'
            ]}
          ]},
          { id: 'h3', title: '3. Reclamação ao regulador', content: [
            { kind: 'checklist', items: [
              'ANAC (PT) — anac.pt → Consumidor → Reclamação',
              'Arbitragem CIAC — para pedidos < 5 000 €',
              'Livro de Reclamações — versão em papel no aeroporto',
              'Prazo de apreciação: 3–6 meses',
              'A ANAC pode multar a companhia aérea'
            ]}
          ]},
          { id: 'h4', title: '4. Alternativa: serviços', content: [
            { kind: 'paragraph', text: 'AirHelp, Flightright, ClaimCompass — cobram 25–35 % de comissão, mas tratam de tudo por si. Pagamento apenas em caso de sucesso. Bom para casos complexos ou se o seu tempo vale mais.' }
          ]},
          { id: 'h5', title: '5. Último recurso: tribunal', content: [
            { kind: 'paragraph', text: 'Julgado de Paz (tribunal de pequenas causas) para pedidos < 15 000 €. Taxa de justiça 70 €. A companhia aérea aceita muitas vezes antes do tribunal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'examples',
      title: 'Exemplos',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Lisboa → Londres, atraso de 4 horas', content: [
            { kind: 'paragraph', text: 'Distância ~1550 km → compensação de 400 € por passageiro. Se a causa for técnica — sim. Se for trovoada — não.' }
          ]},
          { id: 'e2', title: 'Lisboa → Moscovo (cancelado)', content: [
            { kind: 'paragraph', text: 'Não há voos directos desde 2022. Voo Lisboa → Istambul (3000 km) → compensação de 400 €. Para Istambul → Moscovo — não é UE 261, não é compensável.' }
          ]},
          { id: 'e3', title: 'Ryanair cancelou Porto → Madrid', content: [
            { kind: 'paragraph', text: '< 1500 km → 250 €. Mais escolha: reembolso do bilhete OU reencaminhamento no voo seguinte.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Compensação < 1500 km', amountEUR: 250 },
    { label: 'Compensação 1500–3500 km', amountEUR: 400 },
    { label: 'Compensação > 3500 km', amountEUR: 600 },
    { label: 'Serviços AirHelp (comissão)', amountEUR: 0, note: '25–35 % do montante' }
  ],
  sources: [
    { title: 'Regulamento (CE) n.º 261/2004', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ANAC — Direitos dos passageiros', url: 'https://www.anac.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UE — Direitos dos passageiros', url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

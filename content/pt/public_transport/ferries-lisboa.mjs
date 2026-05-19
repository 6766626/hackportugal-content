export default {
  editorialVoice: 'hackportugal',
  id: 'ferries-lisboa',
  categoryId: 'public_transport',
  title: 'Ferries de Lisboa — travessias pelo Tejo e pela costa',
  tldr: 'Transtejo/Soflusa — ferries pelo Tejo: Lisboa—Cacilhas (10 min, 1,40 €), Cais do Sodré—Trafaria—Porto Brandão, Belém—Trafaria, Terreiro do Paço—Barreiro/Montijo. Aceitam o cartão Navegante. Para turistas — Tejo Boat Tour. Para quem gosta de praias — Cacilhas + autocarro 124 até Costa da Caparica. No inverno, os horários são reduzidos; verifique antecipadamente em ttsl.pt.',
  tags: ['ferry', 'transtejo', 'soflusa', 'cacilhas', 'lisboa', 'tejo'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'routes',
      title: '⛴️ Rotas pelo Tejo',
      content: [
        { kind: 'substeps', items: [
          { id: 'cacilhas', title: 'Cais do Sodré ↔ Cacilhas (a mais popular)', content: [
            { kind: 'checklist', items: [
              '⏱️ 10 min na água',
              '🕐 A cada 15–30 min 06:00–01:00',
              '💰 1,40 € (Navegante 0,90 €), Tejo 24h 6 €',
              '🍷 Cacilhas — zona de cafés e cervejarias junto à água, excelente fado',
              '🍤 Marisco famoso: Restaurante Ponto Final',
              '🚌 De Cacilhas, autocarro 124 → Costa da Caparica (praia)'
            ]}
          ]},
          { id: 'belem', title: 'Belém ↔ Trafaria', content: [
            { kind: 'checklist', items: [
              '⏱️ 15 min',
              '🕐 A cada 30–45 min 07:00–22:00',
              '💰 1,40 €',
              '🏰 Trafaria — aldeia piscatória, praias da Costa da Caparica nas proximidades'
            ]}
          ]},
          { id: 'porto-brandao', title: 'Cais do Sodré ↔ Porto Brandão (via Trafaria)', content: [
            { kind: 'checklist', items: [
              '⏱️ 25–30 min',
              '🕐 Menos frequente, 1–2 vezes por hora',
              '💰 1,80 €',
              '🍷 Porto Brandão — baía piscatória tranquila'
            ]}
          ]},
          { id: 'barreiro', title: 'Terreiro do Paço ↔ Barreiro / Montijo (Soflusa)', content: [
            { kind: 'checklist', items: [
              '⏱️ Barreiro 25 min, Montijo 30 min',
              '🕐 A cada 30–60 min 06:00–23:00',
              '💰 Barreiro 2,50 €, Montijo 3,30 €',
              '🚂 A partir do Barreiro, comboios CP para o Alentejo (Évora, Beja, Faro)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tickets',
      title: '🎫 Bilhetes',
      content: [
        { kind: 'substeps', items: [
          { id: 'occasional', title: 'Ocasionais', content: [
            { kind: 'checklist', items: [
              '🎫 Máquina na estação (Cais do Sodré, Belém, Terreiro)',
              '💳 Cartão ou dinheiro',
              '⏰ Bilhete temporário: 1 hora a partir da validação',
              '🔁 Durante esse período, pode fazer transbordo para o metro ou autocarro (uma tarifa)'
            ]}
          ]},
          { id: 'navegante', title: 'Passe mensal Navegante', content: [
            { kind: 'checklist', items: [
              '🌐 Navegante Metropolitano (Lisboa — Margem Sul) inclui ferries',
              '💰 30 €/mês — ilimitado em autocarro, metro, comboio CP e ferries',
              '🌟 A opção mais vantajosa para residentes da margem norte e da margem sul',
              '📲 Cartão Navegante ou aplicação Carris'
            ]}
          ]},
          { id: 'tour', title: 'Turísticos', content: [
            { kind: 'checklist', items: [
              '🛥️ Yellow Boat (Hop-on Hop-off) — ferries turísticos Belém + Cacilhas + centro, ≈25 €/dia',
              '🚢 Tejo Sunset Cruise — pôr do sol, ≈30 €/pessoa',
              '⚓ Lisboa Sailing Tour — cruzeiro privado, a partir de 50 €/pessoa',
              '🏝️ Sesimbra/Setúbal Boat Tour — golfinhos, ≈50 €/pessoa'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Dicas',
      content: [
        { kind: 'checklist', items: [
          '🚲 Bicicletas no ferry são gratuitas — excelente plano: «Cacilhas + bicicleta até Costa da Caparica»',
          '🐶 Animais pequenos em transportadora — gratuito',
          '⛅ No inverno, o horário é reduzido; ferries nocturnos apenas de sexta-feira a domingo',
          '🌊 Tempestade >2 m: os ferries podem ser cancelados (raro, normalmente apenas Belém—Trafaria)',
          '🥪 Não há bufete no ferry — leve comida consigo',
          '📸 Pôr do sol ideal: ferry Cacilhas → Cais do Sodré às 19:00 no verão',
          '⚠️ Greve nos transportes — os ferries são cancelados; acompanhe os meios de comunicação na véspera'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cacilhas/Trafaria ocasional', amountEUR: 1.40 },
    { label: 'Barreiro ocasional', amountEUR: 2.50 },
    { label: 'Montijo ocasional', amountEUR: 3.30 },
    { label: 'Tejo 24h turístico', amountEUR: 6 },
    { label: 'Navegante Metropolitano (ilimitado)', amountEUR: 30, note: '€/mês' }
  ],
  sources: [
    { title: 'Transtejo / Soflusa — site oficial', url: 'https://ttsl.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Carris Metropolitana — Navegante', url: 'https://www.carrismetropolitana.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

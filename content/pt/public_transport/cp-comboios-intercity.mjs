export default {
  editorialVoice: 'hackportugal',
  id: 'cp-comboios-intercity',
  categoryId: 'public_transport',
  title: 'CP — comboios: Alfa Pendular, Intercidades e suburbanos',
  tldr: 'A CP (Comboios de Portugal) é a empresa ferroviária pública. Principais categorias de comboios: Alfa Pendular (rápido, Lisboa — Porto 2:50, ~30 €), Intercidades (mais lento, ~25 €), Regional/Urbano (suburbanos e regionais). É melhor comprar bilhetes com antecedência — 60 dias antes em cp.pt ou na aplicação «CP — Comboios de Portugal». Descontos: jovens até 30 anos — 50%, crianças 4–12 anos — 50%, ≥65 anos — 50%. Bagagem — gratuita. Bicicletas: em Regional, e também ao fim de semana em Urbano.',
  tags: ['cp', 'comboio', 'alfa pendular', 'intercidades', 'lisboa porto', 'comboio'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'categories',
      title: '🚂 Categorias de comboios',
      content: [
        { kind: 'substeps', items: [
          { id: 'ap', title: 'Alfa Pendular (AP) — o topo de gama', content: [
            { kind: 'checklist', items: [
              '⚡ Lisboa Sta Apolónia/Oriente → Porto Campanhã: 2:50',
              '⚡ Lisboa → Faro: 3:00',
              '🪑 Conforto: 2 classes (Conforto + Turística), Wi-Fi, tomadas, vagão-restaurante',
              '💰 Preço: 25–35 € padrão, 1.ª classe 35–50 €',
              '🎟️ Reserva obrigatória (lugares numerados)',
              '📅 Bilhetes antecipados Tarifa Antecipada: -25% até -50%, disponíveis 60 dias antes'
            ]}
          ]},
          { id: 'ic', title: 'Intercidades (IC) — expressos regionais', content: [
            { kind: 'checklist', items: [
              '🕐 Lisboa → Porto: 3:30 (~5 € mais barato do que AP)',
              '🕐 Lisboa → Faro: 3:30',
              '🕐 Lisboa → Évora / Beja: 1:30 / 3:00',
              '💰 Preço: 18–30 €',
              '🎟️ Reserva obrigatória',
              '🪑 Existe 1.ª classe (5–10 € extra)',
              '🚲 Bicicletas em vagão especial (mediante pedido)'
            ]}
          ]},
          { id: 'regional', title: 'Regional + InterRegional — comboios lentos', content: [
            { kind: 'checklist', items: [
              '⏰ Todas as estações, 50–80 km/h',
              '💰 Preço: 5–15 € (percursos curtos)',
              '🎟️ Sem reserva (bilhete para o dia)',
              '🚲 Bicicletas gratuitas',
              '👨‍👩‍👧 Ideal para viagens curtas: Lisboa-Sintra, Porto-Aveiro'
            ]}
          ]},
          { id: 'urbano', title: 'Urbano — comboios suburbanos', content: [
            { kind: 'checklist', items: [
              '🚉 Lisboa: 4 linhas (Sintra, Cascais, Azambuja, Sado)',
              '🚉 Porto: linhas para Aveiro, Braga, Marco de Canaveses',
              '💳 Carris Metro Lisboa: o cartão Navegante por 30 €/mês cobre as linhas Sintra/Cascais',
              '💳 Porto: o cartão Andante cobre o Urbano',
              '⏰ Frequentes: a cada 15–30 min'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'buying-tickets',
      title: '🎟️ Onde comprar',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: 'Online (recomendado)', content: [
            { kind: 'checklist', items: [
              '🌐 cp.pt — site oficial, SEM língua russa (apenas PT/EN)',
              '📱 Aplicação «CP — Comboios de Portugal» (iOS/Android)',
              '🔒 O bilhete fica guardado na aplicação como código QR — não é necessário imprimir',
              '📅 Reserva 60 dias antes — os preços mais baixos',
              '💳 Aceitam: Multibanco, MB WAY, cartões Visa/Mastercard, PayPal'
            ]}
          ]},
          { id: 'station', title: 'Na estação', content: [
            { kind: 'checklist', items: [
              '🤖 Máquina na estação — pagamento por cartão, bilhete impresso',
              '👤 Bilheteira — dinheiro/cartão, pode haver fila',
              '⚠️ Para comboios Regional/Urbano, a máquina de validação pode estar na própria plataforma',
              '🚫 Comprar bilhete no comboio NEM sempre é possível — multa até 100 €'
            ]}
          ]},
          { id: 'discounts', title: 'Descontos', content: [
            { kind: 'checklist', items: [
              '🧒 Crianças 4–12 anos: -50% (até 4 anos gratuito, se não ocuparem lugar separado)',
              '👨‍🎓 Jovens (Cartão Jovem ≤30): -25% na tarifa + promoções adicionais',
              '👴 ≥ 65 anos: -50%',
              '👨‍👩‍👧‍👦 Família (≥3): -25% para todos',
              '🎫 Tarifa Antecipada: -25% até -50%, quantidade limitada',
              '👨‍🎓 Estudantes (Cartão de Estudante): -25%',
              '🎖️ Funcionários da CP: gratuito (para eles e família)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '⏰ AP e IC circulam frequentemente dentro do horário — atrasos são raros',
          '🚉 Em Lisboa, AP/IC partem das estações Sta Apolónia (centro) ou Oriente (leste); confirme ao comprar',
          '🚉 No Porto, a estação principal é Campanhã (leste); depois pode chegar a São Bento (centro) num comboio Urbano',
          '📦 Bagagem de mão gratuita (até 30 kg ou 2 volumes + mochila). Bagagem grande — vagão separado em IC',
          '🐕 Animais pequenos em transportadora: gratuito. Cães grandes com açaime — 50% do bilhete',
          '🚲 Bicicleta: em Regional é gratuita; em IC — vagão para bicicletas mediante pedido; em AP — não é permitido',
          '☕ O Wi-Fi em AP/IC funciona na rota Lisboa — Porto; noutras rotas é mais fraco',
          '📶 O sinal GSM é mau em túneis de montanha — descarregue tudo o que precisar com antecedência',
          '⌨️ Se o comboio for remarcado — o bilhete é válido no comboio seguinte da mesma categoria'
        ]}
      ]
    },
    {
      id: 'special-routes',
      title: '🌟 Rotas especiais',
      content: [
        { kind: 'checklist', items: [
          '🍷 **Linha do Douro** (Porto-Régua-Pocinho) — percurso panorâmico ao longo do rio Douro, zona vinícola. Comboio Regional, 4 h até Pocinho. Época turística',
          '🌊 **Linha do Algarve** (Lagos-Faro-VRSA) — praias do Algarve, IC + Regional',
          '⛰️ **Linha Beira Alta** (Lisboa-Pampilhosa-Guarda) — percurso de montanha até à fronteira espanhola',
          '🇪🇸 **Sud Express / Lusitânia** (Lisboa-Hendaye/Madrid) — comboios nocturnos históricos, **suspensos desde 2020** e, em 2026, sem serviço regular; podem ser retomados no futuro (actualizações: cp.pt e Renfe)',
          '🚂 **Comboio Histórico do Vouga** — comboio turístico a vapor, verão/outono'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'AP Lisboa-Porto Turística', amountEURMin: 25, amountEURMax: 35 },
    { label: 'AP 1.ª classe (Conforto)', amountEURMin: 35, amountEURMax: 50 },
    { label: 'IC Lisboa-Porto', amountEURMin: 18, amountEURMax: 30 },
    { label: 'Regional percurso curto', amountEURMin: 5, amountEURMax: 15 },
    { label: 'Tarifa Antecipada (60 dias)', amountEURMin: 12, amountEURMax: 25, note: '-25% até -50%' }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Instituto da Mobilidade e dos Transportes', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

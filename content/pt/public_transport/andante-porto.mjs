export default {
  editorialVoice: 'hackportugal',
  id: 'andante-porto',
  categoryId: 'public_transport',
  title: 'Andante — cartão único do Porto: metro, autocarro, comboios suburbanos',
  tldr: 'Andante é o passe/título único para o metro do Porto, autocarros STCP e comboios suburbanos CP na área metropolitana. Sistema zonal: quanto mais longe — mais caro. Para turistas — Andante Tour de 1/3 dias (7,75–16,55 €). Para residentes — passe mensal Z2 por 30 €/mês, MetroPorto regional ilimitado — 40 €/mês. O cartão pode ser comprado numa máquina do metro (Andante Azul = ocasional, 0,60 €) ou PayShop. Também existe Andante eTransit na aplicação.',
  tags: ['andante', 'porto', 'metro', 'autocarro', 'stcp', 'passe'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'system',
      title: '🗺️ Sistema zonal Andante',
      content: [
        { kind: 'paragraph', text: 'A região MetroPorto está dividida em 12 zonas. O bilhete é calculado pelo número de zonas atravessadas pelo percurso.' },
        { kind: 'checklist', items: [
          '🟦 Z2 — 1–2 zonas: centro do Porto (Trindade, Bolhão, São Bento), Vila Nova de Gaia',
          '🟩 Z3 — 3 zonas: Maia, Matosinhos, Gondomar, Senhora da Hora',
          '🟧 Z4 — 4 zonas: Vila do Conde, Espinho',
          '🟨 Z5+ — subúrbios mais distantes: Aveiro, Trofa',
          '⚠️ A tarifa depende da zona de partida e da zona de destino. O sistema não é simples, mas as máquinas calculam o custo automaticamente'
        ]}
      ]
    },
    {
      id: 'options',
      title: '🎫 Opções de cartões e bilhetes',
      content: [
        { kind: 'substeps', items: [
          { id: 'occasional', title: 'Bilhetes ocasionais — para turistas e viagens pouco frequentes', content: [
            { kind: 'checklist', items: [
              '🟪 Andante Azul — cartão por 0,60 € (pode ser carregado com bilhetes ocasionais)',
              '💰 Ocasional Z2: 1,40 € — 1 hora na zona 2',
              '💰 Andante 24h Tour 1: 7,75 € — ilimitado por 24 horas em toda a rede',
              '💰 Andante 24h Tour 3: 16,55 € — 3 dias em toda a rede',
              '💰 Andante Tour 24h (Z2): 4,15 € — para quem circula apenas pelo centro',
              '🎟️ Pode comprar e validar logo no torniquete ou no autocarro'
            ]}
          ]},
          { id: 'monthly', title: 'Passes mensais (para residentes)', content: [
            { kind: 'checklist', items: [
              '👤 Andante Mensal Z2 (centro do Porto): 30 €/mês',
              '👤 Andante Mensal Z3: 35 €/mês',
              '👤 Andante Mensal Z4: 40 €/mês',
              '🚇 Mensal MetroPorto (ilimitado em toda a região): 40 €/mês',
              '🎓 Andante Estudante (para estudantes): -50%, ≈15 €',
              '👴 Andante Sénior (>65): -50%',
              '👨‍👩‍👧 Andante Família (3+ pessoas) — passe conjunto, -25% para cada pessoa',
              '⚠️ Para o pedido é necessário Andante Branca (nominativo) — fotografia + Cartão de Cidadão, numa estação de metro'
            ]}
          ]},
          { id: 'app', title: 'Aplicação Andante (eTransit)', content: [
            { kind: 'checklist', items: [
              '📱 «Anda» (App Store / Google Play) — aplicação oficial',
              '🛒 Compra de bilhetes no telemóvel, código QR no torniquete',
              '🔋 Validação da viagem por NFC com um só toque no telemóvel',
              '💳 Associação de cartão, pagamento automático',
              '📊 Histórico de viagens, estatísticas de despesas'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-use',
      title: '🚇 Como utilizar',
      content: [
        { kind: 'checklist', items: [
          '🎫 Na estação de metro — aproximar o cartão do torniquete, verificar a cor: verde — tudo em ordem, vermelho — não há bilhete ou a zona não é a correcta',
          '🚌 No autocarro STCP — aproximar o cartão do validador ao entrar',
          '🚞 No comboio suburbano CP — validar o bilhete na máquina da plataforma ou pedir ao revisor',
          '⏰ O bilhete é válido por tempo — depois da primeira validação, é válido durante 1–2 horas, consoante o número de zonas',
          '🔁 Dentro desse período, pode fazer transbordos sem novo pagamento',
          '⚠️ Fiscalização nas estações e nos autocarros — coima de 60–120 €, se viajar sem bilhete ou com bilhete expirado'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '🌅 Ao fim de semana é mais barato: Andante Família para 4 pessoas = 7,50 € ilimitado',
          '🚖 Uber/Bolt no Porto por vezes é mais barato do que o autocarro para 3–4 pessoas numa distância curta (1–2 €/pessoa)',
          '🛒 Comprar Andante Branca (nominativo) compensa mais a longo prazo, se planeia viver aqui',
          '🚲 BUGA — bicicletas urbanas do Porto, gratuitas com caução',
          '🚜 Aveiro / Espinho estão acessíveis com Andante Z5 — praia por 2 € por dia!',
          '📅 Dia 1 do mês — multidão no metro da Trindade para fazer passes; vá entre os dias 5 e 10'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Andante Azul (cartão)', amountEUR: 0.60 },
    { label: 'Ocasional Z2', amountEUR: 1.40 },
    { label: 'Andante Tour 24h', amountEUR: 7.75 },
    { label: 'Andante Tour 3 dias', amountEUR: 16.55 },
    { label: 'Mensal Z2', amountEUR: 30 },
    { label: 'Mensal MetroPorto (ilimitado)', amountEUR: 40 }
  ],
  sources: [
    { title: 'Metro do Porto — site oficial', url: 'https://www.metrodoporto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'STCP — Sociedade de Transportes Colectivos do Porto', url: 'https://www.stcp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}

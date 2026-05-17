export default {
  editorialVoice: 'hackportugal',
  id: 'intercity-buses',
  categoryId: 'travel_portugal',
  title: 'Autocarros entre cidades de Portugal — Rede Expressos, FlixBus, Alsa',
  tldr: 'Principais operadores: Rede Expressos (principal rede de Portugal, partidas de Sete Rios), FlixBus (rotas internacionais e algumas rotas em Portugal), Alsa (orientada para Espanha), EVA Transportes (sul, Algarve). Lisboa — Porto ≈ 3,5 horas, 15–25 €; Lisboa — Faro ≈ 3 horas, 20–30 €. É melhor reservar online: com antecedência fica mais barato.',
  tags: ['autocarro', 'flixbus', 'rede expressos', 'alsa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'operators',
      title: 'Operadores',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Rede Expressos', content: [
            { kind: 'paragraph', text: 'A principal rede de Portugal. Cobre todas as cidades grandes e médias. A partir de Lisboa — terminal de Sete Rios (metro Jardim Zoológico). Reserva em rede-expressos.pt ou na aplicação. Preços de 10–30 €, dependendo da hora.' },
          ]},
          { id: 'o2', title: 'FlixBus', content: [
            { kind: 'paragraph', text: 'Operador alemão. Forte cobertura das rotas Lisboa — Porto, Lisboa — Faro, bem como de destinos internacionais (Espanha, França, Alemanha). Melhores preços com reserva antecipada (a partir de 5 €). Wi-Fi e tomadas.' },
          ]},
          { id: 'o3', title: 'Alsa', content: [
            { kind: 'paragraph', text: 'Operador espanhol. Bom para rotas para Espanha (Madrid, Barcelona, Sevilha). Dentro de Portugal — Lisboa — Porto, Lisboa — Faro. Frequentemente mais barato do que a FlixBus.' },
          ]},
          { id: 'o4', title: 'EVA Transportes', content: [
            { kind: 'paragraph', text: 'Operador regional do Algarve. Bom para deslocações no sul (Faro — Tavira — Lagos).' },
          ]},
          { id: 'o5', title: 'Transdev / Rodonorte / outros operadores regionais', content: [
            { kind: 'paragraph', text: 'Para viagens para pequenas cidades e aldeias. Os horários são publicados no terminal rodoviário da respetiva cidade, bem como no site do IMT — regulador dos transportes.' }
          ]}
        ]}
      ]
    },
    {
      id: 'prices-routes',
      title: 'Principais rotas (preços 2026)',
      content: [
        { kind: 'checklist', items: [
          'Lisboa ↔ Porto: 3,5 h, 15–25 € (FlixBus a partir de 5 € comprando com uma semana de antecedência)',
          'Lisboa ↔ Coimbra: 2 h, 10–15 €',
          'Lisboa ↔ Faro (Algarve): 3 h, 20–30 €',
          'Lisboa ↔ Évora (Alentejo): 1,5 h, 12–15 €',
          'Porto ↔ Braga: 1 h, 7–10 €',
          'Porto ↔ Guimarães: 50 min, 6–9 €',
          'Lisboa ↔ Madrid: 7–8 h, 30–60 €',
          'Porto ↔ Sevilha: 8–10 h, 40–70 €',
          'Lisboa ↔ Paris: 24–28 h, 90–150 € (apenas FlixBus)'
        ]}
      ]
    },
    {
      id: 'booking',
      title: 'Como reservar',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Comparar opções', content: [
            { kind: 'paragraph', text: 'Compare os preços diretamente nos sites dos operadores — isto dá sempre a visão mais atualizada. O preço do bilhete muda dinamicamente em função da ocupação do serviço e do dia da semana.' }
          ]},
          { id: 'b2', title: '2. Reservar online', content: [
            { kind: 'paragraph', text: 'A reserva diretamente no site do operador é normalmente a opção mais fiável. Os melhores preços surgem 2–4 semanas antes da viagem; no dia da partida, as tarifas são 30–70% mais elevadas.' }
          ]},
          { id: 'b3', title: '3. Bilhete no telemóvel', content: [
            { kind: 'paragraph', text: 'O código QR chega por e-mail ou fica disponível na aplicação. Não é necessário imprimir. Verifique o número do autocarro e a plataforma no painel do terminal rodoviário.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          'Quanto mais cedo reservar, mais barato fica. Com 2–4 semanas de antecedência — a partir de 5 € na FlixBus',
          'A FlixBus e a Alsa são mais pontuais do que a Rede Expressos, mas, em geral, todas funcionam bem',
          'Bagagem: normalmente estão incluídos 1 saco de mão e 1 volume no porão. Pelo 2.º mala — há suplemento',
          'Há Wi-Fi na maioria dos autocarros modernos, mas funciona de forma instável',
          'Nos serviços de longa distância, normalmente há casa de banho',
          'Os autocarros ao fim da tarde e noturnos ajudam a poupar numa noite de alojamento',
          'Sete Rios, em Lisboa, é o terminal principal. Oriente também tem alguns serviços',
          'No Porto — Campanhã e Rodoviária Campanhã'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'IMT — regulador dos transportes de Portugal', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMT — Autoridade da Mobilidade e dos Transportes', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rede Expressos — informação do operador', url: 'https://rede-expressos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

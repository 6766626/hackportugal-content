export default {
  editorialVoice: 'hackportugal',
  id: 'navegante-lisboa',
  categoryId: 'public_transport',
  title: 'Navegante — passe da Grande Lisboa',
  tldr: 'Navegante é o passe único para a região de Lisboa: metro, autocarros Carris, comboios CP, ferries fluviais Transtejo, Fertagus, MTS. Dois tipos principais: mensal Metropolitano (40 €) ou Municipal (30 €).\n\nCrianças até aos 12 anos — grátis (desde 2024), jovens dos 13 aos 18 anos e estudantes — 20 €. Compra-se numa máquina do metro, nos postos da Carris ou através da aplicação.',
  tags: ['navegante', 'passe', 'lisboa', 'metro', 'autocarro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Tipos de cartões',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Navegante Metropolitano (40 €/mês)', content: [
            { kind: 'paragraph', text: 'Funciona em TODA a área metropolitana de Lisboa (Lisboa + Sintra + Cascais + Almada + Loures + Odivelas + Vila Franca + Mafra + 10 outros).\n\nAbrange metro, Carris, comboios suburbanos CP, Transtejo, Fertagus, MTS Seixal. A melhor opção se se desloca entre municípios.' }
          ]},
          { id: 't2', title: 'Navegante Municipal (30 €/mês)', content: [
            { kind: 'paragraph', text: 'Apenas no SEU município. Para um residente em Lisboa — apenas Lisboa (incluindo metro + Carris). Para um residente em Cascais — apenas Cascais + CP dentro do município. NÃO funciona fora dos limites do município.' }
          ]},
          { id: 't3', title: 'Navegante Social / benefícios', content: [
            { kind: 'checklist', items: [
              'Crianças até aos 12 anos — GRÁTIS (desde 2024)',
              '13–18 anos + estudantes até aos 23 anos — 20 €/mês',
              'Idosos 65+ — 20 €/mês',
              'Refugiados / beneficiários de apoio social — até 50 %'
            ]}
          ]},
          { id: 't4', title: 'Zapping — pagamento por viagem', content: [
            { kind: 'paragraph', text: 'Saldo pré-pago no cartão Navegante. Uma viagem — cerca de 1,80 € no metro, 2 € no autocarro. Desconto de 15 % face à tarifa normal. Para viagens pouco frequentes.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-get',
      title: 'Como obter',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Cartão Navegante físico (cartão de plástico)', content: [
            { kind: 'checklist', items: [
              'Ir a qualquer quiosque do Metro Lisboa ou posto da Carris',
              'Documentos: Cartão de Cidadão/autorização de residência + fotografia',
              'Primeiro cartão: 6 € + primeiro passe mensal',
              'Emissão imediata',
              'Cartão válido sem prazo'
            ]}
          ]},
          { id: 'g2', title: '2. Navegante através do Viva Viagem / cartão amarelo', content: [
            { kind: 'paragraph', text: 'Sistema antigo. Cartão em papel por 50 cêntimos, recarregável com Zapping ou passe de 24 horas (6,80 €). Adequado para turistas.' }
          ]},
          { id: 'g3', title: '3. Navegante através da aplicação (digital)', content: [
            { kind: 'paragraph', text: 'Descarregar a aplicação «Navegante» (Android / iOS). Associar um cartão existente por NFC ou criar uma carteira digital. Carregamento por MB WAY, cartão.' }
          ]},
          { id: 'g4', title: '4. Apple Wallet / Google Pay', content: [
            { kind: 'paragraph', text: 'Desde 2025, o Navegante está integrado. Navegante Wallet Pass no iPhone/Android — aproxima ao torniquete e viaja. Prático, substitui o plástico.' }
          ]}
        ]}
      ]
    },
    {
      id: 'operators',
      title: 'Que operadores estão abrangidos',
      content: [
        { kind: 'checklist', items: [
          '🚇 Metro de Lisboa — 4 linhas',
          '🚌 Carris — mais de 165 linhas de autocarro + elétricos + elevadores',
          '🚆 CP Urbanos de Lisboa — linhas de Cascais, Sintra, Azambuja',
          '⛴️ Transtejo + Soflusa — Barreiro, Cacilhas, Trafaria, Porto Brandão',
          '🚂 Fertagus — linha de Setúbal (através da ponte 25 de Abril)',
          '🚌 Carris Metropolitana — autocarros suburbanos',
          '🛤️ MTS — Metro Sul do Tejo (Almada/Seixal)',
          '🚲 GIRA — bicicletas partilhadas (separado, não incluído no passe)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '💰 O mês conta a partir da data de ativação (não é mês civil)',
          '🔄 Renovação 5 dias antes do fim — sem interrupção',
          '📅 Pagamento automático por MB WAY / débito direto — prático',
          '🏃 No metro, passe com um cartão por pessoa, aproximando-o da zona de leitura — imediato',
          '📱 Nos autocarros Carris — validar à ENTRADA',
          '🚆 CP — validar à ENTRADA na estação, por vezes à saída',
          '🎒 Multa por viajar sem título válido: 120 € de imediato (reduzida para 60 € se pagar no prazo de 20 dias)',
          '🎓 Passe de estudante — apenas com comprovativo de matrícula'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Navegante Metropolitano', amountEUR: 40, note: '€/mês' },
    { label: 'Navegante Municipal', amountEUR: 30, note: '€/mês' },
    { label: 'Crianças 13–18 / estudantes', amountEUR: 20, note: '€/mês' },
    { label: 'Idosos 65+', amountEUR: 20 },
    { label: 'Primeiro cartão (plástico)', amountEUR: 6 },
    { label: 'Multa por viajar sem título válido', amountEURMin: 60, amountEURMax: 120 }
  ],
  sources: [
    { title: 'Navegante — site do operador', url: 'https://www.navegante.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Metropolitano de Lisboa', url: 'https://www.metrolisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Carris — transporte público de Lisboa', url: 'https://www.carris.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMT — Autoridade da Mobilidade e dos Transportes', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}

export default {
  editorialVoice: 'hackportugal',
  id: 'residential-parking',
  categoryId: 'auto_trips',
  title: 'Estacionamento de residente — Lisboa, Cascais, Setúbal',
  tldr: 'Nas grandes cidades, o município vende aos residentes autorizações de estacionamento bonificadas (dístico de residente) — desde gratuito até ~80 €/ano. Funciona com base no local de residência (Atestado de Residência) + registo do automóvel. Lisboa é gerida pela EMEL, Cascais pela Cascais Próxima, Setúbal pela Divisão de Trânsito. Sem dístico, o residente terá de pagar à hora como um turista.',
  tags: ['estacionamento', 'dístico', 'residente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisboa — EMEL',
      content: [
        { kind: 'paragraph', text: 'A EMEL (Empresa Municipal de Mobilidade e Estacionamento de Lisboa) gere todo o estacionamento pago na cidade. Os residentes de uma das 24 freguesias de Lisboa podem obter um dístico de residente.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Condições', content: [
            { kind: 'checklist', items: [
              'Comprovativo de residência — Atestado de Residência da Junta de Freguesia na zona de estacionamento (não na freguesia vizinha)',
              'Automóvel registado no seu NIF no IMT (não em nome de outra pessoa)',
              'Inspecção periódica obrigatória (IPO) e seguro válidos',
              'IUC pago (sem dívidas)'
            ]}
          ]},
          { id: 'l2', title: 'Onde apresentar o pedido', content: [
            { kind: 'paragraph', text: 'EMEL.pt → Dísticos → «Pedir Dístico» — online através da Chave Móvel Digital. Ou num balcão da EMEL (Av. Casal Ribeiro). É emitido em 7-14 dias.' }
          ]},
          { id: 'l3', title: 'Preço', content: [
            { kind: 'checklist', items: [
              '1.º automóvel: 12 €/ano (o primeiro ano é frequentemente gratuito)',
              '2.º automóvel do agregado familiar: 36 €/ano',
              'Cada automóvel adicional: 72 €/ano',
              'Dístico de visitante: 24 €/ano + limitações horárias',
              'Reformados 65+ — desconto de 50%'
            ]}
          ]},
          { id: 'l4', title: 'Zonas', content: [
            { kind: 'paragraph', text: 'O dístico é válido APENAS na sua freguesia. Nas freguesias vizinhas — paga-se à hora. Para veículos eléctricos e híbridos existe uma tarifa separada, além de estacionamento gratuito em algumas zonas (ver abaixo).' }
          ]}
        ]}
      ]
    },
    {
      id: 'cascais',
      title: 'Cascais — Cascais Próxima',
      content: [
        { kind: 'paragraph', text: 'O município de Cascais trata do estacionamento de residente através da Cascais Próxima. Os residentes do município recebem o cartão viver Cascais (cartão municipal), que dá acesso a estacionamento bonificado.' },
        { kind: 'checklist', items: [
          'Primeiro — obter o cartão viver Cascais (ver guia separado)',
          'Após a activação — pedido de dístico em cascaisproxima.pt',
          'Primeiro ano: gratuito',
          'Depois: 10-30 €/ano, consoante a zona',
          'Funciona no centro de Cascais e do Estoril — noutras zonas do município (Alcabideche, São Domingos de Rana), o estacionamento é gratuito'
        ]}
      ]
    },
    {
      id: 'setubal',
      title: 'Setúbal — Câmara Municipal',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência da Junta de Freguesia + registo do automóvel no NIF',
          'Pedido na Divisão de Trânsito, Rua Dr. Francisco Santana Ramos',
          'Cartão de Residente para estacionamento — 20 €/ano',
          'Funciona no centro de Setúbal; Azeitão, Palmela e mais longe — estacionamento gratuito'
        ]}
      ]
    },
    {
      id: 'ev-benefits',
      title: 'Estacionamento gratuito para veículos eléctricos',
      content: [
        { kind: 'checklist', items: [
          'Lisboa: EMEL — as primeiras 2 horas são gratuitas para veículos eléctricos com matrícula verde (marcação MEV)',
          'Porto: estacionamento para veículos eléctricos — desconto de 50% nas zonas municipais',
          'Cascais: estacionamento gratuito para veículos eléctricos nos postos de carregamento municipais',
          'Em todo o país: estacionamento gratuito nas zonas de carregamento Mobi.E durante o carregamento',
          'Sinal distintivo: os veículos eléctricos recebem um símbolo separado no certificado + moldura verde na matrícula'
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Coimas sem dístico',
      content: [
        { kind: 'checklist', items: [
          'Estacionamento sem dístico ou pagamento: 30-50 € (em caso de pagamento rápido)',
          'Estacionamento em lugar para pessoas com deficiência sem documento: 120 € (coima + ponto de penalização)',
          'Reboque: 80-150 € + parqueamento 15 €/dia',
          'Desconto de 50% se pagar no prazo de 15 dias (valor mínimo da coima)',
          'Contestar a coima — através de EMEL.pt ou da Câmara, prazo de 30 dias'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Dístico EMEL Lisboa (1.º automóvel)', amountEUR: 12, note: '/ano, frequentemente 1.º ano gratuito' },
    { label: 'Dístico EMEL Lisboa (2.º automóvel)', amountEUR: 36, note: '/ano' },
    { label: 'Dístico Cascais', amountEURMin: 10, amountEURMax: 30, note: '/ano, 1.º gratuito' },
    { label: 'Cartão residente Setúbal', amountEUR: 20, note: '/ano' },
    { label: 'Coima sem dístico', amountEURMin: 30, amountEURMax: 50 }
  ],
  sources: [
    { title: 'EMEL — Dísticos', url: 'https://www.emel.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Cascais Próxima — Estacionamento', url: 'https://www.cascaisproxima.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Setúbal — Trânsito', url: 'https://www.mun-setubal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

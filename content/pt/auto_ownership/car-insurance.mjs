export default {
  editorialVoice: 'hackportugal',
  id: 'car-insurance',
  categoryId: 'auto_ownership',
  title: 'Seguro automóvel em Portugal — RC obrigatória, Casco opcional',
  tldr: 'Responsabilidade Civil — seguro obrigatório de responsabilidade civil para cada automóvel registado em Portugal (Decreto-Lei 291/2007).\n\nCobre danos causados a terceiros. Casco / Danos Próprios — cobertura do seu automóvel, opcional.\n\nPreços 2026: RC básica a partir de 180 €/ano, pacote completo — 400–1200 €. Compra online nos sites da Tranquilidade / Fidelidade / Zurich / Ageas ou através de mediadores. Condutor novo (2 anos de carta) paga mais 20–50 %.',
  tags: ['seguro', 'rc', 'casco', 'seguro automóvel'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Tipos de cobertura',
      content: [
        { kind: 'substeps', items: [
          { id: 'rc', title: 'RC — Responsabilidade Civil Obrigatória', content: [
            { kind: 'checklist', items: [
              'Obrigatória por lei (Decreto-Lei 291/2007)',
              'Cobre danos causados a terceiros (automóveis, pessoas)',
              'Capitais mínimos da RC: definidos por lei/ASF (ver art. 12 DL 291/2007); é importante distinguir o limite por lesado e o limite por sinistro — confirme os valores actualizados nas publicações da ASF',
              'Certificado Internacional de Seguro Automóvel / antiga Carta Verde — na UE/EEE a RC portuguesa é válida automaticamente, mas é útil ter o certificado; para alguns países fora da UE/EEE pode ser obrigatório',
              'Sem RC válida: para automóvel ligeiro, a coima é normalmente 500–2500 €, podendo haver apreensão/imobilização do veículo e responsabilidade perante o Fundo de Garantia Automóvel/lesados'
            ]}
          ]},
          { id: 'danos-p', title: 'Danos Próprios / Casco', content: [
            { kind: 'checklist', items: [
              'Cobre danos no seu automóvel',
              'Tipos: cobertura completa, limitada (furto/incêndio), todos os riscos',
              'Normalmente exigido em leasing ou crédito',
              'Franquia — de 250 a 2500 €'
            ]}
          ]},
          { id: 'assist', title: 'Assistência em Viagem', content: [
            { kind: 'paragraph', text: 'Reboque + assistência em estrada. Não é obrigatória, mas é muito útil. Frequentemente incluída no pacote por 30–60 €/ano. Mais detalhes no guia «Pneu furado na auto-estrada».' }
          ]},
          { id: 'vida', title: 'Ocupantes', content: [
            { kind: 'paragraph', text: 'Seguro de vida dos passageiros em caso de acidente rodoviário. Extra de 30–80 €/ano.' }
          ]},
          { id: 'legal', title: 'Proteção Jurídica', content: [
            { kind: 'paragraph', text: 'Apoio jurídico em litígios / acções judiciais. 20–50 €/ano.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-buy',
      title: 'Como comprar',
      content: [
        { kind: 'checklist', items: [
          '💻 Sites das seguradoras (Tranquilidade, Fidelidade, Zurich, Ageas, Allianz, Liberty, MGEN, Ocidental)',
          '🔍 Mediadores (agregadores): offline junto de bancos, online — MB Easy, MudeyYa',
          '🏦 Através do banco — muitas vezes associado ao crédito habitação',
          '📄 Necessário: DUA, Cartão de Cidadão/autorização de residência, carta de condução, NIF',
          '📅 Válido a partir da data escolhida',
          '💳 Pagamento mensal / trimestral / anual — anual costuma ser mais barato',
          '📱 Apólice — em formato digital, por e-mail; Carta Verde — PDF',
          '🚗 No automóvel, mantenha: apólice ou Carta Verde (para fiscalização)'
        ]}
      ]
    },
    {
      id: 'factors',
      title: 'O que influencia o preço',
      content: [
        { kind: 'checklist', items: [
          '🚗 Modelo / cilindrada / potência',
          '📅 Idade do condutor (< 25 → +30 %; > 70 → +15 %)',
          '📜 Experiência de condução (< 2 anos → +40 %)',
          '🏅 Bónus-malus (BM): 1–14, desconto até 60 %',
          '📍 Região de residência (Lisboa > Coimbra > Algarve)',
          '🚙 Quilometragem anual (< 10 000 / < 20 000 / ilimitada)',
          '🏠 Estacionamento: garagem / rua',
          '📈 Sinistralidade — acidentes anteriores',
          '🔒 Imobilizador / GPS — desconto de 5–15 %'
        ]}
      ]
    },
    {
      id: 'claims',
      title: 'Como participar um sinistro',
      content: [
        { kind: 'checklist', items: [
          '📝 Declaração Amigável no local do acidente (ver guia)',
          '📷 Fotografias do local, dos danos, das matrículas',
          '📧 Notificar a seguradora no prazo de 8 dias',
          '🔧 Reparação — numa oficina da rede da seguradora ou numa oficina acordada (orçamento)',
          '💶 Franquia — os primeiros 250–2500 € são pagos pelo cliente',
          '📅 Prazo de análise — 30–60 dias',
          '⚖️ Recusa → reclamação através da ASF (Autoridade de Supervisão de Seguros)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          '🛍️ Comparar 3–5 propostas — os preços podem variar até 2 vezes',
          '📅 Mudança de seguradora — 30 dias antes do fim, com pedido escrito de cancelamento',
          '🚗 Ao vender o automóvel, o seguro do vendedor não passa para o comprador — o comprador contrata a sua própria RC antes de começar a circular. O vendedor notifica a seguradora da venda e pode pedir a cessação do contrato/reembolso de parte do prémio ou a transferência da apólice para outro automóvel',
          '🆘 Linha da ASF 217 983 983 — para questões e reclamações',
          '🌍 Carta Verde obrigatória para viajar para outros países da UE',
          '📉 Após 5 anos sem acidentes — o bónus-malus desce até ao mínimo'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'RC básica (condutor experiente 1,4 l)', amountEURMin: 180, amountEURMax: 280 },
    { label: 'RC + Casco parcial', amountEURMin: 400, amountEURMax: 700 },
    { label: 'Todas as coberturas (pacote completo)', amountEURMin: 700, amountEURMax: 1500 },
    { label: 'Coima por conduzir sem RC (automóvel ligeiro)', amountEURMin: 500, amountEURMax: 2500 }
  ],
  sources: [
    { title: 'Decreto-Lei 291/2007 — Seguro automóvel', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34522075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGA — Fundo de Garantia Automóvel', url: 'https://www.fga.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Seguro automóvel', url: 'https://www.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'car-insurance',
  categoryId: 'auto_ownership',
  title: 'Seguro automóvel em Portugal — RC é obrigatório, Casco é opcional',
  tldr: 'Responsabilidade Civil — seguro obrigatório de responsabilidade civil automóvel para todos os veículos registados em Portugal (Decreto-Lei 291/2007). Cobre danos causados a terceiros. Casco / Danos Próprios — cobertura do seu veículo, opcional. Preços 2026: RC básico a partir de 180 €/ano, pacote completo — 400–1200 €. Compra online nos sites da Tranquilidade / Fidelidade / Zurich / Ageas ou através de mediadores. Condutor novo (2 anos de experiência) paga mais 20–50 %.',
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
              'Capitais mínimos de seguro RC: definidos por lei/ASF (ver art. 12 DL 291/2007); é importante distinguir o limite por lesado e o limite por sinistro — verifique os valores actualizados nas publicações da ASF',
              'Certificado Internacional de Seguro Automóvel / antiga Carta Verde — para EU/EEA a RC portuguesa é válida automaticamente, mas é útil ter o certificado; para alguns países fora da EU/EEA pode ser obrigatório',
              'Sem RC válida: para automóvel ligeiro, a coima é normalmente **500–2500 €**, podendo haver apreensão/imobilização do veículo e responsabilidade perante o Fundo de Garantia Automóvel/lesados'
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
            { kind: 'paragraph', text: 'Reboque + assistência em estrada. Não é obrigatória, mas é muito útil. Muitas vezes incluída no pacote por 30–60 €/ano. Mais detalhes no guia «Pneu furado na auto-estrada».' }
          ]},
          { id: 'vida', title: 'Ocupantes', content: [
            { kind: 'paragraph', text: 'Seguro de vida dos passageiros em caso de acidente rodoviário. Adicional de 30–80 €/ano.' }
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
          '🔍 Mediadores (agregadores): presencialmente junto de bancos, online — MB Easy, MudeyYa',
          '🏦 Através do banco — muitas vezes associado ao crédito habitação',
          '📄 Necessário: DUA, CC/autorização de residência, carta de condução, NIF',
          '📅 Vigora a partir da data escolhida',
          '💳 Pagamento mensal / trimestral / anual — anualmente é geralmente mais barato',
          '📱 Apólice — em formato digital, por e-mail; Carta Verde — PDF',
          '🚗 No automóvel, deve manter: apólice ou Carta Verde (para fiscalização)'
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
      title: 'Como comunicar um sinistro',
      content: [
        { kind: 'checklist', items: [
          '📝 Declaração Amigável (participação amigável) no local do acidente (ver guia)',
          '📷 Fotografias do local, danos, matrículas',
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
          '🛍️ Comparar 3–5 propostas — os preços podem variar até ao dobro',
          '📅 Mudança de seguradora — 30 dias antes do fim, com pedido escrito de cancelamento',
          '🚗 Na venda do automóvel, o seguro do vendedor **não passa** para o comprador — o comprador contrata a sua própria RC antes de começar a circular. O vendedor informa a seguradora da venda e pode pedir a cessação do contrato/reembolso de parte do prémio ou a transferência da apólice para outro automóvel',
          '🆘 Número da ASF 213 847 900 — para reclamações',
          '🌍 Carta Verde obrigatória para viajar para outros países da UE',
          '📉 Após 5 anos sem acidentes — o bónus-malus desce até ao mínimo'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'RC básica (condutor experiente, 1,4 l)', amountEURMin: 180, amountEURMax: 280 },
    { label: 'RC + Casco parcial', amountEURMin: 400, amountEURMax: 700 },
    { label: 'Todos os tipos de cobertura (pacote completo)', amountEURMin: 700, amountEURMax: 1500 },
    { label: 'Coima por condução sem RC (automóvel ligeiro)', amountEURMin: 500, amountEURMax: 2500 }
  ],
  sources: [
    { title: 'Decreto-Lei 291/2007 — Seguro automóvel', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34522075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGA — Fundo de Garantia Automóvel', url: 'https://www.fga.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Seguro automóvel', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}

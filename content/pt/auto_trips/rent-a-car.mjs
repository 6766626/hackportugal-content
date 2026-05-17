export default {
  editorialVoice: 'hackportugal',
  id: 'rent-a-car',
  categoryId: 'auto_trips',
  title: 'Aluguer de automóvel em Portugal — conselhos para residentes e turistas',
  tldr: 'O aluguer em Portugal vai de 20 €/dia por um citadino económico até 150+ €/dia por um veículo premium. Hertz / Europcar / Avis internacionais são mais caros do que as empresas locais, mas mais fiáveis. Opções económicas: Sixt, Goldcar, Centauro — baratas, mas com muitas taxas ocultas. Requisitos: idade do condutor ≥ 21 anos, carta de condução há ≥ 1 ano, cartão de crédito (cartões de débito não são aceites em todo o lado). Seguro completo (CDW + TP + zero excess) ~15-25 €/dia — essencial se não tiver um cartão de crédito premium com seguro. Caução 800-2500 €. Via Verde normalmente incluída, portagens — conforme a opção.',
  tags: ['aluguer', 'automóvel', 'carro', 'sixt', 'europcar'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'companies',
      title: '🚗 Empresas — comparação',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Internacionais premium', content: [
            { kind: 'checklist', items: [
              '**Hertz, Europcar, Avis, Enterprise, Sixt** — grandes, com apoio 24/7, transparentes',
              'Preços: 40-150 €/dia',
              'Seguro completo frequentemente incluído no pacote',
              'Automóveis novos (<1 ano), boa manutenção',
              'Balcões em aeroportos, cidades e estações ferroviárias',
              'Incluem Via Verde em alguns pacotes'
            ]}
          ]},
          { id: 'c2', title: 'Económicas', content: [
            { kind: 'checklist', items: [
              '**Goldcar, Centauro, OK Mobility, Firefly** — mais baratas (20-50 €/dia)',
              '⚠️ **Taxas ocultas**: limpeza adicional, «política de combustível sujo» (multa se não reabastecer), exclusões ocultas do seguro',
              'As filas no aeroporto podem ser de 30-60 min',
              'Automóveis frequentemente mais antigos (>3 anos), por vezes com riscos',
              'TravelTrolls / Reclaim escrevem frequentemente sobre elas — leia as avaliações'
            ]}
          ]},
          { id: 'c3', title: 'Peer-to-peer e nicho', content: [
            { kind: 'checklist', items: [
              '**Drivy / Getaround** — aluguer P2P a particulares, 20-60 €/dia',
              '**Miles** — carsharing com pagamento ao minuto em Lisboa / Porto (para viagens curtas)',
              '**Muving** — ciclomotores / scooters no centro',
              '**TURO** — não funciona em Portugal (apenas para residentes da EU em alguns países)'
            ]}
          ]},
          { id: 'c4', title: 'Agregadores para comparar', content: [
            { kind: 'checklist', items: [
              '**Kayak, Rentalcars, Skyscanner, Discover Cars**',
              '⚠️ O preço no agregador não é o preço final. Seguro, caução e política de combustível podem ser diferentes',
              '**Rentalcars.com** tem seguro próprio — frequentemente mais barato do que o da empresa de aluguer',
              'Reserve com 2-4 semanas de antecedência para obter o melhor preço',
              'À última hora, especialmente na época alta (julho-agosto, Páscoa), os preços podem duplicar'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: '📋 Requisitos',
      content: [
        { kind: 'checklist', items: [
          '🆔 **Carta de condução**: válida na EU (qualquer carta da EU) ou licença internacional de condução + carta nacional para cidadãos não pertencentes à EU',
          '👥 **Idade**: normalmente ≥ 21 anos, 25+ para veículos premium / para pessoas <25 — «taxa de condutor jovem» 5-15 €/dia',
          '📅 **Antiguidade da carta**: ≥ 1 ano (2 anos para veículos premium)',
          '💳 **Cartão de crédito**: obrigatório, não de débito (algumas empresas económicas aceitam débito + caução ×2)',
          '🧾 **Caução**: 800-2500 € ficam cativos no cartão de crédito',
          '🏠 **Morada**: algumas exigem comprovativo (para cidadãos não pertencentes à EU, muitas vezes basta o passaporte)',
          '📄 **Documentos**: carta de condução + passaporte + cartão de crédito + voucher de reserva'
        ]}
      ]
    },
    {
      id: 'insurance',
      title: '🛡️ Seguro — o ponto-chave',
      content: [
        { kind: 'paragraph', text: 'O seguro básico está sempre incluído, mas tem uma franquia elevada (até 1500 €). Seguros adicionais reduzem ou eliminam a franquia.' },
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Tipos', content: [
            { kind: 'checklist', items: [
              '**CDW (Collision Damage Waiver)**: cobre danos no automóvel em caso de acidente por sua culpa, mas com franquia',
              '**TP (Theft Protection)**: cobertura de roubo',
              '**SCDW / Zero Excess** (Super CDW): reduz a franquia para 0 — frequentemente +10-15 €/dia',
              '**TP Extra**: roubo sem franquia',
              '**Third Party Liability (RC)**: normalmente incluído, obrigatório por lei',
              '**Glass & Tyres** (seguro janelas e pneus): frequentemente à parte, 2-5 €/dia',
              '**Personal Accident Insurance**: seguro adicional de acidentes pessoais; se não tiver seguro próprio — vale a pena considerar'
            ]}
          ]},
          { id: 'i2', title: 'Alternativa: seguro do cartão bancário', content: [
            { kind: 'checklist', items: [
              '**American Express Gold/Platinum**: inclui CDW gratuitamente',
              '**Revolut Premium / Metal**: seguro de automóvel alugado incluído',
              '**Alguns Visa Infinite / Mastercard World Elite**: condições semelhantes',
              'Paga o aluguer do automóvel com esse cartão → o seguro é activado',
              'MAS: algumas empresas de aluguer recusam e ainda assim tentam vender o seu próprio seguro — confirme'
            ]}
          ]},
          { id: 'i3', title: 'Seguro de terceiros', content: [
            { kind: 'checklist', items: [
              '**Rentalcars.com Protect** — 8-15 €/dia, frequentemente mais barato do que o seguro da empresa de aluguer',
              '**Insurance4CarHire, iCarhireinsurance** — subscrição anual 40-80 €, cobre todos os alugueres durante o ano',
              'Importante: em caso de acidente, paga a rental excess e depois recebe o reembolso da seguradora'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'pickup',
      title: '🚘 No levantamento — passos obrigatórios',
      content: [
        { kind: 'checklist', items: [
          '🚗 **Inspeccionar o automóvel antes de assinar o contrato** — dar a volta ao veículo, fotografar riscos/manchas com o telemóvel',
          '📸 **Vídeo do interior** — revestimentos, painel, botões',
          '⛽ **Combustível**: nível cheio / conforme indicado no contrato; se for «full-to-full» — devolve com o mesmo nível',
          '🔑 **Documentos**: documentos de registo, seguro, inspecção periódica (IPO) — no porta-luvas',
          '💡 **Perguntar**: se o ar condicionado, luz de travão, Bluetooth e GPS funcionam',
          '📋 **Assinar o contrato APENAS depois da verificação** — tudo o que foi fotografado deve ficar registado',
          '💳 **Caução**: cativo no cartão — confirmar antes de assinar',
          '🛣️ **Via Verde** — saber se está incluída. Se não estiver — escolha estradas alternativas ou pague você mesmo depois da viagem'
        ]}
      ]
    },
    {
      id: 'return',
      title: '↩️ Na devolução',
      content: [
        { kind: 'checklist', items: [
          '⛽ **Reabastecer** até ao mesmo nível (política full-to-full — mais barata do que o preço deles para reabastecimento)',
          '🧹 **Interior limpo** — retirar o lixo; se estiver sujo — taxa de limpeza 30-100 €',
          '🚗 **Lavar por fora** — normalmente não é necessário, mas se estiver muito sujo — pode haver taxa',
          '📸 **Fotografar novamente** na entrega — protecção contra reclamações inesperadas por riscos',
          '📝 **Obter o auto de devolução assinado** — confirmação de ausência de danos',
          '⏰ **A horas** — devolução tardia = pagamento de um dia + multa',
          '📅 **Período de tolerância**: normalmente 30 min',
          '💳 **Desbloqueio da caução**: 1-14 dias para o cartão'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '🎫 **Reserve com antecedência**: 2-6 semanas antes — -30-40% face ao preço no balcão',
          '📍 **Algarve vs Lisboa**: o aeroporto de Faro é frequentemente mais barato, com maior escolha local',
          '📅 **Levantamento Monday-Thursday** — mais barato do que ao fim de semana',
          '⏰ **Horário de manhã** — menos fila',
          '🏝️ **Ilhas (Madeira, Azores)** — reserve obrigatoriamente com antecedência, as frotas são limitadas',
          '🌍 **Saída para o estrangeiro** (para Espanha, França) — confirme, nem todos permitem. Suplemento 20-50 €',
          '🪄 **Upgrade ao balcão** — frequentemente um upgrade «gratuito» = tentativa de vender seguro; não aceite de imediato',
          '🎒 **Cadeira de criança**: 5-10 €/dia (melhor levar a sua)',
          '📡 **GPS**: não é necessário (Google Maps + telemóvel), custo extra de 5-10 €/dia',
          '🏎️ **Idade do automóvel** — quanto mais antigo for o automóvel, maior a probabilidade de problemas técnicos. Europcar / Hertz normalmente < 1 ano'
        ]}
      ]
    },
    {
      id: 'fines',
      title: '⚠️ Multas',
      content: [
        { kind: 'checklist', items: [
          '📸 A multa por excesso de velocidade / passagem no vermelho é registada pela matrícula do automóvel — a empresa de aluguer recebe a notificação',
          'Eles emitem-lhe uma factura: **multa + taxa administrativa 30-80 €**',
          'Não pagamento da Via Verde = multa ×25 do valor → a empresa de aluguer reencaminha-lha com taxa',
          'Pagamento: no prazo de 30 dias; ignorar — bloqueio de alugueres futuros + cobrança da dívida',
          'Contestação apenas através da empresa de aluguer (eles encaminham para as autoridades)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Automóvel económico básico', amountEURMin: 20, amountEURMax: 50, note: '€/dia' },
    { label: 'Segmento premium médio', amountEURMin: 40, amountEURMax: 100, note: '€/dia' },
    { label: 'Luxo/SUV', amountEURMin: 80, amountEURMax: 200, note: '€/dia' },
    { label: 'Suplemento por seguro zero-excess', amountEURMin: 10, amountEURMax: 25, note: '€/dia' },
    { label: 'Taxa de condutor jovem', amountEURMin: 5, amountEURMax: 15, note: '€/dia' },
    { label: 'Cadeira de criança', amountEURMin: 5, amountEURMax: 10, note: '€/dia' },
    { label: 'Reabastecimento até depósito cheio (se se esqueceu)', amountEURMin: 30, amountEURMax: 60, note: 'multa' }
  ],
  sources: [
    { title: 'Rentalcars.com — agregador', url: 'https://www.rentalcars.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Discover Cars — agregador', url: 'https://www.discovercars.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'DECO PROteste — avaliações de empresas de aluguer', url: 'https://www.deco.proteste.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

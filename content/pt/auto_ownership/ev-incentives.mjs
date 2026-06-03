export default {
  editorialVoice: 'hackportugal',
  id: 'ev-incentives',
  categoryId: 'auto_ownership',
  title: 'Subsídios e benefícios para automóveis elétricos em Portugal',
  tldr: 'O Estado subsidia a compra de BEV através do Fundo Ambiental — os montantes, limites, teto de preço e quotas são definidos pelo Aviso Fundo Ambiental anual. Avisos anteriores: para particulares, BEV M1 — cerca de 4 000 € (normalmente não mais de 1 automóvel por candidato), para empresas N1 — cerca de 6 000 €; para empresas com M1, as condições são diferentes. O orçamento é limitado e esgota-se rapidamente.\n\nISV: 0% para BEV puros.\n\nIUC: BEV normalmente isento (os EV puros não têm componente de cilindrada); PHEV/HEV — conforme a categoria IUC aplicável. Carregamento Mobi.E — 0,28–0,55 €/kWh. Antes da compra, verifique o Aviso em vigor em fundoambiental.pt.',
  tags: ['ev', 'automóvel elétrico', 'subsídio', 'fundo ambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'subsidy',
      title: 'Subsídio direto do Fundo Ambiental',
      content: [
        { kind: 'paragraph', text: 'Portugal financia anualmente o programa Incentivo pela Introdução no Mercado de Veículos de Baixas Emissões. O orçamento é reiniciado a 1 de janeiro e normalmente esgota-se em 2–4 meses.' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Referências (verifique o Aviso do ano em vigor)', content: [
            { kind: 'paragraph', text: '⚠️ Os montantes atuais constam do Aviso Fundo Ambiental para a Mobilidade Elétrica do respetivo ano. Antes da abertura do Aviso, não é possível garantir montantes, quotas, prazos e condições. Referências com base em Avisos recentes:' },
            { kind: 'checklist', items: [
              'Particular, BEV M1 novo: em Avisos recentes — cerca de 4 000 €, normalmente não mais de 1 automóvel por candidato',
              'Pessoas coletivas/empresários em nome individual: em Avisos anteriores, o apoio de 6 000 € aplicava-se a BEV N1 novos (mercadorias até 3,5 t); para empresas com M1, as condições são outras',
              'Bicicleta elétrica: ~500 €',
              'Scooter elétrica: ~500 €',
              'Teto de preço para o subsídio M1 em Avisos recentes foi cerca de 38 500 € com IVA e despesas (para versões com mais de 5 lugares o limite é mais alto). 62 500 € sem IVA é um limiar fiscal separado para empresas, não um critério do subsídio'
            ]}
          ]},
          { id: 's2', title: 'Como candidatar-se', content: [
            { kind: 'paragraph', text: 'fundoambiental.pt → Candidaturas → Mobilidade Elétrica. A candidatura é apresentada apenas online com Chave Móvel Digital ou Cartão de Cidadão. A data de abertura do período varia a cada ano (em 2026, entre maio e junho; em anos anteriores, em janeiro); as datas exatas são publicadas em fundoambiental.pt. São necessários: fatura do automóvel (pode ser fatura pró-forma), cópia da autorização de residência/Cartão de Cidadão, NIF, IBAN para o pagamento.' }
          ]},
          { id: 's3', title: 'Prazo de pagamento', content: [
            { kind: 'timeline', text: '30–90 dias após a aprovação. O dinheiro chega ao IBAN como reembolso.' }
          ]}
        ]},
        { kind: 'warning', text: 'O orçamento do programa em 2024–2025 esgotou-se em 2–3 meses. Esteja atento à data de abertura do Aviso em fundoambiental.pt e candidate-se nos primeiros dias — as verbas são atribuídas por ordem de chegada até esgotar o orçamento.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Benefícios fiscais',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'ISV (alfândega/importação)', content: [
            { kind: 'checklist', items: [
              'BEV puros: 0% de ISV (isenção total)',
              'PHEV (híbrido plug-in): ISV bonificado (desconto de 75%) com autonomia elétrica ≥50 km e emissões de CO₂ ≤80 g/km pela norma Euro 6e-bis (o limiar subiu de 50 para 80 g/km no OE 2026). PHEV antigos sem Euro 6e-bis: ≤50 g/km',
              'HEV (híbrido convencional): ISV normal, como para gasolina/gasóleo',
              'A vigência do benefício é confirmada anualmente no OE'
            ]}
          ]},
          { id: 't2', title: 'IUC (imposto anual)', content: [
            { kind: 'checklist', items: [
              'BEV: geralmente isento de IUC — os EV puros não têm componente de cilindrada. Verifique o veículo concreto no Portal das Finanças/AT',
              'PHEV: IUC normal, mas com componente ambiental mais baixa',
              'Híbridos: IUC normal'
            ]}
          ]},
          { id: 't3', title: 'IRS (para empresas/empresários em nome individual)', content: [
            { kind: 'checklist', items: [
              'Automóvel elétrico de serviço: amortização integral até 62 500 € (para gasolina — 25 000 €)',
              'Carregamento (kWh) — dedução de 100% do IVA para empresas (para gasolina — 50%)',
              'Essencial para freelancers: um automóvel elétrico é a forma mais eficiente de obter benefícios fiscais se tiver recibos verdes com elevado volume de negócios'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'charging',
      title: 'Carregamento e rede Mobi.E',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existe uma rede nacional centralizada, a Mobi.E. Todos os carregamentos públicos, mesmo de operadores diferentes — Galp, EDP, Repsol, Iberdrola, — funcionam através de um hub comum. Uma conta — todo o Portugal.' },
        { kind: 'checklist', items: [
          '⚡ Normal (AC 11–22 kW): 0,28–0,35 €/kWh',
          '🔋 Rápido (DC 50–150 kW): 0,40–0,55 €/kWh',
          '🏎️ Ultrarrápido (DC 150–350 kW): 0,55–0,75 €/kWh',
          '🏠 Wallbox doméstica: tarifa EDP/Galp — 0,16–0,20 €/kWh à noite (tarifa bi-horária)',
          '💳 Pagamento: cartão Mobi.E (5 € pela inscrição) OU pagamento através das aplicações EDP, Galp, Iberdrola',
          '🅿️ O estacionamento durante o carregamento depende do município/operador de estacionamento e das regras da estação concreta — NÃO existe uma regra nacional de “primeiras 2 horas gratuitas”'
        ]}
      ]
    },
    {
      id: 'plate',
      title: 'Matrícula e identificação',
      content: [
        { kind: 'checklist', items: [
          'Para vários benefícios é usado o dístico identificativo de veículo elétrico, emitido pelo IMT (isto NÃO é a moldura verde obrigatória da matrícula)',
          'Para um BEV já registado, pode pedir o dístico EV no IMT — custo de acordo com a tabela de taxas IMT em vigor',
          'Os benefícios de acesso a ZER/estacionamento dependem do município e podem exigir o respetivo dístico/registo',
          'PHEV — regras separadas; benefícios parciais'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Subsídio para particular (BEV M1)', note: 'confirme com o Aviso Fundo Ambiental do ano em vigor; em Avisos recentes — ~4 000 €' },
    { label: 'Subsídio para BEV N1 (mercadorias até 3,5 t)', note: 'em Avisos anteriores — ~6 000 €; confirme com o Aviso' },
    { label: 'Bicicleta elétrica / scooter', amountEUR: 500, note: 'confirme com o Aviso' },
    { label: 'ISV para BEV', amountEUR: 0 },
    { label: 'IUC para BEV', amountEUR: 0, note: 'normalmente isento; confirme no Portal das Finanças para o veículo concreto' },
    { label: 'Cartão Mobi.E (inscrição)', amountEUR: 5 }
  ],
  sources: [
    { title: 'Fundo Ambiental — Mobilidade Elétrica', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Mobi.E — rede de carregamento', url: 'https://www.mobie.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (portal fiscal) — calculadoras ISV/IUC', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UVE — União dos Veículos Elétricos (comunidade)', url: 'https://www.uve.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

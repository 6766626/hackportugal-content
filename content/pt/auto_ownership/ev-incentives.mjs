export default {
  editorialVoice: 'hackportugal',
  id: 'ev-incentives',
  categoryId: 'auto_ownership',
  title: 'Subsídios e benefícios para veículos elétricos em Portugal',
  tldr: 'O Estado subsidia a compra de BEV através do Fundo Ambiental — os montantes, limites, preço máximo e quotas são definidos anualmente pelo **Aviso Fundo Ambiental**. Avisos anteriores: para particulares BEV M1 — cerca de 4 000 € (normalmente não mais de 1 viatura por candidato), para empresas N1 — cerca de 6 000 €; para empresas com M1 as condições são diferentes. O orçamento é limitado e esgota rapidamente. **ISV**: 0% para BEV puros. **IUC**: BEV normalmente exempt (não há componente CC nos EV puros); PHEV/HEV — de acordo com a categoria IUC aplicável. Carregamento Mobi.E — 0,28–0,55 €/kWh. Antes da compra, verifique o Aviso atual em fundoambiental.pt.',
  tags: ['ev', 'veículo elétrico', 'subsídio', 'fundo ambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'subsidy',
      title: 'Subsídio direto do Fundo Ambiental',
      content: [
        { kind: 'paragraph', text: 'Portugal financia anualmente o programa Incentivo pela Introdução no Mercado de Veículos de Baixas Emissões. O orçamento é reiniciado a 1 de janeiro e normalmente esgota em 2–4 meses.' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Referências (verifique o Aviso do ano em curso)', content: [
            { kind: 'paragraph', text: '⚠️ Os montantes atuais estão no **Aviso Fundo Ambiental** para Mobilidade Elétrica do ano correspondente. Antes da abertura do Aviso, não é possível garantir montantes, quotas, prazos e condições. Referências com base em Avisos recentes:' },
            { kind: 'checklist', items: [
              'Particular, novo BEV M1: em Avisos recentes — cerca de 4 000 €, normalmente não mais de 1 viatura por candidato',
              'Pessoas coletivas/empresários em nome individual: em Avisos anteriores, o apoio de 6 000 € aplicava-se a novos BEV **N1** (comerciais até 3,5 t); para empresas com M1 as condições são diferentes',
              'Bicicleta elétrica: ~500 €',
              'Scooter elétrica: ~500 €',
              '**Preço máximo** para o subsídio M1 em Avisos recentes foi cerca de 38 500 € **com IVA** e despesas. 62 500 € sem IVA é um limiar fiscal separado para empresas, não um critério de subsidy'
            ]}
          ]},
          { id: 's2', title: 'Como candidatar-se', content: [
            { kind: 'paragraph', text: 'fundoambiental.pt → Candidaturas → Mobilidade Elétrica. A candidatura é apresentada apenas online com Chave Móvel Digital ou Cartão de Cidadão. A abertura dos períodos de candidatura é normalmente a 15 de janeiro. São necessários: fatura da viatura (pode ser fatura proforma), cópia da autorização de residência/Cartão de Cidadão, NIF, IBAN para pagamento.' }
          ]},
          { id: 's3', title: 'Prazo de pagamento', content: [
            { kind: 'timeline', text: '30–90 dias após a aprovação. O dinheiro chega ao IBAN como reembolso.' }
          ]}
        ]},
        { kind: 'warning', text: 'O orçamento do programa em 2024–2025 esgotou em 2–3 meses. Se vai comprar um veículo elétrico na primavera — apresente a candidatura em janeiro-fevereiro.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Benefícios fiscais',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'ISV (desalfandegamento/importação)', content: [
            { kind: 'checklist', items: [
              'BEV puros: **0%** ISV (isenção total)',
              'PHEV (híbrido plug-in) com autonomia elétrica ≥50 km: ISV bonificado (redução de 25–40%)',
              'HEV (híbrido convencional): ISV normal, como para gasolina/gasóleo',
              'A validade do benefício é confirmada anualmente no OE'
            ]}
          ]},
          { id: 't2', title: 'IUC (imposto anual)', content: [
            { kind: 'checklist', items: [
              'BEV: generally **exempt from IUC** — os EV puros não têm componente CC. Verifique o veículo concreto no Portal das Finanças/AT',
              'PHEV: IUC normal, mas com componente ambiental inferior',
              'Híbridos: IUC normal'
            ]}
          ]},
          { id: 't3', title: 'IRS (para empresas/empresários em nome individual)', content: [
            { kind: 'checklist', items: [
              'Veículo elétrico de serviço: amortização total até 62 500 € (para gasolina — 25 000 €)',
              'Carregamento (kWh) — dedução de 100% do IVA para empresas (para gasolina — 50%)',
              'Ponto essencial para freelancers: o veículo elétrico é a forma mais eficiente de obter benefícios fiscais se tiver recibos verdes com volume de negócios elevado'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'charging',
      title: 'Carregamento e rede Mobi.E',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existe uma rede nacional centralizada Mobi.E. Todos os carregamentos públicos, mesmo de diferentes operadores — Galp, EDP, Repsol, Iberdrola, — funcionam através de um hub comum. Uma conta — Portugal inteiro.' },
        { kind: 'checklist', items: [
          '⚡ Normal (AC 11–22 kW): 0,28–0,35 €/kWh',
          '🔋 Rápido (DC 50–150 kW): 0,40–0,55 €/kWh',
          '🏎️ Ultrarrápido (DC 150–350 kW): 0,55–0,75 €/kWh',
          '🏠 Wallbox doméstica: tarifa EDP/Galp — 0,16–0,20 €/kWh à noite (tarifa bi-horária)',
          '💳 Pagamento: cartão Mobi.E (5 € pela inscrição) OU pagamento através das aplicações EDP, Galp, Iberdrola',
          '🅿️ O estacionamento durante o carregamento depende do município/operador de estacionamento e das regras do posto concreto — NÃO existe uma regra nacional de «primeiras 2 horas gratuitas»'
        ]}
      ]
    },
    {
      id: 'plate',
      title: 'Matrícula e identificação',
      content: [
        { kind: 'checklist', items: [
          'Para alguns benefícios é utilizado o **dístico identificativo de veículo elétrico**, emitido pelo IMT (isto NÃO é a moldura verde obrigatória da matrícula)',
          'Para um BEV já registado, pode pedir o dístico EV no IMT — custo de acordo com a tabela de fees IMT em vigor',
          'Os benefícios de acesso a ZER/estacionamento dependem do município e podem exigir o respetivo dístico/registo',
          'PHEV — regras separadas; benefícios parciais'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Subsídio para particular (BEV M1)', note: 'confirme no Aviso Fundo Ambiental do ano em curso; em Avisos recentes — ~4 000 €' },
    { label: 'Subsídio para BEV N1 (comerciais até 3,5 t)', note: 'em Avisos anteriores — ~6 000 €; confirme no Aviso' },
    { label: 'Bicicleta elétrica / scooter', amountEUR: 500, note: 'confirme no Aviso' },
    { label: 'ISV para BEV', amountEUR: 0 },
    { label: 'IUC para BEV', amountEUR: 0, note: 'normalmente exempt; confirme no Portal das Finanças para o veículo concreto' },
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

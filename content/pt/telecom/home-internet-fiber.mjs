export default {
  editorialVoice: 'hackportugal',
  id: 'home-internet-fiber',
  categoryId: 'telecom',
  title: 'Internet doméstica — fibra, instalação, mudança de casa',
  tldr: 'Fibra doméstica em PT 2026: DIGI 1 Gbps por 10 €/mês (3 meses de fidelização), DIGI 10 Gbps por 15 €/mês. NOS WOO «sem fidelização» a partir de 19 €/mês. MEO/NOS/Vodafone — pacote fibra + TV + móvel a partir de 35 €/mês (24 meses de fidelização). A instalação normalmente demora 1–3 semanas após o pedido. A morada tem de estar em zona de cobertura (verificação por NIF + código postal no site do operador). Em caso de mudança — pedido de mudança de morada 7 dias antes da data; por vezes é necessária nova instalação.',
  tags: ['fibra', 'internet', 'casa', 'fttd', 'mudança', 'mudança morada'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'check-coverage',
      title: '🗺️ Passo 1. Verificar a cobertura na morada',
      content: [
        { kind: 'paragraph', text: 'Nem todas as ruas em Portugal têm cobertura de fibra. Em vilas pequenas e aldeias, muitas vezes só existe ADSL ou mobile fiber (4G/5G CPE). A verificação demora 1 minuto:' },
        { kind: 'checklist', items: [
          'DIGI: digi.pt → «Verifica a cobertura» → introduzir o código postal + rua',
          'NOS: nos.pt → «Cobertura» → código e número da porta',
          'MEO: meo.pt → «Cobertura de fibra» → DA (Designação Administrativa) + número',
          'Vodafone: vodafone.pt → «Verificar cobertura» → CP4-CP3 + rua',
          '⚠️ Se os 4 disserem «não disponível» — tem uma casa antiga sem fibra ótica, terá de optar por 5G CPE (NOS Casa 5G, Vodafone Wi-Box) ou ADSL'
        ]}
      ]
    },
    {
      id: 'choose-tariff',
      title: '💰 Passo 2. Escolher o tarifário',
      content: [
        { kind: 'substeps', items: [
          { id: 'budget', title: 'Económico — DIGI', content: [
            { kind: 'checklist', items: [
              'DIGI 1 Gbps — 10 €/mês, fidelização de 3 meses',
              'DIGI 10 Gbps PRO — 15 €/mês, router Wi-Fi 7',
              'Instalação gratuita',
              'Sem pacote de TV (se precisar — adicionar separadamente)',
              'Apenas pedido online / chamada para 1606',
              'Cashback de 50 € às vezes disponível em promoção'
            ]}
          ]},
          { id: 'midrange', title: 'Sem fidelização — WOO (NOS)', content: [
            { kind: 'checklist', items: [
              'WOO Internet 1 Gbps — 19 €/mês, SEM vínculo',
              'WOO Internet + TV — 25 €/mês',
              'Pode cancelar a qualquer momento (vantagem)',
              'Cobertura = infraestrutura NOS (boa nas cidades)'
            ]}
          ]},
          { id: 'premium', title: 'Premium — MEO/NOS/Vodafone (24 meses)', content: [
            { kind: 'checklist', items: [
              'Pacote fibra 1 Gbps + IPTV (≈100 canais) + 4 SIM móveis = 35–55 €/mês',
              'Fidelização de 24 meses — penalização por rescisão antecipada',
              'Router Wi-Fi 6 gratuito + 2 TV box',
              'Instalação normalmente gratuita',
              'Conveniente se for uma família (vários SIM no pacote)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'install',
      title: '🛠️ Passo 3. Fazer o pedido e instalar',
      content: [
        { kind: 'paragraph', text: 'Documentos para o contrato: NIF, Cartão de Cidadão/autorização de residência ou passaporte, IBAN de banco português (para débito direto), contrato de arrendamento ou comprovativo de propriedade.' },
        { kind: 'checklist', items: [
          'Pedido online ou em loja do operador',
          'Receberá um agendamento — janela de 4 h (08–12, 12–16 ou 16–20)',
          'O técnico passa a fibra ótica do armário do prédio para o apartamento (muitas vezes pelo corredor/varanda)',
          'Se a casa já tiver ONT (Optical Network Terminal) — a instalação demora 30 min',
          'Se for necessária nova passagem de cabo — 1–2 h + autorização do condomínio do prédio (uma vez por ano há disputas com o condomínio)',
          'Ativação da internet — 30 min após a instalação',
          '💡 Se estiver de baixa/férias: peça o agendamento para uma data específica no momento da encomenda'
        ]}
      ]
    },
    {
      id: 'mudanca-morada',
      title: '📦 Mudança — Mudança de morada',
      content: [
        { kind: 'paragraph', text: 'Se vai mudar para uma nova morada — NÃO cancele o contrato, caso contrário poderá pagar penalização pela fidelização. Peça a mudança de morada — o operador transferirá o serviço.' },
        { kind: 'checklist', items: [
          'Faça o pedido 7-14 dias antes da mudança',
          'Se na nova morada não houver cobertura — o operador é obrigado a rescindir SEM penalização (ao abrigo do DL 24/2014)',
          'Se houver cobertura — a instalação na nova morada é gratuita',
          'Paga como habitualmente durante a mudança (sem desconto por «3 dias sem internet»)',
          'Prazos: 1-3 semanas desde o pedido até à ativação na nova morada',
          '⚠️ Guarde o comprovativo de submissão do pedido de mudança — para o caso de litígio'
        ]}
      ]
    },
    {
      id: 'cancellation',
      title: '✂️ Rescisão — fidelização e penalizações',
      content: [
        { kind: 'paragraph', text: 'A fidelização standard em PT é de 24 meses para pacotes e de 6-12 meses para internet isolada. Rescisão antecipada:' },
        { kind: 'checklist', items: [
          'Penalização = 50% dos meses restantes × mensalidade (mas não superior ao custo do equipamento + instalação)',
          'Sem penalização: mudança de morada para zona sem cobertura, saída definitiva de PT (é necessário documento da AIMA)',
          'Sem penalização: má qualidade do serviço (são necessárias medições de velocidade 3 vezes, reclamações por escrito, resposta do operador com reconhecimento)',
          'Ao fim de 24 meses, o contrato passa automaticamente para «sem fidelização» — rescisão gratuita com pré-aviso de 30 dias',
          '🛡️ Reclamação à ANACOM (anacom.pt) — se o operador cobrar uma penalização indevidamente. Apreciação gratuita, eficaz'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '🤝 Negoceie — os operadores dão descontos de 5-10 €/mês «não oficiais» se mencionar um concorrente',
          '🔍 Compare em anacom.pt → «Comparação» — comparador oficial',
          '📞 Reclamações — Livro de Reclamações (livroreclamacoes.pt), depois ANACOM',
          '🆔 O contrato é feito em nome de uma pessoa (não «da família») — isto é importante para a rescisão',
          '🏠 Em casas OldEra (antes de 1990): por vezes é necessária autorização do condomínio para passar fibra ótica pelas zonas comuns',
          '📺 Pacotes IPTV — canais de desporto (BTV, Sport TV) muitas vezes têm custo adicional, verifique',
          '⚡ Ligação de reserva — 4G móvel de outro operador como backup em caso de avaria'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'DIGI 1 Gbps', amountEUR: 10, note: '€/mês, 3 meses de fidelização' },
    { label: 'DIGI 10 Gbps PRO', amountEUR: 15, note: '€/mês' },
    { label: 'WOO 1 Gbps sem fidelização', amountEUR: 19, note: '€/mês' },
    { label: 'Pacote MEO/NOS/Vodafone (fibra + TV + 4 SIM)', amountEURMin: 35, amountEURMax: 55, note: '€/mês, 24 meses de fidelização' },
    { label: 'Instalação', amountEUR: 0, note: 'normalmente gratuita' },
    { label: 'Penalização por rescisão antecipada', amountEURMin: 100, amountEURMax: 400, note: 'depende do período restante' }
  ],
  sources: [
    { title: 'ANACOM COM.escolha — comparador oficial de tarifários', url: 'https://www.anacom.pt/tarifarios/PaginaInicial.do', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'DL 24/2014 — direitos do consumidor nos serviços à distância', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/24-2014-572691', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}

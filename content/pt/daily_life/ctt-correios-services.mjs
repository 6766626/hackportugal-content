export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-correios-services',
  categoryId: 'daily_life',
  title: 'CTT Correios — correio, encomendas, serviços públicos',
  tldr: 'Os CTT (Correios de Portugal) são uma empresa privatizada que opera sob concessão do serviço postal universal. Além da entrega de cartas e encomendas, os CTT funcionam como banco (Banco CTT), ponto de pagamento de contas (Pagamentos), ponto de recolha e, em algumas estações, como Espaço Cidadão. As tarifas mudam com frequência — confirme os preços actuais no tarifário/simulador dos CTT. Pontos de recolha internacionais: GLS, DPD, DHL, UPS, Amazon — use as aplicações para acompanhamento.',
  tags: ['ctt', 'correio', 'encomenda', 'correios', 'banco', 'amazon'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'services',
      title: '📮 O que fazem os CTT',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Correio (principal)', content: [
            { kind: 'checklist', items: [
              '✉️ Cartas: Carta Normal (sem acompanhamento) — as tarifas dependem do peso, confirme as actuais no tarifário CTT',
              '📬 Carta Registada + opcionalmente aviso de receção (suplemento)',
              '📦 Encomenda Postal: tarifas por escalões de peso, veja a tabela dos CTT',
              '🇪🇺 EU: as tarifas dependem do peso/formato, veja o CTT international tariff',
              '🌍 Envio internacional: preços conforme a tabela em ctt.pt',
              '⚡ Correio Verde — produto de envelope/embalagem prepaid (não é um «suplemento por rapidez»); o preço depende do formato do envelope'
            ]}
          ]},
          { id: 's2', title: 'CTT Expresso', content: [
            { kind: 'checklist', items: [
              '🚀 Entrega rápida em Portugal em 24 horas — encomenda de 2 kg desde 8 €',
              '🌐 Entrega expresso internacional através da rede própria dos CTT e parceiros (DHL/UPS — empresas separadas, não integradas por defeito como parceiros dos CTT)',
              '📍 Acompanhamento automático por SMS ou correio electrónico',
              '🏛️ Ponto de recolha: a sua estação CTT local ou parceiro (Pingo Doce, BP, Galp — mas não em todas as localizações; depende do ponto)',
              '⚖️ O prazo de armazenamento depende do produto (para envios postais normalmente ~10-15 dias, para lockers/pickup points pode ser mais curto); confirme o aviso'
            ]}
          ]},
          { id: 's3', title: 'Banco CTT', content: [
            { kind: 'checklist', items: [
              '🏦 Banco fundado pelos CTT em 2016',
              '💳 Conta gratuita sem comissões',
              '💰 Crédito à habitação, créditos, seguros',
              '⚠️ Os serviços estão disponíveis nas estações CTT, mas as operações bancárias são efectuadas separadamente e não por qualquer operador',
              '🌐 Site bancoctt.pt'
            ]}
          ]},
          { id: 's4', title: 'Pagamentos e Espaço Cidadão', content: [
            { kind: 'checklist', items: [
              '💸 Pagamento de contas (electricidade, água, gás, IRS) — em numerário na estação',
              '🛡️ Apólices de seguro Lusitania',
              '🏛️ Espaço Cidadão (serviços públicos) em algumas estações CTT — o conjunto de serviços depende da localização; tipicamente: alteração de morada, pedidos, certidões. Os serviços do Cartão de Cidadão são limitados, o NIF para estrangeiros normalmente NÃO é tratado nos CTT/Espaço Cidadão',
              '💰 Bilhetes de lotaria Santa Casa',
              '📞 Carregamento de telemóvel para todos os operadores'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sending',
      title: '📤 Como enviar uma encomenda',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Numa estação CTT (forma clássica)', content: [
            { kind: 'checklist', items: [
              '🏛️ Encontrar a estação mais próxima: ctt.pt → «Encontrar Loja»',
              '📦 Ir com a encomenda: embale previamente, se tiver em casa uma caixa adequada',
              '🆔 CC/passaporte',
              '📋 Preencher a etiqueta de morada (etiqueta)',
              '💳 Pagar — com cartão ou em numerário',
              '📜 Receber o número de acompanhamento',
              '⏱️ Na estação, a fila demora 5–30 minutos: pior em Lisboa Saldanha, melhor nos subúrbios'
            ]}
          ]},
          { id: 'p2', title: 'Através de CTT Locky / cacifos (automático)', content: [
            { kind: 'checklist', items: [
              '🤖 Rede de cacifos CTT (Locky) — junto de centros comerciais e estações CTT',
              '📱 Paga antecipadamente online em ctt.pt e escolhe o cacifo',
              '🔢 Recebe um código QR',
              '🚀 Digitaliza-o no equipamento, a célula abre e coloca a encomenda',
              '✅ Disponível 24/7',
              '💰 Os preços/condições dependem do produto; para alguns formatos, online é mais barato do que ao balcão — confirme antes do envio'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'receiving',
      title: '📥 Receber uma encomenda',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Em casa (entrega)', content: [
            { kind: 'checklist', items: [
              '🏠 Se a morada estiver correcta — o carteiro deixa a carta na caixa de correio e a encomenda pequena à porta',
              '⚠️ Se a encomenda não couber — deixam um aviso (aviso de chegada)',
              '🏛️ Ir à estação CTT com o aviso + CC (ou passaporte/autorização de residência para estrangeiros); o prazo de armazenamento é normalmente ~10-15 dias, depende do produto',
              '🚚 Encomendas grandes (>5 kg) — ligam e combinam uma nova entrega'
            ]}
          ]},
          { id: 'r2', title: 'A partir de Pingo Doce / BP (CTT Expresso)', content: [
            { kind: 'checklist', items: [
              '📲 SMS ou mensagem de correio electrónico com o número de acompanhamento e a morada do parceiro',
              '🛒 Pingo Doce / Continente / BP / Galp — algumas localizações têm CTT pickup point (não todas; confirme no tracking)',
              '🆔 CC + número de acompanhamento',
              '⏱️ Guardam durante 7 dias, depois enviam de volta'
            ]}
          ]},
          { id: 'r3', title: 'Amazon / envios internacionais', content: [
            { kind: 'checklist', items: [
              '🛒 A Amazon normalmente entrega através de CTT Expresso ou GLS',
              '🚚 GLS — através do seu próprio cacifo ou parceiro',
              '📦 DHL Express — ponto DHL ou estação DHL',
              '🚚 UPS Access Point: mercearias, AKI, bombas de combustível',
              '⚠️ O IVA de importação aplica-se a encomendas non-EU e abaixo de 150 € (o limiar de 150 € refere-se sobretudo a direitos aduaneiros). O desalfandegamento é normalmente feito através do portal aduaneiro dos CTT/customs broker',
              '💸 IVA: 23% continente, 22% Madeira, 16% Açores (taxas regionais); + taxa CTT de processamento, depende do tipo de envio e do estado IOSS/prepaid VAT'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Aplicações úteis',
      content: [
        { kind: 'checklist', items: [
          '📦 CTT Mobile (App Store / Google Play) — acompanhamento, pesquisa de estações CTT, tarifas',
          '🚚 PostManager — tracker universal para CTT, GLS, DHL, UPS',
          '📍 17track — para encomendas internacionais (Aliexpress, eBay)',
          '🛒 Amazon — acompanhamento integrado',
          '🇪🇺 EasyTrack — tracker único para transportadoras na EU'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📦 Embalar em casa poupa dinheiro — na estação CTT, uma caixa custa cerca de mais 5 €',
          '📅 Segunda-feira — as maiores filas: acumularam-se envios do fim-de-semana. É melhor ir na quinta-feira',
          '⏰ Depois das 16:00, o envio já não sai no mesmo dia: a viatura de recolha de envios já saiu',
          '🇷🇺/🇧🇾 Envio de encomendas para a Federação Russa/BY: desde 2022 há restrições; confirme as regras actuais dos CTT/requisitos de sanções antes de enviar',
          '🌐 Aliexpress / Temu — normalmente 14–30 dias, por vezes perdem-se. Pode pedir reembolso através da plataforma',
          '🛡️ Carta Registada — para papéis importantes: contratos, documentos da AT',
          '⚖️ Se os CTT perderem a encomenda: livro de reclamações + Anacom (anacom.pt → Reclamação)',
          '🏠 A caixa de correio é obrigatória: todas as casas têm uma caixa, confirme nela o número do seu apartamento',
          '📨 Para envio urgente de documentos — DHL/UPS são mais rápidos, mas 5–10 vezes mais caros',
          '💰 O cashback do Continente Card funciona ao pagar contas através de CTT Pagamentos'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Carta Normal até 20 g (PT)', amountEURMin: 0.55, amountEURMax: 0.65, note: 'as tarifas CTT mudam — veja o tarifário' },
    { label: 'Carta Registada + aviso', amountEURMin: 4.5, amountEURMax: 5.5, note: 'veja o preço actual em ctt.pt' },
    { label: 'Encomenda 2 kg (PT)', amountEURMin: 5.5, amountEURMax: 7, note: 'veja o tarifário' },
    { label: 'Encomenda 5 kg (PT)', amountEURMin: 9, amountEURMax: 12 },
    { label: 'Encomenda 2 kg para a EU', amountEURMin: 13, amountEURMax: 18 },
    { label: 'CTT Expresso 24h até 2 kg', amountEURMin: 8, amountEURMax: 15 },
    { label: 'Desalfandegamento CTT (handling fee)', amountEURMin: 7, amountEURMax: 15, note: 'mais IVA sobre o valor do artigo; depende do tipo de envio e de IOSS/prepaid VAT' }
  ],
  sources: [
    { title: 'CTT — Correios de Portugal', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANACOM — regulador dos serviços postais', url: 'https://www.anacom.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}

export default {
  editorialVoice: 'hackportugal',
  id: 'olx-custojusto-vinted',
  categoryId: 'daily_life',
  title: 'OLX, CustoJusto, Vinted — compra e venda de artigos em segunda mão',
  tldr: 'As principais plataformas de segunda mão em Portugal: OLX (de tudo um pouco — de mobiliário a automóveis, ~5 milhões de anúncios), CustoJusto (formato de “classificados”, grande audiência no norte), Vinted (apenas roupa/calçado/malas, protecção do comprador). A Vinted é a única com verdadeira protecção escrow (o dinheiro fica na plataforma até à confirmação da recepção). OLX e CustoJusto — sem qualquer protecção, tudo fica à sua responsabilidade.\n\nIMPORTANTE: desde 2024, as plataformas comunicam dados sobre vendas de maior dimensão às Finanças (directiva DAC7 da UE): se vendeu >2 000 € ou >30 artigos por ano — a autoridade tributária recebe uma notificação. Principais burlas em 2025–2026: SMS falsos de “pagamento confirmado”, páginas de pagamento falsas, esquemas com MB WAY.',
  tags: ['olx', 'custojusto', 'vinted', 'segunda mão', 'burla', 'segurança'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'platforms-overview',
      title: 'Três plataformas — qual serve para quê',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há três plataformas principais para artigos em segunda mão. Cada uma serve melhor uma categoria.' },
        { kind: 'substeps', items: [
          {
            id: 'olx-pt',
            title: 'OLX — a mais versátil',
            content: [
              { kind: 'checklist', items: [
                '🌐 olx.pt — o maior marketplace de segunda mão em Portugal (~5 milhões de anúncios activos)',
                '🚗 Categorias: de tudo, desde mobiliário e roupa até automóveis, imóveis, emprego',
                '💬 Comunicação através de chat integrado + telefone',
                '💳 Pagamento DIRECTAMENTE entre as partes — a plataforma NÃO actua como intermediária',
                '⚠️ SEM protecção do comprador: todos os litígios são entre você e o vendedor',
                '💸 Publicação gratuita (para particulares); promoção — paga',
                '📱 Aplicação iOS/Android, perfis com avaliações'
              ]}
            ]
          },
          {
            id: 'custojusto',
            title: 'CustoJusto — o “local” tradicional',
            content: [
              { kind: 'checklist', items: [
                '🌐 custojusto.pt — equivalente português ao OLX, historicamente com maior audiência no norte',
                '🏠 Categorias fortes: mobiliário, ferramentas, equipamento de jardim, imóveis',
                '💬 Contacto por telefone ou email — o chat integrado é menos desenvolvido',
                '⚠️ SEM protecção do comprador',
                '💸 Publicação gratuita',
                '📱 A aplicação é menos popular do que a do OLX'
              ]}
            ]
          },
          {
            id: 'vinted-pt',
            title: 'Vinted — roupa com protecção escrow',
            content: [
              { kind: 'checklist', items: [
                '🌐 vinted.pt — apenas roupa, calçado, malas, acessórios; outras categorias são proibidas',
                '🛡️ HÁ protecção do comprador: o dinheiro fica na Vinted até à confirmação da recepção',
                '💳 Pagamento por cartão através da plataforma (Vinted Wallet)',
                '💸 Para o vendedor — GRATUITO (sem comissão)',
                '💸 Para o comprador — comissão “Buyer Protection” ~0,70 € + 5% do preço do artigo',
                '📦 Envio através dos CTT com possibilidade de imprimir a etiqueta directamente a partir da aplicação',
                '⚖️ Devolução: no prazo de 2 dias após a recepção — é possível abrir um litígio “item not as described”'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'dac7-tax',
      title: 'Impostos: DAC7 — as plataformas comunicam às Finanças',
      content: [
        { kind: 'paragraph', text: 'Desde 2024, todas as plataformas online na UE são obrigadas a comunicar à autoridade tributária dados sobre utilizadores que ultrapassem os limiares de vendas. É a directiva DAC7 (Council Directive 2021/514/EU), em Portugal — Lei n.º 36/2023, de 26 de julho.' },
        { kind: 'checklist', items: [
          '🚨 Limiar: 2 000 € de receita total OU 30+ transacções por ano civil',
          '📨 A plataforma (OLX, Vinted, CustoJusto) transmite automaticamente às Finanças os dados de quem ultrapassou o limiar',
          '⚖️ Se está apenas a vender ARTIGOS PESSOAIS (roupa, mobiliário da sua casa) — isto NÃO é actividade empresarial, não há imposto, mas podem pedir-lhe uma declaração',
          '💼 Se compra e revende regularmente — isso já é atividade comercial, são necessários recibos verdes (CAE adequado) ou colaboração com uma pessoa colectiva',
          '🔍 As Finanças podem pedir-lhe explicações sobre o “enquadramento” no anexo do IRS — esteja preparado para provar que eram artigos PESSOAIS (fotografias da origem, antiguidade, utilização pessoal)'
        ]},
        { kind: 'warning', text: 'Caso real de 2025: uma vendedora da Vinted vendeu >2000 € em roupa num ano (roupa dela, não revenda), recebeu um pedido das Finanças e passou 3 meses a reunir provas. Terminou sem coima, mas com muito “stress”. Guarde os recibos das compras originais de roupa se tenciona vender.' }
      ]
    },
    {
      id: 'common-scams',
      title: 'Principais burlas em 2025–2026',
      content: [
        { kind: 'paragraph', text: 'Em novembro de 2025, o Banco de Portugal emitiu um aviso oficial aos utilizadores do OLX e da Vinted sobre novos esquemas. Eis os mais frequentes:' },
        { kind: 'substeps', items: [
          {
            id: 'scam-fake-payment',
            title: 'SMS falso “pagamento confirmado”',
            content: [
              { kind: 'paragraph', text: 'Vendeu um artigo. O comprador envia um SMS “alegadamente do MB WAY” a dizer que o pagamento foi efectuado. A captura de ecrã parece real. Você envia o artigo. O dinheiro nunca existiu.' },
              { kind: 'checklist', items: [
                '✅ Protecção: verifique SEMPRE a entrada do dinheiro na sua aplicação bancária, NÃO POR SMS, mas através da app do banco',
                '❌ SMS “MB WAY pago” — quase sempre é falso',
                '❌ Não envie o artigo enquanto não vir o dinheiro na sua conta'
              ]}
            ]
          },
          {
            id: 'scam-phishing-link',
            title: 'Página de pagamento falsa',
            content: [
              { kind: 'paragraph', text: 'O comprador escreve: “Pago pela Vinted, mas tem de confirmar através deste link: vinted-pt-secure.com/confirm”. O link é phishing, o formulário rouba os dados do cartão.' },
              { kind: 'checklist', items: [
                '✅ A Vinted NUNCA envia links de pagamento fora da sua aplicação',
                '✅ Todas as transacções legítimas da Vinted decorrem apenas dentro do site/aplicação vinted.pt',
                '❌ vinted-pt-secure, vinted-payment, vinted-confirm — são todos falsos',
                '🚨 Se abriu a página e introduziu os dados do cartão: bloqueie IMEDIATAMENTE o cartão através do banco, comunique ao banco, apresente queixa à PJ através de canalcyber.pj.pt'
              ]}
            ]
          },
          {
            id: 'scam-mbway-push',
            title: 'Push MB WAY de “segurança”',
            content: [
              { kind: 'paragraph', text: 'SMS “alegadamente do banco”: “Confirme a notificação push no MB WAY para confirmar a sua identidade”. A vítima abre a aplicação, carrega em “confirmar” — e o dinheiro vai para o burlão.' },
              { kind: 'checklist', items: [
                '✅ Leia SEMPRE o texto da notificação push do MB WAY NA ÍNTEGRA antes de carregar',
                '✅ Push com a indicação “Pagar” — é você que está a transferir dinheiro; “Receber” — está a receber',
                '❌ Não carregue em “confirmar” a pedido de terceiros — mesmo que digam que é “por segurança”',
                '🔒 Se tiver dúvidas — cancele, telefone para o banco através do número no verso do cartão'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'buyer-safety',
      title: 'Como comprar em segurança (conselhos da DECO PROteste)',
      content: [
        { kind: 'paragraph', text: 'A DECO PROteste é a principal associação portuguesa de defesa dos consumidores. As suas recomendações oficiais para compras em segunda mão:' },
        { kind: 'checklist', items: [
          '📜 Leia os Termos e Condições da plataforma — especialmente sobre devoluções',
          '🔒 NÃO saia da plataforma para pagar (perde a protecção, se existir)',
          '⭐ Verifique a reputação: avaliação, número de negócios, comentários',
          '👴 Perfis antigos (3+ anos) costumam ser mais fiáveis do que perfis novos',
          '💰 Preço demasiado baixo = sinal de alerta (um iPhone novo por 200 € — quase de certeza é burla)',
          '🤝 Para compras caras — encontre-se pessoalmente, verifique o artigo (para electrónica — confirme os números de série IMEI em blacklist.gsma.com)',
          '📸 Peça fotografias detalhadas de vários ângulos, fotografia do número de série, fotografia do artigo em funcionamento',
          '🧾 Para artigos caros — peça o recibo da compra original (protege contra a venda de bens roubados)',
          '💳 Ideal: pagamento por cartão através de plataforma com escrow (Vinted, eBay) ou PayPal Goods & Services',
          '🚫 Nunca pague por Western Union, Bitcoin, cartões-presente — é sempre burla'
        ]},
        { kind: 'warning', text: 'Se foi vítima de burla: 1) Bloqueie o cartão no banco, 2) Apresente queixa na PSP/GNR no prazo de 6 meses (é o prazo de prescrição), 3) Denuncie na plataforma (para bloquear o burlão), 4) Para ataques financeiros — denúncia à PJ através de canalcyber.pj.pt' }
      ]
    },
    {
      id: 'seller-safety',
      title: 'Como vender em segurança',
      content: [
        { kind: 'checklist', items: [
          '✅ Verifique SEMPRE a entrada do dinheiro NA SUA conta através da app do banco antes de enviar o artigo',
          '✅ Para CTT com pago na entrega (pagamento contra entrega) — recebe o dinheiro no momento da recepção, é seguro para o vendedor',
          '📦 Vinted: use apenas o envio integrado — terá tracking number e seguro',
          '🏠 Encontro presencial: em local público (café, centro comercial), não em sua casa; para artigos caros — leve um amigo',
          '📸 Tire fotografias do artigo ANTES do envio (protecção contra falsas alegações de “não recebi/está danificado”)',
          '🧾 Guarde todas as conversas no chat da plataforma — são prova em caso de litígio',
          '⚠️ Não comunique ao comprador o seu número de conta bancária, NIB ou passaporte — para uma transferência basta MB WAY / IBAN',
          '🚨 Se o comprador insiste em “sair” da plataforma — é um sinal de alerta'
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Plataformas alternativas',
      content: [
        { kind: 'checklist', items: [
          '📚 Wallapop — plataforma espanhola, activa nas grandes cidades portuguesas (Lisboa, Porto), conveniente para mobiliário e tecnologia',
          '🚗 Standvirtual — n.º 1 em Portugal para automóveis em segunda mão, especializada apenas em carros',
          '🏠 Imovirtual / Idealista — para imóveis (ver guias separados sobre arrendamento/compra)',
          '🛒 Facebook Marketplace — muitos anúncios, mas também muitas burlas; SEM protecção',
          '👶 Bebes & Bebés (grupos de Facebook) — excelente para artigos de bebé por cidade',
          '📦 Lokoo, Trocafone — especializadas em electrónica, com verificação de telemóveis em segunda mão antes da venda'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — alerta sobre burlas MB WAY em plataformas OLX/Vinted (2025)', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DECO PROteste — compras online em segunda mão: cuidados', url: 'https://www.deco.proteste.pt/familia-consumo/direitos-consumidor/dicas/compras-online-segunda-mao-cuidados-ter', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 36/2023, de 26 de julho — transposição DAC7 (obrigações de plataformas)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/36-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'EUR-Lex — Council Directive (EU) 2021/514 (DAC7)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021L0514', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'OLX Portugal — dicas para utilizar em segurança (ajuda da plataforma)', url: 'https://help.olx.pt/olxpthelp/s/article/dicas-importantes-para-usares-o-olx-em-segurana-V33', kind: 'secondary', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'PJ — Canal de Denúncia de Cibercrime', url: 'https://canalcyber.pj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'Novo guia: OLX, CustoJusto, Vinted em Portugal. Comparação de plataformas, consequências fiscais da DAC7 (>2 000 € ou >30 vendas = comunicado às Finanças), principais burlas de 2025-2026 (SMS falsos de pagamento, links de phishing, push MB WAY), conselhos da DECO PROteste para comprar/vender em segurança.'
}

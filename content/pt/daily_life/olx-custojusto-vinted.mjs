export default {
  editorialVoice: 'hackportugal',
  id: 'olx-custojusto-vinted',
  categoryId: 'daily_life',
  title: 'OLX, CustoJusto, Vinted — comprar e vender em segunda mão',
  tldr: 'Plataformas principais de segunda mão em Portugal: OLX (de tudo, de mobília a carros, ~5 M de anúncios), CustoJusto (formato «classificados», forte audiência no Norte), Vinted (apenas roupa, calçado e malas — com proteção do comprador). O Vinted é o único com verdadeiro escrow (a plataforma retém o dinheiro até o comprador confirmar a receção). OLX e CustoJusto não têm proteção — o risco é seu. IMPORTANTE: desde 2024, as plataformas comunicam grandes vendas às Finanças (diretiva DAC7 da UE): se vender >2 000 € ou >30 itens por ano — a AT é notificada. Principais burlas 2025–2026: SMS falso «pagamento confirmado», páginas de pagamento falsas, esquemas via push MB Way.',
  tags: ['olx', 'custojusto', 'vinted', 'segunda mão', 'burlas', 'segurança'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'platforms-overview',
      title: 'Três plataformas — para que serve cada uma',
      content: [
        { kind: 'paragraph', text: 'Há três plataformas principais em Portugal. Cada uma com a sua área forte.' },
        { kind: 'substeps', items: [
          {
            id: 'olx-pt',
            title: 'OLX — a mais universal',
            content: [
              { kind: 'checklist', items: [
                '🌐 olx.pt — o maior marketplace de segunda mão em Portugal (~5 M de anúncios ativos)',
                '🚗 Categorias: de tudo, mobília e roupa a carros, imóveis, empregos',
                '💬 Comunicação por chat integrado + telefone',
                '💳 Pagamento DIRETO entre as partes — a plataforma NÃO é intermediária',
                '⚠️ SEM proteção do comprador: todas as disputas são entre si e o vendedor',
                '💸 Anúncios gratuitos (para particulares); destaque pago',
                '📱 App iOS/Android, perfis com classificações'
              ]}
            ]
          },
          {
            id: 'custojusto',
            title: 'CustoJusto — o «local» tradicional',
            content: [
              { kind: 'checklist', items: [
                '🌐 custojusto.pt — equivalente português ao OLX, historicamente com mais audiência no Norte',
                '🏠 Categorias fortes: mobília, ferramentas, equipamento de jardim, imóveis',
                '💬 Contacto por telefone ou e-mail — chat integrado menos desenvolvido',
                '⚠️ SEM proteção do comprador',
                '💸 Anúncios gratuitos',
                '📱 App menos popular do que o OLX'
              ]}
            ]
          },
          {
            id: 'vinted-pt',
            title: 'Vinted — roupa com proteção escrow',
            content: [
              { kind: 'checklist', items: [
                '🌐 vinted.pt — apenas roupa, calçado, malas, acessórios; outras categorias não são permitidas',
                '🛡️ TEM proteção do comprador: o Vinted retém o dinheiro até confirmação de receção',
                '💳 Pagamento por cartão na plataforma (Vinted Wallet)',
                '💸 Para vendedores — GRATUITO (sem comissão)',
                '💸 Para compradores — taxa «Buyer Protection» ~0,70 € + 5% do preço',
                '📦 Envio pelos CTT com etiqueta impressa diretamente na app',
                '⚖️ Devolução: até 2 dias após receção — pode abrir disputa «artigo diferente do anúncio»'
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
        { kind: 'paragraph', text: 'Desde 2024, todas as plataformas online na UE são obrigadas a comunicar à autoridade fiscal os utilizadores que excedam certos limiares de venda. Trata-se da Diretiva DAC7 (Diretiva (UE) 2021/514 do Conselho), transposta em Portugal pelo Decreto-Lei 53/2023.' },
        { kind: 'checklist', items: [
          '🚨 Limiar: 2 000 € em rendimento total OU 30+ transações por ano civil',
          '📨 A plataforma (OLX, Vinted, CustoJusto) comunica automaticamente às Finanças quem exceda o limiar',
          '⚖️ Se está apenas a vender BENS PESSOAIS (roupa, mobília sua), isso NÃO é atividade comercial — não há imposto — mas as Finanças podem pedir explicação',
          '💼 Se compra e revende regularmente, isso já é atividade comercial — precisa de recibos verdes (CAE adequado) ou cooperação com uma sociedade',
          '🔍 As Finanças podem pedir esclarecimentos no anexo do IRS — esteja preparado para provar que se tratava de BENS PESSOAIS (provas de compra original, antiguidade, uso pessoal)'
        ]},
        { kind: 'warning', text: 'Caso real de 2025: uma vendedora do Vinted vendeu >2 000 € de roupa num ano (própria, não revenda), recebeu um pedido das Finanças, demorou 3 meses a apresentar provas. Acabou sem coima, mas com muitos aborrecimentos. Guarde recibos de compras originais de roupa se planeia vender.' }
      ]
    },
    {
      id: 'common-scams',
      title: 'Principais burlas 2025–2026',
      content: [
        { kind: 'paragraph', text: 'O Banco de Portugal publicou um alerta oficial em novembro de 2025 sobre novos esquemas dirigidos a utilizadores do OLX e Vinted. Os mais comuns:' },
        { kind: 'substeps', items: [
          {
            id: 'scam-fake-payment',
            title: 'SMS falso «pagamento confirmado»',
            content: [
              { kind: 'paragraph', text: 'Vendeu um artigo. O comprador envia um SMS supostamente «do MB Way» a dizer que o pagamento foi feito. O screenshot parece legítimo. Você envia o artigo. O dinheiro nunca chega.' },
              { kind: 'checklist', items: [
                '✅ Defesa: verifique SEMPRE se o dinheiro chegou à SUA conta NÃO por SMS, mas pela app do seu banco',
                '❌ Um SMS «MB Way pago» é quase sempre falso',
                '❌ Não envie o artigo até ver o dinheiro na sua conta'
              ]}
            ]
          },
          {
            id: 'scam-phishing-link',
            title: 'Página de pagamento falsa',
            content: [
              { kind: 'paragraph', text: 'Um comprador escreve: «Pago pelo Vinted, mas tem de confirmar neste link: vinted-pt-secure.com/confirm». O link é phishing, o formulário rouba dados do cartão.' },
              { kind: 'checklist', items: [
                '✅ O Vinted NUNCA envia links de pagamento fora da sua app',
                '✅ Todas as transações legítimas do Vinted ocorrem apenas dentro do site/app vinted.pt',
                '❌ vinted-pt-secure, vinted-payment, vinted-confirm — todos falsos',
                '🚨 Se abriu a página e introduziu dados do cartão: BLOQUEIE imediatamente o cartão no banco, comunique ao banco, faça queixa na PJ em canalcyber.pj.pt'
              ]}
            ]
          },
          {
            id: 'scam-mbway-push',
            title: 'Push MB Way «segurança»',
            content: [
              { kind: 'paragraph', text: 'SMS «supostamente do banco»: «Confirme a notificação push no MB Way para confirmar a sua identidade». A vítima abre a app, toca «confirmar» — é o seu dinheiro a ir para o burlão.' },
              { kind: 'checklist', items: [
                '✅ Leia SEMPRE o texto da notificação push do MB Way por completo antes de tocar',
                '✅ Push «Pagar» — está a enviar dinheiro; «Receber» — está a receber',
                '❌ Não toque «confirmar» a pedido de terceiros — mesmo que digam «por segurança»',
                '🔒 Se tiver dúvidas — cancele, ligue para o banco pelo número que consta no verso do cartão'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'buyer-safety',
      title: 'Como comprar em segurança (conselhos DECO PROteste)',
      content: [
        { kind: 'paragraph', text: 'A DECO PROteste é a principal associação portuguesa de defesa do consumidor. As suas recomendações oficiais para a compra em segunda mão:' },
        { kind: 'checklist', items: [
          '📜 Leia os Termos e Condições da plataforma — sobretudo sobre devoluções',
          '🔒 NÃO saia da plataforma para pagar (perde qualquer proteção existente)',
          '⭐ Verifique a reputação do vendedor: avaliação, número de transações, opiniões',
          '👴 Perfis antigos (3+ anos) costumam ser mais fiáveis do que os novos',
          '💰 Preço demasiado baixo = bandeira vermelha (um iPhone novo por 200 € é quase de certeza burla)',
          '🤝 Para compras caras — encontre-se pessoalmente e verifique o artigo (no caso de eletrónica, verifique o IMEI em blacklist.gsma.com)',
          '📸 Peça fotos detalhadas de vários ângulos, do número de série e do artigo a funcionar',
          '🧾 Para artigos caros — peça o recibo de compra original (protege-o contra mercadoria roubada)',
          '💳 Ideal: pagamento por cartão numa plataforma com escrow (Vinted, eBay) ou PayPal Goods & Services',
          '🚫 Nunca pague por Western Union, Bitcoin nem cartões-presente — são sempre burlas'
        ]},
        { kind: 'warning', text: 'Se for vítima de burla: 1) bloqueie o cartão no banco, 2) apresente queixa na PSP/GNR no prazo de 6 meses (prescrição), 3) denuncie na plataforma (para bloquear o burlão), 4) para ataques financeiros — queixa na PJ em canalcyber.pj.pt' }
      ]
    },
    {
      id: 'seller-safety',
      title: 'Como vender em segurança',
      content: [
        { kind: 'checklist', items: [
          '✅ Confirme SEMPRE que o dinheiro está na SUA conta pela app do banco antes de enviar o artigo',
          '✅ Para os CTT com pago na entrega — recebe o dinheiro no momento da entrega, seguro para o vendedor',
          '📦 Vinted: use apenas o envio integrado — tem tracking number e seguro',
          '🏠 Encontro presencial: num local público (café, centro comercial), não em casa; para artigos caros — leve um amigo',
          '📸 Fotografe o artigo ANTES de enviar (proteção contra falsas reclamações de «não recebido / danificado»)',
          '🧾 Guarde todas as conversas no chat da plataforma — são provas em caso de disputa',
          '⚠️ Não partilhe com o comprador o seu número de conta bancária, NIB nem passaporte — MB Way / IBAN basta para transferências',
          '🚨 Se o comprador «insistir» em sair da plataforma — é bandeira vermelha'
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Plataformas alternativas',
      content: [
        { kind: 'checklist', items: [
          '📚 Wallapop — plataforma espanhola, ativa nas cidades maiores em Portugal (Lisboa, Porto), boa para mobília e eletrodomésticos',
          '🚗 Standvirtual — n.º 1 em Portugal para carros usados, exclusivo para automóveis',
          '🏠 Imovirtual / Idealista — para imóveis (ver guias separados sobre arrendamento/compra)',
          '🛒 Facebook Marketplace — muitos anúncios, mas também muitas burlas; SEM proteção',
          '👶 Bebés & Bebés (grupos FB) — ótimo para artigos de criança, organizados por cidade',
          '📦 Lokoo, Trocafone — especializados em eletrónica, com verificação de telemóveis em segunda mão antes da venda'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — alerta sobre burlas MB Way em plataformas OLX/Vinted (2025)', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DECO PROteste — compras online em segunda mão: cuidados a ter', url: 'https://www.deco.proteste.pt/familia-consumo/direitos-consumidor/dicas/compras-online-segunda-mao-cuidados-ter', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 53/2023 — transposição da DAC7 (obrigações das plataformas)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/53-2023-214867521', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'EUR-Lex — Diretiva (UE) 2021/514 do Conselho (DAC7)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021L0514', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'OLX Portugal — dicas para usar em segurança (ajuda da plataforma)', url: 'https://help.olx.pt/olxpthelp/s/article/dicas-importantes-para-usares-o-olx-em-segurana-V33', kind: 'secondary', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'PJ — Canal de denúncia de cibercrime', url: 'https://canalcyber.pj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'Novo guia: OLX, CustoJusto, Vinted em Portugal. Comparação das plataformas, implicações fiscais da DAC7 (>2 000 € ou >30 vendas = comunicação às Finanças), principais burlas 2025-2026 (SMS de pagamento falsos, links de phishing, push MB Way), conselhos da DECO PROteste para comprar e vender em segurança.'
}

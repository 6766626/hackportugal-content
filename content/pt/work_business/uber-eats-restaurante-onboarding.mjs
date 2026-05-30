export default {
  editorialVoice: 'hackportugal',
  id: 'uber-eats-restaurante-onboarding',
  categoryId: 'work_business',
  title: 'Registo de restaurante na Uber Eats / Glovo / Bolt Food',
  tldr: 'Ligar um restaurante à Uber Eats, Glovo ou Bolt Food em Portugal não é apenas carregar o menu: as plataformas normalmente cobram comissão de 25–30% + IVA, e os contratos podem incluir descontos promocionais, penalizações por cancelamentos e limitações de visibilidade. Até Abril de 2026, o restaurante deve ter atividade legal, ASAE/pacote HACCP simplificado, Livro de Reclamações, preços com IVA e documentos fiscais com QR/ATCUD através de software certificado; caso contrário, litígios com a plataforma transformam-se rapidamente em problemas com a AT e a ASAE.',
  tags: ['restaurante', 'entrega', 'asae', 'atcud'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'before-apps',
      title: '1. Verifique que o restaurante é legal antes do onboarding',
      content: [
        { kind: 'paragraph', text: 'As plataformas não aceitam uma “ideia de restaurante”, mas sim um operador económico em funcionamento. Antes da candidatura, devem coincidir o NIF/NIPC, nome, IBAN, CAE e morada do ponto onde a comida é realmente preparada. Se a cozinha funcionar a partir de uma habitação ou de uma “dark kitchen” sem atividade correta, há risco de bloqueio da conta e de fiscalização da ASAE.' },
        { kind: 'checklist', items: [
          'Atividade aberta nas Finanças: normalmente CAE 56111 Restaurantes tipo tradicional, 56112 Restaurantes com lugares ao balcão, 56113 Restaurantes sem serviço de mesa (CAE Rev.4 ao abrigo do Decreto-Lei n.º 9/2025, em vigor desde 1 de Janeiro de 2025) ou outro CAE adequado',
          'Existe comunicação prévia / licenciamento através do Balcão do Empreendedor ou Câmara Municipal, se aplicável ao espaço',
          'NIF/NIPC e certidão permanente da empresa ou declaração de início de atividade para empresário em nome individual',
          'Conta bancária com IBAN em nome do mesmo titular que assina o contrato com a plataforma',
          'Seguro de acidentes de trabalho para trabalhadores e cumprimento da ACT, se houver pessoal',
          'Sistema HACCP ou procedimentos simplificados de segurança alimentar: temperaturas, limpeza, pragas, fornecedores, rastreabilidade',
          'Livro de Reclamações físico no estabelecimento e Livro de Reclamações Eletrónico, se vender/prestar serviços a consumidores',
          'Ementa/preços com IVA incluído; informação sobre alergénios nos termos do Regulamento (UE) 1169/2011',
          'Software fiscal certificado pela AT e com QR code + ATCUD'
        ] },
        { kind: 'warning', text: 'Não assine contrato com a plataforma usando “NIF de terceiros” ou através da empresa de um conhecido. Em caso de litígio, os pagamentos, IVA, IRS/IRC e a responsabilidade perante a ASAE recairão sobre quem tiver o NIF indicado no contrato.' }
      ]
    },
    {
      id: 'choose-platform',
      title: '2. Compare a comissão e a economia oculta',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, Uber Eats, Glovo e Bolt Food funcionam normalmente como marketplace + logística. A comissão não é fixada por lei: é apresentada na proposta comercial e no contrato. Para um pequeno restaurante em 2026, a referência realista é 25–30% da encomenda, por vezes menos em take-away ou com estafetas próprios, por vezes mais com visibilidade paga, promoções e entrega assegurada pela plataforma.' },
        { kind: 'checklist', items: [
          'Comissão: percentagem sobre o subtotal da comida ou sobre todo o carrinho — confirme a base de cálculo',
          'IVA sobre a comissão da plataforma: 30% + 23% IVA = 36,9% apenas em termos de cash-flow. Se a sua empresa for sujeito passivo de IVA com direito à dedução, este IVA é deduzido como input VAT (ou reverse charge para plataformas estrangeiras) — o encargo económico continua a ser 30%, não 36,9%. Confirme com o TOC',
          'Quem paga a promoção: um desconto “-20%” é muitas vezes debitado total ou parcialmente ao restaurante',
          'Delivery fee: fica para a plataforma ou influencia o seu pagamento — veja o payout statement',
          'Refunds: quem paga por “missing item”, comida fria, cancelamento do estafeta e chargeback',
          'Minimum order e packaging fee: se é possível acrescentar um preço separado pela embalagem',
          'Prazo dos pagamentos: diário, semanal ou por settlement cycle; como são tratados saldos negativos',
          'Exclusividade: proibição de trabalhar com outras apps ou exigência de price parity',
          'Prazo de rescisão: notice period, devolução do tablet/equipamento, penalizações por early termination'
        ] },
        { kind: 'paragraph', text: 'Calcule o menu de entrega separadamente. Um prato de 10 € na sala, com comissão de 30%, em gross cash terms deixa cerca de 7 € antes do custo da comida, embalagem, pessoal e output VAT da venda. Se deduzir o IVA sobre a comissão da plataforma como input VAT (regime normal VAT-taxable), o impacto económico da comissão = 30% (e não 36,9%). Muitas vezes, os preços de entrega são 10–20% mais altos, mas verifique se o contrato não proíbe price parity.' }
      ]
    },
    {
      id: 'documents-onboarding',
      title: '3. Prepare o pacote para Uber Eats / Glovo / Bolt Food',
      content: [
        { kind: 'paragraph', text: 'O onboarding é normalmente feito online: formulário de parceiro, verificação de documentos, proposta comercial, contrato, menu, formação no tablet/app e encomenda de teste. O prazo depende muito da cidade e da procura: de alguns dias a 3–4 semanas.' },
        { kind: 'substeps', items: [
          { id: 'legal-docs', title: 'Documentos legais', content: [
            { kind: 'checklist', items: [
              'NIF/NIPC do proprietário ou da empresa',
              'Certidão permanente comercial ou código de acesso, se for sociedade',
              'Declaração de início de atividade, se for ENI / recibos verdes',
              'Documento de identificação do legal representative',
              'Comprovativo de IBAN: declaração bancária ou extrato com o nome do titular',
              'Morada do ponto de preparação e contact person',
              'CAE e tipo de atividade restauração / take-away / catering, se aplicável'
            ] }
          ] },
          { id: 'menu-assets', title: 'Menu e dados operacionais', content: [
            { kind: 'checklist', items: [
              'Menu com preços finais com IVA incluído',
              'Descrição dos pratos em PT, no mínimo; EN é útil em Lisboa, Porto e Algarve',
              'Alergénios: gluten, lactose, nuts, eggs, fish, shellfish, etc.',
              'Fotografias dos pratos: sem apresentação enganosa e com portion size real',
              'Tempo de preparação por categoria: 10, 20, 30+ minutos',
              'Horário de delivery separado do horário de sala',
              'Zonas a desligar quando a cozinha está sobrecarregada',
              'Packaging plan: estanquidade, quente/frio separados, marcação da encomenda'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Se a plataforma enviar o contrato em inglês ou espanhol, peça a versão portuguesa ou confirmação escrita das condições essenciais: comissão, IVA, pagamentos, refunds, exclusividade, rescisão. Em caso de litígio, o que conta é o texto do contrato, não as palavras do sales manager.' }
      ]
    },
    {
      id: 'billing-atcud',
      title: '4. Configure faturação, ATCUD e reconciliação dos pagamentos',
      content: [
        { kind: 'paragraph', text: 'Desde 2023, os documentos fiscais portugueses devem ter QR code e ATCUD, quando são usadas séries previamente comunicadas à Autoridade Tributária. Em 2026, isto já é uma verificação normal do contabilista e da AT. As encomendas de delivery não dispensam o restaurante da emissão de fatura/fatura simplificada.' },
        { kind: 'checklist', items: [
          'Use software certificado pela AT: Vendus, Moloni, ZoneSoft, Sage, TOConline, Primavera ou outro produto certificado',
          'Comunique as séries à AT antes da utilização, para que os documentos tenham ATCUD',
          'Configure a integração POS ↔ delivery apps ou importação manual diária das encomendas',
          'Se o cliente pedir NIF, o documento fiscal deve incluir o NIF do cliente',
          'Separe revenue from food, delivery/packaging fee, refunds, discounts e platform commission',
          'Verifique quem é o vendedor perante o cliente: restaurante ou plataforma como agente; isto afeta os documentos e a reconciliação',
          'Guarde os monthly statements da plataforma, invoices de comissão e proof of payouts',
          'Reconcilie o IVA: vendas do restaurante, IVA sobre a comissão da plataforma, reverse charge — apenas se aplicável segundo o local de registo do prestador do serviço',
          'Mantenha para o contabilista um relatório separado por cada app: Uber Eats, Glovo, Bolt Food'
        ] },
        { kind: 'paragraph', text: 'Controlo prático: a soma das vendas fiscais do dia ≠ soma da entrada bancária, porque a plataforma retém comissão, refunds e promo contributions. O erro de principiante é declarar apenas o net payout. Para a AT, normalmente é relevante a gross sale, e a comissão é uma despesa com documento separado.' },
        { kind: 'warning', text: 'ATCUD não é o “número de encomenda Uber”. É um código único do documento fiscal, gerado com base na série comunicada à AT. Uma captura de ecrã do tablet da plataforma não substitui a fatura.' }
      ]
    },
    {
      id: 'asae-compliance',
      title: '5. ASAE: o que é verificado num restaurante de delivery',
      content: [
        { kind: 'paragraph', text: 'A ASAE fiscaliza não só a sala, mas também a cozinha, take-away, dark kitchens, rotulagem, higiene e reclamações dos consumidores. O delivery aumenta o risco: a comida sai do seu controlo, mas a responsabilidade pela segurança do produto até à entrega ao consumidor pode ainda assim regressar ao restaurante/operador.' },
        { kind: 'checklist', items: [
          'Registos HACCP: temperaturas dos frigoríficos, arcas, hot holding, receção de mercadorias',
          'Rastreabilidade de fornecedores: invoices, lotes, datas de validade',
          'Separação cru/cozinhado e prevenção de contaminação cruzada',
          'Plano de limpeza e registo de higienização',
          'Controlo de pragas com contrato ou registos internos',
          'Formação básica de higiene alimentar para o pessoal',
          'Embalagem food grade, adequada a comida quente/gordurosa',
          'Informação sobre alergénios disponível antes da compra na app e na embalagem/talão, se necessário',
          'Livro de Reclamações e resposta à reclamação dentro do prazo',
          'Preços e promo não são enganadores: preço, quantidade e composição do prato correspondem à realidade'
        ] },
        { kind: 'warning', text: 'A ASAE pode aparecer depois de uma reclamação na app: “food poisoning”, alergénio não indicado, peso insuficiente, bolor, corpo estranho, ausência de Livro de Reclamações. Guarde fotografias/logs da preparação das encomendas contestadas, pelo menos até ao encerramento do litígio com a plataforma.' }
      ]
    },
    {
      id: 'disputes-2026',
      title: '6. Litígios típicos em 2026 e como reduzir perdas',
      content: [
        { kind: 'paragraph', text: 'Os conflitos mais frequentes não são o registo, mas a vida depois do lançamento: refunds inesperados, ranking fraco, campanhas obrigatórias, atrasos nos pagamentos, claims de qualidade, menu desligado e discussão sobre a comissão. Disciplina escrita é mais importante do que trocas de mensagens no WhatsApp com o gestor.' },
        { kind: 'checklist', items: [
          'Guarde o contrato, addenda, emails sobre commission e promos numa pasta separada',
          'Para cada disputed order, registe order ID, hora, fotografia do saco, talão/fatura e nome do funcionário',
          'Desligue a app quando a cozinha estiver sobrecarregada: cancellation rate elevado prejudica a visibility',
          'Não confirme a encomenda se o ingrediente não existir: missing item quase sempre dá origem a refund',
          'Verifique o monthly payout statement antes de fechar o mês contabilístico',
          'Peça credit note se a plataforma corrigir a comissão ou refund',
          'Não aceite exclusividade sem compensação: lower commission, marketing budget ou guaranteed visibility',
          'Em caso de alteração da comissão, exija notice escrito e data de entrada em vigor',
          'Se a plataforma reteve uma quantia elevada, envie formal complaint através do partner support e depois Livro de Reclamações Eletrónico/advogado, se aplicável'
        ] },
        { kind: 'paragraph', text: 'Para um pequeno restaurante, a estratégia segura é começar com 1–2 plataformas, limitar o menu de delivery, aumentar preços para cobrir a comissão, configurar faturas com ATCUD desde o primeiro dia e reconciliar pagamentos semanalmente. Ligar todas as apps de uma vez só faz sentido se a cozinha aguentar o fluxo sem perda de qualidade.' }
      ]
    }
  ],
  costs: [
    { label: 'Comissão da plataforma por delivery orders (% da encomenda, NÃO em euros)', amountEURMin: 0, amountEURMax: 0, note: 'Referência de 25–30% do valor da encomenda (não é um montante fixo em euros). À comissão acresce IVA de 23%, mas para um restaurante VAT-taxable com direito à dedução, este IVA é na prática deduzido como input VAT (ou aplica-se reverse charge para fornecedor estrangeiro) — não conte automaticamente 23% como custo adicional. As condições comerciais dependem da cidade, volume de negócios, logística e negociação.' },
    { label: 'Configuração inicial / fotografias / equipamento', amountEURMin: 0, amountEURMax: 350, note: 'Pode ser gratuito em campanha ou incluir tablet, sessão fotográfica, ativação. Verifique o contrato e a devolução do equipamento em caso de rescisão.' },
    { label: 'Software fiscal com ATCUD', amountEURMin: 10, amountEURMax: 60, note: 'Intervalo mensal típico para um pequeno restaurante; o preço depende do POS, número de terminais e integrações.' },
    { label: 'Livro de Reclamações Eletrónico', amountEUR: 0, note: 'O registo na plataforma oficial é gratuito; o livro físico é comprado separadamente a vendedores autorizados.' }
  ],
  sources: [
    {
      title: 'ASAE: segurança dos géneros alimentícios, fiscalização económica e obrigações dos operadores',
      url: 'https://www.asae.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: Consultar o Programa de faturação certificado (serviço da AT para verificar a certificação do software)',
      url: 'https://www.gov.pt/servicos/consultar-o-programa-de-faturacao-certificado',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Portal das Finanças: lista de programas de faturação certificados',
      url: 'https://www.portaldasfinancas.gov.pt/pt/consultaProgCertificadosM24.action',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Autoridade Tributária: FAQ séries / ATCUD / QR Code (Decreto-Lei 28/2019)',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00883.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Decreto-Lei n.º 9/2025: CAE Rev.4 (nova classificação CAE em vigor desde 1 de Janeiro de 2025)',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/9-2025-905910490',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Decreto-Lei 28/2019: processamento de faturas e arquivo de documentos fiscalmente relevantes',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 10/2015: RJACSR para comércio, serviços e restauração',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/10-2015-66229840',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 90
}

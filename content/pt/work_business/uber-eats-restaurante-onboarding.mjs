export default {
  editorialVoice: 'hackportugal',
  id: 'uber-eats-restaurante-onboarding',
  categoryId: 'work_business',
  title: 'Registo de restaurante no Uber Eats / Glovo / Bolt Food',
  tldr: 'Integrar um restaurante no Uber Eats, Glovo ou Bolt Food em Portugal não é apenas carregar o menu: as plataformas cobram normalmente comissão de 25–30% + IVA, e os contratos podem incluir descontos promocionais, penalizações por cancelamentos e limitações de visibilidade. Até abril de 2026, o restaurante deve ter atividade legal, pacote HACCP pragmático/ASAE, Livro de Reclamações, preços com IVA e documentos fiscais com QR/ATCUD através de software certificado, caso contrário os litígios com a plataforma transformam-se rapidamente em problemas com a AT e a ASAE.',
  tags: ['restaurante', 'entrega', 'asae', 'atcud'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'before-apps',
      title: '1. Confirme que o restaurante está legal antes do onboarding',
      content: [
        { kind: 'paragraph', text: 'As plataformas não aceitam uma “ideia de restaurante”, mas sim um operador económico em funcionamento. Antes da candidatura, devem coincidir o NIF/NIPC, a designação, o IBAN, o CAE e a morada do ponto onde a comida é realmente confecionada. Se a cozinha funciona a partir de uma habitação ou de uma “dark kitchen” sem a atividade correta, há risco de bloqueio da conta e de fiscalização da ASAE.' },
        { kind: 'checklist', items: [
          'Atividade aberta nas Finanças: normalmente CAE 56101 Restaurante tipo tradicional, 56102 Restaurante com lugares ao balcão, 56103 Restaurante sem serviço de mesa ou outro CAE adequado',
          'Existe comunicação prévia / licenciamento através do Balcão do Empreendedor ou Câmara Municipal, se aplicável ao estabelecimento',
          'NIF/NIPC e certidão permanente da empresa ou declaração de início de atividade para empresário em nome individual',
          'Conta bancária com IBAN em nome do mesmo titular que assina o contrato com a plataforma',
          'Seguro de acidentes de trabalho para trabalhadores e cumprimento da ACT, se houver pessoal',
          'Sistema HACCP ou procedimentos simplificados de segurança alimentar: temperaturas, limpeza, pragas, fornecedores, rastreabilidade',
          'Livro de Reclamações físico no estabelecimento e Livro de Reclamações Eletrónico, se vender/prestar serviços a consumidores',
          'Ementa/preços com IVA incluído; informação sobre alergénios nos termos do Regulamento (UE) 1169/2011',
          'Software fiscal certificado pela AT e com capacidade para QR code + ATCUD'
        ] },
        { kind: 'warning', text: 'Não assine contrato com a plataforma usando um “NIF de outra pessoa” ou através da empresa de um conhecido. Em caso de litígio, os pagamentos, o IVA, o IRS/IRC e a responsabilidade perante a ASAE ficarão com quem tiver o NIF indicado no contrato.' }
      ]
    },
    {
      id: 'choose-platform',
      title: '2. Compare a comissão e a economia escondida',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, Uber Eats, Glovo e Bolt Food funcionam normalmente como marketplace + logística. A comissão não é fixada por lei: surge na proposta comercial e no contrato. Para um small restaurant em 2026, a referência realista é 25–30% da encomenda, por vezes menos no take-away ou com estafetas próprios, por vezes mais com paid visibility, promos e delivery handled by platform.' },
        { kind: 'checklist', items: [
          'Comissão: percentagem sobre o food subtotal ou sobre todo o carrinho — confirme a base de cálculo',
          'IVA sobre a comissão da plataforma: uma comissão de 30% + IVA 23% transforma-se num impacto de caixa de 36,9%, se o IVA não estiver considerado na margem',
          'Quem paga a promoção: o desconto “-20%” é frequentemente suportado total ou parcialmente pelo restaurante',
          'Delivery fee: fica com a plataforma ou afeta o seu pagamento — consulte o payout statement',
          'Refunds: quem paga por “missing item”, comida fria, cancelamento do estafeta e chargeback',
          'Minimum order e packaging fee: se é possível acrescentar um preço separado pela embalagem',
          'Prazo dos pagamentos: diariamente, semanalmente ou por settlement cycle; como são tratados saldos negativos',
          'Exclusividade: proibição de trabalhar com outras apps ou exigência de price parity',
          'Prazo de rescisão: notice period, devolução de tablet/equipamento, penalizações por early termination'
        ] },
        { kind: 'paragraph', text: 'Calcule o menu de delivery separadamente. Um prato de 10 € no restaurante, com comissão de 30% + IVA sobre a comissão, deixa cerca de 6,31 € antes do food cost, embalagem, pessoal e IVA da venda. Muitas vezes os preços de delivery são 10–20% mais altos, mas confirme se o contrato não proíbe por price parity.' }
      ]
    },
    {
      id: 'documents-onboarding',
      title: '3. Prepare o pacote para Uber Eats / Glovo / Bolt Food',
      content: [
        { kind: 'paragraph', text: 'O onboarding decorre normalmente online: formulário de parceiro, verificação de documentos, proposta comercial, contrato, menu, formação sobre o tablet/app e encomenda de teste. O prazo depende muito da cidade e da procura: de alguns dias a 3–4 semanas.' },
        { kind: 'substeps', items: [
          { id: 'legal-docs', title: 'Documentos legais', content: [
            { kind: 'checklist', items: [
              'NIF/NIPC do proprietário ou da empresa',
              'Certidão permanente comercial ou código de acesso, se for uma sociedade',
              'Declaração de início de atividade, se for ENI / recibos verdes',
              'Documento de identificação do legal representative',
              'IBAN proof: declaração bancária ou extrato com o nome do titular',
              'Morada do ponto de confeção e contact person',
              'CAE e tipo de atividade restauração / take-away / catering, se aplicável'
            ] }
          ] },
          { id: 'menu-assets', title: 'Menu e dados operacionais', content: [
            { kind: 'checklist', items: [
              'Menu com final prices com IVA incluído',
              'Descrição dos pratos pelo menos em PT; EN é útil em Lisboa, Porto, Algarve',
              'Alergénios: gluten, lactose, nuts, eggs, fish, shellfish, etc.',
              'Fotografias dos pratos: sem apresentação enganosa e com portion size real',
              'Tempos de preparação por categoria: 10, 20, 30+ minutos',
              'Horário de delivery separado do serviço de sala',
              'Zonas a desligar quando a cozinha estiver sobrecarregada',
              'Packaging plan: estanqueidade, quente/frio separados, identificação da encomenda'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Se a plataforma enviar o contrato em inglês ou espanhol, solicite a versão portuguesa ou confirmação escrita das condições-chave: comissão, IVA, pagamentos, refunds, exclusividade, rescisão. Em caso de litígio, o texto do contrato é o que conta, não as palavras do sales manager.' }
      ]
    },
    {
      id: 'billing-atcud',
      title: '4. Configure a faturação, o ATCUD e a reconciliação de pagamentos',
      content: [
        { kind: 'paragraph', text: 'Desde 2023, os documentos fiscais portugueses devem ter QR code e ATCUD, quando são usadas séries previamente comunicadas à Autoridade Tributária. Em 2026, isto já é uma verificação normal do contabilista e da AT. As encomendas de delivery não dispensam o restaurante da emissão de fatura/fatura simplificada.' },
        { kind: 'checklist', items: [
          'Use software certificado pela AT: Vendus, Moloni, ZoneSoft, Sage, TOConline, Primavera ou outro produto certificado',
          'Comunique as séries à AT antes da utilização, para que os documentos tenham ATCUD',
          'Configure a integração POS ↔ delivery apps ou uma importação daily manual das encomendas',
          'Se o cliente pedir NIF, o documento fiscal deve incluir o NIF do cliente',
          'Separe revenue from food, delivery/packaging fee, refunds, discounts e platform commission',
          'Confirme quem é o vendedor perante o cliente: restaurante ou plataforma como agente; isto afeta os documentos e a reconciliação',
          'Guarde os monthly statements da plataforma, invoices de comissão e proof of payouts',
          'Reconcilie o IVA: vendas do restaurante, IVA sobre a comissão da plataforma, reverse charge — apenas se aplicável segundo o local de registo do prestador de serviços',
          'Mantenha para o contabilista um relatório separado por cada app: Uber Eats, Glovo, Bolt Food'
        ] },
        { kind: 'paragraph', text: 'Controlo prático: a soma das vendas fiscais do dia ≠ a soma do recebimento bancário, porque a plataforma retém comissão, refunds e promo contributions. Um erro de principiante é declarar apenas o net payout. Para a AT, normalmente conta a gross sale, e a comissão é uma despesa com documento separado.' },
        { kind: 'warning', text: 'ATCUD não é o “número de encomenda Uber”. É um código único do documento fiscal, formado com base na série comunicada à AT. Uma captura de ecrã do tablet da plataforma não substitui a fatura.' }
      ]
    },
    {
      id: 'asae-compliance',
      title: '5. ASAE: o que é verificado num restaurante de delivery',
      content: [
        { kind: 'paragraph', text: 'A ASAE fiscaliza não só a sala, mas também cozinha, take-away, dark kitchens, rotulagem, higiene e reclamações de consumidores. O delivery aumenta o risco: a comida sai do seu controlo, mas a responsabilidade pela segurança do produto até à entrega ao consumidor pode, ainda assim, regressar ao restaurante/operator.' },
        { kind: 'checklist', items: [
          'HACCP records: temperaturas frigoríficos, arcas, hot holding, receção de mercadorias',
          'Rastreabilidade fornecedores: invoices, lotes, datas de validade',
          'Separação cru/cozinhado e prevenção de contaminação cruzada',
          'Plano de limpeza e registo de higienização',
          'Controlo de pragas com contrato ou registos internos',
          'Formação básica de higiene alimentar para o pessoal',
          'Embalagem food grade, adequada para comida quente/gordurosa',
          'Allergen information disponível antes da compra na app e na embalagem/talão, se necessário',
          'Livro de Reclamações e resposta à reclamação dentro do prazo',
          'Preços e promo não induzem em erro: preço, quantidade e composição do prato correspondem à realidade'
        ] },
        { kind: 'warning', text: 'A ASAE pode aparecer após uma reclamação na app: “food poisoning”, alergénio não indicado, peso insuficiente, bolor, corpo estranho, ausência de Livro de Reclamações. Guarde fotografias/logs da preparação das encomendas contestadas pelo menos até ao encerramento do litígio com a plataforma.' }
      ]
    },
    {
      id: 'disputes-2026',
      title: '6. Litígios típicos em 2026 e como reduzir perdas',
      content: [
        { kind: 'paragraph', text: 'Os conflitos mais frequentes não são o registo, mas a vida depois do lançamento: refunds inesperados, mau ranking, campanhas obrigatórias, atrasos nos pagamentos, claims de qualidade, desativação do menu e disputa sobre a comissão. A disciplina documental é mais importante do que a troca de mensagens no WhatsApp com o gestor.' },
        { kind: 'checklist', items: [
          'Guarde o contrato, addenda, emails sobre commission e promos numa pasta separada',
          'Para cada disputed order, registe order ID, hora, fotografia do saco, talão/fatura, nome do funcionário',
          'Desligue a app quando a cozinha estiver sobrecarregada: um cancellation rate elevado prejudica a visibility',
          'Não confirme a encomenda se não houver um ingrediente: missing item quase sempre dá origem a refund',
          'Verifique o monthly payout statement antes de fechar o mês contabilístico',
          'Solicite credit note, se a plataforma corrigir uma comissão ou refund',
          'Não aceite exclusividade sem compensação: lower commission, marketing budget ou guaranteed visibility',
          'Em caso de alteração da comissão, exija notice escrito e data de entrada em vigor',
          'Se a plataforma reteve uma quantia elevada, envie formal complaint através do partner support e depois Livro de Reclamações Eletrónico/advogado, se aplicável'
        ] },
        { kind: 'paragraph', text: 'Para um restaurante pequeno, a estratégia segura é começar com 1–2 plataformas, limitar o menu de delivery, ajustar os preços à comissão, configurar faturas com ATCUD desde o primeiro dia e reconciliar pagamentos semanalmente. Ligar todas as apps de uma só vez só faz sentido se a cozinha aguentar o fluxo sem perda de qualidade.' }
      ]
    }
  ],
  costs: [
    { label: 'Comissão da plataforma por delivery orders', amountEURMin: 25, amountEURMax: 30, note: 'Referência como percentagem da encomenda, não uma taxa pública fixa; as condições comerciais dependem da cidade, faturação, logística e negociação. Normalmente acrescenta-se IVA 23% à comissão.' },
    { label: 'Configuração inicial / fotografias / equipamento', amountEURMin: 0, amountEURMax: 350, note: 'Pode ser gratuito em campanha ou incluir tablet, sessão fotográfica, ativação. Verifique o contrato e a devolução do equipamento em caso de rescisão.' },
    { label: 'Software fiscal com ATCUD', amountEURMin: 10, amountEURMax: 60, note: 'Intervalo mensal típico para um pequeno restaurante; o preço depende do POS, do número de terminais e das integrações.' },
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
      title: 'Autoridade Tributária: regras de faturação, QR Code e ATCUD',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

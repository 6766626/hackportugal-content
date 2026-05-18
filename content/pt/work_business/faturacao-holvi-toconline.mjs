export default {
  editorialVoice: 'hackportugal',
  id: 'faturacao-holvi-toconline',
  categoryId: 'work_business',
  title: 'Programas de faturação para recibos verdes: Holvi, ToConline, Visee, Faturalia',
  tldr: 'Um trabalhador independente em Portugal pode emitir recibos verdes gratuitamente no Portal das Finanças. Mas, se precisar de uma gestão normal de clientes, faturas recorrentes, exportação SAF-T, QR e ATCUD, usa-se um programa certificado: ToConline, Visee, Faturalia, MOLONI.\n\nOrçamento em 2026: de 0 € a 30 €/mês. O Holvi é prático como conta bancária + invoices, mas a fiscal invoice para a AT deve sair do Portal das Finanças ou de um programa com certificado AT.',
  tags: ['recibosverdes', 'faturação', 'atcud', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-mandatory',
      title: 'O que é obrigatório em 2026: QR, ATCUD, certificado AT',
      content: [
        { kind: 'paragraph', text: 'Para recibos verdes há dois cenários diferentes. Primeiro: você emite o recibo verde eletrónico diretamente no Portal das Finanças — é gratuito e já cumpre os requisitos da AT. Segundo: usa um programa externo de faturação — nesse caso, o documento deve estar fiscalmente correto: QR code, ATCUD, série, comunicação à AT e, na maioria dos casos práticos, software certificado.' },
        { kind: 'checklist', items: [
          'O ATCUD é obrigatório nos documentos fiscais desde 2023: é o código de validação da série + número do documento.',
          'O QR code é obrigatório nas faturas e recibos emitidos por programas de faturação.',
          'As séries de documentos devem ser comunicadas à AT antes da utilização, para obter o código de validação.',
          'As faturas devem ser comunicadas à AT através de SAF-T/PT ou webservice dentro dos prazos estabelecidos.',
          'O Portal das Finanças gera o recibo verde eletrónico por si — não é necessário um programa separado.',
          'Se o programa não for certificado pela AT, não o considere um substituto fiscal do Portal das Finanças.',
          'Uma fatura em PDF para o cliente e uma fiscal invoice para a AT não são a mesma coisa.'
        ] },
        { kind: 'warning', text: 'Não envie ao cliente uma “invoice” de um serviço não certificado como único documento fiscal. Para IRS/IVA em Portugal, o documento deve ser emitido através do Portal das Finanças ou por software reconhecido pela AT.' }
      ]
    },
    {
      id: 'when-portal-is-enough',
      title: 'Quando o Portal das Finanças gratuito é suficiente',
      content: [
        { kind: 'paragraph', text: 'Se tem 1–5 clientes por mês, presta serviços sem stock complexo e trabalha como trabalhador independente, o Portal das Finanças costuma ser suficiente. Entra em Finanças → Faturas e Recibos Verdes → Emitir, escolhe o cliente, atividade, IVA, retenção na fonte e tipo de documento.' },
        { kind: 'checklist', items: [
          'Adequado para freelancers com serviços simples: IT, design, consultoria, formação, marketing.',
          'Custa 0 €: não há mensalidade, não há configuração de SAF-T, não há compra de certificado.',
          'Suporta fatura, recibo e fatura-recibo.',
          'Os dados ficam logo na AT — não é necessário enviar SAF-T separadamente.',
          'Pode descarregar o PDF e enviá-lo ao cliente.',
          'Desvantagem: CRM fraco, sem modelos apelativos, pouca automatização, pouco prático para dezenas de documentos.',
          'Desvantagem: reconciliação bancária, relatórios de contas a receber e recurring invoices são praticamente inexistentes.'
        ] },
        { kind: 'paragraph', text: 'Se está em isenção de IVA ao abrigo do art. 53 CIVA, deve indicar no documento o fundamento correspondente da isenção. Em 2026, a referência para o pequeno regime é 15 000 € de volume de negócios anual; se estiver a aproximar-se do limite, fale antecipadamente com um contabilista sobre a passagem para IVA.' }
      ]
    },
    {
      id: 'software-comparison',
      title: 'O que escolher: Holvi, ToConline, Visee, Faturalia, MOLONI',
      content: [
        { kind: 'substeps', items: [
          { id: 'toconline', title: 'ToConline — a opção mais “portuguesa”', content: [
            { kind: 'paragraph', text: 'O ToConline é uma plataforma portuguesa popular para faturação, gestão e ligação ao contabilista. O ponto forte é a lógica fiscal local: séries, ATCUD, QR, SAF-T, IVA, retenção, exportação para o contabilista.' },
            { kind: 'checklist', items: [
              'É bom para recibos verdes com clientes B2B regulares.',
              'Adequado se o contabilista já trabalha no ToConline.',
              'Tem gestão de clientes, produtos/serviços e relatórios.',
              'Verifique o plano: algumas funcionalidades podem estar apenas nos planos pagos.',
              'A melhor escolha se quiser o mínimo de “exotismo estrangeiro” e o máximo de conformidade PT.'
            ] }
          ] },
          { id: 'holvi', title: 'Holvi — banco + invoices, mas verifique a fiscal compliance', content: [
            { kind: 'paragraph', text: 'O Holvi é prático como business account com cartão, IBAN, categorias de despesas e emissão de invoices para clientes. Mas, para Portugal, a questão-chave não é o design do PDF, e sim o certificado AT, ATCUD, QR e comunicação à AT.' },
            { kind: 'warning', text: 'Se o produto Holvi específico para a sua conta não constar da lista de programas de faturação certificados AT, use o Holvi para gestão bancária e lembretes, e emita a fiscal invoice/recibo no Portal das Finanças ou num programa certificado.' }
          ] },
          { id: 'visee-faturalia-moloni', title: 'Visee, Faturalia, MOLONI — serviços PT económicos', content: [
            { kind: 'paragraph', text: 'Visee, Faturalia e MOLONI são normalmente escolhidos pela faturação simples, arranque rápido e preço na faixa dos 0–30 €/mês. Para trabalhadores independentes, o importante não são “faturas bonitas”, mas a existência de certificação AT, campos fiscais corretos e exportação SAF-T.' },
            { kind: 'checklist', items: [
              'Verifique o número do certificado AT no site do serviço e na lista do Portal das Finanças.',
              'Confirme que o serviço suporta ATCUD e QR code.',
              'Verifique se existem recibos, faturas-recibo e notas de crédito, e não apenas invoices normais.',
              'Verifique o suporte de retenção na fonte para recibos verdes.',
              'Verifique a exportação SAF-T/PT e a comunicação automática à AT.',
              'Verifique se é possível dar acesso ao contabilista sem entregar a sua palavra-passe das Finanças.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'setup',
      title: 'Como configurar o programa sem erros',
      content: [
        { kind: 'paragraph', text: 'Antes do primeiro documento, configure não o logótipo, mas os parâmetros fiscais. Um erro no IVA ou na retenção é depois corrigido com nota de crédito ou anulação, e o cliente terá de alterar a sua contabilidade.' },
        { kind: 'checklist', items: [
          'Verifique o início de atividade nas Finanças: CAE/CIRS, regime de IVA, regime de contabilidade.',
          'Introduza NIF, nome e morada fiscal exatamente como nas Finanças.',
          'Configure as séries de documentos para 2026 e obtenha o código de validação para o ATCUD.',
          'Escolha os tipos de documentos: fatura, recibo, fatura-recibo, nota de crédito.',
          'Configure o IVA: normal, isenção art. 53 CIVA, autoliquidação ou operações intracomunitárias — conforme a sua situação.',
          'Configure a retenção na fonte: para muitos serviços B2B em Portugal pode ser 25%, mas há exceções e dispensa.',
          'Verifique os clientes: NIF português, VAT ID da UE através do VIES, morada, país.',
          'Faça um documento de teste para um cliente pequeno ou em rascunho antes de emitir faturas em massa.',
          'Dê acesso ao contabilista ao programa ou exporte SAF-T/Excel todos os meses.',
          'Guarde os PDFs e os dados pelo menos durante o prazo de inspeção fiscal; não confie apenas no email do cliente.'
        ] },
        { kind: 'warning', text: 'Não use o mesmo número de documento em dois sistemas. Se começou uma série no Portal das Finanças e depois mudou para ToConline/MOLONI, o novo programa deve ter as suas próprias séries e ATCUD.' }
      ]
    },
    {
      id: 'pricing-and-choice',
      title: 'Quanto custa e que opção escolher',
      content: [
        { kind: 'paragraph', text: 'Para a maioria dos freelancers expat, a escolha é simples: até algumas faturas por mês — Portal das Finanças por 0 €. Se tem muitos clientes, IVA, clientes da UE, recurring invoices ou o contabilista pede SAF-T — escolha um programa português certificado.' },
        { kind: 'checklist', items: [
          '0 €/mês: Portal das Finanças — suficiente para recibos verdes simples.',
          '5–15 €/mês: planos básicos de serviços PT para poucas faturas e contabilidade simples.',
          '15–30 €/mês: mais automatização, relatórios, reconciliações bancárias, utilizadores e integrações.',
          'O Holvi faz sentido se business banking, cartão e controlo de despesas forem importantes para si.',
          'O ToConline faz sentido se o contabilista em Portugal já o utiliza.',
          'MOLONI/Faturalia/Visee fazem sentido se precisar de certified invoicing simples sem contabilidade pesada.',
          'Não compre um plano anual antes de verificar a AT certification, ATCUD, QR e SAF-T num documento real.'
        ] },
        { kind: 'paragraph', text: 'Um programa de faturação não substitui as declarações de IRS, IVA e Segurança Social. Ajuda a emitir documentos e a comunicar dados, mas a responsabilidade pelo regime de IVA, retenções, Modelo 3 IRS e declaração trimestral continua a ser sua.' }
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças: recibos verdes eletrónicos', amountEUR: 0, note: 'Gratuito; o melhor ponto de partida para um trabalhador independente simples.' },
    { label: 'Programa básico de faturação', amountEURMin: 5, amountEURMax: 15, note: 'Normalmente suficiente para poucos clientes e SAF-T/ATCUD simples.' },
    { label: 'Plano avançado de faturação/gestão', amountEURMin: 15, amountEURMax: 30, note: 'Mais utilizadores, relatórios, automatização, integrações e apoio ao contabilista.' },
    { label: 'Contabilista para verificar o regime de IVA/IRS', amountEURMin: 50, amountEURMax: 150, note: 'Não é obrigatório para todos, mas é útil com IVA, clientes da UE, retenção e crescimento do volume de negócios.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: apoio ao contribuinte e programas de faturação certificados',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/certificacao-de-software.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 28/2019: regras de processamento de faturas e conservação de documentos',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria 195/2020: QR code e ATCUD nos documentos fiscalmente relevantes',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/195-2020-140510604',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ToConline: faturação e gestão online em Portugal',
      url: 'https://www.toconline.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}

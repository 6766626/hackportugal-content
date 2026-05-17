export default {
  editorialVoice: 'hackportugal',
  id: 'software-faturacao-at',
  categoryId: 'work_business',
  title: 'Programas de faturação com certificação AT: QR + ATCUD',
  tldr: 'Em Portugal, invoices/recibos devem ser emitidos através de AT-certified software, Portal das Finanças ou impressos tipográficos manuais — a escolha depende do volume de negócios, da contabilidade e da forma de trabalho. O código QR é obrigatório em fiscal documents desde 2022, e o ATCUD desde 01.01.2023. As séries de documentos devem ser previamente comunicadas à AT; caso contrário, o programa não receberá o validation code. Para uma empresa, é importante não só emitir a factura ao cliente, mas também comunicá-la ao e-Fatura, normalmente até ao dia 5 do mês seguinte.',
  tags: ['faturação', 'atcud', 'qr', 'efatura'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é AT-certified invoicing software',
      content: [
        { kind: 'paragraph', text: 'AT-certified software é um programa para emitir invoices, faturas-recibo, notas de crédito, notas de débito e outros fiscal documents, certificado pela Autoridade Tributária e Aduaneira. A AT publica a lista oficial destes programas no Portal das Finanças.' },
        { kind: 'paragraph', text: 'A certificação não significa “contabilidade cómoda”, mas sim conformidade com requisitos fiscais: numeração inalterável, SAF-T PT, código QR, ATCUD, audit trail, tax fields correctos, exportação e/ou envio de dados à AT.' },
        { kind: 'checklist', items: [
          'Verifique o programa na lista oficial da AT, e não apenas pela publicidade no site do fornecedor',
          'Confirme se suporta Portuguese VAT/IVA, exemptions e reverse charge',
          'Verifique a geração de SAF-T PT e a comunicação de faturas automática',
          'Verifique o ATCUD: o programa deve conseguir comunicar series à AT ou importar o validation code',
          'Para recibos verdes, muitas vezes o Portal das Finanças é suficiente se a sua actividade for simples',
          'Para lojas, e-commerce, restaurant, services com grande volume de documentos, normalmente é necessário um programa comercial',
          'Uma factura em PDF feita em Word/Canva/Excel não é um fiscal document válido'
        ] }
      ]
    },
    {
      id: 'mandatory-or-optional',
      title: 'Quando o programa é obrigatório e quando é possível trabalhar sem ele',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a questão principal é como emite os documentos e qual é o seu regime. Se utilizar um programa informático para faturação, este deve ser AT-certified. Não pode substituí-lo por uma folha de cálculo normal, um modelo PDF ou uma invoicing app estrangeira sem certificação da AT.' },
        { kind: 'checklist', items: [
          'É obrigatório um programa AT-certified se utilizar software para emitir invoices em Portugal',
          'É obrigatório em organised accounting ou em processos empresariais em que os documentos são emitidos através de um sistema',
          'É praticamente obrigatório para Lda, lojas, restaurantes, vendas online, gestão de armazém e POS',
          'Pode não ser necessário um programa separado se for self-employed e emitir faturas-recibo directamente no Portal das Finanças',
          'Podem ser usados impressos tipográficos manuais de autorized print shops, mas isto é pouco prático e não serve para a maioria dos negócios digitais',
          'Se o volume de negócios crescer e houver muitos documentos, é melhor fazer a transição para um programa antes de surgir caos na numeração e no SAF-T',
          'Os receipts estrangeiros de Stripe/PayPal/Shopify não substituem a invoice portuguesa se a operação tiver de ser documentada segundo as regras PT'
        ] },
        { kind: 'warning', text: 'Não confunda “factura para o cliente” com “documento para a AT”. Uma invoice comercial de um sistema estrangeiro pode ser útil para o cliente, mas para a contabilidade fiscal portuguesa é necessário um documento emitido por um meio admissível: AT-certified software, Portal das Finanças ou manual invoices autorizadas.' }
      ]
    },
    {
      id: 'qr-atcud',
      title: 'Código QR e ATCUD: o que deve constar no documento',
      content: [
        { kind: 'paragraph', text: 'O código QR é obrigatório em invoices e outros fiscally relevant documents desde 2022. Contém dados estruturados do documento: NIF do emitente, tipo de documento, número, data, base taxable amounts, IVA, totals e outros campos de acordo com a especificação da AT.' },
        { kind: 'paragraph', text: 'O ATCUD é obrigatório desde 01.01.2023. É um código único do documento, que resulta da combinação do validation code da série com o número sequencial: por exemplo, ATCUD: XY7K9P-000123. É impresso/apresentado no documento junto ao código QR.' },
        { kind: 'checklist', items: [
          'Antes de utilizar uma nova série de documentos, esta deve ser comunicada à AT',
          'A AT emite um validation code para essa series',
          'O programa junta validation code + sequential number e forma o ATCUD',
          'O ATCUD deve constar na fatura, fatura-recibo, nota de crédito, nota de débito e outros relevant documents',
          'O código QR deve ser legível em PDF e em papel',
          'Não é possível “inventar” manualmente um ATCUD sem registar a series na AT',
          'Ao mudar de programa, ano, loja, POS ou tipo de documento, verifique se é necessária uma nova series',
          'A anulação ou credit note não deve quebrar a sequência da numeração'
        ] },
        { kind: 'warning', text: 'O erro mais comum de migrantes empreendedores: começar a emitir documentos num novo programa sem activar a series na AT. Visualmente, a invoice pode parecer normal, mas sem um ATCUD correcto existe um risco fiscal.' }
      ]
    },
    {
      id: 'efatura-issuer-side',
      title: 'e-Fatura do lado do vendedor: emitir a factura não basta',
      content: [
        { kind: 'paragraph', text: 'Depois de emitir invoices, os dados devem chegar à AT/e-Fatura. Esta é uma obrigação issuer-side: do vendedor, self-employed ou empresa. O cliente pode ver o documento no seu e-Fatura, mas isso não substitui a sua obrigação de comunicar correctamente o documento.' },
        { kind: 'checklist', items: [
          'O prazo normal para comunicação de faturas é até ao dia 5 do mês seguinte ao mês de emissão do documento',
          'Por exemplo, os documentos de Abril de 2026 normalmente devem ser comunicados até 05.05.2026',
          'A transmissão pode ser feita através do webservice do programa, SAF-T PT upload ou inserção manual no Portal das Finanças',
          'Um bom programa envia os dados automaticamente ou recorda o prazo',
          'Depois do envio, verifique o estado: rejected files e warnings devem ser corrigidos',
          'As credit notes também devem ser comunicadas, e não apenas enviadas ao cliente',
          'Se trabalhar com accountant, deixe acordado por escrito: quem envia exactamente o SAF-T e até que data',
          'Não espere pelo período de IRS/IRC: o e-Fatura é uma obrigação operacional mensal'
        ] },
        { kind: 'warning', text: 'As coimas surgem normalmente não pela falta de um PDF bonito, mas por documentos não comunicados, comunicados tarde ou tecnicamente incorrectos. Para pequenos negócios, isto é especialmente doloroso: os erros acumulam-se todos os meses.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Como escolher um programa em 2026',
      content: [
        { kind: 'paragraph', text: 'A escolha depende do modelo de negócio. Para um freelancer com 5 invoices por mês, o Portal das Finanças ou um programa básico pode ser suficiente. Para uma loja, restaurante, marketplace ou B2B services com retenção na fonte, exemptions e foreign clients, é necessário um sistema que o seu contabilista compreenda.' },
        { kind: 'checklist', items: [
          'Encontre o programa na lista oficial de AT-certified software',
          'Verifique o suporte de QR + ATCUD + comunicação de séries',
          'Confirme se existe SAF-T PT export e envio automático à AT',
          'Verifique cenários fiscais portugueses: IVA 23%/13%/6%, isenções, reverse charge, intra-UE, exportação',
          'Verifique o suporte de NIF de cliente estrangeiro e de cliente sem NIF',
          'Pergunte ao accountant se consegue importar dados deste sistema',
          'Verifique os perfis de utilizador: owner, accountant, cashier, sales',
          'Verifique o arquivo de documentos pelo prazo mínimo exigido pela contabilidade fiscal',
          'Para e-commerce, verifique integrações com Shopify, WooCommerce, Stripe, POS e inventory',
          'Não escolha apenas pelo preço: a migração de series e a correcção de invoices erradas custam mais caro'
        ] }
      ]
    },
    {
      id: 'practical-setup',
      title: 'Mini-checklist de arranque',
      content: [
        { kind: 'paragraph', text: 'Antes da primeira invoice, configure o sistema em conjunto com o accountant. Erros no primeiro mês são difíceis de corrigir depois, sobretudo se o SAF-T já tiver sido enviado ou se o cliente tiver usado a invoice na sua contabilidade.' },
        { kind: 'checklist', items: [
          'Verifique NIF, legal name, morada fiscal e CAE/CIRS activity',
          'Configure o IVA regime: normal, exemption under art. 53 CIVA ou outro applicable regime',
          'Crie series separadas para tipos de documentos e pontos de venda, se necessário',
          'Comunique as series à AT e obtenha o validation code',
          'Faça um documento de teste e verifique QR + ATCUD',
          'Configure email templates, mas não altere manualmente os fiscal fields depois da emissão',
          'Configure a monthly comunicação de faturas até ao dia 5',
          'Dê acesso ao accountant ou acorde a exportação do SAF-T',
          'Guarde cópias dos documentos e confirmações de envio à AT',
          'Ao mudar de programa, planeie antecipadamente o fecho das series antigas e o arranque das novas'
        ] },
        { kind: 'warning', text: 'Se estiver em recibos verdes e usar o Portal das Finanças, pode não precisar de software separado. Mas se começar a aceitar pagamentos em massa, vender bens ou emitir muitos documentos, discuta a transição para um programa certificado antes de iniciar as vendas.' }
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças para recibos verdes', amountEUR: 0, note: 'Adequado para invoices/receipts simples de self-employed, mas não substitui um sistema POS/e-commerce completo.' },
    { label: 'Programa AT-certified básico', amountEURMin: 5, amountEURMax: 25, note: 'Normalmente preço mensal para freelancer/small business; verifique separadamente as funções ATCUD, SAF-T e e-Fatura.' },
    { label: 'Pacote POS/e-commerce/retail', amountEURMin: 20, amountEURMax: 80, note: 'O preço depende de caixas, utilizadores, armazém, integrações e apoio do accountant.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: programas de faturação certificados',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/certificacao-de-software.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: código QR e ATCUD',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Negocios/Faturacao/Regras_mecanismos_comunicacao/Comunicacao_de_series_ATCUD/Comunicacao_Series_a_AT_e_ATCUD/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: apoio ao contribuinte — faturação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Negocios/Faturacao/Regras_de_faturacao/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}

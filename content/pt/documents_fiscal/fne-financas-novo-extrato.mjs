export default {
  editorialVoice: 'hackportugal',
  id: 'fne-financas-novo-extrato',
  categoryId: 'documents_fiscal',
  title: 'Obter certidões das Finanças: IRS, IUC, IMI, dividendos e ausência de dívidas',
  tldr: 'No Portal das Finanças pode obter gratuitamente ou por uma pequena taxa certidões fiscais da AT: declaração de não-dívida, certidão de IRS, IUC, IMI, comprovativo de morada fiscal e certidões de rendimentos, incluindo dividendos. Percurso: Portal das Finanças → Cidadãos → Serviços → Certidões. A maioria dos PDF é emitida de imediato e custa 0 €, algumas certidões podem custar até 10 €. A validade depende do tipo: a não-dívida é normalmente válida por 3 meses, e muitos destinatários aceitam as restantes certidões apenas se tiverem menos de 6 meses.',
  tags: ['finanças', 'certidões', 'irs', 'imi', 'iuc'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-you-can-get',
      title: 'Que certidões estão disponíveis nas Finanças',
      content: [
        { kind: 'paragraph', text: 'O Portal das Finanças é a principal fonte de certidões fiscais oficiais da Autoridade Tributária e Aduaneira (AT). Os PDF com código de validação são normalmente aceites por bancos, Câmara Municipal, AIMA, empregadores, universidades, seguradoras e senhorios.' },
        { kind: 'checklist', items: [
          'Declaração de situação tributária regularizada / certidão de não-dívida — confirmação de que você não tem dívidas fiscais vencidas perante a AT.',
          'Certidão de IRS — certidão relativa a declarações IRS entregues, liquidação ou rendimentos de um ano específico.',
          'Comprovativo de entrega da declaração IRS — confirmação de que a declaração IRS Modelo 3 foi entregue.',
          'Demonstração de liquidação IRS — cálculo do imposto IRS: rendimentos, deduções, retenções, montante a pagar ou reembolso.',
          'Certidão de domicílio fiscal / comprovativo de morada fiscal — morada fiscal oficial em Portugal.',
          'Certidão de teor matricial / IMI — dados do imóvel: artigo matricial, valor patrimonial tributário (VPT), freguesia, proprietário.',
          'Certidão IUC — dados relativos ao imposto automóvel IUC e aos veículos associados ao seu NIF.',
          'Certidão de rendimentos — comprovativo de rendimentos, incluindo categorias de IRS; os dividendos são normalmente reflectidos como rendimentos de capitais, categoria E, se tiverem sido declarados ou comunicados à AT.'
        ] }
      ]
    },
    {
      id: 'login',
      title: 'Iniciar sessão no Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Aceda a portaldasfinancas.gov.pt. Precisa do NIF e de um dos métodos de autenticação: palavra-passe das Finanças, Chave Móvel Digital (CMD) ou Cartão de Cidadão com PIN e leitor de cartões.' },
        { kind: 'checklist', items: [
          'Confirme que tem um NIF activo.',
          'Se não tiver palavra-passe das Finanças, peça-a no portal; a carta chega normalmente à morada fiscal.',
          'Se tiver autorização de residência e um número de telefone português, é mais prático activar a Chave Móvel Digital.',
          'Certifique-se de que a morada fiscal está actualizada: muitas certidões dependem da morada fiscal.',
          'Desactive a tradução automática do navegador se os botões do portal começarem a funcionar incorrectamente.',
          'Descarregue o PDF de imediato: algumas páginas não recuperam o resultado depois de terminar a sessão.'
        ] },
        { kind: 'warning', text: 'Ter NIF, por si só, não significa residência fiscal. O comprovativo de morada fiscal mostra a morada registada na AT, mas para um banco ou uma autoridade fiscal estrangeira pode ser necessária uma certidão de residência fiscal separada.' }
      ]
    },
    {
      id: 'path-certidoes',
      title: 'Onde encontrar a secção Certidões',
      content: [
        { kind: 'paragraph', text: 'O percurso padrão em 2026 é: Portal das Finanças → Cidadãos → Serviços → Certidões. No portal, os nomes das opções por vezes mudam, por isso é mais rápido usar a barra de pesquisa com as palavras “certidão”, “não dívida”, “domicílio fiscal”, “IRS”, “IUC”, “IMI”.' },
        { kind: 'substeps', items: [
          {
            id: 'non-debt',
            title: 'Certidão de ausência de dívidas',
            content: [
              { kind: 'paragraph', text: 'Procure “Situação Tributária Regularizada” ou “Certidão de dívida e não dívida”. Escolha emissão, confirme o pedido e descarregue o PDF.' },
              { kind: 'warning', text: 'A declaração de não-dívida é normalmente válida por 3 meses, não por 6. Se o banco, a AIMA ou a Câmara pedir uma “certidão recente”, é melhor emiti-la novamente 1–7 dias antes da submissão.' }
            ]
          },
          {
            id: 'irs',
            title: 'IRS e rendimentos',
            content: [
              { kind: 'paragraph', text: 'Para o IRS, use as secções IRS → Consultar Declaração, Obter Comprovativo, Liquidação ou Certidões. Para rendimentos de dividendos, procure certidões de rendimentos ou descarregue a declaração IRS Modelo 3 + Anexo E e a demonstração de liquidação do ano necessário.' }
            ]
          },
          {
            id: 'imi-iuc',
            title: 'IMI e IUC',
            content: [
              { kind: 'paragraph', text: 'Para imóveis, procure “Património”, “Prédios”, “Caderneta Predial” ou “Certidão de teor matricial”. Para automóveis — “Veículos”, “IUC” e comprovativos/certidões do imposto.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'documents-by-purpose',
      title: 'O que descarregar para diferentes situações',
      content: [
        { kind: 'paragraph', text: 'Os destinatários formulam frequentemente os pedidos de forma vaga: “tax certificate”, “proof of address”, “IRS statement”. É melhor confirmar o nome português do documento e o ano fiscal.' },
        { kind: 'checklist', items: [
          'Para o banco ao abrir uma conta: comprovativo de morada fiscal, declaração de IRS ou certidão de residência fiscal, se o banco verificar a residência fiscal.',
          'Para crédito à habitação: IRS Modelo 3 dos últimos 1–2 anos, demonstração de liquidação, declaração de não-dívida, caderneta predial se tiver imóveis.',
          'Para a AIMA: por vezes pedem declaração de IRS, comprovativo de atividade, não-dívida ou prova de rendimentos; os requisitos dependem do tipo de de residência.',
          'Para arrendamento: o comprovativo de morada fiscal normalmente não prova o direito de viver no apartamento; o senhorio pode pedir contrato de arrendamento e IRS.',
          'Para venda/compra de imóvel: caderneta predial, IMI, VPT, certidão permanente predial da Conservatória — este é um documento separado, não apenas das Finanças.',
          'Para automóvel: comprovativo IUC, dados do veículo e ausência de dívidas de IUC.',
          'Para autoridades fiscais estrangeiras: muitas vezes é necessária certidão de residência fiscal, por vezes com indicação do ano e da convenção para evitar dupla tributação aplicável.',
          'Para dividendos: obtenha o Anexo E IRS, declaração de rendimentos e documentos da corretora; as Finanças não vêem automaticamente todos os pagamentos estrangeiros.'
        ] }
      ]
    },
    {
      id: 'validity-and-costs',
      title: 'Validade, custo e verificação do PDF',
      content: [
        { kind: 'paragraph', text: 'A maioria das certidões electrónicas no Portal das Finanças é emitida de imediato em PDF e é gratuita. Se o sistema apresentar emolumentos ou taxa, pode pagar através de referência Multibanco/MB WAY, após o que o documento fica disponível.' },
        { kind: 'checklist', items: [
          'Custo habitual: 0 € para a maioria dos comprovativos e certidões descarregados online.',
          'Algumas certidões ou versões certificadas podem custar até 10 €.',
          'A validade não é universal: consulte o campo “validade” no PDF.',
          'A não-dívida é normalmente válida por 3 meses.',
          'Para IRS, IMI, IUC e morada fiscal, muitas organizações exigem um documento com menos de 3–6 meses, mesmo que o PDF não indique um prazo explícito.',
          'O PDF do Portal das Finanças contém normalmente um código de validação; o destinatário pode verificar a autenticidade online.',
          'Se precisar do documento em inglês, a AT normalmente não o traduz automaticamente: faça uma tradução certificada por um tradutor se o destinatário não aceitar PT.',
          'Se os dados estiverem incorrectos, corrija primeiro o registo de origem: morada fiscal, declaração IRS, registo do imóvel ou veículo; a nova certidão puxará os dados actualizados.'
        ] },
        { kind: 'warning', text: 'Não envie o IRS completo a terceiros sem necessidade: contém NIF, morada, rendimentos, retenções, estado civil e dados bancários para reembolso. Para arrendamento ou escola, por vezes basta a primeira página ou uma certidão específica.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Problemas típicos dos expatriados',
      content: [
        { kind: 'checklist', items: [
          'A palavra-passe das Finanças foi enviada para a morada antiga — actualize a morada fiscal ou use a CMD.',
          'A certidão indica uma morada estrangeira — isso significa que o seu domicílio fiscal ainda não foi alterado para Portugal.',
          'Não há IRS do ano anterior — talvez não tenha sido residente fiscal ou a declaração não tenha sido entregue.',
          'Os dividendos não aparecem — a corretora estrangeira pode não ter comunicado os dados à AT; verifique o Anexo E e as declarações CRS/withholding.',
          'A não-dívida não é emitida — verifique pagamentos em falta, coimas, IMI, IUC, IVA, IRS ou uma dívida em prestações.',
          'A certidão de IMI está vazia — o imóvel pode estar registado noutro NIF, numa herança indivisa ou ainda não ter sido actualizado depois da transacção.',
          'O IUC continua associado a um automóvel vendido — verifique se o comprador registou novamente o veículo no IRN/IMT; o imposto é pago pelo proprietário na data do aniversário da matrícula.',
          'O destinatário não aceita o PDF — envie também o código de validação ou peça que indique o nome exacto da certidão exigida.'
        ] },
        { kind: 'paragraph', text: 'Se a secção online não funcionar, pode abrir um pedido e-balcão no Portal das Finanças: descreva o documento, o ano fiscal, o NIF e a finalidade. Em casos urgentes, uma marcação no Serviço de Finanças pode ajudar, mas a AT espera que a maioria das certidões seja obtida online.' }
      ]
    }
  ],
  costs: [
    { label: 'Comprovativo de morada fiscal', amountEUR: 0, note: 'Normalmente pode ser descarregado gratuitamente no Portal das Finanças.' },
    { label: 'Declaração de não-dívida / situação tributária regularizada', amountEUR: 0, note: 'A emissão electrónica é normalmente gratuita; a validade é geralmente de 3 meses.' },
    { label: 'Comprovativo IRS / liquidação', amountEUR: 0, note: 'Disponível online para declarações entregues e anos com dados na AT.' },
    { label: 'Certidões AT específicas', amountEURMin: 0, amountEURMax: 10, note: 'O custo depende do tipo de certidão e do modo de emissão; o portal mostra o montante antes da confirmação.' }
  ],
  sources: [
    { title: 'Portal das Finanças — acesso e serviços da Autoridade Tributária', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — secção Cidadãos / Serviços / Certidões', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — serviços e contactos da Autoridade Tributária e Aduaneira', url: 'https://eportugal.gov.pt/entidades/autoridade-tributaria-e-aduaneira', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

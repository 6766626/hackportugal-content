export default {
  editorialVoice: 'hackportugal',
  id: 'cessar-suspender-atividade',
  categoryId: 'work_business',
  title: 'Encerramento ou suspensão de recibos verdes: cessação/suspensão atividade',
  tldr: 'Os recibos verdes são encerrados ou suspensos online no Portal das Finanças através de Entregar Declaração de Alterações / Cessação de Atividade. Se estiver no regime simplificado e sem contabilidade organizada, normalmente pode submeter por si; com contabilidade organizada é necessária a submissão através de contabilista certificado. As alterações são submetidas no prazo de 15 dias, a cessação — no prazo de 30 dias. O serviço é gratuito, mas depois do encerramento continuam a existir IRS, IVA e Segurança Social relativos aos períodos já trabalhados.',
  tags: ['recibosverdes', 'finanças', 'irs', 'iva'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-close-or-suspend',
      title: 'Quando encerrar e quando suspender',
      content: [
        { kind: 'paragraph', text: 'Ter a atividade aberta nas Finanças significa que você pode emitir oficialmente recibos verdes e tem obrigações fiscais de IRS, IVA e, quando aplicável, Segurança Social. Se já não trabalha como trabalhador independente, é melhor não deixar a atividade aberta “por via das dúvidas”.' },
        { kind: 'checklist', items: [
          'Cessação de atividade — encerramento definitivo: deixa de trabalhar como self-employed em Portugal.',
          'Suspensão da atividade — pausa temporária: pretende voltar aos recibos verdes e não quer encerrar totalmente o perfil.',
          'Alteração de atividade — não é encerramento, mas alteração de dados: CAE/CIRS, morada, IVA, regime, IBAN, previsão de volume de negócios.',
          'Se vai sair de Portugal e já não irá receber rendimentos por recibos verdes, normalmente é necessária a cessação.',
          'Se simplesmente não tem clientes durante 1–2 meses, o encerramento nem sempre é obrigatório, mas verifique a Segurança Social e o IVA.',
          'Se a atividade esteve aberta durante todo o ano ou parte do ano, a declaração IRS Modelo 3 com Anexo B desse ano continua a ser entregue em 2027.',
          'Se estiver no regime normal de IVA, depois do encerramento podem ainda existir declarações periódicas de IVA finais.',
          'Se estiver no regime simplificado sem contabilidade organizada, normalmente pode entregar a declaração por si no Portal das Finanças.'
        ] },
        { kind: 'warning', text: 'A cessação nas Finanças não anula recibos verdes já emitidos, não elimina IVA a pagar e não substitui a declaração anual de IRS. Apenas encerra a atividade fiscal futura.' }
      ]
    },
    {
      id: 'three-reason-categories',
      title: '3 categorias de motivos no Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Ao submeter uma alteração ou encerramento, o Portal das Finanças pede que escolha o tipo de operação e o motivo. As formulações no portal podem mudar ligeiramente, mas na prática reduzem-se a três categorias.' },
        { kind: 'checklist', items: [
          '1. Cessação — a atividade terminou definitivamente: já não presta serviços, encerrou um projeto freelance, passou para contrato de trabalho, mudou-se ou deixou de exercer atividade independente.',
          '2. Suspensão — a atividade não é exercida temporariamente: pausa sem recibos verdes, intervalo entre contratos, férias, doença, espera por novo projeto.',
          '3. Alteração / reinício — a atividade não é encerrada: altera códigos de atividade, regime de IVA, previsão de volume de negócios, morada, IBAN ou retoma uma atividade anteriormente suspensa.',
          'Para a maioria dos cenários de expats, o motivo é escolhido de acordo com a realidade: “deixou de exercer atividade” para encerramento ou suspensão temporária, se pretende voltar.',
          'A data do evento é mais importante do que a data de submissão: indique a data real da cessação ou suspensão, porque é a partir dela que se calculam IRS, IVA e Segurança Social.',
          'Se tiver dúvidas entre suspensão e cessação, verifique as consequências para IVA e Segurança Social antes de enviar.'
        ] },
        { kind: 'warning', text: 'Não escolha cessação com efeitos retroativos sem verificar. Se depois da data indicada já existirem recibos verdes, operações de IVA ou recebimentos bancários por serviços, pode surgir uma discrepância no e-Fatura, IRS ou IVA.' }
      ]
    },
    {
      id: 'online-process',
      title: 'Como encerrar ou suspender online 🧾',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Aceda a portaldasfinancas.gov.pt com NIF e palavra-passe ou através da Chave Móvel Digital (CMD). Verifique que tem acesso à área pessoal, e não apenas ao e-Fatura.' }
          ] },
          { id: 'find-service', title: '2. Encontrar a declaração de atividade', content: [
            { kind: 'paragraph', text: 'Procure as secções Todos os Serviços → Atividade → Declarações → Entregar Declaração de Alterações de Atividade ou Cessação de Atividade. No gov.pt, este serviço é descrito como alteração, suspensão, reinício ou cessação de atividade de trabalho independente de pessoa singular.' }
          ] },
          { id: 'choose-action', title: '3. Escolher a operação', content: [
            { kind: 'checklist', items: [
              'Alteração — se altera parâmetros, mas não encerra a atividade.',
              'Suspensão — se interrompe temporariamente o trabalho.',
              'Reinício — se regressa após suspensão.',
              'Cessação — se encerra a atividade definitivamente.',
              'A data de início/suspensão/cessação deve coincidir com a data real da última operação ou da cessação do trabalho.'
            ] }
          ] },
          { id: 'submit', title: '4. Verificar e enviar', content: [
            { kind: 'paragraph', text: 'Antes da submissão, descarregue ou guarde o rascunho, verifique o regime de IVA, os códigos CAE/CIRS, a data e o motivo. Depois do envio, guarde o comprovativo da declaração em PDF.' }
          ] }
        ] }
      ]
    },
    {
      id: 'deadlines-and-who-can-file',
      title: 'Prazos e quem pode submeter por si',
      content: [
        { kind: 'paragraph', text: 'Para trabalhadores independentes aplicam-se os prazos gerais das declarações de atividade. As alterações de dados são submetidas no prazo de 15 dias a contar da data da alteração. A cessação de atividade é submetida no prazo de 30 dias a contar da data de cessação da atividade. Estes prazos são importantes para IRS e IVA.' },
        { kind: 'checklist', items: [
          'Regime simplificado + sem contabilidade organizada: normalmente pode submeter por si online.',
          'Contabilidade organizada: a declaração deve ser preparada ou submetida por contabilista certificado.',
          'Se houve recibos verdes com IVA, verifique a última declaração periódica de IVA.',
          'Se houve retenções na fonte, estas são refletidas pelo cliente e no seu IRS.',
          'Se alterou o país de residência fiscal, atualize separadamente a morada fiscal e a representação fiscal, se for necessária.',
          'Se encerra a atividade por passar a trabalho por conta de outrem, o contrato de trabalho não encerra automaticamente os recibos verdes.',
          'Se abriu a atividade recentemente, o encerramento não anula o facto de início de atividade para a Segurança Social.',
          'Se o encerramento estiver relacionado com uma atividade aberta por erro, é melhor contactar através do e-Balcão e guardar a resposta da AT.'
        ] },
        { kind: 'warning', text: 'Existe troca automática de informação entre Finanças e Segurança Social, mas não confie nela cegamente. Depois da cessação ou suspensão, entre na Segurança Social Direta e verifique o estado de trabalhador independente e as declarações trimestrais.' }
      ]
    },
    {
      id: 'after-closing',
      title: 'O que fazer depois do encerramento',
      content: [
        { kind: 'checklist', items: [
          'Descarregue o comprovativo de cessação/suspensão a partir do Portal das Finanças.',
          'Verifique que não é possível emitir acidentalmente novos recibos verdes depois da data de cessação.',
          'Feche todos os rascunhos de recibos verdes e emita os documentos em falta relativos a trabalho anterior à data de encerramento.',
          'Se estiver no regime normal de IVA, entregue a declaração periódica de IVA final do período correspondente.',
          'Em 2027, entregue a declaração IRS Modelo 3 relativa a 2026 com Anexo B, se em 2026 houve rendimento da Categoria B.',
          'Verifique o Anexo SS no IRS: é frequentemente exigido para rendimentos de atividade independente, mas existem exceções.',
          'Na Segurança Social Direta, verifique se é esperada alguma declaração trimestral relativa ao trimestre em que a atividade ainda estava aberta.',
          'Guarde as provas em PDF durante pelo menos vários anos: recibos, comprovativo, IVA, IRS, pagamentos à Segurança Social.',
          'Se um cliente pedir uma invoice depois da cessação por trabalho realizado antes do encerramento, confirme primeiro com um contabilista ou com a AT, para não violar a data de cessação.'
        ] },
        { kind: 'paragraph', text: 'O serviço de encerramento ou alteração de atividade no Portal das Finanças é gratuito. Só podem ser pagos os serviços de contabilista certificado, se tiver contabilidade organizada ou uma situação complexa com IVA/rendimento internacional.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos expats',
      content: [
        { kind: 'checklist', items: [
          'Deixar a atividade aberta depois de se mudar e esquecer o IRS/IVA.',
          'Encerrar a atividade, mas não entregar o IRS do ano em que houve recibos verdes.',
          'Assumir que ausência de rendimentos encerra automaticamente a atividade.',
          'Confundir cessação nas Finanças com cancelamento do NIF, NISS ou da residência fiscal.',
          'Não verificar a Segurança Social Direta depois do encerramento.',
          'Emitir um recibo verde depois da data de cessação.',
          'Não guardar o comprovativo e depois não ter prova da data de encerramento.',
          'Escolher alteração em vez de cessação e pensar que a atividade ficou encerrada.',
          'Ignorar o IVA, se anteriormente existiam declarações no regime normal.',
          'Encerrar a atividade com efeitos retroativos sem confrontar com pagamentos efetivos e invoices.'
        ] },
        { kind: 'warning', text: 'Se tem clientes estrangeiros, reverse charge, VAT-ID/VIES, consultoria de crypto/IT, mixed income ou mudança de residência a meio do ano, é melhor verificar o encerramento com um contabilista. Um erro na data pode custar mais do que uma consulta.' }
      ]
    }
  ],
  costs: [
    { label: 'Submissão de cessação/suspensão no Portal das Finanças', amountEUR: 0, note: 'O serviço público é gratuito quando submetido pelo próprio.' },
    { label: 'Contabilista certificado', amountEURMin: 30, amountEURMax: 150, note: 'Valor indicativo para apoio pontual; com contabilidade organizada, a submissão normalmente é feita através do contabilista.' }
  ],
  sources: [
    {
      title: 'gov.pt: alteração, suspensão, reinício ou cessação de atividade independente',
      url: 'https://www2.gov.pt/en/servicos/fazer-alteracoes-a-atividade-de-trabalho-independente-de-uma-pessoa-singular',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: área de atividade independente e declarações de atividade',
      url: 'https://www.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS no DRE: obrigações declarativas de início, alteração e cessação',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA no DRE: declarações de alteração e cessação de atividade',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

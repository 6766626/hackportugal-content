export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-funeral-ss',
  categoryId: 'emergency_rights',
  title: 'Subsídio de Funeral — apoio para despesas de funeral da Segurança Social',
  tldr: 'O Subsídio de Funeral é uma prestação única da Segurança Social para cobrir parte das despesas de funeral: em 2026, o valor padrão é 219,96 €. O pedido deve ser apresentado no prazo de 6 meses após a morte, através da Segurança Social Direta / gov.pt ou num balcão da Segurança Social. Para cônjuge, filhos, pais e outros familiares em linha reta, não se trata de uma verificação de insuficiência económica: contam o parentesco, o facto de ter pago o funeral e o estatuto da pessoa falecida como beneficiário da Segurança Social.',
  tags: ['funeral', 'segurança-social', 'apoio', 'niss'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que prestação é esta',
      content: [
        { kind: 'paragraph', text: 'O Subsídio de Funeral não é uma compensação pelo custo total do funeral, mas sim uma ajuda única de valor fixo da Segurança Social. Em abril de 2026, o valor indicado na página oficial da Segurança Social é 219,96 €.' },
        { kind: 'paragraph', text: 'Normalmente, é pedido pela pessoa que pagou o funeral da pessoa falecida beneficiário da Segurança Social: cônjuge/parceiro em união de facto, filho, progenitor ou outro familiar em linha reta. Para estes familiares próximos, a prestação não é means-tested: a Segurança Social não avalia o seu rendimento como condição de acesso.' },
        { kind: 'warning', text: 'Não confunda com o subsídio por morte nem com o reembolso de despesas de funeral. O subsídio por morte é uma prestação distinta e mais elevada, paga aos familiares sobrevivos em caso de morte de uma pessoa segurada/pensionista. O reembolso de despesas de funeral aplica-se noutros cenários e depende das despesas efetivamente suportadas. Se não tiver a certeza, apresente o pedido através do serviço gov.pt/Segurança Social: o sistema e o funcionário encaminharão para o formulário correto.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem pode apresentar o pedido',
      content: [
        { kind: 'checklist', items: [
          'O requerente pagou efetivamente o funeral: a fatura/recibo deve estar em seu nome ou confirmar claramente que foi ele quem pagou.',
          'A pessoa falecida era beneficiário da Segurança Social ou estava abrangida pelo regime indicado pela Segurança Social para esta prestação.',
          'O requerente é cônjuge, ex-cônjuge nas condições aplicáveis, pessoa em união de facto, filho, progenitor, avô/avó, neto/neta ou outro familiar, se tiver pago o funeral.',
          'Para cônjuge, pais e filhos, não é necessário comprovar baixos rendimentos.',
          'O requerente deve ter NISS; se não tiver, deve primeiro obter o NISS ou apresentar o pedido com identificação num serviço da Segurança Social.',
          'É necessário um IBAN português ou uma conta SEPA para a qual a Segurança Social possa transferir a prestação.',
          'Estrangeiros com autorização de residência, visto, Cartão de Cidadão, CRUE ou outro documento legal podem apresentar o pedido nas mesmas condições, desde que sejam cumpridos os requisitos relativos à pessoa falecida e às despesas.'
        ] },
        { kind: 'paragraph', text: 'Se o funeral tiver sido pago por alguém que não é familiar — por exemplo, um amigo, vizinho ou empregador — a Segurança Social pode analisar a situação de forma diferente e pedir provas adicionais. Nesse caso, guarde antecipadamente todos os documentos de pagamento e a correspondência com a agência funerária.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos: o que preparar',
      content: [
        { kind: 'checklist', items: [
          'Documento do requerente: Cartão de Cidadão, autorização de residência, passaporte com visto ou outro ID.',
          'NISS do requerente e, se existir, NISS da pessoa falecida.',
          'Assento de óbito / certidão de óbito ou outro documento oficial de óbito.',
          'Fatura e recibo da agência funerária: de preferência com o NIF do requerente e os dados da pessoa falecida.',
          'Prova de parentesco: certidão de nascimento, certidão de casamento, união de facto ou documentos da Conservatória/IRN.',
          'IBAN do requerente: declaração bancária, extrato ou confirmação na Segurança Social Direta.',
          'Se houver representante: procuração e ID do representante.',
          'Se os documentos não forem portugueses: tradução e, quando exigido, apostila / legalização.'
        ] },
        { kind: 'warning', text: 'O erro principal é a fatura do funeral estar em nome de outra pessoa. A Segurança Social paga a quem comprovou as despesas. Se foi você que pagou, peça à agência funerária que emita desde logo a fatura/recibo com o seu NIF.' }
      ]
    },
    {
      id: 'deadline-and-application',
      title: 'Prazo e apresentação do pedido',
      content: [
        { kind: 'paragraph', text: 'O pedido deve ser apresentado no prazo de 6 meses após a morte. Não espere pelo fim dos procedimentos sucessórios: a prestação está ligada às funeral expenses e ao prazo de apresentação, não à partilha de herança.' },
        { kind: 'substeps', items: [
          { id: 'online', title: 'Online através do gov.pt / Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Aceda ao serviço “Pedir o subsídio de funeral” no gov.pt. Para iniciar sessão, normalmente utiliza-se a Chave Móvel Digital (CMD), o Cartão de Cidadão ou o acesso à Segurança Social Direta.' },
            { kind: 'checklist', items: [
              'Confirme os seus dados: nome, NISS, NIF, morada, IBAN.',
              'Indique os dados da pessoa falecida e a data de óbito.',
              'Carregue a certidão de óbito e os documentos da agência funerária.',
              'Anexe a prova de parentesco, se o sistema não a identificar automaticamente.',
              'Guarde o comprovativo de submissão — será necessário em caso de discussão sobre o prazo.'
            ] }
          ] },
          { id: 'counter', title: 'Presencialmente na Segurança Social', content: [
            { kind: 'paragraph', text: 'Se não tiver CMD, não tiver acesso à Segurança Social Direta ou se os documentos forem complexos, dirija-se a um balcão da Segurança Social. Leve originais e cópias. Nas grandes cidades, é melhor marcar previamente através da Linha Segurança Social ou do e-Clic/serviços online, se disponível.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'Depois da submissão: pagamento e recusas',
      content: [
        { kind: 'paragraph', text: 'Após a aprovação, o dinheiro é transferido para o IBAN do requerente.\n\nO prazo de processamento depende da zona e da completude dos documentos: se tudo estiver carregado corretamente, costuma ser mais rápido; se faltar recibo, proof of relationship ou IBAN, a Segurança Social enviará um pedido de correção.' },
        { kind: 'checklist', items: [
          'Acompanhe as notificações na Segurança Social Direta e as cartas enviadas para a morada de registo.',
          'Se receber um pedido de elementos, responda dentro do prazo indicado.',
          'Se o pedido for recusado por causa dos documentos, solicite o fundamento escrito da recusa.',
          'Verifique se, em alternativa, a família tem direito ao subsídio por morte.',
          'Se a pessoa falecida recebia pensão, esclareça a cessação da pensão e eventuais survivor benefits.',
          'Guarde as funeral invoices durante pelo menos vários anos: podem ser necessárias para a herança ou para questões fiscais.'
        ] },
        { kind: 'warning', text: 'A prestação é pequena — 219,96 €, e a funeral agency invoice média em Portugal é frequentemente bastante superior. Não planeie o funeral partindo do princípio de que a Segurança Social irá cobrir a totalidade das despesas.' }
      ]
    }
  ],
  costs: [
    { label: 'Subsídio de Funeral', amountEUR: 219.96, note: 'Prestação única de valor fixo da Segurança Social em abril de 2026.' },
    { label: 'Apresentação do pedido', amountEUR: 0, note: 'Através do gov.pt/Segurança Social Direta ou num balcão da Segurança Social, não é cobrada taxa administrativa.' }
  ],
  sources: [
    {
      title: 'Segurança Social: Subsídio de Funeral',
      url: 'https://www.seg-social.pt/subsidio-de-funeral',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: Pedir o subsídio de funeral',
      url: 'https://www.gov.pt/servicos/pedir-o-subsidio-de-funeral',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}

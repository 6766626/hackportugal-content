export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-funeral-ss',
  categoryId: 'emergency_rights',
  title: 'Subsídio de Funeral — apoio para despesas de funeral da Segurança Social',
  tldr: 'O Subsídio de Funeral é uma prestação única da Segurança Social para cobrir parte das despesas de funeral: em 2026, o valor normal é 219,96 €. O pedido é apresentado no prazo de 6 meses após o falecimento através da Segurança Social Direta / gov.pt ou num balcão da Segurança Social. Para cônjuge, filhos, pais e outros familiares em linha reta, não é uma avaliação de carência económica: são importantes o parentesco, o comprovativo de pagamento do funeral e o estatuto da pessoa falecida como beneficiário da Segurança Social.',
  tags: ['funeral', 'segurança-social', 'subsídio', 'niss'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que prestação é esta',
      content: [
        { kind: 'paragraph', text: 'O Subsídio de Funeral não é uma compensação pelo custo total do funeral, mas sim uma ajuda fixa e única da Segurança Social. Em abril de 2026, o valor indicado na página oficial da Segurança Social é 219,96 €.' },
        { kind: 'paragraph', text: 'Normalmente, é pedido pela pessoa que pagou o funeral do beneficiário da Segurança Social falecido: cônjuge/parceiro em união de facto, filho, pai/mãe ou outro familiar em linha reta. Para estes familiares próximos, a prestação não é sujeita a condição de recursos: a Segurança Social não avalia o seu rendimento como condição de acesso.' },
        { kind: 'warning', text: 'Não confunda com subsídio por morte e reembolso de despesas de funeral. O subsídio por morte é uma prestação separada, de valor mais elevado, atribuída aos familiares sobrevivos em caso de morte de segurado/pensionista. O reembolso de despesas de funeral aplica-se noutros cenários e depende das despesas efetivas. Se tiver dúvidas, apresente o pedido através do serviço gov.pt/Segurança Social: o sistema e o funcionário encaminharão para o formulário correto.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem pode apresentar o pedido',
      content: [
        { kind: 'checklist', items: [
          'O requerente pagou efetivamente o funeral: a fatura/recibo deve estar em seu nome ou confirmar claramente que foi ele quem pagou.',
          'A pessoa falecida era beneficiário da Segurança Social ou estava abrangida pelo regime indicado pela Segurança Social para esta prestação.',
          'O requerente é cônjuge, ex-cônjuge nas condições aplicáveis, pessoa em união de facto, filho, pai/mãe, avô/avó, neto/neta ou outro familiar, se tiver pago o funeral.',
          'Para cônjuge, pais e filhos não é necessário comprovar baixos rendimentos.',
          'O requerente deve ter NISS; se não tiver, deve primeiro obter NISS ou apresentar o pedido com identificação num serviço da Segurança Social.',
          'É necessário um IBAN português ou uma conta SEPA para a qual a Segurança Social possa transferir a prestação.',
          'Estrangeiros com autorização de residência, visto, Cartão de Cidadão, CRUE ou outro documento legal podem apresentar o pedido nas mesmas condições, se estiverem cumpridos os requisitos relativos à pessoa falecida e às despesas.'
        ] },
        { kind: 'paragraph', text: 'Se o funeral foi pago por alguém que não é familiar — por exemplo, um amigo, vizinho ou empregador —, a Segurança Social pode analisar a situação de forma diferente e pedir provas adicionais. Nesse caso, guarde antecipadamente todos os documentos de pagamento e a correspondência com a agência funerária.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos: o que preparar',
      content: [
        { kind: 'checklist', items: [
          'Documento do requerente: Cartão de Cidadão, autorização de residência, passaporte com visto ou outro documento de identificação.',
          'NISS do requerente e, se existir, NISS da pessoa falecida.',
          'Assento de óbito / certidão de óbito ou outro documento oficial de óbito.',
          'Fatura e recibo da agência funerária: de preferência com o NIF do requerente e os dados da pessoa falecida.',
          'Comprovativo de parentesco: certidão de nascimento, certidão de casamento, união de facto ou documentos da Conservatória/IRN.',
          'IBAN do requerente: declaração bancária, extrato ou confirmação na Segurança Social Direta.',
          'Se atuar por representante: procuração e documento de identificação do representante.',
          'Se os documentos não forem portugueses: tradução e, quando exigido, apostila / legalização.'
        ] },
        { kind: 'warning', text: 'O erro principal é a fatura do funeral estar emitida em nome de outra pessoa. A Segurança Social paga a quem comprovar as despesas. Se foi você que pagou, peça à agência funerária que emita logo a fatura/recibo com o seu NIF.' }
      ]
    },
    {
      id: 'deadline-and-application',
      title: 'Prazo e apresentação do pedido',
      content: [
        { kind: 'paragraph', text: 'O pedido deve ser apresentado no prazo de 6 meses após o falecimento. Não espere pelo fim dos processos de herança: a prestação está ligada às despesas de funeral e ao prazo de apresentação, não à partilha de herança.' },
        { kind: 'substeps', items: [
          { id: 'online', title: 'Online através de gov.pt / Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Aceda ao serviço “Pedir o subsídio de funeral” no gov.pt. Para entrar, normalmente utiliza-se a Chave Móvel Digital (CMD), o Cartão de Cidadão ou o acesso à Segurança Social Direta.' },
            { kind: 'checklist', items: [
              'Verifique os seus dados: nome, NISS, NIF, morada, IBAN.',
              'Indique os dados da pessoa falecida e a data do óbito.',
              'Carregue a certidão de óbito e os documentos da agência funerária.',
              'Anexe o comprovativo de parentesco, se o sistema não o detetar automaticamente.',
              'Guarde o comprovativo de submissão — será necessário em caso de disputa sobre o prazo.'
            ] }
          ] },
          { id: 'counter', title: 'Presencialmente na Segurança Social', content: [
            { kind: 'paragraph', text: 'Se não tiver CMD, não tiver acesso à Segurança Social Direta ou os documentos forem complexos, dirija-se a um balcão da Segurança Social. Leve originais e cópias. Nas grandes cidades, é preferível marcar previamente através da Linha Segurança Social ou do e-Clic/serviços online, se disponível.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'Após a submissão: pagamento e recusas',
      content: [
        { kind: 'paragraph', text: 'Após a aprovação, o dinheiro é transferido para o IBAN do requerente. O prazo de processamento depende da zona e da completude dos documentos: se tudo estiver carregado corretamente, costuma ser mais rápido; se faltar recibo, comprovativo de parentesco ou IBAN, a Segurança Social enviará um pedido de correção.' },
        { kind: 'checklist', items: [
          'Acompanhe as notificações na Segurança Social Direta e as cartas enviadas para a morada registada.',
          'Se receber um pedido de elementos, responda dentro do prazo indicado.',
          'Se o pedido for recusado por causa dos documentos, solicite a fundamentação escrita da recusa.',
          'Verifique se, em vez desta prestação, a família tem direito a subsídio por morte.',
          'Se a pessoa falecida recebia pensão, esclareça a cessação da pensão e eventuais prestações de sobrevivência.',
          'Guarde as faturas do funeral durante pelo menos alguns anos: podem ser necessárias para questões de herança ou fiscais.'
        ] },
        { kind: 'warning', text: 'A prestação é pequena — 219,96 €, enquanto a fatura média de uma agência funerária em Portugal é muitas vezes significativamente superior. Não planeie o funeral assumindo que a Segurança Social cobrirá as despesas na totalidade.' }
      ]
    }
  ],
  costs: [
    { label: 'Subsídio de Funeral', amountEUR: 219.96, note: 'Prestação fixa e única da Segurança Social em abril de 2026.' },
    { label: 'Apresentação do pedido', amountEUR: 0, note: 'Através de gov.pt/Segurança Social Direta ou num balcão da Segurança Social não é cobrada taxa.' }
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}

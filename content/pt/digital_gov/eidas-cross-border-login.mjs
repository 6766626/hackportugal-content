export default {
  editorialVoice: 'hackportugal',
  id: 'eidas-cross-border-login',
  categoryId: 'digital_gov',
  title: 'eIDAS: acesso aos serviços públicos portugueses através do eID de outro país da UE',
  tldr: 'A Autenticação Europeia em autenticacao.gov.pt permite aceder a parte dos serviços públicos portugueses através do eID nacional de outro país da UE/EEE, se o esquema eID estiver oficialmente ligado ao eIDAS. É gratuito e útil antes de obter o Cartão de Cidadão ou a Chave Móvel Digital. Não funciona em todo o lado: o serviço tem de aceitar a autenticação europeia e, para certas operações, podem continuar a exigir NIF, NISS, número de utente ou assinatura portuguesa.',
  tags: ['eidas', 'cmd', 'governo', 'ue'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a Autenticação Europeia',
      content: [
        { kind: 'paragraph', text: 'A Autenticação Europeia é o acesso através do nó eIDAS de Portugal. Em vez do Cartão de Cidadão ou da Chave Móvel Digital, você escolhe a identificação eletrónica de outro país da UE/EEE: por exemplo, cartão eID, eID bancário ou eID móvel, se esse esquema tiver sido oficialmente notificado ao abrigo do eIDAS e estiver ligado ao acesso transfronteiriço.' },
        { kind: 'paragraph', text: 'Cenário prático para um expatriado: você já tem um eID da Estónia, Letónia, Lituânia, Alemanha, Bélgica, Itália, Espanha, Países Baixos ou outro país ligado, mas ainda não recebeu o Cartão de Cidadão/CMD português. Através da Autenticação Europeia, é possível entrar em alguns portais portugueses onde o acesso é feito por autenticacao.gov.pt.' },
        { kind: 'warning', text: 'Isto não é uma “conta portuguesa” nem uma substituição automática da CMD. O eIDAS confirma a sua identidade, mas o serviço português pode não o encontrar na respetiva base de dados sem NIF, NISS, número de utente, número de processo AIMA ou outro identificador local.' }
      ]
    },
    {
      id: 'requirements',
      title: 'O que deve verificar antecipadamente',
      content: [
        { kind: 'checklist', items: [
          'O seu eID foi emitido por um país da UE/EEE e é válido para autenticação online.',
          'O esquema eID do seu país está oficialmente ligado ao eIDAS; a lista de países e métodos pode mudar.',
          'Tem um meio de acesso funcional: cartão + reader, aplicação móvel, códigos PIN, Smart-ID/Mobile-ID ou equivalente — depende do país.',
          'O navegador permite redirecionamentos e janelas pop-up dos domínios autenticacao.gov.pt e do fornecedor nacional de eID.',
          'Nome, apelido e data de nascimento no eID coincidem com os dados que utiliza nos documentos portugueses.',
          'Para o serviço pretendido, já tem um identificador português, se for necessário: NIF para Finanças, NISS para Segurança Social, número de utente para SNS.',
          'Se precisar de uma assinatura de documento juridicamente válida em Portugal, verifique antecipadamente se o serviço aceita uma assinatura eIDAS estrangeira ou exige CMD/Cartão de Cidadão.'
        ] }
      ]
    },
    {
      id: 'how-to-login',
      title: 'Como entrar através do eID de outro país da UE',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-service', title: '1. Abra o serviço português necessário', content: [
            { kind: 'paragraph', text: 'Comece não por um site abstrato, mas por um portal concreto: ePortugal, portal das Finanças, Segurança Social Direta, SNS 24 ou outro serviço. Clique em entrar e aguarde o redirecionamento para autenticacao.gov.pt.' }
          ] },
          { id: 'choose-european-auth', title: '2. Escolha “Autenticação Europeia”', content: [
            { kind: 'paragraph', text: 'Na página Autenticação.gov estão normalmente disponíveis o Cartão de Cidadão, a Chave Móvel Digital e outros métodos. Para um eID estrangeiro, escolha “Autenticação Europeia”. A interface pode estar em PT/EN; por vezes a formulação aparece como “European Authentication”.' }
          ] },
          { id: 'select-country', title: '3. Indique o país do seu eID', content: [
            { kind: 'paragraph', text: 'Escolha o país emissor do eID. Depois disso, será redirecionado para o fornecedor nacional desse país: aí introduz o PIN, confirma na aplicação ou utiliza o card reader.' }
          ] },
          { id: 'confirm-data', title: '4. Confirme a transmissão de atributos', content: [
            { kind: 'paragraph', text: 'Normalmente são transmitidos atributos básicos: nome, apelido, data de nascimento e identificador único. Sem consentimento, a transmissão não será concluída e o serviço português não receberá a confirmação de identidade.' }
          ] },
          { id: 'return-to-pt', title: '5. Regresse ao portal português', content: [
            { kind: 'paragraph', text: 'Após autenticação bem-sucedida, é devolvido ao serviço português de origem. Se o portal pedir adicionalmente NIF/NISS/utente, isso é uma parte normal da associação da identidade ao registo local.' }
          ] }
        ] }
      ]
    },
    {
      id: 'where-it-helps',
      title: 'Onde isto é realmente útil',
      content: [
        { kind: 'paragraph', text: 'O eIDAS é especialmente útil na fase inicial da mudança: você já consegue confirmar a identidade ao nível da UE, mas ainda não tem a CMD portuguesa. Isto reduz a dependência de deslocações presenciais, se o serviço concreto suportar o acesso europeu.' },
        { kind: 'checklist', items: [
          'Verificação de acesso a serviços ePortugal, onde a entrada é feita através de autenticacao.gov.pt.',
          'Trabalho preliminar com alguns formulários administrativos antes de obter a CMD.',
          'Acesso a portais que aceitam eIDAS como método de autenticação, mas depois pedem um número de registo português.',
          'Utilização do eID do país de origem para identificação, quando você não tem direito ao Cartão de Cidadão.',
          'Situações em que a CMD ainda não foi ativada: por exemplo, acabou de chegar com visto D1-D8 ou aguarda a autorização de residência AIMA.',
          'Confirmação de identidade sem número de telefone português, se o eID nacional do seu país não depender dele.'
        ] },
        { kind: 'warning', text: 'A limitação principal: o suporte depende do serviço concreto. Se no portal não existir “Autenticação Europeia” ou se, após o acesso, aparecer um erro de associação de dados, isso não significa que o seu eID esteja avariado — o serviço pode estar configurado apenas para CMD/Cartão de Cidadão ou para registos de residentes em Portugal.' }
      ]
    },
    {
      id: 'limits-and-troubleshooting',
      title: 'Limitações e erros típicos',
      content: [
        { kind: 'checklist', items: [
          '“Country not available” — o seu país ou o esquema eID concreto não está ligado ao eIDAS para este fluxo.',
          '“Authentication failed” — verifique o PIN, a aplicação, o card reader, os certificados do cartão e a hora do dispositivo.',
          'Página em branco após o regresso — experimente outro navegador, desative bloqueadores, permita cookies e pop-up.',
          'O serviço não vê o NIF — o eIDAS não transmite automaticamente o NIF português; é necessário introduzi-lo ou associá-lo separadamente.',
          'Apelidos diferentes após casamento/transliteração — o serviço português pode não conseguir corresponder o registo; poderá ser necessária verificação manual.',
          'É necessária assinatura de PDF — o acesso via eIDAS nem sempre equivale a uma assinatura eletrónica; verifique os requisitos do serviço.',
          'Operações financeiras e fiscais podem exigir acesso Finanças separado e confirmação através do Portal das Finanças.',
          'Processos AIMA e marcações relativos à autorização de residência estão frequentemente associados ao número de processo, passaporte, email e regras locais, e não apenas ao eIDAS.'
        ] },
        { kind: 'warning', text: 'Não introduza o PIN do eID em páginas que não pertençam ao fornecedor nacional oficial do seu país ou a autenticacao.gov.pt. Um acesso eIDAS normal é sempre feito por redirecionamento para um domínio oficial, e não através de um formulário de terceiros.' }
      ]
    },
    {
      id: 'after-you-get-cmd',
      title: 'O que fazer depois de obter a CMD ou o Cartão de Cidadão',
      content: [
        { kind: 'paragraph', text: 'Depois de obter a autorização de residência e a possibilidade de ativar a Chave Móvel Digital, é melhor configurar a CMD: a maioria dos serviços portugueses está otimizada precisamente para ela. A CMD está associada a identificadores portugueses e é mais cómoda para assinaturas, notificações e acesso regular.' },
        { kind: 'checklist', items: [
          'Ative a CMD através de loja de cidadão, Espaço Cidadão, consulado ou canais online disponíveis, se cumprir as condições.',
          'Associe um número de telefone português e um email que controla efetivamente.',
          'Teste o acesso a ePortugal, Finanças, Segurança Social Direta, SNS 24.',
          'Guarde o eID estrangeiro como método de reserva para serviços da UE.',
          'Para documentos em que seja necessária uma assinatura qualificada em Portugal, teste a CMD/Cartão de Cidadão antecipadamente, não no dia do prazo.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Acesso através da Autenticação Europeia', amountEUR: 0, note: 'O lado português não cobra pela autenticação; podem existir custos no seu país com o cartão, reader ou reemissão do eID.' }
  ],
  sources: [
    {
      title: 'Autenticação.gov — Autenticação Europeia',
      url: 'https://www.autenticacao.gov.pt/outros-meios/autenticacao-europeia',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Comissão Europeia — eIDAS e identificação eletrónica transfronteiriça',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulamento (UE) n.º 910/2014 — eIDAS',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0910',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Comissão Europeia — esquemas eID notificados ao abrigo do eIDAS',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/eidas-notification',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}

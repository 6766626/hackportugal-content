export default {
  editorialVoice: 'hackportugal',
  id: 'passport-change-mid-residency',
  categoryId: 'residence_permit',
  title: 'Troca de passaporte com autorização de residência válida — o que atualizar',
  tldr: 'Se obteve um novo passaporte, a autorização de residência portuguesa em vigor normalmente não se torna inválida: o número do título de residência mantém-se, e o NIF/NISS/utente também não mudam. Mas o novo número de passaporte deve ser atualizado na AIMA no próximo renovação ou através de contacto/pedido, nas Finanças como documento de identificação, no banco para KYC e junto do empregador/universidade. Para viajar, leve o novo passaporte + cartão de residência; o passaporte antigo é útil se tiver vistos, carimbos ou o número antigo no processo da AIMA.',
  tags: ['passaporte', 'aima', 'autorização de residência', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-changes',
      title: 'O que muda e o que não muda',
      content: [
        { kind: 'paragraph', text: 'A troca de passaporte é uma alteração do documento de identificação, não uma alteração do seu estatuto migratório. A autorização de residência em Portugal está ligada ao seu processo na AIMA e ao número do título de residência, não apenas ao número do passaporte.' },
        { kind: 'checklist', items: [
          'O NIF não muda: é um número fiscal para toda a vida.',
          'O NISS não muda: o número da Segurança Social mantém-se.',
          'O número de utente SNS não muda.',
          'O cartão de residência normalmente continua válido até à data de validade, se não tiverem mudado o nome, a nacionalidade, a data de nascimento ou o tipo de autorização de residência.',
          'O número do novo passaporte deve ser atualizado nas entidades onde o passaporte é usado como documento de identificação.',
          'Não deite fora o passaporte antigo: pode conter vistos D1-D8, carimbos de entrada, ou o número antigo do passaporte para conferência com a AIMA/banco.'
        ] },
        { kind: 'warning', text: 'Se, ao trocar de passaporte, mudaram o nome, a transliteração, a nacionalidade, a data de nascimento ou o sexo, já não se trata de uma “simples substituição de passaporte”. É necessária verificação com a AIMA: os dados no cartão de residência devem coincidir com o documento válido.' }
      ]
    },
    {
      id: 'aima',
      title: 'AIMA: quando e como comunicar',
      content: [
        { kind: 'paragraph', text: 'A AIMA deve ter o passaporte atualizado no seu processo migratório. Na prática, o número de passaporte é mais frequentemente atualizado na renovação da autorização de residência: apresenta o novo passaporte como documento principal, e o antigo — se for necessário comprovar o histórico de visto/entrada.' },
        { kind: 'checklist', items: [
          'Faça um scan do novo passaporte: página com fotografia, número, data de emissão e prazo de validade.',
          'Guarde um scan do passaporte antigo e das páginas com visto/carimbos, se existirem.',
          'Se a renovação da autorização de residência estiver próxima — atualize o passaporte no conjunto de documentos para a renovação.',
          'Se ainda faltar muito tempo para a renovação, verifique a área pessoal/canal da AIMA ou envie um pedido através dos contactos oficiais da AIMA com o assunto de atualização dos dados do documento.',
          'Para atendimento presencial na AIMA, leve ambos os passaportes: o novo original e o antigo original, ou uma cópia se o antigo tiver sido retido pelo consulado.',
          'Se o cartão de residência tiver sido perdido ou roubado juntamente com o passaporte antigo, é um procedimento separado: primeiro denúncia na polícia, depois pedido de duplicado/substituição do cartão de residência.'
        ] },
        { kind: 'warning', text: 'Não espere que a AIMA tome conhecimento automaticamente do novo passaporte através do consulado do seu país. As autoridades portuguesas normalmente veem apenas os documentos que você próprio apresentou no processo.' }
      ]
    },
    {
      id: 'financas-and-tax',
      title: 'Finanças: atualizar o documento, não o NIF',
      content: [
        { kind: 'paragraph', text: 'Nas Finanças, o seu NIF mantém-se, mas no cadastro fiscal pode constar um documento de identificação: passaporte, cartão de residência ou Cartão de Cidadão para cidadãos portugueses. Se o passaporte antigo era o ID principal, atualize-o para o novo.' },
        { kind: 'checklist', items: [
          'Verifique os dados no Portal das Finanças: NIF, nome, morada fiscal, documento de identificação.',
          'Se tiver acesso ao Portal das Finanças, apresente um pedido através do e-balcão ou marque atendimento num Serviço de Finanças.',
          'Anexe uma cópia do novo passaporte e, se necessário, uma cópia do cartão de residência.',
          'Se tiver fiscal representative, confirme se o representante pode apresentar/acompanhar a atualização.',
          'Se já se tornou residente fiscal em Portugal, verifique a morada fiscal separadamente: a troca de passaporte não altera o endereço automaticamente.',
          'IRS, IVA, recibos verdes, IMI, IUC e outros impostos continuam ligados ao NIF, não ao número do passaporte.'
        ] },
        { kind: 'warning', text: 'Não abra um novo NIF por causa de um novo passaporte. Dois NIF para a mesma pessoa criam problemas com IRS, bancos, contratos e Segurança Social.' }
      ]
    },
    {
      id: 'banks-work-services',
      title: 'Banco, trabalho, SNS e serviços do dia a dia',
      content: [
        { kind: 'paragraph', text: 'Os bancos e serviços financeiros são obrigados a manter os dados KYC do cliente atualizados. Se no banco constava o passaporte antigo, é melhor fazer a atualização de imediato: caso contrário, podem limitar operações, pedir documentos em transferências ou na renovação do cartão.' },
        { kind: 'checklist', items: [
          'Banco: carregue o novo passaporte na app/online banking ou dirija-se a uma agência com o passaporte e o cartão de residência.',
          'MB WAY/Multibanco, por si só, não exigem um novo passaporte, mas dependem do perfil bancário.',
          'Empregador: envie o novo passaporte aos RH, especialmente se o contrato de trabalho e a folha salarial guardarem o documento de ID.',
          'Contabilista: comunique se for self-employed com recibos verdes e o passaporte constar nos dados contabilísticos.',
          'SNS/Centro de Saúde: o número de utente não muda, mas pode pedir a atualização do documento na receção.',
          'Segurança Social: o NISS não muda; a atualização é necessária se no perfil constar o passaporte antigo ou se lhe pedirem confirmação de identidade.',
          'Universidade, escola, seguradora, operador de telecomunicações, arrendamento: atualize onde o contrato contenha expressamente o número do passaporte antigo.'
        ] }
      ]
    },
    {
      id: 'travel',
      title: 'Viagens com novo passaporte e autorização de residência antiga',
      content: [
        { kind: 'paragraph', text: 'Para entrar em Portugal e viajar no espaço Schengen, precisa de um passaporte válido e de um cartão de residência válido. Se a autorização de residência ainda estiver válida, a troca de passaporte normalmente não exige um novo visto.' },
        { kind: 'checklist', items: [
          'Viaje com o novo passaporte válido e o cartão físico de residência.',
          'Leve o passaporte antigo se nele constava um visto nacional D1-D8, o carimbo da primeira entrada ou se estiver indicado em documentos antigos da AIMA.',
          'Se o passaporte antigo for retido aquando da emissão do novo, guarde cópias das páginas importantes e uma declaração/anotação do consulado, se for emitida.',
          'Verifique se o nome no novo passaporte coincide com o nome no cartão de residência e no bilhete de avião.',
          'Se o nome mudou após casamento/divórcio, avalie primeiro a necessidade de substituir o cartão de residência, e não apenas de atualizar o passaporte.',
          'Não entregue o cartão de residência à companhia aérea como “visto”: é o seu documento de residência; apresente-o juntamente com o passaporte na verificação do direito de entrada.'
        ] },
        { kind: 'warning', text: 'Se o prazo de validade da autorização de residência tiver expirado, o novo passaporte por si só não resolve o problema de entrada. É necessário ter uma renovação válida/confirmação do processo AIMA ou outro documento reconhecido na data da viagem.' }
      ]
    },
    {
      id: 'practical-order',
      title: 'Ordem prática de atuação',
      content: [
        { kind: 'checklist', items: [
          '1. Obtenha o novo passaporte e faça scans em PDF do passaporte novo e do antigo.',
          '2. Verifique se o nome, a data de nascimento e a nacionalidade coincidem com o cartão de residência.',
          '3. Comunique/prepare a atualização para a AIMA: de imediato através de um canal disponível ou na próxima renovação da autorização de residência.',
          '4. Atualize o documento nas Finanças, se o passaporte era o seu ID no cadastro fiscal.',
          '5. Atualize o KYC no banco e nos serviços financeiros.',
          '6. Comunique ao empregador, contabilista, universidade, seguradora e outros contraentes onde o número do passaporte conste do contrato.',
          '7. Até à próxima renovação da autorização de residência, guarde o passaporte antigo ou cópias autenticadas/simples juntamente com os documentos migratórios.'
        ] },
        { kind: 'paragraph', text: 'Regra principal: os números NIF, NISS, utente e da própria autorização de residência não são “reemitidos” por causa de um novo passaporte. O que se atualiza é o documento com que comprova a identidade.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Comunicar o novo passaporte à AIMA/Finanças/banco',
      amountEUR: 0,
      note: 'Normalmente gratuito, se não for emitido um novo cartão e não houver serviços notariais/de tradução.'
    },
    {
      label: 'Substituição ou duplicado do cartão de residência',
      amountEURMin: 0,
      amountEURMax: 307.2,
      note: 'Nem sempre é necessária; a taxa depende do fundamento e do tipo de procedimento AIMA. A partir de 01.03.2026, segundo a tabela atualizada da AIMA, procedimentos específicos, por exemplo art. 75, custam 307,20 €.'
    },
    {
      label: 'Novo passaporte no consulado do seu país',
      amountEURMin: 0,
      amountEURMax: 250,
      note: 'O custo depende do país de nacionalidade, da urgência e da tabela consular; não é uma taxa portuguesa.'
    }
  ],
  sources: [
    {
      title: 'ePortugal: renovação da autorização de residência',
      url: 'https://www2.gov.pt/en/servicos/renovar-a-autorizacao-de-residencia',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'AIMA: portal oficial da Agência para a Integração, Migrações e Asilo',
      url: 'https://aima.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: atendimento e e-balcão',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal: identificação de clientes e prevenção do branqueamento de capitais',
      url: 'https://www.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}

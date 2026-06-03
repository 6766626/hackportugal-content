export default {
  editorialVoice: 'hackportugal',
  id: 'cheque-dentista-pnpso',
  categoryId: 'healthcare',
  title: 'Cheque-Dentista — vale dentário estatal do PNPSO',
  tldr: 'O Cheque-Dentista é um vale do SNS no âmbito do programa PNPSO para consulta com um dentista aderente.\n\nEm 2026, o valor nominal de um vale normal é 45 €. Nem todas as pessoas têm direito: crianças e adolescentes por grupos etários/escola ou por referenciação do médico de família, grávidas acompanhadas no SNS, idosos com Complemento Solidário para Idosos, pessoas com VIH/SIDA. O vale é emitido pelo SNS e só pode ser usado junto de um dentista aderente da lista PNPSO, normalmente dentro do prazo de validade indicado no próprio cheque.',
  tags: ['sns', 'dentista', 'pnpso', 'vale'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o Cheque-Dentista',
      content: [
        { kind: 'paragraph', text: 'O Cheque-Dentista não é um cupão de desconto nem um seguro privado. É um vale estatal do Programa Nacional de Promoção de Saúde Oral (PNPSO), através do qual o SNS paga tratamentos dentários básicos junto de dentistas privados aderentes ao programa.' },
        { kind: 'paragraph', text: 'Em 2026, o cheque-dentista normal tem o valor nominal de 45 €. O paciente não recebe dinheiro: o dentista realiza o tratamento, regista o cheque utilizado no sistema PNPSO e recebe o pagamento do Estado.' },
        { kind: 'checklist', items: [
          'O vale só é válido junto de dentistas aderentes — dentistas da lista oficial do PNPSO.',
          'Normalmente estão abrangidos consulta, diagnóstico, prevenção, restaurações, extrações dentárias e outros procedimentos básicos segundo as regras clínicas do PNPSO.',
          'Não estão abrangidos procedimentos estéticos: branqueamento, facetas, ortodontia cosmética.',
          'Se o tratamento for mais caro ou não estiver incluído no PNPSO, o dentista deve explicar antecipadamente o que é pago à parte.',
          'O vale tem número, data de emissão e prazo de validade — verifique a validade antes de marcar.',
          'Ter NIF, número de utente e registo no SNS facilita muito a obtenção e utilização do vale.'
        ] }
      ]
    },
    {
      id: 'who-can-get',
      title: 'Quem tem direito ao vale em 2026',
      content: [
        { kind: 'paragraph', text: 'O PNPSO é um programa dirigido a grupos específicos. O simples facto de viver em Portugal ou ter autorização de residência não dá direito automático ao Cheque-Dentista. É necessário pertencer a um dos grupos do SNS.' },
        { kind: 'checklist', items: [
          'Crianças e adolescentes: os vales são emitidos por grupos etários do PNPSO, muitas vezes através da escola, do médico de família ou de higienista oral. As idades escolares principais são 7, 10 e 13 anos; outros cheques podem ser possíveis se forem cumpridas as condições do programa.',
          'Crianças mais pequenas: em determinadas situações clínicas, a referenciação pode ser emitida pelo médico de família no Centro de Saúde.',
          'Grávidas: grávidas acompanhadas no SNS podem receber até 3 cheques-dentista durante a gravidez.',
          'Idosos: beneficiários do Complemento Solidário para Idosos (CSI) podem receber cheques-dentista segundo as regras do PNPSO.',
          'Pessoas com VIH/SIDA: os vales são emitidos através do SNS por uma via específica do PNPSO.',
          'Além disso, o PNPSO inclui uma via para deteção precoce do cancro oral, mas trata-se de um percurso separado e não de um “cheque grátis normal para o dentista”.'
        ] },
        { kind: 'warning', text: 'Os expatriados perdem muitas vezes este apoio por recorrerem a clínicas privadas: se a criança estuda em Portugal, a gravidez é acompanhada no SNS ou um familiar idoso tem CSI, pergunte especificamente pelo “cheque-dentista PNPSO” no Centro de Saúde ou na escola.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Como obter o Cheque-Dentista',
      content: [
        { kind: 'substeps', items: [
          { id: 'children', title: 'Para uma criança ou adolescente', content: [
            { kind: 'paragraph', text: 'Pergunte na escola, ao médico de família ou no Centro de Saúde se a criança integra o grupo etário atual do PNPSO. Nas escolas públicas, o processo passa muitas vezes pela saúde escolar; para crianças fora da via escolar, passa pelo médico de família.' },
            { kind: 'checklist', items: [
              'Número de utente da criança.',
              'Documento de identificação: Cartão de Cidadão, autorização de residência ou passaporte.',
              'NIF, se já existir.',
              'Dados da escola e ano de escolaridade, se o vale for emitido pela via escolar.',
              'Contactos do progenitor ou representante legal.'
            ] }
          ] },
          { id: 'pregnancy', title: 'Para uma grávida', content: [
            { kind: 'paragraph', text: 'Dirija-se ao médico de família, à enfermeira de saúde materna ou ao Centro de Saúde onde a gravidez é acompanhada. Peça a emissão de cheque-dentista para grávida. Normalmente estão disponíveis até 3 cheques durante a gravidez.' }
          ] },
          { id: 'elderly-csi', title: 'Para um idoso com CSI', content: [
            { kind: 'paragraph', text: 'É necessário ser beneficiário do Complemento Solidário para Idosos. No Centro de Saúde, verificam o direito ao apoio e emitem o cheque-dentista através do PNPSO.' }
          ] },
          { id: 'hiv', title: 'Para pessoas com VIH/SIDA', content: [
            { kind: 'paragraph', text: 'O percurso normalmente passa pelo médico do SNS que acompanha o paciente. Não é necessário discutir o diagnóstico com a clínica privada antes da emissão do vale: primeiro obtenha a referenciação/cheque no SNS.' }
          ] }
        ] }
      ]
    },
    {
      id: 'use-it',
      title: 'Como usar o vale no dentista',
      content: [
        { kind: 'paragraph', text: 'Após a emissão do cheque-dentista, escolha um dentista da lista oficial do PNPSO. Nem todas as clínicas privadas aceitam cheques do Estado, mesmo que trabalhem com Médis, Multicare ou outros seguros.' },
        { kind: 'checklist', items: [
          'Abra a lista de profissionais aderentes no portal Saúde Oral / PNPSO.',
          'Ligue para a clínica e diga diretamente: “Tenho um cheque-dentista do PNPSO”.',
          'Confirme se o médico aceita exatamente a sua categoria de cheque: criança, grávida, idoso CSI, VIH/SIDA.',
          'Leve para a consulta o documento de identificação, número de utente e o próprio cheque-dentista: em papel ou número eletrónico.',
          'Antes do procedimento, pergunte o que é totalmente coberto pelo cheque-dentista e o que será pago.',
          'Não assine consentimento para serviços pagos se não tiver percebido o preço.',
          'Depois da consulta, confirme se é necessário outro cheque-dentista e quem o ativa — o dentista ou o Centro de Saúde.'
        ] },
        { kind: 'warning', text: 'Se o prazo de validade tiver expirado, o dentista não conseguirá usar o vale. Não adie a marcação: em Lisboa, no Porto e nos subúrbios pode haver listas de espera nos dentistas aderentes.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Problemas frequentes entre estrangeiros',
      content: [
        { kind: 'checklist', items: [
          'Não tem número de utente: primeiro registe-se no SNS através do Centro de Saúde da sua área de residência.',
          'A criança está numa escola privada ou internacional: pergunte no Centro de Saúde se existe uma via PNPSO fora da emissão escolar.',
          'A gravidez é acompanhada apenas numa clínica privada: para obter o cheque-dentista, normalmente é necessário acompanhamento ou registo da gravidez no SNS.',
          'O familiar idoso tem baixos rendimentos, mas não pediu CSI: sem Complemento Solidário para Idosos, o direito ao cheque-dentista de “idoso” pode não surgir.',
          'A clínica pede um pagamento adicional: isso só é possível para serviços fora da cobertura do PNPSO; peça um orçamento antes do tratamento.',
          'Não encontra dentista perto: alargue a pesquisa ao concelho e às freguesias vizinhas no portal PNPSO.',
          'Língua: ao marcar, use a frase simples “Quero marcar consulta com cheque-dentista PNPSO”.'
        ] },
        { kind: 'paragraph', text: 'Se no Centro de Saúde lhe disserem que “não tem direito”, peça que esclareçam o motivo por categoria PNPSO: idade da criança, grávida, CSI ou VIH/SIDA. Por vezes o problema não está no direito, mas no facto de os dados de utente, gravidez, escola ou CSI ainda não terem sido atualizados no sistema.' }
      ]
    }
  ],
  costs: [
    { label: 'Valor nominal do Cheque-Dentista normal', amountEUR: 45, note: 'Pago pelo SNS diretamente ao dentista aderente ao PNPSO; o paciente não recebe dinheiro.' },
    { label: 'Copagamento do paciente', amountEURMin: 0, amountEURMax: 0, note: 'Para procedimentos cobertos pelo PNPSO, não deve haver copagamento. Serviços fora da cobertura só são pagos após acordo sobre o preço.' },
    { label: 'Consulta privada sem vale', amountEURMin: 40, amountEURMax: 90, note: 'Valor indicativo de mercado; nas grandes cidades e junto de especialistas pode ser mais caro.' }
  ],
  sources: [
    {
      title: 'SNS 24: Cheques-Dentista',
      url: 'https://www.sns24.gov.pt/servico/cheques-dentista/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Programa Nacional de Promoção de Saúde Oral — PNPSO',
      url: 'https://www.saudeoral.min-saude.pt/pnpso/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: Registo e acesso ao Serviço Nacional de Saúde',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}

export default {
  editorialVoice: 'hackportugal',
  id: 'cheque-dentista-pnpso',
  categoryId: 'healthcare',
  title: 'Cheque-Dentista — vale dentário estatal PNPSO',
  tldr: 'O Cheque-Dentista é um vale do SNS no âmbito do programa PNPSO para uma consulta com um dentista aderente. Em 2026, o valor nominal de um vale normal é 45 €. Nem todas as pessoas têm direito: crianças e adolescentes por grupos etários/escola ou encaminhamento do médico de família, grávidas acompanhadas no SNS, idosos com Complemento Solidário para Idosos, pessoas com VIH/SIDA. O vale é emitido pelo SNS e só pode ser usado num dentista aderente da lista PNPSO, normalmente dentro do prazo de validade indicado no próprio cheque.',
  tags: ['sns', 'dentista', 'pnpso', 'vale'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o Cheque-Dentista',
      content: [
        { kind: 'paragraph', text: 'O Cheque-Dentista não é um cupão de desconto nem um seguro privado. É um vale estatal do Programa Nacional de Promoção de Saúde Oral (PNPSO), através do qual o SNS paga tratamentos dentários básicos em dentistas privados aderentes ao programa.' },
        { kind: 'paragraph', text: 'Em 2026, o cheque-dentista normal tem o valor nominal de 45 €. O paciente não recebe dinheiro: o dentista realiza o tratamento, regista o cheque utilizado no sistema PNPSO e recebe o pagamento do Estado.' },
        { kind: 'checklist', items: [
          'O vale só é válido em dentistas aderentes — dentistas da lista oficial PNPSO.',
          'Normalmente, cobre consulta, diagnóstico, prevenção, obturações, extrações dentárias e outros procedimentos básicos de acordo com as regras clínicas do PNPSO.',
          'Não cobre procedimentos estéticos: branqueamento, facetas, ortodontia cosmética.',
          'Se o tratamento for mais caro ou não estiver incluído no PNPSO, o dentista deve explicar antecipadamente o que será pago à parte.',
          'O vale tem número, data de emissão e prazo de validade — confirme a validade antes de marcar.',
          'Ter NIF, número de utente e inscrição no SNS facilita muito a obtenção e utilização do vale.'
        ] }
      ]
    },
    {
      id: 'who-can-get',
      title: 'Quem tem direito ao vale em 2026',
      content: [
        { kind: 'paragraph', text: 'O PNPSO é um programa dirigido a grupos específicos. O simples facto de viver em Portugal ou ter autorização de residência não dá direito automático ao Cheque-Dentista. É necessário pertencer a um dos grupos do SNS.' },
        { kind: 'checklist', items: [
          'Crianças e adolescentes: os vales são emitidos por grupos etários PNPSO, muitas vezes através da escola, do médico de família ou do higienista oral. As idades escolares principais são 7, 10 e 13 anos; podem existir cheques posteriores se forem cumpridas as condições do programa.',
          'Crianças mais novas: em determinadas situações clínicas, o encaminhamento pode ser emitido pelo médico de família no Centro de Saúde.',
          'Grávidas: grávidas acompanhadas no SNS podem receber até 3 cheques-dentista por gravidez.',
          'Idosos: beneficiários do Complemento Solidário para Idosos (CSI) podem receber cheques-dentista de acordo com as regras do PNPSO.',
          'Pessoas com VIH/SIDA: os vales são emitidos através do SNS por uma via específica do PNPSO.',
          'Além disso, o PNPSO inclui uma via para a deteção precoce do cancro oral, mas trata-se de um percurso separado e não de um “cheque gratuito normal para o dentista”.'
        ] },
        { kind: 'warning', text: 'Os expatriados perdem frequentemente este benefício por recorrerem a clínicas privadas: se a criança estuda em Portugal, a gravidez é acompanhada no SNS ou um familiar idoso tem CSI, pergunte especificamente pelo “cheque-dentista PNPSO” no Centro de Saúde ou na escola.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Como obter o Cheque-Dentista',
      content: [
        { kind: 'substeps', items: [
          { id: 'children', title: 'Para uma criança ou adolescente', content: [
            { kind: 'paragraph', text: 'Pergunte na escola, ao médico de família ou no Centro de Saúde se a criança está incluída no grupo etário PNPSO em vigor. Nas escolas públicas, o processo decorre muitas vezes através da saúde escolar; para crianças fora da via escolar, é feito através do médico de família.' },
            { kind: 'checklist', items: [
              'Número de utente da criança.',
              'Documento de identificação: Cartão de Cidadão, autorização de residência ou passaporte.',
              'NIF, se já existir.',
              'Dados da escola e ano de escolaridade, se o vale for emitido pela via escolar.',
              'Contactos do progenitor ou representante legal.'
            ] }
          ] },
          { id: 'pregnancy', title: 'Para uma grávida', content: [
            { kind: 'paragraph', text: 'Contacte o médico de família, a enfermeira de saúde materna ou o Centro de Saúde onde a gravidez está a ser acompanhada. Peça a emissão de cheque-dentista para grávida. Normalmente, estão disponíveis até 3 cheques durante a gravidez.' }
          ] },
          { id: 'elderly-csi', title: 'Para um idoso com CSI', content: [
            { kind: 'paragraph', text: 'É necessário ser beneficiário do Complemento Solidário para Idosos. No Centro de Saúde, verificam o direito ao benefício e emitem o cheque-dentista através do PNPSO.' }
          ] },
          { id: 'hiv', title: 'Para pessoas com VIH/SIDA', content: [
            { kind: 'paragraph', text: 'A via decorre normalmente através do médico do SNS que acompanha o paciente. Não é necessário discutir o diagnóstico com uma clínica privada antes da emissão do vale: obtenha primeiro o encaminhamento/cheque no SNS.' }
          ] }
        ] }
      ]
    },
    {
      id: 'use-it',
      title: 'Como usar o vale no dentista',
      content: [
        { kind: 'paragraph', text: 'Depois de emitido o cheque-dentista, escolha um dentista da lista oficial PNPSO. Nem todas as clínicas privadas aceitam cheques estatais, mesmo que trabalhem com Médis, Multicare ou outros seguros.' },
        { kind: 'checklist', items: [
          'Abra a lista de profissionais aderentes no portal Saúde Oral / PNPSO.',
          'Telefone para a clínica e diga diretamente: “Tenho um cheque-dentista do PNPSO”.',
          'Confirme se o médico aceita exatamente a sua categoria de cheque: criança, grávida, idoso CSI, VIH/SIDA.',
          'Leve para a consulta um documento de identificação, o número de utente e o próprio cheque-dentista: em papel ou o número eletrónico.',
          'Antes do procedimento, pergunte o que é totalmente coberto pelo cheque-dentista e o que será pago.',
          'Não assine o consentimento para serviços pagos se não tiver percebido o preço.',
          'Depois da consulta, confirme se é necessário outro cheque-dentista e quem o ativa — o dentista ou o Centro de Saúde.'
        ] },
        { kind: 'warning', text: 'Se o prazo de validade tiver expirado, o dentista não conseguirá validar o vale. Não adie a marcação: em Lisboa, no Porto e nos subúrbios, os dentistas aderentes podem ter listas de espera.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Problemas frequentes para estrangeiros',
      content: [
        { kind: 'checklist', items: [
          'Não tem número de utente: primeiro inscreva-se no SNS através do Centro de Saúde da sua área de residência.',
          'A criança está numa escola privada ou internacional: pergunte no Centro de Saúde se existe uma via PNPSO fora da emissão escolar.',
          'A gravidez é acompanhada apenas numa clínica privada: para o cheque-dentista, normalmente é necessário acompanhamento ou registo da gravidez no SNS.',
          'Um familiar idoso tem baixos rendimentos, mas não pediu CSI: sem Complemento Solidário para Idosos, o direito ao cheque-dentista de “idoso” pode não surgir.',
          'A clínica pede pagamento adicional: isto só é possível para serviços fora da cobertura PNPSO; peça um orçamento antes do tratamento.',
          'Não encontra dentista perto: alargue a pesquisa por concelho e freguesias vizinhas no portal PNPSO.',
          'Idioma: ao marcar, use a frase simples “Quero marcar consulta com cheque-dentista PNPSO”.'
        ] },
        { kind: 'paragraph', text: 'Se no Centro de Saúde disserem que “não tem direito”, peça que esclareçam o motivo por categoria PNPSO: idade da criança, grávida, CSI ou VIH/SIDA. Por vezes, o problema não está no direito em si, mas no facto de os dados de utente, gravidez, escola ou CSI ainda não terem sido atualizados no sistema.' }
      ]
    }
  ],
  costs: [
    { label: 'Valor nominal do Cheque-Dentista normal', amountEUR: 45, note: 'Pago pelo SNS diretamente ao dentista aderente ao PNPSO; o paciente não recebe dinheiro.' },
    { label: 'Pagamento adicional pelo paciente', amountEURMin: 0, amountEURMax: 0, note: 'Para procedimentos cobertos pelo PNPSO, não deve existir pagamento adicional. Serviços fora da cobertura só são pagos após acordo sobre o preço.' },
    { label: 'Consulta privada sem vale', amountEURMin: 40, amountEURMax: 90, note: 'Valor indicativo de mercado; nas grandes cidades e com especialistas pode ser mais caro.' }
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
